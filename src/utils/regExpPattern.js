// 存放所有的正则表达式

//大于0的数
export const moreZeroCheck = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^\d\.\d{1,2}$)/;

//中国手机号(严谨), 根据工信部2019年最新公布的手机号段
export const telCheck = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;

//座机号码
export const shortTelCheck = /^0[1-9][0-9]{1,2}-[2-8][0-9]{6,7}$/;

//HTML标签
export const htmlCheck = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/

/**
 * base64格式
 *
 * @examples: ['data:image/gif;base64,xxxx==']
*/
export const base64Check = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i;

/**
 * 日期
 *
 * @examples: ['1990-12-12', '2020-1-1']
 */
export const dateTimeCheck = /^\d{4}(-)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/;

/**
 * 邮箱地址(email)
 *
 * @examples: ['90203918@qq.com', 'nbilly@126.com']
 */
export const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * 纯中文/汉字
 *
 * @examples: ['正则', '前端']
 */
export const chineseCheck = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/;

/**
 * 是否小数
 *
 * @examples: ['0.0', '0.09']
 */
export const decimalCheck = /^\d+\.\d+$/;

/**
 * 微信号，6至20位，以字母开头，字母，数字，减号，下划线
 *
 * @examples: ['github666', 'kd_-666']
 */
export const wxNumberCheck = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;

