<script setup lang="ts">
const about = {
  summary:
    'Experienced Software Developer with 13+ years of expertise at the Department of Social Welfare and Development. Specialized in business process analysis, data analysis, system analysis, PHP development using CodeIgniter Framework, MySQL database management, and web development using SCRUM methodology. Civil Service Professional eligible.',

  highlights: [
    {
      icon: '🎯',
      title: 'Technical Leadership',
      description:
        'Lead SCRUM Master and Technical Lead for enterprise-scale web applications serving national social welfare programs.',
    },
    {
      icon: '🔒',
      title: 'Cybersecurity Certified',
      description:
        '(ISC)² Certified in Cybersecurity with expertise in cloud security, threat analysis, and secure software development.',
    },
    {
      icon: '☁️',
      title: 'Cloud Expertise',
      description:
        'AWS Partner Technical Accredited with hands-on experience in cloud architecture, deployment, and optimization.',
    },
    {
      icon: '🎓',
      title: 'Continuous Learning',
      description: 'Currently pursuing MS in Information Technology at De La Salle University (2025-Present).',
    },
  ],
}
</script>

<template>
  <section id="about" class="bg-white py-16 dark:bg-slate-900 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <!-- Section Header -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">About Me</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
        </div>

        <!-- Professional Summary -->
        <div class="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {{ about.summary }}
            </p>
            <div class="flex flex-wrap gap-3">
              <span
                class="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
              >
                13+ Years Experience
              </span>
              <span
                class="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300"
              >
                Civil Service Eligible
              </span>
              <span
                class="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
              >
                SCRUM Master
              </span>
            </div>
          </div>

          <!-- Visual Element -->
          <div class="relative">
            <div
              class="aspect-square rotate-3 transform rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 p-8 shadow-2xl transition-transform duration-300 hover:rotate-0"
            >
              <div class="flex h-full w-full items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <div class="text-center text-white">
                  <div class="mb-4 text-6xl">🚀</div>
                  <div class="mb-2 text-2xl font-bold">13+ Years</div>
                  <div class="text-lg opacity-90">of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Highlights -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(highlight, index) in about.highlights"
            :key="index"
            class="group cursor-pointer rounded-xl bg-slate-50 p-6 transition-all duration-300 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-cyan-600 dark:bg-slate-800"
          >
            <div class="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
              {{ highlight.icon }}
            </div>
            <h3 class="mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-white dark:text-white">
              {{ highlight.title }}
            </h3>
            <p class="text-sm text-slate-600 transition-colors group-hover:text-white/90 dark:text-slate-400">
              {{ highlight.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hover effects handled by Tailwind classes */
</style>
