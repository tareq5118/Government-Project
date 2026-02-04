import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/download.png",
        },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
