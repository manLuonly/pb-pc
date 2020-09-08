<!-- 提示 -->
<template>
	<el-tooltip effect="dark" :content="content" :placement="placement">
		<i class="el-icon-info cursor_pointer"></i>
	</el-tooltip>
</template>

<script>
export default {
	props: {
		content: String,
		placement: {
			type: String,
			default: "top-start",
		},
	},
	name: "tip",
};
</script>

<style lang='scss' scoped>
</style>
