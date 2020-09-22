<template>
	<div class="login_page">
		<login-page :loading="loading" @submit="submitForm" ref="loginPage"></login-page>
	</div>
</template>

<script>
import loginPage from "@/components/login-page";
import { login } from "@/service";

export default {
	data() {
		return {
			loading: false,
		};
	},

	components: {
		loginPage,
	},
	methods: {
		submitForm(loginForm) {
			login(loginForm)
				.then((res) => {
					this.$router.replace({
						path: "/addSlideShow",
					});
				})
				.catch((err) => {
					this.$message({
						message: "账号或密码错误",
						type: "error",
					});
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.login_page {
	width: 100%;
	height: 100%;
}
</style>
