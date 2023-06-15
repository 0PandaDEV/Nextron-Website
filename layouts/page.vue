<template>
  <navbar />
  <div class="bg-page"></div>
  <div id="interior">
    <slot />
  </div>
  <!-- <foter /> -->
</template>

<style>
body {
  overflow-y: scroll;
  box-sizing: border-box;
  background: #0d1117;
}

#interior {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  position: relative;
  width: 100%;
  margin: auto;
  padding: 50px 2rem 0;
}
</style>