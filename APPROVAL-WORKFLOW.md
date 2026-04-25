# Approval Workflow — Mike's Review Required

**Effective Date:** 2026-04-25  
**Status:** ✅ **ACTIVE**  
**Principle:** No critical work proceeds without Mike's explicit approval

---

## What Requires Mike's Approval

### 🚨 P0 — Before ANY Development Starts

| Deliverable | Owner | Format | Approval Method |
|-------------|-------|--------|-----------------|
| **Project Charter** | Buddy | Document | Review + ✅ in chat |
| **Business Requirements** | Buddy | User stories + use cases | Review + ✅ in chat |
| **Use Case Diagrams/Descriptions** | Buddy | UML or structured text | Review + ✅ in chat |
| **Technical Architecture** | Orchestrator + Arbiter | Diagram + doc | Review + ✅ in chat |
| **Security Plan** | Bantay + Sentinel | Threat model + controls | Review + ✅ in chat |

**Workflow:**
```
Buddy gathers requirements
    ↓
Chief reviews with Mike
    ↓
Mike approves requirements ✅
    ↓
Orchestrator breaks down tasks
    ↓
Specialists begin work
```

---

### 🚨 P1 — Before Implementation Begins

| Deliverable | Owner | Format | Approval Method |
|-------------|-------|--------|-----------------|
| **Sprint Plan / Task Breakdown** | Orchestrator | Sprint file or Kanban | Review + ✅ in chat |
| **Test Plan** | Sentinel | Test cases + coverage | Review + ✅ in chat |
| **UI/UX Mockups** | Designer | Figma/mockup files | Review + ✅ in chat |
| **API Contracts** | Backend + Frontend | OpenAPI/Swagger spec | Review + ✅ in chat |
| **Database Schema** | Backend | ERD + migration files | Review + ✅ in chat |

**Workflow:**
```
Orchestrator creates sprint plan
    ↓
Sentinel creates test plan
    ↓
Designer creates mockups (if UI work)
    ↓
Chief presents to Mike
    ↓
Mike approves plan ✅
    ↓
Implementation begins
```

---

### 🚨 P2 — Before Deployment to Production

| Deliverable | Owner | Format | Approval Method |
|-------------|-------|--------|-----------------|
| **QA Report** | Sentinel | Pass/fail + bugs list | Review + ✅ in chat |
| **Security Audit** | Bantay | Compliance report | Review + ✅ in chat |
| **Code Review Summary** | Arbiter | PR approvals + notes | Review + ✅ in chat |
| **Deployment Plan** | Orchestrator | Rollout steps + rollback | Review + ✅ in chat |
| **Release Notes** | Scribe | Changelog + migration guide | Review + ✅ in chat |

**Workflow:**
```
Specialists complete work
    ↓
Sentinel runs QA → QA Report
    ↓
Bantay runs security audit → Security Report
    ↓
Arbiter reviews code → Code Review Summary
    ↓
Chief compiles all reports for Mike
    ↓
Mike reviews ALL reports ✅
    ↓
Deployment proceeds
```

---

### 🚨 P3 — Critical Changes Mid-Sprint

| Change Type | Owner | Approval Required |
|-------------|-------|-------------------|
| **Scope Change** | Buddy + Orchestrator | ✅ Mike must approve |
| **Timeline Change** | Orchestrator | ✅ Mike must approve |
| **Architecture Change** | Arbiter + Backend/Frontend | ✅ Mike must approve |
| **Security Control Change** | Bantay + Sentinel | ✅ Mike must approve |
| **Budget/Resource Change** | Chief of Staff | ✅ Mike must approve |

**Workflow:**
```
Agent identifies needed change
    ↓
Chief assesses impact (timeline, cost, risk)
    ↓
Chief presents change request to Mike
    ↓
Mike approves/rejects ✅
    ↓
If approved: Orchestrator updates plan
    ↓
If rejected: Original plan continues
```

---

