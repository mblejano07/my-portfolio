# Handoff Contracts — Agent-to-Agent Workflow

**Version:** 1.0  
**Date:** 2026-04-25  
**Status:** ✅ **ACTIVE** — Enforced for all projects  
**GitHub Reference:** Issue #43034 (hierarchical task decomposition)

---

## Executive Summary

**Handoff Contracts** define clear **input requirements**, **output deliverables**, and **quality gates** for every agent-to-agent transition. This eliminates ambiguity, prevents dropped responsibilities, and ensures smooth workflow from request to deployment.

**Core Principle:** Every handoff is a **contract** — the receiving agent knows exactly what to expect, and the sending agent knows exactly what "done" looks like.

---

## Part 1: Development Scenarios & Team Activation

Not every project needs the full team. Use this matrix to determine which agents are involved:

### Scenario Matrix

| Scenario | Buddy | Orchestrator | Designer | Frontend | Backend | Sentinel | Arbiter | Scribe |
|----------|-------|--------------|----------|----------|---------|----------|---------|--------|
| **Full-Stack Web App** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Frontend-Only (SPA)** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| **Backend API Only** | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| **Landing Page / Microsite** | ⚠️ | ⚠️ | ✅ | ✅ | ❌ | ⚠️ | ❌ | ⚠️ |
| **Bug Fix (Existing Feature)** | ❌ | ⚠️ | ❌ | ⚠️ | ⚠️ | ✅ | ❌ | ❌ |
| **Security Audit** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| **Documentation Only** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **UI/UX Redesign** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| **Database Migration** | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| **Quick Script / Utility** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

**Legend:**
- ✅ **Required** — Must be involved
- ⚠️ **Optional** — Involve if complexity warrants it
- ❌ **Not Needed** — Skip for this scenario

---

### Scenario Decision Tree

```
Mike's Request
    ↓
┌─────────────────────────────────┐
│ Does it have a UI?              │
└─────────────────────────────────┘
         │                    │
        YES                  NO
         ↓                    ↓
┌─────────────────┐   ┌─────────────────┐
│ Is it static    │   │ Is it an API    │
│ (content only)  │   │ or data service?│
└─────────────────┘   └─────────────────┘
         │                    │                    │
        YES                  NO                  YES
         ↓                    ↓                    ↓
   Landing Page         Full-Stack App      Backend API
   Scenario             Scenario            Scenario
   (Designer +         (All agents)        (Backend +
    Frontend +                               Sentinel +
    Sentinel)                                Arbiter +
                                             Scribe)
```

---

## Part 2: Handoff Contract Templates

Each contract follows this structure:
- **Trigger:** What initiates the handoff
- **Input Requirements:** What the receiving agent needs
- **Output Deliverables:** What the sending agent must provide
- **Quality Gates:** Verification criteria before handoff is accepted
- **Max Iterations:** Review loop limit (default: 3)

---

### Contract 1: Chief → Buddy (Requirements Gathering)

**Trigger:** Mike provides a business request or feature idea

**Input Requirements:**
```markdown
## Request Context
- **Requestor:** Mike (or stakeholder name)
- **Business Goal:** [What problem are we solving?]
- **Success Metrics:** [How do we measure success?]
- **Constraints:** [Timeline, budget, technical limitations]
- **Priority:** [Critical / High / Medium / Low]
```

**Output Deliverables (Buddy):**
- [ ] User stories in Gherkin format (Given/When/Then)
- [ ] Use case descriptions (actors, preconditions, flows)
- [ ] Acceptance criteria (testable conditions)
- [ ] Stakeholder impact assessment
- [ ] **Handoff Package** ready for Orchestrator

**Quality Gates:**
```markdown
## Buddy → Orchestrator Handoff Checklist
- [ ] All user stories have clear acceptance criteria
- [ ] Use cases cover happy path + edge cases
- [ ] No ambiguous requirements ("make it fast" → "load <2s")
- [ ] Stakeholders identified and considered
- [ ] Mike has approved requirements ✅
```

**Max Iterations:** 3 (Buddy refines based on Mike/Chief feedback)

---

