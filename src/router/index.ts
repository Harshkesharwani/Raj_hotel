import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Amenities from '@/views/Amenities.vue'
import TariffView from '@/views/TariffView.vue'
import GalleryView from '@/views/GalleryView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactUsView.vue'
import Booking from '@/views/Booking.vue'
import PaymentPage from '@/views/PaymentPage.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TermsConditions from '@/views/TermsConditions.vue'
import RefundPolicy from '@/views/RefundPolicy.vue'
// import Admin from '@/views/admin/AdminView.vue'
// import ManageRooms from '@/views/admin/ManageRoomsView.vue'
// import ManageImages from '@/views/admin/ManageImagesView.vue'
// import ManageBookings from '@/views/admin/ManageBookingsView.vue'

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
    { path: '/booking', component: Booking },
    { path: '/payment', component: PaymentPage },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/terms-conditions', component: TermsConditions },
    { path: '/refund-policy', component: RefundPolicy },
    // {
    //   path: '/admin',
    //   component: Admin,
    //   children: [
    //     { path: 'rooms', component: ManageRooms },
    //     { path: 'images', component: ManageImages },
    //     { path: 'bookings', component: ManageBookings },
    //   ]
    // },
  ],
})

export default router
