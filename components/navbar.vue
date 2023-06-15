<template>
  <div class="navbar">
    <div class="header">
      <div class="icon">
        <NuxtLink id="home" to="/">
          <nuxt-img src="/logo-big.png" alt="Nextron Logo" class="header-img" />
        </NuxtLink>
      </div>
      <div class="spacer"></div>
      <div class="issueslink hidenav">
        <NuxtLink title="Github issues" to="https://github.com/0pandadev/nextron/issues" target="_blank">
          <p class="issues">Issues</p>
        </NuxtLink>
      </div>
      <div class="getting_started hidenav">
        <NuxtLink title="getting started" to="/getting-started">
          <p class="getting-started">Getting Started</p>
        </NuxtLink>
      </div>
      <div class="devider hidenav"></div>
      <div class="getting_started">
        <NuxtLink title="Wiki landing page" to="/wiki/landing-page">
          <p class="issues">Wiki</p>
        </NuxtLink>
      </div>
      <div class="downloadlink">
        <NuxtLink class="btn" id="wiki" title="Modrinth download" to="https://modrinth.com/plugin/nextron"
          target="_blank">
          Download
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 600px) {

  /*for Desktop*/
  .navbar {
    padding: 2rem 2rem 0;
  }

  .header-img {
    left: 20px;
  }

  .header {
    height: 4.5rem;
    font-size: 14px !important;
  }

  .issues {
    margin-right: 24px;
  }

  .btn {
    height: 2.75rem;
    font-size: 16px;
    line-height: 42px;
    padding: 0 16px;
  }

  #wiki {
    height: 38px !important;
    font-size: 14px !important;
    line-height: 35px !important;
    padding-inline: 12px;
  }
}

@media (max-width: 600px) {

  /*for Mobile*/
  .navbar {
    padding: 3.4vh 2rem 0;
    padding: 1.8rem 1.8rem 0;
  }

  .header {
    height: 60px !important;
    font-size: 11px !important;
    line-height: 12px !important;
  }

  .header-img {
    width: 23px;
    height: 23px;
    left: 18px;
  }

  .header {
    grid-template-columns: 40px auto 0px 0px 0px 50px 85px !important;
  }

  .hidenav {
    opacity: 0 !important;
    pointer-events: none;
  }

  .issues {
    margin-right: 19px;
    font-size: 12px;
  }

  .getting-started {
    font-size: 12px;
  }

  .btn {
    height: 35.75px !important;
    line-height: 33px !important;
    font-size: 13px !important;
    padding: 0 13px;
    font-weight: 600;
  }

  #wiki {
    height: 35px !important;
    font-size: 12px !important;
    line-height: 31px !important;
    padding: 1px !important;
    padding-inline: 10px !important;
  }
}

.navbar {
  position: relative;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  background-color: #0D1116;
}

.header {
  padding-inline: 1rem;
  max-width: 1136px;
  background-color: #161b22;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 15px;
  box-shadow: 0 4px 40px #0c1016a6;
  display: grid;
  place-items: center;
  white-space: nowrap;
  grid-template-columns: 40px auto 70px 110px 53px 50px 100px;
}

.devider {
  width: 1px;
  height: 60%;
  background-color: #21262d;
}

.header-img {
  top: 50%;
  position: absolute;
  transform: translate(0, -50%);
  height: 30px;
}

.issues,
.getting-started {
  color: white;
}

.btn {
  white-space: nowrap;
  border-radius: 0.313rem;
  font-weight: 600;
  background-color: #b180ff;
  border-color: #b180ff;
  color: #fff;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  white-space: nowrap;
}

.btn.btn-outline-dark {
  background-color: transparent;
  text-transform: none !important;
  letter-spacing: normal !important;
  border-color: #21262d;
  color: #f0f6fc;
}

a {
  font-family: inherit;
  text-decoration: none;
}
</style>