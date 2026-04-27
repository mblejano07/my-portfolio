<script setup lang="ts">
// Content from requirements
const name = 'Michael Barroga Lejano'
const title = 'Senior Software Engineer / Developer'
const credentials = '(ISC)² Certified in Cybersecurity | MS IT (in-progress)'
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
    <canvas ref="networkCanvas" class="absolute inset-0 h-full w-full opacity-30" aria-hidden="true"></canvas>
    <div class="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e293b]"></div>

    <!-- Content -->
    <div class="container relative z-10 mx-auto max-w-6xl px-4" role="presentation">
      <!-- Status Badge -->
      <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#10b981] bg-[rgba(16,185,129,0.1)] px-4 py-2">
        <span class="relative flex h-3 w-3">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75"></span>
          <span class="relative inline-flex h-3 w-3 rounded-full bg-[#10b981]"></span>
        </span>
        <span class="text-sm font-medium text-[#10b981]">Available for Opportunities</span>
      </div>

      <!-- Name -->
      <h1 class="mb-4 text-center text-5xl font-bold text-white md:text-7xl">
        {{ name }}
      </h1>

      <!-- Title -->
      <p class="mb-3 text-center text-xl font-semibold text-[#00d9ff] md:text-2xl">
        {{ title }}
      </p>

      <!-- Credentials -->
      <p class="mb-8 text-center text-sm text-[#94a3b8] md:text-base">
        {{ credentials }}
      </p>

      <!-- Professional Summary (truncated for hero) -->
      <p class="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-[#f1f5f9] md:text-xl">
        {{ professionalSummary }}
      </p>

      <!-- CTAs -->
      <div class="flex flex-col justify-center gap-4 sm:flex-row" role="navigation" aria-label="Primary actions">
        <a href="#contact" class="cyber-btn-primary" aria-label="Navigate to contact section"> Get in Touch </a>
        <a
          href="/assets/Michael-Lejano-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="cyber-btn-secondary"
          aria-label="Download resume"
          download
        >
          Download Resume ↓
        </a>
      </div>

      <!-- Contact Info -->
      <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4" role="navigation" aria-label="Contact information">
        <a
          :href="`mailto:${contact.email}`"
          class="group flex flex-col items-center gap-2 rounded-lg border border-[#334155] p-4 transition-all duration-300 hover:border-[#00d9ff] hover:bg-[rgba(0,217,255,0.05)] hover:shadow-[0_0_15px_rgba(0,217,255,0.4)]"
          aria-label="Send email"
        >
          <span class="text-2xl">📧</span>
          <span class="text-xs text-[#94a3b8] group-hover:text-[#00d9ff]">
            {{ contact.email }}
          </span>
        </a>
        <a
          :href="`tel:${contact.phone.replace(/[^\d+]/g, '')}`"
          class="group flex flex-col items-center gap-2 rounded-lg border border-[#334155] p-4 transition-all duration-300 hover:border-[#00d9ff] hover:bg-[rgba(0,217,255,0.05)] hover:shadow-[0_0_15px_rgba(0,217,255,0.4)]"
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
          class="group flex flex-col items-center gap-2 rounded-lg border border-[#334155] p-4 transition-all duration-300 hover:border-[#00d9ff] hover:bg-[rgba(0,217,255,0.05)] hover:shadow-[0_0_15px_rgba(0,217,255,0.4)]"
          aria-label="LinkedIn profile"
        >
          <span class="text-2xl">💼</span>
          <span class="text-xs text-[#94a3b8] group-hover:text-[#00d9ff]">LinkedIn</span>
        </a>
        <a
          :href="contact.github"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-2 rounded-lg border border-[#334155] p-4 transition-all duration-300 hover:border-[#00d9ff] hover:bg-[rgba(0,217,255,0.05)] hover:shadow-[0_0_15px_rgba(0,217,255,0.4)]"
          aria-label="GitHub profile"
        >
          <span class="text-2xl">🐙</span>
          <span class="text-xs text-[#94a3b8] group-hover:text-[#00d9ff]">GitHub</span>
        </a>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg class="h-6 w-6 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  scroll-behavior: smooth;
}

/* Canvas-based network graph animation */
@keyframes networkDrift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, -10px);
  }
}

.network-drift {
  animation: networkDrift 6s ease-in-out infinite;
}
</style>
