<template>
  <navbar />
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
</style>