# Workflow Event Chain - Multi-Agent Delegation Flow

**Reference:** Architecture Improvement Plan - Event Logging Integration  
**Updated:** 2026-04-25  
**Status:** ✅ Implemented

---

## Correct Delegation Chain

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    MULTI-AGENT DELEGATION FLOW                          │
└─────────────────────────────────────────────────────────────────────────┘

    ┌──────────────┐
    │    CHIEF     │  ← Receives request from Mike
    │  (Main)      │
    │   🎯         │
    └──────┬───────┘
           │
           │ 1. requirement_delegated
           │    "Build login page with MFA"
           ▼
    ┌──────────────┐
    │    BUDDY     │  ← Business Analyst
    │  (BA)        │
    │   🤝         │
    └──────┬───────┘
           │
           │ 2. requirements_analyzed
           │    "User stories + acceptance criteria ready"
           │
           │ 3. handoff_to_orchestrator
           │    "Ready for sprint planning"
           ▼
    ┌──────────────┐
    │ ORCHESTRATOR │  ← Lead Engineer / Technical Coordinator
    │  (Lead)      │
    │   📋         │
    └──────┬───────┘
           │
           │ 4. sprint_planned
           │    "5 tasks created from req_001"
           │
           │ 5. task_assigned (per task)
           │    "Build login component → Frontend"
           │    "Create API endpoints → Backend"
           │    "Design UI mockups → Designer"
           ▼
    ┌──────────────────────────────────────────────────────┐
    │              SPECIALIST AGENTS                       │
    │  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
    │  │ FRONTEND │  │ BACKEND  │  │ DESIGNER │  ...      │
    │  │   💻     │  │   ⚙️     │  │   🎨     │           │
    │  └────┬─────┘  └────┬─────┘  └────┬─────┘           │
    │       │             │             │                  │
    │       └─────────────┴─────────────┘                  │
    │                     │                                │
    │                     │ 6. task_complete (each)        │
    │                     │    "Login component deployed"  │
    │                     ▼                                │
    └──────────────────────────────────────────────────────┘
           │
           │ 7. (All tasks complete → implicit)
           │    Requirement fulfilled
           ▼
    ┌──────────────┐
    │    CHIEF     │  ← Reports completion to Mike
    └──────────────┘
```

---

## Event Types by Workflow Stage

### Stage 1: Chief → Buddy (Requirements Phase)

| Event Type | Agent | Description | Example |
|------------|-------|-------------|---------|
| `requirement_delegated` | Chief | Delegates requirement to Buddy | "Build login page with MFA" |

### Stage 2: Buddy Analysis (Business Analysis Phase)

| Event Type | Agent | Description | Example |
|------------|-------|-------------|---------|
| `requirements_analyzed` | Buddy | User stories + acceptance criteria ready | "3 user stories, 12 acceptance criteria" |
| `handoff_to_orchestrator` | Buddy | Hands off to Orchestrator for sprint planning | "Ready for technical breakdown" |

### Stage 3: Orchestrator Planning (Sprint Planning Phase)

| Event Type | Agent | Description | Example |
|------------|-------|-------------|---------|
| `sprint_planned` | Orchestrator | Tasks created and assigned | "5 tasks created from req_001" |
| `task_assigned` | Orchestrator | Individual task to specialist | "task_001 → Frontend: Build login component" |

### Stage 4: Specialist Execution (Implementation Phase)

| Event Type | Agent | Description | Example |
|------------|-------|-------------|---------|
| `agent_started` | Specialist | Specialist begins work | "Frontend starting task_001" |
| `handoff_request` | Specialist | Specialist → Specialist handoff | "Backend → Frontend: API contract ready" |
| `handoff_complete` | Specialist | Handoff acknowledged | "Frontend received API contract" |
| `task_complete` | Specialist | Task finished | "Login component deployed" |

### Stage 5: Compliance & Oversight (Parallel)

| Event Type | Agent | Description | Example |
|------------|-------|-------------|---------|
| `compliance_check` | Bantay | Hourly delegation audit | "Checking for clone spawning" |
| `violation_detected` | Bantay | Violation found | "Chief spawned frontend clone" |

### Stage 6: Approval Gates (As Needed)

| Event Type | Agent | Description | Example |
|------------|-------|-------------|---------|
| `approval_request` | Chief/Orchestrator | Awaiting Mike's decision | "P0: Architecture plan approval" |
| `approval_decision` | Mike (via Chief) | Decision recorded | "P0: Approved with conditions" |

### Stage 7: Error Handling (As Needed)

| Event Type | Any Agent | Description | Example |
|------------|-----------|-------------|---------|
| `error_occurred` | Any | Error during execution | "API connection failed" |

---

## Complete Event Lifecycle Example

**Requirement:** "Build login page with MFA"

```
Event #1  [Chief]          requirement_delegated
                            → req_001 to Buddy

Event #2  [Buddy]          requirements_analyzed
                            → 3 user stories created