### Contract 2: Buddy → Orchestrator (Technical Planning)

**Trigger:** Requirements approved by Mike

**Input Requirements:**
```markdown
## Approved Requirements Package
- User stories (Gherkin)
- Use cases
- Acceptance criteria
- Priority ranking
- Mike's approval confirmation
```

**Output Deliverables (Orchestrator):**
- [ ] Sprint breakdown (tasks with estimates)
- [ ] Task assignments (which agent owns what)
- [ ] Dependency map (what blocks what)
- [ ] Timeline / milestone plan
- [ ] Risk assessment (technical debt, complexity)
- [ ] **Sprint Plan** ready for Mike's approval

**Quality Gates:**
```markdown
## Orchestrator → Mike Handoff Checklist
- [ ] All tasks mapped to specific agents
- [ ] Dependencies identified and sequenced
- [ ] Timeline is realistic (with buffer)
- [ ] High-risk tasks flagged
- [ ] Sentinel's test plan included
- [ ] Designer's mockups included (if UI work)
```

**Max Iterations:** 2 (Orchestrator adjusts based on Mike feedback)

---

### Contract 3: Orchestrator → Designer (UI/UX Design)

**Trigger:** Sprint plan approved, UI work identified

**Input Requirements:**
```markdown
## Design Brief
- User stories requiring UI
- Brand guidelines (colors, fonts, tone)
- Target devices (desktop, mobile, tablet)
- Accessibility requirements (WCAG level)
- PrimeVue component library constraints
```

**Output Deliverables (Designer):**
- [ ] Wireframes (low-fidelity layout)
- [ ] Mockups (high-fidelity design)
- [ ] Component specifications (which PrimeVue components)
- [ ] Interaction flows (hover states, transitions)
- [ ] Responsive breakpoints (mobile/tablet/desktop)
- [ ] **Design Package** ready for Frontend + Mike

**Quality Gates:**
```markdown
## Designer → Frontend Handoff Checklist
- [ ] All screens designed (no gaps)
- [ ] PrimeVue components identified
- [ ] Color tokens / theme variables documented
- [ ] Responsive behavior specified
- [ ] Mike approved mockups ✅
- [ ] Frontend engineer reviewed for feasibility
```

**Max Iterations:** 3 (Designer refines based on feedback)

---

### Contract 4: Orchestrator → Backend (API Development)

**Trigger:** Sprint plan approved, API work identified

**Input Requirements:**
```markdown
## API Requirements
- User stories requiring backend
- Data models (entities, relationships)
- Security requirements (auth, RBAC, MFA)
- Performance targets (response time, throughput)
- Integration points (3rd party APIs, webhooks)
```

**Output Deliverables (Backend):**
- [ ] API contract (OpenAPI/Swagger spec)
- [ ] Database schema (ERD + migrations)
- [ ] Implementation (Laravel controllers, models, routes)
- [ ] Unit tests (PHPUnit)
- [ ] API documentation (endpoints, request/response examples)
- [ ] **API Package** ready for Frontend + Sentinel

**Quality Gates:**
```markdown
## Backend → Frontend Handoff Checklist
- [ ] API contract finalized and versioned
- [ ] All endpoints documented with examples
- [ ] Authentication/authorization implemented
- [ ] Database migrations tested
- [ ] Unit tests passing (>80% coverage)
- [ ] Sentinel security review passed ✅
```

**Max Iterations:** 2 (Backend adjusts API based on Frontend needs)

---

### Contract 5: Orchestrator → Frontend (UI Implementation)

**Trigger:** Design + API contracts approved

**Input Requirements:**
```markdown
## Frontend Package
- Designer's mockups + component specs
- Backend's API contract (OpenAPI)
- User stories for UI features
- PrimeVue Aura theme guidelines
```

**Output Deliverables (Frontend):**
- [ ] Vue 3 components (TypeScript)
- [ ] PrimeVue integration (styled per design)
- [ ] API client layer (service modules)
- [ ] State management (Pinia stores)
- [ ] Routing (Vue Router with guards)
- [ ] Unit tests (Vitest + Testing Library)
- [ ] **Frontend Build** ready for Sentinel QA

