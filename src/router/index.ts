import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Amenities from '@/views/Amenities.vue'
import TariffView from '@/views/TariffView.vue'
import GalleryView from '@/views/GalleryView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactUsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/amenities', name: 'amenities', component: Amenities },
    { path: '/tariff', name: 'tariff', component: TariffView },
    { path: '/gallery', name: 'gallery', component: GalleryView },
    { path: '/blog', name: 'blog', component: BlogView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
})

export default router
