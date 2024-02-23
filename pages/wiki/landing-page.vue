<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">Introduction</h2>
    <h1 class="title">Landing Page</h1>
    <p id="quote">Welcome to the landing page of the wiki from Nextron!</p>

    <h2 class="before-button">Some things you might wanna know</h2>
    <nuxt-link to="/wiki/getting-help">
      <p class="button">Getting Help</p>
    </nuxt-link>
    <nuxt-link to="/wiki/commands">
      <p class="button">Commands</p>
    </nuxt-link>

    <nuxt-link to="/wiki/getting-help">
      <div class="next-button" id="bottom-button">
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
  ogImage: '/logo.webp',
  ogUrl: 'https://essentialsp.tk/wiki/landing-page',
  ogType: 'website',
  ogSiteName: 'Nextron - Landing page',
  twitterTitle: 'Nextron - Landing page',
  twitterDescription: "Landing page, all the essential things you need to know.",
  twitterImage: '/logo.webp',
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
      rel: 'canonical',
      href: 'https://essentialsp.tk/wiki/landing-page',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>

<style>
#quote {
  margin: 30px;
  margin-inline: 0;
}

.before-button {
  font-size: 20px;
  padding-top: 30px;
}

#bottom-button {
  background-color: transparent;
  border-radius: 5px;
  border-color: #2f3033;
  width: 100%;
  height: 75px;
  padding: 16px;
  border-style: solid;
  border-width: 1px;
  transition: all 0.2s;
  float: right;
  margin-top: 30px;
}

#bottom-button .icon {
  float: right;
  padding-top: 11px;
  font-size: 23px;
  color: #bec5ce;
}

#bottom-button:hover {
  transform: translateY(-3px);
}

#bottom-button:hover .page,
#bottom-button:hover .icon {
  color: #b180ff !important;
}

.bottom-nav {
  display: block !important;
}

.next-button {
  float: left !important;
  margin-left: 0 !important;
  max-width: 890px;
  width: 100% !important;
}
</style>