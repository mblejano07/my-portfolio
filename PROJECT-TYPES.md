# Development Project Types — Template Selection Guide

**Date:** 2026-04-25 16:45 GMT+8  
**Status:** Active Reference  
**Location:** `/Users/mblejano/.openclaw/workspace/PROJECT-TYPES.md`

---

## Quick Decision Matrix

| Project Type | Backend Template | Frontend Template | Use Case |
|--------------|------------------|-------------------|----------|
| **Full-Stack Web App** | ✅ webkit-api | ✅ webkit-spa-prime | SaaS, dashboards, user platforms |
| **API-Only Service** | ✅ webkit-api | ❌ None | Microservices, headless CMS, integrations |
| **Standalone SPA** | ❌ None | ✅ webkit-spa-prime* | Portfolios, landing pages, static sites |
| **Static Website** | ❌ None | ❌ None (or minimal) | Brochure sites, documentation |
| **Mobile App** | ⚠️ TBD | ⚠️ TBD | iOS/Android native or React Native |

*Note: webkit-spa-prime requires API integration cleanup for standalone use (see below)

---

## Template Inventory

### Available Templates

| Template | Location | Stack | Purpose |
|----------|----------|-------|---------|
| **webkit-api** | `/Users/mblejano/Documents/MBLEJANO Personal/webkit-templates/webkit-api/` | Laravel 11 + Sanctum | Backend API service |
| **webkit-spa-prime** | `/Users/mblejano/Documents/MBLEJANO Personal/webkit-templates/webkit-spa-prime/` | Vue 3 + PrimeVue + Pinia | Frontend SPA |

### Workspace Symlinks

```
~/.openclaw/workspace/templates/api/  → webkit-api template
~/.openclaw/workspace/templates/spa/  → webkit-spa-prime template
```

---

## Project Type Specifications

### 1. Full-Stack Web Application 🌐

**Definition:** Complete web application with backend API + frontend SPA

**Examples:**
- SaaS platforms
- Admin dashboards
- E-commerce sites
- Social platforms
- Project management tools

**Template Selection:**
- ✅ **Backend:** `webkit-api` (Laravel 11)
- ✅ **Frontend:** `webkit-spa-prime` (Vue 3 + PrimeVue)

**Architecture:**
```
┌─────────────────┐         ┌─────────────────┐
│   Vue 3 SPA     │ ──────→ │  Laravel API    │
│  (PrimeVue UI)  │  HTTP   │  (Sanctum Auth) │
└─────────────────┘         └─────────────────┘
         │                          │
         │                          │
         ▼                          ▼
   Browser/Client           Database (MySQL/PostgreSQL)
                            File Storage (S3/Local)
```

**Buddy Checklist:**
- [ ] Confirm full-stack requirements (not just frontend or backend)
- [ ] Identify authentication needs (Sanctum, OAuth, MFA)
- [ ] Define data models and relationships
- [ ] List external integrations (payment, email, storage)

**Orchestrator Setup:**
- [ ] Initialize both templates
- [ ] Configure CORS for API access
- [ ] Set up environment variables (VITE_API_URL, SANCTUM_TOKEN)
- [ ] Establish API contract (OpenAPI/Swagger)

**Sentinel QA:**
- [ ] API authentication working
- [ ] Frontend can call backend endpoints
- [ ] Error handling on both sides
- [ ] Security headers configured

---

### 2. API-Only Service 🔌

**Definition:** Backend service with no frontend — serves other applications

**Examples:**
- Microservices
- Headless CMS
- Webhook receivers
- Data processing pipelines
- Integration middleware

**Template Selection:**
- ✅ **Backend:** `webkit-api` (Laravel 11)
- ❌ **Frontend:** None

**Architecture:**
```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  Mobile App  │    │  3rd Party   │    │  Frontend    │
│              │    │   Service    │    │   (Other)    │
└──────────────┘    └──────────────┘    └──────────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  Laravel API    │
                    │  (Your Service) │
                    └─────────────────┘
```

**Buddy Checklist:**
- [ ] Define API consumers (who will call this API?)
- [ ] Specify authentication method (API keys, OAuth, JWT)
- [ ] Document rate limiting requirements
- [ ] Identify data retention policies

**Orchestrator Setup:**
- [ ] Initialize webkit-api template
- [ ] Configure API authentication (Sanctum tokens or OAuth2)
- [ ] Set up API documentation (OpenAPI/Swagger)
- [ ] Configure logging and monitoring

**Sentinel QA:**
- [ ] All endpoints return correct status codes
- [ ] Authentication enforced on protected routes
- [ ] Rate limiting active
- [ ] API documentation complete
- [ ] No sensitive data in logs

