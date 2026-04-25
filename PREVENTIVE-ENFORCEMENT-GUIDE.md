# Preventive Delegation Enforcement Guide

**Status:** ✅ **ACTIVE**  
**Date:** 2026-04-25  
**Enforcement Level:** PREVENTIVE (blocks violations before they occur)

---

## How It Works

### The Prevention Flow

```
Chief wants to spawn sub-agent
         ↓
Runs pre_spawn_check.sh <label>
         ↓
    ┌─────────────┐
    │  Label OK?  │
    └─────────────┘
         │
    ┌────┴────┐
    │         │
   YES       NO
    │         │
    ↓         ↓
✅ ALLOW   ⛔ BLOCKED
Proceed   Abort + Educate
```

---

## Scripts Overview

### 1. pre_spawn_check.sh (The Guard)
**Location:** `~/.openclaw/pre_spawn_check.sh`  
**Purpose:** Validate spawn labels BEFORE spawning

**Usage:**
```bash
~/.openclaw/pre_spawn_check.sh "<label>"
```

**Returns:**
- Exit code `0` → Label is safe, proceed with spawn
- Exit code `1` → Label violates rules, ABORT spawn

**Example - Blocked:**
```bash
$ ~/.openclaw/pre_spawn_check.sh "frontend-fixes"

⛔ BLOCKED: Cannot spawn sub-agent with label 'frontend-fixes'
Reason: Matches existing team member 'frontend'

✅ CORRECT APPROACH:
   Use sessions_send() to delegate to agent:frontend:main
```

**Example - Allowed:**
```bash
$ ~/.openclaw/pre_spawn_check.sh "utility-data-formatter"

✅ ALLOWED: Label starts with allowed prefix 'utility-'
```

---

### 2. safe_spawn.sh (The Wrapper)
**Location:** `~/.openclaw/safe_spawn.sh`  
**Purpose:** Combines validation + spawn in one command

**Usage:**
```bash
~/.openclaw/safe_spawn.sh --label "my-task" --task "Do something useful"
```

**Full Options:**
```bash
~/.openclaw/safe_spawn.sh \
  --label "utility-quick-test" \
  --task "Run a quick data formatting task" \
  --timeout 300 \
  --mode "run" \
  --runtime "subagent"
```

**What it does:**
1. Runs pre_spawn_check.sh automatically
2. If blocked → Aborts and shows correct delegation pattern
3. If allowed → Executes the spawn (or provides manual instructions)
4. Logs all attempts to `~/.openclaw/logs/spawn-history.log`

---

### 3. check-delegation.sh (The Auditor)
**Location:** `~/.openclaw/check-delegation.sh`  
**Purpose:** Scan for any violations that escaped prevention

**Usage:**
```bash
~/.openclaw/check-delegation.sh
```

**Returns:**
- Exit code `0` → No violations found
- Exit code `1` → Violations detected, cleanup recommended

**Run Schedule:** Hourly via cron job

---

## Allowed Label Patterns

### ✅ ALLOWED Prefixes
Sub-agents with these prefixes are **automatically allowed**:

| Prefix | Example | Use Case |
|--------|---------|----------|
| `utility-` | `utility-data-formatter` | One-off utility tasks |
| `temp-` | `temp-research-task` | Temporary background work |
| `one-off-` | `one-off-log-parser` | Single-use tools |
| `quick-` | `quick-api-test` | Fast, disposable tasks |
| `portfolio-` | `portfolio-deployment-fixes` | Project-specific work |

### ❌ FORBIDDEN Patterns
These patterns are **always blocked**:

| Pattern | Examples | Reason |
|---------|----------|--------|
| Contains role names | `frontend-fix`, `backend-api`, `designer-work` | Matches existing specialists |
| Case variations | `FRONTEND-work`, `Backend-helper` | Case-insensitive matching |
| Partial matches | `my-frontend-tool`, `backend-v2` | Partial matching enabled |
| Hyphenated roles | `front-end-dev`, `back-end-api` | Common variants covered |

---

## Logging System

### Violation Log
**Location:** `~/.openclaw/logs/delegation-violations.log`

**Format:**
```
[2026-04-25T02:50:00+08:00] BLOCKED: frontend-fixes → Matches: frontend
[2026-04-25T02:51:00+08:00] ALLOWED: utility-data-formatter
[2026-04-25T02:52:00+08:00] BLOCKED: backend-api-work → Matches: backend
```

### Spawn History Log
**Location:** `~/.openclaw/logs/spawn-history.log`

**Format:**
```
[2026-04-25T02:50:00+08:00] BLOCKED: frontend-fixes
[2026-04-25T02:51:00+08:00] ALLOWED: utility-data-formatter
[2026-04-25T02:52:00+08:00] MANUAL: portfolio-deployment-fixes
```

---

## Integration with Existing System

### Layer Cake Enforcement

| Layer | Tool | Type | Timing |
|-------|------|------|--------|
| **Layer 1** | `pre_spawn_check.sh` | ✅ PREVENTIVE | Before spawn |
| **Layer 2** | `safe_spawn.sh` | ✅ PREVENTIVE | During spawn |
| **Layer 3** | SOUL.md instructions | ⚠️ GUIDANCE | Always active |
| **Layer 4** | `check-delegation.sh` | 🔍 DETECTIVE | Hourly audit |
| **Layer 5** | Cron monitor | 🔍 DETECTIVE | Hourly alert |
| **Layer 6** | `cleanup-subagents.sh` | 🧹 CLEANUP | Post-violation |
| **Layer 7** | Human oversight | 👁️ OVERSIGHT | Continuous |

