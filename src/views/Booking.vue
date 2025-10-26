<template>
  <div class="pt-54 pb-12 flex flex-col lg:flex-row gap-8 p-6">
    <!-- Rooms List -->
    <div class="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="room in rooms" :key="room.id" class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <img :src="room.image" alt="room" class="h-40 w-full object-cover" />
        <div class="p-4 flex flex-col gap-3">
          <h3 class="text-lg font-semibold">{{ room.name }}</h3>
          <p class="text-gray-500">₹{{ room.price }} / night</p>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <button @click="decreaseQuantity(room)" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                −
              </button>
              <span>{{ room.quantity }}</span>
              <button @click="increaseQuantity(room)" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                +
              </button>
            </div>

            <button @click="addRoomToCart(room)"
              class="bg-[#2C1A4D] text-white px-4 py-1 rounded-lg hover:bg-[#422d6f] transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Cart Section -->
    <div class="w-full lg:w-1/3 bg-white rounded-xl shadow-lg p-6 h-fit sticky top-6">
      <h2 class="text-xl font-bold mb-4 border-b pb-2">🛒 Your Cart</h2>

      <div v-if="cartStore.cart.length === 0" class="text-gray-500 text-center">
        No rooms selected yet.
      </div>

      <div v-else class="space-y-4">
        <div v-for="item in cartStore.cart" :key="item.id" class="flex justify-between items-center border-b pb-2">
          <div>
            <p class="font-semibold">{{ item.name }}</p>
            <p class="text-sm text-gray-500">₹{{ item.price }} × {{ item.quantity }}</p>
          </div>
          <div class="flex items-center gap-3">
            <p class="font-bold">₹{{ item.price * item.quantity }}</p>
            <button @click="cartStore.removeFromCart(item.id)"
              class="text-red-500 hover:text-red-700 text-sm font-semibold">
              ✕
            </button>
          </div>
        </div>

        <div class="flex justify-between items-center font-bold pt-4">
          <span class="text-[#2C1A4D]">Total</span>
          <span>₹{{ cartStore.totalPrice }}</span>
        </div>

        <button :disabled="cartStore.cart.length === 0" @click="goToPayment"
          class="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          Proceed to Payment
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "vue-router";

const router = useRouter();
const cartStore = useCartStore();

const rooms = reactive([
  {
    id: 1,
    name: "Deluxe Room",
    price: 1500,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    quantity: 0,
  },
  {
    id: 2,
    name: "Luxury Suite",
    price: 2500,
    image: "https://images.unsplash.com/photo-1559599238-0d2c6bf4c9b1?w=800&h=600&fit=crop",
    quantity: 0,
  },
  {
    id: 3,
    name: "Standard Room",
    price: 1000,
    image: "https://images.unsplash.com/photo-1560184897-93e8d74f0e9b?w=800&h=600&fit=crop",
    quantity: 0,
  },
]);

const increaseQuantity = (room) => {
  room.quantity++;
};

const decreaseQuantity = (room) => {
  if (room.quantity > 0) room.quantity--;
};

const addRoomToCart = (room) => {
  if (room.quantity > 0) {
    cartStore.addToCart(room);
    // ✅ Keep selected quantity as is (do not reset to 0)
  }
};

const goToPayment = () => {
  router.push("/payment");
};
</script>

<style scoped>
@media (max-width: 1024px) {
  .sticky {
    position: static;
  }
}
</style>
