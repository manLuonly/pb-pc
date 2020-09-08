<template>
	<div class="content">
		<h2 class="title">欢迎登录海鲜系统</h2>
		<el-form class="form-c" :model="form" :rules="rules" ref="form">
			<el-form-item prop="username">
				<el-input
					class="input-username"
					placeholder="请输入账号"
					clearable
					v-model="form.username"
					maxlength="20"
					@keyup.enter.native="submitForm"
				>
					<i slot="prefix" class="el-icon-user prefix_icon"></i>
				</el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input
					placeholder="请输入密码"
					clearable
					class="input-password"
					v-model="form.password"
					show-password
					maxlength="20"
					@keyup.enter.native="submitForm"
				>
					<i slot="prefix" class="el-icon-lock prefix_icon"></i>
				</el-input>
			</el-form-item>
			<el-button type="primary" @click="submitForm" class="submit_btn" :loading="$attrs.loading">登录</el-button>
		</el-form>
	</div>
</template>

<script>
export default {
	name: "loginContent",
	data() {
		return {
			form: {
				username: "",
				password: "",
			},
			rules: {
				username: [
					{ required: true, message: "请输入账号", trigger: "blur" },
					{
						max: 20,
						message: "长度在 3 到 5 个字符",
						trigger: "blur",
					},
				],
				password: [
					{ required: true, message: "请输入密码", trigger: "blur" },
					{
						min: 3,
						max: 20,
						message: "密码长度为 6 ~ 20！",
						trigger: "blur",
					},
				],
			},
		};
	},
	methods: {
		submitForm() {
			this.$refs.form.validate((valid) => {
				require("js-md5")(this.form.password);

				if (valid) {
					this.$emit("submit", {
						...this.form,
						password: require("js-md5")(this.form.password),
					});
				}
			});
		},
	},
};
</script>

<style lang='scss' scoped>
@import "./content.scss";
</style>
