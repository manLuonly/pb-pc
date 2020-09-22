/**
 * 所有接口存放处
 */
import axios from "@/api";

/**
 * 登录
 */
export const login = params => {
    return axios({
        method: "post",
        url: "admin/checkAdmin",
        params,
        isForm: true
    })
};


//首页轮播图
export const addSlideShow = params => {
    return axios({
        method: "post",
        params,
        url: "slideshow/addSlideShow",
        axiosOptions: {
            headers: {
                'Content-Type': 'multipart/form-data'
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


//案例模块
export const findAllComCase = params => {
    return axios({
        method: "get",
        url: "comCase/findAll",
    });
};
export const comCaseDeleteById = params => {
    return axios({
        method: "get",
        params,
        url: "comCase/delById",
        isShowMsg: true
    });
};



//产品特点模块

/**
 * 添加产品特点
 * @param {*} params 
 */
export const addTrait = params => {
    return axios({
        method: "post",
        url: "proTrait/addTrait",
        params,
        isShowMsg: true
    });
};


/**
 * 根据产品名称查询产品特点
 * @param {*} params 
 */
export const findByProName = params => {
    return axios({
        method: "get",
        url: "proTrait/findByProName",
        params,
    });
};



/**
 * 修改产品特点
 * @param {*} params 
 */
export const updateTrait = params => {
    return axios({
        method: "post",
        url: "proTrait/updateTrait",
        params,
        isShowMsg: true
    });
};


/**
 * 根据特点id删除特点
 * @param {*} params 
 */
export const deleteById = params => {
    return axios({
        method: "get",
        url: "proTrait/deleteById",
        params,
        isShowMsg: true
    });
};



//关于公司
/**
 * 添加公司简介
 * @param {*} params 
 */
export const addCompany = params => {
    return axios({
        method: "post",
        url: "company/addCompany",
        params,
        isShowMsg: true
    });
};



/**
 * 查询公司简介
 * @param {*} params 
 */
export const findAll = params => {
    return axios({
        method: "get",
        url: "company/findAll"
    });
};



/**
 * 修改公司简介
 * @param {*} params 
 */
export const updateCompany = params => {
    return axios({
        method: "post",
        url: "company/updateCompany",
        params,
        isShowMsg: true
    });
};



/**
 * 删除公司简介
 * @param {*} params 
 */
export const delCompany = params => {
    return axios({
        method: "get",
        url: "company/delCompany",
        params,
        isShowMsg: true
    });
};