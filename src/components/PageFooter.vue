<template lang="pug" functional>
  footer
    .container
      .row.no-gutters
        .col-12
          .footer-text
            p
              | {{props.footer.text}}
            .footer-copyright
              p
                | {{props.footer.copyright}}
              p
                | {{props.footer.unp}}
</template>
