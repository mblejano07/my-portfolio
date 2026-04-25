<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
  faCheck,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

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
  <section id="contact" class="bg-white py-16 dark:bg-slate-900 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <!-- Section Header -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Get In Touch</h2>
          <div class="mx-auto h-1 w-20 bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
          <p class="mt-4 text-slate-600 dark:text-slate-400">Available for opportunities and collaborations</p>
        </div>

        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Contact Info -->
          <div>
            <h3 class="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Let's Connect</h3>
            <p class="mb-8 text-slate-600 dark:text-slate-400">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about
              technology and innovation.
            </p>

            <!-- Contact Details -->
            <div class="mb-8 space-y-6">
              <a :href="`mailto:${contactInfo.email}`" class="group flex items-center gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 text-white transition-transform group-hover:scale-110"
                >
                  <FontAwesomeIcon :icon="faEnvelope" class="h-5 w-5" />
                </div>
                <div>
                  <div class="text-sm text-slate-500 dark:text-slate-400">Email</div>
                  <div
                    class="font-medium text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400"
                  >
                    {{ contactInfo.email }}
                  </div>
                </div>
              </a>

              <a :href="`tel:${contactInfo.phone}`" class="group flex items-center gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700 text-white transition-transform group-hover:scale-110"
                >
                  <FontAwesomeIcon :icon="faPhone" class="h-5 w-5" />
                </div>
                <div>
                  <div class="text-sm text-slate-500 dark:text-slate-400">Phone</div>
                  <div
                    class="font-medium text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400"
                  >
                    {{ contactInfo.phone }}
                  </div>
                </div>
              </a>

              <div class="flex items-center gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white"
                >
                  <FontAwesomeIcon :icon="faLocationDot" class="h-5 w-5" />
                </div>
                <div>
                  <div class="text-sm text-slate-500 dark:text-slate-400">Location</div>
                  <div class="font-medium text-slate-900 dark:text-white">
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
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg transition-transform hover:scale-110"
              >
                <FontAwesomeIcon :icon="faLinkedin" class="h-6 w-6" />
              </a>
              <a
                :href="contactInfo.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 text-white shadow-lg transition-transform hover:scale-110"
              >
                <FontAwesomeIcon :icon="faGithub" class="h-6 w-6" />
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="rounded-2xl bg-slate-50 p-8 shadow-xl dark:bg-slate-800">
            <h3 class="mb-6 text-xl font-bold text-slate-900 dark:text-white">Send a Message</h3>

            <!-- Success Message -->
            <div
              v-if="formState === 'success'"
              class="mb-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-100 p-4 dark:border-green-800 dark:bg-green-900/30"
            >
              <FontAwesomeIcon :icon="faCheck" class="h-5 w-5 text-green-600 dark:text-green-400" />
              <span class="text-green-700 dark:text-green-300">Message sent successfully! I'll get back to you soon.</span>
            </div>

            <!-- Error Message -->
            <div
              v-if="formState === 'error'"
              class="mb-6 flex items-center gap-3 rounded-lg border border-red-200 bg-red-100 p-4 dark:border-red-800 dark:bg-red-900/30"
            >
              <FontAwesomeIcon :icon="faExclamationTriangle" class="h-5 w-5 text-red-600 dark:text-red-400" />
              <span class="text-red-700 dark:text-red-300">Something went wrong. Please try again or email me directly.</span>
            </div>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Honeypot (hidden spam protection) -->
              <input v-model="formData.honeypot" type="text" class="hidden" tabindex="-1" autocomplete="off" />

              <!-- Name -->
              <div>
                <label for="name" class="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"> Name * </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"> Email * </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"> Message * </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="5"
                  class="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="formState === 'submitting'"
                class="flex w-full transform items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-cyan-700 hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FontAwesomeIcon v-if="formState === 'submitting'" :icon="faPaperPlane" class="h-5 w-5 animate-pulse" />
                <FontAwesomeIcon v-else :icon="faPaperPlane" class="h-5 w-5" />
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
