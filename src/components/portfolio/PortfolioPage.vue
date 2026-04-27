<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from './HeroSection.vue'
import AboutSection from './AboutSection.vue'
import ExperienceSection from './ExperienceSection.vue'
import SkillsSection from './SkillsSection.vue'
import EducationSection from './EducationSection.vue'
import ContactSection from './ContactSection.vue'
import ProjectsSection from './ProjectsSection.vue'

const activeSection = ref('hero')
const isMenuOpen = ref(false)

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false
  }
}

const handleScroll = () => {
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section.id)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900">
    <!-- Navigation -->
    <nav class="fixed left-0 right-0 top-0 z-50 bg-white/90 shadow-md backdrop-blur-md dark:bg-slate-900/90">
      <div class="container mx-auto px-4">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->
          <div class="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-xl font-bold text-transparent">MBL</div>

          <!-- Desktop Navigation -->
          <div class="hidden items-center gap-1 md:flex">
            <a
              v-for="section in sections"
              :key="section.id"
              @click.prevent="scrollToSection(section.id)"
              :class="[
                'cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all',
                activeSection === section.id
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white',
              ]"
            >
              {{ section.label }}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 md:hidden"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform -translate-y-2 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-2 opacity-0"
        >
          <div v-if="isMenuOpen" class="border-t border-slate-200 py-4 dark:border-slate-800 md:hidden">
            <a
              v-for="section in sections"
              :key="section.id"
              @click.prevent="scrollToSection(section.id)"
              :class="[
                'block cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all',
                activeSection === section.id
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white',
              ]"
            >
              {{ section.label }}
            </a>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 py-8 text-white dark:bg-slate-950">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <div class="mb-2 text-lg font-semibold">Michael Barroga Lejano</div>
          <div class="mb-4 text-sm text-slate-400">Senior Software Engineer / Developer</div>
          <div class="text-xs text-slate-500">© {{ new Date().getFullYear() }} All rights reserved.</div>
        </div>
      </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button
      v-show="activeSection !== 'hero'"
      @click="scrollToSection('hero')"
      class="fixed bottom-8 right-8 z-40 flex h-12 w-12 transform items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-600 text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
      aria-label="Scroll to top"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
