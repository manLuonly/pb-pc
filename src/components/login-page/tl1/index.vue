<template>
	<div class="login-tl1" direction="vertical"></div>
</template>

<script>
export default {
	name: "loginTl1",
};
</script>

<style lang='scss' scoped>
.login-tl1 {
	position: relative;
	left: 0;
	top: 0;
	background: url("~@/assets/img/login/bg.png") no-repeat center;
	background-size: cover;

	.effect-c {
		position: relative;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 0;
		overflow: hidden;

		.animate__tl1 {
			display: inline-block;
			position: absolute;
			left: 1px;
			bottom: -100%;
			height: 100%;
			width: 100%;
		}
	}
}
</style>
