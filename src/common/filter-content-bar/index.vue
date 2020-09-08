<template>
	<div class="filter_content_bar">{{text ? '筛选内容：' + text : '暂时没有筛选内容哦~'}}</div>
</template>

<script>
export default {
	name: "filter-content-bar",
	props: {
		text: {
			type: String,
			default: "",
		},
	},
};
</script>

<style lang='scss' scoped>
.filter_content_bar {
	height: 40px;
	line-height: 40px;
	padding-left: 20px;
	font-size: 14px;
	color: #fff;
	letter-spacing: 1px;
	background-color: $zngl-blue;
}
</style>
