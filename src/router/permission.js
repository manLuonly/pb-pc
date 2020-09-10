import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken, getName } from "@/utils/auth";
import store from "@/store";

NProgress.configure({
    showSpinner: false
});

//白名单
const whiteList = ["/login", "/index/index"];

router.beforeEach(async(to, from, next) => {
    NProgress.start();

    // //获取
    const hasToken = getToken("token") || 666;
    const role = getName("role") || "ROLE_ADMIN";

    if (hasToken && role) {
        if (to.path === "/login") {
            next();
            NProgress.done();
        } else {
            store.commit("user/setAddRouters", role);
            next();
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});
