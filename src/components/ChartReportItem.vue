<template lang="pug">
  .report-data
    .chart-holder
      pie-chart(v-if="content.type == 'chart-pie'" :chart="content.data")
      doughnut-chart(v-if="content.type == 'chart-doughnut'" :chart="content.data")
      bar-horizontal-chart(v-if="content.type == 'chart-bars'" :chart="content.data")
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
