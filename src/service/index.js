/**
 * 所有接口存放处
 */
import axios from "@/api";

//首页轮播图
export const addSlideShow = params => {
    return axios({
        method: "post",
        url: "slideshow/addSlideShow",
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
        url: "slideshow/deleteById"
    });
};
