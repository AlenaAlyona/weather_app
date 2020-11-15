<template>
  <div id="app" class="container">
    <div class="search-box">
      <div class="image-box inlined">
        <img alt="cloud" class="cloud" src="./assets/cloud.png" />
        <img alt="sun" class="sun" src="./assets/sun.png" />
      </div>
      <div class="country-selector inlined">
        <v-select
          v-model="selectedCountry"
          label="alpha2Code"
          :options="countries"
          :reduce="(country) => country.alpha2Code"
        >
          <template slot="option" slot-scope="option">
            <img :src="option.flag" />
            {{ option.alpha2Code }}
          </template>
          <template v-slot:selected-option="option">
            <img class="flag-image" :src="option.flag" />
            {{ option.alpha2Code }}
          </template>
        </v-select>
      </div>
      <div class="search-city inlined">
        <input
          class="search-bar"
          v-model="city"
          type="text"
          placeholder="Please enter your location"
        />
      </div>
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
      selectedCountry: "",
      city: "",
    };
  },
  mounted() {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=alpha2Code;flag")
      .then((response) => (this.countries = response.data));
  },
  updated() {
    console.log(this.selectedCountry);
  },
  // methods: {
  //   onSearch(search, loading) {
  //     loading(true);
  //     this.search(loading, search, this);
  //   },
  //   search: debounce((loading, search, vm) => {
  //     fetch(
  //       `https://api.weatherbit.io/v2.0/forecast/daily?city=${escape(search)},${
  //         this.selectedCountry
  //       }&key=0d4893ef8ddf44c89e8f5b49c7b5e67d`
  //     ).then((res) => {
  //       res.json().then((json) => (vm.options = json.items));
  //       loading(false);
  //     });
  //   }, 350),
  // },
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
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-box {
  width: 632px;
  height: 92px;
  display: inline-block;

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #f8f8f8;
  box-shadow: 0px 2px 10px rgba(8, 21, 62, 0.15);
  border-radius: 16px;
  /* display: grid;
  gap: 1rem;
  grid-auto-flow: column; */
  align-items: center;
  /* justify-content: space-around; */
}
.inlined {
  height: 48px;
  margin-top: 22px;
  margin-bottom: 22px;
}

.image-box {
  display: inline-block;
  width: 48px;
  height: 48px;
  left: 426px;
  /* top: 215px; */
  background-color: aqua;
}

.cloud {
  width: 40px;
  height: 22.35px;
  /* left: 432px;
  top: 232px; */

  color: #b5c7ff;
  opacity: 0.5;
}

.sun {
  width: 20.58px;
  height: 18px;
  /* left: 428px;
  top: 224px; */

  color: #ffd600;
}

.flag-image {
  height: auto;
  max-width: 2.5rem;
  /* margin-right: 1rem; */
}

.d-center {
  display: flex;
  align-items: center;
}

.country-selector img {
  width: auto;
  max-height: 23px;
  margin-right: 0.5rem;
}

.v-select .dropdown li {
  border-bottom: 1px solid rgba(112, 128, 144, 0.1);
  width: 95px;
}

.v-select .dropdown li:last-child {
  border-bottom: none;
  width: 95px;
}

.v-select .dropdown li a {
  padding: 10px 20px;
  width: 95px;
  font-size: 1.25em;
  color: #3c3c3c;
}

.v-select .dropdown-menu .active > a {
  color: #fff;
}

.country-selector .vs__search::placeholder,
.country-selector .vs__dropdown-toggle,
.country-selector .vs__dropdown-menu {
  border: none;
  text-transform: lowercase;
  font-variant: small-caps;
  width: 95px;
}

.country-selector {
  display: inline-block;
}

.search-city {
  width: 425px;
  /* height: 48px; */
  display: inline-block;
  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}

.search-city .search-bar {
  display: block;
  width: 425px;
  padding: 15px;

  /* color: #313131; */
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
</style>
