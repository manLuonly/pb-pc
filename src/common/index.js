import publicFn from "@/public";
import utils from "@/utils/util";
import axios from "@/api";

import headerTool from "./header-tool";
import filterContentBar from "./filter-content-bar";
import search from "./search";
import tip from "./tip";
import fullScreen from "./full-screen";

/**
 * 存放公共组件位置
 */

export default {
    install(Vue) {
        publicFn(Vue);
        Vue.prototype.$utils = utils;
        Vue.prototype.$axios = axios;



        Vue.component("HeaderTool", headerTool);
        Vue.component("search", search); //搜索
        Vue.component("tip", tip);
        Vue.component("filterContentBar", filterContentBar);
        Vue.component("fullScreen", fullScreen);
    }
};
