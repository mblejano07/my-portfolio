# Portfolio v2 Enhancement Plan

**Document ID:** EP-PORTFOLIO-V2-001  
**Version:** 1.0  
**Created:** 2026-04-27  
**Author:** Orchestrator (with Designer + Frontend input)  
**Project:** Michael Lejano Professional Portfolio  
**Status:** 🟡 Planning - Awaiting Mike Approval

---

## Executive Summary

Following the recent carousel→grid UI fix, this plan outlines a structured approach to enhancing Mike's portfolio with proper governance gates, dual approvals, and quality checkpoints.

**Governance Model:** 5 Gates with Dual Approvals  
**Timeline:** 10 days (including buffer)  
**Priority:** P1 - Strategic Improvement (not urgent)

---

## 📸 Current State Documentation

**Screenshot Directory:** `/Users/mblejano/Documents/Project/portfolio-2026/docs/screenshots/current-state/`

### Required Screenshots

| File                         | Section             | Purpose                           | Status     |
| ---------------------------- | ------------------- | --------------------------------- | ---------- |
| `01-hero-section.png`        | Hero (above fold)   | Document current first impression | ⏳ Pending |
| `02-experience-grid.png`     | Work Experience     | Verify grid layout fix            | ⏳ Pending |
| `03-certifications-grid.png` | Certifications      | Verify cert card layout           | ⏳ Pending |
| `04-skills-grid.png`         | Technical Skills    | Verify tag-based layout           | ⏳ Pending |
| `05-mobile-view.png`         | Mobile (responsive) | Confirm mobile responsiveness     | ⏳ Pending |
| `06-about-section.png`       | About               | Document current about section    | ⏳ Pending |
| `07-contact-section.png`     | Contact             | Document contact form             | ⏳ Pending |

**Note:** Screenshots to be captured manually by Mike or via automated tooling. Designer will annotate once captured.

---

## 📋 Phase Breakdown

### **Phase 1: Discovery (Day 1)**

**Owner:** Orchestrator + Designer  
**Duration:** 1 day  
**Output:** Audit report with recommendations

#### Tasks:

- [ ] **Content Audit** - Review all existing content for accuracy

  - Update job descriptions if needed
  - Verify certification dates and links
  - Check contact information accuracy
  - Identify outdated skills or technologies

- [ ] **Missing Sections Identification**

  - Projects/Portfolio showcase (high priority)
  - Testimonials/Recommendations (medium priority)
  - Blog/Articles section (low priority, future)
  - Speaking engagements/Conferences (if applicable)

- [ ] **Performance Audit**

  - Run Lighthouse audit
  - Document current scores (Performance, Accessibility, SEO, Best Practices)
  - Identify optimization opportunities

- [ ] **SEO Audit**

  - Meta tags review
  - Open Graph tags verification
  - Schema.org markup check
  - Sitemap generation

- [ ] **Accessibility Check**
  - WCAG 2.1 AA compliance verification
  - Color contrast re-validation
  - Keyboard navigation test
  - Screen reader compatibility check

**Deliverable:** `docs/audit-report.md` with findings and prioritized recommendations

---

### **Phase 2: Design Mockups (Day 2-3) → 🔵 GATE 1: Mike + Designer Approval**

**Owner:** Designer  
**Duration:** 2 days  
**Output:** Approved design mockups ready for development

#### Tasks:

- [ ] **Wireframes for New Sections**

  - Projects showcase layout (grid vs masonry vs carousel)
  - Testimonials section design
  - Updated hero section (if needed)

- [ ] **Visual Design Mockups**

  - High-fidelity designs in Figma (or markdown specs)
  - Component library updates
  - Interaction specifications
  - Responsive behavior documentation

- [ ] **Design System Updates**
  - New component specs
  - Updated color palette (if needed)
  - Typography refinements
  - Icon set additions

#### 🔵 **GATE 1: Design Approval**

**Approvers:** Mike + Designer  
**Criteria:**

- ✅ All wireframes reviewed and approved
- ✅ Visual mockups match expectations
- ✅ Responsive behavior documented
- ✅ Accessibility requirements met
- ✅ Content strategy aligned

**Approval Method:** Written confirmation in project chat + ✅ reaction on mockup document

**NO CODE STARTS UNTIL GATE 1 IS APPROVED**

**Deliverable:** `docs/design-mockups/` with approved specs

---

### **Phase 3: Development (Day 4-7)**

**Owner:** Frontend Engineer  
**Duration:** 4 days  
**Output:** Fully implemented features on staging branch

#### Tasks:

- [ ] **Implement Approved Designs**

  - Create new Vue components
  - Update existing components per design specs
  - Integrate animations and transitions
  - Ensure responsive behavior

- [ ] **Component Refactoring**

  - Extract reusable components
  - Improve code organization
  - Add TypeScript types
  - Document component APIs

- [ ] **Content Updates**

  - Add new project entries
  - Update testimonials
  - Refresh skills list
  - Optimize images

