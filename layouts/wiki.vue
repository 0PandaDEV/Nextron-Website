<template>
  <navbar />
  <div class="bg-wiki"></div>
  <div class="wiki-hero">
    <sidebar />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>

</script>

<style>
@import url("~/css/wiki.css");

.bg-wiki {
  background: #0d1117 !important;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>