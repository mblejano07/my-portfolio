<script setup lang="ts">
import CardSenate from '../senate/Card-Senate.vue'
import BadgeSenate from '../senate/Badge-Senate.vue'

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

const stats = [
  { icon: '🚀', value: '13+', label: 'Years Experience', color: 'green' },
  { icon: '💼', value: '3', label: 'Positions at DSWD', color: 'blue' },
  { icon: '🛡️', value: '9', label: 'Certifications', color: 'red' },
  { icon: '🎓', value: 'MS IT', label: 'In Progress', color: 'gold' },
]
</script>

<template>
  <section id="about" class="about-section relative py-16 lg:py-24" aria-labelledby="about-heading">
    <!-- Circuit Divider -->
    <div class="circuit-divider"></div>

    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <!-- Section Header -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-[#1a1a1a] md:text-4xl">About Me</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-[#0038A8] to-[#CE1126]"></div>
          <p class="mt-4 text-[#6c757d]">Professional Summary</p>
        </div>

        <!-- Professional Summary -->
        <div class="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p class="mb-6 text-lg leading-relaxed text-[#1a1a1a]">
              {{ about.summary }}
            </p>
            <div class="flex flex-wrap gap-3">
              <BadgeSenate variant="outline" color="blue">13+ Years Experience</BadgeSenate>
              <BadgeSenate variant="outline" color="blue">Civil Service Eligible</BadgeSenate>
              <BadgeSenate variant="outline" color="blue">SCRUM Master</BadgeSenate>
            </div>
          </div>

          <!-- Stats Cards (About Stats) -->
          <div class="grid grid-cols-2 gap-6">
            <CardSenate v-for="(stat, index) in stats" :key="index" variant="stat" :elevated="true" class="mb-2">
              <div class="mb-2 text-3xl">{{ stat.icon }}</div>
              <div class="mb-1 text-2xl font-bold text-[#0038A8]">{{ stat.value }}</div>
              <div class="text-sm text-[#6c757d]">{{ stat.label }}</div>
            </CardSenate>
          </div>
        </div>

        <!-- Key Highlights -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CardSenate
            v-for="(highlight, index) in about.highlights"
            :key="index"
            variant="interactive"
            :hoverable="true"
            class="h-full"
          >
            <div class="mb-4 text-4xl transition-transform duration-300">{{ highlight.icon }}</div>
            <h3 class="mb-2 text-lg font-semibold text-[#1a1a1a]">
              {{ highlight.title }}
            </h3>
            <p class="text-sm text-[#6c757d]">
              {{ highlight.description }}
            </p>
          </CardSenate>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

/* Card hover effect (subtle, professional) */
</style>
