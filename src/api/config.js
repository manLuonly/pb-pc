import Axios from "axios";
import { errorMsg } from "@/utils/message";

/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 *
 */

//配置项
let axios = Axios.create({
    baseURL: process.env.NODE_ENV == "development" ? process.env.VUE_APP_BASE_API : "/hc",
    timeout: 10000, // 请求超时时间
    withCredentials: true,
});

// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        const msg = response.data.message;

        switch (response.data.code) {
            case "0":
                //直接跳到catch中
                response = Promise.reject(response);
                errorMsg(msg);
                break;
        }

        return response;
    },
    error => {
        let msg = error.data ? error.data.message : "出现异常,请刷新重试";

        errorMsg(msg);
        return Promise.reject(error);
    }
);

export default axios;