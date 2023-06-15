// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/robots", "nuxt-simple-sitemap", "@nuxt/image"],
  devtools: true,
  app: {
    head: {
      script: [
        {
          src: "/stats/js/script.js",
          dataApi: "/stats/api/event",
          dataDomain: "https://essentialsp.tk",
        },
      ],
    },
  },
});
