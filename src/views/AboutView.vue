<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <!-- Page Content -->
    <main class="flex-1 pt-28 pb-20">
      <!-- Header -->
      <div class="py-12 text-center px-6">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-3 tracking-wide text-gray-900">
          About <span class="text-purple-950">Us</span>
        </h1>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover comfort, class, and warm hospitality — all under one roof at
          <span class="font-semibold text-purple-950">The Raj Hotel, Bhaderwah</span>.
        </p>
      </div>

      <!-- Section 1 -->
      <section class="grid md:grid-cols-2 gap-12 px-8 md:px-20 py-12 items-center">
        <div class="space-y-5">
          <h2 class="text-3xl font-bold text-purple-950">The Raj Hotel, Bhaderwah</h2>
          <p class="text-gray-700 leading-relaxed">
            Nestled amidst the breathtaking valleys of Bhaderwah, The Raj Hotel redefines luxury with a touch of local
            charm. Every corner of our property is designed to offer peace, comfort, and elegance.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Whether you’re here for leisure, business, or a family vacation, our world-class amenities and personalized
            service promise a stay you’ll always remember.
          </p>
          <ul class="list-disc pl-5 space-y-1 text-gray-700">
            <li>Spacious, scenic-view rooms</li>
            <li>24/7 concierge and room service</li>
            <li>Premium spa and relaxation facilities</li>
          </ul>
        </div>

        <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop" alt="Hotel Room"
          class="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700" />
      </section>

      <!-- Section 2 -->
      <section class="grid md:grid-cols-2 gap-12 px-8 md:px-20 py-12 items-center">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop" alt="Food & Dining"
          class="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700 order-1 md:order-none" />

        <div class="space-y-5">
          <h2 class="text-3xl font-bold text-purple-950">Delicious Dining & Modern Comforts</h2>
          <p class="text-gray-700 leading-relaxed">
            Savor mouthwatering cuisines prepared by our expert chefs — from authentic regional dishes to global
            flavors. Our restaurant offers not just a meal, but a fine-dining experience in an elegant, cozy setting.
          </p>
          <ul class="list-disc pl-5 space-y-1 text-gray-700">
            <li>Fresh, locally sourced ingredients</li>
            <li>Warm and elegant dining ambiance</li>
            <li>Curated menu of beverages and desserts</li>
          </ul>
        </div>
      </section>

      <!-- Section 3 -->
      <section
        class="px-8 md:px-20 py-16 text-center md:text-left bg-purple-50 border-t border-purple-200 shadow-inner rounded-t-3xl">
        <h2 class="text-3xl font-bold mb-4 text-purple-950">Years of Warm Welcome...</h2>
        <p class="text-gray-700 leading-relaxed max-w-3xl mx-auto md:mx-0 text-[15px]">
          At The Raj Hotel, we live by the philosophy of
          <span class="italic">'Atithi Devo Bhava'</span> — the guest is divine. Our mission is to offer comfort,
          safety,
          and luxury at an affordable price, surrounded by the tranquil beauty of Bhaderwah’s hills.
        </p>
        <p class="text-gray-700 mt-4 text-[15px] leading-relaxed max-w-3xl mx-auto md:mx-0">
          Whether it’s a peaceful retreat or a family holiday, we promise warmth, relaxation, and memories that last a
          lifetime.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const showHeader = ref(false)

onMounted(() => {
  setTimeout(() => {
    showHeader.value = true
  }, 400)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active,
.img-fade-enter-active,
.img-fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to,
.img-fade-enter-from,
.img-fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active {
  animation: slideDown 0.7s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-40px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
