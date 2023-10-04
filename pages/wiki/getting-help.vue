<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">Introduction</h2>
    <h1 class="title">Getting Help</h1>

    <div class="text">
      <p class="quote">If you have any problems create a Issue on the <a
          href="https://github.com/0PandaDEV/Nextron/issues" target="_blank" class="highlighted-text">Github
          issue</a> tracker or join our <a href="https://discord.gg/Y7SbYphVw9" target="_blank"
          class="highlighted-text">Discord
          server.</a></p>
    </div>

    <div class="bottom-nav">

      <nuxt-link to="../wiki/landing-page" class="btn_link">
        <div class="previous-button bottom-button">
          <span class="material-icons-outlined icon">chevron_right</span>
          <div class="text-container">
            <p class="direction">Previous</p>
            <h2 class="page">Landing Page</h2>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="../wiki/commands" class="btn_link">
        <div class="next-button bottom-button">
          <span class="material-icons-outlined icon">chevron_right</span>
          <p class="direction">Next - General</p>
          <h2 class="page">Commands</h2>
        </div>
      </nuxt-link>

    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Nextron - Getting help',
  ogDescription: "Getting help, all the links you have to know for support.",
  ogImage: '/logo.png',
  ogUrl: 'https://essentialsp.tk/wiki/getting-help',
  ogType: 'website',
  ogSiteName: 'Nextron - Getting help',
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
      rel: 'canonical',
      href: 'https://essentialsp.tk/wiki/getting-help',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>