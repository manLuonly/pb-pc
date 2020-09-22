import utils from "@/utils/util";
import axios from "@/api";

import uploadImage from './upload-image'
import uploadImageList from './upload-image-list'
import loadingImage from "./loading-image";


import { uploadImgUrl } from "@/api/url";

const componentsMap = {
    uploadImage,
    uploadImageList,
    loadingImage,
};

/**
 * 存放公共组件位置
 */

export default {
    install(Vue) {
        Vue.prototype.$utils = utils;
        Vue.prototype.$axios = axios;
        Vue.prototype.$uploadImgUrl = uploadImgUrl;

        Object.keys(componentsMap).forEach(key => {
            Vue.component(key, componentsMap[key]);
        });
    }
};