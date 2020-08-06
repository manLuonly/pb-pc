import publicFn from "@/public";
import utils from "@/utils/util";
import { uploadImgUrl } from '@/config/url'
import uploadImage from './upload-image'
import uploadImageList from './upload-image-list'
import tip from './tip'
import axios from "@/api";

/**
 * 存放公共组件位置
 */

export default {
   install(Vue) {
      publicFn(Vue);
      Vue.prototype.$utils = utils;
      Vue.prototype.$axios = axios;
      Vue.prototype.$uploadImgUrl = uploadImgUrl;
      Vue.component('upload-image', uploadImage)
      Vue.component('upload-image-list', uploadImageList)
      Vue.component('tip', tip)
   }
};
