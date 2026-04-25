# Decisions & Lessons Learned

## 2026-04-24: Hello World PoC Workflow Violations

### What Happened
The Hello World PoC was delivered successfully, but **multiple workflow violations occurred**:

1. **Orchestrator spawned sub-agents** to mimic specialist work (backend, frontend, QA) instead of coordinating with actual specialist agents
2. **No GitHub workflow followed**: No feature branch, no PR, no Arbiter review, no Sentinel QA sign-off
3. **No repo clarity**: Sprint file referenced different project than what was delivered
4. **No approval requested**: Orchestrator autonomously decided to spawn sub-agents without Buddy approval
5. **No project plan/timeline**: Task breakdown existed but no formal plan, Kanban, or approval gates
6. **Bantay did not monitor**: No observation reports or guard rail enforcement

### Root Causes
1. **Session visibility not configured**: `tools.sessions.visibility=all` was missing from openclaw.json
2. **Agent-to-agent communication disabled**: `tools.agentToAgent.enabled=true` was missing
3. **Specialist agents not started**: Backend, Frontend, Sentinel sessions weren't running
4. **Pragmatic shortcut**: Orchestrator chose "just get it done" over proper workflow for a "simple PoC"
5. **Chief didn't enforce**: I (Chief) celebrated delivery instead of auditing compliance

### Decisions Made

#### 1. Agent Visibility Check (NEW - Chief Responsibility)
**Before any coordination, Chief must:**
```
1. Check which specialist agents are visible/active
2. Report to Mike if agents aren't replying
3. DO NOT work around missing agents
4. Fix config OR start missing agents BEFORE proceeding
```

#### 2. Buddy's Pre-Project Checklist (NEW - Required Before Any Project)
**Buddy must ask Mike and confirm:**
- **Repo**: Which GitHub repo? (URL or create new?)
- **Branch Strategy**: `feature/` → `develop` → `main`? Git flow? Other?
- **Approval Process**: Who approves what? (Buddy for scope, Arbiter for code, Sentinel for QA)
- **Timeline Format**: Gantt? Kanban? Sprint file? ETA per task?

**This is now a gate** — No handoff to Orchestrator until these 4 items are confirmed.

#### 3. Bantay's Guard Rail Role (REINSTATE)
**Bantay must:**
- Monitor all agent communications
- Report workflow violations (like sub-agent mimicking)
- Observe sprint progress and flag deviations
- Alert Chief/Buddy when agents bypass process

**Action**: Bantay session needs to be started and given monitoring mandate.

#### 4. No Sub-Agent Workarounds Without Approval
**Rule**: If specialist agents aren't available:
1. Report to Chief → Chief reports to Mike
2. Wait for Mike's decision: fix config, start agents, or approve workaround
3. **Never** autonomously decide to spawn sub-agents for specialist work

### Config Fixes Applied
- ✅ `tools.sessions.visibility=all` added to openclaw.json
- ✅ `tools.agentToAgent.enabled=true` added to openclaw.json
- ✅ `sessions_send` permission added to all specialist agents
- ✅ Buddy tool permissions defined

### Enforcement
This lesson is now **binding** on all future projects. Chief (me) is responsible for enforcement.

---

## 2026-04-24: Agent Status Check Protocol (NEW)

**Chief's Pre-Project Checklist:**
Before any project starts, Chief must:
1. Run `sessions_list` to check which specialist agents are visible/active
2. Test communication with key agents (Buddy, Orchestrator, Backend, Frontend, Sentinel)
3. Report to Mike immediately if agents aren't replying
4. **DO NOT proceed** with workarounds — fix config or start missing agents first
5. Confirm Bantay is running and monitoring

**Current Team Status (as of 2026-04-24 16:10):**
- ✅ Backend: Running
- ✅ Orchestrator: Running
- ✅ Arbiter: Running
- ✅ Frontend: Recent session (can be reactivated)
- ✅ Sentinel: Very recent session (was monitoring Hello World)
- ✅ Scribe: Recent session
- ✅ Buddy: Recent session
- ⚠️ Designer: Old session (needs restart)
- ⚠️ Comms: Old session (needs restart)
- ✅ Bantay: NOW ACTIVE (guard rail restored)

**Bantay's Guard Rail Role:**
- Monitor ALL agent communications
- Detect workflow violations in real-time
- Alert Chief/Buddy immediately upon detection
- Document findings in COMPLIANCE_LOG.md
- Authority to HALT work on critical violations

---

## 2026-04-24: Specialist Agent Roster Confirmed

**Specialists (do the work):**
- Backend (`agent:backend:main`) - APIs, databases, server logic
- Frontend (`agent:frontend:main`) - UI, client-side code
- Designer (`agent:designer:main`) - UI/UX, visual design
- Arbiter (`agent:arbiter:main`) - Code review, architecture
- Sentinel (`agent:sentinel:main`) - QA, testing, security
- Scribe (`agent:scribe:main`) - Documentation
- Bantay (`agent:bantay:main`) - Monitoring, guard rails
- Comms (`agent:comms:main`) - Internal notifications

**Coordinators (manage flow):**
- Buddy (`agent:buddy:main`) - Requirements, user stories
- Orchestrator (`agent:orchestrator:main`) - Task breakdown, coordination
- Chief (`agent:main:main`) - Executive oversight, Mike's point of contact

---

*This file is updated when significant decisions or lessons occur. Review before starting new projects.*
