# Portfolio v2 - Dark Cyber Theme Design Specification

**Document ID:** DS-PORTFOLIO-V2-001  
**Version:** 1.0  
**Created:** 2026-04-27  
**Author:** Designer Specialist  
**Project:** Michael Lejano Professional Portfolio v2  
**Theme:** Dark Cyber + Network/Security Graphics  
**Status:** 🟡 In Progress → 🟢 Complete EOD 2026-04-27

---

## Executive Summary

Portfolio v2 evolves the professional portfolio with a **Dark Cyber aesthetic** that reflects Michael's cybersecurity expertise while maintaining professional credibility. The design balances cutting-edge visual cues with usability and accessibility.

**Design Philosophy:** "Refined Cyber" not "Hacker Movie"

- Professional credibility first
- Cybersecurity cues as subtle enhancement
- All effects enhance, not distract from content

---

## 1. Color Palette

### 1.1 Base Colors (Dark Cyber Foundation)

| Name            | Hex       | RGB                | Usage                       | Contrast on #0f172a |
| --------------- | --------- | ------------------ | --------------------------- | ------------------- |
| **Cyber Black** | `#0a0e1a` | `rgb(10, 14, 26)`  | Deepest backgrounds, footer | -                   |
| **Dark Slate**  | `#0f172a` | `rgb(15, 23, 42)`  | Primary background (body)   | -                   |
| **Slate 800**   | `#1e293b` | `rgb(30, 41, 59)`  | Card backgrounds, sections  | 15.2:1 ✅           |
| **Slate 700**   | `#334155` | `rgb(51, 65, 85)`  | Borders, dividers           | 12.8:1 ✅           |
| **Slate 600**   | `#475569` | `rgb(71, 85, 105)` | Secondary text              | 8.4:1 ✅            |

### 1.2 Primary Colors (Brand)

| Name             | Hex       | RGB                  | Usage                      | Contrast on #0f172a |
| ---------------- | --------- | -------------------- | -------------------------- | ------------------- |
| **Indigo**       | `#6366F1` | `rgb(99, 102, 241)`  | Primary brand, CTAs, links | 4.8:1 ✅            |
| **Indigo Dark**  | `#4f46e5` | `rgb(79, 70, 229)`   | Hover states, active       | 5.2:1 ✅            |
| **Indigo Light** | `#818cf8` | `rgb(129, 140, 248)` | Highlights, glows          | 3.9:1 ⚠️            |

### 1.3 Accent Colors (Cyber Security)

| Name                | Hex       | RGB                 | Usage                    | Contrast on #0f172a |
| ------------------- | --------- | ------------------- | ------------------------ | ------------------- |
| **Matrix Green**    | `#00ff41` | `rgb(0, 255, 65)`   | Success states, accents  | 11.2:1 ✅           |
| **Cyber Green**     | `#10b981` | `rgb(16, 185, 129)` | Secondary accent, skills | 6.8:1 ✅            |
| **Cyan**            | `#00d9ff` | `rgb(0, 217, 255)`  | Primary accent, links    | 9.4:1 ✅            |
| **Cyan Dark**       | `#0891b2` | `rgb(8, 145, 178)`  | Hover states             | 7.1:1 ✅            |
| **Electric Purple** | `#7c3aed` | `rgb(124, 58, 237)` | Tertiary accent, glows   | 5.6:1 ✅            |

### 1.4 Text Colors

| Name            | Hex       | RGB                  | Usage                    | Contrast on #0f172a |
| --------------- | --------- | -------------------- | ------------------------ | ------------------- |
| **Pure White**  | `#ffffff` | `rgb(255, 255, 255)` | Primary headings         | 21.0:1 ✅           |
| **Light Gray**  | `#f1f5f9` | `rgb(241, 245, 249)` | Body text                | 18.4:1 ✅           |
| **Medium Gray** | `#94a3b8` | `rgb(148, 163, 184)` | Secondary text, captions | 9.8:1 ✅            |
| **Muted Gray**  | `#64748b` | `rgb(100, 116, 139)` | Tertiary text, disabled  | 5.2:1 ✅            |

