/**
 * 获取 商家介绍信息
 *
 * @method GET
 *
 *
 */
export const businessInfo = params => _axios.get('small/introduceSetting', params, false)


/**
 * 更新 商家介绍信息
 *
 * @method formPost
 *
 */
export const updateBusinessInfo = params => _axios.post('small/introduceSetting/update', params, true)


/**
 * 获取分类列表
 *
 * @method get
 *
 */
export const goodsType = params => _axios.get('goodsTypes', params, false)

/**
 * 新增分类
 *
 * @method post
 *
 */
export const addGoodsType = params => _axios.post('goodsTypes', params, true)

/**
 * 编辑分类
 *
 * @method put
 *
 */
export const editGoodsType = params => _axios.put('goodsTypes', params, true)

/**
 * 删除分类
 *
 * @method delete
 *
 */
export const deleteGoodsType = params => _axios.sendDelete('goodsTypes', params, true)



/**
 * 获取商品列表
 *
 * @method get
 *
 */
export const goodsClassify = params => _axios.get('goodsClassifys', params, false)

/**
 * 新增商品
 *
 * @method post
 *
 */
export const addGoodsClassify = params => _axios.post('goodsClassifys', params, true)

/**
 * 编辑商品
 *
 * @method put
 *
 */
export const editGoodsClassify = params => _axios.put('goodsClassifys', params, true)


/**
 * 删除商品
 *
 * @method delete
 *
 */
export const deleteGoodsClassify = params => _axios.sendDelete('goodsClassifys', params, true)



/**
 * 获取订单
 *
 * @method get
 *
 */
export const goodsOrder = params => _axios.get('goodsOrders/goods', params, false)



/**
 * 获取图片分组
 *
 * @method get
 *
 */
export const goodsImagesGrouptype = params => _axios.get('goodsImagesGroupTypes', params, false)
/**
 * 新增图片分组
 *
 * @method post
 *
 */
export const addGoodsImagesGrouptype = params => _axios.post('goodsImagesGroupTypes', params, true)
/**
 * 编辑图片分组
 *
 * @method put
 *
 */
export const editGoodsImagesGrouptype = params => _axios.put('goodsImagesGroupTypes', params, true)
/**
 * 删除图片分组
 *
 * @method delete
 *
 */
export const deleteGoodsImagesGrouptype = params => _axios.sendDelete('goodsImagesGroupTypes', params, true)



/**
 * 获取图片列表
 *
 * @method get
 *
 */
export const goodsImagesGroupList = params => _axios.get('goodsImagesGroupLists', params, false)


/**
 * 新增图片
 *
 * @method post
 *
 */
export const addGoodsImagesGroupList = params => _axios.post('goodsImagesGroupLists', params, true)


/**
 * 删除图片图片
 *
 * @method delete
 *
 */
export const deleteGoodsImagesGroupList = params => _axios.sendDelete('goodsImagesGroupLists', params, true)


/**
 * 折线图数据统计
 *
 * @method get
 *
 */
export const echartsSalesStat = params => _axios.get('echartsSalesStat', params, true)


/**
 * 获取有无新订单
 * true 为有
 * false 为无
 *
 * @method get
 *
 */
export const goodsOrdersStatus = params => _axios.get('goodsOrders/status', params, false)

