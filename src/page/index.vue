<template>
	<div class="index">
		首页
	</div>
</template>

<script>
export default {
	name: "",
	mounted() {
		this.$axios({
			method: "get",
			url:
				"/movieOnInfoList?token=&optimus_uuid=91DA1510F1B311EA98BE01FEC09733F2C8C007C48FD340129D2B60BE60C9819E&optimus_risk_level=71&optimus_code=10",
			isShowMsg: false,
			axiosOptions: {
				headers: {
					dad: 66,
				},
			},
		});
	},
};
</script>

<style lang='scss' scoped>
.index {
	height: 10000px;
}
</style>
