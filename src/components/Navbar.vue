<template>
  <header class="w-full fixed top-0 left-0 z-50">
    <!-- Top Contact Bar -->
    <div class="bg-[#2C1A4D] text-white text-sm py-2">
      <div class="max-w-9/10 mx-auto px-4 flex justify-between items-center">
        <!-- Contact Info -->
        <div class="flex space-x-4">
          <span class="flex items-center gap-1">
            <i class="fas fa-envelope"></i>
            <a href="mailto:rajhotel1976@gmail.com" class="hover:underline">rajhotel1976@gmail.com</a>
          </span>
          <span class="flex items-center gap-1">
            <i class="fas fa-phone"></i>
            <a href="tel:+918899830959" class="hover:underline">+91 88998 30959</a>
          </span>
        </div>

        <!-- Social Links -->
        <div class="flex space-x-4">
          <!-- Facebook -->
          <a href="https://facebook.com" target="_blank"
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
            <i class="fab fa-facebook-f"></i>
          </a>

          <!-- Twitter -->
          <a href="https://twitter.com" target="_blank"
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white text-sky-500 border border-sky-500 hover:bg-sky-500 hover:text-white transition duration-300">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navbar -->
    <nav class="bg-white shadow-md">
      <div class="max-w-9/10 mx-auto px-4 py-1 flex justify-between items-center">
        <img src="../../public/remove background fr.png" alt="Raj Hotel Logo" class="h-20" />
        <!-- <h1 class="text-2xl font-bold text-[#2C1A4D]">Raj Hotel</h1> -->

        <ul class="hidden md:flex space-x-6">
          <li>
            <a href="#home" :class="[
              'relative text-gray-700 font-medium pb-4 transition duration-300',
              activeLink === 'home'
                ? 'text-blue-600 font-semibold after:w-full'
                : 'hover:text-[#2c1a4deb] hover:after:w-full',
            ]" @click="setActive('home')">
              Home
              <span class="absolute left-0 bottom-0 h-0.5 bg-[#2c1a4deb] w-0 transition-all duration-300"
                :class="activeLink === 'home' ? 'w-full' : 'group-hover:w-full'"></span>
            </a>
          </li>

          <li>
            <a href="#about" :class="[
              'relative text-gray-700 font-medium pb-4 transition duration-300',
              activeLink === 'about'
                ? 'text-blue-600 font-semibold after:w-full'
                : 'hover:text-[#2c1a4deb] hover:after:w-full',
            ]" @click="setActive('about')">
              About Us
              <span class="absolute left-0 bottom-0 h-0.5 bg-[#2c1a4deb] w-0 transition-all duration-300"
                :class="activeLink === 'about' ? 'w-full' : ''"></span>
            </a>
          </li>

          <li>
            <a href="#amenities" :class="[
              'relative text-gray-700 font-medium pb-4 transition duration-300',
              activeLink === 'amenities'
                ? 'text-blue-600 font-semibold after:w-full'
                : 'hover:text-[#2c1a4deb] hover:after:w-full',
            ]" @click="setActive('amenities')">
              Amenities
              <span class="absolute left-0 bottom-0 h-0.5 bg-[#2c1a4deb] w-0 transition-all duration-300"
                :class="activeLink === 'amenities' ? 'w-full' : ''"></span>
            </a>
          </li>

          <li>
            <a href="#tariff" :class="[
              'relative text-gray-700 font-medium pb-4 transition duration-300',
              activeLink === 'tariff'
                ? 'text-blue-600 font-semibold after:w-full'
                : 'hover:text-[#2c1a4deb] hover:after:w-full',
            ]" @click="setActive('tariff')">
              Tariff
              <span class="absolute left-0 bottom-0 h-0.5 bg-[#2c1a4deb] w-0 transition-all duration-300"
                :class="activeLink === 'tariff' ? 'w-full' : ''"></span>
            </a>
          </li>

          <li>
            <a href="#gallery" :class="[
              'relative text-gray-700 font-medium pb-4 transition duration-300',
              activeLink === 'gallery'
                ? 'text-blue-600 font-semibold after:w-full'
                : 'hover:text-[#2c1a4deb] hover:after:w-full',
            ]" @click="setActive('gallery')">
              Gallery
              <span class="absolute left-0 bottom-0 h-0.5 bg-[#2c1a4deb] w-0 transition-all duration-300"
                :class="activeLink === 'gallery' ? 'w-full' : ''"></span>
            </a>
          </li>

          <li>
            <a href="#blog" :class="[
              'relative text-gray-700 font-medium pb-4 transition duration-300',
              activeLink === 'blog'
                ? 'text-blue-600 font-semibold after:w-full'
                : 'hover:text-[#2c1a4deb] hover:after:w-full',
            ]" @click="setActive('blog')">
              Blog
              <span class="absolute left-0 bottom-0 h-0.5 bg-[#2c1a4deb] w-0 transition-all duration-300"
                :class="activeLink === 'blog' ? 'w-full' : ''"></span>
            </a>
          </li>

          <li>
            <a href="#rooms" :class="[
              'relative text-gray-700 font-medium pb-4 transition duration-300',
              activeLink === 'rooms'
                ? 'text-blue-600 font-semibold after:w-full'
                : 'hover:text-[#2c1a4deb] hover:after:w-full',
            ]" @click="setActive('rooms')">
              Rooms
              <span class="absolute left-0 bottom-0 h-0.5 bg-[#2c1a4deb] w-0 transition-all duration-300"
                :class="activeLink === 'rooms' ? 'w-full' : ''"></span>
            </a>
          </li>

          <li>
            <a href="#contact" :class="[
              'relative text-gray-700 font-medium pb-4 transition duration-300',
              activeLink === 'contact'
                ? 'text-blue-600 font-semibold after:w-full'
                : 'hover:text-[#2c1a4deb] hover:after:w-full',
            ]" @click="setActive('contact')">
              Contact Us
              <span class="absolute left-0 bottom-0 h-0.5 bg-[#2c1a4deb] w-0 transition-all duration-300"
                :class="activeLink === 'contact' ? 'w-full' : ''"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref } from "vue";

const activeLink = ref("home");
const setActive = (link) => (activeLink.value = link);
</script>
