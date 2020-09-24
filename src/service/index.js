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
        isForm: true,
        isShowMsg: true
    })
};


//首页轮播图
export const addSlideShow = params => {
    return axios({
        method: "post",
        params,
        url: "slideshow/addSlideShow",
        isShowMsg: true,
        isForm: true
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

/**
 * 添加案例
 * @param {*} params
 */
export const comCaseAddCase = params => {
    return axios({
        method: "post",
        url: "comCase/addCase",
        params,
        isForm: true,
        isShowMsg: true
    });
};

/**
 * 查询所有案例
 * @param {*} params
 */
export const findAllComCase = params => {
    return axios({
        method: "get",
        url: "comCase/findAll",
    });
};

/**
 * 根据案例的id删除案例
 * @param {*} params
 */
export const comCaseDeleteById = params => {
    return axios({
        method: "get",
        params,
        url: "comCase/delById",
        isShowMsg: true
    });
};

/**
 * 修改案例
 * @param {*} params
 */
export const comCaseUpdateCase = params => {
    return axios({
        method: "post",
        params,
        url: "comCase/updateCase",
        isForm: true,
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
        isForm: true,
        isShowMsg: true
    });
};


/**
 * 根据产品名称查询产品特点
 * @param {*} params 
 */
export const proTraitFindByProName = params => {
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
        isForm: true,
        isShowMsg: true
    });
};


/**
 * 根据特点id删除特点
 * @param {*} params 
 */
export const proTraitDeleteById = params => {
    return axios({
        method: "get",
        url: "proTrait/deleteById",
        params,
        isShowMsg: true
    });
};









//解决方案(产品原理模块)
/**
 * 添加产品原理
 * @param {*} params 
 */
export const proTheoryAddTheory = params => {
    return axios({
        method: "post",
        url: "proTheory/addTheory",
        params,
        isForm: true,
        isShowMsg: true
    });
};



/**
 * 根据产品名称查询产品原理
 * @param {*} params 
 */
export const proTheoryFindByProName = params => {
    return axios({
        method: "get",
        url: "proTheory/findByProName",
        params
    });
};


/**
 * 修改产品原理
 * @param {*} params 
 */
export const proTheoryUpdateProTheory = params => {
    return axios({
        method: "post",
        url: "proTheory/updateProTheory",
        params,
        isForm: true,
        isShowMsg: true
    });
};

/**
 * 根据id删除产品原理
 * @param {*} params 
 */
export const proTheoryDeleteById = params => {
    return axios({
        method: "get",
        url: "proTheory/deleteById",
        params
    });
};







//产品参数模块
/**
 * 添加产品参数
 * @param {*} params 
 */
export const proParamAddParam = params => {
    return axios({
        method: "post",
        url: "proParam/addParam",
        params,
        isForm: true,
        isShowMsg: true
    });
};



/**
 * 根据产品名称查询
 * @param {*} params 
 */
export const proParamFindByProName = params => {
    return axios({
        method: "get",
        url: "proParam/findByProName",
        params
    });
};



/**
 * 根据id修改产品参数
 * @param {*} params 
 */
export const proParamUpdateById = params => {
    return axios({
        method: "post",
        url: "proParam/updateById",
        params,
        isForm: true,
        isShowMsg: true
    });
};


/**
 * 根据id删除产品参数
 * @param {*} params 
 */
export const proParamDeleteById = params => {
    return axios({
        method: "get",
        url: "proParam/deleteById",
        params
    });
};





// 产品和产品图模块

/**
 * 添加产品和产品图片
 * @param {*} params 
 */
export const productAddProduct = params => {
    return axios({
        method: "post",
        url: "product/addProduct",
        params,
        isForm: true,
        isShowMsg: true
    });
};




/**
 * 查询所有产品和产品图片
 * @param {*} params 
 */
export const productFindAll = params => {
    return axios({
        method: "get",
        url: "product/findAll"
    });
};



/**
 * 修改产品以及产品图片
 * @param {*} params 
 */
export const productUpdatePro = params => {
    return axios({
        method: "post",
        url: "product/updatePro",
        params,
        isForm: true,
        isShowMsg: true
    });
};



/**
 * 删除产品（同时删除该产品的参数以及产品原理）
 * @param {*} params 
 */
export const productDeleteById = params => {
    return axios({
        method: "get",
        url: "product/deleteById",
        params,
        isShowMsg: true
    });
};






//资质证书模块

/**
 * 添加资质证书
 * @param {*} params 
 */
export const comCertAddCert = params => {
    return axios({
        method: "post",
        url: "comCert/addCert",
        params,
        isForm: true,
        isShowMsg: true
    });
};


/**
 * 查询所有资质证书
 * @param {*} params 
 */
export const comCertFindAll = params => {
    return axios({
        method: "get",
        url: "comCert/findAll"
    });
};



/**
 * 根据证书名称查询
 * @param {*} params 
 */
export const findByCertName = params => {
    return axios({
        method: "get",
        url: "comCert/findByCertName"
    });
};




/**
 * 修改证书
 * @param {*} params 
 */
export const comCertUpdateCert = params => {
    return axios({
        method: "post",
        url: "comCert/updateCert",
        params,
        isForm: true,
        isShowMsg: true
    });
};



/**
 * 根据id删除资质证书
 * @param {*} params
 */
export const comCertDeleteById = params => {
    return axios({
        method: "get",
        url: "comCert/deleteById",
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
        isForm: true,
        isShowMsg: true
    });
};



/**
 * 查询公司简介
 * @param {*} params 
 */
export const companyFindAll = params => {
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
        isForm: true,
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