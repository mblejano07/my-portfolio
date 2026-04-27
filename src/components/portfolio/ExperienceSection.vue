<script setup lang="ts">
import { ref } from 'vue'

const expandedPosition = ref<number | null>(0)

const experience = [
  {
    position: 'Information Technology Officer II',
    company: 'Department of Social Welfare and Development - Central Office',
    period: 'July 2023 - Present',
    duration: '2 years 4 months',
    description:
      'Leading software development initiatives and cybersecurity implementations for national-scale social welfare systems.',
    responsibilities: [
      'Lead the team in SCRUM as the SCRUM Master',
      'Act as Software Development Technical Lead',
      'Provide guidance to Junior Developers and Project Managers',
      'Design, develop, and maintain web applications using modern frameworks and technologies',
      'Collaborate with stakeholders to gather and analyze requirements',
      'Develop high-quality, scalable, and secure code adhering to best practices',
      'Implement and integrate APIs for seamless data exchange',
      'Troubleshoot and resolve application performance issues',
      'Collaborate with UI/UX designers for user-friendly applications',
      'Participate in code reviews and foster continuous improvement',
    ],
  },
  {
    position: 'Computer Programmer III',
    company: 'Department of Social Welfare and Development - Central Office',
    period: 'November 2015 - August 2023',
    duration: '7 years 9 months',
    description:
      'Designed and developed application software/database systems with comprehensive documentation and user training.',
    responsibilities: [
      'Design and develop application software/database systems',
      'Recommend appropriate development tools considering connectivity and resources',
      'Prepare user manuals and documentation',
      'Serve as resource person/facilitator for systems testing and user training',
      'Perform programming tasks to enhance existing systems',
      'Perform other technical tasks related to the position',
    ],
  },
  {
    position: 'Computer Maintenance Technologist',
    company: 'Department of Social Welfare and Development',
    period: 'November 2012 - November 2015',
    duration: '3 years',
    description: 'Provided intermediate to advanced professional and technical work to ensure technology accessibility.',
    responsibilities: [
      'Ensure and support technology accessibility for all DSWD users',
      'Maintain currency of knowledge with state-of-the-art technology',
      'Responsible for day-to-day service support',
      'Meet work schedule and attendance standards',
      'Perform related duties as required',
    ],
  },
]
</script>

<template>
  <section id="experience" class="experience-section relative py-16 lg:py-24" aria-labelledby="experience-heading">
    <!-- Circuit Divider -->
    <div class="circuit-divider"></div>

    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-5xl">
        <!-- Section Header -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">Work Experience</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#00d9ff]"></div>
          <p class="mt-4 text-[#94a3b8]">13+ years of progressive experience at DSWD</p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute left-0 h-full w-1 transform rounded-full bg-gradient-to-b from-[#00d9ff] to-[#6366F1] md:left-1/2 md:-translate-x-1/2"
          ></div>

          <!-- Experience Items -->
          <div v-for="(job, index) in experience" :key="index" class="relative mb-12 last:mb-0">
            <div :class="['flex flex-col gap-8 md:flex-row', index % 2 === 0 ? 'md:flex-row-reverse' : '']">
              <!-- Timeline Marker -->
              <div
                class="absolute left-0 z-20 mt-6 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-[#00d9ff] bg-[#0f172a] md:left-1/2"
                :class="{ 'glow-cyan': expandedPosition === index }"
              >
                <div
                  class="absolute -inset-1 rounded-full opacity-75"
                  :class="{ 'marker-glow': expandedPosition === index }"
                ></div>
              </div>

              <!-- Content -->
              <div :class="['md:w-1/2', index % 2 === 0 ? 'md:pr-12' : 'md:pl-12']">
                <div
                  class="cyber-card experience-card cursor-pointer"
                  @click="expandedPosition = expandedPosition === index ? null : index"
                >
                  <!-- Header -->
                  <div class="mb-4 flex items-start gap-4">
                    <div
                      class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366F1] to-[#00d9ff] text-white shadow-neon"
                    >
                      <i class="pi pi-briefcase h-6 w-6"></i>
                    </div>
                    <div class="flex-1">
                      <h3 class="mb-1 text-xl font-bold text-white">
                        {{ job.position }}
                      </h3>
                      <div class="mb-1 flex items-center gap-2 text-sm text-[#94a3b8]">
                        <i class="pi pi-building h-4 w-4"></i>
                        {{ job.company }}
                      </div>
                      <div class="flex items-center gap-2 text-xs text-[#64748b]">
                        <i class="pi pi-calendar h-4 w-4"></i>
                        {{ job.period }} • {{ job.duration }}
                      </div>
                    </div>
                  </div>

                  <!-- Description -->
                  <p class="mb-4 text-[#f1f5f9]">
                    {{ job.description }}
                  </p>

                  <!-- Expand Indicator -->
                  <div class="flex items-center gap-2 text-sm font-medium text-[#00d9ff]">
                    <span>{{ expandedPosition === index ? 'Show Less' : 'Show Responsibilities' }}</span>
                    <span :class="['transform transition-transform', expandedPosition === index ? 'rotate-180' : '']">▼</span>
                  </div>

                  <!-- Expanded Responsibilities -->
                  <transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="transform -translate-y-2 opacity-0"
                    enter-to-class="transform translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="transform translate-y-0 opacity-100"
                    leave-to-class="transform -translate-y-2 opacity-0"
                  >
                    <ul v-if="expandedPosition === index" class="mt-4 space-y-2">
                      <li
                        v-for="(responsibility, rIndex) in job.responsibilities"
                        :key="rIndex"
                        class="flex items-start gap-2 text-sm text-[#f1f5f9]"
                      >
                        <span class="mt-1 text-[#00d9ff]">•</span>
                        {{ responsibility }}
                      </li>
                    </ul>
                  </transition>
                </div>
              </div>

              <!-- Empty Space for Alternating Layout -->
              <div class="hidden md:block md:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-card:hover {
  border-color: #6366f1;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
}

.marker-glow {
  animation: markerPulse 2s ease-in-out infinite;
}

@keyframes markerPulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(0, 217, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 217, 255, 0);
  }
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
</style>
