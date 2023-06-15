// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "@nuxt/image",
    "nuxt-vercel-analytics",
  ],
  devtools: {
    enabled: true,
  },
});
