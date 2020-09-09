<script>
import { HorizontalBar } from "vue-chartjs";
import prepareChartMixin from "../../mixins/prepareChartData";

export default {
  extends: HorizontalBar,
  props: {
    chart: Array
  },
  mixins: [prepareChartMixin],
  data: () => ({
    options: {
      legend: {
        display: false
      }
    }
  })
};
</script>

<style>
</style>