# Portfolio Requirements — Michael Lejano

**Project:** Professional Portfolio Website  
**Type:** Standalone SPA (No Backend)  
**Template:** `webkit-spa-standalone`  
**Date:** 2026-04-25  
**Status:** Requirements Complete → Ready for Orchestrator

---

## 📊 Content Inventory

### Personal Information
- **Name:** Michael Barroga Lejano
- **Title:** Senior Software Engineer / Developer
- **Certifications:** (ISC)² Certified in Cybersecurity, CC
- **Education:** MS Information Technology (in-progress, DLSU 2025-Present)
- **Location:** Metro Manila, National Capital Region, Philippines
- **Contact:**
  - Email: mblejano07@gmail.com
  - Phone: (+63) 927 940 8413
  - Address: Blk 3 Lot 21 Pionner St. Villa Isabel Village Dasmarinas City, Philippines
  - LinkedIn: https://www.linkedin.com/in/michael-lejano

### Professional Summary
> Experienced Software Developer at the Department of Social Welfare and Development with 13+ years of total experience. Specializes in Business Process Analysis, Data Analysis, System Analysis, PHP development (Code Igniter Framework), MySQL Database, Web Development, and SCRUM methodology. Civil Service Professional eligible.

### Work Experience

#### 1. Information Technology Officer II
**Department of Social Welfare and Development - Central Office**  
*July 2023 - Present (2 years 4 months)*

- Lead the team in SCRUM as the SCRUM Master
- Act as Software Development Technical Lead
- Provide guidance on Junior Developers and Project Managers
- Design, develop, and maintain web applications using modern web development frameworks and technologies
- Collaborate with stakeholders to gather and analyze requirements, ensuring alignment with the organization's strategic objectives and digital transformation initiatives
- Develop and maintain high-quality, scalable, and secure code, adhering to best practices in software development
- Implement and integrate APIs, as well as perform API integrations, to support seamless data exchange between systems
- Troubleshoot and resolve issues related to application development and performance, ensuring optimal user experience
- Collaborate with UI/UX designers to create visually appealing and user-friendly web applications
- Participate in code reviews and provide constructive feedback to team members, fostering a culture of continuous improvement
- Stay up-to-date with emerging web development trends, tools, and technologies to maintain the organization's competitive edge
- Work closely with project managers and other team members to ensure the timely delivery of web application projects

#### 2. Computer Programmer III
**Department of Social Welfare and Development - Central Office**  
*November 2015 - August 2023 (7 years 9 months)*

- Design, develop application software/database systems
- Recommends appropriate development tools to be utilized in consideration of connectivity and available resources
- Prepare user's manual and documentation
- Serve as resource person/facilitator during the conduct systems test and user's training on developed computer programs
- Perform programming tasks to enhance existing application/software/database systems
- Perform other technical tasks related to the position that may be given from time to time
- Render additional services as authorized in the exigency of the service which shall be compensated accordingly

#### 3. Computer Maintenance Technologist
**Department of Social Welfare and Development**  
*November 2012 - November 2015 (3 years)*

- Provides intermediate to advanced professional and technical work to ensure and support technology accessibility to all DSWD users, including the Pantawid Pamilya Pilipino Program
- Maintains currency of knowledge with respect to relevant state-of-the-art technology, equipment, and/or systems
- Responsible for day-to-day service support
- Must be able to meet work schedule and attendance standards
- Performs related duties as required

### Education

#### Master of Science in Information Technology
**De La Salle University** | 2025 - Present (in-progress)

#### Bachelor of Science in Computer Engineering
**Technological Institute of the Philippines** | 2007 - 2012
- ABET Accredited Engineering Program

### Certifications

