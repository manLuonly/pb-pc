import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import commonRoutes from "./commonRoutes";

// 初始化路由的时候，只挂载不需要用户权限的路由表
const createRouter = () =>
   new Router({
      // mode: 'history',
      scrollBehavior: () => ({
         y: 0
      }),
      routes: commonRoutes
   })
const router = createRouter();
export function resetRouter() {
   const newRouter = createRouter();
   router.matcher = newRouter.matcher; // 重置 router
}

export default router;
