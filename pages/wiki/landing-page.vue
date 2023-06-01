<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">Introduction</h2>
    <h1 class="title">Landing Page</h1>
    <p class="quote">Welcome to the landing page of the wiki from Nextron!</p>

    <h2 class="before-button">Some things you might wanna know</h2>
    <nuxt-link to="/wiki/getting-help">
      <p class="button">Getting Help</p>
    </nuxt-link>
    <nuxt-link to="/wiki/commands">
      <p class="button">Commands</p>
    </nuxt-link>

    <nuxt-link to="/wiki/getting-help">
      <div class="next-button bottom-button">
        <span class="material-icons-outlined icon">chevron_right</span>
        <p class="direction">Next</p>
        <h2 class="page">Getting Help</h2>
      </div>
    </nuxt-link>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Nextron - Landing page',
  ogDescription: "Landing page, all the essential things you need to know.",
  ogImage: '/logo.png',
  ogUrl: 'https://essentialsp.tk/wiki/landing-page',
  ogType: 'website',
  ogSiteName: 'Nextron - Landing page',
  twitterTitle: 'Nextron - Landing page',
  twitterDescription: "Landing page, all the essential things you need to know.",
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
  title: 'Nextron - Landing page',
  meta: [{
    name: 'description', content: "Landing page, all the essential things you need to know."
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

<style>
.quote {
  margin: 30px;
  margin-inline: 0;
}

.before-button {
  font-size: 20px;
  padding-top: 30px;
}

.bottom-nav {
  display: block !important;
}

.next-button {
  float: left !important;
  margin-left: 0 !important;
  max-width: 890px;
  width: 100% !important;
  margin-bottom: 20px;
}
</style>