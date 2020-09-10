<template lang="pug" functional>
  .report-item.item-lead  
    .report-item-inner
      .report-header
        .title {{props.content.title}}
        .logo
          img(:src="props.content.logo")
      .report-data
        .data-section
          .section-item(v-for="(item,i) in props.content.description" :key="i")
            .item-name {{item.name}}: 
            .item-value {{item.value}}
      .report-footer
        a.button(:href="props.content.button.link") {{props.content.button.title}}

</template>
