import Vue from 'vue'
import { date, dateTime } from './dateFormat'

const filters = {
    dateFormat:date,
    dateTimeFormat:dateTime,
};

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});