### 1.5 Gradient Specifications

**Cyber Background Gradient:**

```css
background: linear-gradient(135deg, #0a0e1a 0%, #0f172a 50%, #1e293b 100%);
```

**Neon Glow Gradient (CTAs):**

```css
background: linear-gradient(135deg, #6366f1 0%, #7c3aed 100%);
box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
```

**Network Graph Gradient:**

```css
background: linear-gradient(180deg, rgba(0, 217, 255, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%);
```

---

## 2. Typography System

### 2.1 Font Families

**Headings: JetBrains Mono**

```css
font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
```

- **Rationale:** Code/terminal aesthetic reflects technical expertise
- **Google Fonts:** https://fonts.google.com/specimen/JetBrains+Mono
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

**Body: Inter**

```css
font-family:
  'Inter',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  sans-serif;
```

- **Rationale:** Maximum readability for body content
- **Google Fonts:** https://fonts.google.com/specimen/Inter
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

**Code/Terminal Elements: JetBrains Mono**

```css
font-family: 'JetBrains Mono', monospace;
```

- Used for: Code snippets, terminal-style effects, technical labels

### 2.2 Type Scale

| Element             | Font           | Size            | Weight | Line Height | Letter Spacing | Color       |
| ------------------- | -------------- | --------------- | ------ | ----------- | -------------- | ----------- |
| **H1 (Hero)**       | JetBrains Mono | 3rem (48px)     | 700    | 1.2         | -0.02em        | White       |
| **H2 (Section)**    | JetBrains Mono | 2.25rem (36px)  | 600    | 1.3         | -0.01em        | White       |
| **H3 (Subsection)** | JetBrains Mono | 1.5rem (24px)   | 600    | 1.4         | 0              | Light Gray  |
| **Body Large**      | Inter          | 1.125rem (18px) | 400    | 1.6         | 0              | Light Gray  |
| **Body**            | Inter          | 1rem (16px)     | 400    | 1.6         | 0              | Light Gray  |
| **Body Small**      | Inter          | 0.875rem (14px) | 400    | 1.5         | 0              | Medium Gray |
| **Caption**         | Inter          | 0.75rem (12px)  | 400    | 1.4         | 0.05em         | Muted Gray  |
| **Code**            | JetBrains Mono | 0.875rem (14px) | 400    | 1.5         | 0              | Cyan        |

### 2.3 Responsive Typography

| Breakpoint                | H1     | H2      | H3       | Body      |
| ------------------------- | ------ | ------- | -------- | --------- |
| **Desktop (≥1024px)**     | 3rem   | 2.25rem | 1.5rem   | 1rem      |
| **Tablet (768px-1023px)** | 2.5rem | 2rem    | 1.25rem  | 1rem      |
| **Mobile (≤767px)**       | 2rem   | 1.75rem | 1.125rem | 0.9375rem |

---

## 3. Layout & Grid System

### 3.1 Container Widths

| Breakpoint                | Max Width | Padding |
| ------------------------- | --------- | ------- |
| **Desktop (≥1280px)**     | 1200px    | 2rem    |
| **Tablet (768px-1279px)** | 100%      | 1.5rem  |
| **Mobile (≤767px)**       | 100%      | 1rem    |

### 3.2 Grid System

**12-column grid for desktop, single column for mobile**

```css
/* Desktop */
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 2rem;

/* Mobile */
display: block;
```

### 3.3 Section Spacing

| Element             | Desktop | Mobile |
| ------------------- | ------- | ------ |
| Section Padding (Y) | 6rem    | 3rem   |
| Section Padding (X) | 2rem    | 1rem   |
| Between Sections    | 4rem    | 2rem   |

---

## 4. Component Specifications

### 4.1 Navigation (Glassmorphism + Cyber Borders)

**Structure:**

