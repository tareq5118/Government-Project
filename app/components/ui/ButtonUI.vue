<script setup>
const props = defineProps(["link"]);
</script>
<template>
  <button>
    <nuxt-link
      :to="props.link"
      class="flex justify-between items-center gap-2 border border-gray-300 text-Primary hover:bg-Primary hover:text-white md:p-2.5 px-2 py-2.5 transition hover:cursor-pointer rounded-lg"
    >
      <span class="text-sm md:text-xl"><slot></slot></span>
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-3 mt-2"
        >
          <path
            fill-rule="evenodd"
            d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </nuxt-link>
  </button>
</template>
