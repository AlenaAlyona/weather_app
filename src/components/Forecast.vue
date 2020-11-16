<template>
  <div v-if="averageT" class="forecastTemplate">
    <div class="dateInF">{{ dateToShow }}</div>
    <div class="temp">
      <div class="AvTemp">{{ averageT }}</div>
      <div class="Celsius">°C</div>
    </div>
    <div class="week">
      <div class="dayOfWeek" v-for="day in this.tempForWeek" :key="day.day">
        {{ day.day }} {{ day.temp }}
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
.forecastTemplate {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.dateInF {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.06em;
  color: #08153e;
  opacity: 0.6;
}

.temp {
  display: flex;
  flex-direction: row;
}

.AvTemp {
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 120px;
  line-height: 120px;
  color: #ffffff;
}

.Celsius {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
}

.week {
  width: 642px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
