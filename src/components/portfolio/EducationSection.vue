<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGraduationCap, faCertificate } from '@fortawesome/free-solid-svg-icons'

const education = [
  {
    degree: 'Master of Science in Information Technology',
    school: 'De La Salle University',
    period: '2025 - Present (In Progress)',
    description: 'Advanced studies in IT with focus on enterprise architecture and cybersecurity.',
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'De La Salle University',
    period: '2007 - 2012',
    description: 'Foundation in computer systems, software development, and engineering principles.',
  },
]

const certifications = [
  {
    name: 'Certified in Cybersecurity (CC)',
    issuer: '(ISC)²',
    date: 'October 2025',
    credential: 'Active',
    icon: '🔒',
  },
  {
    name: 'AWS Partner: Accredited Technical',
    issuer: 'Amazon Web Services',
    date: '2024',
    credential: 'Active',
    icon: '☁️',
  },
  {
    name: 'SCRUM Foundation Professional Certificate',
    issuer: 'SCRUMstudy',
    date: '2024',
    credential: 'Active',
    icon: '🎯',
  },
  {
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    date: '2024',
    credential: 'Active',
    icon: '📋',
  },
  {
    name: 'ITIL Foundation Certificate',
    issuer: 'AXELOS',
    date: '2023',
    credential: 'Active',
    icon: '📚',
  },
  {
    name: 'Oracle Cloud Infrastructure Foundations',
    issuer: 'Oracle',
    date: '2023',
    credential: 'Active',
    icon: '🏗️',
  },
  {
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    date: '2019',
    credential: 'Active',
    icon: '🌐',
  },
  {
    name: 'CompTIA Network+',
    issuer: 'CompTIA',
    date: '2018',
    credential: 'Active',
    icon: '🔗',
  },
  {
    name: 'Microsoft Technology Associate (MTA)',
    issuer: 'Microsoft',
    date: '2017',
    credential: 'Active',
    icon: '💻',
  },
]
</script>

<template>
  <section id="education" class="bg-slate-50 py-16 dark:bg-slate-800 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <!-- Section Header -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Education & Certifications</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
          <p class="mt-4 text-slate-600 dark:text-slate-400">Continuous learning and professional development</p>
        </div>

        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Education -->
          <div>
            <div class="mb-6 flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 text-white"
              >
                <FontAwesomeIcon :icon="faGraduationCap" class="h-5 w-5" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>

            <div class="space-y-6">
              <div
                v-for="(edu, index) in education"
                :key="index"
                class="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-slate-900"
              >
                <h4 class="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  {{ edu.degree }}
                </h4>
                <div class="mb-2 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                  <FontAwesomeIcon :icon="faGraduationCap" class="h-4 w-4" />
                  {{ edu.school }}
                </div>
                <div class="mb-3 text-xs text-slate-500 dark:text-slate-500">
                  {{ edu.period }}
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  {{ edu.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div>
            <div class="mb-6 flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700 text-white"
              >
                <FontAwesomeIcon :icon="faCertificate" class="h-5 w-5" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h3>
            </div>

            <div class="space-y-3">
              <div
                v-for="(cert, index) in certifications"
                :key="index"
                class="flex items-start gap-4 rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg dark:bg-slate-900"
              >
                <div class="flex-shrink-0 text-3xl">
                  {{ cert.icon }}
                </div>
                <div class="min-w-0 flex-1">
                  <h4 class="mb-1 truncate text-sm font-semibold text-slate-900 dark:text-white">
                    {{ cert.name }}
                  </h4>
                  <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>{{ cert.issuer }}</span>
                    <span>•</span>
                    <span>{{ cert.date }}</span>
                  </div>
                  <div class="mt-1">
                    <span
                      class="inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    >
                      {{ cert.credential }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Certification Summary -->
            <div class="mt-6 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 p-6 text-center text-white">
              <div class="mb-2 text-4xl">🏆</div>
              <div class="text-3xl font-bold">9+</div>
              <div class="text-sm opacity-90">Professional Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hover effects handled by Tailwind classes */
</style>
