<template lang="pug">
  .b-dataset.report-data
    .row.no-gutters
      .col-12(v-for="item in reportData", :class="colClass")
        <report-item :data="item" />
</template>
<script>
import ReportItem from "./ReportItem";
export default {
  name: "ReportData",
  components: {
    ReportItem
  },
  props: {
    reportData: Array
  },
  computed: {
    colClass() {
      const reportDataLength = this.reportData.length;
      return [5, 7, 8, 9, 10, 11].includes(reportDataLength)
        ? `col-md-4`
        : `col-md-${12 / reportDataLength}`;
    }
  }
};
</script>
