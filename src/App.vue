<template lang="pug">
  #app
    <svg-sprite />
    
    <page-header />

    .container
      .container-i
        .page-title {{title}}

        .page-content
          lead-report-item(v-if="leadItems.length > 0" v-for="(item,index) in leadItems" :content="item" :key="item.title")
 
          section.masonry-data
            masonry(class="mansory-wrapper" :cols="{default: 3, 999:2, 767: 1}", :gutter="{default: '30px', 999: '20px'}")
              .report-item.item-list(v-if="listItems.length > 0" v-for="(item,index) in listItems" :key=`item.header.title`)
                .report-item-inner
                  <report-item-header :content="item.header"/>  
                  <list-report-item :content="item.sections"/>
                  <report-item-footer v-if="item.footer !== undefined" :content="item.footer"/>  

              .report-item.item-article(v-if="articleItems.length > 0" v-for="item in articleItems" :key="item.header.title")
                .report-item-inner
                  <report-item-header :content="item.header"/>    
                  <article-report-item :content="item.sections"/>
                  <report-item-footer v-if="item.footer !== undefined" :content="item.footer"/> 

          section.masonry-data
            masonry(class="mansory-wrapper" :cols="{default: 3, 999:2, 767: 1}", :gutter="{default: '30px', 999: '20px'}")
              .report-item.item-chart(v-if="chartItems.length > 0" v-for="item in chartItems" :key="item.header.title")
                .report-item-inner
                  <report-item-header :content="item.header"/>  
                  <chart-report-item :content="item"/>
                  <report-item-footer v-if="item.footer !== undefined" :content="item.footer"/> 
    .page-footer
      .container  
        .footer-text {{footer.text}}
        .footer-copyright {{footer.copyright}}  
</template>

<script>
import SvgSprite from "./components/SvgSprite";
import PageHeader from "./components/PageHeader";
import ReportItemHeader from "./components/ReportItemHeader";
import ReportItemFooter from "./components/ReportItemFooter";
import LeadReportItem from "./components/LeadReportItem";
import ListReportItem from "./components/ListReportItem";
import ArticleReportItem from "./components/ArticleReportItem";
import ChartReportItem from "./components/ChartReportItem";

export default {
  name: "App",
  components: {
    SvgSprite,
    PageHeader,
    ReportItemHeader,
    ReportItemFooter,
    LeadReportItem,
    ListReportItem,
    ArticleReportItem,
    ChartReportItem
  },
  data() {
    return {
      title: "",
      items: [],
      footer: {}
    };
  },

  mounted() {
    this.applyUserOptions();
  },
  methods: {
    applyUserOptions() {
      // Метод копирует значения, которые переданы прямо в html при рендеринге, если такие есть.
      if (Object.keys(window.initialData).length > 0) {
        Object.keys(window.initialData).map(el => {
          this[el] = window.initialData[el];
        });
      }
    }
  },
  computed: {
    leadItems() {
      //const [result] = ;
      return this.items.filter(e => e.type == "lead");
    },
    listItems() {
      return this.items.filter(e => e.type == "list");
    },
    articleItems() {
      return this.items.filter(e => e.type == "article");
    },
    chartItems() {
      return this.items.filter(e => e.type.split("-")[0] == "chart");
    }
  }
};
</script>
