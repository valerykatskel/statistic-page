<template lang="pug" functional>
  .report-data
    .data-section(v-for='section in props.content' :key='section.title')
      .section-item(v-for='sc in section' :key='sc.title')
        .section-item-holder
          .item-title(v-html="sc.title")
          .item-media 
            video(v-if="sc.is_video" :src="sc.media")
            img(v-else :src="sc.media")
          
        .section-footer 
          .report-param(v-for='param in sc.params' :key="param.name")
            .item-name {{param.name}}
            .item-value {{param.value}}
</template>
