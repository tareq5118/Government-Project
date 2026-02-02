<template>
  <section class="py-10 md:py-12  mb-10 md:w-[85%] md:mx-auto">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold  mb-8 t">
        الخدمات
      </h2>

      <p class=" text-lg mb-8 max-w-3xl">
        نسعى إلى تيسير كافة الإجراءات الدبلوماسية والقنصلية للمواطنين في الداخل والمغتربين حول العالم.
      </p>
<hr class="border-gray-800 my-7">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 bg-white mt-4 lg:grid-cols-4 gap-6">
        <div 
          v-for="service in services" 
          :key="service.title" 
          class="bg-secondary my-4 py-8 px-6 pb-16 flex flex-col gap-3 rounded-lg   "
        >
          <h3 class="text-xl font-semibold mb-3 line-clamp-1">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {{ service.description }}
          </p>
          <!-- <NuxtLink 
            :to="service.link" 
            class="text-syria-red hover:underline font-medium"
          >
            عرض المزيد →
          </NuxtLink> -->
          <div class="shrink-0  ">

              <ButtonUI >عرض المزيد</ButtonUI>
          </div>
        </div>
      </div>

      <div class="text-center mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <NuxtLink to="/missions" class="bg-syria-green text-white py-4 rounded hover:bg-opacity-90">
          بعثاتنا في الخارج
        </NuxtLink>
        <NuxtLink to="/offices" class="bg-official-dark text-white py-4 rounded hover:bg-opacity-90">
          مكاتب الوزارة
        </NuxtLink>
        <NuxtLink to="/services" class="bg-syria-red text-white py-4 rounded hover:bg-opacity-90">
          جميع الخدمات
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonUI from './ui/ButtonUI.vue';

const services = ref([
  {
    id: 1,
    title: 'التسجيل القنصلي',
    description: 'تسجيل بيانات المواطنين السوريين ومن في حكمهم المقيمين في بلد البعثة لدى البعثة الدبلوماسية.',
    link: '#'
  },
  {
    id: 2,
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة الدبلوماسية.',
    link: '#'
  },
  {
    id: 3,
    title: 'تجديد جواز السفر (بدل عن منتهي)',
    description: 'تجديد جواز السفر للمواطنين السوريين المقيمين في الخارج عبر البعثة الدبلوماسية.',
    link: '#'
  },
  {
    id: 4,
    title: 'إصدار جواز سفر (بدل عن فاقد أو تالف)',
    description: 'إصدار جواز سفر بدل فاقد أو تالف للمواطنين السوريين المقيمين في الخارج.',
    link: '#'
  },
  {
    id: 5,
    title: 'تنظيم الوكالات في البعثات الدبلوماسية',
    description: 'تنظيم الوكالات لدى البعثة الدبلوماسية لاستخدامها داخل الجمهورية العربية السورية.',
    link: '#'
  },
  {
    id: 6,
    title: 'عزل الوكالات في البعثات الدبلوماسية',
    description: 'عزل الوكالات المنظمة لدى البعثة أو المنظمة داخل سورية.',
    link: '#'
  },
  {
    id: 7,
    title: 'تصديق الوكالات الصادرة من البلد المضيف',
    description: 'تصديق الوكالات الصادرة خارج سورية لدى البعثات لاستخدامها داخل الجمهورية.',
    link: '#'
  },
  {
    id: 8,
    title: 'تصديق الوثائق الصادرة من داخل سورية',
    description: 'تصديق الوثائق (وكالات، تجارية، مستندات) لدى الوزارة أو مكاتبها للاستخدام خارج سورية.',
    link: '#'
  },
  {
    id: 9,
    title: 'تصديق الوثائق الصادرة من خارج سورية',
    description: 'تصديق الوثائق الصادرة خارج سورية لدى الوزارة أو مكاتبها للاستخدام داخل سورية.',
    link: '#'
  }
])

useHead({
  title: 'الخدمات القنصلية | وزارة الخارجية والمغتربين',
  meta: [
    {
      name: 'description',
      content: 'قائمة الخدمات القنصلية المقدمة من وزارة الخارجية والمغتربين: جوازات السفر، التسجيل القنصلي، تصديق الوثائق، الوكالات وغيرها.'
    }
  ]
})
</script>