import dayjs from 'dayjs'
import { dateTimeFormat } from '@/constValues'

export default function (value) {
    if (!value) return "";

    return dayjs(value).format(dateTimeFormat)
}
