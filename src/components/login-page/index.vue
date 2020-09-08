<!--

   props:loading:true|false
      loading { boolean } 设置登录按钮loading状态

   Event:@submit:event
      submit({username ,password})  Fn  点击登录的回调事件

   Methods:this.$refs.loginPage.resetForm()
      resetForm() Fn 清空表单
-->
<template>
   <div class="login-tl">
      <div class="logo-c">
         <el-row>
            <el-col :md="16" :lg="20" :xl="24">
               <picture>
                  <source media="(min-width: 1680px)" srcset="~@/assets/img/logo_1x.png">
                  <source media="(min-width: 1480px)" srcset="~@/assets/img/logo_2x.png">
                  <source media="(min-width: 1366px)" srcset="~@/assets/img/logo_3x.png">
                  <img class="logo" src="~@/assets/img/logo_1x.png">
               </picture>
            </el-col>
         </el-row>
      </div>
      <div class="login-bg-c">
         <Logintl1 style="width: 100%;height: 100%;"></Logintl1>
      </div>
      <login-content
         v-on="$listeners"
         v-bind="$attrs"
         ref="loginContent"
      />
      <div class="login-footer">
         <el-row>
            <el-col :md="16" :lg="20" :xl="24">
               <span class="copyright">智能桂联工作室：提供技术支持、承接平面设计、开发设计、如有需求，请联系客服：19195686510 （VX:ZNGL_2020)</span>
               <picture class="cs-qr-box">
                  <source media="(min-width: 1680px)" srcset="~@/assets/img/cs-qr_1x.png">
                  <source media="(min-width: 1480px)" srcset="~@/assets/img/cs-qr_2x.png">
                  <source media="(min-width: 1366px)" srcset="~@/assets/img/cs-qr_3x.png">
                  <img class="cs-qr" src="~@/assets/img/cs-qr_1x.png">
               </picture>
            </el-col>
         </el-row>
      </div>
   </div>
</template>

<script>
    import loginContent from "./loginContent";
    import ThemeBtn from "./ThemeBtn";
    import Logintl1 from "./tl1";

    export default {
        name: "loginPage",
        components: {
            loginContent,
            ThemeBtn,
            Logintl1
        },
        data() {
            return {};
        },

        methods: {
            resetForm() {
                this.$refs.loginContent.resetForm();
            }
        }
    };
</script>

<style lang='scss' scoped>

   .login-tl {
      position: relative;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      .logo-c {
         position: absolute;
         top: 0;
         left: 0;
         z-index: 2;

         .logo {
            display: inline-block;
            margin-top: 66px;
            margin-left: 48px;
         }
      }

      .login-bg-c {
         position: absolute;
         top: 0;
         bottom: 30px;
         width: 100%;
         height: 100%;
      }

      .login-footer {
         position: absolute;
         left: 0;
         bottom: 0;
         z-index: 2;
         width: 100%;
         height: 30px;
         background-color: #fbfbfb;
         color: #333;
         font-size: 12px;
         line-height: 30px;
         text-align: right;

         .cs-qr-box {
            position: absolute;
            width: 110px;
            height: 140px;
            right: 30px;
            bottom: 140%;
         }
      }
   }
</style>
