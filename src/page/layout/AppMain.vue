<template>
	<section class="app-main">
		<transition name="fade-transform" mode="out-in">
			<router-view :key="key" />
		</transition>
	</section>
</template>

<script>
export default {
	name: "AppMain",
	computed: {
		key() {
			return this.$route.path;
		},
	},
};
</script>

<style scoped lang="scss">
.app-main {
	box-sizing: border-box;
	height: 100%;
	min-height: 100%;
	width: 100%;
	padding-top: $page-header_margin_bottom;
	position: relative;
	overflow-x: hidden;
	overflow-y: auto;
	background-color: #f8f8f8;
}
</style>
