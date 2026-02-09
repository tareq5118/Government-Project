<template>
  <div
    class="relative mt-6 h-125 flex items-center  overflow-hidden "
  >
    <TransitionGroup name="fade"  tag="div" class="absolute inset-0">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        v-show="currentSlide === index"
        class="absolute inset-0"
      >
        <div
          class="relative   gap-2 flex flex-col-reverse md:flex-row justify-between items-center bg-[url(/images/star.png)] "
        >
          <div
            class="flex flex-col justify-between  items-start md:pr-12 md:mr-12   px-2  text-black"
          >
            <p class="text-sm md:text-base lg:text-lg opacity-90 sm:mb-2">
              {{ slide.date }}
            </p>
            <h2
              class="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold max-w-4xl my-2 line-clamp-2 md:line-clamp-3 leading-relaxed"
            >
              {{ slide.title }}
            </h2>

            <NuxtLink
            :to="slide.link || '#'"
            class="sm:mt-8 mt-3 px-6.5 py-3 hover:bg-Primary bg-black  text-white font-medium rounded-lg text-sm text-center transition "
            >
            عرض الخبر
        </NuxtLink>
            <!-- <ButtonUI class="mt-4 " :link="slide.link">عرض الخبر</ButtonUI> -->
          </div>
          <img
            :src="slide.image"
            loading="lazy"
            alt="خبر"
            class="w-full h-full object-cover md:rounded-2xl rounded-xl"
          />
        </div>
      </div>
    </TransitionGroup>

    <button
      @click="prevSlide"
      class="hidden md:block absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 z-10 border border-black text-gray-300 hover:bg-Primary hover:text-white p-1 md:p-3 rounded-full transition"
      aria-label="السابق"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="size-5"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <button
      @click="nextSlide"
      class="hidden md:block absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 z-10 border border-black text-gray-300 hover:bg-Primary hover:text-white p-1 md:p-3 rounded-full transition"
      aria-label="التالي"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="size-5"
      >
        <path
          fill-rule="evenodd"
          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="currentSlide = index"
        :class="[
          'w-3 h-3 rounded-full transition-all',
          currentSlide === index ? 'bg-syria-green w-8' : 'bg-white/60 hover:bg-white/80'
        ]"
        aria-label="الذهاب إلى شريحة"
      ></button>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ButtonUI from "./ButtonUI.vue";

const slides = ref([
  {
    image: "/images/01KGEM2V2NQTGF1VN6GAPGE9QT-featured_image_thumb.webp",
    date: "2026-01-28",
    title:
      " فخامة رئيس الجمهورية السيد أحمد الشرع، يرافقه وزير الخارجية والمغتربين السيد أسعد حسن الشيباني، ووزير الدفاع اللواء مرهف أبو قصرة، يلتقي الرئيس الروسي السيد فلاديمير بوتين وكبار المسؤولين في قصر الكرملين بالعاصمة موسكو",
    link: "/news",
  },
  {
    image: "/images/01KEKDGY3KHQVWXSRHD20ZPX0W-featured_image_thumb.webp",
    date: "2026-01-25",
    title:
      "وزير الخارجية والمغتربين يتلقى اتصالًا هاتفيًّا من وزير خارجية المملكة الأردنية الهاشمية",
    link: "/news",
  },
]);

const currentSlide = ref(0);
let interval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

onMounted(() => {
  interval = setInterval(nextSlide, 6000);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
