<template>
	<div class="login-tl">
		<div class="login-bg-c">
			<Logintl1 style="width: 100%;height: 100%;"></Logintl1>
		</div>
		<login-content v-on="$listeners" v-bind="$attrs" ref="loginContent" />
	</div>
</template>

<script>
import loginContent from "./loginContent";
import Logintl1 from "./tl1";

export default {
	name: "loginPage",
	components: {
		loginContent,
		Logintl1,
	},
	methods: {
		resetForm() {
			this.$refs.loginContent.resetForm();
		},
	},
};
</script>

<style lang='scss' scoped>
.login-tl {
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;

	.logo-c {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;

		.logo {
			display: inline-block;
			margin-top: 66px;
			margin-left: 48px;
		}
	}

	.login-bg-c {
		position: absolute;
		top: 0;
		bottom: 30px;
		width: 100%;
		height: 100%;
	}

	.login-footer {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 2;
		width: 100%;
		height: 30px;
		background-color: #fbfbfb;
		color: #333;
		font-size: 12px;
		line-height: 30px;
		text-align: right;

		.cs-qr-box {
			position: absolute;
			width: 110px;
			height: 140px;
			right: 30px;
			bottom: 140%;
		}
	}
}
</style>
