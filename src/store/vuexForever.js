// vuex-persistedstate 持久化state的配置文件
import createPersistedState from "vuex-persistedstate";

export default {
    /**
     * 持久化存储vuex state配置函数   ！！ vuex state数据被改变时才会触发持久化存储 ！！
     *
     * @param {String} sessionStorage / localStorage
     * @param {Array} paths
     * @return  vuex-persistedstate配置
     */
    persistedstate(storage = "sessionStorage", paths = []) {
        return createPersistedState({
            storage: window[storage],
            // 持久化的state数组
            paths
        });
    }
};
