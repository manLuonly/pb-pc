<!-- 系统顶部头部 -->
<template>
	<div class="page_header">
		<div class="system_name">{{systemName}}</div>
		<div class="right_menu m-right-30">
			<div>账号:{{userName}}</div>
			<el-tooltip class="m-left-20" effect="dark" content="退出登录" placement="bottom">
				<el-button size="small" icon="el-icon-switch-button login-out" @click="logout">退出登录</el-button>
			</el-tooltip>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "page-header",
	computed: {
		...mapGetters(["userName", "systemName"]),
	},
	methods: {
		async logout() {
			await this.$store.dispatch("loginOut");
			this.$router.replace(`/login?redirect=${this.$route.fullPath}`);
		},
	},
};
</script>

<style lang='scss' scoped>
.page_header {
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: $page-header_height;
	background-image: linear-gradient(90deg, #2b435b 0%, #4572a4 100%);
	color: #ffffff;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
	margin-bottom: 2px;
	z-index: 10;
	white-space: nowrap;

	.system_name {
		width: 210px;
		text-align: center;
		font-size: 24px;
		letter-spacing: 1px;
		font-family: 华文宋体, "STSong";
		font-weight: bolder;
	}

	.right_menu {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-size: 14px;

		/deep/ .el-divider--vertical {
			width: 2px;
		}
	}
}
</style>
