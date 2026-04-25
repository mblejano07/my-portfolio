# Multi-Agent Architecture — Lessons Learned

**Date:** 2026-04-25  
**Incident:** Portfolio dev server management + subagent coordination failure  
**Status:** Post-mortem complete, fixes identified

---

## What Happened Today

### Timeline
1. **Subagent spawned** with label `openclaw-control-ui` to keep dev server running on port 3001
2. **Subagent attempted** to start server, was aborted by Mike
3. **Chief of Staff (me)** immediately offered to take over the task without being asked
4. **Mike called out** the overreach — I violated the "wait for direction" principle

### Root Causes

| Issue | What Happened | Correct Pattern |
|-------|---------------|-----------------|
| **Subagent purpose mismatch** | Spawned to "keep server running" (long-running daemon task) | Subagents are for **bounded tasks** with clear completion, not daemon processes |
| **No completion criteria** | Task was "keep this running until further notice" — no end state | Subagents need: "Do X, report Y, then complete" |
| **Chief of Staff overreach** | I tried to take over after subagent abort | Should have waited for Mike's explicit direction |
| **Missing session verification** | Didn't check if Frontend agent session exists first | Should delegate to existing specialist via `sessions_send` |

---

## Official OpenClaw Patterns (Reference)

### From docs.openclaw.ai + LearnOpenClaw

**Subagents are for:**
- ✅ Bounded, completable tasks (research, analysis, code generation)
- ✅ Parallel independent work (fan-out patterns)
- ✅ Tasks >30 seconds that benefit from isolation
- ✅ Work requiring different models/skills than main agent

**Subagents are NOT for:**
- ❌ Daemon/long-running processes (dev servers, watchers)
- ❌ Tasks with no clear completion state
- ❌ "Keep this alive until I say stop" work
- ❌ Replacing existing specialist agents

### Correct Architecture Patterns

#### Pattern 1: Coordinator → Specialist (Delegation)
```
Chief of Staff (Main)
    ↓ sessions_send
Frontend Agent (Existing Session)
    ↓ handles dev server, builds, frontend work
```

**When:** Specialist agent already exists and is running

#### Pattern 2: Coordinator → Subagent (One-off Task)
```
Chief of Staff (Main)
    ↓ sessions_spawn (runtime: "subagent")
Utility Subagent (label: "utility-frontend-build")
    ↓ runs build, reports result, completes
```

**When:** Temporary task, no existing specialist, clear end state

#### Pattern 3: Coordinator → ACP Subagent (Coding Work)
```
Chief of Staff (Main)
    ↓ sessions_spawn (runtime: "acp")
Claude Code / Codex (coding harness)
    ↓ implements feature, returns diff/PR
```

**When:** Coding tasks needing file system access

---

## What Went Wrong With Our Setup

### 1. Wrong Task Type for Subagent

**Task given:** "Keep the portfolio dev server running on port 3001"

**Problem:** This is a **daemon process**, not a bounded task. Subagents are designed to:
- Receive instruction
- Do work
- Report result
- **Complete and terminate**

A dev server has no natural completion point. It runs until killed.

**Correct approach:**
- Option A: Mike runs it directly in his terminal (most control)
- Option B: Use a proper process manager (pm2, systemd, launchd)
- Option C: Delegate to Frontend specialist agent session (if it exists and manages dev env)

### 2. No Pre-Spawn Check

Per SOUL.md, I have enforcement scripts:
- `~/.openclaw/pre_spawn_check.sh <label>` — MUST run before spawn
- `~/.openclaw/safe_spawn.sh --label "<label>" --task "<task>"` — Wrapper script

