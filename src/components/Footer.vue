<template>
  <footer class="text-black pt-10">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
      <!-- ABOUT US -->
      <div>
        <h3 class="font-bold text-lg mb-4">ABOUT US</h3>
        <img src="../../public/remove background fr.png" alt="Hotel Logo" class="w-32 mb-4" />
        <p class="text-sm leading-relaxed">
          We are one of the top hotels in Ladakh and are known for Comfort, Safety, Luxury
          and Aesthetics in an affordable range.
        </p>
      </div>

      <!-- USEFUL LINKS -->
      <div>
        <h3 class="font-bold text-lg mb-4">USEFUL LINKS</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="/" class="hover:text-green-700">Home</a></li>
          <li><a href="/about" class="hover:text-green-700">About Us</a></li>
          <li><a href="/amenities" class="hover:text-green-700">Amenities</a></li>
          <li><a href="/gallery" class="hover:text-green-700">Gallery</a></li>
          <li><a href="/contact" class="hover:text-green-700">Contact Us</a></li>
        </ul>
      </div>

      <!-- POLICY LINKS -->
      <div>
        <h3 class="font-bold text-lg mb-4">POLICY LINKS</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-green-700">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-green-700">Terms And Conditions</a></li>
          <li><a href="#" class="hover:text-green-700">Refund</a></li>
        </ul>
      </div>

      <!-- CONTACT INFO -->
      <div>
        <h3 class="font-bold text-lg mb-4">CONTACT INFO</h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center gap-2">📞 <span>+91 88998 30959</span></li>
          <li class="flex items-center gap-2">📧 <span>rajhotel1976@gmail.com</span></li>
          <li class="flex items-center gap-2">
            📍 <span>Nalthi, Bhadarwah, Jammu & Kashmir, 182222</span>
          </li>
          <li class="flex items-center gap-2">🕒 <span>24*7*365</span></li>
        </ul>
        <div class="flex gap-3 mt-4">
          <a href="https://www.facebook.com"
            class="bg-[#2C1A4D] text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#3b2470] transition">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com"
            class="bg-[#2C1A4D] text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#3b2470] transition">
            <i class="fab fa-instagram text-lg"></i>
          </a>
        </div>
      </div>

      <!-- MAP -->
      <div>
        <h3 class="font-bold text-lg mb-4">DIRECTIONS</h3>
        <iframe src="https://www.google.com/maps?q=Ladakh&output=embed" width="100%" height="150" style="border: 0"
          loading="lazy" class="rounded-lg"></iframe>
      </div>
    </div>

    <!-- Floating Buttons -->
    <div class="fixed bottom-5 right-5 flex flex-col gap-4 z-2">
      <!-- WhatsApp Button -->
      <a href="https://wa.me/918899830959" target="_blank"
        class="flex fixed bottom-5 left-5 items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white shadow-lg hover:bg-[#128c7e] transition duration-300">
        <i class="fab fa-whatsapp fa-2xl"></i>
      </a>

      <!-- Call Button -->
      <a href="#"
        class="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white shadow-lg hover:bg-white hover:text-black transition duration-300">
        <i class="fas fa-shopping-cart text-2xl"></i>
        <span
          class="absolute -top-1 -right-1 bg-green-500 text-xs rounded-full w-6 h-6 flex items-center justify-center">0</span>
      </a>
    </div>
    <!-- Bottom Bar -->
    <div class="bg-[#2C1A4D] text-white text-center py-3 mt-10 text-sm">
      Copyright © 2025 Raj Hotel All Rights Reserved | Powered by Hk Technology Solutions
    </div>
  </footer>
</template>
