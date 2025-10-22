<template>
  <div class="min-h-screen bg-purple-950 flex-1 pt-34 pb-10">
    <!-- Amenities Header -->
    <section class="py-12 px-6 md:px-16 text-white">
      <h1 class="text-4xl font-extrabold mb-2">Amenities</h1>
      <p class="mb-4 text-sm opacity-90">
        Powerful Facilities with Best Quality of Services we provide Amazing rooms and Comfort.
      </p>
    </section>

    <!-- Facilities Card Grid -->
    <div class="bg-white rounded-t-3xl px-12 py-10">
      <h2 class="text-center text-2xl font-bold mb-8 text-gray-900">Popular Facilities</h2>

      <transition-group name="fade-scale" tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center place-items-center mx-auto px-64"
        appear>
        <div v-for="(facility, idx) in facilityList" :key="facility.title" class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center space-y-2 w-64
             transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-purple-50">
          <span
            class="flex items-center justify-center h-24 w-24 rounded-full bg-brand-purple text-purple-950 text-2xl mb-3 transition-colors duration-300 hover:bg-purple-950 hover:text-white">
            <i :class="facility.icon"></i>
          </span>
          <p class="font-semibold">{{ facility.title }}</p>
          <p v-if="facility.desc" class="text-xs text-gray-500 mt-1">{{ facility.desc }}</p>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
const facilityList = [
  {
    icon: 'fas fa-mug-hot fa-2xl',
    title: 'Free Complementary Drink (Kashmiri Kehwa)',
    desc: '',
  },
  {
    icon: 'fas fa-wifi fa-2xl',
    title: 'Wi-Fi (Free)',
    desc: '',
  },
  {
    icon: 'fas fa-bell-concierge fa-2xl',
    title: 'Room Service',
    desc: '',
  },
  {
    icon: 'fas fa-utensils fa-2xl',
    title: 'Food & Drink',
    desc: '',
  },
  {
    icon: 'fas fa-headset fa-2xl',
    title: '24-Hour Front Desk',
    desc: '',
  },
  {
    icon: 'fas fa-soap fa-2xl',
    title: 'Full-Service Laundry',
    desc: '',
  },
  {
    icon: 'fas fa-child fa-2xl',
    title: 'Child-Friendly',
    desc: 'We provide a family-friendly atmosphere with safety and world-class hospitality.',
  },
  {
    icon: 'fas fa-car-side fa-2xl',
    title: 'Car Rental Onsite',
    desc: 'Enjoy our onsite car rental service for a comfortable and convenient travel experience.',
  },
  {
    icon: 'fas fa-water-ladder fa-2xl',
    title: 'Swimming Pool',
    desc: 'Relax by our exclusive pool surrounded by serene views of Ladakh.',
  },
]
</script>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.6s cubic-bezier(.68, -0.55, .27, 1.55);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.85) translateY(40px);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
</style>
