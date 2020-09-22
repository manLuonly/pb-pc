import Layout from "@/page/layout/index.vue";
// 不需要用户权限的路由表
export default [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/page/login"),
    },
    {
        path: "/addSlideShow",
        redirect: "/addSlideShow/addSlideShow",
        component: Layout,
        children: [{
            path: "addSlideShow",
            name: "addSlideShow",
            component: () =>
                import ("@/page/add-slide-show"),
            meta: {
                icon:"el-icon-s-home",
                title: "首页轮播图"
            }
        }]
    },
];
