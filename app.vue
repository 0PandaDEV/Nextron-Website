<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
@font-face {
  font-family: MonaSans;
  src: url("~/fonts/MonaSans.woff2") format("woff2");
  font-display: swap;
}

@font-face {
  font-family: MonaSansExpandedSemiBold;
  src: url("~/fonts/MonaSansExpandedSemiBold.woff2") format("woff2");
  font-display: swap;
}

@font-face {
  font-family: Material Icons;
  src: url("~/fonts/Material.woff2") format("woff2");
  font-display: swap;
}

* {
  margin: 0px;
  padding: 0px;
  scroll-behavior: smooth;
  scrollbar-color: #b180ff #0d1117;
  scrollbar-width: thin;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #0d1117;
}

::-webkit-scrollbar-thumb {
  background: #b180ff;
}

::-webkit-scrollbar-thumb:window-inactive {
  background: #b180ff;
}

html {
  width: 100%;
  height: 100%;
}

body {
  box-sizing: border-box;
  color: white;
  line-height: 1.5;
  letter-spacing: 0.01rem;
  font-family: MonaSans !important;
  background-color: #171B21;
}
</style>