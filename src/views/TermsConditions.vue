<template>
  <transition name="fade-slide" appear>
    <div class="pt-48 bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 space-y-6">
        <h1 class="text-3xl font-bold text-[#2C1A4D]">Terms & Conditions</h1>
        <p>
          Welcome to <strong>Raj Hotel</strong>. By accessing or using our services, you agree to comply with the
          following terms and conditions.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">1. Use of Service</h2>
        <p>
          You agree to use our platform responsibly. Any misuse, fraudulent booking, or illegal activity will result in
          account termination.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">2. Booking Policy</h2>
        <p>
          All bookings are subject to availability. Prices may vary based on the time, date, and season of booking.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">3. Liability</h2>
        <p>
          <strong>Raj Hotel</strong> is not liable for personal losses, damages, or issues beyond our control, such as
          natural disasters or third-party errors.
        </p>

        <h2 class="text-xl font-semibold text-[#2C1A4D]">4. Modification</h2>
        <p>
          We reserve the right to update these terms anytime without prior notice. Users are encouraged to review this
          page regularly.
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
