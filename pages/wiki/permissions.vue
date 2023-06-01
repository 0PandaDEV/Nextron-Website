<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">General</h2>
    <h1 class="title">Permissions</h1>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Nextron - Permissions',
  ogDescription: "Permissions, see all the permissions of the plugin.",
  ogImage: '/logo.png',
  ogUrl: 'https://essentialsp.tk/wiki/permissions',
  twitterTitle: 'Nextron - Permissions',
  twitterDescription: "Permissions, see all the permissions of the plugin.",
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
  title: 'Nextron - Permissions',
  meta: [{
    name: 'description', content: "Permissions, see all the permissions of the plugin."
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