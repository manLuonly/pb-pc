import utils from "@/utils/util";
import axios from "@/api";

import uploadImage from './upload-image'
import uploadImageList from './upload-image-list'

const componentsMap = {
    uploadImage,
    uploadImageList,
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
