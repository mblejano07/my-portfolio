# Multi-Agent Architecture — Production Reference

**Version:** 1.0  
**Date:** 2026-04-25  
**Status:** Active — Enforced for all projects  
**Based on:** OpenClaw docs, CrewAI, LangGraph, AutoGen, Google ADK, AWS/Azure patterns

---

## Executive Summary

Our multi-agent setup follows the **Hierarchical Task Decomposition** pattern — the industry standard for complex development work. This document defines the correct chain of command, delegation protocols, and failure prevention rules.

**Today's lesson:** Subagents are for bounded tasks with clear completion, NOT for daemon processes or replacing existing specialists.

---

## 1. Organizational Hierarchy

### 1.1 Chain of Command (Operational Flow)

```
┌─────────────────────────────────────────────────────────┐
│                      MIKE (Human)                       │
│              Final approval, escalations, direction     │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                  Chief of Staff (Main)                  │
│         Execution coordinator, primary contact          │
│    Receives requests → Routes to Buddy for analysis     │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│            Buddy (Business Analyst)                     │
│    Requirements, user stories, use cases, acceptance    │
│    Hands off to Orchestrator when requirements done     │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              Orchestrator (Technical Lead)              │
│    Sprint breakdown, task assignment, dependency mgmt   │
│    Assigns to Specialists based on skill requirements   │
└─────────────────────────────────────────────────────────┘
                          ↓
    ┌───────────┬───────────┬───────────┬───────────┐
    ↓           ↓           ↓           ↓           ↓
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│Backend │ │Frontend│ │Designer│ │Sentinel│ │ Arbiter│
│  API   │ │  SPA   │ │  UI/UX │ │  QA    │ │Review  │
└────────┘ └────────┘ └────────┘ └────────┘ └────────┘
    ↓           ↓           ↓           ↓           ↓
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│ Scribe │ │ Bantay │ │ Comms  │ │Utility │ │ Temp   │
│  Docs  │ │Security│ │Notify  │ │Agents  │ │Agents  │
└────────┘ └────────┘ └────────┘ └────────┘ └────────┘
```

### 1.2 Security/Audit Chain (Independent)

```
┌─────────────────────────────────────────────────────────┐
│                      MIKE (Human)                       │
│              Direct reports, no filtering               │
└─────────────────────────────────────────────────────────┘
                          ↑
┌─────────────────────────────────────────────────────────┐
│              Bantay (Compliance Monitor)                │
│    Audits ALL agents (including Chief of Staff)         │
│    Direct line to Mike for security findings            │
│    Evidence-based, not opinion-based                    │
└─────────────────────────────────────────────────────────┘
```

**Critical:** Bantay does NOT report through Chief of Staff. This is an independent audit channel.

---

## 2. Delegation Protocol

### 2.1 When to Use Each Method

| Method | Use Case | Example |
|--------|----------|---------|
| **sessions_send** | Existing specialist agent is running | Chief → Buddy: "Here's the request, analyze requirements" |
| **sessions_spawn** (utility-*) | One-off bounded task, no existing specialist | "utility-research-vue-libraries" |
| **sessions_spawn** (acp runtime) | Coding work needing file access | Claude Code for feature implementation |
| **DO NOT SPAWN** | Daemon tasks, open-ended work, specialist replacement | ❌ "keep server running", ❌ label: "Frontend" |

### 2.2 Pre-Spawn Checklist (Mandatory)

Before ANY `sessions_spawn` call:

```bash
# 1. Run validation script
~/.openclaw/pre_spawn_check.sh <label>

# Exit code 0 = allowed, proceed
# Exit code 1 = blocked, use sessions_send instead

# 2. Verify task type
# ✅ Bounded task with clear completion?
# ✅ Label starts with utility-/temp-/one-off-/quick-/portfolio-?
# ✅ NOT matching team roster (Buddy, Orchestrator, Frontend, etc.)?

# 3. If any check fails → ABORT, use sessions_send to existing specialist
```

