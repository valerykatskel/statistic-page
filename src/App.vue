<template lang="pug">
  #app
    <svg-sprite />
    
    <page-header />

    .container
      .container-i
        .page-title {{title}}

        .page-content
          <lead-report-item :content="leadItem" />

          masonry(:cols="{default: 3, 1289:2, 759: 1}", :gutter="{default: '30px', 1289: '20px'}")
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
      title: "Отчёт по размещению рекламного материала",
      items: [
        {
          type: "lead",
          title:
            "Время купить квартиру: Рассрочка 0% до 36 месяцев в новостройках!",
          logo: "https://s-kupe.by/templates/kupe/images/svg/logo-R_black.svg",
          description: [
            { name: "Рубрика", value: "Новости компаний" },
            { name: "Дата", value: "19 мая 2020 в 09:00" },
            { name: "ID публикации", value: "684945" }
          ],
          button: {
            link: "https://tut.by/",
            title: "Смотреть материал"
          }
        },
        {
          type: "list",
          header: {
            title: "Просмотры",
            icon: "#eye"
          },
          sections: [
            [
              { name: "Просмотры материала", value: "7 763" },
              { name: "Просмотры видео", value: "1" },
              { name: "AMP-просмотры", value: "47" }
            ]
          ],
          footer: {
            text:
              "Новость прочитали лучше, чем 75% предыдущих размещений на данной позиции"
          }
        },
        {
          type: "list",
          header: {
            title: "Время",
            icon: "#time"
          },
          sections: [
            [
              { name: "Среднее время прочтения", value: "02:05" },
              { name: "Дочтения до середины", value: "80%" },
              { name: "Дочтения до конца", value: "63%" }
            ]
          ],
          footer: {
            text:
              "На новости провели больше времени, чем на 50% предыдущих новостей на этой позиции"
          }
        },
        {
          type: "list",
          header: {
            title: "Переходы",
            icon: "#external-link"
          },
          sections: [[{ name: "Переходы на сайт клиента", value: "1 356" }]],
          footer: {
            text:
              "На сайт с этой новости переходили лучше, чем с 25% предыдущих новостей на этой позиции"
          }
        },
        {
          type: "list",
          header: {
            title: "Действия",
            icon: "#send-plane"
          },
          sections: [
            [
              { name: "Клики на кнопку «Позвонить»", value: "25" },
              { name: "Отправленные заявки", value: "1" }
            ]
          ]
        },
        {
          type: "list",
          header: {
            title: "Видео",
            icon: "#video"
          },
          sections: [
            [
              { name: "Количество запусков", value: "300" },
              { name: "Среднее время", value: "1" },
              { name: "Просмотр до середины", value: "80%" },
              { name: "Просмотр до конца", value: "63%" }
            ]
          ]
        },
        {
          type: "list",
          header: {
            title: "Взаимодействия с тестом",
            icon: "#questionnaire"
          },
          sections: [
            [
              { name: "Ответов на первый вопрос", value: "10 000" },
              { name: "Прошли до конца", value: "9 345" }
            ]
          ]
        },
        {
          type: "list",
          header: {
            title: "Размещение на титульной",
            icon: "#terminal"
          },
          sections: [
            [
              { name: "Показы", value: "1 200 000" },
              { name: "Уникальные показы", value: "900 000" }
            ],
            [
              { name: "Клики", value: "500" },
              { name: "Уникальные клики", value: "456" }
            ],
            [
              { name: "CTR", value: "0,5" },
              { name: "Уникальный CTR ", value: "0,45" }
            ]
          ]
        },
        {
          type: "list",
          header: {
            title: "Шаринг",
            icon: "#share-forward"
          },
          sections: [
            [
              { name: "Вконтакте", value: "300" },
              { name: "Facebook", value: "200" },
              { name: "Twitter", value: "100" },
              { name: "Однокласники", value: "90" },
              { name: "Viber", value: "80" },
              { name: "Telegram", value: "40" }
            ]
          ]
        },
        {
          type: "article",
          header: {
            title: "Ротация заголовков",
            icon: "#file-list"
          },
          sections: [
            [
              {
                title:
                  "Время купить квартиру: Рассрочка 0% до 36 месяцев в новостройках!",
                image: "https://dh.img.tyt.by/p/03/4/tapas_04072019_1_.jpg",
                params: [{ name: "CTR", value: "0,50" }]
              }
            ],
            [
              {
                title:
                  "Оказывается, в Минске квартиру с ремонтом уже можно купить до 40 тысяч долларов. Что за жилье?",
                image: "https://dh.img.tyt.by/p/03/4/tapas_04072019_1_.jpg",
                params: [{ name: "CTR", value: "0,45" }]
              }
            ]
          ]
        },
        {
          type: "chart",
          kind: "circle",
          header: {
            title: "Тип устройства",
            icon: "#devices"
          }
        },
        {
          type: "chart",
          kind: "circle",
          header: {
            title: "Пол",
            icon: "#group"
          }
        },
        {
          type: "chart",
          kind: "bars",
          header: {
            title: "Возраст",
            icon: "#cake"
          },
          bars: [
            { name: 1, width: 100 },
            { name: 2, width: 89 },
            { name: 3, width: 68 },
            { name: 4, width: 48 },
            { name: 5, width: 3 }
          ]
        },
        {
          type: "chart",
          kind: "bars",
          header: {
            title: "География по Беларуси",
            icon: "#map-pin"
          },
          bars: [
            { name: 1, width: 100 },
            { name: 2, width: 57 },
            { name: 3, width: 45 },
            { name: 4, width: 21 },
            { name: 5, width: 3 }
          ]
        },
        {
          type: "chart",
          kind: "bars",
          header: {
            title: "География по странам",
            icon: "#earth"
          },
          bars: [
            { name: 1, width: 100 },
            { name: 2, width: 35 },
            { name: 3, width: 3 }
          ]
        },
        {
          type: "chart",
          kind: "bars",
          header: {
            title: "Интересы",
            icon: "#star"
          },
          bars: [
            { name: 1, width: 100 },
            { name: 2, width: 87 },
            { name: 3, width: 57 },
            { name: 4, width: 22 },
            { name: 5, width: 15 },
            { name: 6, width: 3 }
          ]
        }
      ],
      footer: {
        text:
          "В отчете мы используем данные, предоставленные yandex.metrika, onthe и нашей внутренней статистикой. «Яндекс.Метрика» — бесплатный интернет-сервис компании Яндекс, предназначенный для оценки посещаемости веб-сайтов, и анализа поведения пользователей. На данный момент Яндекс.Метрика является второй по размеру системой веб-аналитики в Европе. Onthe — редакторская система аналитики, созданная специально для цифровых медиа. Позволяет измерять качество и эффективность публикаций по разным источникам трафика, анализировать лояльность аудитории и как она взаимодействует с сайтом.",
        copyright: "© ООО «ТУТ БАЙ МЕДИА», 2000 — 2020УНП 191104626"
      }
    };
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
      return this.items.filter(e => e.type == "chart");
    }
  }
};
</script>