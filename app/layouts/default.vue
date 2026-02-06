<script setup lang="ts">
import Footer from "~/components/Footer.vue";
import NewsSection from "~/components/NewsSection.vue";
// import HomeSlider from "~/components/ui/HomeSlider.vue";
import MainNav from "~/components/ui/MainNav.vue";
import TapBar from "~/components/ui/TapBar.vue";

</script>

<template>
  <div class="min-h-screen flex flex-col" dir="rtl">
    <header class="sticky top-0 z-50 bg-white shadow-sm">
      <TapBar />
    </header>
    <MainNav />
    <!-- <HomeSlider /> -->
    <main class="grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