**Quality Gates:**
```markdown
## Frontend → Sentinel Handoff Checklist
- [ ] All mockups implemented pixel-perfect
- [ ] API integration complete + error handling
- [ ] Responsive on all breakpoints
- [ ] Accessibility checks passed (WCAG)
- [ ] Unit tests passing (>80% coverage)
- [ ] No console errors/warnings
- [ ] Build succeeds with no warnings
```

**Max Iterations:** 3 (Frontend fixes issues from Sentinel QA)

---

### Contract 6: Designer → Frontend (Design Handoff)

**Trigger:** Mockups approved by Mike

**Input Requirements:**
```markdown
## Design Assets
- Figma/Sketch files (or image exports)
- Component specifications
- Color tokens / typography scale
- Interaction specifications
```

**Output Deliverables (Designer to Frontend):**
- [ ] Annotated mockups (callouts for interactions)
- [ ] Component mapping (which PrimeVue component for each element)
- [ ] Responsive behavior notes
- [ ] Animation/transition specs
- [ ] **Design Review** session with Frontend engineer

**Quality Gates:**
```markdown
## Designer → Frontend Acceptance
- [ ] Frontend engineer confirms feasibility
- [ ] All states designed (hover, active, disabled, loading, error)
- [ ] Edge cases covered (empty states, long text, missing images)
- [ ] Design tokens documented (colors, spacing, typography)
```

**Max Iterations:** 2 (Designer clarifies or adjusts based on feasibility)

---

### Contract 7: Backend → Frontend (API Integration)

**Trigger:** API contract finalized

**Input Requirements:**
```markdown
## API Contract
- OpenAPI/Swagger specification
- Authentication mechanism
- Rate limits / quotas
- Error response formats
```

**Output Deliverables (Backend to Frontend):**
- [ ] API endpoint documentation
- [ ] Request/response examples (JSON)
- [ ] Error code reference
- [ ] **Integration Session** (Backend walks Frontend through API)

**Quality Gates:**
```markdown
## Backend → Frontend API Handoff
- [ ] Frontend can successfully call all endpoints
- [ ] Error handling implemented on both sides
- [ ] CORS configured correctly
- [ ] Authentication flow tested end-to-end
- [ ] Rate limiting understood and respected
```

**Max Iterations:** 2 (Backend adjusts API if Frontend integration blocked)

---

### Contract 8: Frontend/Backend → Sentinel (QA Handoff)

**Trigger:** Implementation complete, self-tested

**Input Requirements:**
```markdown
## QA Request Package
- Feature branch with all commits
- Test plan from Orchestrator
- User stories being addressed
- Self-test results (what the dev already verified)
- Known issues / limitations
```

**Output Deliverables (Sentinel):**
- [ ] QA test report (pass/fail per test case)
- [ ] Bug list (severity + reproduction steps)
- [ ] Security scan results (OWASP checks)
- [ ] Performance metrics (load time, bundle size)
- [ ] **QA Sign-off** or **Blocker List**

**Quality Gates:**
```markdown
## Sentinel QA Checklist
- [ ] All user stories tested against acceptance criteria
- [ ] Security scan passed (no critical/high vulnerabilities)
- [ ] Performance within targets (page load <3s, API <500ms)
- [ ] Accessibility audit passed (automated + manual)
- [ ] Cross-browser testing complete (Chrome, Firefox, Safari)
- [ ] Mobile responsive verified
```

**Max Iterations:** 3 (Frontend/Backend fixes bugs, Sentinel re-tests)

---

### Contract 9: Sentinel → Arbiter (Code Review Handoff)

**Trigger:** QA passed, ready for architecture review

**Input Requirements:**
```markdown
## Code Review Package
- QA report (all tests passing)
- Security scan results
- PR links (GitHub)
- Architecture decisions made
- Technical debt notes
```

**Output Deliverables (Arbiter):**
- [ ] Code review summary (strengths + concerns)
- [ ] Architecture validation (patterns followed?)
- [ ] Technical debt assessment
- [ ] Refactoring recommendations
- [ ] **Arbiter Approval** or **Revision Required**

