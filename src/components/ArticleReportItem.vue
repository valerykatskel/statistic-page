<template lang="pug" functional>
  .report-data
    .data-section(v-for='section in props.content' :key='section.title')
      .section-item(v-for='sc in section' :key='sc.title')
        .section-item-holder
          .item-title {{sc.title}}
          .item-image 
            img(:src="sc.image")
          
        .section-footer 
          .report-param(v-for='param in sc.params' :key="param.name")
            .item-name {{param.name}}
            .item-value {{param.value}}
</template>