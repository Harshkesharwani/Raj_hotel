<template>
  <footer class="text-black pt-10">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
      <!-- ABOUT US -->
      <div>
        <h3 class="font-bold text-lg mb-4">ABOUT US</h3>
        <img src="../../public/remove background fr.png" alt="Hotel Logo" class="w-32 mb-4" />
        <p class="text-sm leading-relaxed">
          We are one of the top hotels in Bhaderwah and are known for Comfort, Safety, Luxury
          and Aesthetics in an affordable range.
        </p>
      </div>

      <!-- USEFUL LINKS -->
      <div>
        <h3 class="font-bold text-lg mb-4">USEFUL LINKS</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <RouterLink to="/" class="hover:text-purple-900">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-purple-900">About Us</RouterLink>
          </li>
          <li>
            <RouterLink to="/amenities" class="hover:text-purple-900">Amenities</RouterLink>
          </li>
          <li>
            <RouterLink to="/gallery" class="hover:text-purple-900">Gallery</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-purple-900">Contact Us</RouterLink>
          </li>
        </ul>
      </div>

      <!-- POLICY LINKS -->
      <div>
        <h3 class="font-bold text-lg mb-4">POLICY LINKS</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-purple-900">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-purple-900">Terms And Conditions</a></li>
          <li><a href="#" class="hover:text-purple-900">Refund</a></li>
        </ul>
      </div>

      <!-- CONTACT INFO -->
      <div>
        <h3 class="font-bold text-lg mb-4">CONTACT INFO</h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center gap-2">
            📞
            <a href="tel:+918899830959" class="hover:underline hover:text-purple-500">
              +91 88998 30959
            </a>
          </li>
          <li class="flex items-center gap-2">
            📧
            <a href="mailto:rajhotel1976@gmail.com" class="hover:underline hover:text-purple-500">
              rajhotel1976@gmail.com
            </a>
          </li>
          <li class="flex items-center gap-2">
            📍 <a href="https://maps.app.goo.gl/L4yarH51hJvvrbCj6">Nalthi, Bhadarwah, Jammu
              &
              Kashmir, 182222</a>
          </li>
          <li class="flex items-center gap-2">🕒 <span>24*7*365</span></li>
        </ul>
        <div class="flex gap-3 mt-4">
          <a href="https://www.facebook.com/share/1GYu7bRzP7/"
            class="bg-[#2C1A4D] text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#3b2470] transition">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/rajhotelbhaderwah/"
            class="bg-[#2C1A4D] text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#3b2470] transition">
            <i class="fab fa-instagram text-lg"></i>
          </a>
        </div>
      </div>

      <!-- MAP -->
      <div>
        <h3 class="font-bold text-lg mb-4">DIRECTIONS</h3>
        <iframe src="https://www.google.com/maps?q=32.9468068,75.7172122&z=15&output=embed" width="100%" height="200"
          style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-lg"></iframe>
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
