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
  <section id="about" class="about-section relative py-16 lg:py-24" aria-labelledby="about-heading">
    <!-- Circuit Divider -->
    <div class="circuit-divider"></div>

    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <!-- Section Header -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">About Me</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#00d9ff]"></div>
          <p class="mt-4 text-[#94a3b8]">Professional Summary</p>
        </div>

        <!-- Professional Summary -->
        <div class="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p class="mb-6 text-lg leading-relaxed text-[#f1f5f9]">
              {{ about.summary }}
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="skill-tag"> 13+ Years Experience </span>
              <span class="skill-tag"> Civil Service Eligible </span>
              <span class="skill-tag"> SCRUM Master </span>
            </div>
          </div>

          <!-- Stats Cards (About Stats) -->
          <div class="grid grid-cols-2 gap-4">
            <div class="cyber-card stat-card">
              <div class="mb-2 text-3xl text-[#10b981]">🚀</div>
              <div class="mb-1 text-2xl font-bold text-white">13+</div>
              <div class="text-sm text-[#94a3b8]">Years Experience</div>
            </div>
            <div class="cyber-card stat-card">
              <div class="mb-2 text-3xl text-[#00d9ff]">💼</div>
              <div class="mb-1 text-2xl font-bold text-white">3</div>
              <div class="text-sm text-[#94a3b8]">Positions at DSWD</div>
            </div>
            <div class="cyber-card stat-card">
              <div class="mb-2 text-3xl text-[#7c3aed]">🛡️</div>
              <div class="mb-1 text-2xl font-bold text-white">9</div>
              <div class="text-sm text-[#94a3b8]">Certifications</div>
            </div>
            <div class="cyber-card stat-card">
              <div class="mb-2 text-3xl text-[#818cf8]">🎓</div>
              <div class="mb-1 text-2xl font-bold text-white">MS IT</div>
              <div class="text-sm text-[#94a3b8]">In Progress</div>
            </div>
          </div>
        </div>

        <!-- Key Highlights -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="(highlight, index) in about.highlights" :key="index" class="cyber-card highlight-card">
            <div class="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
              {{ highlight.icon }}
            </div>
            <h3 class="mb-2 text-lg font-semibold text-white">
              {{ highlight.title }}
            </h3>
            <p class="text-sm text-[#94a3b8]">
              {{ highlight.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlight-card:hover {
  border-color: #6366f1;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
  transform: translateY(-2px);
}

/* Fade In Animation */
.fade-in-section {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-card:hover {
  border-color: #10b981;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
}
</style>
