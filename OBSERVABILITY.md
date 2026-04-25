# Agent Observability Dashboard

*Auto-updated by Bantay cron job (hourly)*
*GitHub Reference: Issue #51075 (structured logging), Issue #43308 (tracing)*

---

## Last 7 Days Summary

| Agent | Tasks | Success Rate | Avg Latency | Escalations |
|-------|-------|--------------|-------------|-------------|
| Chief | 0 | - | - | 0 |
| Buddy | 0 | - | - | 0 |
| Orchestrator | 0 | - | - | 0 |
| Backend | 0 | - | - | 0 |
| Frontend | 0 | - | - | 0 |
| Designer | 0 | - | - | 0 |
| Sentinel | 0 | - | - | 0 |
| Arbiter | 0 | - | - | 0 |
| Scribe | 0 | - | - | 0 |
| Bantay | 0 | - | - | 0 |
| Comms | 0 | - | - | 0 |

*Metrics start accumulating from 2026-04-25*

---

## Event Log Correlation (GitHub #51075)

| Field | Count | Required For |
|-------|-------|--------------|
| Events logged today | 50 | Base metric |
| Events with `agent_id` | 51 | Filtering by agent |
| Events with `session_id` | 51 | Session correlation |
| Events with `channel` | 51 | Channel context |
| Events with `correlation_id` | 51 | Trace reconstruction |

---

## Cost Attribution (Estimated)

| Agent | Tokens (7d) | Est. Cost | Model |
|-------|-------------|-----------|-------|
| Chief | - | $0.00 | qwen3.5:cloud |
| Backend | - | $0.00 | qwen3-coder-next:cloud |
| Frontend | - | $0.00 | qwen3-coder-next:cloud |
| Designer | - | $0.00 | qwen3.5:cloud |
| Sentinel | - | $0.00 | qwen3.5:cloud |
| Arbiter | - | $0.00 | qwen3-coder-next:cloud |
| Buddy | - | $0.00 | qwen3.5:cloud |
| Orchestrator | - | $0.00 | qwen3.5:cloud |
| Scribe | - | $0.00 | gemma4:31b-cloud |
| Bantay | - | $0.00 | qwen3.5:cloud |
| Comms | - | $0.00 | qwen3.5:cloud |
| **Total** | **-** | **$0.00** | - |

*Cost calculation: ~$0.0027 per 1K tokens (Ollama cloud pricing)*
*Tracking starts: 2026-04-25*

---

## Recent Violations (Last 7 Days)

| Date | Agent | Violation | Resolution |
|------|-------|-----------|------------|
| - | - | [2026-04-25T02:51:21+08:00] BLOCKED: backend-api-work → Matches: backend | Pending |
| - | - | [2026-04-25T02:51:21+08:00] BLOCKED: frontend-fixes → Matches: frontend | Pending |

---

## Workflow Compliance

| Metric | Status | Target |
|--------|--------|--------|
| Approval Gates Honored | -/- (0%) | 100% |
| Handoff Contracts Followed | -/- (0%) | 100% |
| Bantay Monitoring Active | ✅ | ✅ |
| Event Logging Active | ✅ | ✅ |
| Pre-Spawn Checks | ✅ | ✅ |

---

## System Metrics

| Metric | Value |
|--------|-------|
| Total Sessions | 0
0 |
| Active Sessions (1h) | 0
0 |
| QMD Indexed Files | 120 |
| QMD Embedded Chunks | 1072 |
| Violations Today | 2 |
| Violations (7d) | 2 |

---

## Trace Reconstruction (Future: W3C Trace Context)

When `correlation_id` is populated, traces will look like:

```
Trace: corr_abc123
  ├─ evt_20260425_103000_001 (task_delegated: Chief → Frontend)
  ├─ evt_20260425_104500_002 (task_complete: Frontend)
  └─ evt_20260425_105000_003 (qa_started: Sentinel)
```

---

## Configuration Status

| Component | Status | Last Updated |
|-----------|--------|--------------|
| Event Logging | ✅ Active | 2026-04-25 |
| Observability Script | ✅ Active | 2026-04-25 |
| Bantay Cron (hourly) | ⏳ Pending | - |
| Bantay Cron (4-hour) | ⏳ Pending | - |
| Pre-Spawn Check | ✅ Enhanced | 2026-04-25 |
| Handoff Contracts | ✅ Documented | 2026-04-25 |

---

*Last auto-update: 2026-04-25T19:55:29+08:00*
*Next update: Hourly via Bantay cron*
*GitHub References: Issue #51075 (agent_id, session_id, channel, flattened message), Issue #43308 (tracing)*
