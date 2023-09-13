// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/robots", "nuxt-simple-sitemap", "@nuxt/image"],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      script: [
        {
          src: "https://umami-pandadev.vercel.app/script.js",
          async: true,
          "data-website-id": "72ea9501-3b4c-4202-a406-857bf85833b2",
        },
      ],
    },
  },
  site: {
    url: "https://essentialsp.tk",
  },
});
