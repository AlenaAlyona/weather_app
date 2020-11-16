<template>
  <div class="forecastTemplate">
    <div class="dateInF">{{ dateToShow }}</div>
    <div class="AvTemp">{{ averageT }}</div>
  </div>
</template>

<script>
export default {
  name: "Forecast",
  props: ["averageT", "dateToShow"],
};
</script>

<style scoped></style>
