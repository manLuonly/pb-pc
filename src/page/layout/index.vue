<template>
	<div  class="app-wrapper ">
		<page-header />
		<sidebar class="sidebar-container" />
		<div class="main-container">
			<app-main />
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import AppMain  from './AppMain'
import Sidebar from './sidebar'
import pageHeader from "@/components/page-header";

export default {
	name: "Layout",
	components: {
		Sidebar,
		AppMain,
		pageHeader,
	}
};
</script>

<style lang="scss" scoped>
.app-wrapper {
	@include clearfix;
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
}

</style>
