<template>
  <section class="py-10 md:py-12 bg-light-bg dark:bg-gray-900 mb-10 md:w-[92%] md:mx-auto">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold  mb-8 text-official-dark">
        الخدمات
      </h2>

      <p class=" text-lg mb-8 max-w-3xl text-gray-700 dark:text-gray-300">
        نسعى إلى تيسير كافة الإجراءات الدبلوماسية والقنصلية للمواطنين في الداخل والمغتربين حول العالم.
      </p>

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="service in services" 
          :key="service.title" 
          class="bg-secondary py-8 px-6 pb-16 flex flex-col gap-3 rounded-lg   border border-gray-200"
        >
          <h3 class="text-xl font-semibold mb-3 text-syria-green">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
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
    title: 'التسجيل القنصلي',
    description: 'تسجيل بيانات المواطنين السوريين المقيمين في الخارج لدى البعثة الدبلوماسية.',
    link: '/services/التسجيل-القنصلي'
  },
  {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  }, {
    title: 'إصدار جواز سفر لأول مرة',
    description: 'منح جواز سفر لأول مرة للمواطنين السوريين المقيمين في الخارج عبر البعثة.',
    link: '/services/إصدار-جواز-سفر'
  },
])
</script>