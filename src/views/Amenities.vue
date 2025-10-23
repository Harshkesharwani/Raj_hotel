<template>
  <div class="min-h-screen bg-purple-950 flex-1 pt-36">
    <!-- Amenities Header -->
    <section class="py-12 px-6 md:px-16 text-white text-center md:text-left">
      <h1 class="text-3xl sm:text-4xl font-extrabold mb-2">Amenities</h1>
      <p class="mb-4 text-sm sm:text-base opacity-90 max-w-2xl mx-auto md:mx-0">
        Powerful Facilities with Best Quality of Services — we provide amazing rooms and comfort.
      </p>
    </section>

    <!-- Facilities Card Grid -->
    <div class="bg-white rounded-t-3xl px-6 sm:px-10 md:px-16 py-10">
      <h2 class="text-center text-2xl sm:text-3xl font-bold mb-10 text-gray-900">
        Popular Facilities
      </h2>

      <transition-group name="fade-scale" tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mx-auto max-w-7xl"
        appear>
        <div v-for="(facility, idx) in facilityList" :key="facility.title" class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-3
                 w-full sm:w-72 md:w-64 transform transition-transform duration-300
                 hover:scale-105 hover:shadow-2xl hover:bg-purple-50">
          <span class="flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-purple-200
                   text-purple-900 text-3xl mb-3 transition-all duration-300 hover:bg-purple-950 hover:text-white">
            <i :class="facility.icon"></i>
          </span>
          <p class="font-semibold text-base sm:text-lg text-gray-900">{{ facility.title }}</p>
          <p v-if="facility.desc" class="text-xs sm:text-sm text-gray-500 leading-snug px-2">
            {{ facility.desc }}
          </p>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
const facilityList = [
  {
    icon: 'fas fa-mug-hot fa-2xl',
    title: 'Drink (Kashmiri Kehwa)',
    desc: 'A warm drink available.',
  },
  {
    icon: 'fas fa-wifi fa-2xl',
    title: 'Wi-Fi (Free)',
    desc: 'Enjoy uninterrupted high-speed internet across the property.',
  },
  {
    icon: 'fas fa-bell-concierge fa-2xl',
    title: 'Room Service',
    desc: '24x7 room service to make your stay more convenient and relaxing.',
  },
  {
    icon: 'fas fa-utensils fa-2xl',
    title: 'Restaurant',
    desc: 'Savor multi-cuisine delicacies crafted by expert chefs in our in-house restaurant.',
  },
  {
    icon: 'fas fa-headset fa-2xl',
    title: '24-Hour Front Desk',
    desc: 'Friendly staff available around the clock for all your needs.',
  },
  {
    icon: 'fas fa-soap fa-2xl',
    title: 'Full-Service Laundry',
    desc: 'Professional laundry and dry-cleaning services at your convenience.',
  },
  {
    icon: 'fas fa-child fa-2xl',
    title: 'Child-Friendly',
    desc: 'We provide a family-friendly atmosphere with safety and comfort.',
  },
  {
    icon: 'fas fa-car-side fa-2xl',
    title: 'Car Rental Onsite',
    desc: 'Enjoy our onsite car rental service for a convenient travel experience.',
  },
];
</script>

<style scoped>
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
