<template>
  <div v-if="averageT" class="forecastTemplate">
    <div class="dateInF">{{ dateToShow }}</div>
    <div class="temp">
      <div class="AvTemp">{{ averageT }}</div>
      <div class="Celsius">°C</div>
    </div>
    <div class="week">
      <div class="group" v-for="day in this.tempForWeek" :key="day.day">
        <div class="oneDay">{{ day.day }}</div>
        <div class="tempInWeek">
          <div class="oneTemp">{{ day.temp }}</div>
          <div class="groupCelsius">°C</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forecast",
  props: ["averageT", "dateToShow", "tempForWeek"],
};
</script>

<style scoped>
@import "./forecast.css";
</style>
