import axios from "./config";
// 引入qs模块，用来序列化post类型的数据
import QS from "qs";
import { showMsg, errorMsg } from "@/utils/message";


/**
 * axios请求
 *
 * @param {String} method [请求方式]
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Boolean} isForm [是否为form表单方式]
 * @param {Boolean} isShowMsg [是否显示成功的提示]
 *
 */
export default (method, url, params, isForm = false, isShowMsg = false) => {
   const paramsMap = {
      get: { params: params },
      post: isForm ? QS.stringify(params) : params,
      put: params,
      delete:{ params: params }
   }
   const fromHeaders = {
      "Content-Type":
         "application/x-www-form-urlencoded; charset=UTF-8"
   }
   axios({
      url,
      method,
      params: paramsMap[method],
      headers: isForm ?
      {
         ...fromHeaders
      } :
      {

      }
   }).then(res => {
      const msg = res.data.msg;

      resolve(res.data);
      if (isShowMsg) {
         msg && showMsg(msg);
      }
   })
   .catch(err => {
      reject(err.data);
   });
}

