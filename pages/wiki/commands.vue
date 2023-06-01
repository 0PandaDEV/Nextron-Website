<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">General</h2>
    <h1 class="title">Commands</h1>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Nextron - Commands',
  ogDescription: "Commands, see all the commands in the plugin.",
  ogImage: '/logo.png',
  ogUrl: 'https://essentialsp.tk/wiki/commands',
  twitterTitle: 'Nextron - Commands',
  twitterDescription: "Commands, see all the commands in the plugin.",
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
  title: 'Nextron - Commands',
  meta: [{
    name: 'description', content: "Commands, see all the commands in the plugin."
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