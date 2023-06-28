// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/robots", "nuxt-simple-sitemap", "@nuxt/image"],

  devtools: {
    enabled: true,
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  app: {
    head: {
      script: [
        {
          type: "text/javascript",
          src: "https://web-sdk.smartlook.com/recorder.js",
          charset: "utf-8",
          async: true,
        },
        {
          type: "text/javascript",
          innerHTML:
            "smartlook('init', 'cc797f15bf9bdb3b144ff31b8874f45e9d97c83e', { region: 'eu' });",
        },
      ],
    },
  },
});
