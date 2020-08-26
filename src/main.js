import Vue from "vue";
import App from "./App.vue";
import InlineSvg from "./components/InlineSvg";

Vue.config.productionTip = false;
Vue.component("InlineSvg", InlineSvg);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