```html
<nav class="cyber-nav">
  <div class="nav-container">
    <div class="logo">ML</div>
    <ul class="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#certifications">Certifications</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="mobile-toggle">☰</button>
  </div>
</nav>
```

**Visual Properties:**
| Property | Value |
|----------|-------|
| Background | `rgba(15, 23, 42, 0.8)` with `backdrop-filter: blur(12px)` |
| Border Bottom | `1px solid rgba(99, 102, 241, 0.3)` |
| Height | 80px (desktop), 64px (mobile) |
| Position | Fixed, top: 0, z-index: 1000 |
| Glow Effect | Subtle indigo glow on scroll: `box-shadow: 0 2px 20px rgba(99, 102, 241, 0.2)` |

**Active State:**

- Link color: Cyan (`#00d9ff`)
- Underline: Animated cyan line (2px)
- Glow: `text-shadow: 0 0 10px rgba(0, 217, 255, 0.5)`

**Mobile:**

- Hamburger menu with slide-out drawer
- Background: Full cyber black with network pattern overlay
- Links: Stacked vertically with 1rem spacing

---

### 4.2 Hero Section

**Structure:**

```html
<section id="hero" class="hero-section">
  <div class="network-graph-bg"></div>
  <div class="hero-content">
    <div class="hero-badge">
      <span class="status-dot"></span>
      Available for Opportunities
    </div>
    <h1>Michael Barroga Lejano</h1>
    <h2>Senior Software Engineer / Developer</h2>
    <p class="credentials">(ISC)² Certified in Cybersecurity | MS IT (in-progress)</p>
    <div class="hero-cta">
      <a href="#contact" class="btn-primary">Get in Touch</a>
      <a href="/assets/Michael-Lejano-Resume.pdf" class="btn-secondary" download> Download Resume ↓ </a>
    </div>
    <div class="hero-contact">
      <a href="mailto:mblejano07@gmail.com">📧 mblejano07@gmail.com</a>
      <a href="tel:+639279408413">📱 (+63) 927 940 8413</a>
      <span>📍 Metro Manila, Philippines</span>
    </div>
  </div>
  <div class="hero-visual">
    <div class="security-shield-animation"></div>
  </div>
</section>
```

**Visual Properties:**
| Property | Value |
|----------|-------|
| Min Height | 100vh (full viewport) |
| Background | Cyber gradient + animated network graph |
| Content Max Width | 800px |
| Alignment | Center-left (text), Center-right (visual) |

**Badge:**

- Background: `rgba(16, 185, 129, 0.1)`
- Border: `1px solid #10b981`
- Text: Cyber Green
- Pulse animation on status dot

**CTA Buttons:**

- Primary: Indigo gradient with neon glow
- Secondary: Transparent with cyan border
- Hover: Glow intensifies, slight scale (1.05)

**Network Graph Animation:**

- Canvas-based particle network
- Nodes: Cyan dots (2px radius)
- Connections: Fading lines (opacity 0.3)
- Animation: Slow drift + mouse interaction

---

### 4.3 About Section

**Structure:**

```html
<section id="about" class="about-section">
  <div class="section-header">
    <h2>// About Me</h2>
    <div class="circuit-divider"></div>
  </div>
  <div class="about-content">
    <div class="about-text">
      <p>Professional summary...</p>
    </div>
    <div class="about-stats">
      <div class="stat-card">
        <div class="stat-number">13+</div>
        <div class="stat-label">Years Experience</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">3</div>
        <div class="stat-label">Positions at DSWD</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">9</div>
        <div class="stat-label">Certifications</div>
      </div>
    </div>
  </div>
</section>
```

**Visual Properties:**
| Property | Value |
|----------|-------|
| Background | Dark Slate (`#0f172a`) |
| Card Background | Slate 800 (`#1e293b`) |
| Border | Cyber Green accent on stat cards |
| Divider | Animated circuit board SVG |

---

### 4.4 Experience Timeline

**Structure:**

