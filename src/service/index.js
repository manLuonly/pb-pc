/**
 * 所有接口存放处
 */
import axios from "@/api";

/**
 * 登录
 */
export const login = params => {
    return axios('post', '/admin/checkAdmin', params, true)
};


//首页轮播图
export const addSlideShow = params => {
    return axios({
        method: "post",
        params,
        url: "slideshow/addSlideShow",
        axiosOptions: {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        },
        isShowMsg: true
    });
};
export const findAllSlideShow = params => {
    return axios({
        method: "get",
        url: "slideshow/findAll"
    });
};
export const slideShowDeleteById = params => {
    return axios({
        method: "get",
        params,
        url: "slideshow/deleteById",
        isShowMsg: true
    });
};
