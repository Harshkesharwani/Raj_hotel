<template>
  <div class="pt-45 bg-gray-50 py-12 px-6 lg:px-20">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
      <!-- Billing Details -->
      <div class="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-semibold mb-6">Billing details</h2>

        <form class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <!-- Name -->
          <div>
            <label class="block text-sm font-medium mb-1">First name *</label>
            <input v-model="form.firstName" type="text" required class="w-full border rounded-lg p-2.5" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Last name *</label>
            <input v-model="form.lastName" type="text" required class="w-full border rounded-lg p-2.5" />
          </div>

          <!-- Company -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium mb-1">Company name (optional)</label>
            <input v-model="form.company" type="text" class="w-full border rounded-lg p-2.5" />
          </div>

          <!-- Country -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium mb-1">Country / Region *</label>
            <input v-model="form.country" type="text" required class="w-full border rounded-lg p-2.5" />
          </div>

          <!-- Address -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium mb-1">Street address *</label>
            <input v-model="form.street" type="text" required placeholder="House number and street name"
              class="w-full border rounded-lg p-2.5 mb-3" />
            <input v-model="form.apartment" type="text" placeholder="Apartment, suite, unit, etc. (optional)"
              class="w-full border rounded-lg p-2.5" />
          </div>

          <!-- City & State -->
          <div>
            <label class="block text-sm font-medium mb-1">Town / City *</label>
            <input v-model="form.city" type="text" required class="w-full border rounded-lg p-2.5" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">State *</label>
            <input v-model="form.state" type="text" required class="w-full border rounded-lg p-2.5" />
          </div>

          <!-- Pin & Phone -->
          <div>
            <label class="block text-sm font-medium mb-1">PIN Code *</label>
            <input v-model="form.pin" type="text" required class="w-full border rounded-lg p-2.5" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Phone *</label>
            <input v-model="form.phone" type="tel" required class="w-full border rounded-lg p-2.5" />
          </div>

          <!-- Email -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium mb-1">Email address *</label>
            <input v-model="form.email" type="email" required class="w-full border rounded-lg p-2.5" />
          </div>

          <!-- Notes -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium mb-1">Order notes (optional)</label>
            <textarea v-model="form.notes" rows="3" placeholder="Notes about your order, e.g. special instructions"
              class="w-full border rounded-lg p-2.5"></textarea>
          </div>
        </form>
      </div>

      <!-- Order Summary -->
      <div class="bg-white rounded-lg shadow-lg p-8 h-fit">
        <h2 class="text-2xl font-semibold mb-6">Your order</h2>

        <div class="border-b mb-4 pb-2 font-medium flex justify-between">
          <span>Product</span>
          <span>Subtotal</span>
        </div>

        <div v-if="cartStore.cart.length === 0" class="text-gray-500 text-center py-4">
          Your cart is empty.
        </div>

        <div v-else>
          <div v-for="item in cartStore.cart" :key="item.id"
            class="flex justify-between items-center mb-3 border-b pb-2">
            <div>
              <span class="font-medium">{{ item.name }} × {{ item.quantity }}</span>
              <p class="text-sm text-gray-500">₹{{ item.price }} per night</p>
            </div>
            <div class="flex items-center gap-2">
              <button @click="decreaseQuantity(item)" class="bg-gray-200 px-2 rounded hover:bg-gray-300">−</button>
              <button @click="increaseQuantity(item)" class="bg-gray-200 px-2 rounded hover:bg-gray-300">+</button>
              <p class="font-semibold">₹{{ item.price * item.quantity }}</p>
            </div>
          </div>

          <div class="flex justify-between items-center font-semibold mt-4">
            <span>Subtotal</span>
            <span>₹{{ cartStore.totalPrice }}</span>
          </div>

          <div class="flex justify-between font-bold text-lg mt-2">
            <span>Total</span>
            <span>₹{{ cartStore.totalPrice }}</span>
          </div>

          <!-- Payment Methods -->
          <!-- <div class="mt-6 space-y-3">
            <label class="flex items-center gap-2">
              <input type="radio" v-model="paymentMethod" value="phonepe" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/PhonePe_Logo.svg" class="h-5" />
              <span>PhonePe Payment</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" v-model="paymentMethod" value="razorpay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Razorpay_logo.svg" class="h-5" />
              <span>Razorpay</span>
            </label>
          </div> -->

          <!-- Place Order Button -->
          <button @click="placeOrder" :disabled="!isFormValid || cartStore.cart.length === 0"
            class="mt-6 w-full bg-[#2C1A4D] text-white py-3 rounded-lg hover:bg-[#3c2a6a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { useCartStore } from "@/stores/cartStore";
import type { Room } from "@/stores/cartStore";
import { useRouter } from "vue-router";

const router = useRouter();
const cartStore = useCartStore();

const form = reactive({
  firstName: "",
  lastName: "",
  company: "",
  country: "India",
  street: "",
  apartment: "",
  city: "",
  state: "",
  pin: "",
  phone: "",
  email: "",
  notes: "",
});

const paymentMethod = ref("phonepe");

// ✅ Computed validation for required fields
const isFormValid = computed(() => {
  return (
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.country.trim() &&
    form.street.trim() &&
    form.city.trim() &&
    form.state.trim() &&
    form.pin.trim() &&
    form.phone.trim() &&
    form.email.trim()
  );
});

const increaseQuantity = (item: Room) => {
  item.quantity++;
  cartStore.addToCart(item);
};

const decreaseQuantity = (item: Room) => {
  if (item.quantity > 0) {
    item.quantity--;
    if (item.quantity === 0) cartStore.removeFromCart(item.id);
    else cartStore.addToCart(item);
  }
};

const placeOrder = () => {
  if (!isFormValid.value) {
    alert("⚠️ Please fill all required fields before placing your order.");
    return;
  }

  if (cartStore.cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert(
    `✅ Thank you, ${form.firstName}! Your booking of ₹${cartStore.totalPrice} has been placed via ${paymentMethod.value}.`
  );

  router.push("/booking");
  // Reset cart & form
  cartStore.cart.splice(0, cartStore.cart.length);
  Object.keys(form).forEach((key) => ((form as any)[key] = ""));
};
</script>

<style scoped>
input,
textarea {
  transition: all 0.2s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #2c1a4d;
  box-shadow: 0 0 0 2px #c4b5fd;
}
</style>