- [ ] **Performance Optimizations**
  - Implement lazy loading
  - Optimize image assets
  - Code splitting
  - Reduce bundle size

**Deliverable:** Feature branch `feature/portfolio-enhancements` ready for QA

---

### **Phase 4: QA + Security (Day 8) → 🟢 GATE 2: Sentinel Sign-off**

**Owner:** Sentinel (QA/Security)  
**Duration:** 1 day  
**Output:** QA report + security clearance

#### Tasks:

- [ ] **Cross-Browser Testing**

  - Chrome (latest)
  - Firefox (latest)
  - Safari (latest)
  - Edge (latest)
  - Mobile browsers (iOS Safari, Chrome Mobile)

- [ ] **Mobile Responsiveness Verification**

  - Test on actual devices (iPhone, Android)
  - Tablet testing (iPad, Android tablets)
  - Breakpoint verification (320px, 768px, 1024px, 1440px)

- [ ] **Lighthouse Re-test**

  - Performance score target: >90
  - Accessibility score target: >95
  - SEO score target: >90
  - Best Practices score target: >90

- [ ] **Security Scan**

  - Dependency vulnerability check (`npm audit`)
  - XSS vulnerability scan
  - CSRF protection verification
  - HTTPS enforcement check
  - Content Security Policy validation

- [ ] **Accessibility Audit**
  - axe-core automated scan
  - Manual keyboard navigation test
  - Screen reader test (VoiceOver/NVDA)
  - Color contrast verification

#### 🟢 **GATE 2: QA + Security Approval**

**Approver:** Sentinel  
**Criteria:**

- ✅ All critical bugs fixed
- ✅ No high-severity security vulnerabilities
- ✅ Lighthouse scores meet targets
- ✅ Accessibility compliance verified
- ✅ Cross-browser compatibility confirmed

**Deliverable:** `docs/qa-report.md` + ✅ approval to proceed

---

### **Phase 5: Staging Review (Day 9) → 🔵 GATE 3: Mike + Designer Approval**

**Owner:** Orchestrator  
**Duration:** 1 day  
**Output:** Final approval for production deployment

#### Tasks:

- [ ] **Deploy to Staging Branch**

  - Push to `staging` branch
  - GitHub Actions deploys to staging URL
  - Generate staging preview link

- [ ] **Mike Reviews Staging URL**

  - Full walkthrough of all changes
  - Content accuracy verification
  - User experience validation
  - Performance feel check

- [ ] **Designer Verifies Design Fidelity**

  - Compare implementation vs mockups
  - Verify spacing, colors, typography
  - Check animations and interactions
  - Confirm responsive behavior

- [ ] **Final Tweaks** (if needed)
  - Minor CSS adjustments
  - Content corrections
  - Copy edits

#### 🔵 **GATE 3: Final Approval Before Merge**

**Approvers:** Mike + Designer  
**Criteria:**

- ✅ Staging site meets expectations
- ✅ Design fidelity verified
- ✅ All content accurate
- ✅ Performance acceptable
- ✅ Ready for production

**Approval Method:** Written confirmation + ✅ reactions

**NO MERGE TO MAIN UNTIL GATE 3 IS APPROVED**

**Deliverable:** ✅ approval to merge to `main`

---

### **Phase 6: Production Deploy (Day 10)**

**Owner:** Orchestrator + Frontend  
**Duration:** ½ day  
**Output:** Live portfolio with enhancements

#### Tasks:

- [ ] **Merge to Main**

  - Create pull request `feature/portfolio-enhancements` → `main`
  - Final code review
  - Merge after GATE 3 approval

- [ ] **GitHub Pages Auto-Deploy**

  - GitHub Actions triggers deployment
  - Wait for deployment completion (~2-3 mins)
  - Verify live site

- [ ] **Post-Launch Monitoring**

  - Check live site functionality
  - Monitor for errors (console, network)
  - Verify analytics tracking
  - Test contact form submission

- [ ] **Documentation Update**
  - Update README with new features
  - Document any technical decisions
  - Add changelog entry

**Deliverable:** ✅ Live portfolio at https://mblejano07.github.io/my-portfolio/

---

## 📊 Timeline Visualization

### Gantt Chart (Text-Based)

```
Day 1   Day 2   Day 3   Day 4   Day 5   Day 6   Day 7   Day 8   Day 9   Day 10
│       │       │       │       │       │       │       │       │       │
├───────┤       │       │       │       │       │       │       │       │
│Discovery       │       │       │       │       │       │       │       │
│       │       │       │       │       │       │       │       │       │
│       ├───────────────┤       │       │       │       │       │       │
│       │Design Mockups │       │       │       │       │       │       │
│       │       │       │       │       │       │       │       │       │
│       │  🔵 GATE 1: Mike + Designer Approval (NO CODE BEFORE THIS)     │
│       │       │       │       │       │       │       │       │       │
│       │       ├───────────────────────────────┤       │       │       │
│       │       │Development                    │       │       │       │
│       │       │       │       │       │       │       │       │       │
│       │       │       │       │       ├───────────────┤       │       │
│       │       │       │       │       │QA + Security      │       │       │
│       │       │       │       │       │       │  🟢 GATE 2: Sentinel  │
│       │       │       │       │       │       │       │       │       │
│       │       │       │       │       │       ├───────────────┤       │
│       │       │       │       │       │       │Staging Review │       │
│       │       │       │       │       │       │       │🔵 GATE 3     │
│       │       │       │       │       │       │       │       │       │
│       │       │       │       │       │       │       ├───────────────┤
│       │       │       │       │       │       │       │Production     │
│       │       │       │       │       │       │       │Deploy         │
└───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┘
```

