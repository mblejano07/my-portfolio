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
    class="hero-section relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900/50 to-slate-900"
    aria-label="Introduction and hero section"
    role="banner"
  >
    <!-- Gradient Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20"></div>
    <div class="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-indigo-500/20 blur-3xl"></div>
    <div
      class="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-cyan-500/20 blur-3xl animation-delay-1000"
    ></div>

    <!-- Content -->
    <div class="container relative z-10 mx-auto max-w-4xl px-4" role="presentation">
      <!-- Professional Photo Placeholder -->
      <div
        class="mx-auto mb-8 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-2xl md:h-48 md:w-48"
      >
        <div class="text-6xl">👨‍💻</div>
      </div>

      <!-- Name -->
      <h1 class="mb-4 text-center text-4xl font-bold text-white md:text-6xl">
        {{ name }}
      </h1>

      <!-- Title -->
      <p class="mb-2 text-center text-xl font-semibold text-indigo-300 md:text-2xl">
        {{ title }}
      </p>

      <!-- Credentials -->
      <p class="mb-8 text-center text-sm text-cyan-400 md:text-base">
        {{ credentials }}
      </p>

      <!-- Professional Summary (truncated for hero) -->
      <p class="mx-auto mb-8 max-w-2xl text-center text-lg leading-relaxed text-gray-300 md:text-xl">
        {{ professionalSummary }}
      </p>

      <!-- Contact Info -->
      <div class="mb-8 flex flex-wrap justify-center gap-4" role="navigation" aria-label="Contact information">
        <a
          :href="`mailto:${contact.email}`"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 transition-colors hover:bg-indigo-500/20 hover:text-indigo-400"
          aria-label="Send email"
        >
          <span class="text-xl">📧</span>
          <span class="hidden sm:inline">{{ contact.email }}</span>
        </a>
        <a
          :href="`tel:${contact.phone.replace(/[^\d+]/g, '')}`"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 transition-colors hover:bg-indigo-500/20 hover:text-indigo-400"
          aria-label="Call phone"
        >
          <span class="text-xl">📞</span>
          <span class="hidden sm:inline">{{ contact.phone }}</span>
        </a>
        <a
          :href="contact.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 transition-colors hover:bg-indigo-500/20 hover:text-indigo-400"
          aria-label="LinkedIn profile"
        >
          <span class="text-xl">💼</span>
          <span class="hidden sm:inline">LinkedIn</span>
        </a>
        <a
          :href="contact.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 transition-colors hover:bg-indigo-500/20 hover:text-indigo-400"
          aria-label="GitHub profile"
        >
          <span class="text-xl">🐙</span>
          <span class="hidden sm:inline">GitHub</span>
        </a>
      </div>

      <!-- CTAs -->
      <div class="flex flex-col justify-center gap-4 sm:flex-row" role="navigation" aria-label="Primary actions">
        <a
          href="#contact"
          class="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform duration-300 hover:scale-105"
          aria-label="Navigate to contact section"
        >
          Get in Touch
        </a>
        <a
          href="/assets/Michael-Lejano-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg border-2 border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-400 transition-all duration-300 hover:bg-indigo-500/20"
          aria-label="Download resume"
        >
          Download Resume
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
      <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  scroll-behavior: smooth;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animation-delay-1000 {
  animation-delay: 1s;
}
</style>
