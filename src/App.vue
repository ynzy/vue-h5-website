<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  created() {}
};
</script>

<style>
@media screen and (min-width: 620px) {
  /* pc */
  html,
  body,
  #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    overflow: hidden !important;
  }
}
@media screen and (max-width: 620px) {
  /* 手机 */
  html,
  body,
  #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    overflow: auto !important;
  }
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
