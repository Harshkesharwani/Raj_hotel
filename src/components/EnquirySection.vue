<template>
  <section class="py-8 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-[#2C1A4D] mb-8">Quick Enquiry</h2>

      <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <form class="flex flex-wrap gap-4 items-center justify-between" @submit.prevent="submitEnquiry">

          <!-- Name -->
          <input v-model="form.name" type="text" placeholder="Full Name"
            class="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#432a6e] focus:outline-none" />

          <!-- Email -->
          <input v-model="form.email" type="email" placeholder="Email"
            class="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#432a6e] focus:outline-none" />

          <!-- Date -->
          <input v-model="form.date" type="date"
            class="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#432a6e] focus:outline-none" />

          <!-- Message -->
          <textarea v-model="form.message" rows="1" placeholder="Message"
            class="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#432a6e] focus:outline-none resize-none"></textarea>

          <!-- Submit Button -->
          <button type="submit" class="bg-[#432a6e] text-white px-6 py-2 rounded-lg hover:bg-[#432a6e] transition">
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  date: "",
  message: "",
});

const submitEnquiry = () => {
  console.log("Enquiry submitted:", form.value);
  alert("Thank you! Your enquiry has been submitted.");
  form.value = { name: "", email: "", date: "", message: "" };
};
</script>