**Special Considerations:**
- API documentation is critical (Scribe responsibility)
- Versioning strategy needed (`/api/v1/`, `/api/v2/`)
- Backward compatibility policy required

---

### 3. Standalone SPA (No Backend) 🎨

**Definition:** Frontend-only application with static data or external APIs

**Examples:**
- Portfolio websites
- Landing pages
- Marketing sites
- Documentation sites
- Prototypes/MVPs

**Template Selection:**
- ❌ **Backend:** None
- ⚠️ **Frontend:** `webkit-spa-prime` (with modifications)

**Architecture:**
```
┌─────────────────┐
│   Vue 3 SPA     │
│  (PrimeVue UI)  │
└─────────────────┘
         │
         │
         ▼
   Static Data / External APIs
   (Formspree, Contentful, etc.)
```

**⚠️ CRITICAL: API Integration Mode Cleanup**

The `webkit-spa-prime` template is designed for API integration. For standalone use:

**Buddy Checklist:**
- [ ] Confirm NO backend will be built
- [ ] Identify form handlers (Formspree, EmailJS, mailto)
- [ ] List external APIs (if any)
- [ ] Confirm all content is static or from external sources

**Orchestrator Cleanup Required:**
```bash
# 1. Remove API client code
rm src/services/api.*

# 2. Remove backend proxy from vite.config.js
# Edit: Remove lines like:
#   server: { proxy: { '/api': 'http://localhost:8000' } }

# 3. Check router for orphaned API routes
# Look for: /api/*, /login, /register, /dashboard

# 4. Verify environment variables
# Remove: VITE_API_URL, VITE_SANCTUM_TOKEN, etc.

# 5. Update form handlers
# Replace: api.post('/contact', ...)
# With: Formspree/EmailJS/mailto
```

**Sentinel QA (Enhanced for Standalone):**
- [ ] No broken API calls in console
- [ ] No 404 errors from missing backend
- [ ] Forms use external handlers (not API endpoints)
- [ ] No orphaned API routes in router
- [ ] No environment variables reference backend

**Arbiter Review:**
- [ ] Verified "standalone" designation at project start
- [ ] No orphaned backend dependencies
- [ ] External services properly configured

**Lesson from Portfolio Project (2026-04-24):**
> Always explicitly confirm "standalone" vs "API-connected" at project start. Sentinel + Arbiter must verify no broken API calls.

---

### 4. Static Website 📄

**Definition:** Simple HTML/CSS/JS site with minimal interactivity

**Examples:**
- Brochure websites
- Event landing pages
- Resume/CV sites
- Documentation (if not using a generator)

**Template Selection:**
- ❌ **Backend:** None
- ❌ **Frontend:** None (or minimal starter)

**When to Use Templates:**
- Use webkit-spa-prime if you need Vue 3 reactivity
- Start from scratch if it's truly static (HTML/CSS only)

**Buddy Checklist:**
- [ ] Confirm no dynamic features needed
- [ ] Identify hosting platform (Netlify, Vercel, GitHub Pages)
- [ ] Confirm content update process (manual vs CMS)

---

### 5. Mobile Application 📱

**Current Status:** ⚠️ **NO TEMPLATE AVAILABLE**

**Examples:**
- iOS native apps
- Android native apps
- React Native cross-platform
- Flutter cross-platform
- Progressive Web Apps (PWA)

**Template Selection:**
- ❌ **Backend:** Optional (webkit-api if API needed)
- ❌ **Frontend:** No mobile template yet

**Options:**

#### Option A: React Native (Cross-Platform)
```
Stack: React Native + Expo + TypeScript
Backend: Optional (webkit-api if API needed)
When: Need both iOS + Android from one codebase
```

#### Option B: Native iOS (Swift/SwiftUI)
```
Stack: Swift + SwiftUI
Backend: Optional (webkit-api if API needed)
When: iOS-only, need native features
```

#### Option C: Native Android (Kotlin/Jetpack Compose)
```
Stack: Kotlin + Jetpack Compose
Backend: Optional (webkit-api if API needed)
When: Android-only, need native features
```

#### Option D: Progressive Web App (PWA)
```
Stack: Vue 3 + PrimeVue + PWA plugins
Backend: Optional (webkit-api if API needed)
When: Web-first, offline support needed
Note: Can use webkit-spa-prime with PWA additions
```

**Recommendation:**
If mobile is needed, create a new template:
- `webkit-mobile-reactnative/` for cross-platform
- `webkit-pwa/` for progressive web apps

