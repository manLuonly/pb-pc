// 兼容ie polyfill
import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ElementUI from "element-ui";
//自定义指令
import "@/directive";
//自定义过滤器
import "@/filters";

import './styles/element-variables.scss';

//定制的CSS文件，它让不同的浏览器在渲染网页元素的时候形式更统一
import "normalize.css/normalize.css";

import commonComponents from "@/components";
import common from "@/common";
import "@/router/permission";

//引入animate.css
require("animate.css");

Vue.use(ElementUI, { size: "small" });

Vue.use(commonComponents);
Vue.use(common);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
