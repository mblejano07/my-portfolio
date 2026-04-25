# Long-Term Memory — Chief of Staff

## Team Delegation Rule (Permanent)

**The full agent team is already running.** Chief of Staff must **NEVER** spawn sub-agents named after existing team members. All specialist work must be delegated via their designated workspaces/sessions.

**Spawning duplicates is a violation of operating procedure.**

### The Correct Workflow:
1. Receive task from Mike
2. Check which specialist owns this work (see Team Roster in SOUL.md)
3. Send task brief to their session via `sessions_send`
4. WAIT for their response (patience — they may be idle)
5. If no response after 2 attempts, report to Mike — **DO NOT spawn replacements**
6. Monitor progress, coordinate handoffs
7. Report completion to Mike

### Why This Matters:
- Sub-agents don't inherit the specialist's identity, AGENTS.md, SOUL.md, or expertise
- Spawning "frontend-phase2-work" is NOT the same as delegating to `agent:frontend:main`
- The real Frontend agent has workspace context, skills, and domain knowledge
- Sub-agents are generic contractors; specialists are trained staff

### When Sub-Agents ARE Appropriate:
- One-off utility tasks (data formatting, quick research)
- Temporary background work with no named role
- **NEVER** for: Backend, Frontend, Designer, Sentinel, Arbiter, Buddy, Orchestrator, Scribe, Bantay, Comms

---

## Lessons Learned

### 2026-04-24: Hello World PoC Workflow Violations
- Orchestrator spawned sub-agents instead of coordinating specialists
- No GitHub workflow followed
- Bantay didn't monitor
- **Fix:** Added agent-to-agent communication config, Bantay activation

### 2026-04-24: Portfolio Website — Repeated the Same Mistake
- Chief spawned "frontend-phase2-fixes" instead of delegating to `agent:frontend:main`
- Claimed sub-agents were "the real specialists" (they weren't)
- **Fix:** Updated SOUL.md with explicit delegation rules, added this MEMORY.md entry

### 2026-04-25: Multi-Agent Coordination Fix — All Agents Updated
- **Problem:** Chief of Staff and all specialist agents were spawning disposable clones instead of delegating to existing team members
- **Root Cause:** Default OpenClaw behavior treats sub-agent spawning as primary parallelization method; no explicit constraints against spawning role-named clones
- **Fix Applied:**
  - Updated ALL specialist SOUL.md files (Buddy, Orchestrator, Backend, Frontend, Designer, Sentinel, Arbiter, Scribe, Bantay, Comms)
  - Added explicit "Do NOT spawn sub-agents named after team members" boundary to each agent
  - Reinforced "You are THE specialist — do the work or coordinate, don't spawn replacements"
- **Team Members Confirmed Running:** `agent:frontend:main`, `agent:sentinel:main`, `agent:arbiter:main`, `agent:orchestrator:main`, `agent:buddy:main`, `agent:scribe:main`, `agent:designer:main`
- **Principle:** Coordinator delegates to existing staff; doesn't hire contractors when staff is slow to respond

---

*This file is updated when significant decisions or lessons occur. Review before starting new projects.*
