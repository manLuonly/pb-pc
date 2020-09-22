import pagination from "./pagination";

const componentsMap = {
    pagination
};

/**
 * 存放业务组件
 */

export default {
    install(Vue) {
        Object.keys(componentsMap).forEach(key => {
            Vue.component(key, componentsMap[key]);
        });
    }
};
