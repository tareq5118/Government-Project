<script setup>
import { ref } from "vue";
import AppContainer from "./AppContainer.vue";
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
const props = defineProps({
  mobile: { type: Boolean, default: false },
});

</script>
<template>
  <nav  class="  max-w-full overflow-x-hidden h-full bg-Primary ">
    <AppContainer>
      <ul
        class="bg-Primary py-1 md:flex md:items-center md:gap-3 o md:h-15 md:static absolute w-full duration-700 ease-in-out"
        :class="[props.mobile ? 'left-0  ' : 'hidden ']"
      >
        <li
          class="text-white text-bold font-medium my-2  pe-2 py-4 md:py-0 md:border-l hover:cursor-pointer last-of-type:border-0 transition border-border md:border-b-0 md:border-l-white hover:bg-hover hover:md:bg-inherit  px-2  "
          v-for="link in Links"
          ,
          :v-key="link.name"
        >
          <nuxt-link  class="" @click="$emit('close')"  :to="link.link">{{ link.name }}
            
          </nuxt-link>
        </li>
      </ul>

    </AppContainer>
  </nav>
</template>
