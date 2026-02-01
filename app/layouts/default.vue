<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import NewsSection from '~/components/NewsSection.vue';
import ServicesSection from '~/components/ServicesSection.vue';
import MainNav from '~/components/ui/MainNav.vue';
import TapBar from '~/components/ui/TapBar.vue';

</script>

<template>
<div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900" dir="rtl">        <!-- <h3>this is components default </h3> -->
      <header class="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-sm">
      <TapBar />
    </header>
    <MainNav />
       <main class="grow">
<slot/>
       </main>
        <Footer/>
    </div>
</template>