### 2.3 Context Handoff Format

When delegating via `sessions_send`, use structured context:

```markdown
## Task Assignment

**From:** Chief of Staff  
**To:** Buddy  
**Priority:** [high|medium|low]  
**Reversibility:** [high|medium|low]

### Objective
[Clear single-sentence goal]

### Context
- Project: [repo/workspace]
- Stakeholders: [who requested]
- Constraints: [timeline, budget, technical]

### Deliverables
- [ ] User stories (Gherkin format)
- [ ] Acceptance criteria
- [ ] Use cases
- [ ] Handoff ready for Orchestrator

### Verification
- Method: [LLM_JUDGE|SCHEMA|FUNCTION]
- Criteria: [what "done" looks like]

### Max Iterations
[Default: 3 for review loops]
```

---

## 3. Task Classification

### 3.1 Bounded Tasks (✅ OK for Subagents)

| Characteristic | Example |
|----------------|---------|
| Clear completion state | "Research top 5 Vue component libraries" |
| Time-boxed (<30 min typical) | "Summarize this 50-page doc" |
| Independent work | "Generate test cases for auth module" |
| No external state dependency | "Draft API documentation" |

### 3.2 Unbounded Tasks (❌ NOT for Subagents)

| Characteristic | Correct Approach |
|----------------|------------------|
| Daemon process ("keep running") | Mike runs directly, or process manager (pm2) |
| "Until further notice" | Ask Mike for completion criteria |
| Replacing existing specialist | Use `sessions_send` to that specialist |
| Open-ended monitoring | Bantay's role — delegate via sessions_send |

### 3.3 Decision Tree

```
Task received
    │
    ├─→ Is there an existing specialist agent for this work?
    │   ├─ YES → Use sessions_send (delegate properly)
    │   └─ NO → Continue ↓
    │
    ├─→ Is this a bounded task with clear completion?
    │   ├─ NO → Ask Mike, do NOT spawn
    │   └─ YES → Continue ↓
    │
    ├─→ Run pre_spawn_check.sh
    │   ├─ BLOCKED → Abort, use sessions_send
    │   └─ ALLOWED → Continue ↓
    │
    └─→ Label validation
        ├─ Starts with utility-/temp-/one-off-? → Proceed
        └─ Matches team roster? → BLOCK, delegate instead
```

---

## 4. Review & Quality Loops

### 4.1 Iterative Review Pattern

Based on Google ADK Loop Agents + CrewAI hierarchical review:

```
┌─────────────────────────────────────────────────────────┐
│  Worker generates output (code, doc, analysis)          │
│              ↓                                          │
│  Reviewer (Sentinel/Arbiter) examines full output       │
│              ↓                                          │
│  Reviewer outputs: confirmed issues + severity          │
│              ↓                                          │
│  Worker revises based on feedback                       │
│              ↓                                          │
│  Repeat until:                                          │
│    - Zero confirmed issues, OR                          │
│    - Max iterations reached (default: 3), OR            │
│    - Quality score exceeds threshold                    │
└─────────────────────────────────────────────────────────┘
```

### 4.2 Termination Conditions

| Condition | When to Use | Default |
|-----------|-------------|---------|
| **Max iterations** | Safety valve for all loops | 3 rounds |
| **Zero defects** | Code, docs, high-stakes output | — |
| **Quality threshold** | Subjective work (design, writing) | 0.9/1.0 |
| **Cost budget** | Production systems with SLA | Token limit |
| **Time budget** | Time-sensitive work | 30 min |

### 4.3 Security Degradation Warning

**Research finding (IEEE-ISTAS 2025):** Code subjected to 5+ AI improvement iterations shows **37.6% increase in critical vulnerabilities**.

**Countermeasures:**
1. Cap functional iteration at 3-4 rounds
2. Run dedicated security review (Sentinel) as separate pass
3. Use SAST tools, not just LLM judgment, for security checks
4. Compare final output to original for security-relevant changes

