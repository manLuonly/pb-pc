<template>
    <el-container id="login-tl2" class="login-tl2" direction="vertical">
       <el-main class="login-tl2-main">
          <div class="garden-box">
             <div class="garden-bg animate__animated animate__bounce animate__infinite"></div>
             <div class="garden-1 animate__animated animate__rotateOut animate__infinite"></div>
             <div class="garden-2 animate__animated animate__rotateOut animate__infinite"></div>
             <div class="garden-3 animate__animated animate__rotateOut animate__infinite"></div>
<!--             <i class="garden-1-icon1 animate__animated animate__flash animate__infinite animate__delay-1s"></i>-->
<!--             <i class="garden-1-icon2 animate__animated animate__flash animate__infinite animate__delay-2s"></i>-->
<!--             <i class="garden-2-icon1 animate__animated animate__flash animate__infinite animate__delay-1s"></i>-->
<!--             <i class="garden-2-icon2 animate__animated animate__flash animate__infinite animate__delay-3s"></i>-->
<!--             <i class="garden-2-icon3 animate__animated animate__flash animate__infinite animate__delay-2s"></i>-->
<!--             <i class="garden-2-icon4 animate__animated animate__flash animate__infinite animate__delay-3s"></i>-->
<!--             <i class="garden-3-icon1 animate__animated animate__flash animate__infinite animate__delay-4s"></i>-->
          </div>
       </el-main>
    </el-container>
</template>

<script>

    export default {
        name: 'loginTl2',

        data () {
            return {
                arr: []
            }
        }
    }
</script>

<style lang='scss' scoped>

   .login-tl2 {
      position: relative;
      left: 0;
      top: 0;
      background: url("../../../assets/img/login/tl2.jpg") no-repeat 0 0;
      background-size: 100% 100%;

      .animate__bounce {
         -webkit-animation-name: bounce;
         animation-name: bounce;
         -webkit-transform-origin: center bottom;
         transform-origin: center bottom;
      }
      @-webkit-keyframes bounce {
         from,
         0%,
         to {
            -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
         }

         100% {
            -webkit-transform: translate3d(0, -20px, 0) scaleY(1.02);
            transform: translate3d(0, -10px, 0) scaleY(1.1);
         }
      }
      @keyframes bounce {
         from,
         0%,
         to {
            -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
         }

         80% {
            -webkit-transform: translate3d(0, -20px, 0) scaleY(1.02);
            transform: translate3d(0, -10px, 0) scaleY(1.1);
         }

         90% {
            -webkit-transform: translate3d(0, -20px, 0) scaleY(1.02);
            transform: translate3d(0, 0, 0) scaleY(1.1);
         }

         100% {
            -webkit-transform: translate3d(0, -2px, 0) scaleY(1.2);
            transform: translate3d(0, -2, 0) scaleY(1.2);
         }
      }

      .animate__rotateOut {
         -webkit-animation-name: rotateOut;
         animation-name: rotateOut;
         -webkit-transform-origin: center;
         transform-origin: center;
      }
      @-webkit-keyframes rotateOut {
         to {
            -webkit-transform: rotate3d(0, 0, 1, 360deg);
            transform: rotate3d(0, 0, 1, 360deg);
         }
      }
      @keyframes rotateOut {
         to {
            -webkit-transform: rotate3d(0, 0, 1, 360deg);
            transform: rotate3d(0, 0, 1, 360deg);
         }
      }

      &-main {
         position: relative;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         padding: 0;
         overflow: hidden;

         .garden-box {
            position: absolute;
            left: pxtorem(280);
            top: pxtorem(200);
            width: pxtorem(590);
            height: pxtorem(590);
            border-radius: 50%;

            .garden-bg {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               background: url("../../../assets/img/login/garden-center.png") no-repeat;
               background-size: 100% 100%;
               -webkit-animation-duration: 3s;
               animation-duration: 3s;
            }

            .garden-1 {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               background: url("../../../assets/img/login/garden-1.png") no-repeat;
               background-size: 100% 100%;
               -webkit-animation-duration: 2s;
               animation-duration: 2s;
            }
            .garden-2 {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               background: url("../../../assets/img/login/garden-2.png") no-repeat;
               background-size: 100% 100%;
               -webkit-animation-duration: 3s;
               animation-duration: 3s;
            }
            .garden-3 {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               background: url("../../../assets/img/login/garden-3.png") no-repeat;
               background-size: 100% 100%;
               -webkit-animation-duration: 4s;
               animation-duration: 4s;
            }
            .garden-1-icon1 {
               position: absolute;
               top: pxtorem(14);
               left: pxtorem(100);
               width: pxtorem(108);
               height: pxtorem(112);
               background: url("../../../assets/img/login/garden-1-icon2.png") no-repeat;
               background-size: 100% 100%;
               -webkit-animation-duration: 3s;
               animation-duration: 3s;
            }
            .garden-1-icon2 {
               position: absolute;
               bottom: pxtorem(-20);
               right: pxtorem(120);
               width: pxtorem(108);
               height: pxtorem(112);
               background: url("../../../assets/img/login/garden-1-icon1.png") no-repeat;
               background-size: 100% 100%;
               -webkit-animation-duration: 3s;
               animation-duration: 3s;
            }
            .garden-2-icon1 {
               position: absolute;
               top: pxtorem(150);
               left: pxtorem(26);
               width: pxtorem(108);
               height: pxtorem(112);
               background: url("../../../assets/img/login/garden-2-icon1.png") no-repeat;
               background-size: 100% 100%;
               -webkit-animation-duration: 4s;
               animation-duration: 4s;
            }

            .garden-2-icon2 {
               position: absolute;
               top: pxtorem(400);
               left: pxtorem(80);
               width: pxtorem(108);
               height: pxtorem(112);
               background: url("../../../assets/img/login/garden-2-icon2.png") no-repeat;
               background-size: 100% 100%;
               -webkit-animation-duration: 5s;
               animation-duration: 5s;
            }

            .garden-2-icon3 {
               position: absolute;
               top: pxtorem(340);
               right: pxtorem(30);
               width: pxtorem(108);
               height: pxtorem(112);
               background: url("../../../assets/img/login/garden-2-icon3.png") no-repeat;
               background-size: 100% 100%;
               -webkit-animation-duration: 6s;
               animation-duration: 6s;
            }

            .garden-2-icon4 {
               position: absolute;
               top: pxtorem(100);
               right: pxtorem(50);
               width: pxtorem(108);
               height: pxtorem(112);
               background: url("../../../assets/img/login/garden-2-icon4.png") no-repeat;
               background-size: 100% 100%;
               -webkit-animation-duration: 7s;
               animation-duration: 7s;
            }

            .garden-3-icon1 {
               position: absolute;
               top: pxtorem(84);
               right: pxtorem(266);
               width: pxtorem(64);
               height: pxtorem(64);
               background: url("../../../assets/img/login/garden-3-icon1.png") no-repeat;
               background-size: 100% 100%;
               -webkit-animation-duration: 5s;
               animation-duration: 5s;
            }
         }
         .garden-point {
            position: absolute;
            width: pxtorem(14);
            height: pxtorem(14);
            opacity: 0;
            background: url("../../../assets/img/login/point_2.png") no-repeat;
            background-size: 100% 100%;
         }
      }
   }
</style>
