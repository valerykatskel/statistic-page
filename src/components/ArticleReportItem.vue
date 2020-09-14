<template lang="pug" functional>
  .report-data
    .data-section(v-for='section in props.content' :key='section.title')
      .section-item(v-for='sc in section' :key='sc.title')
        .section-item-holder
          .item-title(v-html="sc.title")
          .item-media 
            video(v-if="sc.media.is_video" :width="sc.media.width" :height="sc.media.height" :controls="sc.media.controls" :autoplay="sc.media.autoplay" :loop="sc.media.loop" :muted="sc.media.muted" :playsinline="sc.media.playsinline")
              source(:src="sc.media.src" :type="sc.media.type")
            img(v-else :src="sc.media")
          
        .section-footer 
          .report-param(v-for='param in sc.params' :key="param.name")
            .item-name {{param.name}}
            .item-value {{param.value}}
</template>
