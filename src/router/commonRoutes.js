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
<<<<<<< HEAD
                icon: "el-icon-s-home",
                title: "首页"
=======
                icon:"el-icon-s-home",
                title: "首页轮播图"
>>>>>>> 3f6b3fc705a899ba808e10b76ae0fd8ce811f795
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
                icon: "el-icon-s-home",
                title: "案例"
            }
        }]
    },
    {
        path: "/product",
        component: Layout,
        meta: {
            icon: "el-icon-s-home",
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
            },
            {
                path: "product-parameter",
                name: "product-parameter",
                component: () =>
                    import ("@/page/product/product-parameter"),
                meta: {

                    title: "产品参数"
                }
            },
            {
                path: "solve-program",
                name: "solve-program",
                component: () =>
                    import ("@/page/product/solve-program"),
                meta: {

                    title: "解决方案"
                }
            },
        ]
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
                icon: "el-icon-s-home",
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
                icon: "el-icon-s-home",
                title: "关于公司"
            }
        }]
    },
];