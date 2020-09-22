import {login, logout} from "@/service";
import {setToken, removeToken} from "@/utils/auth";
import { removeStore } from "@/api/storage";

const user = {
    namespaced: true,
    state: {
        systemName:"后台管理系统",
        userName: "",
    },
    mutations: {
        SET_USERNAME(state, userName) {
            state.userName = userName
        }
    },
    actions: {
        // 登录
        Login({commit, dispatch}, form) {
            return new Promise((resolve, reject) => {
                login(form)
                    .then(res => {
                        setToken("token", res.data.token);
                        commit("SET_USERNAME", res.data.user);

                        resolve();
                    })
                    .catch(() => {
                        reject();
                    });
            });
        },

        loginOut({commit}) {
            return new Promise((resolve, reject) => {
                logout()
                    .then(() => {
                        removeToken();
                        removeStore("vuex");
                        resolve();
                    })
                    .catch(() => {
                        reject();
                    });
            });
        }
    }
};

export default user;
