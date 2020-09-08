import _ from "lodash";
let md5 = require("js-md5");
import dayjs from "dayjs";

export default {
    /**
     * 获取高度
     * 设置el-table 表格固定高度,
     *
     * @param {Number} __titleNum
     * @param {*} isPaging
     * @param {*} __tabNum
     * @param {Boolean} __isCard 是否为el-card组件包裹
     *
     * @return {String} 表格高度
     */
    getTableHeight(
        __titleNum = 0,
        isPaging = false,
        __tabNum = 0,
        __isCard = false
    ) {
        let documentHeight = document.documentElement.offsetHeight;
        let minusHeight = 0;
        if (__titleNum > 0) {
            minusHeight = __titleNum * 47;
        }
        if (isPaging) {
            minusHeight += 52;
        }
        if (__tabNum > 0) {
            minusHeight += __tabNum * 40;
        }
        if (__isCard) {
            minusHeight += 152;
        }
        return documentHeight - 160 - minusHeight;
    },

    /***
     * lodash
     */
    _: _,
    /**
     * 表情和中文字去除
     */
    stringRemoveSpecialSymbols(str) {

        // 特殊符号
        str = str.replace(/[^\u4e00-\u9fa5a-zA-Z0-9\w\/\、\+\-\*\,\.\。\!\?\#\(\)]/g, "");

        // 表情
        str = str.replace(
            /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,
            ""
        );
        return str;
    },

    /**
     * md5加密方法
     *
     * @param
     *
     * @example this.$utils.md5("lijiacheng")
     *
     * @return {string} 加密后的字符串
     */
    md5: md5,

    /**
     * dayjs
     */
    dayjs: dayjs,
    /**
     *
     * 置顶当前滚动区域
     *
     *
     * @param  el 滚动区域的dom  不传默认为body
     * @param  scrollTop 滚动的高度
     *
     *
    */
    scrollToTop(el, scrollTop = 0) {
        const cubic = value => Math.pow(value, 3);
        const easeInOutCubic = value =>
            value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;

        el = el || document.documentElement;
        const beginTime = Date.now();
        //开始位置
        const beginValue = el.scrollTop;
        const rAF =
            window.requestAnimationFrame || (func => setTimeout(func, 16));
        const frameFunc = () => {
            if (scrollTop) {
                el.scrollTop = scrollTop;
            } else {
                const progress = (Date.now() - beginTime) / 500;
                if (progress < 1) {
                    el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
                    rAF(frameFunc);
                } else {
                    el.scrollTop = 0;
                }
            }
        };
        rAF(frameFunc);
    }
};
