/**
 * 所有接口存放处
 */
import axios from "@/api";

//example
// export const demo = axios({
//     method: "get",
//     url:
//         "/movieOnInfoList?token=&optimus_uuid=91DA1510F1B311EA98BE01FEC09733F2C8C007C48FD340129D2B60BE60C9819E&optimus_risk_level=71&optimus_code=10",
//     isShowMsg: false,
//     axiosOptions: {
//         headers: {
//             dad: 66
//         }
//     }
// });


/**
 * 登录
 */
export const login = params => {
    return axios('post', '/admin/checkAdmin', params, true)
};
=======
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
>>>>>>> 3f6b3fc705a899ba808e10b76ae0fd8ce811f795
