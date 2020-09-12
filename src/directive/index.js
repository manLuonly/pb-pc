import Vue from "vue";
import zLoading from './loading/index'

const directives = {
    zLoading
};

Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key]);
});

