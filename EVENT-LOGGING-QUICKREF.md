# Event Logging - Quick Reference Card

**Updated:** 2026-04-25 (Corrected Delegation Chain)  
**Status:** ✅ Production Ready

---

## 📋 Correct Delegation Chain

```
Chief → Buddy → Orchestrator → Specialist
  ↓       ↓         ↓            ↓
 🎯     🤝        📋          💻⚙️🎨
```

---

## 🪝 Workflow Hooks by Agent

### Chief of Staff (`agent:chief:main`)

```bash
export AGENT_ID="agent:chief:main"
source ~/.openclaw/scripts/workflow-hooks.sh

# Delegate requirement to Buddy
hook_requirement_delegated "req_001" "Build login page"

# Request approval from Mike
hook_approval_request "P0" "approval_001" "Architecture plan"

# Record Mike's decision
hook_approval_decision "P0" "approval_001" "Architecture plan" "approved"
```

### Buddy (`agent:buddy:main`)

```bash
export AGENT_ID="agent:buddy:main"
source ~/.openclaw/scripts/workflow-hooks.sh

# Analyze requirements
hook_requirements_analyzed "req_001" "3 user stories, 12 acceptance criteria"

# Hand off to Orchestrator
hook_handoff_to_orchestrator "req_001" "Ready for sprint planning"
```

### Orchestrator (`agent:orchestrator:main`)

```bash
export AGENT_ID="agent:orchestrator:main"
source ~/.openclaw/scripts/workflow-hooks.sh

# Plan sprint
hook_sprint_planned "sprint_001" "5 tasks created from req_001"

# Assign tasks to specialists
hook_task_assigned "agent:frontend:main" "task_001" "Build login component"
hook_task_assigned "agent:backend:main" "task_002" "Create API endpoints"
hook_task_assigned "agent:designer:main" "task_003" "Design UI mockups"
```

### Specialist Agents (Frontend/Backend/Designer/etc.)

```bash
export AGENT_ID="agent:frontend:main"
source ~/.openclaw/scripts/workflow-hooks.sh

# Start work
hook_agent_started "Building login component"

# Request handoff from another specialist
hook_handoff_request "agent:backend:main" "handoff_001" "Need API contract"

# Acknowledge handoff received
hook_handoff_complete "agent:frontend:main" "handoff_001" "API contract received"

# Complete task
hook_task_complete "task_001" "Login component deployed"
```

### Bantay (`agent:bantay:main`)

```bash
export AGENT_ID="agent:bantay:main"
source ~/.openclaw/scripts/workflow-hooks.sh

# Hourly compliance check
hook_compliance_check "audit_$(date +%H%M)" "Hourly delegation audit"

# Report violation
hook_violation_detected "agent:chief:main" "viol_001" "Spawned frontend clone"
```

---

## 🔍 Query Commands

```bash
# Recent events (last 20)
~/.openclaw/scripts/query-events.sh recent

# Events by agent
~/.openclaw/scripts/query-events.sh by-agent "agent:chief:main"

# Events by type
~/.openclaw/scripts/query-events.sh by-type "task_assigned"

# Summary statistics
~/.openclaw/scripts/query-events.sh summary
```

---

## 📊 Event Types

| Event Type | Agent | Description |
|------------|-------|-------------|
| `requirement_delegated` | Chief | Chief → Buddy |
| `requirements_analyzed` | Buddy | BA complete |
| `handoff_to_orchestrator` | Buddy | Buddy → Orchestrator |
| `sprint_planned` | Orchestrator | Sprint planning complete |
| `task_assigned` | Orchestrator | Orchestrator → Specialist |
| `agent_started` | Specialist | Started work |
| `handoff_request` | Specialist | Specialist → Specialist |
| `handoff_complete` | Specialist | Handoff acknowledged |
| `task_complete` | Specialist | Task done |
| `approval_request` | Chief/Orchestrator | Awaiting decision |
| `approval_decision` | Chief | Decision recorded |
| `compliance_check` | Bantay | Audit performed |
| `violation_detected` | Bantay | Violation found |
| `error_occurred` | Any | Error occurred |

---

## 🧪 Testing

```bash
# Run full test suite
~/.openclaw/scripts/test-event-logging.sh
```

---

## 📁 File Locations

```
~/.openclaw/
├── events/
│   ├── schema.json              # Event schema
│   └── YYYY-MM-DD/
│       └── evt_*.json           # Daily events
└── scripts/
    ├── log-event.sh             # Logger
    ├── query-events.sh          # Query tool
    ├── workflow-hooks.sh        # Integration hooks
    └── test-event-logging.sh    # Test suite
```

---

## 📚 Related Documents

- `ARCHITECTURE-IMPROVEMENT-PLAN.md` - Full improvement plan
- `TEST-REPORT-01-EVENT-LOGGING.md` - Test report
- `WORKFLOW-EVENT-CHAIN.md` - Detailed workflow diagram

---

**Quick Start:** Copy the hook examples for your agent role, paste into your agent script, and events will be logged automatically.
