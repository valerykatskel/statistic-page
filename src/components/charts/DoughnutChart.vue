<script>
import { Doughnut } from "vue-chartjs";
import prepareChartMixin from "../../mixins/prepareChartData";

export default {
  extends: Doughnut,
  props: {
    chart: Array
  },
  mixins: [prepareChartMixin],
  data: () => ({
    options: {
      tooltips: {
        // Disable the on-canvas tooltip
        enabled: true,

        callbacks: {
          label: function(tooltipItems, data) {
            return `${data.labels[tooltipItems.index]}: ${
              data.datasets[0].data[tooltipItems.index]
            }%`;
          }
        }
      }
    }
  })
};
</script>

<style></style>
