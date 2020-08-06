import Axios from "axios";
import { showMsg, errorMsg } from "@/utils/message";

/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 *
 */

//配置项
let axios = Axios.create({
   baseURL: process.env.NODE_ENV == "development" ? "/" : "/",
   withCredentials: true
});

// 添加响应拦截器
axios.interceptors.response.use(
   response => {
      const msg = response.data.msg;

      switch (response.data.code) {
         case -1:
            //直接跳到catch中
            response = Promise.reject(response)
            errorMsg(msg);
               break;
      }

      return response;
   },
   error => {
      let msg = error.data ? error.data.msg : '出现异常,请刷新重试';

      errorMsg(msg);
      return Promise.reject(error);
   }
);

export default axios;