## What Does NOT Require Approval

### ✅ Routine Work (Proceed Without Approval)

| Activity | Owner | Notes |
|----------|-------|-------|
| **Task Execution** | Specialists | Working on approved tasks |
| **Bug Fixes (P3/P4)** | Backend/Frontend | Non-critical bug fixes |
| **Documentation Updates** | Scribe | Keeping docs current |
| **Test Creation** | Sentinel | Writing tests per approved plan |
| **Code Reviews** | Arbiter | Routine PR reviews |
| **Daily Standups** | Orchestrator | Team coordination |

### ✅ Emergency Fixes (Inform After)

| Scenario | Action | Post-Fix Review |
|----------|--------|-----------------|
| **Production Outage** | Fix immediately | Inform Mike within 1 hour |
| **Security Breach** | Contain immediately | Full report within 2 hours |
| **Data Loss** | Recover immediately | Root cause analysis within 24 hours |

---

## Approval Request Format

When presenting work for approval, Chief of Staff must use this format:

```markdown
# Approval Request #[Number]

**Project:** [Project Name]  
**Date:** YYYY-MM-DD HH:MM  
**Requested By:** [Agent Name]  
**Approval Level:** P0 / P1 / P2 / P3

## What Needs Approval

[Clear description of what you're reviewing]

## Context

[Why this is needed, background information]

## Options Considered

| Option | Pros | Cons | Recommendation |
|--------|------|------|----------------|
| A | ... | ... | ✅ Recommended |
| B | ... | ... | |
| C | ... | ... | |

## Impact

- **Timeline:** [Effect on schedule]
- **Cost:** [Effect on budget/resources]
- **Risk:** [Security/compliance implications]
- **Quality:** [Effect on deliverables]

## Attachments

- [Link to requirements doc]
- [Link to technical design]
- [Link to test plan]
- [Other relevant documents]

## Decision Required

**Question for Mike:** [Specific yes/no or option selection]

**Deadline:** [When decision is needed by]

---
*Reply with:*
- ✅ **APPROVED** — Proceed as recommended
- ⚠️ **APPROVED WITH CONDITIONS** — Proceed with these changes: [...]
- ❌ **REJECTED** — Do not proceed, reason: [...]
- 🔄 **REVISE & RESUBMIT** — Make these changes and re-present: [...]
```

---

## Tracking Approvals

### Approval Log Location
**File:** `~/.openclaw/workspace/APPROVAL-LOG.md`

**Format:**
```markdown
## Approval #[Number]

**Date:** YYYY-MM-DD HH:MM  
**Project:** [Name]  
**Type:** P0 / P1 / P2 / P3  
**Status:** ✅ Approved / ⚠️ Conditional / ❌ Rejected  
**Decision:** [Mike's exact response]  
**Conditions:** [If conditional, list them]  
**Next Review:** [If applicable]
```

---

## Escalation Protocol

### If Mike Doesn't Respond

| Time Elapsed | Action |
|--------------|--------|
| **< 4 hours** | Wait patiently, no follow-up |
| **4-24 hours** | Gentle reminder via Comms |
| **24-48 hours** | Escalate: Project blocked, need decision |
| **> 48 hours** | Critical: Pause all related work, document delay |

### If Work is Blocked Waiting for Approval

```
1. Agent identifies blocker
   ↓
2. Chief notifies Mike: "⚠️ BLOCKED: Waiting for approval #[number]"
   ↓
3. Orchestrator pauses related tasks
   ↓
4. Team works on other approved work
   ↓
5. When Mike responds: Resume or redirect
```

---

## Special Cases

### Hotfixes / Emergency Changes

