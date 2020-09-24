<script>
import { HorizontalBar } from "vue-chartjs";
import prepareChartMixin from "../../mixins/prepareChartData";

export default {
  extends: HorizontalBar,
  props: {
    chart: Array
  },
  methods: {
    justify(str, len) {
      const words = str.split(" ");
      let lines = [];

      const lastLine = words.reduce(function(line, word) {
        if (line) {
          if (line.length + word.length + 1 <= len) return line + " " + word;
          lines.push(line);
        }
        return word;
      });

      lastLine && lines.push(lastLine);
      return lines;
    }
  },
  mixins: [prepareChartMixin],
  data() {
    return {
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                // hyphenation
                callback: value => {
                  const truncateLimit = 14;
                  return value.length > truncateLimit
                    ? this.justify(value, truncateLimit)
                    : value;
                }
              }
            }
          ],
          xAxes: [{}]
        },
        tooltips: {
          // Disable the on-canvas tooltip
          enabled: true,

          callbacks: {
            label: function(tooltipItems) {
              return `${tooltipItems.xLabel}%`;
            }
          }
        }
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const barsCount = this.chartdata.labels.length;
      const barHight = 30;
      const spacingSize = 36;
      const totalHeight = barsCount * barHight + spacingSize;
      this.$refs.canvas.style.cssText = `display: block; height: ${totalHeight}px;`;
    });
  }
};
</script>

<style></style>
