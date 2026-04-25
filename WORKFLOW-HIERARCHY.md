# Workflow Hierarchy — All Project Types

**Date:** 2026-04-25 17:02 GMT+8  
**Status:** Active Protocol  
**Principle:** Same hierarchy, different specialists activated

---

## 🎯 Universal Workflow Hierarchy

**This hierarchy applies to ALL project types:**
- Full-Stack Web App
- API-Only Service
- Standalone SPA
- Static Website
- Mobile App (Flutter)

---

## 📊 Operational Chain (Project Work)

```
┌─────────────────────────────────────────────────────────┐
│                    MIKE (You)                           │
│              Project Request / Decision                 │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              CHIEF OF STAFF (Main)                      │
│    • Receives request from Mike                         │
│    • Classifies project type                            │
│    • Delegates to Buddy for requirements                │
│    • Coordinates team via sessions_send                 │
│    • Reports completion to Mike                         │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              BUDDY (Business Analyst)                   │
│    • Gathers requirements                               │
│    • Writes user stories                                │
│    • Confirms project type & template                   │
│    • Hands off to Orchestrator                          │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              ORCHESTRATOR (Technical Coordinator)       │
│    • Breaks down into sprint tasks                      │
│    • Assigns to appropriate specialists                 │
│    • Manages handoffs between specialists               │
│    • Tracks progress                                    │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┼────────────┬────────────────┐
        │            │            │                │
        ▼            ▼            ▼                ▼
┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐
│ BACKEND   │ │ FRONTEND  │ │ DESIGNER  │ │ SCRIBE    │
│ (Laravel) │ │ (Vue/Flutter)│ │ (UI/UX)  │ │ (Docs)    │
└───────────┘ └───────────┘ └───────────┘ └───────────┘
        │            │            │                │
        └────────────┴────────────┴────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              SENTINEL (QA + Security)                   │
│    • Tests functionality                                │
│    • Security audit                                     │
│    • Accessibility check                                │
│    • Issues approval or rejection                       │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              ARBITER (Technical Reviewer)               │
│    • Architecture validation                            │
│    • Code review                                        │
│    • Final sign-off                                     │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                    MIKE (You)                           │
│              Final Approval / Deployment                │
└─────────────────────────────────────────────────────────┘
```

---

## 🛡️ Security/Audit Chain (Independent)

**Bantay operates in PARALLEL — not in sequence:**

```
┌─────────────────────────────────────────────────────────┐
│              BANTAY (Compliance Monitor)                │
│    • Independent audits (parallel, not sequential)      │
│    • Privacy/GDPR/PDPA compliance                       │
│    • Dark pattern detection                             │
│    • WCAG accessibility monitoring                      │
│    • OWASP security checks                              │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ (Direct line — no filtering)
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                    MIKE (You)                           │
│              Direct Security Reports                    │
└─────────────────────────────────────────────────────────┘
```

**Key Points:**
- Bantay does NOT report through Chief of Staff
- Bantay can audit ANY agent without permission
- Bantay's findings are evidence-based, not opinion-based
- Bantay runs hourly automated audits via cron

---

## 📋 Project Type Matrix — Which Specialists Are Active

| Project Type | Buddy | Orchestrator | Backend | Frontend | Designer | Sentinel | Arbiter | Scribe | Comms |
|--------------|-------|--------------|---------|----------|----------|----------|---------|--------|-------|
| **Full-Stack Web App** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **API-Only Service** | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| **Standalone SPA** | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Static Website** | ✅ | ✅ | ❌ | ✅ (minimal) | ⚠️ Optional | ✅ | ⚠️ Optional | ✅ | ✅ |
| **Mobile App (Flutter)** | ✅ | ✅ | ⚠️ Optional | ✅ (Mobile) | ✅ | ✅ | ✅ | ✅ | ✅ |

**Legend:**
- ✅ = Active participant
- ❌ = Not involved (no backend needed, etc.)
- ⚠️ = Conditional (depends on project requirements)

---

## 🔄 Delegation Protocol (All Projects)

### Step-by-Step Flow

