<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">General</h2>
    <h1 class="title">Commands</h1>



    <div class="bottom-nav">

      <nuxt-link to="../wiki/getting-help" class="btn_link">
        <div class="previous-button bottom-button">
          <span class="material-icons-outlined icon">chevron_right</span>
          <div class="text-container">
            <p class="direction">Previous - Introduction</p>
            <h2 class="page">Getting Help</h2>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="../wiki/permissions" class="btn_link">
        <div class="next-button bottom-button">
          <span class="material-icons-outlined icon">chevron_right</span>
          <p class="direction">Next</p>
          <h2 class="page">Permissions</h2>
        </div>
      </nuxt-link>

    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Nextron - Commands',
  ogDescription: "Commands, see all the commands in the plugin.",
  ogImage: '/logo.png',
  ogUrl: 'https://essentialsp.tk/wiki/commands',
  ogType: 'website',
  ogSiteName: 'Nextron - Commands',
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