**Quality Gates:**
```markdown
## Arbiter Review Checklist
- [ ] Code follows project conventions
- [ ] SOLID principles applied
- [ ] No premature optimization
- [ ] Error handling consistent
- [ ] Logging/observability added
- [ ] No security anti-patterns
- [ ] Scalability considered
```

**Max Iterations:** 2 (Developer addresses concerns, Arbiter re-reviews)

---

### Contract 10: Arbiter → Chief (Deployment Readiness)

**Trigger:** All reviews passed, ready for deployment

**Input Requirements:**
```markdown
## Deployment Package
- QA report (Sentinel ✅)
- Code review summary (Arbiter ✅)
- Security audit (Bantay ✅)
- Release notes (Scribe)
- Deployment plan (Orchestrator)
- Rollback procedure
```

**Output Deliverables (Chief to Mike):**
- [ ] Deployment readiness report
- [ ] All approval gates confirmed (P0, P1, P2)
- [ ] Risk summary + mitigation
- [ ] **Mike's Final Approval** for deployment

**Quality Gates:**
```markdown
## Chief → Mike Deployment Approval
- [ ] P0 approvals complete (requirements, architecture, security)
- [ ] P1 approvals complete (sprint plan, test plan, mockups, API contracts)
- [ ] P2 approvals complete (QA report, security audit, code review)
- [ ] Rollback procedure documented and tested
- [ ] Stakeholders notified of deployment window
```

