import utils from "@/utils/util";
import axios from "@/api";

import uploadImage from './upload-image'
import loadingImage from "./loading-image";

const componentsMap = {
    uploadImage,
    loadingImage,
};

/**
 * 存放公共组件位置
 */

export default {
    install(Vue) {
        Vue.prototype.$utils = utils;
        Vue.prototype.$axios = axios;

        Object.keys(componentsMap).forEach(key => {
            Vue.component(key, componentsMap[key]);
        });
    }
};
