<template>
  <navbar />
  <div class="bg-page"></div>
  <div class="center">
    <div class="page-content">
      <slot />
    </div>
  </div>
</template>

<style>
.bg-page {
  background: #0d1117 !important;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.page-content {
  display: flex;
  max-width: 1200px;
  padding: 32px;
}
</style>