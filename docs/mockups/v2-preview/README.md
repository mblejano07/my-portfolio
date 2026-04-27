# Portfolio v2.0 - Interactive Design Mockups

**Created:** April 28, 2026 | **Time:** 12:15 AM  
**Status:** 🟢 **Gate 1 APPROVED** (Apr 28, 2026)  
**Designer:** Designer Specialist (WebAppKit)  
**Note:** Testimonials section removed per Mike's feedback

---

## 🎯 Purpose

These are **interactive HTML mockups** for the Portfolio v2.0 enhancement project. They demonstrate the proposed design changes before Frontend development begins.

**Governance Compliance:** This is the **Gate 1 deliverable** - Mike must approve these designs before any code is written.

---

## 📁 Files Overview

| File            | Section           | Status        | Description                                |
| --------------- | ----------------- | ------------- | ------------------------------------------ |
| `index.html`    | Navigation Hub    | ✅ Complete   | Main menu to explore all sections          |
| `hero.html`     | Hero Section      | ✨ Enhanced   | Refreshed hero with network animation hint |
| `projects.html` | Projects Showcase | 🆕 NEW        | 3-column grid of projects with thumbnails  |
| `skills.html`   | Skills Redesign   | ✨ Redesigned | Tag-based layout (no progress bars!)       |

---

## 🚀 How to Review

### Step 1: Open in Browser

1. Navigate to this folder in Finder:

   ```
   /Users/mblejano/Documents/Project/portfolio-2026/docs/mockups/v2-preview/
   ```

2. **Double-click `index.html`** to open in Chrome/Safari

3. Click through each section card to explore the mockups

### Step 2: Interact with Elements

**Try these interactions:**

✅ **Hover over cards** - See lift effect + cyan border glow  
✅ **Hover over buttons** - Gradient shine + shadow intensifies  
✅ **Hover over skill tags** - Glow effect + slight lift  
✅ **Hover over tech tags** - Background fill + border glow  
✅ **Click navigation links** - Browse between sections

### Step 3: Test Responsive Behavior

**Resize your browser window:**

- **Desktop (1920px):** 3-column grids visible
- **Tablet (768px):** Grids switch to 2 columns
- **Mobile (375px):** All sections stack to single column

**Tip:** Use Chrome DevTools → Toggle Device Toolbar (Cmd+Shift+M) to test specific device sizes.

---

## 🎨 Design Specifications

### Color Palette

| Color           | Hex Code  | Usage                               |
| --------------- | --------- | ----------------------------------- |
| **Dark Slate**  | `#0f172a` | Background base                     |
| **Slate**       | `#1e293b` | Background gradient                 |
| **Indigo**      | `#6366f1` | Primary accent, gradients           |
| **Cyan**        | `#00d9ff` | Secondary accent, glows, highlights |
| **White**       | `#ffffff` | Headings, important text            |
| **Light Gray**  | `#e2e8f0` | Body text                           |
| **Medium Gray** | `#94a3b8` | Secondary text                      |
| **Green**       | `#22c55e` | Success states, annotations         |

### Typography

| Element           | Font Family    | Size (Desktop)      | Weight  |
| ----------------- | -------------- | ------------------- | ------- |
| **Headings**      | JetBrains Mono | 2.5rem - 4rem       | 700     |
| **Body Text**     | Inter          | 0.875rem - 1.125rem | 400-500 |
| **Labels/Badges** | JetBrains Mono | 0.75rem - 0.875rem  | 600     |

### Effects & Animations

| Effect                 | Description                | Applied To               |
| ---------------------- | -------------------------- | ------------------------ |
| **Card Lift**          | `translateY(-4px to -6px)` | All cards on hover       |
| **Border Glow**        | Cyan border + box-shadow   | Cards, buttons, tags     |
| **Gradient Shine**     | Animated gradient overlay  | Icons, badges            |
| **Pulse Animation**    | Scale + opacity pulse      | Network nodes (hero)     |
| **Smooth Transitions** | `0.2s - 0.3s ease`         | All interactive elements |

### Responsive Breakpoints

| Breakpoint  | Width          | Layout Changes                                 |
| ----------- | -------------- | ---------------------------------------------- |
| **Desktop** | ≥1024px        | 3-column grids (Projects), 2-col (Skills)      |
| **Tablet**  | 768px - 1023px | 2-column grids across all sections             |
| **Mobile**  | ≤767px         | Single column, stacked layout, reduced padding |

---

## ✅ What's Changed in v2.0

### NEW Sections

**1. Projects Showcase** (P0 Priority)

- 3-column grid layout (matches Experience section)
- Project cards with thumbnail, title, description
- Tech stack tags (pill-shaped, cyan border)
- Dual action buttons: GitHub + Live Demo
- Hover effects: Card lift + cyan glow

### Redesigned Sections

**2. Skills Section** (P2 Enhancement)

- ❌ **Removed:** Progress bars with arbitrary percentages
- ✅ **Added:** Clean tag-based layout with category groupings
- 6 categories with gradient icon badges
- Skill tags are scannable chips (hover for glow effect)
- 2-column grid for better readability

