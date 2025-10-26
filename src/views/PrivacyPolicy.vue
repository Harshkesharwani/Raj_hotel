<template>
  <transition name="fade-slide" appear>
    <div class="pt-48 bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 space-y-6">
        <h1 class="text-3xl font-bold text-[#2C1A4D]">Privacy Policy</h1>
        <p>
          At <strong>Raj Hotel</strong>, we value your privacy. This Privacy Policy describes how we collect, use,
          and protect your information when you use our website or services.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">1. Information We Collect</h2>
        <p>
          We may collect personal details such as your name, email, phone number, and payment information when you
          register or make a booking.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">2. How We Use Your Information</h2>
        <p>
          Your data helps us improve our services, process bookings, and provide personalized experiences. We never
          share your data with third parties without your consent.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">3. Data Security</h2>
        <p>
          We use encryption and secure servers to protect your data from unauthorized access, alteration, or
          destruction.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">4. Updates to This Policy</h2>
        <p>
          We may update this policy periodically. Any changes will be posted on this page with the revised date.
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
