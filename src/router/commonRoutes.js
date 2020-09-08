import Layout from "@/page/layout/index.vue";
// 不需要用户权限的路由表
export default [

    {
        path: "/login",
        name: "login",
        component: () => import("@/page/login")
    }
];
