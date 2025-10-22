<template>
  <div class="pt-32 bg-gray-50 text-gray-900 flex flex-col items-center">
    <!-- Header section -->
    <header class="text-center py-12">
      <h1 class="text-4xl font-extrabold mb-3 text-purple-950">Gallery Showcase</h1>
      <p class="text-gray-600">
        Experience our curated collection of images and videos with style and elegance.
      </p>
    </header>

    <!-- Gallery Grid -->
    <transition-group name="fade-scale" tag="div"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20 max-w-7xl w-full" appear>
      <div v-for="(item, index) in galleryItems" :key="index"
        class="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white" @click="openModal(item)">
        <!-- IMAGE ITEM -->
        <template v-if="item.type === 'image'">
          <img :src="item.src" :alt="item.alt"
            class="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700 ease-out" />
        </template>

        <!-- VIDEO ITEM -->
        <template v-else>
          <video :src="item.src" autoplay muted loop playsinline
            class="w-full h-72 object-cover transform group-hover:scale-105 transition duration-700 ease-out"></video>
        </template>

        <!-- Overlay on Hover -->
        <div
          class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex flex-col justify-center items-center text-center">
          <h3
            class="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 -translate-y-4">
            {{ item.title }}
          </h3>
          <p
            class="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 mt-1 transform group-hover:translate-y-0 -translate-y-2">
            {{ item.caption }}
          </p>
        </div>
      </div>
    </transition-group>

    <!-- Modal Viewer -->
    <transition name="zoom-fade">
      <div v-if="activeItem" class="fixed inset-0 bg-black/40 bg-opacity-80 flex items-center justify-center z-50"
        @click.self="closeModal">
        <div class="relative max-w-4xl w-full p-4">
          <button class="absolute top-4 right-4 text-white text-3xl hover:text-gray-400" @click="closeModal">
            &times;
          </button>

          <div class="rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <template v-if="activeItem.type === 'image'">
              <img :src="activeItem.src" :alt="activeItem.alt" class="max-h-[80vh] w-full object-contain" />
            </template>
            <template v-else>
              <video :src="activeItem.src" controls autoplay class="w-full max-h-[80vh] rounded-xl"></video>
            </template>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const galleryItems = ref([
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    title: "Mountain Retreat",
    caption: "Serenity among the peaks.",
  },
  {
    type: "video",
    src: "https://www.pexels.com/download/video/33746484/",
    title: "Waves of Kargil",
    caption: "Nature in motion.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    title: "Golden Horizon",
    caption: "Sunlight over paradise.",
  },
  {
    type: "video",
    src: "https://www.pexels.com/download/video/31508094/",
    title: "Evening at Suru River",
    caption: "Flowing peace.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    title: "Quiet Dreams",
    caption: "Calm and peaceful waters.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
    title: "Starry Escape",
    caption: "Dreaming under the stars.",
  },
]);

const activeItem = ref(null);

const openModal = (item) => (activeItem.value = item);
const closeModal = () => (activeItem.value = null);
</script>

<style scoped>
/* Fade & Scale Animation */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Zoom Modal Transition */
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
