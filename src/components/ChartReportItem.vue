<template lang="pug">
  .report-data
    .chart-holder
      //- here will be placed hear chart
      //-.chart-circle
      pie-chart(v-if="content.type == 'chart-pie'" :chart="content.data")
      doughnut-chart(v-if="content.type == 'chart-doughnut'" :chart="content.data")
      bar-horizontal-chart(v-if="content.type == 'chart-bars'" :chart="content.data")

      //- .chart-bars(v-if="content.type == 'chart-bars'")
      //-   .chart-bar(v-for="bar in content.data", :style="{'background-color': `${bar.color}`,'width': `${parseFloat(bar.width)}%`}")
</template>

<script>
import PieChart from "./charts/PieChart";
import DoughnutChart from "./charts/DoughnutChart";
import BarHorizontalChart from "./charts/BarHorizontalChart";

export default {
  name: "ChartReportItem",
  props: {
    content: Object
  },
  components: {
    PieChart,
    DoughnutChart,
    BarHorizontalChart
  }
};
</script>