### Timeline Table

| Phase                       | Start Date | End Date | Duration | Owner                   | Gate      |
| --------------------------- | ---------- | -------- | -------- | ----------------------- | --------- |
| **Phase 1: Discovery**      | Apr 28     | Apr 28   | 1 day    | Orchestrator + Designer | —         |
| **Phase 2: Design**         | Apr 29     | Apr 30   | 2 days   | Designer                | 🔵 Gate 1 |
| **Phase 3: Development**    | May 1      | May 4    | 4 days   | Frontend                | —         |
| **Phase 4: QA + Security**  | May 5      | May 5    | 1 day    | Sentinel                | 🟢 Gate 2 |
| **Phase 5: Staging Review** | May 6      | May 6    | 1 day    | Orchestrator            | 🔵 Gate 3 |
| **Phase 6: Production**     | May 7      | May 7    | ½ day    | Orchestrator + Frontend | —         |

**Buffer Time:** 1-2 days built into Phase 3 for unexpected issues

**Total Timeline:** 10 days (Apr 28 - May 7, 2026)

---

## 🎯 Next Steps Recommendation

### Immediate Actions (This Week)

1. **Capture Current State Screenshots** (30 mins)

   - Mike or Designer captures 7 screenshots
   - Save to `docs/screenshots/current-state/`
   - Designer annotates with notes

2. **Run Initial Audits** (2 hours)

   - Lighthouse audit (Chrome DevTools)
   - Content inventory spreadsheet
   - List missing/outdated content

3. **Prioritize Enhancements** (1 hour)
   - Mike reviews audit findings
   - Decide which sections to add first
   - Set priorities: Projects > Testimonials > Blog

### Recommended Priority Order

| Priority | Enhancement               | Effort | Impact | Recommend?                      |
| -------- | ------------------------- | ------ | ------ | ------------------------------- |
| **P0**   | Projects Showcase         | Medium | High   | ✅ Yes - Critical for portfolio |
| **P1**   | Update Experience Content | Low    | High   | ✅ Yes - Keep current           |
| **P1**   | Add Testimonials          | Low    | Medium | ✅ Yes - Social proof           |
| **P2**   | SEO Optimization          | Medium | Medium | ⏳ Maybe - If time allows       |
| **P2**   | Performance Tuning        | Medium | Low    | ⏳ Maybe - Current scores OK    |
| **P3**   | Blog Section              | High   | Low    | ❌ No - Defer to v3             |

---

## 🚦 Governance Gates Summary

| Gate          | Name            | Approvers       | When           | Blocks               |
| ------------- | --------------- | --------------- | -------------- | -------------------- |
| 🔵 **Gate 1** | Design Approval | Mike + Designer | End of Phase 2 | No code starts       |
| 🟢 **Gate 2** | QA + Security   | Sentinel        | End of Phase 4 | No staging review    |
| 🔵 **Gate 3** | Final Approval  | Mike + Designer | End of Phase 5 | No production deploy |

**Rule:** Each gate requires explicit written approval before proceeding to next phase.

---

## 📞 Communication Plan

### Daily Standups

- **When:** 9:00 AM Asia/Manila
- **Who:** All agents (Orchestrator, Designer, Frontend, Sentinel)
- **Format:** Quick status update in group chat

### Gate Reviews

- **When:** As scheduled in timeline
- **Who:** Approvers + relevant specialists
- **Format:** Async review with ✅ reaction or comments

### Escalation

- **Blocked?** Tag Orchestrator immediately
- **Design dispute?** Designer makes final call
- **Technical dispute?** Mike makes final call

---

## 📄 Document History

| Version | Date       | Author       | Changes              |
| ------- | ---------- | ------------ | -------------------- |
| 1.0     | 2026-04-27 | Orchestrator | Initial plan created |

---

**Status:** 🟡 **Awaiting Mike Approval to Begin Phase 1**  
**Next Step:** Mike reviews this plan → Approves → Phase 1 Discovery begins

---

**Mike, this plan ensures quality through governance while maintaining velocity.**

**To proceed:**

1. ✅ React with 👍 or comment "Approved" to start Phase 1
2. 📸 Capture screenshots (or I can schedule automated capture)
3. 🎯 Confirm priority order (Projects > Testimonials > SEO?)

**Ready when you are!** 🚀🔐