**Buddy Checklist (for mobile projects):**
- [ ] Confirm target platforms (iOS, Android, both)
- [ ] Identify native features needed (camera, GPS, push notifications)
- [ ] Determine if backend API is required
- [ ] Consider app store requirements (review process, fees)

---

## Decision Flowchart

```
Start: New Project
  │
  ▼
┌─────────────────────────────┐
│ Does it need a backend API? │
└─────────────┬───────────────┘
              │
     ┌────────┴────────┐
     │                 │
    YES               NO
     │                 │
     ▼                 ▼
┌─────────────┐   ┌──────────────────────┐
│ Need a UI?  │   │ API-only service     │
└─────┬───────┘   │ → webkit-api only    │
      │           └──────────────────────┘
      │
 ┌────┴────┐
 │         │
YES       NO
│         │
│         ▼
│    ┌────────────────────┐
│    │ Static website     │
│    │ → No template      │
│    │   (or minimal)     │
│    └────────────────────┘
│
▼
┌─────────────────────────────┐
│ Full-stack web application  │
│ → webkit-api +              │
│   webkit-spa-prime          │
└─────────────────────────────┘
```

---

## Buddy's Pre-Project Checklist

Before handing off to Orchestrator, Buddy must confirm:

### Project Type Classification
- [ ] **Project type confirmed:** Full-stack / API-only / Standalone SPA / Static / Mobile
- [ ] **Backend required?** Yes / No
- [ ] **Frontend required?** Yes / No
- [ ] **Mobile required?** Yes / No (if yes, which platform?)

### Template Selection
- [ ] **Backend template:** webkit-api / None / Custom
- [ ] **Frontend template:** webkit-spa-prime / None / Custom
- [ ] **Standalone mode?** (if using webkit-spa-prime without backend)

### Integration Mode (Critical for Standalone SPA)
- [ ] If standalone: API client code removal confirmed
- [ ] If standalone: Backend proxy removal confirmed
- [ ] If standalone: Form handler alternative selected (Formspree/EmailJS)
- [ ] If standalone: No orphaned API routes

### Project Setup
- [ ] **Repo:** GitHub URL or create new?
- [ ] **Branch Strategy:** `feature/` → `develop` → `main`?
- [ ] **Approval Process:** Who approves what?
- [ ] **Timeline Format:** Gantt, Kanban, Sprint file?

---

## Orchestrator's Template Protocol

When breaking down tasks:

### For Full-Stack Projects
- Backend tasks → follow `webkit-api/app/` patterns
- Frontend tasks → follow `webkit-spa-prime/src/` patterns
- API contract → define before implementation
- Designer → PrimeVue component library (Aura theme)

### For API-Only Projects
- All tasks → follow `webkit-api/app/` patterns
- API documentation → high priority (Scribe)
- Authentication → configure early (Sanctum/OAuth)

### For Standalone SPA Projects
- All tasks → follow `webkit-spa-prime/src/` patterns
- **CRITICAL:** Remove API integration code first
- Forms → use external handlers (Formspree/EmailJS)
- Data → static or external APIs only

---

## Sentinel + Arbiter Verification

### Before Development Starts
- [ ] Project type explicitly confirmed (not assumed)
- [ ] Template selection matches project type
- [ ] Standalone mode verified (if applicable)

### Before Deployment
- [ ] No broken API calls (for standalone SPA)
- [ ] No orphaned backend dependencies
- [ ] External services configured correctly
- [ ] Security review completed

---

## Future Template Needs

### Missing Templates (To Be Created)

| Template | Purpose | Priority |
|----------|---------|----------|
| `webkit-mobile-reactnative/` | Cross-platform mobile | 🟡 Medium |
| `webkit-pwa/` | Progressive Web Apps | 🟡 Medium |
| `webkit-static/` | Minimal static site starter | 🟢 Low |
| `webkit-api-graphql/` | GraphQL API instead of REST | 🟢 Low |

### Recommendation
Create `webkit-mobile-reactnative/` template when first mobile project is requested.

---

## Summary Table

| Project Type | Backend | Frontend | Template(s) | Special Notes |
|--------------|---------|----------|-------------|---------------|
| **Full-Stack Web App** | ✅ | ✅ | webkit-api + webkit-spa-prime | Standard setup |
| **API-Only** | ✅ | ❌ | webkit-api | API docs critical |
| **Standalone SPA** | ❌ | ✅ | webkit-spa-prime* | *Requires cleanup |
| **Static Website** | ❌ | ❌ | None | Start from scratch |
| **Mobile App** | ⚠️ Optional | ⚠️ TBD | None yet | Need new template |

---

**Last Updated:** 2026-04-25  
**Owner:** Chief of Staff + Buddy  
**Review:** Before each new project kickoff
