<template>
	<div id="app">
		<router-view :key="$route.fullpath"></router-view>
	</div>
</template>

<script>
export default {
	name: "app",
};
</script>

<style lang="scss">
//阿里iconfont
@import url("//at.alicdn.com/t/font_2009053_u53dnmk0pz.css");

#app {
	height: 100%;
	width: 100%;
	font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
		"Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
