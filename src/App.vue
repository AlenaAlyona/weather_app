<template>
  <div id="app">
    <div class="container">
      <div class="search-box">
        <div class="image-box inlined">
          <img alt="logo" class="logo" src="./assets/logo.png" />
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
        <div class="search-city ">
          <input
            class="search-bar inlined"
            v-model="city"
            type="text"
            placeholder="Please enter your location"
            @keypress="fetchWeather"
          />
          <img alt="searchIcon" class="searchIcon" src="./assets/search.png" />
        </div>
      </div>
    </div>
    <div class="show-t">
      <Forecast :averageT="averageT" :dateToShow="getDate" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Forecast from "./components/Forecast";
const API_KEY = process.env.VUE_APP_APIKEY;

export default {
  name: "App",
  components: {
    Forecast,
  },
  data() {
    return {
      countries: [],
      selectedCountry: "",
      city: "",
      weather: [],
      allTen: null,
    };
  },
  mounted() {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=alpha2Code;flag")
      .then((response) => (this.countries = response.data));
  },
  methods: {
    fetchWeather(e) {
      if (e.key === "Enter") {
        axios
          .get(
            `https://api.weatherbit.io/v2.0/forecast/daily?city=${this.city},${this.selectedCountry}&key=${API_KEY}`
          )
          .then((res) => {
            this.weather = res.data.data.slice(0, 10);
            console.log("WEATHER", this.weather);
            this.allTen = this.weather.map((average) => average.temp);
          });
      }
    },
  },
  computed: {
    averageT: function() {
      if (this.allTen) {
        let sum = 0;
        for (let i = 0; i < this.allTen.length; i++) {
          sum += this.allTen[i];
        }
        let result = Math.round(sum / 10);
        console.log("RESULT", result);
        return result;
      }
      return null;
    },
    getDate: function() {
      if (this.allTen) {
        let firstDateRaw = this.weather[0].datetime;
        let lastDateRaw = this.weather[9].datetime;
        let newFirstDate = new Date(firstDateRaw).toString().split(" ");
        let newLastDate = new Date(lastDateRaw).toString().split(" ");
        let dateToShow =
          newFirstDate[1] +
          " " +
          newFirstDate[2] +
          " - " +
          newLastDate[2] +
          " " +
          newFirstDate[3];
        return dateToShow.toUpperCase();
      }
      return null;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

#app {
  position: absolute;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  overflow-y: scroll;
  margin: 0px;
  padding: 0px;
  background-size: 0vmax;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    linear-gradient(
      119.25deg,
      #102f7e -11.47%,
      #0c8dd6 3.95%,
      #1aa0ec 19.37%,
      #60c6ff 34.78%,
      #9bdbff 50.19%,
      #b4deda 65.61%,
      #ffd66b 81.02%,
      #ffc178 96.44%,
      #fe9255 111.85%
    );
  background-repeat: repeat-x;
}
.container {
  min-height: 30vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-box {
  width: 632px;
  height: 92px;
  display: flex;
  justify-content: space-around;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #f8f8f8;
  box-shadow: 0px 2px 10px rgba(8, 21, 62, 0.15);
  border-radius: 16px;
  align-items: center;
}
.inlined {
  height: 48px;
  display: inline-flex;
}

.image-box {
  width: 48px;
  height: 48px;
  display: flex;
  /* background-color: aqua; */
}

.logo {
  width: 48px;
  height: 48px;
}

.flag-image {
  height: auto;
  max-width: 2.5rem;
  margin-right: 1rem;
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
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
}

.search-city {
  width: 425px;
  height: 48px;
  display: inline-flex;
  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}

.search-city .search-bar {
  display: inline-flex;
  display: flex;
  width: 425px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  transition: 0.4s;
}

.searchIcon {
  width: 17.41px;
  height: 19.41px;
  color: #000000;
  align-self: center;
  right: 430px;
  position: absolute;
  background: white;
}

.show-t {
  display: flex;
  flex-direction: column;
}
</style>
