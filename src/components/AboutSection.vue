<template>
  <section
    class="relative min-h-screen bg-gradient-to-br from-[#f5f3fa] via-white to-[#e8e0f7] overflow-hidden"
  >
    <!-- Decorative Blobs -->
    <div
      class="absolute top-0 left-0 w-64 h-64 bg-[#2C1A4D]/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-72 h-72 bg-[#2C1A4D]/10 rounded-full blur-3xl"
    ></div>

    <div class="relative z-10 container mx-auto px-4 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <!-- Left Content -->
        <div class="space-y-6">
          <div class="space-y-2">
            <p class="text-[#6b5b95] tracking-widest text-sm font-medium uppercase">
              About Us
            </p>
            <h1
              class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1A4D] leading-tight"
            >
              The Raj Hotel - Luxury Redefined in Ladakh
            </h1>
          </div>

          <div
            class="bg-gradient-to-br from-[#2C1A4D] to-[#5b3d8c] rounded-2xl p-8 md:p-10 shadow-2xl space-y-6 text-white"
          >
            <p class="text-base md:text-lg leading-relaxed">
              The Raj Hotel is a premier luxury hotel in Ladakh, combining elegant design,
              world-class amenities, and traditional hospitality to create a serene
              experience for guests.
            </p>
            <p class="text-base md:text-lg leading-relaxed">
              From fine dining to scenic views, every detail reflects our commitment to
              excellence. Ideal for both leisure and business travelers, we make every
              stay truly memorable.
            </p>
            <p class="text-base md:text-lg leading-relaxed">
              Enjoy guided sightseeing tours, airport transfers, and personalized services
              that redefine comfort in the heart of Ladakh.
            </p>

            <button
              class="bg-[#fbbf24] hover:bg-[#facc15] text-[#2C1A4D] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              About Us
            </button>
          </div>
        </div>

        <!-- Right Image Section (Auto-Rotating) -->
        <div class="relative">
          <div
            class="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <transition-group name="fade" tag="div">
              <div
                v-for="(image, index) in images"
                :key="index"
                v-show="index === currentImageIndex"
                class="absolute inset-0 transition-opacity duration-1000"
              >
                <img
                  :src="image"
                  :alt="'Hotel view ' + (index + 1)"
                  class="w-full h-full object-cover"
                />
              </div>
            </transition-group>

            <!-- Image Indicators -->
            <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              <button
                v-for="(image, index) in images"
                :key="index"
                @click="setCurrent(index)"
                :class="[
                  'transition-all duration-300 rounded-full',
                  index === currentImageIndex
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/80',
                ]"
                :aria-label="'Go to image ' + (index + 1)"
              ></button>
            </div>
          </div>

          <!-- Decorative circles -->
          <div
            class="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fbbf24]/40 rounded-full blur-3xl -z-10"
          ></div>
          <div
            class="absolute -top-6 -left-6 w-40 h-40 bg-[#2C1A4D]/20 rounded-full blur-3xl -z-10"
          ></div>
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div
      class="relative z-1 bg-gradient-to-r from-[#fbbf24] via-[#facc15] to-[#f59e0b] py-8"
    >
      <div class="container mx-auto px-4">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto"
        >
          <h2
            class="text-xl md:text-2xl lg:text-3xl font-bold text-[#2C1A4D] text-center md:text-left"
          >
            Looking for excellence in fine dining in Ladakh? Here we are.
          </h2>
          <button
            class="bg-[#2C1A4D] hover:bg-[#432a6e] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
          >
            Call Us Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const currentImageIndex = ref(0);

const images = [
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
];

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 3000);
});

onBeforeUnmount(() => clearInterval(intervalId));

const setCurrent = (index) => {
  currentImageIndex.value = index;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
