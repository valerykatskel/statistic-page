<template lang="pug" functional>
  .report-data
    .chart-holder
      .chart-circle(v-if="props.content.kind == 'circle'")
      .chart-bars(v-if="props.content.kind == 'bars'")
        .chart-bar(v-for="bar in props.content.bars", :style="{'width': `${bar.width}%`}")
</template>