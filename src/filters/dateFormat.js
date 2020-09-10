import dayjs from 'dayjs'
import { dateTimeFormat,dateFormat } from '@/constValues'

export const date = function (value) {
    if (!value) return "";

    return dayjs(value).format(dateFormat)
}


export const dateTime = function (value) {
    if (!value) return "";

    return dayjs(value).format(dateTimeFormat)
}
