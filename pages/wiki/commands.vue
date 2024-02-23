<template>
  <NuxtLayout name="wiki">
    <h2 class="pre-title">General</h2>
    <h1 class="title">Commands</h1>

    {{ introduction }}

    <div class="s16"></div>

    <div class="line"></div>
    <div class="s14"></div>

    <div class="gamemode">
      <h2 class="purple">Gamemode</h2>
      <div class="s4"></div>
      <code class="green">{{ gamemode }}</code>
      <div class="s8"></div>
      <div class="quote">This command can also be shortened with <code>/gm</code></div>
      <div class="s12"></div>
      <h3>Permissions</h3>
      <code>nextron.gamemode</code>
      <div class="s4"></div>
      <code>nextron.gamemode.other</code>
    </div>

    <div class="seperator">
      <div class="s18"></div>
      <div class="line"></div>
      <div class="s14"></div>
    </div>

    <div class="enderchest">
      <h2 class="purple">Enderchest</h2>
      <div class="s4"></div>
      <code class="green">{{ enderchest }}</code>
      <div class="s8"></div>
      <div class="quote">This command can also be shortened with <code>/ec</code>
        <br>
        the variant with [player] is admin only
      </div>
      <div class="s12"></div>
      <h3>Permissions</h3>
      <code>nextron.enderchest</code>
      <div class="s4"></div>
      <code>nextron.enderchest.other</code>
    </div>

    <div class="seperator">
      <div class="s18"></div>
      <div class="line"></div>
      <div class="s14"></div>
    </div>

    <div class="warp">
      <h2 class="purple">Warps</h2>
      <div class="s4"></div>
      <code class="green">{{ warp }}</code>
      <div class="s4"></div>
      <code class="green">{{ setwarp }}</code>
      <div class="s4"></div>
      <code class="green">{{ delwarp }}</code>
      <div class="s4"></div>
      <code class="green">{{ renamewarp }}</code>
      <div class="s8"></div>
      <div class="quote">The warp command can also be shortened with <code>{{ warpShort }}</code>
      </div>
      <div class="s12"></div>
      <h3>Permissions</h3>
      <code>nextron.warp</code>
      <div class="s4"></div>
      <code>nextron.setwarp</code>
      <div class="s4"></div>
      <code>nextron.delwarp</code>
      <div class="s4"></div>
      <code>nextron.renamewarp</code>
    </div>

    <div class="seperator">
      <div class="s18"></div>
      <div class="line"></div>
      <div class="s14"></div>
    </div>

    <div class="home">
      <h2 class="purple">Homes</h2>
      <div class="s4"></div>
      <code class="green">{{ home }}</code>
      <div class="s4"></div>
      <code class="green">{{ sethome }}</code>
      <div class="s4"></div>
      <code class="green">{{ delhome }}</code>
      <div class="s4"></div>
      <code class="green">{{ renamehome }}</code>
      <div class="s8"></div>
      <div class="quote">The warp command can also be shortened with <code>{{ homeShort }}</code>
      </div>
      <div class="s12"></div>
      <h3>Permissions</h3>
      <code>nextron.home</code>
      <div class="s4"></div>
      <code>nextron.sethome</code>
      <div class="s4"></div>
      <code>nextron.delhome</code>
      <div class="s4"></div>
      <code>nextron.renamehome</code>
    </div>

    <div class="seperator">
      <div class="s18"></div>
      <div class="line"></div>
      <div class="s14"></div>
    </div>

    <!-- <div class="ranks">
      <h2 class="purple">Rank</h2>
      <div class="s4"></div>
      <code class="green">{{ home }}</code>
      <div class="s4"></div>
      <code class="green">{{ sethome }}</code>
      <div class="s4"></div>
      <code class="green">{{ delhome }}</code>
      <div class="s4"></div>
      <code class="green">{{ renamehome }}</code>
      <div class="s8"></div>
      <div class="quote">The warp command can also be shortened with <code>{{ homeShort }}</code>
      </div>
      <div class="s12"></div>
      <h3>Permissions</h3>
      <code>nextron.home</code>
      <div class="s4"></div>
      <code>nextron.sethome</code>
      <div class="s4"></div>
      <code>nextron.delhome</code>
      <div class="s4"></div>
      <code>nextron.renamehome</code>
    </div> -->

    <div class="s24"></div>
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
var introduction = "<> = reqired, [] = optional"

var gamemode = "/gamemode <gamemode> [player]";

var enderchest = "/enderchest [player]";

var warp = "/warp <warp>";
var warpShort = "/w <warp>";
var setwarp = "/setwarp <warp>";
var delwarp = "/delwarp <warp>";
var renamewarp = "/renamewarp <warp>";

var home = "/home <home>";
var homeShort = "/h <home>";
var sethome = "/sethome <home>";
var delhome = "/delhome <home>";
var renamehome = "/renamehome <home>";

useSeoMeta({
  ogTitle: 'Nextron - Commands',
  ogDescription: "Commands, see all the commands in the plugin.",
  ogImage: '/logo.webp',
  ogUrl: 'https://essentialsp.tk/wiki/commands',
  ogType: 'website',
  ogSiteName: 'Nextron - Commands',
  twitterTitle: 'Nextron - Commands',
  twitterDescription: "Commands, see all the commands in the plugin.",
  twitterImage: '/logo.webp',
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
      rel: 'canonical',
      href: 'https://essentialsp.tk/wiki/commands',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>