---

## 5. Trust Boundaries & Permissions

### 5.1 Action Classification Matrix

Based on AWS Agentic AI Security Scoping Matrix:

| Impact | Reversible | Authorization |
|--------|------------|---------------|
| **Low** (read, draft, analyze) | High | ✅ Fully automated |
| **Low** (read, draft, analyze) | Low | ✅ Fully automated |
| **Medium** (write, send message) | High | ✅ Automated, log only |
| **Medium** (write, send message) | Low | ⚠️ Async approval |
| **High** (infra change, $$) | High | ⚠️ Sync approval |
| **High** (infra change, $$) | Low | 🛑 Human approval required |

### 5.2 Approval Workflow (P0-P3)

Per `APPROVAL-WORKFLOW.md`:

| Level | Before | Requires |
|-------|--------|----------|
| **P0** | Development | Project Charter, Architecture, Security Plan |
| **P1** | Implementation | Sprint Plan, Test Plan, UI/UX, API Contracts |
| **P2** | Deployment | QA Report, Security Audit, Code Review |
| **P3** | Critical Changes | Scope/Timeline changes, Architecture changes |

**Rule:** DO NOT PROCEED without explicit approval at each gate.

---

## 6. Failure Modes & Prevention

### 6.1 Known Failure Patterns

| Failure | Cause | Prevention |
|---------|-------|------------|
| **Infinite review loops** | Manager rejects outputs indefinitely | Hard-cap rounds (max: 3-4), fall back to "good enough" |
| **Delegation loops** | A→B→C→A circular delegation | Task IDs, max depth (3 hops), reject cycles |
| **Context loss** | Critical constraints dropped in handoff | Structured context format, echo-back verification |
| **Blocking chains** | Synchronous waits eliminate parallelism | Model dependencies, parallelize independent branches |
| **Runaway cost** | Iterative loops without limits | Max iterations + token budget + circuit breakers |
| **Specialist bypass** | Spawning replacement for existing agent | Pre-spawn check, sessions_send first |
| **Post-abort overreach** | Agent takes over after abort | Stop, acknowledge, wait for direction |

### 6.2 Recovery Procedures

**When a subagent is aborted:**
1. **Stop immediately** — Do not continue the work
2. **Acknowledge** — "Understood, stopping"
3. **Wait** — Do not offer to take over unless asked
4. **Ask** — "Should I X or wait for direction?" if action seems needed

**When a specialist agent doesn't respond:**
1. Send 2nd attempt via `sessions_send`
2. If no response after 2 attempts → Report to Mike
3. **DO NOT** spawn a replacement subagent
4. Mike decides: wait, restart specialist, or temp spawn

---

## 7. Observability & Metrics

### 7.1 Required Metrics (Per Task)

| Metric | Target | Alert Threshold |
|--------|--------|-----------------|
| **First-attempt success rate** | >70% | <50% |
| **Rework rate** | <30% | >40% |
| **Review convergence rate** | >90% | <70% |
| **Mean rounds to convergence** | 1-2 | >3 |
| **Delegation depth** | 1-2 hops | >3 hops |
| **Token cost per task** | [project-specific] | 2x baseline |

### 7.2 Logging Requirements

All delegation events must log:
- Task ID (unique, traceable)
- From/To agents
- Timestamp (start, end)
- Completion status (success/rejected/aborted)
- Iteration count (for review loops)
- Token cost (if available)

**Log location:** `~/.openclaw/logs/delegation-*.log`

---

## 8. Framework Reference Comparison

### 8.1 Pattern Support

| Pattern | CrewAI | LangGraph | AutoGen | OpenClaw |
|---------|--------|-----------|---------|----------|
| Sequential | ✅ | ✅ | ✅ | ✅ (sessions_send) |
| Parallel | ✅ | ✅ | ✅ | ✅ (parallel spawns) |
| Hierarchical | ✅ | ✅ | ✅ | ✅ (this doc) |
| Loop/Review | ✅ | ✅ | ✅ | ✅ (Sentinel/Arbiter) |
| Pub-Sub | ❌ | ✅ | ⚠️ | ❌ |
| Blackboard | ❌ | ⚠️ | ✅ | ❌ |

