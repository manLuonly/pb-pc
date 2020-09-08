import {login, logout} from "@/service";
import {setToken, setRole, removeToken, removeName, getName} from "@/utils/auth";
import VueRouter, {resetRouter} from "@/router";
import asyncRoutes from "@/router/asyncRoutes";
import { removeStore } from "@/api/storage";

const user = {
    namespaced: true,
    state: {
        systemName:"element后台系统",
        userName: "",
        addRouters: [],
        routers: [],
    },
    mutations: {
        setAddRouters(state, role) {
            resetRouter();
            //得到权限路由
            state.addRouters = asyncRoutes.filter(route => {
                const roles = route.meta.roles;
                return roles.includes(role);
            });
            // addRoutes成功后，不会改变router.options.routes里面的数据，渲染菜单用的是vuex里routers的数据
            VueRouter.addRoutes(state.addRouters);

            //保证每次vuex拿到完整的routes,在store里维护一个routes对象，然后使用这个对象遍历生成侧面导航栏
            // 之前框架是使用router.options.routes渲染，但router.options.routes不能恢复之前的状态，会导致每次登陆都会叠加
            const routers = VueRouter.options.routes.concat(state.addRouters);
            this.commit("setRouters", routers);
        },
        setRouters(state, routers) {
            state.routers = routers;
        },
    },
    actions: {
        // 登录
        Login({commit, dispatch}, form) {
            return new Promise((resolve, reject) => {
                login(form)
                    .then(res => {
                        setToken("token", res.data.token);
                        setRole("role", res.data.role);
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
                        removeName("role");
                        removeStore("vuex");
                        resetRouter();
                        commit("setRouters", []);
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
