<script setup lang="ts">
// Content from requirements
const name = 'Michael Barroga Lejano'
const title = 'Senior Software Engineer / Cybersecurity Specialist'
const professionalSummary =
  'Experienced Software Developer at the Department of Social Welfare and Development with 13+ years of total experience. Specializes in Business Process Analysis, Data Analysis, System Analysis, PHP development (Code Igniter Framework), MySQL Database, Web Development, and SCRUM methodology. Civil Service Professional eligible.'
const contact = {
  email: 'mblejano07@gmail.com',
  phone: '(+63) 927 940 8413',
  address: 'Blk 3 Lot 21 Pionner St. Villa Isabel Village Dasmarinas City, Philippines',
  linkedin: 'https://www.linkedin.com/in/michael-lejano',
  github: 'https://github.com/mblejano07',
}
</script>

<template>
  <section
    id="hero"
    class="hero-section relative flex min-h-screen items-center justify-center overflow-hidden"
    aria-label="Introduction and hero section"
    role="banner"
  >
    <!-- Network Graph Animation Background -->
    <div class="network-bg absolute inset-0" aria-hidden="true">
      <div class="network-node"></div>
      <div class="network-node"></div>
      <div class="network-node"></div>
      <div class="network-node"></div>
      <div class="network-node"></div>
      <div class="network-node"></div>
    </div>

    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e293b]"></div>

    <!-- Content -->
    <div class="container relative z-10 mx-auto max-w-5xl px-4 py-12" role="presentation">
      <!-- Status Badge -->
      <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#10b981] bg-[rgba(16,185,129,0.1)] px-4 py-2">
        <span class="relative flex h-3 w-3">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75"></span>
          <span class="relative inline-flex h-3 w-3 rounded-full bg-[#10b981]"></span>
        </span>
        <span class="text-sm font-medium text-[#10b981]">Available for Opportunities</span>
      </div>

      <!-- Greeting -->
      <p class="mb-4 text-center text-lg text-[#94a3b8]">👋 Hi, I'm</p>

      <!-- Name with Glow -->
      <div class="relative mb-6 inline-block">
        <h1 class="text-center font-mono text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          {{ name }}
        </h1>
        <div class="pointer-events-none absolute inset-0 -m-4 rounded-lg border-2 border-[rgba(0,217,255,0.3)]"></div>
      </div>

      <!-- Title -->
      <p class="mb-4 text-center text-xl font-medium text-[#e2e8f0] md:text-2xl">
        {{ title }}
      </p>

      <!-- Credentials -->
      <div class="mb-8 flex flex-wrap justify-center gap-3">
        <span
          class="credential-badge inline-flex items-center gap-2 rounded-full border border-[rgba(0,217,255,0.3)] bg-[rgba(0,217,255,0.1)] px-4 py-2 text-sm font-semibold text-[#00d9ff]"
        >
          (ISC)² Certified in Cybersecurity
        </span>
        <span
          class="credential-badge inline-flex items-center gap-2 rounded-full border border-[rgba(0,217,255,0.3)] bg-[rgba(0,217,255,0.1)] px-4 py-2 text-sm font-semibold text-[#00d9ff]"
        >
          MS IT (in-progress)
        </span>
      </div>

      <!-- Professional Summary -->
      <p class="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-[#f1f5f9] md:text-xl">
        {{ professionalSummary }}
      </p>

      <!-- CTAs with Gradients -->
      <div class="flex flex-col justify-center gap-4 sm:flex-row" role="navigation" aria-label="Primary actions">
        <a
          href="#contact"
          class="cta-button-primary inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#00d9ff] px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_30px_rgba(0,217,255,0.5)]"
          aria-label="Navigate to contact section"
        >
          Get in Touch
          <span>→</span>
        </a>
        <a
          href="/assets/Michael-Lejano-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-button-secondary inline-flex items-center justify-center gap-3 rounded-lg border-2 border-[rgba(0,217,255,0.5)] bg-transparent px-8 py-4 font-bold text-[#00d9ff] transition-all duration-300 hover:border-[rgba(0,217,255,0.8)] hover:bg-[rgba(0,217,255,0.1)] hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
          aria-label="Download resume"
          download
        >
          <span>↓ Download Resume</span>
        </a>
      </div>

      <!-- Contact Info -->
      <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4" role="navigation" aria-label="Contact information">
        <a
          :href="`mailto:${contact.email}`"
          class="contact-item group flex flex-col items-center gap-2 rounded-lg p-4 transition-all duration-300 hover:bg-[rgba(0,217,255,0.05)] hover:text-[#00d9ff]"
          aria-label="Send email"
        >
          <span class="text-2xl">📧</span>
          <span class="text-xs text-[#94a3b8] group-hover:text-[#00d9ff]">
            {{ contact.email }}
          </span>
        </a>
        <a
          :href="`tel:${contact.phone.replace(/[^\d+]/g, '')}`"
          class="contact-item group flex flex-col items-center gap-2 rounded-lg p-4 transition-all duration-300 hover:bg-[rgba(0,217,255,0.05)] hover:text-[#00d9ff]"
          aria-label="Call phone"
        >
          <span class="text-2xl">📞</span>
          <span class="text-xs text-[#94a3b8] group-hover:text-[#00d9ff]">
            {{ contact.phone }}
          </span>
        </a>
        <a
          :href="contact.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-item group flex flex-col items-center gap-2 rounded-lg p-4 transition-all duration-300 hover:bg-[rgba(0,217,255,0.05)] hover:text-[#00d9ff]"
          aria-label="LinkedIn profile"
        >
          <span class="text-2xl">💼</span>
          <span class="text-xs text-[#94a3b8] group-hover:text-[#00d9ff]">LinkedIn</span>
        </a>
        <a
          :href="contact.github"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-item group flex flex-col items-center gap-2 rounded-lg p-4 transition-all duration-300 hover:bg-[rgba(0,217,255,0.05)] hover:text-[#00d9ff]"
          aria-label="GitHub profile"
        >
          <span class="text-2xl">🐙</span>
          <span class="text-xs text-[#94a3b8] group-hover:text-[#00d9ff]">GitHub</span>
        </a>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <span class="text-3xl text-[#64748b]">↓</span>
        <span class="text-xs text-[#64748b]">Scroll</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  scroll-behavior: smooth;
}

/* Network Graph Background Animation */
.network-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  pointer-events: none;
  z-index: 0;
}

.network-node {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #00d9ff;
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

.network-node:nth-child(1) {
  top: 10%;
  left: 15%;
  animation-delay: 0s;
}
.network-node:nth-child(2) {
  top: 20%;
  right: 20%;
  animation-delay: 0.5s;
}
.network-node:nth-child(3) {
  bottom: 30%;
  left: 25%;
  animation-delay: 1s;
}
.network-node:nth-child(4) {
  bottom: 15%;
  right: 15%;
  animation-delay: 1.5s;
}
.network-node:nth-child(5) {
  top: 50%;
  left: 50%;
  animation-delay: 2s;
}
.network-node:nth-child(6) {
  top: 35%;
  right: 35%;
  animation-delay: 2.5s;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .network-node {
    animation: none;
  }
}
</style>
