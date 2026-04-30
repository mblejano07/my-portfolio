<script setup lang="ts">
import { ref } from 'vue'
import AlertSenate from '../senate/Alert-Senate.vue'
import InputSenate from '../senate/Input-Senate.vue'
import ButtonSenate from '../senate/Button-Senate.vue'

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
          <h2 class="mb-4 text-3xl font-bold text-[#1a1a1a] md:text-4xl">Get In Touch</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-[#0038A8] to-[#CE1126]"></div>
          <p class="mt-4 text-[#6c757d]">Available for opportunities and collaborations</p>
        </div>

        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Contact Info -->
          <div>
            <h3 class="mb-6 text-2xl font-bold text-[#1a1a1a]">Let's Connect</h3>
            <p class="mb-8 text-[#1a1a1a]">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about
              technology and innovation.
            </p>

            <!-- Contact Details -->
            <div class="mb-8 space-y-6">
              <a :href="`mailto:${contactInfo.email}`" class="group flex items-center gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-md bg-[#0038A8]/10 text-[#0038A8] transition-transform group-hover:scale-110"
                >
                  <i class="pi pi-envelope h-5 w-5"></i>
                </div>
                <div>
                  <div class="text-sm text-[#6c757d]">Email</div>
                  <div class="font-medium text-[#1a1a1a] transition-colors group-hover:text-[#0038A8]">
                    {{ contactInfo.email }}
                  </div>
                </div>
              </a>

              <a :href="`tel:${contactInfo.phone}`" class="group flex items-center gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-md bg-[#CE1126]/10 text-[#CE1126] transition-transform group-hover:scale-110"
                >
                  <i class="pi pi-phone h-5 w-5"></i>
                </div>
                <div>
                  <div class="text-sm text-[#6c757d]">Phone</div>
                  <div class="font-medium text-[#1a1a1a] transition-colors group-hover:text-[#CE1126]">
                    {{ contactInfo.phone }}
                  </div>
                </div>
              </a>

              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-md bg-[#FCD116]/10 text-[#B8860B]">
                  <i class="pi pi-map h-5 w-5"></i>
                </div>
                <div>
                  <div class="text-sm text-[#6c757d]">Location</div>
                  <div class="font-medium text-[#1a1a1a]">
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
                class="flex h-12 w-12 items-center justify-center rounded-md bg-[#0038A8]/10 text-[#0038A8] transition-transform hover:scale-110"
              >
                <i class="pi pi-linkedin h-6 w-6"></i>
              </a>
              <a
                :href="contactInfo.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-12 w-12 items-center justify-center rounded-md bg-[#CE1126]/10 text-[#CE1126] transition-transform hover:scale-110"
              >
                <i class="pi pi-github h-6 w-6"></i>
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="CardSenate rounded-2xl p-8 shadow-md">
            <h3 class="mb-6 text-xl font-bold text-[#1a1a1a]">Send a Message</h3>

            <!-- Success Message -->
            <AlertSenate v-if="formState === 'success'" variant="success" title="Success!">
              Message sent successfully! I'll get back to you soon.
            </AlertSenate>

            <!-- Error Message -->
            <AlertSenate v-if="formState === 'error'" variant="error" title="Error">
              Something went wrong. Please try again or email me directly.
            </AlertSenate>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Honeypot (hidden spam protection) -->
              <input v-model="formData.honeypot" type="text" class="hidden" tabindex="-1" autocomplete="off" />

              <!-- Name -->
              <InputSenate
                v-model="formData.name"
                label="Full Name"
                placeholder="Your name"
                required
                floating-label
                type="text"
              />

              <!-- Email -->
              <InputSenate
                v-model="formData.email"
                label="Email Address"
                placeholder="your.email@example.com"
                required
                floating-label
                type="email"
              />

              <!-- Message -->
              <div class="mt-4">
                <label for="message" class="mb-2 block text-sm font-medium text-[#1a1a1a]">Message</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="5"
                  class="w-full rounded-md border border-[#ced4da] px-3 py-2.5 text-[#1a1a1a] placeholder-gray-400 focus:border-[#0038A8] focus:ring-2 focus:ring-[#0038A8]/20"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <ButtonSenate type="submit" variant="primary" size="md" :disabled="formState === 'submitting'" class="w-full">
                <template #icon v-if="formState === 'submitting'">
                  <i class="pi pi-spin pi-loader h-5 w-5 animate-pulse"></i>
                </template>
                <template #icon v-else>
                  <i class="pi pi-send h-5 w-5"></i>
                </template>
                {{ formState === 'submitting' ? 'Sending...' : 'Send Message' }}
              </ButtonSenate>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Form styling handled by Senate Input component and Tailwind classes */
</style>
