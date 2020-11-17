<template>
  <div id="app" v-bind:style="appBackground">
    <div class="container">
      <div class="search-box">
        <div class="image-box inlined">
          <img alt="sun" class="sun" src="./assets/sun.png" />
          <img alt="cloud" class="cloud" src="./assets/cloud.png" />
        </div>
        <div class="country-selector">
          <v-select
            v-model="selectedCountry"
            label="alpha2Code"
            :options="countries"
            :reduce="(country) => country.alpha2Code"
            :clearable="false"
          >
            <template slot="option" slot-scope="option">
              <img :src="option.flag" />
              <div style="font-size: 20px; line-height: 21px;">
                {{ option.alpha2Code }}
              </div>
            </template>
            <template v-slot:selected-option="option">
              <img class="flag-image" :src="option.flag" />
              <div style="font-size: 20px; line-height: 21px;">
                {{ option.alpha2Code }}
              </div>
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
    <div v-if="averageT" class="show-t">
      <Forecast
        :averageT="averageT"
        :dateToShow="getDate"
        :tempForWeek="tempForWeek"
      />
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
      onlyWeek: null,
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
    tempForWeek: function() {
      if (this.weather) {
        let currWeek = this.weather.slice(0, 7);
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        let week = [];
        for (let i = 0; i < currWeek.length; i++) {
          let d = new Date(currWeek[i].datetime);
          week.push({
            day: weekday[d.getDay()],
            temp: Math.round(currWeek[i].temp),
          });
        }
        console.log("SEVEN DAYS", week);
        return week;
      }
      return null;
    },
    appBackground: function() {
      if (!this.averageT) {
        return {
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), linear-gradient(119.25deg, #102F7E -11.47%, #0C8DD6 3.95%, #1AA0EC 19.37%, #60C6FF 34.78%, #9BDBFF 50.19%, #B4DEDA 65.61%, #FFD66B 81.02%, #FFC178 96.44%, #FE9255 111.85%)",
        };
      } else if (this.averageT >= 0 && this.averageT <= 10) {
        return {
          background:
            "linear-gradient(130.54deg, #9bdbff -33.02%, #b4deda 52.01%,#ffd66b 137.04%)",
        };
      } else if (this.averageT >= 11 && this.averageT <= 20) {
        return {
          background:
            "linear-gradient(110.54deg,#b4deda -0.02%, #ffd66b 50.01%, #ffc178 110.04%)",
        };
      } else if (this.averageT >= 21 && this.averageT <= 30) {
        return {
          background:
            "linear-gradient(110.54deg,#ffd66b -0.02%, #ffc178 50.01%, #fe9255 110.04%)",
        };
      } else if (this.averageT >= 31 && this.averageT <= 40) {
        return {
          background:
            "linear-gradient(110.54deg,#ffd66b -30.02%, #ffc178 55.01%, #fe9255 140.04%)",
        };
      } else if (this.averageT <= -1 && this.averageT >= -10) {
        return {
          background:
            "linear-gradient(110.54deg,#ffffff -30.02%, #60c6ff 30.01%, #1aa0ec 70.04%)",
        };
      } else if (this.averageT <= -11 && this.averageT >= -20) {
        return {
          background:
            "linear-gradient(110.54deg,#ffffff -10.02%, #1aa0ec 40.01%, #0c8dd6 70.04%)",
        };
      } else if (this.averageT <= -21 && this.averageT >= -30) {
        return {
          background:
            "linear-gradient(110.54deg,#1aa0ec -20.02%, #0c8dd6 50.01%, #102F7E 80.04%)",
        };
      } else if (this.averageT <= -31 && this.averageT >= -40) {
        return {
          background:
            "linear-gradient(110.54deg,#0c8dd6 -10.02%, #102F7E 56.01%, #102F7E 100.04%)",
        };
      }
      return null;
    },
  },
};
</script>

<style>
@import "./app.css";
</style>
