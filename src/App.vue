<template>
  <div id="app">
    Hi there!
  </div>
</template>

<script>
const API_KEY = process.env.VUE_APP_APIKEY;
export default {
  name: "App",
  mounted() {
    console.log("API KEY", API_KEY);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
</style>
