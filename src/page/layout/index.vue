<template>
    <div :class="classObj" class="app-wrapper">
        <page-header />
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <app-main />
        </div>
        <purchase-dialog v-if="isShowPurchaseDialog"></purchase-dialog>
        <order-dialog v-if="isShowOrderDialog"></order-dialog>
        <shops-dialog v-if="isShowShopsDialog"></shops-dialog>
    </div>
</template>

<script>
import purchaseDialog from "@/components/form/purchaseDialog";
import orderDialog from "@/components/form/orderDialog";
import shopsDialog from "@/components/form/shopsDialog";
import { Navbar, Sidebar, AppMain } from "./layout";
import { mapGetters } from "vuex";
import pageHeader from "@/components/page-header";

export default {
    name: "Layout",
    data() {
        return {};
    },
    components: {
        Navbar,
        Sidebar,
        AppMain,
        purchaseDialog,
        orderDialog,
        shopsDialog,
        pageHeader,
    },
    computed: {
        sidebar() {
            return this.$store.state.app.sidebar;
        },
        classObj() {
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened,
                withoutAnimation: this.sidebar.withoutAnimation,
            };
        },
        ...mapGetters([
            "isShowPurchaseDialog",
            "isShowOrderDialog",
            "isShowShopsDialog",
        ]),
    },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
	@include clearfix;
	position: relative;
	height: 100%;
   width: 100%;
   overflow: hidden;
	&.mobile.openSidebar {
		position: fixed;
		top: 0;
	}
}
.drawer-bg {
	background: #000;
	opacity: 0.3;
	width: 100%;
	top: 0;
	height: 100%;
	position: absolute;
	z-index: 999;
}

.fixed-header {
	position: fixed;
	top: calc(#{$page-header_height} + #{$page-header_margin_bottom});
	right: 0;
	z-index: 9;
	width: calc(100% - #{$sideBarWidth});
	//bugfix 弹窗显示抖动
	padding-right: 0px;
	transition: width 0.28s;
}

.hideSidebar .fixed-header {
	width: calc(100% - 54px);
}

.mobile .fixed-header {
	width: 100%;
}
</style>
