<template>
  <section class="min-h-screen bg-gray-50">
    <div v-for="(service, index) in services" :key="service.id">
      <div ref="cards" class="grid md:grid-cols-2 gap-0 overflow-hidden transition-all duration-1000" :class="[
        visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      ]" :style="{ transitionDelay: index * 150 + 'ms' }">
        <!-- Image Section -->
        <div class="relative h-96 md:h-auto overflow-hidden" :class="index % 2 !== 0 ? 'md:order-2' : ''">
          <div class="absolute inset-0 transition-transform duration-1000"
            :class="visibleCards.includes(index) ? 'scale-100' : 'scale-110'">
            <img :src="service.image" :alt="service.title" class="w-full h-full object-cover" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-r" :class="service.color === 'purple'
            ? 'from-[#2C1A4D]/60 to-transparent'
            : 'from-[#6D28D9]/60 to-transparent'
            " />
        </div>

        <!-- Content Section -->
        <div class="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white" :class="service.color === 'purple'
          ? 'bg-gradient-to-br from-[#2C1A4D] to-[#4B2A7A]'
          : 'bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6]'
          ">
          <!-- Animated Circular Pattern Background -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0 transition-transform duration-1000" :class="visibleCards.includes(index)
              ? 'translate-x-0'
              : index % 2 !== 0
                ? 'translate-x-full'
                : '-translate-x-full'
              ">
              <div v-for="i in 20" :key="i" class="absolute w-32 h-32 border border-white/20 rounded-full" :style="{
                top: ((i * 23) % 100) + '%',
                left: ((i * 37) % 100) + '%',
                transform: `scale(${0.5 + (i % 3) * 0.3})`
              }" />
            </div>
          </div>

          <div class="relative z-10 space-y-6">
            <!-- Icon -->
            <div class="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-sm transition-all duration-700"
              :class="visibleCards.includes(index) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'">
              <component :is="service.icon" class="w-8 h-8 text-white" />
            </div>

            <!-- Badge -->
            <div class="inline-block transition-all duration-700 delay-100"
              :class="visibleCards.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'">
              <span class="text-xs md:text-sm tracking-widest font-bold text-white/90 uppercase">
                {{ service.badge }}
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-700 delay-200"
              :class="visibleCards.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'">
              {{ service.title }}
            </h2>

            <!-- Description -->
            <div class="space-y-4">
              <p v-for="(para, i) in service.description" :key="i"
                class="text-base md:text-lg text-white/95 leading-relaxed transition-all duration-700"
                :class="visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
                :style="{ transitionDelay: 300 + i * 100 + 'ms' }">
                {{ para }}
              </p>
            </div>

            <!-- Button -->
            <div class="transition-all duration-700 delay-500"
              :class="visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
              <button
                class="bg-white hover:bg-gray-100 text-[#2C1A4D] font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
                <span class="flex items-center gap-2">
                  Read More
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Icons (simple SVGs instead of lucide)
const BedIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10M21 7v10M4 10h16a2 2 0 012 2v5H2v-5a2 2 0 012-2z" /></svg>`
};
const UtensilsIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 3h16M9 3v18M15 3v18" /></svg>`
};
const WavesIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12c1.333 1 2.667 1 4 0s2.667-1 4 0 2.667 1 4 0 2.667-1 4 0" /></svg>`
};

const services = [
  {
    id: 1,
    badge: "Services",
    title: "Cozy Accommodation",
    description: [
      "The Raj Hotel features duplex-style rooms designed with modern amenities and complimentary Wi-Fi for your comfort.",
      "Upper-floor rooms offer breathtaking panoramic views of mountains and rivers."
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    color: "purple",
    icon: BedIcon
  },
  {
    id: 2,
    badge: "Dining",
    title: "Scrumptious Cuisines",
    description: [
      "The Raj Hotel is a benchmark for fine dining in Ladakh, offering multi-cuisine delights.",
      "Enjoy our modern bar and discotheque for an unforgettable evening."
    ],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    color: "purple",
    icon: UtensilsIcon
  },
  {
    id: 3,
    badge: "Amenities",
    title: "Dive Into Luxury: Our Pool",
    description: [
      "Relax in our temperature-controlled pool with stunning mountain views.",
      "Perfect for families, couples, or solo travelers seeking tranquility and comfort."
    ],
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
    color: "purple",
    icon: WavesIcon
  }
];

const visibleCards = ref([]);
const cards = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Array.from(cards.value).indexOf(entry.target);
        if (entry.isIntersecting && !visibleCards.value.includes(index)) {
          visibleCards.value.push(index);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.value.forEach((card) => observer.observe(card));

  onBeforeUnmount(() => {
    cards.value.forEach((card) => observer.unobserve(card));
  });
});
</script>
