import Layout from "@/page/layout/index.vue";
// 不需要用户权限的路由表
export default [{
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("@/page/login"),
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
                title: "首页轮播图"
            }
        }]
    },
    {
        path: "/case",
        component: Layout,
        children: [{
            path: "case",
            name: "case",
            component: () =>
                import ("@/page/case/case"),
            meta: {
                title: "案例"
            }
        }]
    },
    {
        path: "/product",
        component: Layout,
        meta: {
            title: "产品"
        },
        children: [{
            path: "product-child",
            name: "product-child",
            component: () =>
                import ("@/page/product/product"),
            meta: {

                title: "产品"
            }
        }]
    },
    {
        path: "/certificate",
        component: Layout,
        children: [{
            path: "certificate",
            name: "certificate",
            component: () =>
                import ("@/page/certificate/certificate"),
            meta: {
                title: "资质证书"
            }
        }]
    },
    {
        path: "/about-company",
        component: Layout,
        children: [{
            path: "about-company",
            name: "about-company",
            component: () =>
                import ("@/page/about-company/about-company"),
            meta: {
                title: "关于公司"
            }
        }]
    },
];