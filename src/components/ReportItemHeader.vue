<template lang="pug" functional>
  .report-header
    .title {{props.content.title}}
    .icon-holder
      svg.icon
        use(v-bind:xlink:href="props.content.icon")
</template>