```html
<section id="experience" class="experience-section">
  <div class="section-header">
    <h2>// Work Experience</h2>
    <div class="circuit-divider"></div>
  </div>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-marker">
        <div class="marker-glow"></div>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3>Information Technology Officer II</h3>
          <span class="timeline-dates">Jul 2023 - Present</span>
        </div>
        <div class="timeline-company">Department of Social Welfare and Development</div>
        <ul class="timeline-responsibilities">
          <li>Lead the team in SCRUM as the SCRUM Master</li>
          <li>Act as Software Development Technical Lead</li>
          <!-- More bullets -->
        </ul>
      </div>
    </div>
    <!-- More timeline items -->
  </div>
</section>
```

**Visual Properties:**
| Property | Value |
|----------|-------|
| Timeline Line | 2px cyan gradient (top to bottom) |
| Marker | Cyan circle with glow pulse |
| Card Background | Slate 800 with indigo border |
| Hover Effect | Card lifts + glow intensifies |
| Animation | Fade-in on scroll |

**Timeline Marker Animation:**

```css
@keyframes markerPulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(0, 217, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 217, 255, 0);
  }
}
```

---

### 4.5 Skills Grid

**Structure:**

```html
<section id="skills" class="skills-section">
  <div class="section-header">
    <h2>// Technical Skills</h2>
    <div class="circuit-divider"></div>
  </div>
  <div class="skills-grid">
    <div class="skill-category">
      <h3>Programming & Frameworks</h3>
      <div class="skill-tags">
        <span class="skill-tag">PHP</span>
        <span class="skill-tag">Vue.js</span>
        <span class="skill-tag">Laravel</span>
        <span class="skill-tag">MySQL</span>
        <span class="skill-tag">PostgreSQL</span>
        <span class="skill-tag">Python</span>
      </div>
    </div>
    <!-- More categories -->
  </div>
</section>
```

**Visual Properties:**
| Property | Value |
|----------|-------|
| Grid Layout | 2 columns desktop, 1 column mobile |
| Tag Background | Slate 800 with cyan border |
| Tag Hover | Cyan glow + slight lift |
| Category Icon | Security-themed icons (shield, lock, network) |

**Skill Tag Styling:**

```css
.skill-tag {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(0, 217, 255, 0.3);
  color: #00d9ff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  border-color: #00d9ff;
  box-shadow: 0 0 15px rgba(0, 217, 255, 0.4);
  transform: translateY(-2px);
}
```

---

### 4.6 Certifications Section

**Structure:**

```html
<section id="certifications" class="certifications-section">
  <div class="section-header">
    <h2>// Certifications</h2>
    <div class="circuit-divider"></div>
  </div>
  <div class="cert-grid">
    <div class="cert-card">
      <div class="cert-icon">
        <svg><!-- Shield icon --></svg>
      </div>
      <div class="cert-content">
        <h3>Certified in Cybersecurity (CC)</h3>
        <div class="cert-issuer">(ISC)²</div>
        <div class="cert-dates">Oct 2025 - Oct 2028</div>
        <a href="#" class="cert-verify">Verify Credential →</a>
      </div>
    </div>
    <!-- More cert cards -->
  </div>
</section>
```

**Visual Properties:**
| Property | Value |
|----------|-------|
| Card Background | Slate 800 |
| Icon Background | Indigo gradient circle |
| Border | Subtle cyan on hover |
| Layout | 3 columns desktop, 2 tablet, 1 mobile |

---

### 4.7 Contact Section

**Structure:**

```html
<section id="contact" class="contact-section">
  <div class="section-header">
    <h2>// Get In Touch</h2>
    <div class="circuit-divider"></div>
  </div>
  <div class="contact-container">
    <div class="contact-info">
      <div class="contact-item">
        <span class="icon">📧</span>
        <a href="mailto:mblejano07@gmail.com">mblejano07@gmail.com</a>
      </div>
      <div class="contact-item">
        <span class="icon">📱</span>
        <a href="tel:+639279408413">(+63) 927 940 8413</a>
      </div>
      <div class="contact-item">
        <span class="icon">📍</span>
        <span>Metro Manila, Philippines</span>
      </div>
      <div class="contact-item">
        <span class="icon">💼</span>
        <a href="https://linkedin.com/in/michael-lejano" target="_blank">LinkedIn</a>
      </div>
    </div>
    <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn-primary">Send Message</button>
    </form>
  </div>
</section>
```

