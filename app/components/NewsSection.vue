<script setup>
import ButtonUI from './ui/ButtonUI.vue';


const newsItems = ref([
  {
    id: 1,
    date: "2026-01-18",
    title:
      "بيان صادر عن وزارة الخارجية والمغتربين في الجمهورية العربية السورية",
    summary: "تؤكد الجمهورية العربية السورية على وحدة الشعب السوري وتماسكه...",
    link: "/news/بيان-صادر-عن-الوزارة",
    image: "/images/01KBMDQK85NR0S3R26J915TV3H-featured_image_thumb.webp",
  },
  {
    id: 2,
    date: "2026-01-18",
    title:
      "بيان صادر عن وزارة الخارجية والمغتربين في الجمهورية العربية السورية",
    summary: "تؤكد الجمهورية العربية السورية على وحدة الشعب السوري وتماسكه...",
    link: "/news/بيان-صادر-عن-الوزارة",
    image: "/images/01KBMDZ3JR5RVYM43WRQKVKATF-featured_image_thumb.webp",
  },
  {
    id: 3,
    date: "2026-01-18",
    title:
      "بيان صادر عن وزارة الخارجية والمغتربين في الجمهورية العربية السورية",
    summary: "تؤكد الجمهورية العربية السورية على وحدة الشعب السوري وتماسكه...",
    link: "/news/بيان-صادر-عن-الوزارة",
    image: "/images/01K042ENG86WPF1363SZBZ94T7.png",
  },
  {
    id: 4,
    date: "2026-01-18",
    title:
      "بيان صادر عن وزارة الخارجية والمغتربين في الجمهورية العربية السورية",
    summary: "تؤكد الجمهورية العربية السورية على وحدة الشعب السوري وتماسكه...",
    link: "/news2/بيان-صادر-عن-الوزارة",
    image: "/images/01KC9J6W31PGTRJ8TW12PCMF1R-featured_image_thumb.webp",
  },
]);
</script>
<template>
  <section
    class="py-10 md:py-12 md:w-[92%] md:mx-auto bg-white rounded-lg mb-10"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">
أخبار وزارة الخارجية      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="news in newsItems"
          :key="news.id"
          class="p-6 rounded-[10px] mx-auto shadow hover:shadow-md transition-shadow"
        >
          <img
            class="mb-4 rounded-2xl w-96 h-62.5 hover:scale-105 hover:cursor-pointer"
            :src="news.image"
            alt=""
          />
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {{ news.date }}
          </p>
          <h3
            class="text-lg font-semibold mb-3 line-clamp-2 hover:cursor-pointer"
          >
            {{ news.title }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
            {{ news.summary }}
          </p>
         <ButtonUI :link="news.link">أقرأ المزيد</ButtonUI>
        </div>
      </div>

      <!-- <div class="text-center mt-8">
        <NuxtLink
          to="/news"
          class="inline-block  px-8 py-3 rounded hover:bg-opacity-90 transition"
        >
          جميع الأخبار
        </NuxtLink>
      </div> -->
    </div>
  </section>
</template>
