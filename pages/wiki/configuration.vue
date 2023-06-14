<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">General</h2>
    <h1 class="title">Configuration</h1>


    <nuxt-link to="../wiki/permissions" class="btn_link">
      <div class="previous-button bottom-button">
        <span class="material-icons-outlined icon">chevron_right</span>
        <div class="text-container">
          <p class="direction">Previous</p>
          <h2 class="page">Permissions</h2>
        </div>
      </div>
    </nuxt-link>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Nextron - Configuration',
  ogDescription: "Configuration, see any config values that you can modify.",
  ogImage: '/logo.png',
  ogUrl: 'https://essentialsp.tk/wiki/configuration',
  ogType: 'website',
  ogSiteName: 'Nextron - Configuration',
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