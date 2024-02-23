<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">General</h2>
    <h1 class="title">Configuration</h1>

    <div class="text">
      <div class="quote">The configuration is the way we configure the plugin. In here you can find multiple keys you can
        edit. One of them is the language.</div>
      <div class="s10"></div>
      <code># currently available en, de</code>
      <br>
      <code class="colored-code">lanugage:</code><code class="code-green">{language}</code>
      <div class="s18"></div>
      <div class="quote">This can be either set to <code class="green">en</code> or <code class="green">de</code> at the
        moment. Or
        change it ingame
        with the command.</div>
      <div class="s10"></div>
      <code class="colored-code">/language</code><code class="code-green">{language}</code>

      <div class="s18"></div>
      <div class="line"></div>
      <div class="s18"></div>

      <div class="quote">Also there is the <code class="green">join_message</code> and
        <code class="green">leave_message</code>
      </div>
      <div class="s10"></div>
      <code class="colored-code">join_message:</code><code class="code-green">"&2[&a+&2] &7%p"</code>
      <br>
      <code class="colored-code">leave_message:</code><code class="code-green">"&4[&c-&4] &7%p"</code>
      <div class="s18"></div>
      <div class="quote">In this case the <code>%p</code> represents the spot where the player name is placed<br>if you
        want to use color codes go in your terminal and type <code>color ?</code> to get a list.</div>

      <div class="s10"></div>
      <code>Color Code Ussage: &{colorCode}</code>
      <div class="s24"></div>
      <div class="quote">All the other keys should not be touched as they are managed by the plugin itself.</div>
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
  ogImage: '/logo.webp',
  ogUrl: 'https://nextron.pandadev.net/wiki/configuration',
  ogType: 'website',
  ogSiteName: 'Nextron - Configuration',
  twitterTitle: 'Nextron - Configuration',
  twitterDescription: "Configuration, see any config values that you can modify.",
  twitterImage: '/logo.webp',
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
      rel: 'canonical',
      href: 'https://nextron.pandadev.net/wiki/configuration',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>