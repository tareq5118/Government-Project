<script setup>
import NewsSection     from '~/components/NewsSection.vue'
import contact from './contact.vue';
import ServicesSection  from '~/components/ServicesSection.vue'
import HomeSlider from '~/components/ui/HomeSlider.vue';
useHead({
  title: 'وزارة الخارجية والمغتربين - الجمهورية العربية السورية',
  meta: [
    {
      name: 'description',
      content: 'الموقع الرسمي لوزارة الخارجية والمغتربين في الجمهورية العربية السورية - الأخبار، الخدمات القنصلية، البعثات الدبلوماسية'
    },
    {
      name: 'keywords',
      content: 'وزارة الخارجية, الخارجية السورية, خدمات قنصلية, جواز سفر, بعثات دبلوماسية, سوريا'
    }
  ]
})
</script>
<template>
    <HomeSlider />
<ServicesSection/>
<contact/>
 
</template>

