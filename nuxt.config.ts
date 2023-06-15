// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/robots", "nuxt-simple-sitemap", "@nuxt/image"],

  devtools: {
    enabled: true,
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
});