Event #3  [Buddy]          handoff_to_orchestrator
                            → Ready for sprint planning

Event #4  [Orchestrator]   sprint_planned
                            → sprint_001: 5 tasks created

Event #5  [Orchestrator]   task_assigned
                            → task_001 → Frontend

Event #6  [Orchestrator]   task_assigned
                            → task_002 → Backend

Event #7  [Orchestrator]   task_assigned
                            → task_003 → Designer

Event #8  [Frontend]       agent_started
                            → Starting task_001

Event #9  [Backend]        agent_started
                            → Starting task_002

Event #10 [Designer]       agent_started
                            → Starting task_003

Event #11 [Backend]        handoff_request
                            → API contract → Frontend

Event #12 [Frontend]       handoff_complete
                            → Received API contract

Event #13 [Designer]       task_complete
                            → UI mockups approved

Event #14 [Backend]        task_complete
                            → API endpoints deployed

Event #15 [Frontend]       task_complete
                            → Login page deployed

Event #16 [Bantay]         compliance_check
                            → Hourly audit (clean)

Event #17 [Chief]          (implicit) requirement fulfilled
                            → Reports to Mike: "Done"
```

**Total Events:** 17 events for 1 requirement through full lifecycle

---

## Query Examples

### View Full Chain for a Requirement

```bash
# Find all events for req_001
grep -r "req_001" ~/.openclaw/events/$(date +%Y-%m-%d)/*.json
```

### View Tasks Assigned by Orchestrator

```bash
~/.openclaw/scripts/query-events.sh by-type task_assigned
```

### View Handoffs Between Specialists

```bash
~/.openclaw/scripts/query-events.sh by-type handoff_request
~/.openclaw/scripts/query-events.sh by-type handoff_complete
```

### View Compliance Audits

```bash
~/.openclaw/scripts/query-events.sh by-agent "agent:bantay:main"
```

---

## Hook Usage by Agent

### Chief of Staff

```bash
export AGENT_ID="agent:chief:main"
source ~/.openclaw/scripts/workflow-hooks.sh

# Delegate requirement to Buddy
hook_requirement_delegated "req_001" "Build login page with MFA"
```

### Buddy (Business Analyst)

```bash
export AGENT_ID="agent:buddy:main"
source ~/.openclaw/scripts/workflow-hooks.sh

# After analyzing requirements
hook_requirements_analyzed "req_001" "3 user stories, 12 acceptance criteria"

# Hand off to Orchestrator
hook_handoff_to_orchestrator "req_001" "Ready for sprint planning"
```

### Orchestrator (Lead Engineer)

```bash
export AGENT_ID="agent:orchestrator:main"
source ~/.openclaw/scripts/workflow-hooks.sh

# After sprint planning
hook_sprint_planned "sprint_001" "5 tasks created from req_001"

# Assign each task
hook_task_assigned "agent:frontend:main" "task_001" "Build login component"
hook_task_assigned "agent:backend:main" "task_002" "Create API endpoints"
hook_task_assigned "agent:designer:main" "task_003" "Design UI mockups"
```

### Specialist Agents

```bash
export AGENT_ID="agent:frontend:main"
source ~/.openclaw/scripts/workflow-hooks.sh

# When starting work
hook_agent_started "Building login component"

# When requesting handoff from Backend
hook_handoff_request "agent:backend:main" "handoff_001" "Need API contract"

# When handoff received
hook_handoff_complete "agent:frontend:main" "handoff_001" "API contract received"

# When task completes
hook_task_complete "task_001" "Login component deployed"
```

### Bantay (Compliance)

```bash
export AGENT_ID="agent:bantay:main"
source ~/.openclaw/scripts/workflow-hooks.sh

# Hourly compliance check
hook_compliance_check "audit_$(date +%H%M)" "Hourly delegation audit"

# If violation found
hook_violation_detected "agent:chief:main" "viol_001" "Spawned frontend clone"
```

---

## Summary

**Key Principle:** Events track the **full delegation chain**, not just Chief → Specialist.

**Old (Wrong):**
```
Chief → Specialist (direct)
```

**New (Correct):**
```
Chief → Buddy → Orchestrator → Specialist
```

**Event Logging Now Captures:**
- ✅ Requirements delegation (Chief → Buddy)
- ✅ Business analysis (Buddy)
- ✅ Handoff to planning (Buddy → Orchestrator)
- ✅ Sprint planning (Orchestrator)
- ✅ Task assignment (Orchestrator → Specialists)
- ✅ Specialist execution (with handoffs)
- ✅ Compliance monitoring (Bantay)
- ✅ Approval gates (Mike's decisions)

---

**Document:** `WORKFLOW-EVENT-CHAIN.md`  
**Location:** `/Users/mblejano/.openclaw/workspace/`  
**Related:** `ARCHITECTURE-IMPROVEMENT-PLAN.md`, `TEST-REPORT-01-EVENT-LOGGING.md`