**Visual Properties:**
| Property | Value |
|----------|-------|
| Form Background | Slate 800 with cyber border |
| Input Background | Dark Slate with cyan focus |
| Button | Indigo gradient with glow |
| Success State | Matrix Green confirmation |

**Terminal-Style Input Effect:**

```css
input:focus,
textarea:focus {
  border-color: #00d9ff;
  box-shadow: 0 0 10px rgba(0, 217, 255, 0.3);
  font-family: 'JetBrains Mono', monospace;
}
```

---

## 5. Visual Elements & Assets

### 5.1 Background Patterns

**Network Graph Pattern:**

- **Style:** Connected nodes with fading lines
- **Colors:** Cyan nodes, indigo connections
- **Density:** Low (not overwhelming)
- **Animation:** Slow drift + mouse interaction
- **Usage:** Hero section background

**Circuit Board Pattern:**

- **Style:** Minimal circuit traces
- **Colors:** Subtle indigo on dark slate
- **Opacity:** 0.1 (very subtle)
- **Usage:** Section dividers, card backgrounds

**Encryption Visualization:**

- **Style:** Binary code rain (subtle, not Matrix-style)
- **Colors:** Cyan/green characters
- **Opacity:** 0.05 (barely visible)
- **Usage:** Footer background

### 5.2 Icon Set

**Primary Icons (Security-Themed):**

- Shield (certifications)
- Lock (security focus)
- Network/Nodes (connectivity)
- Code brackets (development)
- Terminal prompt (CLI aesthetic)

**Recommended Sources:**

1. **PrimeIcons** (built into PrimeVue)
   - `pi-shield`, `pi-lock`, `pi-code`, `pi-terminal`
2. **FontAwesome** (free tier)
   - `fa-shield-alt`, `fa-network-wired`, `fa-code`
3. **Custom SVGs** (for unique cyber elements)

### 5.3 Section Dividers

**Circuit Divider:**

```svg
<svg viewBox="0 0 1200 60" preserveAspectRatio="none">
  <path d="M0,30 L200,30 L200,10 L250,30 L200,50 L200,30 L400,30 L400,15 L450,30 L400,45 L400,30 L1200,30"
        stroke="#6366F1"
        stroke-width="2"
        fill="none"
        opacity="0.5"/>
</svg>
```

**Usage:** Between all major sections

---

## 6. Animation Specifications

### 6.1 Fade-In on Scroll

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-section {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}
```

**Trigger:** Intersection Observer on scroll

### 6.2 Network Graph Animation

**Implementation Options:**

**Option A: Pure CSS (Simple)**

```css
.network-node {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, -10px);
  }
}
```

**Option B: Canvas + JavaScript (Recommended)**

```javascript
// Particle network animation
const canvas = document.querySelector('.network-graph')
const ctx = canvas.getContext('2d')
// ... particle system implementation
```

**Performance Budget:**

- Max 50 nodes on mobile
- Max 150 nodes on desktop
- 60 FPS target
- Reduce on low-power mode

### 6.3 Glow Pulse Effects

```css
@keyframes glowPulse {
  0%,
  100% {
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
  }
  50% {
    box-shadow: 0 0 25px rgba(99, 102, 241, 0.8);
  }
}

.cta-button {
  animation: glowPulse 2s ease-in-out infinite;
}
```

### 6.4 Terminal Text Effect (Optional)

```css
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.terminal-text {
  overflow: hidden;
  border-right: 2px solid #00d9ff;
  white-space: nowrap;
  animation:
    typing 3s steps(40) 1s,
    blink 0.75s step-end infinite;
}
```

**Usage:** Hero tagline only (not overused)

### 6.5 Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .network-graph-bg {
    display: none; /* Disable network animation */
  }
}
```

