// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
  ],
  devtools: true,
  head: {
    script: [
      {
        src: 'http://analytics.h-supertools.com/js/script.js',
        async: true,
        defer: true,
        hid: 'ZwSg9rf6GA',
        'data-host': 'https://analytics.h-supertools.com',
        'data-dnt': false
      }
    ]
  }
})
