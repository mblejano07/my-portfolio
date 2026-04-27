# Portfolio v2 - Asset References & Resources

**Document ID:** AR-PORTFOLIO-V2-001  
**Version:** 1.0  
**Created:** 2026-04-27  
**Author:** Designer Specialist

---

## 1. Fonts (Google Fonts)

### Required Fonts

**Inter (Body Text)**

- **URL:** https://fonts.google.com/specimen/Inter
- **Weights:** 300, 400, 500, 600, 700
- **HTML:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

**JetBrains Mono (Headings/Code)**

- **URL:** https://fonts.google.com/specimen/JetBrains+Mono
- **Weights:** 400, 500, 600, 700
- **HTML:**

```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

**Combined Load (Recommended):**

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

---

## 2. Icons

### 2.1 PrimeIcons (Recommended - Built into PrimeVue)

**Free, no attribution required**

**Security-Themed Icons:**

- `pi-shield` - Shield icon
- `pi-lock` - Lock icon
- `pi-key` - Key icon
- `pi-code` - Code brackets
- `pi-terminal` - Terminal prompt
- `pi-network` - Network diagram
- `pi-server` - Server/database
- `pi-cloud` - Cloud services
- `pi-cog` - Settings/configuration
- `pi-check` - Checkmark (success)
- `pi-exclamation-triangle` - Warning
- `pi-info-circle` - Information

**Usage:**

```vue
<i class="pi pi-shield"></i>
<i class="pi pi-lock"></i>
<i class="pi pi-code"></i>
```

**Documentation:** https://primevue.org/icons/

---

### 2.2 FontAwesome Free (Alternative)

**Requires attribution for free tier**

**Security-Themed Icons:**

- `fa-shield-alt` - Shield
- `fa-lock` - Lock
- `fa-user-secret` - Security expert
- `fa-network-wired` - Network
- `fa-code` - Code
- `fa-terminal` - Terminal
- `fa-server` - Server
- `fa-cloud` - Cloud
- `fa-certificate` - Certification
- `fa-check-circle` - Success
- `fa-exclamation-triangle` - Warning

**CDN:**

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
```

**Attribution Required:**

```html
<!-- Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com -->
```

---

## 3. Background Patterns & SVGs

### 3.1 Network Graph Pattern

**Option A: Custom Canvas Animation (Recommended)**

- Implement with JavaScript Canvas API
- See `portfolio-v2-cyber-design-specs.md` §6.2
- Performance: 60 FPS target, reduce on mobile

**Option B: Static SVG Fallback**

- **Source:** Create custom or use generator
- **SVG Generators:**
  - https://www.svgbackgrounds.com/ (free/paid)
  - https://www.transparenttextures.com/ (free)
  - https://www.hero-patterns.com/ (free)

**Option C: CSS-Only Pattern**

```css
.network-pattern {
  background-image: radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.1) 1px, transparent 1px), radial-gradient(circle at 80%
        70%, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}
```

---

### 3.2 Circuit Board Pattern

**Custom SVG (Included in cyber-theme.css):**

```svg
<svg viewBox="0 0 1200 60" preserveAspectRatio="none">
  <path d="M0,30 L200,30 L200,10 L250,30 L200,50 L200,30 L400,30 L400,15 L450,30 L400,45 L400,30 L1200,30"
        stroke="#6366F1"
        stroke-width="2"
        fill="none"
        opacity="0.5"/>
</svg>
```

**Alternative Sources:**

- https://www.figma.com/community (search "circuit pattern")
- https://www.freepik.com (free with attribution)

---

### 3.3 Gradient Backgrounds

**CSS Gradients (No assets needed):**

```css
/* Cyber background */
background: linear-gradient(135deg, #0a0e1a 0%, #0f172a 50%, #1e293b 100%);

/* Network overlay */
background: linear-gradient(180deg, rgba(0, 217, 255, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%);
```

**Gradient Generators (for reference):**

- https://cssgradient.io/
- https://uigradients.com/
- https://webgradients.com/

---

## 4. Animation Libraries

### 4.1 Scroll Animations

**AOS (Animate On Scroll) - Recommended**

- **URL:** https://michalsnik.github.io/aos/
- **CDN:**

```html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

- **Usage:**

```vue
<div data-aos="fade-up">Content</div>
```

**ScrollReveal.js (Alternative)**

- **URL:** https://scrollrevealjs.org/
- **CDN:**

```html
<script src="https://unpkg.com/scrollreveal"></script>
```

---

### 4.2 Particle Network Animation

**particles.js (Lightweight)**

- **URL:** https://vincentgarreau.com/particles.js/
- **GitHub:** https://github.com/VincentGarreau/particles.js
- **CDN:**

```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

- **Config Example:**

```javascript
particlesJS('network-graph', {
  particles: {
    number: { value: 80 },
    color: { value: '#00d9ff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#6366F1',
      opacity: 0.4,
      width: 1,
    },
  },
})
```

**tsparticles (Modern, maintained)**

- **URL:** https://particles.js.org/
- **GitHub:** https://github.com/tsparticles/tsparticles
- **NPM:** `npm install tsparticles`

---

### 4.3 Typing Animation (Terminal Effect)

**Typed.js**

- **URL:** https://mattboldt.com/demos/typed-js/
- **GitHub:** https://github.com/mattboldt/typed.js/
- **CDN:**

```html
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
```

- **Usage:**

