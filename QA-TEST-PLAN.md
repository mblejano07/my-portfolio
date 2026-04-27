# QA Test Plan - Michael Lejano Professional Portfolio

**Project:** Professional Portfolio Website  
**Type:** Standalone SPA (No Backend)  
**QA Reviewer:** Sentinel (QA Tester) 🛡️  
**Test Environment:** http://localhost:3000/  
**Target Hosting:** GitHub Pages / Netlify / Vercel

---

## Test Execution Status

**Prepared:** 2026-04-25 18:40 GMT+8  
**Execution:** Pending Arbiter approval (90%+ score)  
**ETA:** ~2 hours once unblocked

---

## Phase 1: Functional Testing (30 min)

### F1: Hero Section (US-01)

| Test ID | Test Case             | Expected Result                         | Method     | Status |
| ------- | --------------------- | --------------------------------------- | ---------- | ------ |
| F1-01   | Verify name displays  | "Michael Barroga Lejano" visible        | Visual     | ⏳     |
| F1-02   | Verify title displays | "Senior Software Engineer / Developer"  | Visual     | ⏳     |
| F1-03   | Verify credentials    | "(ISC)² Certified in Cybersecurity, CC" | Visual     | ⏳     |
| F1-04   | Verify contact info   | Email, phone, location visible          | Visual     | ⏳     |
| F1-05   | Verify LinkedIn link  | Clickable, opens LinkedIn               | Click test | ⏳     |
| F1-06   | Verify resume button  | "Download Resume" button present        | Visual     | ⏳     |
| F1-07   | Test resume download  | PDF downloads successfully              | Click test | ⏳     |

### F2: About Section (US-01)

| Test ID | Test Case                   | Expected Result          | Method     | Status |
| ------- | --------------------------- | ------------------------ | ---------- | ------ |
| F2-01   | Verify professional summary | 3-4 paragraphs visible   | Visual     | ⏳     |
| F2-02   | Verify content accuracy     | Matches requirements doc | Comparison | ⏳     |
| F2-03   | Verify 4 key highlights     | Displayed correctly      | Visual     | ⏳     |

### F3: Experience Section (US-02)

| Test ID | Test Case                      | Expected Result                | Method      | Status |
| ------- | ------------------------------ | ------------------------------ | ----------- | ------ |
| F3-01   | Verify 3 positions             | All 3 DSWD positions listed    | Count       | ⏳     |
| F3-02   | Verify reverse chronological   | Current position first         | Order check | ⏳     |
| F3-03   | Verify IT Officer II details   | Title, dates, responsibilities | Comparison  | ⏳     |
| F3-04   | Verify Computer Programmer III | Title, dates, responsibilities | Comparison  | ⏳     |
| F3-05   | Verify Computer Maintenance    | Title, dates, responsibilities | Comparison  | ⏳     |
| F3-06   | Test expand/collapse           | Timeline entries expandable    | Interaction | ⏳     |

### F4: Skills Section (US-03)

| Test ID | Test Case                  | Expected Result               | Method     | Status |
| ------- | -------------------------- | ----------------------------- | ---------- | ------ |
| F4-01   | Verify 5 categories        | All categories present        | Count      | ⏳     |
| F4-02   | Verify Programming skills  | PHP, Vue.js, Laravel listed   | Comparison | ⏳     |
| F4-03   | Verify Cloud & DevOps      | AWS, CI/CD listed             | Comparison | ⏳     |
| F4-04   | Verify Project Management  | SCRUM, MS Project, Trello     | Comparison | ⏳     |
| F4-05   | Verify proficiency display | Progress bars or tags visible | Visual     | ⏳     |

### F5: Education & Certifications (US-04)

| Test ID | Test Case                      | Expected Result             | Method      | Status |
| ------- | ------------------------------ | --------------------------- | ----------- | ------ |
| F5-01   | Verify MS IT                   | DLSU, 2025-Present          | Comparison  | ⏳     |
| F5-02   | Verify BS Computer Engineering | TIP, 2007-2012, ABET        | Comparison  | ⏳     |
| F5-03   | Verify 9 certifications        | All certifications listed   | Count       | ⏳     |
| F5-04   | Verify ISC2 CC certification   | Issue date, expiry          | Comparison  | ⏳     |
| F5-05   | Verify AWS certifications      | 4 AWS certs listed          | Comparison  | ⏳     |
| F5-06   | Verify reverse chronological   | Newest certifications first | Order check | ⏳     |