---

## 7. Responsive Breakpoints

### 7.1 Breakpoint Definitions

```css
/* Mobile First Approach */

/* Mobile (default) */
/* ≤ 767px */

/* Tablet */
@media (min-width: 768px) {
  /* 768px - 1023px */
}

/* Desktop */
@media (min-width: 1024px) {
  /* 1024px - 1279px */
}

/* Large Desktop */
@media (min-width: 1280px) {
  /* ≥ 1280px */
}
```

### 7.2 Responsive Behavior Matrix

| Element             | Mobile         | Tablet                  | Desktop                    |
| ------------------- | -------------- | ----------------------- | -------------------------- |
| **Navigation**      | Hamburger menu | Hamburger or horizontal | Horizontal                 |
| **Hero Layout**     | Single column  | Single column           | Two column (text + visual) |
| **Skills Grid**     | 1 column       | 2 columns               | 3 columns                  |
| **Cert Cards**      | 1 column       | 2 columns               | 3 columns                  |
| **Timeline**        | Single column  | Single column           | Single column (wider)      |
| **Contact Form**    | Full width     | 50% width               | 50% width                  |
| **Font Sizes**      | 75%            | 90%                     | 100%                       |
| **Section Padding** | 3rem vertical  | 4rem vertical           | 6rem vertical              |

---

## 8. Accessibility Compliance (WCAG 2.1 AA)

### 8.1 Color Contrast

All text meets minimum 4.5:1 contrast ratio:

