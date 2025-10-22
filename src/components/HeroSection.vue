<template>
  <section id="home" class="relative h-screen overflow-hidden flex items-center justify-center">
    <!-- 🔁 Background Slideshow -->
    <div v-for="(image, index) in images" :key="index"
      class="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out" :style="{
        backgroundImage: `url(${image})`,
        opacity: currentImage === index ? 1 : 0,
        transform: currentImage === index ? 'scale(1.1)' : 'scale(1)',
      }"></div>

    <div class="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>

    <div class="relative z-10 text-center text-white bg-white/10 backdrop-blur-md
             rounded-2xl px-10 py-8 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]
             animate-fadeInUp">
      <h2 class="text-5xl font-extrabold mb-4 drop-shadow-lg">
        Welcome to <span class="text-[#2C1A4D]">Raj Hotel</span>
      </h2>
      <p class="text-xl mb-6 text-gray-100 tracking-wide">
        Stay • Eat • Relax
      </p>
      <a href="#rooms" class="inline-block bg-[#2C1A4D] text-white font-semibold px-8 py-3 rounded-lg
               shadow-lg hover:bg-[#2C1A4D] hover:scale-105 transition-all duration-300">
        Book Now
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import heroImage1 from "../../public/photo-1.jpeg";
import heroImage2 from "../../public/photo-2.jpeg";
import heroImage3 from "../../public/photo-3.jpeg";

const images = ref([heroImage1, heroImage2, heroImage3]);
const currentImage = ref(0);
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.value.length;
  }, 6000);
});

onBeforeUnmount(() => clearInterval(intervalId));
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out forwards;
}
</style>
