<script setup>
defineProps(['news'])
</script>
<template>

    <article>

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
        <p class="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
            {{ news.summary }}
        </p>
    </article>
        
</template>