### F6: Contact Section (US-05)

| Test ID | Test Case                  | Expected Result             | Method     | Status |
| ------- | -------------------------- | --------------------------- | ---------- | ------ |
| F6-01   | Verify contact form        | Name, email, message fields | Visual     | ⏳     |
| F6-02   | Test form submission       | Submits via Formspree       | Live test  | ⏳     |
| F6-03   | Verify success message     | Shows after submission      | Visual     | ⏳     |
| F6-04   | Verify direct contact info | Email, phone, LinkedIn      | Visual     | ⏳     |
| F6-05   | Verify social links        | GitHub, LinkedIn clickable  | Click test | ⏳     |

### F7: Navigation (US-07, FR-03)

| Test ID | Test Case                 | Expected Result                    | Method      | Status |
| ------- | ------------------------- | ---------------------------------- | ----------- | ------ |
| F7-01   | Test smooth scroll        | Clicking nav scrolls to section    | Interaction | ⏳     |
| F7-02   | Test active highlighting  | Current section highlighted in nav | Visual      | ⏳     |
| F7-03   | Test desktop nav          | Horizontal bar visible on desktop  | Visual      | ⏳     |
| F7-04   | Test mobile menu          | Hamburger menu on mobile           | Interaction | ⏳     |
| F7-05   | Test scroll to top button | Appears, scrolls to top            | Interaction | ⏳     |

### F8: Console/Network (P0 - Sprint 1 Lesson)

| Test ID | Test Case                   | Expected Result            | Method      | Status |
| ------- | --------------------------- | -------------------------- | ----------- | ------ |
| F8-01   | Check console errors        | ZERO errors in Console tab | F12 check   | ⏳     |
| F8-02   | Check network failures      | No failed requests         | Network tab | ⏳     |
| F8-03   | Verify no backend API calls | No calls to backend API    | Network tab | ⏳     |
| F8-04   | Verify Pinia initialization | No store errors            | Console     | ⏳     |
| F8-05   | Verify no CORS errors       | No CORS policy errors      | Console     | ⏳     |

---

## Phase 2: Accessibility Testing (30 min)

### A1: WCAG 2.1 AA Compliance (US-08, NFR-01)

| Test ID | Test Case                   | Expected Result                     | Tool     | Status |
| ------- | --------------------------- | ----------------------------------- | -------- | ------ |
| A1-01   | Color contrast ratio        | ≥ 4.5:1 for normal text             | axe-core | ⏳     |
| A1-02   | Color contrast (large text) | ≥ 3:1 for large text                | axe-core | ⏳     |
| A1-03   | Keyboard navigation         | All interactive elements accessible | Manual   | ⏳     |
| A1-04   | Focus states visible        | Focus ring on all elements          | Manual   | ⏳     |
| A1-05   | Alt text on images          | All images have alt attribute       | axe-core | ⏳     |
| A1-06   | ARIA labels                 | Interactive elements labeled        | axe-core | ⏳     |
| A1-07   | Heading hierarchy           | Proper H1 → H2 → H3 structure       | axe-core | ⏳     |
| A1-08   | Form labels                 | All form fields have labels         | axe-core | ⏳     |
| A1-09   | Screen reader test          | Content readable by screen reader   | Manual   | ⏳     |
| A1-10   | axe-core audit              | Zero critical violations            | axe-core | ⏳     |

### A2: Accessibility Manual Tests

| Test ID | Test Case                | Expected Result                         | Method | Status |
| ------- | ------------------------ | --------------------------------------- | ------ | ------ |
| A2-01   | Tab through page         | Focus moves logically                   | Manual | ⏳     |
| A2-02   | Skip to content          | Skip link present (if applicable)       | Manual | ⏳     |
| A2-03   | No keyboard traps        | Can tab out of all elements             | Manual | ⏳     |
| A2-04   | Error identification     | Form errors clearly identified          | Manual | ⏳     |
| A2-05   | Color not only indicator | Information not conveyed by color alone | Manual | ⏳     |

---

## Phase 3: Performance Testing (20 min)

