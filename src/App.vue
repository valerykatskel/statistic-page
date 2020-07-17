<template lang="pug">
  <div id="app">
    <page-header />
      .main-content.container
        <report-header :header="reportHeader"/>
        <report-data :reportData="reportData" />			
        <report-summary :summaryData="reportSummary" />
    <page-footer :footer="footer" />
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import ReportHeader from "./components/ReportHeader";
import ReportData from "./components/ReportData";
import ReportSummary from "./components/ReportSummary";

export default {
  name: "App",
  components: {
    PageHeader,
    PageFooter,
    ReportHeader,
    ReportData,
    ReportSummary
  },
  data() {
    return {
      footer: {
        text:
          "В данном отчете мы используем данные, предоставленные yandex.metrika, onthe и нашей внутренней статистикой. «Яндекс.Метрика» — бесплатный интернет-сервис компании Яндекс, предназначенный для оценки посещаемости веб-сайтов, и анализа поведения пользователей. На данный момент Яндекс.Метрика является второй по размеру системой веб-аналитики в Европе[1]. Onthe - редакторская система аналитики, созданная специально для цифровых медия. Позволяет измерять качество и эффективность публикаций по разным источникам трафика, анализировать лояльность аудитории и как она взаимодействует с сайтом.",
        copyright: "© ООО «ТУТ БАЙ МЕДИА», 2000 — 2018",
        unp: "УНП 191104626"
      },
      reportHeader: {
        id: "ID публикации № 594490",
        title:
          "Существенное снижение цен в салонах LADA на Машиностроителей и Независимости",
        link: "https://news.tut.by/society/600159.html"
      },
      reportData: [
        {
          name: "Просмотры",
          value: "52 000",
          details: [
            ["Просмотров видео:", "10 000"][("AMP-просмотров:", "8 000")]
          ]
        },

        {
          name: "Среднее время прочтения",
          value: "02:10",
          details: [["Дочитывания до конца:", "79%"]]
        },
        {
          name: "Переходы на сайт клиента",
          value: "236",
          details: []
        }
      ],
      reportSummary: {
        header: "Рекомендации по рекламной компании",
        body:
          "<p>В данном отчете мы используем данные, предоставленные yandex.metrika, onthe и нашей внутренней статистикой. «Яндекс.Метрика» — бесплатный интернет-сервис компании Яндекс, предназначенный для оценки посещаемости веб-сайтов, и анализа поведения пользователей. На данный момент Яндекс.Метрика является второй по размеру системой веб-аналитики в Европе[1]. Onthe - редакторская система аналитики, созданная специально для цифровых медия. Позволяет измерять качество и эффективность публикаций по разным источникам трафика, анализировать лояльность аудитории и как она взаимодействует с сайтом.</p>"
      }
    };
  }
};
</script>

<style lang="scss">
</style>
