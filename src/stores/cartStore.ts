import { defineStore } from "pinia";
import { computed, ref } from "vue";

// Define a TypeScript interface for Room items
export interface Room {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const useCartStore = defineStore("cartStore", () => {
  const cart = ref<Room[]>([]);

  const addToCart = (room: Room) => {
    const existing = cart.value.find((r) => r.id === room.id);
    if (existing) {
      existing.quantity = room.quantity;
    } else {
      cart.value.push({ ...room });
    }
    cleanCart();
  };

  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter((item) => item.id !== id);
  };

  const cleanCart = () => {
    cart.value = cart.value.filter((item) => item.quantity > 0);
  };

  const totalPrice = computed<number>(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  const cartCount = computed<number>(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    totalPrice,
    cartCount,
  };
});
