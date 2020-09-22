import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import user from "./modules/user";
import vuexForever from "./vuexForever";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user,
    },
    getters,
    plugins: [vuexForever.persistedstate("localStorage", ["user.userName"])],
});

export default store;
