<template>
	<div class="nav-bar">
		<hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

		<breadcrumb class="breadcrumb-container" />

		<div class="avatar-container">
			<div class="avatar-container_header">
				<img src="~@/assets/img/logo.png" alt srcset draggable="false" />
				<span>智能桂联</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
	components: {
		Breadcrumb,
		Hamburger
	},
	computed: {
		...mapGetters(["sidebar", "avatar"])
	},
	methods: {
		toggleSideBar() {
			this.$store.dispatch("app/toggleSideBar");
		}
	}
};
</script>

<style lang="scss" scoped>
.nav-bar {
	height: 50px;
	overflow: hidden;
	position: relative;
	background: #fff;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

	.hamburger-container {
		line-height: 46px;
		height: 100%;
		float: left;
		cursor: pointer;
		transition: background 0.3s;
		-webkit-tap-highlight-color: transparent;

		&:hover {
			background: rgba(0, 0, 0, 0.025);
		}
	}

	.breadcrumb-container {
		float: left;
	}

	.avatar-container {
		float: right;
		height: 100%;
		margin-right: 30px;
		line-height: 50px;

		&:focus {
			outline: none;
		}

		&_header {
			line-height: 50px;
			text-align: center;
			img {
				width: 70px;
				height: 20px;
				object-fit: cover;
			}
		}
	}
}
</style>