| Step | From | To | Method | Purpose |
|------|------|-----|--------|---------|
| 1 | Mike | Chief | Direct request | Project initiation |
| 2 | Chief | Buddy | `sessions_send` | Requirements gathering |
| 3 | Buddy | Orchestrator | `sessions_send` | Technical handoff |
| 4 | Orchestrator | Specialists | `sessions_send` | Task assignment |
| 5 | Specialists | Sentinel | `sessions_send` | QA review request |
| 6 | Sentinel | Arbiter | `sessions_send` | Final technical review |
| 7 | Arbiter | Chief | `sessions_send` | Approval notification |
| 8 | Chief | Mike | Direct reply | Completion report |

**Parallel Track:**
- Bantay → Mike (direct, independent audits throughout)
- Comms → Stakeholders (notifications as needed)

---

## ⚠️ CRITICAL: Delegation vs Spawning

### ✅ Correct: Delegation via sessions_send

```bash
# Chief delegates to Buddy
sessions_send(label="buddy", message="Gather requirements for portfolio site")

# Buddy hands off to Orchestrator
sessions_send(label="orchestrator", message="Requirements complete, create sprint plan")

# Orchestrator assigns to Frontend
sessions_send(label="frontend", message="Build portfolio using spa-standalone template")
```

### ❌ Incorrect: Spawning Clones (BLOCKED)

```bash
# This is BLOCKED by pre_spawn_check.sh
sessions_spawn(label="buddy-portfolio-work", ...)  # ❌ BLOCKED
sessions_spawn(label="frontend-phase2", ...)       # ❌ BLOCKED
sessions_spawn(label="sentinel-quick-check", ...)  # ❌ BLOCKED
```

**Why Blocked:**
- Sub-agents don't inherit specialist's AGENTS.md/SOUL.md
- Sub-agents lack domain expertise and workspace context
- Spawning duplicates bypasses the real specialist team
- **The real specialists are already running — delegate to them!**

---

## 🎯 Example Workflows by Project Type

### Example 1: Full-Stack Web App (SaaS Platform)

**Your Request:** "Build a project management SaaS with user auth"

| Step | Agent | Action | Template |
|------|-------|--------|----------|
| 1 | Chief | Classify: Full-Stack | — |
| 2 | Buddy | Requirements: user stories, auth flows | — |
| 3 | Orchestrator | Sprint plan: backend + frontend tasks | — |
| 4 | Backend | Build Laravel API with Sanctum auth | `webkit-api` |
| 5 | Frontend | Build Vue 3 SPA with PrimeVue | `webkit-spa-prime` |
| 6 | Designer | Component design, Aura theme config | — |
| 7 | Sentinel | QA: API tests + frontend tests | — |
| 8 | Arbiter | Review: architecture, security | — |
| 9 | Chief | Report: "Ready for deployment" | — |

**All specialists active.**

---

### Example 2: Standalone SPA (Portfolio Site)

**Your Request:** "Build me a portfolio site (no backend)"

| Step | Agent | Action | Template |
|------|-------|--------|----------|
| 1 | Chief | Classify: Standalone SPA | — |
| 2 | Buddy | Requirements: static content, Formspree contact | — |
| 3 | Orchestrator | Sprint plan: frontend + design tasks | — |
| 4 | Backend | ❌ Not involved | — |
| 5 | Frontend | Build Vue 3 SPA (no API code) | `webkit-spa-standalone` |
| 6 | Designer | Layout, color scheme, typography | — |
| 7 | Sentinel | QA: **verify NO broken API calls**, forms work | — |
| 8 | Arbiter | Review: **verify standalone mode**, no backend deps | — |
| 9 | Chief | Report: "Portfolio ready" | — |

**Backend not involved. Sentinel + Arbiter verify standalone mode.**

---

### Example 3: API-Only Service (Microservice)

**Your Request:** "Build a webhook receiver API"

| Step | Agent | Action | Template |
|------|-------|--------|----------|
| 1 | Chief | Classify: API-Only | — |
| 2 | Buddy | Requirements: endpoints, auth method, rate limits | — |
| 3 | Orchestrator | Sprint plan: backend tasks only | — |
| 4 | Backend | Build Laravel API, configure Sanctum tokens | `webkit-api` |
| 5 | Frontend | ❌ Not involved | — |
| 6 | Designer | ❌ Not involved | — |
| 7 | Sentinel | QA: API tests, auth enforced, rate limiting | — |
| 8 | Arbiter | Review: API design, security | — |
| 9 | Scribe | API documentation (OpenAPI/Swagger) | — |
| 10 | Chief | Report: "API ready" | — |

**Frontend + Designer not involved. Scribe critical for API docs.**

---

### Example 4: Static Website (Brochure Site)

