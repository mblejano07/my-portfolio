<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCode, faCloud, faShieldHalved, faUsers, faGear } from '@fortawesome/free-solid-svg-icons'

const skillsCategories = [
  {
    icon: faCode,
    title: 'Programming & Development',
    color: 'from-indigo-500 to-purple-600',
    skills: [
      { name: 'PHP', level: 95 },
      { name: 'Vue.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'Laravel', level: 85 },
      { name: 'CodeIgniter', level: 90 },
    ],
  },
  {
    icon: faCloud,
    title: 'Cloud & DevOps',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'AWS Cloud', level: 85 },
      { name: 'Cloud Security', level: 80 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
      { name: 'Linux/Unix', level: 80 },
    ],
  },
  {
    icon: faShieldHalved,
    title: 'Cybersecurity',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: '(ISC)² CC', level: 90 },
      { name: 'Network Security', level: 75 },
      { name: 'Threat Analysis', level: 70 },
      { name: 'Secure Coding', level: 85 },
      { name: 'Risk Assessment', level: 75 },
    ],
  },
  {
    icon: faUsers,
    title: 'Project Management',
    color: 'from-orange-500 to-red-600',
    skills: [
      { name: 'SCRUM Master', level: 90 },
      { name: 'Agile Methodology', level: 85 },
      { name: 'Team Leadership', level: 85 },
      { name: 'Stakeholder Management', level: 80 },
      { name: 'Technical Documentation', level: 90 },
    ],
  },
  {
    icon: faGear,
    title: 'Tools & Technologies',
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'REST APIs', level: 85 },
      { name: 'TailwindCSS', level: 80 },
      { name: 'PrimeVue', level: 75 },
    ],
  },
]
</script>

<template>
  <section id="skills" class="bg-white py-16 dark:bg-slate-900 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <!-- Section Header -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Technical Skills</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
          <p class="mt-4 text-slate-600 dark:text-slate-400">
            Comprehensive expertise across development, cloud, and security domains
          </p>
        </div>

        <!-- Skills Categories -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(category, index) in skillsCategories"
            :key="index"
            class="rounded-xl bg-slate-50 p-6 transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800"
          >
            <!-- Category Header -->
            <div class="mb-6 flex items-center gap-4">
              <div
                :class="`h-12 w-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white`"
              >
                <FontAwesomeIcon :icon="category.icon" class="h-6 w-6" />
              </div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                {{ category.title }}
              </h3>
            </div>

            <!-- Skills List -->
            <div class="space-y-4">
              <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {{ skill.name }}
                  </span>
                  <span class="text-xs text-slate-500 dark:text-slate-400"> {{ skill.level }}% </span>
                </div>
                <div class="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    :class="`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Competencies -->
        <div class="mt-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 p-8 text-white">
          <h3 class="mb-6 text-center text-2xl font-bold">Core Competencies</h3>
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div class="text-center">
              <div class="mb-2 text-3xl">📊</div>
              <div class="font-semibold">Business Process Analysis</div>
            </div>
            <div class="text-center">
              <div class="mb-2 text-3xl">🔍</div>
              <div class="font-semibold">Data Analysis</div>
            </div>
            <div class="text-center">
              <div class="mb-2 text-3xl">⚙️</div>
              <div class="font-semibold">System Analysis</div>
            </div>
            <div class="text-center">
              <div class="mb-2 text-3xl">📚</div>
              <div class="font-semibold">Technical Training</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Progress bar animations handled by CSS transitions */
</style>
