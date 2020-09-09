export default {
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        displayColors: false,
      },
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.chartdata.labels = this.chart.map((el) => el.label);
      this.chartdata.datasets.push({
        backgroundColor: this.chart.map((el) => el.color),
        data: this.chart.map((el) => parseFloat(el.value, 10)),
      });
      this.renderChart(this.chartdata, this.options);
    });
  },
};
