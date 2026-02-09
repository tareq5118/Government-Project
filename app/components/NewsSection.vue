<script setup>
import ButtonUI from './ui/ButtonUI.vue';
const props=defineProps(['newsItems'])


</script>
<template>
  <section
    class="py-10 md:py-6  bg-white rounded-lg mb-10"
  >
    <div class="container mx-auto px-4 sm:px-0">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">
أخبار وزارة الخارجية      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="news in props.newsItems"
          :key="news.id"
          class="p-6 rounded-[10px] mx-auto shadow hover:shadow-md transition-shadow gap-8"
        >
          <img
            class="mb-4 rounded-2xl w-full h-62.5 hover:scale-105 object-cover hover:cursor-pointer"
            :src="news.image"
            alt=""
            loading="lazy"
            width="370"
            height="250"
          />
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {{ news.date }}
          </p>
          <h3
            class="text-lg font-bold mb-4 line-clamp-2 hover:cursor-pointer"
          >
            {{ news.title }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
            {{ news.summary }}
          </p>
         <ButtonUI :link="`/news/${news.id}`">أقرأ المزيد</ButtonUI>
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
