import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import app from "./modules/app";
import user from "./modules/user";
import vuexForever from "./vuexForever";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        user,
    },
    getters,
    //数据持久化
    // 非Module格式：xxxx
    // 使用了Module的格式：ModuleName.xxxx，
    plugins: [vuexForever.persistedstate("localStorage", ["user.userName"])],
});

export default store;
