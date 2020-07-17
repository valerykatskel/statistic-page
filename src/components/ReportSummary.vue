<template lang="pug" functional>
  .b-dataset.information-data
    .row.no-gutters
      .col-12
        .b-text
          .b-title
            | {{props.summaryData.header}}
          p(v-html="props.summaryData.body")
</template>