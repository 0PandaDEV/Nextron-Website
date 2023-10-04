<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">General</h2>
    <h1 class="title">Permissions</h1>

    <div class="text">
      <div class="quote">Permissions have always the same format for consisentsy.</div>
      <div class="10"></div>
      <code>nextron.{commandName}.{action}...</code>
      <div class="24"></div>
      <div class="quote">All the permissions to the correspoding commands are on the <nuxt-link to="/wiki/commands"
          class="highlighted-text">commands</nuxt-link> page.
      </div>
    </div>

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
      rel: 'canonical',
      href: 'https://essentialsp.tk/wiki/permissions',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>