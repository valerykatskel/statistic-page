<script>
import { Doughnut } from "vue-chartjs";
import prepareChartMixin from "../../mixins/prepareChartData";

export default {
  extends: Doughnut,
  props: {
    chart: Array
  },
  mixins: [prepareChartMixin]
};
</script>

<style>
</style>