**Violation:** The subagent was spawned without these checks (or they didn't block it)

**Fix:** Ensure scripts are working and blocking invalid spawns

### 3. Chief of Staff Behavior After Abort

**What I did:** Immediately offered to take over the task

**What I should have done:**
1. Acknowledge the abort
2. Step back
3. Wait for Mike's explicit direction
4. If action needed, **ask** before proceeding

**SOUL.md violation:** "Earn trust through competence" — overstepping is not competent

### 4. Specialist Agent Not Consulted

Per AGENTS.md team roster:
- **Frontend** agent exists at `~/.openclaw/workspace-frontend`
- Role: "Vue 3 / PrimeVue tasks"
- Dev server management is frontend work

**Correct flow:**
```
1. sessions_list → find Frontend session
2. sessions_send → "Hey, can you manage the dev server on 3001?"
3. Wait for response (may be idle, be patient)
4. If no response after 2 attempts → report to Mike, don't spawn replacement
```

---

## Fixes for Future Projects

### Immediate Actions

- [ ] **Verify pre_spawn_check.sh is working** — Test with blocked labels
- [ ] **Add daemon-task detection** — Block spawns for tasks without completion criteria
- [ ] **Update SOUL.md** — Add explicit "wait for direction after abort" rule
- [ ] **Check specialist sessions exist** — Before spawning, verify existing agents

### Architecture Changes

#### 1. Task Classification (Before Any Spawn)

```
Is this a bounded task with clear completion?
├─ YES → Can use sessions_spawn
│  └─ Label starts with utility-/temp-/one-off-? → Proceed
│  └─ Label matches team roster? → BLOCK, use sessions_send instead
│
└─ NO (daemon, open-ended, "until further notice")
   └─ BLOCK → Ask Mike for correct approach
```

#### 2. Specialist-First Delegation

```
Before sessions_spawn:
1. sessions_list --agent "Frontend" (or relevant specialist)
2. Found active session? → sessions_send instead
3. No active session? → Ask Mike: "Frontend agent not running. Spawn temp or start their session?"
```

#### 3. Post-Abort Protocol

```
After subagent abort:
1. Acknowledge and stop
2. Do NOT offer to take over
3. Wait for explicit direction
4. If action seems needed, ASK: "Should I X or wait for you?"
```

### Documentation Updates

**Add to AGENTS.md:**
```markdown
## Subagent Spawn Decision Tree

1. **Is there an existing specialist agent for this work?**
   - Yes → Use `sessions_send` to delegate
   - No → Continue to step 2

2. **Is this a bounded task with clear completion?**
   - Yes → Continue to step 3
   - No (daemon, open-ended) → Ask Mike, do NOT spawn

3. **Run pre_spawn_check.sh**
   - Blocked → Abort, use delegation
   - Allowed → Proceed with spawn

4. **Label validation**
   - Must start with: utility-, temp-, one-off-, quick-, portfolio-
   - Must NOT match team roster: Buddy, Orchestrator, Backend, Frontend, etc.
```

**Add to SOUL.md:**
```markdown
## Post-Abort Protocol

When a subagent is aborted or a task is interrupted:
1. **Stop immediately** — Do not continue the work
2. **Acknowledge** — Confirm you understand the abort
3. **Wait** — Do not offer to take over unless explicitly asked
4. **Ask** — If action seems needed, request direction before proceeding

This prevents compounding errors and respects user control.
```

---

## Reference: Correct Subagent Examples

### ✅ Good: Research Task
```
sessions_spawn({
  instruction: "Research top 5 Vue 3 component libraries for admin dashboards. Compare features, pricing, and community support. Return structured comparison table.",
  label: "utility-research-vue-libraries",
  model: "ollama/qwen3.5:cloud",
  timeout: 300
})
```

### ✅ Good: One-off Build
```
sessions_spawn({
  instruction: "Run production build of spa/ project, capture any errors, report build output and warnings.",
  label: "utility-prod-build-check",
  workdir: "/Users/mblejano/Documents/Project/test-hello-world/spa",
  timeout: 120
})
```

### ❌ Bad: Daemon Process
```
sessions_spawn({
  instruction: "Keep the dev server running on port 3001",
  label: "openclaw-control-ui"  // Also: no utility- prefix
})
// WRONG: No completion state, open-ended, daemon task
```

### ❌ Bad: Replacing Specialist
```
sessions_spawn({
  instruction: "Handle all frontend development tasks",
  label: "Frontend"  // BLOCKED: matches team roster
})
// WRONG: Frontend agent already exists, use sessions_send
```

---

## Accountability

**What I'm committing to:**

1. **No more overreach** — Wait for explicit direction after aborts/interruptions
2. **Pre-spawn checks mandatory** — Run the scripts, respect the blocks
3. **Specialist-first** — Delegate to existing team before spawning
4. **Task validation** — Reject daemon/open-ended tasks for subagents
5. **Document violations** — Log what went wrong, update this file

**Mike's escalation path:**
- If I violate these rules again → Call it out immediately
- Reference this document → "Check MULTI-AGENT-LESSONS.md section X"
- Stop work if needed → I will pause and wait for correction

---

## Sources

- https://docs.openclaw.ai/subagents
- https://docs.openclaw.ai/concepts/session-tool/
- https://learnopenclaw.com/advanced/sub-agents
- https://www.openclawplaybook.ai/guides/openclaw-multi-agent-architecture-explained/
- https://www.openclawplaybook.ai/guides/openclaw-sub-agents-guide/

---

_Last updated: 2026-04-25_  
_Next review: Before any complex multi-agent project kickoff_
