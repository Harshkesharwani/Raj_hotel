<template>
  <div class="max-w-7xl mx-auto px-6 py-20">
    <h1 class="text-4xl font-bold mb-10 text-brand-purple text-center">
      Blog Articles
    </h1>
    <!-- Blog Detail Section (below grid) -->
    <transition name="slide-fade" mode="out-in">
      <div v-if="selectedPost" key="detail"
        class="bg-white p-8 rounded-2xl shadow-xl absolute mx-auto max-w-4xl mt-12 left-0 right-0 z-10">
        <button class="mb-6 text-brand-purple font-semibold hover:underline" @click="selectedPost = null">
          ← Back to all blogs
        </button>

        <h2 class="text-3xl font-bold mb-4 text-gray-900">
          {{ selectedPost.title }}
        </h2>
        <img :src="selectedPost.image" alt="Blog Detail Image" class="w-full max-h-96 object-cover rounded-xl mb-6" />
        <p class="text-gray-700 leading-relaxed text-lg">
          {{ selectedPost.content }}
        </p>
      </div>
    </transition>
    <!-- Blog Grid -->
    <transition-group name="fade-slide" tag="div" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" appear>
      <div v-for="post in blogPosts" :key="post.id" @click="selectPost(post)"
        class="cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
        <img :src="post.image" alt="Blog image" class="w-full h-52 object-cover" />
        <div class="p-5">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">
            {{ post.title }}
          </h2>
          <p class="text-gray-600 text-sm line-clamp-3">
            {{ post.summary }}
          </p>
        </div>
      </div>
    </transition-group>


  </div>
</template>

<script setup>
import { ref } from "vue";

const blogPosts = ref([
  {
    id: 1,
    title: "Exploring the Hidden Valleys of Kargil",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
    summary:
      "Discover the untouched beauty of Kargil’s valleys, where peace and nature come together in breathtaking harmony.",
    content:
      "Kargil, often overshadowed by its neighbor Ladakh, holds immense beauty in its untouched valleys. From the crystal-clear streams to the warm hospitality of locals, Kargil offers a perfect blend of adventure and serenity. Visit Drass, Suru Valley, and Mulbekh Monastery for an unforgettable experience.",
  },
  {
    id: 2,
    title: "A Royal Stay at The Royal Kargil",
    image:
      "https://images.unsplash.com/photo-1551888419-7e7b4aabf7c8?w=800&h=600&fit=crop",
    summary:
      "Experience luxury redefined in the heart of Kargil — where traditional charm meets modern elegance.",
    content:
      "At The Royal Kargil, every corner exudes comfort and sophistication. From the beautifully designed rooms to the exquisite dining experience, every detail is curated for guest delight. Enjoy panoramic views, warm service, and an ambiance that feels like home.",
  },
  {
    id: 3,
    title: "Winter in Ladakh: A Journey Through Snow",
    image:
      "https://images.unsplash.com/photo-1549887534-2e31b3212831?w=800&h=600&fit=crop",
    summary:
      "When the snow falls, Ladakh transforms into a winter wonderland waiting to be explored.",
    content:
      "Winter in Ladakh is a magical experience — from frozen rivers to snow-capped monasteries. Adventure seekers can try the Chadar Trek or simply enjoy a warm cup of butter tea while admiring the icy vistas.",
  },
  {
    id: 4,
    title: "The Art of Ladakhi Cuisine",
    image:
      "https://images.unsplash.com/photo-1565958011705-44e211f09c94?w=800&h=600&fit=crop",
    summary:
      "Dive into the flavors of Ladakh — from Thukpa and Skyu to the famous butter tea that defines local hospitality.",
    content:
      "Ladakhi food tells stories of survival and tradition. Influenced by Tibetan flavors, dishes like momos, thukpa, and skyu are local staples. Pair it with butter tea or chang, and you have a truly authentic experience.",
  },
  {
    id: 5,
    title: "Spiritual Retreats in the Himalayas",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
    summary:
      "Reconnect with your soul amidst the ancient monasteries and tranquil landscapes of Ladakh.",
    content:
      "From Hemis to Thiksey Monastery, Ladakh offers peaceful escapes for those seeking mindfulness. Attend morning prayers, meditate in the crisp mountain air, and feel your mind rejuvenate.",
  },
  {
    id: 6,
    title: "Adventure Escapes: Trekking in Zanskar",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=600&fit=crop",
    summary:
      "For adventure lovers, Zanskar Valley offers some of the most thrilling treks in the Himalayas.",
    content:
      "Zanskar is a paradise for trekkers — dramatic landscapes, narrow gorges, and frozen river crossings. The Chadar Trek is the most famous route, offering a once-in-a-lifetime experience walking on the frozen Zanskar River.",
  },
  {
    id: 7,
    title: "Gourmet Dining Experience",
    image: "https://images.unsplash.com/photo-1565958011705-44e211f09c94?w=800&h=600&fit=crop",
    summary: "Indulge in fine dining surrounded by breathtaking mountain views.",
    content:
      "At our luxury resort, every meal is an art form. Enjoy handcrafted dishes made from fresh, local ingredients paired with stunning views of the Himalayas.",
  },
  {
    id: 8,
    title: "Luxury Stay Redefined",
    image: "https://images.unsplash.com/photo-1549887534-2e31b3212831?w=800&h=600&fit=crop",
    summary: "Experience unmatched comfort and elegance in every room.",
    content:
      "Each suite is designed to combine modern comfort with natural beauty — panoramic windows, cozy interiors, and thoughtful amenities await you.",
  },
  {
    id: 9,
    title: "Adventure & Serenity",
    image: "https://images.unsplash.com/photo-1551888419-7e7b4aabf7c8?w=800&h=600&fit=crop",
    summary: "Discover thrilling outdoor adventures balanced with peaceful retreats.",
    content:
      "Whether you seek adrenaline or relaxation, our resort offers the perfect mix — from guided treks to serene spa sessions.",
  },
]);

const selectedPost = ref(null);

function selectPost(post) {
  selectedPost.value = post;
}
</script>

<style scoped>
/* Fade + Slide animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Blog detail slide */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Line clamp (for short descriptions) */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