### P1: Lighthouse Audit (FR-04, NFR-02)

| Test ID | Metric                   | Target  | Tool       | Status |
| ------- | ------------------------ | ------- | ---------- | ------ |
| P1-01   | Performance score        | > 90    | Lighthouse | ⏳     |
| P1-02   | Accessibility score      | > 90    | Lighthouse | ⏳     |
| P1-03   | Best Practices score     | > 90    | Lighthouse | ⏳     |
| P1-04   | SEO score                | > 90    | Lighthouse | ⏳     |
| P1-05   | First Contentful Paint   | < 1.5s  | Lighthouse | ⏳     |
| P1-06   | Time to Interactive      | < 3.5s  | Lighthouse | ⏳     |
| P1-07   | Total Blocking Time      | < 300ms | Lighthouse | ⏳     |
| P1-08   | Cumulative Layout Shift  | < 0.1   | Lighthouse | ⏳     |
| P1-09   | Speed Index              | < 3.4s  | Lighthouse | ⏳     |
| P1-10   | Largest Contentful Paint | < 2.5s  | Lighthouse | ⏳     |

### P2: Performance Manual Tests

| Test ID | Test Case          | Expected Result             | Method          | Status |
| ------- | ------------------ | --------------------------- | --------------- | ------ |
| P2-01   | Page load on 3G    | < 3 seconds                 | Chrome DevTools | ⏳     |
| P2-02   | Image optimization | WebP format used            | Network tab     | ⏳     |
| P2-03   | Code splitting     | Non-critical JS lazy loaded | Network tab     | ⏳     |
| P2-04   | Cache headers      | Assets cached properly      | Network tab     | ⏳     |

---

## Phase 4: Responsive Testing (20 min)

### R1: Breakpoint Testing (US-07)

| Test ID | Breakpoint       | Width  | Expected Result                            | Status |
| ------- | ---------------- | ------ | ------------------------------------------ | ------ |
| R1-01   | Mobile Small     | 320px  | All content readable, no horizontal scroll | ⏳     |
| R1-02   | Mobile Large     | 375px  | Touch targets ≥ 44px                       | ⏳     |
| R1-03   | Tablet Portrait  | 768px  | Layout adapts, menu collapses              | ⏳     |
| R1-04   | Tablet Landscape | 1024px | Multi-column layout                        | ⏳     |
| R1-05   | Desktop          | 1440px | Full layout visible                        | ⏳     |
| R1-06   | Desktop Large    | 1920px | No excessive whitespace                    | ⏳     |

### R2: Responsive Manual Tests

| Test ID | Test Case              | Expected Result           | Method      | Status |
| ------- | ---------------------- | ------------------------- | ----------- | ------ |
| R2-01   | No horizontal scroll   | On any breakpoint         | Visual      | ⏳     |
| R2-02   | Text readable          | Without zooming on mobile | Visual      | ⏳     |
| R2-03   | Images scale           | Properly on all devices   | Visual      | ⏳     |
| R2-04   | Navigation adapts      | Hamburger on mobile       | Interaction | ⏳     |
| R2-05   | Form fields usable     | On mobile devices         | Interaction | ⏳     |
| R2-06   | Google Mobile-Friendly | Pass test                 | Online tool | ⏳     |

---

## Phase 5: Cross-Browser Testing (15 min)

### B1: Browser Compatibility (NFR-04)

| Test ID | Browser       | Version | Expected Result        | Status |
| ------- | ------------- | ------- | ---------------------- | ------ |
| B1-01   | Chrome        | Latest  | All features work      | ⏳     |
| B1-02   | Firefox       | Latest  | All features work      | ⏳     |
| B1-03   | Safari        | Latest  | All features work      | ⏳     |
| B1-04   | Edge          | Latest  | All features work      | ⏳     |
| B1-05   | Chrome Mobile | Latest  | Responsive, functional | ⏳     |
| B1-06   | iOS Safari    | Latest  | Responsive, functional | ⏳     |

---

## Phase 6: Security Testing (10 min)

### S1: Security Audit (NFR-03)