**Process:**
1. Fix the issue immediately (don't wait for approval)
2. Inform Mike within 1 hour: "🚨 HOTFIX: [description]"
3. Document what was changed and why
4. Present retrospective within 24 hours
5. Get retroactive approval if needed

### Experimental / R&D Work

**Process:**
1. Chief presents experimental proposal
2. Mike approves timeboxed exploration (e.g., "4 hours to investigate")
3. Agent explores, reports findings
4. Mike decides: proceed to full implementation or stop

### Delegated Authority

**Mike can pre-authorize certain decisions:**
```
"I pre-authorize Sentinel to approve any P3 bug fixes without my review."
"I pre-authorize Orchestrator to adjust sprint scope by ±10% without approval."
```

**Pre-authorizations must be:**
- Explicitly stated
- Documented in APPROVAL-LOG.md
- Time-bound (can be revoked anytime)

---

## Current Approval Status

### Active Approvals (As of 2026-04-25)

| Approval # | Project | Type | Status | Conditions |
|------------|---------|------|--------|------------|
| #001 | Portfolio Website | P2 (Deploy) | ✅ Approved | Fix Formspree ID before go-live |
| #002 | Delegation Enforcement | P1 (System) | ✅ Approved | Preventive controls active |
| [New] | [Project] | [Type] | ⏳ Pending | - |

### Pending Approvals

| Approval # | Project | Type | Submitted | Blocking |
|------------|---------|------|-----------|----------|
| [None currently] | - | - | - | - |

---

## Tools & Automation

### Approval Tracking Script

```bash
# View pending approvals
~/.openclaw/approval-status.sh --pending

# View approval history
~/.openclaw/approval-status.sh --history

# Request new approval (generates template)
~/.openclaw/request-approval.sh --type P1 --project "My Project"
```

### Calendar Integration

- Approval deadlines added to Mike's calendar
- Reminder 2 hours before deadline
- Escalation alert if overdue

---

## Roles & Responsibilities

### Mike (Principal)
- ✅ Review all P0/P1/P2 deliverables
- ✅ Provide clear approve/reject/revise decisions
- ✅ Respond within agreed timeframes (24-48h standard)
- ✅ Document conditions or concerns

### Chief of Staff
- ✅ Compile deliverables for Mike's review
- ✅ Present options with clear recommendations
- ✅ Track approval status
- ✅ Escalate if approval is delayed
- ✅ Ensure NO work proceeds without approval

### Buddy / Orchestrator / Specialists
- ✅ Create high-quality deliverables for review
- ✅ Incorporate Mike's feedback promptly
- ✅ Do NOT proceed until approval granted
- ✅ Flag if approval is blocking progress

### Bantay
- ✅ Verify approval process is followed
- ✅ Audit approval logs quarterly
- ✅ Report violations to Mike directly
- ✅ Ensure no bypassing of approval workflow

---

## Lessons Learned

### 2026-04-25: Multi-Agent Coordination Crisis

**Problem:**
- Chief spawned clones without oversight
- No approval required for agent coordination approach
- Violations discovered after the fact

**Solution:**
- Implemented preventive enforcement
- Added Bantay as independent auditor
- **Added approval workflow for critical decisions**

**Lesson:** Clear approval gates prevent unauthorized actions.

---

## Quick Reference

### I Need Mike's Approval

**Chief of Staff:**
1. Identify what needs approval (P0/P1/P2/P3)
2. Prepare approval request using template
3. Present to Mike with clear question
4. Wait for decision (✅/⚠️/❌/🔄)
5. Communicate decision to team
6. Log in APPROVAL-LOG.md

**Mike:**
1. Review deliverable thoroughly
2. Ask clarifying questions if needed
3. Respond with clear decision:
   - ✅ **APPROVED** — Go ahead
   - ⚠️ **APPROVED WITH CONDITIONS** — Go ahead IF...
   - ❌ **REJECTED** — Stop, don't do this
   - 🔄 **REVISE & RESUBMIT** — Make changes, present again
4. Document any conditions or concerns

---

*Document Author: Chief of Staff*  
*Effective Date: 2026-04-25*  
*Review Cycle: Quarterly or after major incidents*  
*Bantay Audit: Quarterly compliance check*
