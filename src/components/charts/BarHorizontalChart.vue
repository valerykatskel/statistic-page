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
      },
      scales: {
        yAxes: [
          {
            ticks: {
              // truncate
              callback: value => {
                const truncateLimit = 14;
                return value.length > truncateLimit
                  ? `${value.substr(0, truncateLimit)}...`
                  : value;
              }
            }
          }
        ],
        xAxes: [{}]
      }
    }
  })
};
</script>

<style></style>
