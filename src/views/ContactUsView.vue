<template>
  <div class="min-h-screen bg-purple-950 flex flex-col items-center py-24 px-6 text-gray-900">
    <!-- Header -->
    <h1 class="text-4xl font-extrabold text-white mb-12 animate-fade-in-down">
      Get in Touch With Us
    </h1>

    <!-- Contact Info Section -->
    <div
      class="flex flex-col md:flex-row items-stretch w-full max-w-5xl mb-16 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg animate-fade-in-up">
      <!-- Left Side: Contact Info -->
      <div class="bg-purple-900 text-white flex flex-col justify-center px-8 py-10 w-full md:w-1/2 space-y-3">
        <h2 class="text-2xl font-bold mb-2">We’re here to help! Call Us Today!</h2>

        <div class="space-y-3">
          <button v-for="(info, i) in contactNumbers" :key="i"
            class="flex items-center gap-3 bg-white/80 text-purple-900 px-4 py-2 rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 font-semibold shadow-md">
            <i :class="info.icon" class="text-lg"></i>
            <span>{{ info.text }}</span>
          </button>
        </div>
      </div>

      <!-- Right Side: Info -->
      <div class="bg-purple-800 text-white flex flex-col justify-center px-8 py-10 w-full md:w-1/2">
        <h3 class="font-bold text-lg mb-2">Looking for the best hotel?</h3>
        <h2 class="text-2xl font-extrabold mb-4">Let’s Plan Your Stay</h2>
        <p class="text-white/80 mb-8">
          Get in touch with us now to book your room and experience luxury and comfort.
        </p>

        <div class="space-y-3">
          <button v-for="(email, i) in contactEmails" :key="i"
            class="flex items-center gap-3 bg-white/80 text-purple-900 px-4 py-2 rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 font-semibold shadow-md"
            href="mailto:info@Rajhote.com">
            <i :class="email.icon" class="text-lg"></i>
            <span>{{ email.text }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 md:p-12 animate-slide-up">
      <h3 class="text-3xl font-bold mb-6 text-center text-purple-900">Send Us a Message</h3>
      <form @submit.prevent="submit" class="space-y-4">
        <div class="grid md:grid-cols-2 gap-4">
          <input v-model="form.name" placeholder="Your Name" type="text" class="input-field" />
          <input v-model="form.email" placeholder="Your Email" type="email" class="input-field" />
        </div>
        <input v-model="form.phone" placeholder="Phone Number" type="text" class="input-field" />
        <textarea v-model="form.message" placeholder="Your Message" rows="4" class="input-field resize-none"></textarea>

        <button type="submit"
          class="w-full py-3 bg-purple-900 text-white font-bold rounded-lg hover:bg-purple-800 hover:scale-[1.02] transition-all duration-300 shadow-md">
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Contact info lists
const contactNumbers = [
  { icon: 'fas fa-mobile-alt', text: '+91 88998 30959' },
  { icon: 'fas fa-mobile-alt', text: '+91 88998 30959' },
  { icon: 'fas fa-phone', text: '88998 30959' },
]

const contactEmails = [
  { icon: 'fas fa-envelope', text: 'info@Rajhote.com' },
  { icon: 'fas fa-envelope', text: 'Rajhotel1997@gmail.com' },
]

// Form data
const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

function submit() {
  alert('✅ Thank you! Your message has been sent.')
  form.value = { name: '', email: '', phone: '', message: '' }
}
</script>

<style scoped>
.bg-brand-purple {
  background-color: #2c1a4d;
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
}

.input-field:focus {
  border-color: #6b21a8;
  /* Tailwind purple-800 */
  box-shadow: 0 0 0 3px rgba(107, 33, 168, 0.2);
}

/* Animations */
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}
</style>
