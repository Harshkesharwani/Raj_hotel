<template>
  <header class="w-full fixed top-0 left-0 z-50">
    <!-- Top Contact Bar -->
    <div class="bg-[#2C1A4D] text-white text-sm py-2">
      <div class="max-w-9/10 mx-auto px-4 flex justify-between items-center">
        <!-- Contact Info -->
        <div class="flex space-x-4">
          <!-- Email -->
          <a href="mailto:rajhotel1976@gmail.com" class="flex items-center gap-1 hover:underline">
            <!-- Show icon only on small screens -->
            <i class="fas fa-envelope"></i>
            <span class="hidden sm:inline">rajhotel1976@gmail.com</span>
          </a>

          <!-- Phone -->
          <a href="tel:+918899830959" class="flex items-center gap-1 hover:underline">
            <i class="fas fa-phone"></i>
            <span class="hidden sm:inline">+91 88998 30959</span>
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex space-x-3">
          <!-- Facebook -->
          <a href="https://www.facebook.com/share/1GYu7bRzP7/" target="_blank" rel="noopener noreferrer"
            class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1877F2] text-white shadow-md hover:bg-[#0d5bd9] hover:scale-110 transition-transform duration-300">
            <i class="fab fa-facebook-f text-sm sm:text-base"></i>
          </a>

          <!-- Instagram -->
          <a href="https://www.instagram.com/rajhotelbhaderwah/" target="_blank" rel="noopener noreferrer"
            class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white shadow-md hover:scale-110 transition-transform duration-300">
            <i class="fab fa-instagram text-lg"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navbar -->
    <nav class="bg-white shadow-md">
      <div class="max-w-9/10 mx-auto px-4 py-2 flex justify-between items-center">
        <img src="../../public/remove background fr.png" alt="Raj Hotel Logo" class="h-14 sm:h-20" />

        <ul class="hidden md:flex space-x-6">
          <li v-for="item in navItems" :key="item.name">
            <RouterLink :to="item.to" :class="[
              'relative text-gray-700 font-medium pb-4 transition duration-300',
              activeLink === item.name
                ? 'text-blue-600 font-semibold after:w-full'
                : 'hover:text-[#2c1a4deb] hover:after:w-full',
            ]" @click="setActive(item.name)">
              {{ item.label }}
              <span class="absolute left-0 bottom-0 h-0.5 bg-[#2c1a4deb] w-0 transition-all duration-300"
                :class="activeLink === item.name ? 'w-full' : ''"></span>
            </RouterLink>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-[#2C1A4D] text-2xl focus:outline-none" @click="toggleMenu">
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-if="isMenuOpen"
        class="md:hidden bg-white border-t border-gray-200 flex flex-col items-center py-3 space-y-3 shadow-md">
        <RouterLink v-for="item in navItems" :key="item.name" :to="item.to"
          class="text-gray-700 font-medium text-lg hover:text-[#2c1a4deb] transition"
          @click="() => { setActive(item.name); toggleMenu(); }">
          {{ item.label }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const activeLink = ref("home");
const isMenuOpen = ref(false);

const setActive = (link) => (activeLink.value = link);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);

const navItems = [
  { name: "home", label: "Home", to: "/" },
  { name: "about", label: "About Us", to: "/about" },
  { name: "amenities", label: "Amenities", to: "/amenities" },
  { name: "tariff", label: "Tariff", to: "/tariff" },
  { name: "gallery", label: "Gallery", to: "/gallery" },
  { name: "blog", label: "Blog", to: "/blog" },
  { name: "contact", label: "Contact Us", to: "/contact" },
];
</script>

<style scoped>
/* Smooth mobile menu animation (optional) */
@media (max-width: 768px) {
  nav .md\\:hidden {
    transition: all 0.3s ease;
  }
}
</style>