**3. Hero Section** (Optional Refresh)

- Subtle network graph animation background (respects reduced motion)
- Improved name typography (mono font + cyan glow border)
- Better CTA button styling (gradient backgrounds)
- Inline contact info + social links
- Scroll indicator animation

### Unchanged Sections

**Experience & Certifications** - Keep current 3-column grid layouts (already working well after recent fix!)

---

## 🔐 Gate 1 Approval Checklist

**Mike + Designer must approve the following before Frontend development:**

- [ ] **Projects Section Placement:** After Experience section ✓
- [ ] **Projects Layout:** 3-column grid with thumbnails ✓

- [ ] **Skills Redesign:** Tag-based layout (no progress bars) ✓
- [ ] **Hero Refresh:** Network animation + improved CTAs ✓
- [ ] **Color Palette:** Dark slate, indigo, cyan theme ✓
- [ ] **Typography:** JetBrains Mono + Inter fonts ✓
- [ ] **Hover Effects:** Lift + glow animations ✓
- [ ] **Responsive Behavior:** Desktop/Tablet/Mobile breakpoints ✓
- [ ] **Accessibility:** WCAG 2.1 AA compliance maintained ✓

**Approval Method:** Reply with "Approved" in group chat or add ✅ reaction to this document.

---

## 📋 Next Steps After Approval

### Phase 3: Development (Frontend Engineer)

1. **Create Vue Components:**

   - `ProjectsSection.vue` (based on `projects.html`)
   - `TestimonialsSection.vue` (based on `testimonials.html`)
   - `SkillsSection.vue` (based on `skills.html`)
   - Update `HeroSection.vue` (based on `hero.html`)

2. **Implement Styling:**

   - Copy TailwindCSS classes from HTML mockups
   - Add custom CSS for glow effects in `cyber-theme.css`
   - Ensure responsive breakpoints match mockups

3. **Add Interactivity:**

   - PrimeVue Carousel (if needed, but we recommend static grids)
   - Hover effects and transitions
   - Keyboard navigation support

4. **Content Integration:**
   - Replace placeholder content with Mike's actual projects
   - Add real testimonials (request from Mike)
   - Update skills list with current technologies

### Phase 4: QA + Security (Sentinel)

- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness verification (actual devices)
- Lighthouse audit (target: >90 Performance, >95 Accessibility)
- Security scan (`npm audit`, XSS check)

### Phase 5: Staging Review (Mike + Designer)

- Deploy to staging branch
- Mike reviews staging URL
- Designer verifies design fidelity
- Final approval before merge (Gate 3)

### Phase 6: Production Deploy

- Merge to main
- GitHub Pages auto-deploy
- Post-launch monitoring

---

## 💻 Technical Notes for Frontend

### Component Structure

```vue
<!-- Example: ProjectsSection.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'

const projects = ref([
  {
    title: 'Laravel CRM System',
    description: 'Enterprise resource management...',
    techStack: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...',
  },
])
</script>

<template>
  <section class="projects-section">
    <div class="grid grid-cols-3 gap-8">
      <!-- Card implementation here -->
    </div>
  </section>
</template>

<style scoped>
/* Copy styles from HTML mockup */
.projects-section {
  /* ... */
}
</style>
```

### TailwindCSS Classes Used

- **Grid:** `grid grid-cols-3 gap-8` (desktop), responsive variants
- **Cards:** `bg-gradient-to-br from-slate-800 to-slate-900 border border-indigo-500/20`
- **Hover:** `hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]`
- **Tags:** `px-3 py-1 bg-cyan-900/10 border border-cyan-500/30 rounded-full`
- **Buttons:** `bg-gradient-to-r from-indigo-500 to-cyan-500`

### Custom CSS (Add to `cyber-theme.css`)

```css
/* Glow effects not covered by Tailwind */
.cyber-card {
  transition: all 0.3s ease;
}

.cyber-card:hover {
  box-shadow: 0 0 30px rgba(0, 217, 255, 0.3);
  transform: translateY(-6px);
}

.tech-tag:hover {
  box-shadow: 0 0 15px rgba(0, 217, 255, 0.3);
}
```

---

## ❓ Questions?

**For Design Clarifications:** Tag @Designer  
**For Implementation Questions:** Tag @Frontend  
**For Approval:** Tag @Mike

**Group Chat:** All agents + Mike  
**Individual Questions:** Direct message respective agent

---

## 📞 Contact

**Designer Specialist**  
**Email:** Available via group chat  
**Workspace:** `~/.openclaw/workspace-designer/`

---

**Status:** 🟡 **Awaiting Gate 1 Approval**  
**Next Step:** Mike reviews mockups → Approves → Frontend starts Phase 3

---

_Portfolio v2.0 Design Mockups | Created: Apr 28, 2026 | 12:45 AM_  
_Governance Compliance: Gate 1 Deliverable ✅_
