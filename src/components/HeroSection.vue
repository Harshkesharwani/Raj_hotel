<template>
  <section id="home" class="relative h-screen overflow-hidden flex items-center justify-center">
    <!-- Background Image -->
    <div v-for="(image, index) in images" :key="index"
      class="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out z-1" :style="{
        backgroundImage: `url(${image})`,
        opacity: currentImage === index ? 1 : 0,
        transform: currentImage === index ? 'scale(1.1)' : 'scale(1)',
      }"></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <!-- Hero Content -->
    <div class="relative z-10 text-center text-white">
      <h2 class="text-5xl font-bold mb-4">Welcome to <span class="text-[#2C1A4D]">Raj Hotel</span></h2>
      <p class="text-lg mb-6">Stay • Eat • Relax</p>
      <a href="#rooms" class="bg-[#2C1A4D] hover:bg-[#2c1a4de0] px-6 py-3 rounded text-white transition duration-300">
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

// 🖼️ Add your image URLs here
const images = ref([
  heroImage1,
  heroImage2,
  heroImage3,
]);

const currentImage = ref(0);
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.value.length;
  }, 6000); // change every 6 seconds
});

onBeforeUnmount(() => clearInterval(intervalId));
</script>
