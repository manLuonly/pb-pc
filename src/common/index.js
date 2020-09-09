import utils from "@/utils/util";
import axios from "@/api";
import numeral from "@/utils/numeral";

import headerTool from "./header-tool";
import filterContentBar from "./filter-content-bar";
import tip from "./tip";
import fullScreen from "./full-screen";
import loadingImage from "./loading-image";

const componentsMap = {
    headerTool,
    filterContentBar,
    tip,
    fullScreen,
    loadingImage,
};

/**
 * 存放公共组件位置
 */

export default {
    install(Vue) {
        Vue.prototype.$utils = utils;
        Vue.prototype.$axios = axios;
        Object.keys(numeral).forEach(key => {
            Vue.prototype[`$${key}`] = numeral[key];
        });

        Object.keys(componentsMap).forEach(key => {
            Vue.component(key, componentsMap[key]);
        });
    }
};
