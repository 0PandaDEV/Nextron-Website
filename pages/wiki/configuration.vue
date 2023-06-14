<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">General</h2>
    <h1 class="title">Configuration</h1>

    <div class="text">
      <quote>The configuration is the way we configure the plugin. In here you can find multiple keys you can
        edit. One of them is the language.</quote>
      <div class="space-24"></div>
      <code># currently available en, de</code>
      <br>
      <code>lanugage: <green>{language}</green></code>
      <div class="space-18"></div>
      <quote>This can be either set to <code><green>en</green></code> or <code><green>de</green></code> at the moment. Or
        change it ingame
        with the command.</quote>
      <div class="space-12"></div>
      <code>/language <green>{language}</green></code>

      <div class="space-18"></div>
      <div class="line"></div>
      <div class="space-18"></div>

      <quote>Also there is the <code><green>join_message</green></code> and <code><green>leave_message</green></code>
      </quote>
      <div class="space-16"></div>
      <code>join_message: <green>"&2[&a+&2] &7%p"</green></code>
      <br>
      <code>leave_message: <green>"&4[&c-&4] &7%p"</green></code>
      <div class="space-18"></div>
      <quote>In this case the <code>%p</code> represents the spot where the player name is placed<br>if you
        want to use color codes go in your terminal and type <code>color ?</code> to get a list.</quote>

      <div class="space-12"></div>
      <code><purple>Ussage: &{colorCode}</purple></code>
      <div class="space-24"></div>
      <quote>All the other keys should not be touched as they are managed by the plugin itself.</quote>
    </div>

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