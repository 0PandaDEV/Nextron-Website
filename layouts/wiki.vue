<template>
  <navbar id="navbar" />
  <div class="bg-wiki"></div>
  <div class="wiki-hero">
    <Sidebar />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@import '~/css/wiki.scss';

.bg-wiki {
  background: #0d1117 !important;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.wiki-hero {
  top: 104px;
}

@media (max-width: 600px) {
  .wiki-hero {
    top: 65px;
  }
}

.content {
  margin-bottom: 30px;
}

#navbar {
  position: fixed;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  background-color: #0d1117;
}
</style>