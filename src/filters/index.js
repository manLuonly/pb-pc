import Vue from 'vue'
import dateFormat from './dateFormat'

const filters = {
    dateFormat
};

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});


