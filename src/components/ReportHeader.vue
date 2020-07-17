<template lang="pug" functional>
  .report-header
    .row.no-gutters
      .col-12.col-md-9
        .field-id
          | {{props.header.id}}
        .field-title
          | {{props.header.title}}
        .field-link
          a(:href="props.header.link", title="") {{props.header.link}}
      .col-12.col-md-3
        .company-logo
          img(src="@/assets/images/maxresdefault.jpg")
</template>
