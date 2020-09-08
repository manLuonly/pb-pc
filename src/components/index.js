import publicFn from "@/public";
import utils from "@/utils/util";
import pagination from "./pagination";
import axios from "axios";

/**
 * 存放业务组件
 */

export default {
    install(Vue) {
        publicFn(Vue);
        Vue.prototype.$utils = utils;
        Vue.prototype.$axios = axios;


        Vue.component("pagination", pagination);
    }
};
