<template>
  <navbar />
  <main class="home">
    <header class="hero">

      <div class="d-flex justify-content-center align-items-center flex-column text-center">
        <p class="important">IMPORTANT: The project is currently being renamed!</p>
        <div class="interior">
          <h1 class="display-1">
            Your Essential superpower
          </h1>
          <div class="description">
            <h2 class="d-flex justify-content-center align-items-center lead mb-5">
              Nextron is a powerful Minecraft plugin which is meant to replace any other plugins you use at the
              moment. It has beautiful GUI's that simplifies the process to many users because you don't have to use
              complicated commands.
            </h2>
            <div class="d-flex justify-content-center">
              <div class="mr-3">
                <a title="Modrinth download" href="https://modrinth.com/plugin/nextron" rel="noopener" target="_blank"
                  class="btn">
                  Download
                  <span class="material-icons-outlined">chevron_right</span></a>
              </div>
              <div>
                <a title="Github source" href="https://github.com/0pandadev/nextron/" rel="noopener" target="_blank"
                  class="btn btn-outline-dark">
                  Source
                  <span class="material-icons-outlined">chevron_right</span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="container-hero">
          <img format="webp" width="1200" src="/hero.png" class="fluid-img" alt="hero" />
        </div>
      </div>
    </header>

    <section class="scroll-to">
      <header class="d-flex flex-column justify-content-center align-items-center text-center">
        <div class="display-2">
          See what you're able to do with Nextron.
        </div>
        <div class="text-muted">Some very powerful features.</div>
      </header>
      <div class="d-flex justify-content-center">
        <div class="scroll-to-container">
          <div class="section section-1 reveal-content">
            <div class="section-description">
              <div class="section-title">Custom GUI's.</div>
              <div class="section-text">Nextron includes custom guis where you can manage your homes, server warps,
                ranks and your user settings.</div>
              <ul class="subgrid-list">
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">done</span>
                  feature toggle
                </li>
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">done</span>
                  user settings
                </li>
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">done</span>
                  rank manager
                </li>
              </ul>
            </div>
            <img src="1.png" loading="lazy" alt="1" class="section-image">
          </div>
          <div class="section section-2 reveal-content">
            <img src="2.png" loading="lazy" alt="2" class="section-image">
            <div class="section-description">
              <div class="section-title">Tons of commands.</div>
              <div class="section-text">Nextron has tons of useful utility commands that makes your life as a player
                or server admin a lot easier.</div>
              <ul class="subgrid-list">
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">done</span>
                  utility
                </li>
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">done</span>
                  mechanics
                </li>
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">loop</span>
                  continuously expanding
                </li>
              </ul>
            </div>
          </div>
          <div class="section section-3 reveal-content">
            <div class="section-description">
              <div class="section-title">Multiple languages.</div>
              <div class="section-text">Nextron comes with two languages at the moment but theres planned to be more
                in the future. If you want to help me translate the project join my <a class="highlighted-text"
                  href="https://discord.gg/Y7SbYphVw9" target="_blank">discord.</a></div>
              <ul class="subgrid-list">
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">done</span>
                  english
                </li>
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">done</span>
                  german
                </li>
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">loop</span>
                  more to come
                </li>
              </ul>
            </div>
            <img src="3.png" loading="lazy" alt="3" class="section-image">
          </div>
          <div class="section section-4 reveal-content">
            <img src="4.png" loading="lazy" alt="4" class="section-image">
            <div class="section-description">
              <div class="section-title">Fully documented.</div>
              <div class="section-text">Nextron has an extensive wiki where every section is explained to you, from
                the commands to the permissions and
                configurations.</div>
              <ul class="subgrid-list">
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">done</span>
                  support
                </li>
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">done</span>
                  permissions
                </li>
                <li class="section-list-item"><span data-v-d7356cae=""
                    class="material-icons-outlined icon-done">done</span>
                  commands
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <foter />
</template>

<script lang="ts">
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      var reveals = document.querySelectorAll(".reveal-content");
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 300;
        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add("active");
        }
      }
    }
  }
}
</script>

<style>
@import url("~/css/index.css");
</style>