<template>
  <div id="app">
    <div class="search-box"></div>
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

.search-box {
  position: absolute;
  width: 632px;
  height: 92px;
  left: 404px;
  top: 194px;

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #f8f8f8;
  box-shadow: 0px 2px 10px rgba(8, 21, 62, 0.15);
  border-radius: 16px;
}
</style>
