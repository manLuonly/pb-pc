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
        path: "/index",
        redirect: "/index/index",
        component: Layout,
        children: [{
            path: "index",
            name: "index",
            component: () =>
                import ("@/page"),
            meta: {
                icon:"el-icon-s-home",
                title: "首页"
            }
        }]
    },
];
