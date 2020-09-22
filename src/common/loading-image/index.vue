<template>
	<el-image fit="contain" v-bind="$attrs" :preview-src-list="[$attrs.src]" lazy >
		<div slot="placeholder" class="img_slot">
			<i class="el-icon-loading"></i>
		</div>
	</el-image>
</template>

<script>
export default {
	name: "loading-image",
};
</script>