1. **Certified in Cybersecurity (CC)** - ISC2 (Oct 2025 - Oct 2028)
2. **Introduction to Cybersecurity** - Cisco Networking Academy (Oct 2025)
3. **AWS Partner: Technical Accredited** - Amazon Web Services (Mar 2025)
4. **AWS Partner: Sales Accreditation** - Amazon Web Services (Mar 2025)
5. **AWS Partner: Cloud Economics Essentials** - Amazon Web Services (Mar 2025)
6. **AWS Knowledge: Cloud Essentials** - Amazon Web Services (Mar 2025)
7. **Web Services Development Training** - Acumen IT Training, Inc. (Jan 2023)
8. **Career Service Examination (Professional)** - Civil Service Commission (Apr 2016)
9. **EDP Specialist (Computer Programmer) - 2nd Level Eligibility**

### Technical Skills

**Programming & Frameworks:**
- PHP (Code Igniter Framework, Laravel Framework)
- Vue.js
- MySQL
- PostgreSQL
- Python

**Cloud & DevOps:**
- Amazon Web Services (AWS)
- CI/CD
- Google AppSheet
- Google AppScript
- FlutterFlow

**Project Management:**
- SCRUM
- MS Project
- Trello

**Tools & Platforms:**
- Figma
- Google Workspace
- Microsoft
- Windows
- Linux/macOS
- Odoo 18 Community Edition

**Competencies:**
- Agile Development
- Software Development
- System Analysis
- Business Process Analysis
- Data Analysis
- Software Architecture
- System Design

### Languages
- English
- Filipino

### Recommendation
> "I highly recommend Mike Lejano, our subject matter expert in software and solutions development at DSWD's CIO Office. Mike's expertise spans diverse software tools, and his well-developed social skills foster collaboration across teams. He demonstrates an outstanding work ethic, consistently delivering high-quality results under pressure. Reliable and professional, Mike handles criticism constructively and always goes the extra mile. It's a privilege to work with him."
> 
> — **Julius G.**

---

## 📝 User Stories

### US-01: View Professional Summary
**As a** visitor (recruiter, colleague, potential client)  
**I want to** see Mike's professional summary and headline immediately  
**So that** I understand his expertise and value proposition

**Acceptance Criteria:**
```gherkin
Given I land on the portfolio homepage
When I view the hero section
Then I see "Michael Barroga Lejano" as the main heading
And I see "Senior Software Engineer / Developer" as the subtitle
And I see "(ISC)² Certified in Cybersecurity | MS IT (in-progress)" as credentials
And I see a professional photo placeholder
And I see contact information (email, phone, location)
```

---

### US-02: View Work Experience Timeline
**As a** visitor  
**I want to** view Mike's work experience in chronological order  
**So that** I understand his career progression and expertise

**Acceptance Criteria:**
```gherkin
Given I navigate to the Experience section
When I view the timeline
Then I see 3 positions in reverse chronological order:
  1. IT Officer II (Jul 2023 - Present)
  2. Computer Programmer III (Nov 2015 - Aug 2023)
  3. Computer Maintenance Technologist (Nov 2012 - Nov 2015)
And each position shows:
  - Job title
  - Company name (DSWD)
  - Employment dates
  - Key responsibilities (bullet points)
And I can expand/collapse details for each position
```

---

### US-03: View Skills & Expertise
**As a** visitor  
**I want to** see Mike's technical skills organized by category  
**So that** I can assess his technical fit for opportunities

**Acceptance Criteria:**
```gherkin
Given I navigate to the Skills section
When I view the skills
Then I see skills grouped by category:
  - Programming & Frameworks (PHP, Vue.js, Laravel, etc.)
  - Cloud & DevOps (AWS, CI/CD, etc.)
  - Project Management (SCRUM, MS Project, Trello)
  - Tools & Platforms (Figma, Odoo, etc.)
  - Competencies (Agile, System Analysis, etc.)
And each skill shows proficiency level (if available)
And the layout is visually scannable (tags or progress bars)
```

---

### US-04: View Education & Certifications
**As a** visitor  
**I want to** see Mike's education and certifications  
**So that** I can verify his qualifications

