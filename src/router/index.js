import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/layout";

export const constantRoutes = [
   {
      path: "/404",
      component: () => import("@/components/notFound"),
      hidden: true
   },

   {
      path: "/",
      component: Layout,
      redirect: "/welcome",
      children: [
         {
            path: "welcome",
            name: "welcome",
            component: () => import("@/components/Welcome"),
            meta: {
               title: "点餐后台管理系统",
               icon: "el-icon-s-shop"
            }
         }
      ]
   },
   {
      path: "/order",
      redirect: "/order/order",
      component: Layout,
      children: [
         {
            path: "order",
            name: "order",
            component: () => import("@/page/order/order"),
            meta: {
               title: "订单管理",
               icon: "el-icon-tickets"
            }
         }
      ]
   },
   {
      path: "*",
      redirect: "/404",
      hidden: true
   }
];

const createRouter = () =>
   new Router({
      // mode: 'history', // require service support
      scrollBehavior: () => ({
         y: 0
      }),
      routes: constantRoutes
   });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
   const newRouter = createRouter();
   router.matcher = newRouter.matcher; // 重置 router
}

export default router;