### 8.2 Our Implementation

| Component | Implementation |
|-----------|----------------|
| **Hierarchy** | Chief → Buddy → Orchestrator → Specialists |
| **Delegation** | `sessions_send` for existing agents |
| **Subagents** | `sessions_spawn` for utility/temp tasks only |
| **Review** | Sentinel (QA) + Arbiter (Architecture) |
| **Audit** | Bantay (independent, direct to Mike) |
| **Approval** | P0-P3 gates per APPROVAL-WORKFLOW.md |

---

## 9. Today's Incident (2026-04-25)

### 9.1 What Happened

1. Subagent spawned with label `openclaw-control-ui` (no utility- prefix)
2. Task: "Keep dev server running on port 3001" (daemon, no completion)
3. Subagent aborted by Mike
4. Chief of Staff offered to take over (overreach)
5. Mike called out the violation

### 9.2 Root Causes

| Issue | Correct Pattern |
|-------|-----------------|
| **Wrong task type** | Daemon tasks ≠ subagent scope |
| **No completion criteria** | Subagents must complete and report |
| **Skipped chain of command** | Should be: Chief → Buddy → Orchestrator → Frontend |
| **No pre-spawn check** | `pre_spawn_check.sh` should have blocked |
| **Post-abort overreach** | Should have stopped and waited |

### 9.3 Fixes Applied

- [x] Document created (this file)
- [x] Lessons recorded in `MULTI-AGENT-LESSONS.md`
- [ ] Pre-spawn check script tested/enforced
- [ ] SOUL.md updated with post-abort protocol
- [ ] AGENTS.md updated with decision tree

---

## 10. Sources & References

### 10.1 Official Documentation
- https://docs.openclaw.ai/subagents
- https://docs.openclaw.ai/concepts/session-tool/
- https://learnopenclaw.com/advanced/sub-agents

### 10.2 Industry Patterns
- https://rapidclaw.dev/blog/multi-agent-orchestration-patterns-2026
- https://zylos.ai/research/2026-03-01-hierarchical-ai-agent-coordination
- https://docs.cloud.google.com/architecture/choose-design-pattern-agentic-ai-system

### 10.3 Frameworks Studied
- CrewAI (hierarchical process, manager_agent)
- LangGraph (state-machine supervision)
- AutoGen/AG2 (conversational multi-agent)
- Google ADK (LoopAgent, SequentialAgent, ParallelAgent)
- OpenAI Agents SDK (routines, handoffs)

### 10.4 Research Papers
- AgentOrchestra: Hierarchical Multi-Agent Framework (arXiv 2506.12508)
- Security Degradation in Iterative AI Code Generation (IEEE-ISTAS 2025)
- A Taxonomy of Hierarchical Multi-Agent Systems (arXiv 2508.12683)

---

## 11. Enforcement

### 11.1 Violation Logging

All violations logged to: `~/.openclaw/logs/delegation-violations.log`

Format:
```
[TIMESTAMP] VIOLATION: [type]
  Agent: [who violated]
  Task: [what was attempted]
  Rule: [which rule was broken]
  Action: [corrective taken]
```

### 11.2 Escalation Path

1. **First violation** → Document, self-correct
2. **Second violation** → Mike notified, review this doc
3. **Third violation** → Stop work, architecture review required

### 11.3 Periodic Audit

Bantay runs hourly via cron:
```bash
~/.openclaw/check-delegation.sh
```

Scans for:
- Spawns with roster-matching labels
- Missing utility- prefixes
- Daemon-task patterns
- Chain-of-command skips

---

**Last updated:** 2026-04-25  
**Next review:** Before any new project kickoff  
**Owner:** Chief of Staff (enforced by Bantay)
