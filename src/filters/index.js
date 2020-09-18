import Vue from 'vue'
import { date, dateTime } from './dateFormat'
import noContentFormat from './noContentFormat'

const filters = {
    dateFormat:date,
    dateTimeFormat: dateTime,
    noContentFormat:noContentFormat
};

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});


