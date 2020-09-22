<template>
	<el-image fit="contain" v-bind="$attrs" :preview-src-list="previewSrcList" lazy>
		<div slot="placeholder" class="img_slot">
			<i class="el-icon-loading"></i>
		</div>
	</el-image>
</template>

<script>
export default {
	name: "loading-image",
	computed: {
		previewSrcList() {
            const srcList = this.$attrs.srcList;

			return srcList && srcList.length
				? srcList
				: [this.$attrs.src];
		},
	},
};
</script>

