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
          src: "https://plausible.pandadev.net/js/script.tagged-events.outbound-links.js",
          defer: true,
          "data-domain": "nextron.pandadev.net",
        },
      ],
    },
  },
  site: {
    url: "https://nextron.pandadev.net",
  },
});
