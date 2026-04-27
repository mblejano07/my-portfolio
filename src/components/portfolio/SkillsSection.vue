<script setup lang="ts">
const skillsCategories = [
  {
    title: 'Programming & Development',
    icon: '💻',
    color: 'from-[#6366F1] to-[#7c3aed]',
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
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'from-[#00d9ff] to-[#3b82f6]',
    skills: [
      { name: 'AWS Cloud', level: 85 },
      { name: 'Cloud Security', level: 80 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
      { name: 'Linux/Unix', level: 80 },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: '🛡️',
    color: 'from-[#10b981] to-[#059669]',
    skills: [
      { name: '(ISC)² CC', level: 90 },
      { name: 'Network Security', level: 75 },
      { name: 'Threat Analysis', level: 70 },
      { name: 'Secure Coding', level: 85 },
      { name: 'Risk Assessment', level: 75 },
    ],
  },
  {
    title: 'Project Management',
    icon: '🎯',
    color: 'from-[#f59e0b] to-[#dc2626]',
    skills: [
      { name: 'SCRUM Master', level: 90 },
      { name: 'Agile Methodology', level: 85 },
      { name: 'Team Leadership', level: 85 },
      { name: 'Stakeholder Management', level: 80 },
      { name: 'Technical Documentation', level: 90 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: '🔧',
    color: 'from-[#ec4899] to-[#be123c]',
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
  <section id="skills" class="skills-section relative py-16 lg:py-24" aria-labelledby="skills-heading">
    <!-- Circuit Divider -->
    <div class="circuit-divider"></div>

    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <!-- Section Header -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">Technical Skills</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#00d9ff]"></div>
          <p class="mt-4 text-[#94a3b8]">Comprehensive expertise across development, cloud, and security domains</p>
        </div>

        <!-- Skills Categories -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(category, index) in skillsCategories" :key="index" class="cyber-card skill-category">
            <!-- Category Header -->
            <div class="mb-6 flex items-center gap-4">
              <div
                :class="`h-12 w-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-neon`"
              >
                <span class="text-2xl">{{ category.icon }}</span>
              </div>
              <h3 class="text-xl font-bold text-white">
                {{ category.title }}
              </h3>
            </div>

            <!-- Skills List -->
            <div class="space-y-4">
              <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-sm font-medium text-[#f1f5f9]">
                    {{ skill.name }}
                  </span>
                  <span class="text-xs text-[#64748b]"> {{ skill.level }}% </span>
                </div>
                <div class="h-2 w-full overflow-hidden rounded-full bg-[#1e293b]">
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
        <div class="cyber-card mt-12 rounded-2xl">
          <h3 class="mb-6 text-center text-2xl font-bold text-white">Core Competencies</h3>
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div class="cyber-card flex flex-col items-center justify-center py-4">
              <div class="mb-2 text-3xl">📊</div>
              <div class="text-sm font-semibold text-[#f1f5f9]">Business Process Analysis</div>
            </div>
            <div class="cyber-card flex flex-col items-center justify-center py-4">
              <div class="mb-2 text-3xl">🔍</div>
              <div class="text-sm font-semibold text-[#f1f5f9]">Data Analysis</div>
            </div>
            <div class="cyber-card flex flex-col items-center justify-center py-4">
              <div class="mb-2 text-3xl">⚙️</div>
              <div class="text-sm font-semibold text-[#f1f5f9]">System Analysis</div>
            </div>
            <div class="cyber-card flex flex-col items-center justify-center py-4">
              <div class="mb-2 text-3xl">📚</div>
              <div class="text-sm font-semibold text-[#f1f5f9]">Technical Training</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-category:hover {
  border-color: #6366f1;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
}

.skill-category:hover .skill-tag {
  border-color: #6366f1;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
}
</style>
