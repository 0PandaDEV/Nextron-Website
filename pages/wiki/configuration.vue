<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">General</h2>
    <h1 class="title">Configuration</h1>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Nextron - Configuration',
  ogDescription: "Configuration, see any config values that you can modify.",
  ogImage: '/logo.png',
  ogUrl: 'https://essentialsp.tk/wiki/configuration',
  twitterTitle: 'Nextron - Configuration',
  twitterDescription: "Configuration, see any config values that you can modify.",
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
  title: 'Nextron - Configuration',
  meta: [{
    name: 'description', content: "Configuration, see any config values that you can modify."
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