<template lang="pug" functional>
  .report-data
    .data-section(v-for='section in props.content' :key='section.name')
      .section-item(v-for='item in section' :key='item.name')
        .item-name {{item.name}}
        .item-value {{item.value}}
</template>
