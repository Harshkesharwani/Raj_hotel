<template>
  <div class="relative w-full h-[700px] bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 overflow-hidden py-10"
    @mouseenter="pauseAutoSlide" @mouseleave="startAutoSlide">
    <!-- Background -->
    <div class="absolute inset-0 bg-cover bg-center opacity-50"
      style="background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')">
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full px-4">
      <h1 class="text-white text-4xl md:text-5xl font-bold mb-16 tracking-wide">
        Book Rooms
      </h1>

      <!-- Carousel -->
      <div class="relative w-full max-w-6xl h-96 md:h-[500px] perspective-1000">
        <div class="relative w-full h-full flex items-center justify-center">
          <div v-for="(room, index) in rooms" :key="room.id"
            class="absolute w-80 md:w-96 cursor-pointer transition-all duration-700 ease-out"
            :style="getCardStyle(index)" @click="goToSlide(index)">
            <div
              class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <!-- Image -->
              <div class="h-72 md:h-80 overflow-hidden">
                <img :src="room.image" :alt="room.title"
                  class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>

              <!-- Details -->
              <div class="p-6 text-center bg-gradient-to-b from-gray-50 to-white">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ room.title }}
                </h3>
                <p class="text-2xl font-bold text-blue-600 mb-2">
                  {{ room.price }}
                </p>
                <div class="flex justify-center text-xl text-yellow-400">
                  <span v-for="n in 5" :key="n" :class="n <= room.rating ? 'text-yellow-400' : 'text-gray-300'">
                    ★
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="flex gap-3 mt-12">
        <button v-for="(room, index) in rooms" :key="index" @click="goToSlide(index)" :class="[
          'transition-all duration-300 rounded-full',
          index === currentIndex
            ? 'w-12 h-3 bg-blue-500'
            : 'w-3 h-3 bg-white/50 hover:bg-white/80'
        ]"></button>
      </div>

      <!-- Arrows -->
      <button @click="prevSlide"
        class="absolute left-4 md:left-12 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
        ‹
      </button>

      <button @click="nextSlide"
        class="absolute right-4 md:right-12 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
        ›
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentIndex = ref(1);
const autoSlideInterval = ref(null);
const intervalTime = 4000; // ⏱ auto-scroll every 4 seconds

const rooms = [
  {
    id: 1,
    title: "Deluxe Room - MAP",
    price: "₹3,000.00",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=800&fit=crop",
  },
  {
    id: 2,
    title: "Deluxe Room - CP",
    price: "₹2,700.00",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=800&fit=crop",
  },
  {
    id: 3,
    title: "Deluxe Room - EP",
    price: "₹2,400.00",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=800&fit=crop",
  },
];

// Navigation
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % rooms.length;
};
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + rooms.length) % rooms.length;
};
const goToSlide = (index) => {
  currentIndex.value = index;
};

// Auto Scroll Logic
const startAutoSlide = () => {
  stopAutoSlide(); // Clear old interval if any
  autoSlideInterval.value = setInterval(() => {
    nextSlide();
  }, intervalTime);
};
const stopAutoSlide = () => {
  if (autoSlideInterval.value) clearInterval(autoSlideInterval.value);
};
const pauseAutoSlide = () => stopAutoSlide();

// 3D style logic
const getCardStyle = (index) => {
  const diff = index - currentIndex.value;
  if (diff === 0) {
    return {
      transform: "translateX(0%) rotateY(0deg) scale(1)",
      zIndex: 30,
      opacity: 1,
    };
  } else if (diff === -1 || (currentIndex.value === 0 && index === rooms.length - 1)) {
    return {
      transform: "translateX(-85%) rotateY(25deg) scale(0.9)",
      zIndex: 20,
      opacity: 0.8,
    };
  } else if (diff === 1 || (currentIndex.value === rooms.length - 1 && index === 0)) {
    return {
      transform: "translateX(85%) rotateY(-25deg) scale(0.9)",
      zIndex: 20,
      opacity: 0.8,
    };
  } else {
    return {
      transform: "translateX(0%) scale(0.8)",
      zIndex: 10,
      opacity: 0,
    };
  }
};

// Lifecycle Hooks
onMounted(() => startAutoSlide());
onUnmounted(() => stopAutoSlide());
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
