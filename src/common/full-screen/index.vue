<!-- 全屏组件 -->
<template>
    <div class="full-screen">
        <el-tooltip
            :content="isFullScreenFlag ? '退出全屏' : '进入全屏'"
            placement="bottom"
        >
            <el-button
                :icon="isFullScreenFlag ? 'iconfont zuixiao' : 'iconfont zuida'"
                circle
                @click="fullScreen"
                size="small"
            ></el-button>
        </el-tooltip>
    </div>
</template>

<script>
export default {
    name: "full-screen",
    data() {
        return {
            isFullScreenFlag: false,
        };
    },
    methods: {
        isFullScreen() {
            return Boolean(
                document.fullscreenElement ||
                    document.msFullscreenElement ||
                    document.mozFullScreenElement ||
                    document.webkitFullscreenElement ||
                    false
            );
        },
        fullScreen() {
            this.isFullScreenFlag = !this.isFullScreen();
            if (this.isFullScreen()) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                if (typeof cfs !== "undefined" && cfs) {
                    cfs.call(el);
                }
            } else {
                let el = document.documentElement;
                let rfs =
                    el.requestFullScreen ||
                    el.webkitRequestFullScreen ||
                    el.mozRequestFullScreen ||
                    el.msRequestFullscreen;
                if (typeof rfs !== "undefined" && rfs) {
                    rfs.call(el);
                }
            }
        },
    },
};
</script>
