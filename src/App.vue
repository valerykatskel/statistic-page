<template lang="pug">
  #app
    <svg-sprite />
    
    <page-header />

    .container(v-if="loaded")
      .container-i
        .page-title {{title}}

        .page-content
          <lead-report-item :content="leadItem" />

          section.masonry-data
            masonry(class="mansory-wrapper" :cols="{default: 3, 999:2, 767: 1}", :gutter="{default: '30px', 999: '20px'}")
              .report-item.item-list(v-if="listItems.length > 0" v-for="item in listItems" :key="item.header.title")
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

    .loader(v-else)
      p {{loadingStatus}}


    .page-footer
      .container  
        .footer-text {{footer.text}}
        .footer-copyright {{footer.copyright}}  
</template>

<script>
import axios from "axios";
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
      loaded: false,
      loadingStatus: "Отчет загружается...",
      title: "Отчёт по размещению рекламного материала",
      items: [],
      footer: {
        text:
          "В отчете мы используем данные, предоставленные yandex.metrika, onthe и нашей внутренней статистикой. «Яндекс.Метрика» — бесплатный интернет-сервис компании Яндекс, предназначенный для оценки посещаемости веб-сайтов, и анализа поведения пользователей. На данный момент Яндекс.Метрика является второй по размеру системой веб-аналитики в Европе. Onthe — редакторская система аналитики, созданная специально для цифровых медиа. Позволяет измерять качество и эффективность публикаций по разным источникам трафика, анализировать лояльность аудитории и как она взаимодействует с сайтом.",
        copyright: "© ООО «ТУТ БАЙ МЕДИА», 2000 — 2020 УНП 191104626"
      }
    };
  },

  async mounted() {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    await axios
      .get("./data.json")
      .then(response => {
        this.items = response.data;
        this.loaded = true;
      })
      .catch(error => {
        this.loadingStatus = error;
      });
  },
  computed: {
    leadItem() {
      const [result] = this.items.filter(e => e.type == "lead");
      return result;
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
