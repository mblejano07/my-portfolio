# Portfolio v2.0 - Quick Wireframe Sketches

**Created:** 2026-04-27 22:20 GMT+8  
**Status:** 🟡 In Progress → Express Delivery  
**Purpose:** Directional approval before hi-fi mockups

---

## 📋 Current State (Live Now)

```
┌─────────────────────────────────────────┐
│           HERO SECTION                  │
│   [Photo]  Michael Lejano               │
│            Senior Software Engineer     │
│            [CTA: Get in Touch]          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│           ABOUT SECTION                 │
│   Professional summary text...          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│      EXPERIENCE (3-column grid)         │
│   [Job 1]  [Job 2]  [Job 3]            │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│       SKILLS (3-column grid)            │
│   [Category] [Category] [Category]      │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│    CERTIFICATIONS (3-column grid)       │
│   [Cert 1]  [Cert 2]  [Cert 3]         │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│         CONTACT SECTION                 │
│   Form + Contact Info                   │
└─────────────────────────────────────────┘
```

**What's Working:** ✅ Grid layout fixed, clean cyber theme  
**What's Missing:** ❌ Projects showcase, ❌ Testimonials, ❌ Visual polish

---

## 🎯 PROPOSED v2.0 Layout (Wireframes)

### **Section A: Hero Section (Refresh)**

