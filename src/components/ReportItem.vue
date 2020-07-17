<template lang="pug" functional>
  .b-stat
    .title
      | {{props.data.name}}
    .count 
      | {{props.data.value}}
    
    .stat-footer(v-if="props.data.details.length>0")
      p
        span.sf-count
          | 10 000
        span.sf-title
          | Просмотров видео:

      p
        span.sf-count
          | 10 000
        span.sf-title
          | AMP-просмотров:
</template>
