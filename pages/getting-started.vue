<template>
  <NuxtLayout name="page">
    <div id="center-it">
      <h1 class="display-2" id="title">Getting started</h1>
      <h2 class="lead" id="lead">Get to know exactly how to setup Nextron</h2>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Nextron - Getting started',
  ogDescription: "Get to know exactly how to setup Nextron",
  ogImage: '/logo.png',
  ogUrl: 'https://nextron.tk',
  ogType: 'website',
  ogSiteName: 'Nextron - Getting started',
  twitterTitle: 'Nextron - Getting started',
  twitterDescription: "Get to know exactly how to setup Nextron",
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
  title: 'Nextron - Getting started',
  meta: [{
    name: 'description', content: "Get to know exactly how to setup Nextron"
  }],
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://essentialsp.tk/getting-started',
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
#center-it {
  align-items: center;
  text-align: center;
  justify-content: center;
}

#title {
  font-size: 52px;
}

#lead {
  margin-top: 16px;
}
</style>