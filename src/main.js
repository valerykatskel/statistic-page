import Vue from "vue";
import App from "./App.vue";
import VueMasonry from "vue-masonry-css";
import "@/main.scss";

Vue.use(VueMasonry);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