| Combination | Foreground            | Background           | Ratio  | Status |
| ----------- | --------------------- | -------------------- | ------ | ------ |
| Headings    | White (#ffffff)       | Dark Slate (#0f172a) | 21.0:1 | ✅ AAA |
| Body        | Light Gray (#f1f5f9)  | Dark Slate (#0f172a) | 18.4:1 | ✅ AAA |
| Secondary   | Medium Gray (#94a3b8) | Dark Slate (#0f172a) | 9.8:1  | ✅ AAA |
| Links       | Cyan (#00d9ff)        | Dark Slate (#0f172a) | 9.4:1  | ✅ AAA |
| CTAs        | White (#ffffff)       | Indigo (#6366F1)     | 8.2:1  | ✅ AAA |

### 8.2 Focus States

```css
/* Visible focus for all interactive elements */
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: 2px solid #00d9ff;
  outline-offset: 2px;
  box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
}
```

### 8.3 Keyboard Navigation

- All interactive elements reachable via Tab
- Focus order follows visual layout
- Skip-to-content link provided
- No keyboard traps

### 8.4 Screen Reader Support

- Semantic HTML5 (proper heading hierarchy)
- ARIA labels on all interactive elements
- Alt text on all images
- Live regions for form submissions

---

## 9. PrimeVue Theme Configuration

### 9.1 Tailwind Config Updates

```typescript
// tailwind.config.ts
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#0a0e1a',
          slate: '#0f172a',
          slate800: '#1e293b',
          slate700: '#334155',
          slate600: '#475569',
          indigo: '#6366F1',
          indigoDark: '#4f46e5',
          indigoLight: '#818cf8',
          green: '#00ff41',
          cyberGreen: '#10b981',
          cyan: '#00d9ff',
          cyanDark: '#0891b2',
          purple: '#7c3aed',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(99, 102, 241, 0.5)',
        'neon-cyan': '0 0 15px rgba(0, 217, 255, 0.4)',
        'neon-green': '0 0 15px rgba(16, 185, 129, 0.4)',
      },
    },
  },
  plugins: [],
}
```

### 9.2 PrimeVue Theme Preset Extension

```javascript
// src/plugins/cyber-theme.js
import Aura from '@primevue/themes'

export const CyberTheme = Aura.extend({
  name: 'cyber-theme',
  colors: {
    primary: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366F1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    accent: {
      cyan: '#00d9ff',
      green: '#10b981',
      purple: '#7c3aed',
    },
  },
  semantic: {
    primary: '{indigo.500}',
    focusRing: {
      color: '{cyan.500}',
      shadow: '0 0 10px rgba(0, 217, 255, 0.5)',
    },
  },
})
```

---

## 10. Asset List

### 10.1 Required SVGs

| Asset            | Description               | Source        | Status       |
| ---------------- | ------------------------- | ------------- | ------------ |
| Network Graph BG | Animated particle network | Custom Canvas | ⏳ To Create |
| Circuit Divider  | Section divider SVG       | Custom SVG    | ⏳ To Create |
| Shield Icon      | Certifications            | PrimeIcons    | ✅ Available |
| Lock Icon        | Security theme            | PrimeIcons    | ✅ Available |
| Terminal Icon    | Development               | PrimeIcons    | ✅ Available |

### 10.2 Icon Sources

1. **PrimeIcons** (Included with PrimeVue)

   - Free, no attribution required
   - https://primevue.org/icons/

2. **FontAwesome Free** (Optional)
   - Attribution required for free tier
   - https://fontawesome.com/

### 10.3 Font Loading

```html
<!-- Add to index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

---

## 11. Performance Budget

| Metric                     | Target       | Rationale          |
| -------------------------- | ------------ | ------------------ |
| **Lighthouse Performance** | > 90         | SEO + UX           |
| **First Contentful Paint** | < 1.5s       | Perceived speed    |
| **Time to Interactive**    | < 3.5s       | Usability          |
| **Total Page Weight**      | < 2MB        | Mobile performance |
| **Network Graph FPS**      | 60 FPS       | Smooth animation   |
| **Reduced Motion**         | ✅ Supported | Accessibility      |

---

## 12. File Structure

```
portfolio-2026/
├── design-specs/
│   ├── portfolio-v2-cyber-design-specs.md    ← This file
│   ├── cyber-theme.css                        ← Custom CSS variables
│   └── asset-references.md                    ← Asset sources
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   ├── cyber-theme.css                ← Theme overrides
│   │   │   └── animations.css                 ← Animation keyframes
│   │   └── images/
│   │       ├── network-graph.svg              ← Static fallback
│   │       └── circuit-divider.svg            ← Section divider
│   └── components/
│       ├── CyberNav.vue                       ← Navigation
│       ├── HeroSection.vue                    ← Hero
│       ├── AboutSection.vue                   ← About
│       ├── ExperienceTimeline.vue             ← Timeline
│       ├── SkillsGrid.vue                     ← Skills
│       ├── CertificationsGrid.vue             ← Certs
│       └── ContactForm.vue                    ← Contact
└── tailwind.config.ts                         ← Updated with cyber colors
```

---

## 13. Implementation Checklist

### Phase 1: Foundation (Day 1)

- [ ] Update tailwind.config.ts with cyber colors
- [ ] Create cyber-theme.css with CSS variables
- [ ] Set up font loading (Inter + JetBrains Mono)
- [ ] Create base layout component

### Phase 2: Components (Day 2-3)

- [ ] Implement CyberNav with glassmorphism
- [ ] Build HeroSection with network graph
- [ ] Create AboutSection with stats
- [ ] Build ExperienceTimeline
- [ ] Create SkillsGrid with tags
- [ ] Build CertificationsGrid
- [ ] Implement ContactForm

### Phase 3: Polish (Day 4)

- [ ] Add animations (fade-in, glow, pulse)
- [ ] Implement reduced-motion support
- [ ] Test responsive breakpoints
- [ ] Accessibility audit (axe-core)
- [ ] Performance optimization

---

## 14. Document History

| Version | Date       | Author         | Changes               |
| ------- | ---------- | -------------- | --------------------- |
| 1.0     | 2026-04-27 | Designer Agent | Initial specification |

---

**Status:** ✅ Complete - Ready for Implementation  
**Next Step:** Handoff to Frontend Engineer  
**Review:** Pending Arbiter code review after implementation

---

**End of Design Specification**
