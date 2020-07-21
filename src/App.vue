<template lang="pug">
  <div id="app">
    <svg-sprite />
    .page-header
      .logo
        img(srcset="//img.tyt.by/i/logo-tutby.png, //img.tyt.by/i/logo-tutby@1.5x.png 1.5x, //img.tyt.by/i/logo-tutby@2x.png 2x", src="//img.tyt.by/i/logo-tutby.png")

    .container

      .page-title {{title}}


      .page-content
        <lead-report-item :content="leadItem" />

        .report-item.item-list(v-if="listItems.length > 0" v-for="(item,i) in listItems" :key="i")
          <report-item-header :content="item.header"/>  
          //- <report-item-list/>
          <report-item-footer v-if="item.footer !== undefined" :content="item.footer"/>  

        //-.report-item.item-article(v-if="articleItems.length > 0" v-for="(item,i) in articleItems" :key="i")
          //- <report-item-header :content="item.header"/>  

        //-.report-item.item-chart(v-if="chartItems.length > 0" v-for="(item,i) in chartItems" :key="i")
          //- <report-item-header :content="item.header"/>  
          //- <report-item-article v-if="articleItems.length > 0" v-for="(item,i) in articleItems" :key="i" :content="item"/>
        
 

        //- .report-item  
        //-   header
        //-     .title Размещение на титульной
        //-     .header-icon

        //-   .report-data

        //-     .data-section
        //-       .section-item
        //-         .item-name Показы
        //-         .item-value 1 200 000
        //-       .section-item
        //-         .item-name Уникальные показы
        //-         .item-value 900 000 

        //-     .data-section
        //-       .section-item
        //-         .item-name Клики
        //-         .item-value 500
        //-       .section-item
        //-         .item-name Уникальные клики
        //-         .item-value 456 

        //-     .data-section
        //-       .section-item
        //-         .item-name CTR
        //-         .item-value 0,5
        //-       .section-item
        //-         .item-name Уникальный CTR 
        //-         .item-value 0,45

        //-   footer
        //-     p | На сайт с этой новости переходили лучше, чем с 25% предыдущих новостей на этой позиции


  </div>
</template>

<script>
import SvgSprite from "./components/SvgSprite";
import ReportItemHeader from "./components/ReportItemHeader";
import ReportItemFooter from "./components/ReportItemFooter";

import LeadReportItem from "./components/LeadReportItem";
import ListReport from "./components/ListReport";
import ArticleReport from "./components/ArticleReport";

export default {
  name: "App",
  components: {
    SvgSprite,
    ReportItemHeader,
    ReportItemFooter,
    LeadReportItem,
    ListReport,
    ArticleReport
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
            {
              title:
                "Время купить квартиру: Рассрочка 0% до 36 месяцев в новостройках!",
              image: "",
              params: [{ name: "CTR", value: "0,50" }]
            },
            {
              title:
                "Оказывается, в Минске квартиру с ремонтом уже можно купить до 40 тысяч долларов. Что за жилье?",
              image: "",
              params: [{ name: "CTR", value: "0,45" }]
            }
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
          }
        },
        {
          type: "chart",
          kind: "bars",
          header: {
            title: "География по Беларуси",
            icon: "#map-pin"
          }
        },
        {
          type: "chart",
          kind: "bars",
          header: {
            title: "География по странам",
            icon: "#earth"
          }
        },
        {
          type: "chart",
          kind: "bars",
          header: {
            title: "Интересы",
            icon: "#star"
          }
        }
      ],
      footer: {
        text:
          "В отчете мы используем данные, предоставленные yandex.metrika, onthe и нашей внутренней статистикой. «Яндекс.Метрика» — бесплатный интернет-сервис компании Яндекс, предназначенный для оценки посещаемости веб-сайтов, и анализа поведения пользователей. На данный момент Яндекс.Метрика является второй по размеру системой веб-аналитики в Европе. Onthe — редакторская система аналитики, созданная специально для цифровых медиа. Позволяет измерять качество и эффективность публикаций по разным источникам трафика, анализировать лояльность аудитории и как она взаимодействует с сайтом.",
        copyright: "© ООО «ТУТ БАЙ МЕДИА», 2000 — 2020 УНП 191104626"
      }

      // reportChartData: [
      //   {
      //     name: "Тип устройства",
      //     type: "doughnut",
      //     data: [{ label: "ПК" }, { label: "Смартфоны" }, { label: "Планшеры" }]
      //   }
      // ],
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