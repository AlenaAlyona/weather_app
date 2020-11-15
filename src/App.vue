<template>
  <div id="app">
    <div class="search-box">
      <div class="image-box">
        <img alt="cloud" class="cloud" src="./assets/cloud.png" />
        <img alt="sun" class="sun" src="./assets/sun.png" />
      </div>
    </div>
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

.image-box {
  position: fixed;
  width: 48px;
  height: 48px;
  left: 426px;
  top: 215px;
}

.cloud {
  position: fixed;
  width: 40px;
  height: 22.35px;
  left: 432px;
  top: 232px;

  color: #b5c7ff;
  opacity: 0.5;
}

.sun {
  position: fixed;
  width: 20.58px;
  height: 18px;
  left: 428px;
  top: 224px;

  color: #ffd600;
}
</style>
