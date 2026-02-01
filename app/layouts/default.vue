<script setup lang="ts">
import MainNav from '~/components/MainNav.vue';
import TapBar from '~/components/TapBar.vue';

</script>

<template>
    <div>
        <!-- <h3>this is components default </h3> -->
        <TapBar/>
        <MainNav class="hidden md:block"/>
    </div>
</template>