**Acceptance Criteria:**
```gherkin
Given I navigate to the Education/Certifications section
When I view the content
Then I see:
  - MS in Information Technology (DLSU, 2025-Present)
  - BS in Computer Engineering (TIP, 2007-2012, ABET accredited)
And I see 9 certifications with:
  - Certification name
  - Issuing organization
  - Issue date (and expiry if applicable)
  - Link to verify (if available)
And certifications are in reverse chronological order
```

---

### US-05: Contact Mike
**As a** visitor  
**I want to** send Mike a message via contact form  
**So that** I can reach out for opportunities or collaboration

**Acceptance Criteria:**
```gherkin
Given I navigate to the Contact section
When I fill out the contact form
Then I can enter:
  - My name
  - My email
  - My message
And I submit the form
Then the form submits via Formspree (no backend)
And I see a success message
And Mike receives the email at mblejano07@gmail.com
And the form has spam protection (honeypot or reCAPTCHA)
```

---

### US-06: Download Resume
**As a** visitor  
**I want to** download Mike's resume as a PDF  
**So that** I can save it for review or sharing

**Acceptance Criteria:**
```gherkin
Given I am on any page section
When I click the "Download Resume" button
Then the PDF file (mblejano_2025.pdf) downloads
And the download starts immediately
And the file name is professional (e.g., "Michael-Lejano-Resume.pdf")
```

---

### US-07: Responsive Design
**As a** mobile visitor  
**I want to** view the portfolio on my phone or tablet  
**So that** I can review Mike's profile on any device

**Acceptance Criteria:**
```gherkin
Given I access the portfolio on a mobile device (320px - 768px)
When I navigate through all sections
Then all content is readable without horizontal scrolling
And the navigation menu collapses to a hamburger menu
And touch targets are at least 44px
And the layout adjusts for tablet (768px - 1024px)
And the portfolio passes Google Mobile-Friendly Test
```

---

### US-08: Accessibility (WCAG 2.1 AA)
**As a** visitor with disabilities  
**I want to** navigate the portfolio using assistive technologies  
**So that** I can access Mike's information regardless of my abilities

**Acceptance Criteria:**
```gherkin
Given I use a screen reader
When I navigate the portfolio
Then all images have alt text
And all interactive elements are keyboard accessible
And focus states are visible
And color contrast meets WCAG 2.1 AA (4.5:1 for text)
And the page has proper heading hierarchy (H1, H2, H3)
And form fields have associated labels
And the portfolio passes axe-core accessibility audit
```

---

## 🏗️ Site Structure

```
Homepage (Single Page Application)
│
├── Hero Section
│   ├── Name, Title, Credentials
│   ├── Professional Photo
│   ├── Contact Info (email, phone, location)
│   ├── LinkedIn Link
│   └── Download Resume Button
│
├── About / Professional Summary
│   └── 3-4 paragraph bio
│
├── Work Experience
│   ├── IT Officer II (Current)
│   ├── Computer Programmer III
│   └── Computer Maintenance Technologist
│
├── Skills & Expertise
│   ├── Programming & Frameworks
│   ├── Cloud & DevOps
│   ├── Project Management
│   ├── Tools & Platforms
│   └── Competencies
│
├── Education & Certifications
│   ├── Education (2 entries)
│   └── Certifications (9 entries)
│
├── Contact
│   ├── Contact Form (Formspree)
│   └── Direct Contact Info
│
└── Footer
    ├── Copyright
    ├── LinkedIn Link
    └── Last Updated
```

---

## ⚙️ Functional Requirements

