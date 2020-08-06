import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
   showSpinner: false
});


router.beforeEach(async (to, from, next) => {
   NProgress.start();

   const title = to.meta && to.meta.title;
   if (title) {
      document.title = title;
   }
   next();
});

router.afterEach(() => {
   NProgress.done();
});
