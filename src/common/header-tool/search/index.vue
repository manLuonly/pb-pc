<template>
	<div class="search">
		<el-input
			class="search-input"
			:placeholder="customizePlaceholder"
			size="small"
			v-model.trim="searchVal"
			clearable
			@clear="searchList"
			@keyup.enter.native="keyup"
		></el-input>

		<div class="search-c">
			<el-button class="sc-btn" icon="el-icon-search" @click="searchList">搜索</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: "search",
	data() {
		return {
			searchVal: "", // 搜索值
		};
	},
	props: {
		customizePlaceholder: {
			default: "",
		},
	},
	mounted() {},
	methods: {
		searchList() {
			this.$emit("search", this.searchVal);
		},
		keyup() {
			this.searchList()
		}
	},
};
</script>

<style lang='scss' scoped>
.search {
	position: relative;
	top: 0;
	left: 0;
	border-radius: 2px;
	padding-right: 62px;

	&-c {
		position: absolute;
		top: 0;
		right: 0;
		font-size: 12px;
		border-radius: 2px;
		padding-top: 1px;

		.sc-btn {
			padding: 8px 8px;
			// border: none;
			background: #fff;
			font-size: 12px;
			border-radius: 2px;

			&:hover {
				background-color: #ecf5ff;
			}
		}
	}
}
</style>
