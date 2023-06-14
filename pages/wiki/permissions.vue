<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">General</h2>
    <h1 class="title">Permissions</h1>


    <div class="bottom-nav">

      <nuxt-link to="../wiki/commands" class="btn_link">
        <div class="previous-button bottom-button">
          <span class="material-icons-outlined icon">chevron_right</span>
          <div class="text-container">
            <p class="direction">Previous</p>
            <h2 class="page">Commands</h2>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="../wiki/configuration" class="btn_link">
        <div class="next-button bottom-button">
          <span class="material-icons-outlined icon">chevron_right</span>
          <p class="direction">Next</p>
          <h2 class="page">Configuration</h2>
        </div>
      </nuxt-link>

    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Nextron - Permissions',
  ogDescription: "Permissions, see all the permissions of the plugin.",
  ogImage: '/logo.png',
  ogUrl: 'https://essentialsp.tk/wiki/permissions',
  ogType: 'website',
  ogSiteName: 'Nextron - Permissions',
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