**Your Request:** "Create a simple brochure site for my restaurant"

| Step | Agent | Action | Template |
|------|-------|--------|----------|
| 1 | Chief | Classify: Static Website | — |
| 2 | Buddy | Requirements: menu, hours, contact, photos | — |
| 3 | Orchestrator | Sprint plan: HTML/CSS tasks | — |
| 4 | Backend | ❌ Not involved | — |
| 5 | Frontend | Build plain HTML/CSS site | `webkit-static` |
| 6 | Designer | ⚠️ Optional (logo, color scheme) | — |
| 7 | Sentinel | QA: all links work, forms submit, mobile responsive | — |
| 8 | Arbiter | ⚠️ Optional (simple project, may skip) | — |
| 9 | Chief | Report: "Site ready for hosting" | — |

**Minimal specialist involvement. No build process.**

---

### Example 5: Mobile App (Flutter Cross-Platform)

**Your Request:** "Build a mobile app for iOS and Android"

| Step | Agent | Action | Template |
|------|-------|--------|----------|
| 1 | Chief | Classify: Mobile App | — |
| 2 | Buddy | Requirements: platforms, native features, backend? | — |
| 3 | Orchestrator | Sprint plan: Flutter tasks | — |
| 4 | Backend | ⚠️ Optional (if API needed) | `webkit-api` |
| 5 | Frontend | Build Flutter app (iOS + Android) | `webkit-mobile-flutter` |
| 6 | Designer | Mobile UI/UX, Material 3 + Cupertino | — |
| 7 | Sentinel | QA: test on both emulators, no console errors | — |
| 8 | Arbiter | Review: Flutter architecture, app store compliance | — |
| 9 | Chief | Report: "Mobile app ready for stores" | — |

**Frontend uses Flutter (not Vue). Backend optional.**

---

## 🧠 Key Principles

### 1. Hierarchy Never Changes

```
Mike → Chief → Buddy → Orchestrator → Specialists → Sentinel → Arbiter → Mike
```

**Always.** Regardless of project type.

### 2. Specialists Activated Depends on Project Type

- Full-Stack → All specialists
- API-Only → Backend + Sentinel + Arbiter + Scribe
- Standalone SPA → Frontend + Designer + Sentinel + Arbiter
- Static → Frontend (minimal) + Sentinel
- Mobile → Frontend (Flutter) + Designer + Sentinel + Arbiter

### 3. Bantay Is Always Active (Parallel)

Bantay audits run independently throughout the workflow.

### 4. Delegation Method Is Always sessions_send

Never spawn clones. Always delegate to existing specialists.

### 5. Template Selection Happens at Buddy Stage

Buddy confirms project type and template before handoff to Orchestrator.

---

## 📊 Decision Checklist (Buddy's Responsibility)

Before handoff to Orchestrator, Buddy must confirm:

### Project Classification
- [ ] **Project type:** Full-stack / API-only / Standalone SPA / Static / Mobile
- [ ] **Backend required?** Yes / No
- [ ] **Frontend required?** Yes / No
- [ ] **Mobile required?** Yes / No (which platform?)

### Template Selection
- [ ] **Template(s):** api, spa, spa-standalone, static, mobile-flutter
- [ ] **Standalone mode?** (if using spa-standalone, confirm no backend)
- [ ] **Form handlers:** Formspree/EmailJS (for standalone/static)

### Specialist Activation
- [ ] **Backend needed?** → Activate Backend agent
- [ ] **Frontend needed?** → Activate Frontend agent
- [ ] **UI/UX needed?** → Activate Designer agent
- [ ] **Documentation needed?** → Activate Scribe agent

### Project Setup
- [ ] **Repo:** GitHub URL or create new?
- [ ] **Branch Strategy:** `feature/` → `develop` → `main`?
- [ ] **Approval Process:** Who approves what?
- [ ] **Timeline Format:** Gantt, Kanban, Sprint file?

---

## 📚 Related Documentation

- **AGENTS.md** — Team structure and responsibilities
- **SOUL.md** — Agent personalities and boundaries
- **PROJECT-TYPES.md** — Detailed project type specifications
- **TEMPLATES-CREATED.md** — Template inventory and locations
- **MEMORY.md** — Team delegation rules and lessons learned

---

**Last Updated:** 2026-04-25 17:02 GMT+8  
**Owner:** Chief of Staff  
**Review:** Before each new project kickoff
