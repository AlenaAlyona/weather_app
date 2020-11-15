<template>
  <div id="app">
    <div class="search-box">
      <div class="image-box">
        <img alt="cloud" class="cloud" src="./assets/cloud.png" />
        <img alt="sun" class="sun" src="./assets/sun.png" />
      </div>
      <div>
        <v-select class="selected" label="alpha2Code" :options="countries">
          <template slot="option" slot-scope="option">
            <img :src="option.flag" />
            {{ option.alpha2Code }}
          </template>
          <template v-slot:selected-option="option">
            <img :src="option.flag" />
            {{ option.alpha2Code }}
          </template>
        </v-select>
      </div>
      <div class="select-country"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// const API_KEY = process.env.VUE_APP_APIKEY;

export default {
  name: "App",
  data() {
    return {
      countries: [],
      selectedCountry: null,
    };
  },
  mounted() {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=alpha2Code;flag")
      .then((response) => (this.countries = response.data));
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
  display: flex;
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
  width: 48px;
  height: 48px;
  left: 426px;
  top: 215px;
  background-color: aqua;
}

.cloud {
  width: 40px;
  height: 22.35px;
  left: 432px;
  top: 232px;

  color: #b5c7ff;
  opacity: 0.5;
}

.sun {
  width: 20.58px;
  height: 18px;
  left: 428px;
  top: 224px;

  color: #ffd600;
}

img {
  height: auto;
  max-width: 2.5rem;
  /* margin-right: 1rem; */
}

.d-center {
  display: flex;
  align-items: center;
}

.selected img {
  width: auto;
  max-height: 23px;
  margin-right: 0.5rem;
}

.v-select .dropdown li {
  border-bottom: 1px solid rgba(112, 128, 144, 0.1);
  width: 120px;
}

.v-select .dropdown li:last-child {
  border-bottom: none;
  width: 120px;
}

.v-select .dropdown li a {
  padding: 10px 20px;
  /* width: 100%; */
  width: 120px;
  font-size: 1.25em;
  color: #3c3c3c;
}

.v-select .dropdown-menu .active > a {
  color: #fff;
}

/* .selected .vs__dropdown-menu {
  width: 120px;
  height: 48px;
  left: 486px;
  top: 396px;
} */
.selected .vs__search::placeholder,
.selected .vs__dropdown-toggle,
.selected .vs__dropdown-menu {
  border: none;
  text-transform: lowercase;
  font-variant: small-caps;
  width: 95px;
}
</style>
