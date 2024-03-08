<template>
  <div class="bottom" id="bottom">
    <section class="cta text-center">
      <div class="container-footer">
        <div class="interior-footer d-flex justify-content-between">
          <div class="h1">Ready to get started?</div>
          <div class="d-flex">
            <div class="mr-3">
              <a title="Modrinth download" href="https://modrinth.com/plugin/nextron" target="_blank" class="btn plausible-event-name=Download+footer">
                Download
                <span class="material-icons-outlined">chevron_right</span></a>
            </div>
            <div>
              <a title="Github issues" href="https://github.com/0pandadev/nextron/" class="btn btn-outline-dark"
                target="_blank">
                Code
                <span class="material-icons-outlined">chevron_right</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer position-relative">
      <div class="container-footer">
        <div class="d-block d-md-flex justify-content-between">
          <div class="logo-wrapper">
            <a title="Home" href="/">
              <nuxt-img format="webp" loading="lazy" alt="Nextron Logo" src="/logo-big.png" lazy="loaded" width="28"
                height="28" />
            </a>
          </div>
          <div class="menu text-small">
            <div class="column">
              <div>
                <a title="Home" class="item" href="/"> Home </a>
              </div>
              <div>
                <a title="Modrinth download" class="item" href="https://modrinth.com/plugin/nextron" target="_blank">
                  Download
                </a>
              </div>
              <div>
                <a title="Getting started" class="item" href="/getting-started">
                  Getting Started
                </a>
              </div>
            </div>
            <div class="column">
              <div>
                <a title="Privacy" class="item" href="https://example.com"> Privacy </a>
              </div>
              <div>
                <a title="Terms" class="item" href="https://example.com"> Terms </a>
              </div>
              <div>
                <a title="FAQ" class="item" href="https://example.com"> FAQs </a>
              </div>
            </div>
            <div class="column">
              <div>
                <a title="Github repository" class="item" href="https://github.com/0pandadev/nextron/" target="_blank">
                  GitHub
                </a>
              </div>
              <div>
                <a title="Github issues" class="item" href="https://github.com/0pandadev/nextron/issues" target="_blank">
                  Issues
                </a>
              </div>
              <div>
                <a title="Wiki landing page" class="item" href="wiki/landing-page">
                  Wiki
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-footer small d-flex justify-content-between">
          <div class="text-small text-muted">© 2024 Nextron. MIT License.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bg" id="footer-bg"></div>
</template>

<script lang="ts">
export default {
  mounted() {
    var bg = document.getElementById("footer-bg")
    var bottom = document.getElementById("bottom")
    console.log("test")
    bg.style.height = '453px'
  }
}
</script>

<style>
@media (min-width: 600px) {

  /*for Desktop*/
  .h1 {
    font-size: 36px;
    line-height: 50px;
    font-family: ClashDisplay;
  }

  .text-small {
    font-size: 12px;
  }

  .footer {
    padding-top: 48px;
    padding-bottom: 32px;
    position: relative;
  }

  .menu {
    grid-column-gap: 7rem;
  }

  .item {
    font-size: 14px;
    line-height: 21px;
  }
}

@media (max-width: 600px) {

  /*for Mobile*/
  .footer {
    padding-top: 39px;
    padding-bottom: 26px;
    position: relative;
  }
}

section {
  display: block;
}

.bottom {
  background-color: #161b22;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  max-width: 1150px;
}

@media (max-width: 1240px) {
  .bottom {
    padding: 0 2rem;
  }
}

@media (max-width: 730px) {
  .interior-footer {
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;
    flex-direction: column;
  }

  .h1 {
    font-size: 29px;
    line-height: 41px;
    font-family: ClashDisplay;
    margin-bottom: 2rem;
  }

  .d-md-flex {
    display: flex;
    flex-direction: column;
  }

  .logo-wrapper {
    margin-bottom: 3rem;
  }

  .menu {
    grid-template-columns: 1px;
    grid-column-gap: 4rem;
  }

  .text-small {
    font-size: 12px;
  }

  .item {
    font-size: 11px;
    line-height: 17px;
  }
}

.interior-footer {
  padding: 80px 0;
  align-items: center;
}

.container-footer {
  max-width: 1200px;
  margin: auto;
}

.footer {
  border-top: 1px solid #21262d;
}

.container-footer-text {
  max-width: 1200px;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: auto;
  margin-left: auto;
}

.item {
  color: #b1b3b5 !important;
  white-space: nowrap;
}

.menu {
  display: grid;
  grid-template-columns: auto auto auto auto;
  float: right;
}

.cta {
  width: 100%;
}

.h1 {
  white-space: nowrap;
  color: #f0f6fc;
}

.sub-footer {
  border-top: 1px solid #21262d;
  padding-top: 2rem;
  margin-top: 3rem;
}

.h1 {
  white-space: nowrap;
  color: #f0f6fc;
}

.footer-bg {
  width: 100%;
  height: 100%;
  background-color: #171B21;
  position: relative;
  bottom: 0;
  z-index: -1;
  left: 0;
}
</style>
