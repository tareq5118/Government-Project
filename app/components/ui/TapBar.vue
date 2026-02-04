<script setup>
import MainNav from "./MainNav.vue";

let openMenu = ref(false);
</script>
<template>
  <div
    class="flex justify-between bg-Primary  md:bg-white items-center mx-auto md:w-[85%] md:mx-auto h-full py-7.5  md:bg-[url(/images/star.png)]"
  >
    <div class="me-4 ms-0 md:mx-2">
      <nuxt-link to="/">
        <img
          class="w-auto h-10 sm:h-11 md:h-12 object-contain"
          src="/images/logo.svg"
          alt=""
        />
      </nuxt-link>
    </div>
    <div class="flex justify-between items-center">
      <div
        class="w-full border md:border-border border-white rounded-lg sm:rounded-xl py-2 px-2 flex justify-around items-center"
      >
        <input
          type="search"
          placeholder="البحث"
          class="outline-none text-sm placeholder-white md:placeholder-gray-600 sm:text-base sm:w-auto w-18"
        />
        <button class="hover:cursor-pointer">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4 sm:size-5 md:size-6 text-white md:text-Primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </button>
      </div>
      <button
        class="mx-4 hover:cursor-pointer text-sm sm:text-base md:block hidden"
      >
        English
      </button>
    </div>
    <span
      class="md:hidden left-0 hover:cursor-pointer mx-2 text-4xl"
      @click="openMenu = !openMenu"
    >
      <!-- <i :class="[openMenu?'bi bi-x':'bi bi-filter-left']"></i>
            -->
      <span v-if="!openMenu"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-8 md:text-Primary text-logo"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </span>
      <span v-else
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-8 md:text-Primary text-logo  rounded-xl border"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </span>
    </span>

    <div class="text-sm sm:text-base hover:cursor-pointer hidden">icons</div>
  </div>
  <div v-if="openMenu" class="bg-Primary ">
    <MainNav class="" :mobile="true" @close="openMenu = false" />
  </div>
</template>