**Max Iterations:** 1 (Chief addresses Mike's concerns before deployment)

---

## Part 3: Scenario-Specific Workflows

### Workflow A: Full-Stack Web App (All Agents)

```
Chief → Buddy → Orchestrator → Designer → Frontend
                          ↓
                      Backend → Sentinel → Arbiter → Chief → Mike
```

**Handoffs:** 10 contracts activated  
**Duration:** 2-4 weeks (typical sprint)  
**Approval Gates:** P0, P1, P2 all required

---

### Workflow B: Frontend-Only SPA (No Backend)

```
Chief → Buddy → Orchestrator → Designer → Frontend → Sentinel → Arbiter → Chief → Mike
```

**Handoffs:** 8 contracts (skip Backend contracts)  
**Duration:** 1-2 weeks  
**Approval Gates:** P0, P1, P2 (no API contracts)  
**Special Notes:**
- Forms use Formspree/EmailJS (not API endpoints)
- All data is static or from external APIs
- Sentinel must verify no orphaned API client code

---

### Workflow C: Backend API Only (No UI)

```
Chief → Buddy → Orchestrator → Backend → Sentinel → Arbiter → Chief → Mike
```

**Handoffs:** 6 contracts (skip Designer, Frontend)  
**Duration:** 1-3 weeks  
**Approval Gates:** P0, P1, P2 (no mockups)  
**Special Notes:**
- API documentation is critical (OpenAPI spec)
- Sentinel focuses on security + performance testing
- Scribe documents API for consumers

---

### Workflow D: Landing Page / Microsite (Lightweight)

```
Chief → Designer → Frontend → Sentinel → Chief → Mike
```

**Handoffs:** 4 contracts (Buddy/Orchestrator optional)  
**Duration:** 2-5 days  
**Approval Gates:** P1 only (mockups + deployment plan)  
**Special Notes:**
- Buddy optional if requirements are simple
- Orchestrator optional if task is straightforward
- Sentinel still required (security + performance)
- Arbiter optional unless complex interactions

---

### Workflow E: Bug Fix (Existing Feature)

```
Chief → Orchestrator → [Frontend OR Backend] → Sentinel → Chief → Mike
```

**Handoffs:** 3-4 contracts (scenario-dependent)  
**Duration:** Hours to 2 days  
**Approval Gates:** P2 only (QA + deployment)  
**Special Notes:**
- Buddy not needed (requirements = "fix the bug")
- Designer not needed (unless UI bug requires redesign)
- Sentinel focuses on regression testing
- Arbiter optional unless bug reveals architectural issue

---

### Workflow F: Security Audit (Bantay + Sentinel)

```
Chief → Bantay → Sentinel → Arbiter → Chief → Mike
```

**Handoffs:** 4 contracts  
**Duration:** 1-3 days  
**Approval Gates:** P0 (security plan), P2 (audit report)  
**Special Notes:**
- Bantay leads (independent auditor)
- Sentinel assists (technical security checks)
- Arbiter reviews findings
- No development agents unless fixes needed

---

### Workflow G: Documentation Only (Scribe)

```
Chief → Scribe → Chief → Mike
```

**Handoffs:** 2 contracts  
**Duration:** Hours to 1 day  
**Approval Gates:** P1 only (review before publishing)  
**Special Notes:**
- Scribe gathers info from existing sources
- No development work
- Chief reviews for accuracy
- Mike approves before external publication

---

## Part 4: Enforcement & Monitoring

### Bantay's Role in Handoff Enforcement

**Bantay monitors:**
1. **Missing Handoffs** — Did Chief skip Buddy and go straight to Orchestrator?
2. **Incomplete Deliverables** — Did Designer hand off without Mike's mockup approval?
3. **Quality Gate Violations** — Did Sentinel sign off without all tests passing?
4. **Approval Gate Bypass** — Did deployment happen without P2 approvals?

**Bantay's Hourly Audit:**
```bash
# Check for handoff violations
~/.openclaw/scripts/workflow-hooks.sh --check-handoffs

# Check for approval gate violations
~/.openclaw/scripts/workflow-hooks.sh --check-approvals

# Report findings to Mike
~/.openclaw/scripts/workflow-hooks.sh --report-violations
```

### Event Logging for Handoff Tracking

Every handoff must be logged:
```bash
# Log handoff event
~/.openclaw/scripts/log-event.sh task_delegated agent:chief:main task-123 "Chief → Buddy: Requirements gathering"

# Log handoff completion
~/.openclaw/scripts/log-event.sh task_complete agent:buddy:main task-123 "Buddy → Orchestrator: Requirements package ready"
```

### Observability Dashboard Metrics

The OBSERVABILITY.md dashboard tracks:
- **Handoff Success Rate** — % of handoffs completed without rework
- **Average Handoff Latency** — Time from trigger to acceptance
- **Quality Gate Pass Rate** — % of handoffs passing first-time
- **Approval Gate Compliance** — % of projects with all required approvals

---

## Part 5: Quick Reference Card

### Handoff Contract Checklist (Print This)

```
□ Trigger identified
□ Input requirements gathered
□ Output deliverables defined
□ Quality gates established
□ Max iterations set (default: 3)
□ Mike approval obtained (if required)
□ Event logged (log-event.sh)
□ Next agent notified (sessions_send)
```

### Scenario Quick Pick

| If your project is... | Use this workflow |
|-----------------------|-------------------|
| New web app with UI + API | Workflow A (Full-Stack) |
| Static site or portfolio | Workflow D (Landing Page) |
| REST API for mobile app | Workflow C (Backend Only) |
| Vue/React app with mock data | Workflow B (Frontend Only) |
| Fixing a broken feature | Workflow E (Bug Fix) |
| Security review before launch | Workflow F (Security Audit) |
| Writing docs or guides | Workflow G (Documentation) |

---

## Appendix: Template Files

### Handoff Package Template (Markdown)

```markdown
# Handoff Package: [From Agent] → [To Agent]

**Task ID:** task-XXX  
**Date:** YYYY-MM-DD  
**Iteration:** 1 of 3

## Context
[Why this handoff is happening]

## Deliverables
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

## Quality Gate Results
- [ ] Check 1: PASS/FAIL
- [ ] Check 2: PASS/FAIL

## Known Issues
[Any limitations or caveats]

## Next Steps
[What the receiving agent should do]

## Approval
- [ ] Mike approved (if required): [Date/Time]
- [ ] Sending agent sign-off: [Name, Date]
```

---

**Document Owner:** Chief of Staff  
**Last Updated:** 2026-04-25  
**Next Review:** After first full project using these contracts  
**GitHub Reference:** Issue #43034 (hierarchical task decomposition)
