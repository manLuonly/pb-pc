import numeral from "numeral";

//传入的数字为0或null的默认值
numeral.zeroFormat('-');
numeral.nullFormat('-');

//设置为中文
numeral.register('locale', 'chs', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: '千',
        million: '百万',
        billion: '十亿',
        trillion: '兆'
    },
    ordinal: function (number) {
        return '.';
    },
    currency: {
        symbol: '¥'
    }
});
numeral.locale('chs');


/**
 * numeral
 *
 * @description 用于数字格式化
 * @host        http://numeraljs.com/
 *
 */

export default {
    /**
     * 金钱格式化(保留两位小数，四舍五入)
     *
     * @param {Number | String} money 金钱数字
     *
     * @example 1000.234 -> ￥1,000.23
     *
     */
    formatMoney(money) {
        return  numeral(money).format('$0,0.00');
    },
    /**
     * 数字格式化(保留两位小数，四舍五入)
     *
     */
    numberToFixed2(num) {
        return  numeral(num).format('0.00');
    },
    /**
     * 数字转为百分比(保留两位小数，四舍五入)
     *
     * @example 0.974878234 ->  97.488%
     *
     */
    numberToPercent(num) {
        return  numeral(num).format('0.00%');
    },
    /**
     * 小数的相加(保留两位小数，四舍五入)
     *
     */
    numberAdd(num1, num2) {
        return  (numeral(num1).add(num2)).format('0.00')
    },
    /**
     * 小数的相减(保留两位小数，四舍五入)
     *
     */
    numberSubtract(num1, num2) {
        return  (numeral(num1).subtract(num2)).format('0.00')
    },
    /**
     * 小数的相乘(保留两位小数，四舍五入)
     *
     */
    numberMultiply(num1, num2) {
        return  (numeral(num1).multiply(num2)).format('0.00')
    },
    /**
     * 小数的相除(保留两位小数，四舍五入)
     *
     */
    numberDivide(num1, num2) {
        return  (numeral(num1).divide(num2)).format('0.00')
    }
}