| Test ID | Test Case            | Expected Result        | Method        | Status |
| ------- | -------------------- | ---------------------- | ------------- | ------ |
| S1-01   | No hardcoded secrets | No API keys, passwords | Code review   | ⏳     |
| S1-02   | No exposed tokens    | No tokens in code      | Code review   | ⏳     |
| S1-03   | Formspree validated  | Endpoint uses HTTPS    | Code review   | ⏳     |
| S1-04   | No console warnings  | About security issues  | Console check | ⏳     |
| S1-05   | HTTPS enforced       | By hosting provider    | Post-deploy   | ⏳     |
| S1-06   | CSP headers          | If hosting allows      | Post-deploy   | ⏳     |

---

## Phase 7: Content Accuracy (15 min)

### C1: Content Verification (All US)

| Test ID | Content                  | Expected                       | Source       | Status |
| ------- | ------------------------ | ------------------------------ | ------------ | ------ |
| C1-01   | Name                     | Michael Barroga Lejano         | Requirements | ⏳     |
| C1-02   | Email                    | mblejano07@gmail.com           | Requirements | ⏳     |
| C1-03   | Phone                    | (+63) 927 940 8413             | Requirements | ⏳     |
| C1-04   | LinkedIn                 | linkedin.com/in/michael-lejano | Requirements | ⏳     |
| C1-05   | Work experience dates    | Match requirements             | Requirements | ⏳     |
| C1-06   | Education details        | Match requirements             | Requirements | ⏳     |
| C1-07   | Certifications (9 total) | All listed correctly           | Requirements | ⏳     |
| C1-08   | Skills categories        | 5 categories                   | Requirements | ⏳     |
| C1-09   | Professional summary     | Accurate bio                   | Requirements | ⏳     |

---

## Test Tools Required

| Tool              | Purpose                      | Installation                 |
| ----------------- | ---------------------------- | ---------------------------- |
| axe-core          | Accessibility audit          | Browser extension            |
| Lighthouse        | Performance/SEO              | Chrome DevTools              |
| Chrome DevTools   | Console, Network, Responsive | Built-in                     |
| Formspree account | Test contact form            | https://formspree.io         |
| Resume PDF        | Test download                | Place in `public/resume.pdf` |

---

## Prerequisites Checklist

Before QA execution:

- [ ] Arbiter code review complete (90%+ score)
- [ ] Dev server running (http://localhost:3000/)
- [ ] Formspree Form ID configured in `.env.development`
- [ ] Resume PDF placed in `public/resume.pdf`
- [ ] All 6 sections implemented
- [ ] No TypeScript compilation errors (or documented)
- [ ] Git repository initialized

---

## Defect Severity Classification

| Severity | Definition                 | Examples                                      | Action                |
| -------- | -------------------------- | --------------------------------------------- | --------------------- |
| **P0**   | Blocks deployment          | App doesn't load, console errors, broken form | Fix immediately       |
| **P1**   | Major functionality broken | Resume download fails, nav broken             | Fix before deploy     |
| **P2**   | Minor functionality broken | Incorrect dates, typos                        | Fix within 48 hours   |
| **P3**   | Cosmetic/enhancement       | Color tweak, spacing                          | Fix when time permits |

---

## Exit Criteria

QA sign-off requires:

- [ ] All P0 issues resolved
- [ ] All P1 issues resolved
- [ ] ≤ 3 P2 issues (documented)
- [ ] ≤ 5 P3 issues (documented)
- [ ] Lighthouse scores > 90 (all categories)
- [ ] axe-core: Zero critical violations
- [ ] Console: ZERO errors
- [ ] All user stories verified

---

## Deliverables

Upon QA completion:

1. ✅ **QA Report** (pass/fail status)
2. ✅ **Test Results Spreadsheet** (all test IDs with status)
3. ✅ **Screenshot Evidence**:
   - Clean console (F12)
   - Lighthouse scores
   - axe-core audit results
   - Responsive layouts (3 breakpoints)
   - Network tab (no failures)
4. ✅ **Defect Log** (any issues found with severity)
5. ✅ **Deployment Recommendation** (approve/reject)

---

**Prepared By:** Sentinel (QA Tester) 🛡️  
**Date:** 2026-04-25 18:40 GMT+8  
**Status:** READY FOR EXECUTION (pending Arbiter approval)

---

_Standing by for Arbiter sign-off to begin comprehensive QA._