```javascript
new Typed('.hero-tagline', {
  strings: ['Senior Software Engineer', 'Cybersecurity Specialist'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
})
```

---

## 5. Stock Photos (If Needed)

### Professional Headshot Placeholder

**Free Stock Photo Sites:**

- **Unsplash:** https://unsplash.com/ (free, no attribution required)
- **Pexels:** https://www.pexels.com/ (free, no attribution required)
- **Pixabay:** https://pixabay.com/ (free, no attribution required)

**Search Terms:**

- "Professional headshot"
- "Software engineer"
- "Developer portrait"
- "Tech professional"

**Note:** Mike should provide his own professional photo for authenticity.

---

## 6. Resume PDF

**File:** `Michael-Lejano-Resume.pdf`  
**Location:** `/public/assets/` or `/src/assets/`  
**Download Attribute:** Add `download` attribute to link

**Usage:**

```html
<a href="/assets/Michael-Lejano-Resume.pdf" download="Michael-Lejano-Resume.pdf" class="btn-secondary"> Download Resume ↓ </a>
```

---

## 7. Formspree Integration

**Contact Form Handler:** https://formspree.io/

**Setup:**

1. Create account at https://formspree.io/
2. Create new form for portfolio
3. Get form endpoint URL (e.g., `https://formspree.io/f/your-form-id`)
4. Update form action in ContactForm.vue

**Usage:**

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

**Spam Protection:**

- Enable Formspree's built-in spam filtering
- Add honeypot field:

```html
<input type="text" name="_gotcha" style="display:none" />
```

---

## 8. Color Picker Tools

**For Future Adjustments:**

- **Coolors:** https://coolors.co/ (palette generator)
- **Adobe Color:** https://color.adobe.com/ (color wheel)
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/ (accessibility)
- **Color Hunt:** https://colorhunt.co/ (curated palettes)

---

## 9. Performance Optimization

### Image Optimization

**Tools:**

- **TinyPNG:** https://tinypng.com/ (PNG/JPG compression)
- **Squoosh:** https://squoosh.app/ (Google's image optimizer)
- **ImageOptim:** https://imageoptim.com/ (Mac app)

**Best Practices:**

- Use WebP format with PNG fallback
- Compress all images before deployment
- Lazy load images below the fold

### Code Optimization

**Tools:**

- **Vite Build:** Already configured (automatic minification)
- **Terser:** JavaScript minification (included with Vite)
- **CSSNano:** CSS minification

---

## 10. Testing Tools

### Accessibility

- **axe-core:** `npx axe-cli http://localhost:5173`
- **WAVE:** https://wave.webaim.org/
- **Lighthouse:** Chrome DevTools → Lighthouse tab

### Performance

- **PageSpeed Insights:** https://pagespeed.web.dev/
- **WebPageTest:** https://www.webpagetest.org/
- **GTmetrix:** https://gtmetrix.com/

### Responsive Testing

- **BrowserStack:** https://www.browserstack.com/ (paid)
- **Responsive Design Checker:** https://responsivedesignchecker.com/ (free)
- **Chrome DevTools:** Device toolbar (free)

---

## 11. Deployment

### GitHub Pages (Recommended)

**Workflow:** Already configured in `.github/workflows/deploy.yml`

**Steps:**

1. Push to `main` branch
2. GitHub Actions deploys automatically
3. Site available at `https://mblejano07.github.io/my-portfolio/`

### Alternative Hosting

**Netlify:**

- **URL:** https://www.netlify.com/
- **Free tier:** Unlimited sites, 100GB bandwidth/month
- **Auto-deploy:** Connect GitHub repo

**Vercel:**

- **URL:** https://vercel.com/
- **Free tier:** Unlimited sites, 100GB bandwidth/month
- **Auto-deploy:** Connect GitHub repo

---

## 12. File Checklist

### Required Assets

- [ ] `Michael-Lejano-Resume.pdf` - Resume download
- [ ] `profile-photo.jpg` or `profile-photo.png` - Professional headshot
- [ ] `favicon.ico` or `favicon.svg` - Browser tab icon
- [ ] `og-image.png` - Social media preview image

### Optional Assets

- [ ] `network-graph.svg` - Static fallback for network animation
- [ ] `circuit-divider.svg` - Section divider (already in CSS as data URI)
- [ ] `qr-code.png` - QR code for resume/contact

---

## 13. Budget & Licensing

### Free Resources (No Cost)

| Resource                | License                          | Attribution Required |
| ----------------------- | -------------------------------- | -------------------- |
| Google Fonts            | Open Font License                | No                   |
| PrimeIcons              | MIT                              | No                   |
| FontAwesome Free        | CC BY 4.0                        | Yes                  |
| Unsplash/Pexels/Pixabay | Free license                     | No                   |
| particles.js            | MIT                              | No                   |
| AOS                     | MIT                              | No                   |
| Formspree               | Free tier (50 submissions/month) | No                   |

### Paid Resources (If Needed)

| Resource             | Cost      | Notes                        |
| -------------------- | --------- | ---------------------------- |
| FontAwesome Pro      | $99/year  | More icons, no attribution   |
| Premium Stock Photos | $10-50    | If professional photo needed |
| BrowserStack         | $29/month | Cross-browser testing        |

**Total Estimated Cost:** $0 (all free resources sufficient)

---

**Document Status:** ✅ Complete  
**Last Updated:** 2026-04-27  
**Next Review:** During implementation phase
