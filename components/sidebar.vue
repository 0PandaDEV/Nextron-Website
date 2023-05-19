<template>
  <div class="sidenav">
    <button type="button" class="title collapsible">Introduction</button>
    <div class="introduction colab" style="display: block;">
      <ul class="border-before">
        <nuxt-link class="active" to="/wiki/landing-page">
          <li>Landing Page</li>
        </nuxt-link>
        <nuxt-link to="/wiki/getting-help">
          <li>Getting Help</li>
        </nuxt-link>
      </ul>
    </div>
    <button type="button" class="title collapsible">General</button>
    <div class="general colab" style="display: block;">
      <ul class="border-before">
        <nuxt-link to="/wiki/commands">
          <li>Commands</li>
        </nuxt-link>
        <nuxt-link to="/wiki/permissions">
          <li>Permissions</li>
        </nuxt-link>
        <nuxt-link to="/wiki/configuration">
          <li>Configuration</li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async mounted() {
    var coll = document.getElementsByClassName("collapsible");
    var colab = document.getElementsByClassName("colab");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active_colab");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }
}
</script>

<style>
@media (max-width: 600px) {

  /*for Mobile*/
  .sidenav {
    display: none !important;
  }
}

.sidenav::-webkit-scrollbar {
  background-color: transparent;
}

.sidenav::-webkit-scrollbar-thumb {
  background: transparent;
}

.sidenav::-webkit-scrollbar-thumb:window-inactive {
  background: transparent;
}

.sidenav {
  position: fixed;
  float: left;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px);
  overflow-y: scroll;
  scrollbar-width: none;
}

.sidenav .title {
  font-family: Inter;
  font-size: 16px;
  line-height: 24px;
  background: none;
  color: white;
  outline: none;
  border: none;
  text-align: left;
  font-weight: 500;
  letter-spacing: 0.2px;
  padding: 4px;
  padding-inline: 8px;
  border-radius: 5px;
  width: 180px;
  margin-top: 5px;
  font-weight: 700;
}

.sidenav .title:hover {
  background-color: #2c3035;
}

.sidenav .title::after {
  font-family: "Material Icons";
  content: "chevron_right";
  float: right;
  font-weight: 400;
  rotate: 90deg;
  transition: 0.2s;
}

.sidenav .title.active_colab::after {
  rotate: 0deg;
}

li {
  list-style: none;
  user-select: none;
  cursor: pointer;
  font-size: 14px;
  font-family: Inter;
  line-height: 32px;
  color: #cbd5e1;
  position: relative;
  margin-top: 6px;
  width: 180px;
  height: 32px;
  padding-left: 10px;
}

a:not(.router-link-active) li:hover {
  background-color: #2c3035;
  border-radius: 5px;
  border-color: #2c3035;
}

ul {
  margin-bottom: 1rem;
}

li.router-link-active {
  background-color: #2b2733a2;
  border-radius: 5px;
  border-color: #2b2733a2;
  color: #b180ff;
  font-weight: 600;
}

a.router-link-active>li {
  background-color: #2b2733a2;
  border-radius: 5px;
  border-color: #2b2733a2;
  color: #b180ff;
  font-weight: 600;
}

.button {
  background-color: transparent;
  border-radius: 5px;
  border-color: #2f3033;
  max-width: 890px;
  height: 65px;
  padding: 16px;
  border-style: solid;
  border-width: 1px;
  transition: all 0.2s;
  margin-top: 25px;
  color: #bec5ce;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
}

.button:hover {
  transform: translateY(-3px);
  color: #b180ff;
}
</style>