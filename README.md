# Michael Lejano - Professional Portfolio v2.1

**🔐 Cybersecurity Professional | IT Specialist | Cloud & Security Enthusiast**

---

## 🎨 Project Overview

This is my professional portfolio website showcasing my cybersecurity expertise, certifications, and technical projects.

**Theme:** Dark Cyber + Network/Security Graphics  
**Stack:** Vue 3 + TypeScript + PrimeVue + TailwindCSS  
**Deployment:** GitHub Pages (Auto-deploy via GitHub Actions)

---

## 🚀 Live Site

**Production:** https://mblejano07.github.io/my-portfolio/

---

## 🛠️ Tech Stack

| Category             | Technology               |
| -------------------- | ------------------------ |
| **Framework**        | Vue 3 (Composition API)  |
| **Language**         | TypeScript               |
| **UI Library**       | PrimeVue (Aura Theme)    |
| **Styling**          | TailwindCSS              |
| **State Management** | Pinia                    |
| **Build Tool**       | Vite                     |
| **Validation**       | Vuelidate                |
| **Icons**            | FontAwesome + Hero Icons |
| **Charts**           | ApexCharts               |

---

## 🎯 Features (v2.1 - Dark Cyber Theme)

### Design Elements

- **Dark Cyber Theme:** Deep slate/black gradients with neon accents
- **Color Palette:** Matrix Green (#00ff41), Cyber Cyan (#00d9ff), Electric Purple (#7c3aed)
- **Visual Effects:** Network graph animations, circuit board patterns, glow effects
- **Typography:** Inter (body) + JetBrains Mono (code/terminal elements)

### Sections

1. **Hero** - Animated network graph + professional intro
2. **About** - Cybersecurity-focused bio
3. **Experience** - Timeline with security-themed dividers
4. **Skills** - Security expertise + technical skills grid
5. **Certifications** - ISC² CC, AWS Security, Cisco (with verification links)
6. **Contact** - Terminal-inspired form with Formspree integration

### Security Features

- Content Security Policy (CSP) headers
- Input validation on all forms
- No sensitive data exposure
- HTTPS-only deployment

---

## 📦 Local Development

### Prerequisites

- Node.js 20+ (LTS)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/mblejano07/my-portfolio.git
cd portfolio-2026

# Install dependencies
npm install

# Setup Git hooks
npm run prepare

# Start development server
npm run dev
```

### Environment Variables

Create `.env.development.local`:

```env
VITE_API_ROOT_URL=http://localhost:8000
VITE_FORMSPREE_ID=your-formspree-id
```

---

## 🏗️ Build & Deploy

### Production Build

```bash
npm run build:production
```

### Deployment

**Automated:** Push to `main` branch → GitHub Actions builds + deploys to GitHub Pages

**Manual:**

```bash
npm run build:production
npm run deploy
```

---

## 📐 Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Develop + commit
git add .
git commit -m "feat: your changes"

# Push to feature branch
git push -u origin feature/your-feature

# Create Pull Request → Code Review → Merge to main
```

**Branch Protection:**

- `main` → Protected (PR required, review approval needed)
- `feature/*` → Development branches

---

## 📄 Project Structure

```
portfolio-2026/
├── .github/workflows/deploy.yml    # GitHub Actions CI/CD
├── src/
│   ├── assets/                     # CSS, design tokens, images
│   ├── components/                 # Vue components
│   ├── composables/                # Reusable composition functions
│   ├── layouts/                    # Page layouts
│   ├── pages/                      # Route pages
│   ├── router/                     # Vue Router config
│   ├── stores/                     # Pinia stores
│   └── utils/                      # Helper functions
├── public/                         # Static assets
├── design-specs/                   # Design documentation
└── docs/                           # Project documentation
```

---

## 🎨 Design Specifications

**Design Theme:** Dark Cyber + Network/Security Graphics  
**Designer:** OpenClaw Design Team  
**Specs Location:** `/design-specs/portfolio-v2-cyber-design-specs.md`

### Color Palette

| Color           | Hex       | Usage                   |
| --------------- | --------- | ----------------------- |
| Void Black      | `#0a0a0f` | Primary background      |
| Deep Slate      | `#0f172a` | Secondary background    |
| Matrix Green    | `#00ff41` | Success states, accents |
| Cyber Cyan      | `#00d9ff` | Primary CTAs, glows     |
| Electric Purple | `#7c3aed` | Secondary accents       |
| Indigo          | `#6366F1` | Brand color             |

---

## ✅ Quality Assurance

- **Code Review:** Arbiter sign-off required
- **Security Audit:** Sentinel approval before deploy
- **WCAG Compliance:** 2.1 AA contrast ratios
- **Performance:** Lighthouse score >90

---

## 📞 Contact

**Developer:** Michael Lejano  
**Email:** [your-email@example.com]  
**LinkedIn:** [your-linkedin-profile]  
**GitHub:** https://github.com/mblejano07

---

## 📜 License

© 2026 Michael Lejano. All rights reserved.

---

**Built with 🔐 and ☕ by Michael Lejano**
