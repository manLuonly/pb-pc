import pagination from "./pagination";

/**
 * 存放业务组件
 */

export default {
    install(Vue) {
        Vue.component("pagination", pagination);
    }
};