### FR-01: Contact Form
- **Handler:** Formspree (https://formspree.io/)
- **Endpoint:** To be configured (mblejano07@gmail.com)
- **Fields:** Name, Email, Message
- **Spam Protection:** Honeypot field + reCAPTCHA v2 (optional)
- **Success State:** Show success message, clear form
- **Error State:** Show error message, retain form data

### FR-02: Resume Download
- **File:** `/assets/Michael-Lejano-Resume.pdf`
- **Trigger:** Button in Hero section + Footer
- **Behavior:** Direct download (not open in browser)
- **Analytics:** Track download clicks (optional)

### FR-03: Responsive Navigation
- **Desktop:** Horizontal navigation bar
- **Mobile:** Hamburger menu with slide-out drawer
- **Smooth Scroll:** Clicking nav links scrolls to section
- **Active State:** Highlight current section in nav

### FR-04: Performance
- **Load Time:** < 3 seconds on 3G
- **Lighthouse Score:** > 90 for Performance, Accessibility, Best Practices, SEO
- **Image Optimization:** WebP format with fallback
- **Code Splitting:** Lazy load non-critical components

---

## 🎯 Non-Functional Requirements

### NFR-01: Accessibility
- **Standard:** WCAG 2.1 Level AA
- **Testing:** axe-core, WAVE, manual screen reader test
- **Requirements:**
  - All images have alt text
  - Keyboard navigation works
  - Focus states visible
  - Color contrast ≥ 4.5:1
  - Proper heading hierarchy

### NFR-02: SEO
- **Meta Tags:** Title, description, keywords, Open Graph
- **Structured Data:** JSON-LD for Person schema
- **Sitemap:** Generate sitemap.xml
- **Robots.txt:** Allow all crawlers
- **Canonical URL:** Set canonical tag

### NFR-03: Security
- **HTTPS:** Required (enforced by hosting provider)
- **No Sensitive Data:** No API keys, passwords, or tokens in code
- **Formspree:** Use Formspree's spam filtering
- **Content Security Policy:** Basic CSP headers (if hosting allows)

### NFR-04: Browser Support
- **Modern Browsers:** Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile:** iOS Safari, Chrome Mobile
- **Graceful Degradation:** Functional on older browsers

### NFR-05: Hosting
- **Recommended:** GitHub Pages, Netlify, or Vercel
- **Requirements:**
  - Free tier sufficient
  - HTTPS included
  - Custom domain support (optional)
  - Automatic deployment from Git

---

## ✅ Acceptance Criteria (Project Level)

### Must Have (P0)
- [ ] All 6 sections implemented (Hero, About, Experience, Skills, Education/Certs, Contact)
- [ ] Contact form works (submits to Formspree)
- [ ] Resume download works
- [ ] Responsive on mobile, tablet, desktop
- [ ] WCAG 2.1 AA compliant
- [ ] No console errors
- [ ] All content accurate (matches LinkedIn + resume)

### Should Have (P1)
- [ ] Smooth scroll navigation
- [ ] Active section highlighting
- [ ] Professional design (PrimeVue Aura theme)
- [ ] Lighthouse score > 90
- [ ] SEO meta tags implemented

### Nice to Have (P2)
- [ ] Dark mode toggle
- [ ] Print stylesheet
- [ ] Analytics (Google Analytics or Plausible)
- [ ] Social sharing buttons
- [ ] Blog section (future enhancement)

---

## 📋 Handoff Checklist (Buddy → Orchestrator)

- [x] Content inventory complete
- [x] User stories defined with acceptance criteria
- [x] Site structure mapped
- [x] Functional requirements specified
- [x] Non-functional requirements specified
- [x] Project type confirmed: **Standalone SPA**
- [x] Template selected: **webkit-spa-standalone**
- [x] Form handler: **Formspree**
- [x] Hosting recommendation: **GitHub Pages / Netlify / Vercel**

---

**Next Step:** Handoff to Orchestrator for sprint planning and task assignment.

**Orchestrator Action Required:**
1. Review requirements
2. Create sprint plan
3. Assign tasks to Frontend + Designer
4. Set timeline (target: 1-2 sprints)

---

*Document created: 2026-04-25 17:05 GMT+8*  
*Author: Chief of Staff (acting as Buddy for requirements)*  
*Status: Ready for Orchestrator*
