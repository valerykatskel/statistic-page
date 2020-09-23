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
      maintainAspectRatio: false,
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
  }),
  mounted() {
    this.$nextTick(() => {
      const barsCount = this.chartdata.labels.length;

      this.$refs.canvas.style.cssText = `display: block; height: ${barsCount *
        30 +
        36}px;`;
    });
  }
};
</script>

<style></style>
