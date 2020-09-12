import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
//自定义指令
import "@/directive";
//自定义过滤器
import "@/filters";


//自定义el主题样式
import './styles/element-variables.scss';
import '@/element-ui'

//时间组件样式
import 'vue2-datepicker/index.css';
//配置时间组件中文包
import 'vue2-datepicker/locale/zh-cn';
//定制的CSS文件，它让不同的浏览器在渲染网页元素的时候形式更统一
import 'normalize.css/normalize.css'
//引入animate.css
require("animate.css");


import commonComponents from "@/components";
import common from "@/common";
import "@/router/permission";


Vue.use(commonComponents);
Vue.use(common);


Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
