<template>
	<div class="loading-box  z-row-center z-flex-col z-col-center" v-show="visible">
		<loadingIcon />
        <div class="m-top-10 z_font_bold"> 拼命加载中... </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			visible: true,
		};
	},
};
</script>
<style lang="scss" scoped>
.loading-box {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
    background: rgba(0, 0, 0, 0.2) ;
    color: #000;
    font-family: YouYuan;
    letter-spacing: 1px;
}

</style>
