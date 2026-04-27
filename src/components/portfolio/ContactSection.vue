<script setup lang="ts">
import { ref } from 'vue'

const contactInfo = {
  email: 'mblejano07@gmail.com',
  phone: '(+63) 927 940 8413',
  location: 'Metro Manila, Philippines',
  linkedin: 'https://www.linkedin.com/in/michael-lejano',
  github: 'https://github.com/mblejano07',
}

const formState = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const formData = ref({
  name: '',
  email: '',
  message: '',
  honeypot: '', // Spam protection
})

const submitForm = async () => {
  // Check honeypot (spam protection)
  if (formData.value.honeypot) {
    console.warn('Spam detected via honeypot')
    return
  }

  formState.value = 'submitting'

  try {
    const formspeeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-form-id'

    const response = await fetch(formspeeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message,
      }),
    })

    if (response.ok) {
      formState.value = 'success'
      formData.value = { name: '', email: '', message: '', honeypot: '' }
      setTimeout(() => {
        formState.value = 'idle'
      }, 5000)
    } else {
      formState.value = 'error'
      setTimeout(() => {
        formState.value = 'idle'
      }, 5000)
    }
  } catch (error) {
    console.error('Form submission error:', error)
    formState.value = 'error'
    setTimeout(() => {
      formState.value = 'idle'
    }, 5000)
  }
}
</script>

<template>
  <section id="contact" class="contact-section relative py-16 lg:py-24" aria-labelledby="contact-heading">
    <!-- Circuit Divider -->
    <div class="circuit-divider"></div>

    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <!-- Section Header -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">Get In Touch</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-[#6366F1] to-[#00d9ff]"></div>
          <p class="mt-4 text-[#94a3b8]">Available for opportunities and collaborations</p>
        </div>

        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Contact Info -->
          <div>
            <h3 class="mb-6 text-2xl font-bold text-white">Let's Connect</h3>
            <p class="mb-8 text-[#f1f5f9]">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about
              technology and innovation.
            </p>

            <!-- Contact Details -->
            <div class="mb-8 space-y-6">
              <a :href="`mailto:${contactInfo.email}`" class="group flex items-center gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366F1] to-[#4f46e5] text-white shadow-neon transition-transform group-hover:scale-110"
                >
                  <i class="pi pi-envelope h-5 w-5"></i>
                </div>
                <div>
                  <div class="text-sm text-[#64748b]">Email</div>
                  <div class="font-medium text-white transition-colors group-hover:text-[#00d9ff]">
                    {{ contactInfo.email }}
                  </div>
                </div>
              </a>

              <a :href="`tel:${contactInfo.phone}`" class="group flex items-center gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#00d9ff] to-[#0ea5e9] text-white shadow-neon transition-transform group-hover:scale-110"
                >
                  <i class="pi pi-phone h-5 w-5"></i>
                </div>
                <div>
                  <div class="text-sm text-[#64748b]">Phone</div>
                  <div class="font-medium text-white transition-colors group-hover:text-[#00d9ff]">
                    {{ contactInfo.phone }}
                  </div>
                </div>
              </a>

              <div class="flex items-center gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#6b21a8] text-white shadow-neon"
                >
                  <i class="pi pi-map h-5 w-5"></i>
                </div>
                <div>
                  <div class="text-sm text-[#64748b]">Location</div>
                  <div class="font-medium text-white">
                    {{ contactInfo.location }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="flex gap-4">
              <a
                :href="contactInfo.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#00a8ff] to-[#0077b5] text-white shadow-neon transition-transform hover:scale-110"
              >
                <i class="pi pi-linkedin h-6 w-6"></i>
              </a>
              <a
                :href="contactInfo.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#333] to-[#24292e] text-white shadow-neon transition-transform hover:scale-110"
              >
                <i class="pi pi-github h-6 w-6"></i>
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="cyber-card rounded-2xl p-8 shadow-xl">
            <h3 class="mb-6 text-xl font-bold text-white">Send a Message</h3>

            <!-- Success Message -->
            <div
              v-if="formState === 'success'"
              class="mb-6 flex items-center gap-3 rounded-lg border border-[#10b981] bg-[rgba(16,185,129,0.1)] p-4"
            >
              <i class="pi pi-check-circle h-5 w-5 text-[#10b981]"></i>
              <span class="text-[#10b981]">Message sent successfully! I'll get back to you soon.</span>
            </div>

            <!-- Error Message -->
            <div
              v-if="formState === 'error'"
              class="mb-6 flex items-center gap-3 rounded-lg border border-[#dc2626] bg-[rgba(220,38,38,0.1)] p-4"
            >
              <i class="pi pi-exclamation-triangle h-5 w-5 text-[#dc2626]"></i>
              <span class="text-[#dc2626]">Something went wrong. Please try again or email me directly.</span>
            </div>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Honeypot (hidden spam protection) -->
              <input v-model="formData.honeypot" type="text" class="hidden" tabindex="-1" autocomplete="off" />

              <!-- Name -->
              <div>
                <label for="name" class="mb-2 block text-sm font-medium text-[#f1f5f9]"> Name * </label>
                <input id="name" v-model="formData.name" type="text" required class="cyber-input" placeholder="Your name" />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="mb-2 block text-sm font-medium text-[#f1f5f9]"> Email * </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="cyber-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="mb-2 block text-sm font-medium text-[#f1f5f9]"> Message * </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="5"
                  class="cyber-input"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="formState === 'submitting'"
                class="cyber-btn-primary"
                :class="{ 'cursor-not-allowed opacity-70': formState === 'submitting' }"
              >
                <i v-if="formState === 'submitting'" class="pi pi-spin pi-loader h-5 w-5 animate-pulse"></i>
                <i v-else class="pi pi-send h-5 w-5"></i>
                {{ formState === 'submitting' ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Form styling handled by Tailwind classes */
</style>
