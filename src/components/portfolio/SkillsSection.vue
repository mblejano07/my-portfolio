<script setup lang="ts">
interface Category {
  title: string
  icon: string
  color: string
  skills: string[]
}

const skillsCategories: Category[] = [
  {
    title: 'Programming & Frameworks',
    icon: '🛡️',
    color: 'from-[#6366F1] to-[#00d9ff]',
    skills: ['PHP', 'Vue.js', 'Laravel', 'Python', 'Node.js', 'TypeScript', 'Express', 'FastAPI'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'from-[#22c55e] to-[#16a34a]',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    color: 'from-[#f59e0b] to-[#d97706]',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'GitHub Actions', 'Terraform'],
  },
  {
    title: 'Security',
    icon: '🔒',
    color: 'from-[#ec4899] to-[#db2777]',
    skills: ['Penetration Testing', 'Risk Assessment', 'ISO 27001', 'OWASP', 'Vulnerability Scanning', '(ISC)² CC'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    color: 'from-[#8b5cf6] to-[#6366f1]',
    skills: ['Linux', 'Jira', 'Confluence', 'Postman', 'Figma', 'VS Code', 'Tableau'],
  },
  {
    title: 'Methodologies',
    icon: '📋',
    color: 'from-[#06b6d4] to-[#0891b2]',
    skills: ['Agile', 'SCRUM', 'ITIL', 'DevSecOps', 'Waterfall', 'Lean'],
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
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl"><span class="text-[#00d9ff]">//</span> TECHNICAL SKILLS</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#00d9ff]"></div>
          <p class="mt-4 text-[#94a3b8]">Comprehensive expertise across development, cloud, and security domains</p>
        </div>

        <!-- Skills Categories Grid -->
        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="(category, index) in skillsCategories"
            :key="index"
            class="cyber-card skill-category cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-[#00d9ff] hover:shadow-[0_0_20px_rgba(0,217,255,0.25)]"
          >
            <!-- Category Header -->
            <div class="mb-6 flex items-center gap-4">
              <div
                :class="`h-12 w-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl shadow-[0_4px_15px_rgba(0,217,255,0.3)]`"
              >
                {{ category.icon }}
              </div>
              <h3 class="text-xl font-bold text-white">
                {{ category.title }}
              </h3>
            </div>

            <!-- Skills Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(skill, skillIndex) in category.skills"
                :key="skillIndex"
                class="skill-tag inline-block rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-1 hover:border-[#00d9ff]/60 hover:bg-[#00d9ff]/15 hover:shadow-[0_0_15px_rgba(0,217,255,0.3)]"
                :style="{ borderColor: 'rgba(0, 217, 255, 0.3)', color: '#00d9ff' }"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-category:hover {
  border-color: #00d9ff;
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.25);
}
</style>
