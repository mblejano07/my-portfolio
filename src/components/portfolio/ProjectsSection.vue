<script setup lang="ts">
interface Project {
  title: string
  description: string
  thumbnail: string
  techStack: string[]
  github: string
  live: string
}

const projects: Project[] = [
  {
    title: 'Laravel CRM System',
    description: 'Enterprise resource management platform with advanced reporting and automation',
    thumbnail: '💼',
    techStack: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Vue Analytics Dashboard',
    description: 'Real-time data visualization with interactive charts and customizable widgets',
    thumbnail: '📊',
    techStack: ['Vue 3', 'TypeScript', 'Node.js', 'Chart.js'],
    github: '#',
    live: '#',
  },
  {
    title: 'Security Audit Tool',
    description: 'Automated vulnerability scanning and compliance reporting for web applications',
    thumbnail: '🔒',
    techStack: ['Python', 'OWASP', 'FastAPI', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with payment integration and inventory management',
    thumbnail: '🛒',
    techStack: ['Laravel', 'Vue.js', 'Stripe', 'Redis'],
    github: '#',
    live: '#',
  },
  {
    title: 'Mobile App Backend',
    description: 'RESTful API service with authentication, real-time sync, and push notifications',
    thumbnail: '📱',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    github: '#',
    live: '#',
  },
  {
    title: 'Cloud Migration Tool',
    description: 'Automated infrastructure migration with validation and rollback capabilities',
    thumbnail: '☁️',
    techStack: ['Python', 'AWS', 'Terraform', 'Docker'],
    github: '#',
    live: '#',
  },
]
</script>

<script lang="ts">
export default {
  name: 'ProjectsSection',
}
</script>

<template>
  <section id="projects" class="projects-section relative py-16 lg:py-24" aria-labelledby="projects-heading">
    <!-- Circuit Divider -->
    <div class="circuit-divider"></div>

    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <!-- Section Header -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl"><span class="text-[#00d9ff]">//</span> PROJECTS</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#00d9ff]"></div>
          <p class="mt-4 text-[#94a3b8]">Featured projects showcasing technical expertise</p>
        </div>

        <!-- Projects Grid -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="cyber-card cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#00d9ff] hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]"
          >
            <!-- Thumbnail -->
            <div
              :class="[
                'project-thumbnail relative flex h-48 w-full items-center justify-center overflow-hidden text-6xl',
                getThumbnailClass(index),
              ]"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="mb-3 text-2xl font-bold text-white">
                {{ project.title }}
              </h3>
              <p class="mb-4 text-[#94a3b8]">
                {{ project.description }}
              </p>

              <!-- Tech Stack Tags -->
              <div class="mb-6 flex flex-wrap gap-2">
                <span
                  v-for="(tech, techIndex) in project.techStack"
                  :key="techIndex"
                  class="tech-tag inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 hover:border-[#00d9ff]/60 hover:bg-[#00d9ff]/20 hover:shadow-[0_0_10px_rgba(0,217,255,0.3)]"
                  :style="{ borderColor: 'rgba(0, 217, 255, 0.3)' }"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Project Links -->
              <div class="flex gap-3">
                <a
                  :href="project.github"
                  class="inline-flex items-center gap-2 rounded-md bg-[#6366F1]/10 px-4 py-2 text-sm font-semibold text-[#a5b4fc] transition-all duration-200 hover:border-[#6366F1]/60 hover:bg-[#6366F1]/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                >
                  GitHub
                </a>
                <a
                  :href="project.live"
                  class="inline-flex items-center gap-2 rounded-md bg-[#6366F1]/10 px-4 py-2 text-sm font-semibold text-[#a5b4fc] transition-all duration-200 hover:border-[#6366F1]/60 hover:bg-[#6366F1]/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                >
                  Live Demo
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-thumbnail {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
}

.project-thumbnail:nth-child(2n) {
  background: linear-gradient(135deg, #00d9ff 0%, #06b6d4 100%);
}

.project-thumbnail:nth-child(3n) {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
}

.project-thumbnail:nth-child(4n) {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.project-thumbnail:nth-child(5n) {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
}

.project-thumbnail:nth-child(6n) {
  background: linear-gradient(135deg, #6366f1 0%, #00d9ff 100%);
}

.technologies-section {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 4rem 2rem;
}

.technology-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
