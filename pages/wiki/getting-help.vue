<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">Introduction</h2>
    <h1 class="title">Getting help</h1>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Nextron - Getting help',
  ogDescription: "Getting help, all the links you have to know for support.",
  ogImage: '/logo.png',
  ogUrl: 'https://essentialsp.tk/wiki/getting-help',
  twitterTitle: 'Nextron - Getting help',
  twitterDescription: "Getting help, all the links you have to know for support.",
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
  title: 'Nextron - Getting help',
  meta: [{
    name: 'description', content: "Getting help, all the links you have to know for support."
  }],
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>