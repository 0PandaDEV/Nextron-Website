// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    '@nuxt/image'
  ],

  devtools: true,

  app: {
    head: {
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-ZP030NNLMF', async: true }
      ]
    }
  },

  plugins: ['~/plugins/google-analytics.js']
})