---

## Testing the System

### Test 1: Block Forbidden Label
```bash
cd ~/.openclaw
./pre_spawn_check.sh "frontend-specialist-work"
# Expected: Exit code 1, blocked message
```

### Test 2: Allow Safe Label
```bash
cd ~/.openclaw
./pre_spawn_check.sh "utility-test-runner"
# Expected: Exit code 0, allowed message
```

### Test 3: Full Safe Spawn Flow
```bash
cd ~/.openclaw
./safe_spawn.sh --label "test-allowed" --task "Test task"
# Expected: Pre-flight passes, spawn executed or manual instructions shown
```

### Test 4: Verify Audit Script
```bash
cd ~/.openclaw
./check-delegation.sh
# Expected: Scans sessions.json, reports status
```

---

## What Happens When I Try to Spawn Illegally?

### Scenario: Chief tries to spawn "frontend-portfolio-fixes"

**Step 1: Pre-flight Check**
```bash
$ ./pre_spawn_check.sh "frontend-portfolio-fixes"

🔍 Checking spawn request: 'frontend-portfolio-fixes'

⛔ BLOCKED: Cannot spawn sub-agent with label 'frontend-portfolio-fixes'

Reason: Matches existing team member 'frontend'

✅ CORRECT APPROACH:
   Use sessions_send() to delegate to agent:frontend:main

Example:
   sessions_send({
     sessionKey: "agent:frontend:main",
     message: "Task brief here...",
     timeoutSeconds: 60
   })

💡 WHY: The full agent team is already running.
   Spawning clones bypasses their expertise,
   workspace context, and AGENTS.md configuration.
```

**Step 2: Spawn Aborted**
- Exit code `1` prevents script continuation
- Violation logged to `logs/delegation-violations.log`
- Chief must use delegation instead

**Step 3: Correct Action Taken**
```javascript
sessions_send({
  sessionKey: "agent:frontend:main",
  message: "Fix portfolio deployment blockers...",
  timeoutSeconds: 60
})
```

---

## Failure Modes

### What If I Bypass the Scripts?

If Chief calls `sessions_spawn` directly without using the scripts:

1. **SOUL.md still prohibits it** (behavioral constraint)
2. **Hourly cron will detect it** (within 1 hour)
3. **Human can catch it** (you review sessions periodically)
4. **Cleanup script removes it** (easy remediation)

**Defense in depth** means even if prevention fails, detection and cleanup are ready.

### What If Scripts Have Bugs?

- **False Positive** (blocks safe spawn): Review allowed prefixes, adjust patterns
- **False Negative** (allows bad spawn): Hourly audit catches it, cleanup removes it
- **Script Fails to Run:** Fall back to SOUL.md guidance + hourly detection

---

## Best Practices

### For Chief of Staff
1. ✅ Always run `pre_spawn_check.sh` before spawning
2. ✅ Use `safe_spawn.sh` wrapper when possible
3. ✅ Choose descriptive, non-role labels (e.g., "portfolio-deployment-fixes")
4. ✅ Prefer delegation (`sessions_send`) over spawning
5. ✅ Log all spawn decisions in session notes

### For Mike (Oversight)
1. ✅ Review `logs/delegation-violations.log` weekly
2. ✅ Run `check-delegation.sh` before major milestones
3. ✅ Check session list in UI periodically
4. ✅ Call out violations immediately when seen

### For Specialist Agents
1. ✅ Read your MEMORY.md for delegation rules
2. ✅ Do YOUR work — don't spawn clones either
3. ✅ Report if you see Chief spawning illegally

---

## Comparison: Before vs After

### Before (Reactive Only)
```
❌ Chief spawns illegal clone
   ↓
⏱️  Wait up to 1 hour
   ↓
🔍 Cron detects violation
   ↓
📢 Alert sent to Mike
   ↓
🧹 Manual cleanup required
```

### After (Preventive + Reactive)
```
🤔 Chief considers spawning clone
   ↓
🛡️ pre_spawn_check.sh BLOCKS it
   ↓
📚 Education provided
   ↓
✅ Chief delegates correctly
```

**Result:** Violations prevented at the source, not cleaned up after the fact.

---

## Future Enhancements

### Potential Improvements
1. **OpenClaw Plugin** - Native integration with session spawn API
2. **Pre-commit Hook** - Run check before accepting assistant output
3. **Dashboard** - Real-time visualization of spawn activity
4. **Auto-Kill** - Automatically terminate violations detected by cron
5. **Quota System** - Limit spawns per day/week

### To Implement These
Would require:
- OpenClaw core modifications
- Custom plugin development
- Or policy engine feature request

---

## Quick Reference

### I Want to Spawn a Sub-Agent
```bash
# Step 1: Check if label is allowed
~/.openclaw/pre_spawn_check.sh "my-label"

# Step 2: If allowed, use safe_spawn wrapper
~/.openclaw/safe_spawn.sh --label "my-label" --task "Do the thing"

# OR manually in chat (if CLI doesn't support spawn)
sessions_spawn({
  label: "my-label",
  task: "Do the thing",
  timeoutSeconds: 300
})
```

### I Want to Check for Violations
```bash
~/.openclaw/check-delegation.sh
```

### I Want to See Violation History
```bash
cat ~/.openclaw/logs/delegation-violations.log
```

### I Need to Clean Up Old Clones
```bash
~/.openclaw/cleanup-subagents.sh
```

---

*Last Updated: 2026-04-25 02:55 GMT+8*  
*Enforcement Status: ✅ PREVENTIVE ACTIVE*
