<template>
  <div class="forecastTemplate">
    <div class="dateInF">{{ dateToShow }}</div>
    <div class="temp">
      <div class="AvTemp">{{ averageT }}</div>
      <div v-if="averageT" class="Celsius">°C</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forecast",
  props: ["averageT", "dateToShow"],
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
</style>
