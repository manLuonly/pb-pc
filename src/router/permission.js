import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth";

NProgress.configure({
    showSpinner: false
});

//白名单
const whiteList = ["/login", "/index/index"];

router.beforeEach(async(to, from, next) => {
    NProgress.start();

    // //获取
    const hasToken = getToken("token") || 666;

    if (hasToken) {
        if (to.path === "/login") {
            next();
            NProgress.done();
        } else {
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
