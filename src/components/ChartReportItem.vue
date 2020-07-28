<template lang="pug" functional>
  .report-data
    .chart-holder
      //- here will be placed hear chart
      .chart-circle(v-if="props.content.kind == 'circle'")
      .chart-bars(v-if="props.content.kind == 'bars'")
        .chart-bar(v-for="bar in props.content.bars", :style="{'width': `${bar.width}%`}")
</template>