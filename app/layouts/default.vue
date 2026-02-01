<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import NewsSection from '~/components/NewsSection.vue';
import ServicesSection from '~/components/ServicesSection.vue';
import MainNav from '~/components/ui/MainNav.vue';
import TapBar from '~/components/ui/TapBar.vue';

</script>

<template>
    <div>
        <!-- <h3>this is components default </h3> -->
        <TapBar/>
        <MainNav class="hidden md:block"/>
        <ServicesSection/>
        <NewsSection/> 
        <Footer/>
    </div>
</template>