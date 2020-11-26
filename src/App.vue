<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
div::-webkit-scrollbar,
ul::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
div::-webkit-scrollbar-track,
ul::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.5);
}
div::-webkit-scrollbar-thumb,
ul::-webkit-scrollbar-thumb {
  background-color: #515a6e;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
}
</style>
