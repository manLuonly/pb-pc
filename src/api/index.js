import axios from "./config";
// 引入qs模块，用来序列化post类型的数据
import QS from "qs";
import { showMsg } from "@/utils/message";
import { removeToken, removeName, getToken } from "@/utils/auth";

/**
 * axios请求
 *
 * @param {String}      method           请求方式
 * @param {String}      url              请求的url地址
 * @param {Object}      params           请求时携带的参数
 * @param {Boolean}     isForm          是否为form表单方式
 * @param {Boolean}     isShowMsg       是否显示成功的提示
 * @param {Object}      axiosOptions    自定义axios自带的配置
 *
 */
export default ({
    method,
    url,
    params,
    isForm = false,
    isShowMsg = false,
    axiosOptions,
}) => {
    const paramsMap = {
        get: params,
        post: isForm ? QS.stringify(params) : params,
        put: params,
        delete: params,
    };
    const paramsName = {
        get: "params",
        post: "data",
        put: "data",
        delete: "params",
    };
    const commonHeaders = {
        "Content-Type": isForm
            ? "application/x-www-form-urlencoded; charset=UTF-8"
            : "application/json;charset=UTF-8",
        token: getToken("token"),
    };
    return new Promise((resolve, reject) => {
        axios({
            url,
            method,
            [paramsName[method]]: paramsMap[method],
            headers: commonHeaders,
            ...axiosOptions,
        })
            .then((res) => {
                const msg = (res.data && res.data.msg) || "";
                const code = (res.data && res.data.code) || 0;

                //状态
                if (code === -3) {
                    //token过期，请重写登陆
                    removeToken();
                    removeName("role");
                    window.location.reload(); //重新加载
                    return;
                }

                resolve(res.data);
                if (isShowMsg) {
                    msg && showMsg(msg);
                }
            })
            .catch((err) => {
                reject(err.data);
            });
    });
};
