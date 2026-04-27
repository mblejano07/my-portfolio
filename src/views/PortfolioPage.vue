<script setup lang="ts">
import HeroSection from '@/components/portfolio/HeroSection.vue'
import AboutSection from '@/components/portfolio/AboutSection.vue'
import ExperienceSection from '@/components/portfolio/ExperienceSection.vue'
import SkillsSection from '@/components/portfolio/SkillsSection.vue'
import EducationSection from '@/components/portfolio/EducationSection.vue'
import ContactSection from '@/components/portfolio/ContactSection.vue'
</script>

<template>
  <div class="portfolio-page min-h-screen bg-slate-900">
    <header>
      <HeroSection />
    </header>

    <main id="main-content" role="main">
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </main>

    <footer>
      <ContactSection />
    </footer>
  </div>
</template>
