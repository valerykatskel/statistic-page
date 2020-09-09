<script>
import { Pie } from "vue-chartjs";
import prepareChartMixin from "../../mixins/prepareChartData";

export default {
  extends: Pie,
  props: {
    chart: Array
  },
  mixins: [prepareChartMixin]
};
</script>

<style>
</style>