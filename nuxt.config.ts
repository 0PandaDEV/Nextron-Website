// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "nuxt-schema-org",
    "@nuxt/image"
  ],
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nextron",
      script:
        process.env.NODE_ENV === "production"
          ? [
            {
              src: "https://plausible.pandadev.net/js/script.outbound-links.tagged-events.js",
              defer: true,
              "data-domain": "nextron.pandadev.net",
            },
          ]
          : [],
    },
  },
  site: {
    url: "https://nextron.pandadev.net",
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Nextron',
      url: 'https://nextron.pandadev.net',
      logo: 'https://nextron.pandadev.net/logo.webp'
    }
  },
  image: {
    quality: 80,
    format: ["webp"]
  }
});
