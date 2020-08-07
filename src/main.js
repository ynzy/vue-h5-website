/*
 * @Author: your name
 * @Date: 2020-07-09 14:44:36
 * @LastEditTime: 2020-07-09 16:30:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /landpage-client/src/main.js
 */
// import "@/assets/font/font.css";
import "@/assets/style/animate.css";
import "@/assets/style/reset.css";
import "@/plugins/flexible.js";
import "@/plugins/scale_no.js"; //禁止缩放

import Vue from "vue";
import VueClipboard from "vue-clipboard2"; // 剪贴板
import VueTouch from "vue-touch-hotfix"; // 手势触摸
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import Vant from "vant";
import "vant/lib/index.css";
import '../node_modules/swiper/swiper.scss';

import Mint from "mint-ui";
import VueAnalytics from "vue-analytics";  // 谷歌统计

Vue.use(VueAnalytics, {
  id: "UA-165940626-4",
  router,
  autoTracking: {
    pageviewOnLoad: false, // 当通过网址进来时已经GA在初始化时就发起一次pageview的统计，这里不要重复统计
  },
});
Vue.use(Mint);

Vue.use(Vant);
Vue.use(VueTouch, { name: "v-touch" });

Vue.use(VueClipboard);
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
  data: {},
  created() { },
}).$mount("#app");
