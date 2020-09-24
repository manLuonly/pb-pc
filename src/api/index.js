import axios from "./config";
import QS from "qs";
import { showMsg } from "@/utils/message";
import { removeToken, removeName, getToken } from "@/utils/auth";

/**
 * axios请求
 *
 *
 * @param {Object}
 *
 *      @param {String}      method           请求方式
 *      @param {String}      url              请求的url地址
 *      @param {Object}      params           请求时携带的参数
 *      @param {Boolean}     isForm          是否为form表单方式
 *      @param {Boolean}     isShowMsg       是否显示成功的提示
 *      @param {Object}      axiosOptions    自定义axios自带的配置
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
                const msg = (res.data && res.data.message) || "";

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
