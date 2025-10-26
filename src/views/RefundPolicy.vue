<template>
  <transition name="fade-slide" appear>
    <div class="pt-48 bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 space-y-6">
        <h1 class="text-3xl font-bold text-[#2C1A4D]">Refund Policy</h1>
        <p>
          At <strong>Raj Hotel</strong>, we aim to provide flexibility to our customers. Please read our refund and
          cancellation policies carefully.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">1. Cancellations</h2>
        <p>
          You may cancel your booking within 24 hours of confirmation to receive a full refund. After that period,
          partial refunds may apply depending on the cancellation time.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">2. Refund Process</h2>
        <p>
          Refunds will be processed to the original payment method within 7–14 business days. You’ll receive a
          confirmation email once your refund has been initiated.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">3. Non-Refundable Cases</h2>
        <p>
          Refunds will not be issued for no-shows, last-minute cancellations, or misuse of booking terms.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">4. Contact Us</h2>
        <p>
          If you have questions about refunds or cancellations, please contact our support team at
          <a href="mailto:rajhotel1976@gmail.com" class="text-blue-600 hover:underline">rajhotel1976@gmail.com</a>.
        </p>

        <!-- <p class="text-gray-500 text-sm mt-6">
          Last updated: October 2025
        </p> -->
      </div>
    </div>
  </transition>
</template>

<script setup></script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
