<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Popular Facilities Section -->
    <section class="py-16 text-center">
      <h2 class="text-3xl font-bold text-[#2C1A4D] mb-10 tracking-wide">
        Popular Facilities
      </h2>

      <div class="flex flex-wrap justify-center gap-8 px-4">
        <div v-for="facility in facilities" :key="facility.title"
          class="w-48 h-40 flex flex-col justify-center items-center rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          :class="facility.bg === 'yellow' ? yellowCard : themeCard">
          <div class="text-5xl mb-2">{{ facility.icon }}</div>
          <p class="font-semibold text-center text-base leading-snug" v-html="facility.title"></p>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="py-16 bg-gradient-to-br from-[#2C1A4D] via-[#4a2b7a] to-[#6b3cbf] text-white">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-8 tracking-wide">
          Guest Testimonials
        </h2>

        <!-- Rating Summary -->
        <div class="text-center mb-8">
          <span class="text-xl font-semibold">Excellent</span>
          <div class="flex justify-center mt-2 text-yellow-400">
            <span v-for="n in starFill" :key="'filled' + n" class="text-2xl">★</span>
            <span v-for="n in starEmpty" :key="'empty' + n" class="text-2xl text-white/30">★</span>
          </div>
          <p class="text-sm text-white/80 mt-1">
            Based on {{ testimonials.length }} reviews
          </p>
        </div>

        <!-- Testimonials Slider -->
        <div class="flex justify-center gap-6 flex-wrap">
          <div v-for="testimonial in currentSlides" :key="testimonial.name"
            class="bg-white text-gray-800 rounded-xl shadow-lg p-6 w-72 transition-all duration-300 hover:shadow-2xl">
            <div class="font-bold text-[#2C1A4D] text-lg mb-1">
              {{ testimonial.name }}
            </div>
            <div class="text-xs text-gray-500 mb-3">{{ testimonial.date }}</div>
            <div class="flex mb-3 text-yellow-500">
              <span v-for="n in testimonial.rating" :key="n">★</span>
              <span v-for="n in 5 - testimonial.rating" :key="'e' + n" class="text-gray-300">★</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed">
              {{ testimonial.text || 'Wonderful experience!' }}
            </p>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-center items-center pt-10 gap-4">
          <button @click="prevSlide"
            class="bg-white/20 border border-white/30 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white/30 transition"
            aria-label="Previous">
            ←
          </button>

          <button
            class="bg-white text-[#2C1A4D] font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-200 transition">
            Show More Reviews on Google →
          </button>

          <button @click="nextSlide"
            class="bg-white/20 border border-white/30 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white/30 transition"
            aria-label="Next">
            →
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const facilities = ref([
  { title: 'Free Complementary Drink<br />(Kashmiri Kehwa)', icon: '☕', bg: 'yellow' },
  { title: 'Wi-Fi (Free)', icon: '📶', bg: 'theme' },
  { title: 'Room Service', icon: '🛎️', bg: 'yellow' },
  { title: 'Food & Drink', icon: '🍔', bg: 'theme' },
  { title: 'Full-Service Laundry', icon: '🧺', bg: 'yellow' },
]);

// Card color schemes
const yellowCard =
  'bg-gradient-to-br from-yellow-300 to-amber-400 text-[#2C1A4D]';
const themeCard =
  'bg-gradient-to-br from-[#2C1A4D] to-[#4A2B7A] text-white';

const testimonials = ref([
  { name: 'Jaxar Ansare', date: '2024-06-13', rating: 4, text: 'Pleasant stay, loved the service!' },
  { name: 'Stanzin Tharpa', date: '2024-06-14', rating: 3, text: 'Nice experience overall.' },
  { name: 'Ali Max', date: '2024-06-12', rating: 5, text: 'Truly wonderful hospitality!' },
  { name: 'Tashi Dolkar', date: '2024-06-10', rating: 4, text: 'Very comfortable and cozy.' },
  { name: 'Sonam Wangchuk', date: '2024-06-11', rating: 5, text: 'Superb service and food!' },
]);

const slidesToShow = 3;
const activeSlide = ref(0);

const currentSlides = computed(() =>
  testimonials.value.slice(activeSlide.value, activeSlide.value + slidesToShow)
);

const nextSlide = () => {
  activeSlide.value =
    activeSlide.value + slidesToShow < testimonials.value.length
      ? activeSlide.value + 1
      : 0;
};

const prevSlide = () => {
  activeSlide.value =
    activeSlide.value > 0
      ? activeSlide.value - 1
      : Math.max(0, testimonials.value.length - slidesToShow);
};

// Auto-scroll every 4s
const scrollInterval = 4000;
let timer;

onMounted(() => {
  timer = setInterval(nextSlide, scrollInterval);
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});

// Rating stars
const averageRating = computed(() => {
  const sum = testimonials.value.reduce((a, t) => a + t.rating, 0);
  return testimonials.value.length ? sum / testimonials.value.length : 0;
});

const starFill = computed(() => Math.round(averageRating.value));
const starEmpty = computed(() => 5 - starFill.value);
</script>