```
┌──────────────────────────────────────────────────────┐
│  [Network Graph Background - Subtle Animation]       │
│                                                      │
│         👋 Hi, I'm                                   │
│     ╔══════════════════════════╗                     │
│     ║  MICHAEL LEJANO          ║ ← Mono font, glow  │
│     ╚══════════════════════════╝                     │
│                                                      │
│   Senior Software Engineer / Cybersecurity Specialist│
│   (ISC)² Certified | MS IT (in-progress)             │
│                                                      │
│   ┌──────────────┐  ┌──────────────┐                │
│   │  Get in Touch│  │  ↓ Resume    │                │
│   └──────────────┘  └──────────────┘                │
│                                                      │
│   📧 mblejano07@gmail.com  📱 +63 XXX XXX XXXX      │
│   📍 Metro Manila, PH        💼 LinkedIn            │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Changes from Current:**

- ✅ Add subtle network graph animation (reduced motion support)
- ✅ Improve name typography (mono font + cyan glow)
- ✅ Better CTA button styling (gradient + hover glow)
- ✅ Add social links inline

---

### **Section B: Projects Showcase (NEW - P0)**

**Placement:** After Experience, Before Skills

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ╔════════════════════════════════════════════╗    │
│   ║  // PROJECTS                               ║    │
│   ╚════════════════════════════════════════════╝    │
│              [Circuit divider line]                  │
│                                                      │
│   ┌──────────────┬──────────────┬──────────────┐   │
│   │  [Thumbnail] │  [Thumbnail] │  [Thumbnail] │   │
│   │              │              │              │   │
│   │  Project 1   │  Project 2   │  Project 3   │   │
│   │  Laravel CRM │  Vue Dashboard│ Security Tool│   │
│   │              │              │              │   │
│   │  PHP Vue MySQL│ Vue TS Node │ Python OWASP │   │
│   │              │              │              │   │
│   │  [GitHub] [↗]│  [GitHub] [↗]│  [GitHub] [↗]│   │
│   └──────────────┴──────────────┴──────────────┘   │
│                                                      │
│   ┌──────────────┬──────────────┬──────────────┐   │
│   │  [Thumbnail] │  [Thumbnail] │  [Thumbnail] │   │
│   │   (more projects...)         │              │   │
│   └──────────────┴──────────────┴──────────────┘   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Card Anatomy:**

```
┌─────────────────────────────┐
│  [Project Thumbnail Image]  │ ← 16:9 aspect ratio
├─────────────────────────────┤
│  Project Name (Bold)        │
│  Short description (2 lines)│
│                             │
│  Tech Stack Tags:           │
│  [PHP] [Vue] [MySQL]        │
│                             │
│  [GitHub Repo] [Live Demo ↗]│ ← Icons with hover glow
└─────────────────────────────┘
```

**Layout:** 3-column grid (same as Experience)  
**Hover Effect:** Card lifts + cyan border glow  
**Total Projects:** Start with 6, scalable to 12+

---

### **Section C: Testimonials (NEW - P1)**

**Placement:** After Projects, Before Skills

**Option 1: Static Grid (Recommended)**

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ╔════════════════════════════════════════════╗    │
│   ║  // TESTIMONIALS                           ║    │
│   ╚════════════════════════════════════════════╝    │
│              [Circuit divider line]                  │
│                                                      │
│   ┌──────────────────────────────────────────────┐  │
│   │  "Michael is an exceptional developer..."    │  │
│   │                                              │  │
│   │  ⭐⭐⭐⭐⭐                                     │  │
│   │                                              │  │
│   │  [Avatar]  Jane Doe                          │  │
│   │            CTO, Tech Company                 │  │
│   └──────────────────────────────────────────────┘  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Option 2: Simple Carousel (UX-friendly)**

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ┌────────────────────────────────────────────┐    │
│   │  "Michael delivered beyond expectations..." │    │
│   │                                            │    │
│   │  ⭐⭐⭐⭐⭐                                   │    │
│   │                                            │    │
│   │  John Smith ← [◀] [●○○] [▶]               │    │
│   │  Manager, DSWD                             │    │
│   └────────────────────────────────────────────┘    │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Recommendation:** **Option 1 (Static Grid)** - No hidden content, all testimonials visible immediately. Start with 3 testimonials in single column, or 2-column if we have 6+.

---

### **Section D: Skills Section (Redesign)**

**Current Issue:** Progress bars look generic, percentages feel arbitrary

**Proposed: Clean Tag-Based Layout**

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ╔════════════════════════════════════════════╗    │
│   ║  // TECHNICAL SKILLS                       ║    │
│   ╚════════════════════════════════════════════╝    │
│              [Circuit divider line]                  │
│                                                      │
│   ┌─────────────────────────────────────────────┐   │
│   │  🛡️ Programming & Frameworks                │   │
│   │  [PHP] [Vue.js] [Laravel] [Python] [TS]    │   │
│   └─────────────────────────────────────────────┘   │
│                                                      │
│   ┌─────────────────────────────────────────────┐   │
│   │  🗄️ Databases                               │   │
│   │  [MySQL] [PostgreSQL] [MongoDB] [Redis]    │   │
│   └─────────────────────────────────────────────┘   │
│                                                      │
│   ┌─────────────────────────────────────────────┐   │
│   │  ☁️ DevOps & Cloud                          │   │
│   │  [Docker] [K8s] [AWS] [CI/CD] [Git]        │   │
│   └─────────────────────────────────────────────┘   │
│                                                      │
│   ┌─────────────────────────────────────────────┐   │
│   │  🔒 Security                                │   │
│   │  [Pen Testing] [Risk Assessment] [OWASP]   │   │
│   └─────────────────────────────────────────────┘   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Improvements:**

- ✅ Remove progress bars (arbitrary percentages)
- ✅ Use skill tags/chips (clean, scannable)
- ✅ Group by category with icons
- ✅ Hover effect on tags (cyan glow)
- ✅ 2-column layout for better readability

---

### **Section E: Experience Section (Refinement)**

**Keep Current:** 3-column grid layout (it's working now!)

**Minor Refinements:**

```
┌─────────────────────────────────────────┐
│  [Briefcase Icon]  [Period Badge]       │
│                                         │
│  Job Title (Bold, mono)                 │
│  Company Name (Cyan)                    │
│  📍 Location                            │
│                                         │
│  • Responsibility 1                     │
│  • Responsibility 2                     │
│  • Responsibility 3                     │
│                                         │
└─────────────────────────────────────────┘
```

**Refinements:**

- ✅ Ensure consistent card heights
- ✅ Better icon treatment (gradient background)
- ✅ Period badge styling (pill shape, cyan border)
- ✅ Bullet points with check icons (cyan)

---

### **Section F: Certifications (No Changes)**

**Keep As-Is:** 3-column grid is working well

**Optional Enhancement:** Add "Verify" button hover effect

---

### **Section G: Contact (No Changes)**

**Keep As-Is:** Form + contact info layout is clean

**Optional:** Add social media links (GitHub, LinkedIn icons)

---

## 📱 MOBILE VIEW (Responsive)

All sections stack to single column:

```
┌─────────────────────┐
│       HERO          │
└─────────────────────┘
┌─────────────────────┐
│      ABOUT          │
└─────────────────────┘
┌─────────────────────┐
│   EXPERIENCE (1 col)│
└─────────────────────┘
┌─────────────────────┐
│   PROJECTS (1 col)  │ ← NEW
└─────────────────────┘
┌─────────────────────┐
│  TESTIMONIALS (1col)│ ← NEW
└─────────────────────┘
┌─────────────────────┐
│   SKILLS (1 col)    │
└─────────────────────┘
┌─────────────────────┐
│   CERTIFICATIONS    │
└─────────────────────┘
┌─────────────────────┐
│      CONTACT        │
└─────────────────────┘
```

**Mobile-Specific Adjustments:**

- Reduce padding (2rem → 1rem)
- Smaller font sizes (H1: 3rem → 2rem)
- Full-width buttons
- Larger touch targets (44px min)

---

## 🎨 VISUAL STYLE NOTES

**Maintain Current Cyber Theme:**

- Colors: Dark Slate (#0f172a), Indigo (#6366F1), Cyan (#00d9ff)
- Fonts: JetBrains Mono (headings), Inter (body)
- Effects: Subtle glow, gradient borders, hover lifts
- Icons: PrimeIcons (pi-shield, pi-code, pi-briefcase)

**New Additions:**

- Project thumbnails: 16:9 aspect ratio, tech screenshots
- Testimonial cards: Quote icon, star rating, avatar placeholder
- Skill tags: Pill-shaped, cyan border on hover

---

## ✅ WHAT MIKE NEEDS TO APPROVE

**Directional Questions:**

1. **Projects Section Placement?**

   - ✅ After Experience (recommended)
   - ⏳ Or after Skills?

2. **Testimonials Layout?**

   - ✅ Static grid (recommended - no hidden content)
   - ⏳ Or simple carousel?

3. **Skills Redesign?**

   - ✅ Remove progress bars, use tags
   - ⏳ Keep current design?

4. **Hero Refresh?**

   - ✅ Add network animation, better CTAs
   - ⏳ Keep current?

5. **Number of Projects to Start?**
   - ✅ 6 projects (2 rows of 3)
   - ⏳ More/less?

---

## 🚀 NEXT STEPS

**After Mike Approves Wireframes:**

1. ✅ Create high-fidelity mockups (tomorrow 8 AM)

   - Full-color designs
   - Desktop + Mobile views
   - Export as PNGs

2. ✅ Present final mockups for Gate 1 approval

   - Mike + Designer sign-off
   - Document approval

3. ✅ Hand off to Frontend for Phase 3 Development

---

**Mike, please review these wireframes and confirm:**

> **"Looks good - proceed with hi-fi mockups"**

**Or let me know what changes you want before I create the full-color versions!** 🎨🔐

---

_Express lane wireframes complete. Ready for your feedback!_ ✨
