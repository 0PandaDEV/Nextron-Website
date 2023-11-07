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
          src: "https://plausible.pandadev.net/js/script.js",
          defer: true,
          "data-domain": "essentialsp.tk",
        },
      ],
    },
  },
  site: {
    url: "https://essentialsp.tk",
  },
});
