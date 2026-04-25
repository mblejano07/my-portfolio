# Session Timeout Prevention - Permanent Fix

## 🔍 Root Cause Analysis (2026-04-25)

### Problem
Specialist sessions (Frontend, Designer, Orchestrator, etc.) became unresponsive and timed out on `sessions_send` calls, even after gateway restart.

### Root Cause
**Session Queue Backlog + Context Overload**

From gateway logs:
```json
{"subsystem":"diagnostic","1":"stuck session: sessionId=frontend state=processing age=415s queueDepth=0"}
{"subsystem":"diagnostic","1":"lane wait exceeded: lane=session:agent:frontend:main waitedMs=294924 queueAhead=2"}
```

**What happened:**
1. Sessions accumulated too many messages (Frontend: 488+ live messages)
2. Lossless-claw compaction couldn't keep up with context management
3. Sessions entered "processing" state but never completed
4. Gateway restart preserved stuck session state instead of clearing it
5. New messages queued behind stuck processing state → timeout

### Contributing Factors
- **Large conversation history** - 488 messages for Frontend session
- **Continuous compaction loops** - Context management consuming processing time
- **No session timeout recovery** - Stuck sessions never auto-recovered
- **Gateway restart preserves state** - Didn't clear stuck processing state

---

## ✅ Permanent Fixes

### Fix 1: Session Heartbeat Monitoring (Preventive)

**Add hourly session health check cron job:**

```bash
# Add to crontab or OpenClaw cron
*/30 * * * * openclaw cron wake --text "Session health check - respond if active"
```

**Purpose:** Detect stuck sessions early before they accumulate backlog

---

### Fix 2: Session Reset Protocol (Corrective)

**When sessions become unresponsive:**

1. **Check session status:**
   ```bash
   openclaw sessions list --limit 20 --includeLastMessage
   ```

2. **Identify stuck sessions:**
   - Look for `status: "running"` but `updatedAt` is old
   - Check gateway logs for "stuck session" warnings

3. **Kill and restart stuck sessions:**
   ```bash
   # For sub-agents:
   openclaw subagents kill --target <session-id>
   
   # For persistent agents (requires gateway restart):
   openclaw gateway restart
   # Then wait for sessions to reinitialize
   ```

4. **Verify recovery:**
   ```bash
   openclaw sessions send --sessionKey agent:frontend:main --message "Health check - respond"
   ```

---

### Fix 3: Message Batching (Preventive)

**When sending to multiple specialists:**
- ❌ Don't send 5 messages in rapid succession
- ✅ Send one message, wait for acknowledgment, then send next

**Example:**
```javascript
// BAD - floods session queue
sessions_send(orchestrator, task1)
sessions_send(designer, task2)
sessions_send(frontend, task3)  // May timeout

// GOOD - sequential with acknowledgment
result1 = sessions_send(orchestrator, task1, timeout: 60s)
if (result1.ok) {
  result2 = sessions_send(designer, task2, timeout: 60s)
  if (result2.ok) {
    result3 = sessions_send(frontend, task3, timeout: 60s)
  }
}
```

---

### Fix 4: Context Size Limits (Preventive)

**Configure compaction thresholds in `openclaw.json`:**

```json
{
  "compaction": {
    "mode": "aggressive",  // Changed from "safeguard"
    "maxMessages": 200,     // Force compaction at 200 messages
    "targetMessages": 100   // Compact down to 100 messages
  }
}
```

**Purpose:** Prevent sessions from accumulating hundreds of messages

---

### Fix 5: Session Timeout Configuration (Preventive)

**Increase timeout for complex tasks:**
- Default: 60 seconds
- Complex tasks: 120-180 seconds
- Sprint planning: 300 seconds

**When to use longer timeouts:**
- First message to sleeping session (wake-up time)
- Complex analysis tasks
- Multi-file code generation
- Gateway restart recovery period

---

## 📋 Recovery Checklist (When Sessions Timeout)

### Immediate Actions:
- [ ] Check gateway status: `openclaw gateway status`
- [ ] Check session list: `openclaw sessions list --limit 20`
- [ ] Check gateway logs: `tail -100 /tmp/openclaw/openclaw-*.log`
- [ ] Look for "stuck session" warnings

### If Gateway is Online but Sessions Timeout:
- [ ] Restart gateway: `openclaw gateway restart`
- [ ] Wait 30 seconds for sessions to reinitialize
- [ ] Send health check message with 120s timeout
- [ ] If still unresponsive, proceed to session reset

### If Sessions Still Unresponsive After Gateway Restart:
- [ ] Document stuck session IDs
- [ ] Use utility sub-agents for immediate work (allowed per SOUL.md)
- [ ] File issue with session logs
- [ ] Consider session migration to fresh instances

---

## 🎯 Best Practices (Going Forward)

### For Chief of Staff (Coordinator Role):

1. **Wake sessions before major handoffs:**
   ```
   Send health check 5 minutes before project handoff
   ```

2. **Use sequential delegation:**
   ```
   Chief → Buddy (wait for response)
   Buddy → Orchestrator (wait for response)
   Orchestrator → Specialists (one at a time)
   ```

3. **Monitor session health:**
   ```
   Check sessions_list every 2 hours during active projects
   Watch for "stuck session" warnings in logs
   ```

4. **Set appropriate timeouts:**
   ```
   Health check: 60s
   Task assignment: 90s
   Sprint planning: 120s
   Complex analysis: 180s
   ```

5. **Document session issues:**
   ```
   Log timeout incidents in MEMORY.md
   Track patterns (time of day, specific agents, task types)
   ```

---

## 📊 Monitoring Dashboard

**Session Health Metrics to Track:**

| Metric | Healthy | Warning | Critical |
|--------|---------|---------|----------|
| Message queue depth | 0-2 | 3-5 | 6+ |
| Session age (since last response) | <5 min | 5-15 min | >15 min |
| Compaction duration | <1s | 1-5s | >5s |
| Gateway probe latency | <100ms | 100-500ms | >500ms |

---

## 🔧 Configuration Changes Made

### openclaw.json Updates:
```json
{
  "compaction": {
    "mode": "aggressive",
    "maxMessages": 200,
    "targetMessages": 100
  },
  "session": {
    "timeoutSeconds": 120,
    "healthCheckIntervalMinutes": 30
  }
}
```

### Cron Jobs Added:
```json
{
  "name": "Session Health Check",
  "schedule": "every 30 minutes",
  "payload": {
    "kind": "systemEvent",
    "text": "Session health check - all agents respond with status"
  }
}
```

---

**Document Created:** 2026-04-25 17:48 GMT+8  
**Author:** Chief of Staff  
**Status:** Implemented
