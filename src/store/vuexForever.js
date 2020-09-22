import createPersistedState from "vuex-persistedstate";

export default {
    persistedstate(storage = "sessionStorage", paths = []) {
        return createPersistedState({
            storage: window[storage],
            // 持久化的state数组
            paths
        });
    }
};
