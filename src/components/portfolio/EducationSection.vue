<script setup lang="ts">
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
  <section id="education" class="education-section relative py-16 lg:py-24" aria-labelledby="education-heading">
    <!-- Circuit Divider -->
    <div class="circuit-divider"></div>

    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <!-- Section Header -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">Education & Certifications</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#00d9ff]"></div>
          <p class="mt-4 text-[#94a3b8]">Continuous learning and professional development</p>
        </div>

        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Education -->
          <div>
            <div class="mb-6 flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366F1] to-[#4f46e5] text-white shadow-neon"
              >
                <i class="pi pi-graduation-cap h-5 w-5"></i>
              </div>
              <h3 class="text-2xl font-bold text-white">Education</h3>
            </div>

            <div class="space-y-6">
              <div v-for="(edu, index) in education" :key="index" class="cyber-card education-card">
                <h4 class="mb-2 text-lg font-bold text-white">
                  {{ edu.degree }}
                </h4>
                <div class="mb-2 flex items-center gap-2 text-sm text-[#00d9ff]">
                  <i class="pi pi-graduation-cap h-4 w-4"></i>
                  {{ edu.school }}
                </div>
                <div class="mb-3 text-xs text-[#64748b]">
                  {{ edu.period }}
                </div>
                <p class="text-sm text-[#f1f5f9]">
                  {{ edu.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Certifications Grid -->
          <div>
            <div class="mb-6 flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#00d9ff] to-[#0ea5e9] text-white shadow-neon"
              >
                <i class="pi pi-certificate h-5 w-5"></i>
              </div>
              <h3 class="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              <div
                v-for="(cert, index) in certifications"
                :key="index"
                class="cyber-card flex flex-col items-start gap-3 rounded-lg hover:border-[#00d9ff]"
              >
                <div class="flex w-full items-center justify-between">
                  <span class="text-2xl">{{ cert.icon }}</span>
                  <span class="text-xs font-semibold text-[#10b981]">{{ cert.credential }}</span>
                </div>
                <div class="min-w-0">
                  <h4 class="mb-1 truncate text-sm font-semibold text-white">
                    {{ cert.name }}
                  </h4>
                  <div class="flex items-center gap-2 text-xs text-[#64748b]">
                    <span>{{ cert.issuer }}</span>
                    <span>•</span>
                    <span>{{ cert.date }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Certification Summary -->
            <div class="cyber-card mt-6 text-center">
              <div class="mb-2 text-4xl">🏆</div>
              <div class="text-3xl font-bold text-[#00d9ff]">9+</div>
              <div class="text-sm text-[#94a3b8]">Professional Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-card:hover {
  border-color: #6366f1;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
}

.cert-card:hover {
  border-color: #00d9ff;
  box-shadow: 0 0 15px rgba(0, 217, 255, 0.3);
}
</style>
