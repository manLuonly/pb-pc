<template>
	<div class="login_page">
		<login-page :loading="loading" @submit="submitForm" ref="loginPage"></login-page>
	</div>
</template>

<script>
import loginPage from "@/components/login-page";
import { getRole } from "@/utils/auth";

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
			// this.loading = true;
			// this.$store
			// 	.dispatch("Login", loginForm)
			// 	.then(() => {
					// const role = getRole().role;
					// if (role === "ROLE_ADMIN") {
					// 	this.$router.replace({ path: "/" });
					// } else {
						this.$router.replace({
							path: "/userShop/warehouseStore/supplier",
						});
					// }
				// })
				// .finally(() => {
				// 	this.loading = false;
				// });
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
