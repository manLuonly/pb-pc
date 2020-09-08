// 存放所有的正则表达式

//大于0的数 numberMoreThanZero
export const numberMoreThanZero = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^\d\.\d{1,2}$)/;

//手机号码
export const currentPhone = /^1(?:3[0-9]|4[5-9]|5[0-9]|6[12456]|7[0-8]|8[0-9]|9[0-9])[0-9]{8}$/;

//座机号码
export const currentLandline = /^0[1-9][0-9]{1,2}-[2-8][0-9]{6,7}$/;

//不允许输入空格等特殊符号
export const specialCharacters = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;

