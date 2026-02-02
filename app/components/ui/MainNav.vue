<script setup>
import { ref } from "vue";
let Links = ref([
  {
    name: "الرئيسية",
    link: "/",
  },
  {
    name: "الأخبار",
    link: "/news",
  },
  {
    name: "الخدمات",
    link: "/services",
  },
  {
    name: "البعثات الدبلوماسية",
    link: "/missions",
  },
  {
    name: "شؤون المنطمات الدولية",
    link: "/",
  },
  {
    name: "تواصل معنا",
    link: "/contact",
  },
]);
// let openMenu=ref(false);
const props = defineProps({
  mobile: { type: Boolean, default: false },
});
// defineEmits(['close'])
// function menuOpen(){
//     openMenu.value=!openMenu.value;
// }
</script>
<template>
  <nav class=" h-full bg-Primary">
    <!-- <ul
      class="md:flex w-full h-11 py-8 md:items-center md:gap-3 px-4 sm:w-[92%] mx-auto"
    > -->
    <!-- <span  class="absolute md:hidden  hover:cursor-pointer text-4xl" @click="menuOpen()">
{{ openMenu?'😑':'🟰' }}
        
    </span> -->
    <ul
      class="bg-Primary mx-auto py-1 md:flex md:items-center md:gap-3 md:w-[85%] md:mx-auto md:h-15 md:static absolute w-full duration-700 ease-in-out"
      :class="[props.mobile ? 'left-0 ' : '-left-full ']"
    >
      <li
        class="text-white text-bold font-medium my-2  pe-2 md:border-l hover:cursor-pointer last-of-type:border-0 transition border-border md:border-b-0 md:border-l-white hover:bg-hover hover:md:bg-inherit  px-2  "
        v-for="link in Links"
        ,
        :v-key="link.name"
      >
        <nuxt-link class="" :to="link.link">{{ link.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
