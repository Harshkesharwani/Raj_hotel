<template>
  <section id="rooms" class="py-16">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-8 text-[#2C1A4D]">Our Rooms</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="room in rooms" :key="room.id" class="bg-white rounded-lg shadow hover:shadow-lg">
          <img :src="room.image" :alt="room.name" class="rounded-t-lg h-56 w-full object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ room.name }}</h3>
            <p class="text-gray-600 mb-2">{{ room.desc }}</p>
            <p class="text-blue-600 font-bold">₹{{ room.price }}/night</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const rooms = [
  { id: 1, name: 'Deluxe Room', desc: 'Spacious and elegant for couples.', price: 3500, image: '/images/room1.jpg' },
  { id: 2, name: 'Family Suite', desc: 'Perfect for family comfort.', price: 5000, image: '/images/room2.jpg' },
  { id: 3, name: 'Luxury Suite', desc: 'Premium luxury experience.', price: 7000, image: '/images/room3.jpg' },
]
</script>
