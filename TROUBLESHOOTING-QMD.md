# QMD Memory Backend Troubleshooting

**Date:** 2026-04-25  
**Status:** Blocked by OpenClaw bug  
**OpenClaw Version:** 2026.4.23  
**QMD Version:** 2.1.0

---

## Goal

Enable QMD as the memory backend for OpenClaw to provide local-first semantic search without cloud API dependencies.

---

## Configuration Applied

```json
{
  "memory": {
    "backend": "qmd",
    "citations": "auto",
    "qmd": {
      "sessions": { "enabled": true },
      "scope": {
        "default": "allow",
        "rules": [
          { "action": "allow", "match": { "chatType": "direct" } },
          { "action": "allow", "match": { "chatType": "channel" } }
        ]
      },
      "limits": { "timeoutMs": 120000 }
    }
  },
  "plugins": {
    "allow": ["openclaw-web-search", "ollama", "whatsapp", "acpx", "lossless-claw"],
    "entries": {
      "memory-core": { "enabled": false }
    }
  },
  "agents": {
    "defaults": {
      "memorySearch": {
        "enabled": true,
        "fallback": "none",
        "sources": ["memory", "sessions"],
        "query": { "hybrid": { "enabled": true } }
      }
    }
  }
}
```

---

## What Works ✅

| Component | Status | Notes |
|-----------|--------|-------|
| QMD CLI | ✅ Working | `qmd search`, `qmd collection list` work |
| Collections | ✅ Indexed | 76 files, 124 vectors embedded |
| OpenClaw QMD init | ✅ Armed | Logs show "qmd memory startup initialization armed" |
| Direct QMD queries | ✅ Working | `qmd search "query" --xdg-dir ~/.openclaw/agents/main/qmd/xdg-config/qmd` |

---

## What Fails ❌

| Component | Status | Error |
|-----------|--------|-------|
| `memory_search` tool | ❌ Unavailable | "unknown entries (memory_search, memory_get)" |
| OpenClaw status | ❌ Shows "unavailable" | `│ Memory │ enabled (plugin memory-core) · unavailable │` |
| Tool registration | ❌ Failed | Tools not registered despite config |

---

## Root Cause

**OpenClaw bug:** The `memory_search` tool does not properly route to the QMD backend even with correct configuration. This is a known issue documented in multiple GitHub issues:

- [#9645](https://github.com/openclaw/openclaw/issues/9645) — "memory_search never calls qmd search when using QMD backend" (closed as completed, but issue persists in 2026.4.23)
- [#11981](https://github.com/openclaw/openclaw/issues/11981) — "memory_search tool doesn't use qmd backend when memory.backend=qmd" (closed as duplicate)
- [#63317](https://github.com/openclaw/openclaw/issues/63317) — "QMD memory index healthy, but memory_search always returns empty results"

**Key finding from issue #9645:**
> When `memory.backend = "qmd"`, the `memory_search` tool should route to QMD subprocess, but instead it falls back to the builtin SQLite provider which then fails looking for openai/google API keys.

The QMD sidecar is initialized but **`qmd search` is never invoked** by the gateway's memory tool implementation.

---

## Workarounds

### Option 1: Direct QMD CLI (Recommended for now)

```bash
# Search workspace memory
qmd search "your query" -c workspace-root

# Search session transcripts
qmd search "your query" -c main-sessions

# With OpenClaw's XDG paths
XDG_CONFIG_HOME=~/.openclaw/agents/main/qmd/xdg-config \
XDG_CACHE_HOME=~/.openclaw/agents/main/qmd/xdg-cache \
qmd search "your query"
```

### Option 2: Use `exec` tool in agent workflows

```json
{
  "tool": "exec",
  "command": "qmd search \"delegation rules\" -c workspace-root"
}
```

### Option 3: Revert to builtin SQLite backend

```json
{
  "memory": { "backend": "builtin" },
  "plugins": {
    "entries": { "memory-core": { "enabled": true } }
  }
}
```

---

## Resolution Paths

### Short-term
- Use `exec qmd search` workaround in agent workflows
- Document queries that need memory search

### Medium-term
- Wait for OpenClaw release with QMD memory tool fix
- Monitor GitHub issues #9645, #63317 for patches

### Long-term (if needed)
- Patch OpenClaw memory provider to properly invoke QMD search
- Contribute fix upstream

---

## Commands for Verification

```bash
# Check QMD status
qmd status

# List collections
qmd collection list

# Test search directly
qmd search "delegation rules"

# Check OpenClaw memory status
openclaw status | grep -i memory

# Check gateway logs for QMD init
openclaw logs | grep -i "qmd.*init"

# Verify tool registration
openclaw logs | grep "memory_search"
```

---

## Final Diagnosis (2026-04-25 15:39)

**QMD backend IS working correctly.** OpenClaw automatically created per-agent QMD collections:

```bash
$ XDG_CONFIG_HOME=~/.openclaw/agents/main/qmd/xdg-config \
  XDG_CACHE_HOME=~/.openclaw/agents/main/qmd/xdg-cache \
  qmd collection list

Collections (3):
  memory-dir-main      → 2 files
  sessions-main        → 39 files  
  memory-root-main     → 39 files
```

Direct QMD search works:
```bash
$ XDG_CONFIG_HOME=~/.openclaw/agents/main/qmd/xdg-config \
  XDG_CACHE_HOME=~/.openclaw/agents/main/qmd/xdg-cache \
  qmd search "delegation"

# Returns results from memory-root-main and sessions-main ✅
```

**The bug is isolated to:** OpenClaw's `memory_search` tool registration system. The tool shows as "unknown entries" even though:
- QMD binary is on PATH ✅
- QMD collections exist and are indexed ✅
- QMD search works via CLI ✅
- Gateway logs show "qmd memory startup initialization armed" ✅

**Root cause:** The OpenClaw gateway's tool registration layer is not properly connecting the QMD memory backend to the `memory_search`/`memory_get` tool interfaces. This is a **tool registration bug**, not a QMD configuration issue.

---

## Lessons Learned

1. **`memory.backend: "qmd"` is not enough** — The memory backend config tells OpenClaw which engine to use, but the `memory_search` tool implementation has a bug that prevents it from routing to QMD.

2. **Status display is misleading** — `openclaw status` shows "plugin memory-core" even when the plugin is disabled. This is a display bug.

3. **QMD CLI works independently** — QMD itself is fully functional; the issue is purely in OpenClaw's integration layer.

4. **Don't sink hours into core platform bugs** — When a bug is in the underlying platform (OpenClaw) and has multiple open GitHub issues, document and work around it rather than trying to fix it yourself.

---

## References

- [OpenClaw Memory Config Docs](https://docs.openclaw.ai/reference/memory-config)
- [QMD Backend Docs](https://docs.openclaw.ai/concepts/memory-qmd)
- [GitHub Issue #9645](https://github.com/openclaw/openclaw/issues/9645)
- [GitHub Issue #63317](https://github.com/openclaw/openclaw/issues/63317)
