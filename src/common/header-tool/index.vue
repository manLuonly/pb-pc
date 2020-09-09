<template>
	<div class="header-tool">
		<div class="tool-l">
			<span class="tool-btn-c" v-for="(item, index) in btsL" :key="index">
				<el-button
					class="tool-btn"
					:disabled="item.display && csRowState"
					:icon="item.icon || ''"
					@click="item.action"
					:style="item.style || {}"
					v-if="!item.hidden"
				>{{item.text}}</el-button>
				<el-divider v-if="!item.hidden && item.link" direction="vertical"></el-divider>
			</span>
			<slot name="tool-left"></slot>
		</div>
		<div class="tool-r">
			<slot class="tool-r-item" name="tool-right"></slot>
			<div class="tool-r-item" v-for="(item, index) in btsR" :key="index">
				<div :class="`${item.id === 6 ? 'r-search' : ''}`" v-if="item.id === 6 && !item.hidden">
					<search :style="item.style" @search="item.action" :customizePlaceholder="customizePlaceholder"></search>
				</div>
				<div v-else>
					<el-button
						class="tool-btn"
						:disabled="item.display"
						:icon="item.icon || ''"
						@click="item.action"
						:style="item.style || {}"
						v-if="!item.hidden"
					>{{item.text}}</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		list: {
			value: Array,
			default: () => {
				return [];
			},
		},
		hIds: {
			value: Array,
			default: () => {
				return [];
			},
		},
		parent: {
			value: Object,
			default: () => {
				return {};
			},
		},
		customizePlaceholder: {
			value: String,
			default: () => {
				return "";
			},
		},
		csRowState: {
			value: Boolean,
			default: false,
		},
	},

	data() {
		return {
			state: false,
			btsL: [
				{
					id: 1,
					text: "新增",
					action: (ev) => {
						this.parent.hasOwnProperty &&
							this.parent.hasOwnProperty("add") &&
							this.parent.add instanceof Function &&
							this.parent.add(ev);
					},
					display: false,
					hidden: false,
					icon: "el-icon-plus",
					link: true,
					style: {},
				},
				{
					id: 2,
					text: "编辑",
					display: true,
					action: (ev) => {
						this.parent.hasOwnProperty &&
							this.parent.hasOwnProperty("modify") &&
							this.parent.modify instanceof Function &&
							this.parent.modify(ev);
					},
					hidden: false,
					link: true,
					icon: "el-icon-edit",
					style: {},
				},
				{
					id: 3,
					text: "刷新",
					link: true,
					action: (ev) => {
						this.parent.hasOwnProperty &&
							this.parent.hasOwnProperty("refresh") &&
							this.parent.refresh instanceof Function &&
							this.parent.refresh(ev);

						this.$message.success("刷新成功");
					},
					display: false,
					hidden: false,
					icon: "el-icon-refresh",
					style: {},
				},
				{
					id: 4,
					text: "删除",
					link: true,
					display: true,
					action: (ev) => {
						this.parent.hasOwnProperty &&
							this.parent.hasOwnProperty("delete") &&
							this.parent.delete instanceof Function &&
							this.parent.delete(ev);
					},
					hidden: false,
					icon: "el-icon-delete",
					style: {},
				},
			],
			btsR: [
				{
					id: 5,
					text: "筛选",
					link: true,
					display: false,
					action: (ev) => {
						this.parent.hasOwnProperty &&
							this.parent.hasOwnProperty("screen") &&
							this.parent.screen instanceof Function &&
							this.parent.screen(ev);
					},
					icon: "el-icon-thumb",
					hidden: false,
					style: {},
				},
				{
					id: 6,
					text: "搜索",
					link: true,
					display: false,
					action: (ev) => {
						this.parent.hasOwnProperty &&
							this.parent.hasOwnProperty("search") &&
							this.parent.search instanceof Function &&
							this.parent.search(ev);
					},
					icon: "el-icon-search",
					hidden: false,
					style: {},
				},
			],
		};
	},

	created() {
		//初始化显示内容
		this.initShowData();
	},

	watch: {
		csRowState(newVal, oldVal) {},
	},

	methods: {
		initShowData() {
			//自定义数据
			if (this.list && this.list.length > 0) {
				this.btsR = [];
				this.btsL = [];
				var rIndex = this.list.indexOf("->");
				this.list.forEach((item, index) => {
					if (rIndex === -1 || index < rIndex) {
						this.btsL.push(item);
					} else if (index > rIndex) {
						this.btsR.push(item);
					}
				});
			}

			//自定义隐藏项 (根据id隐藏)
			if (this.hIds && this.hIds.length > 0) {
				this.hIds.forEach((citem) => {
					this.btsL.map((item) => {
						if (item.id === citem) {
							item.hidden = true;
						}
						return item;
					});
					this.btsR.map((item) => {
						if (item.id === citem) {
							item.hidden = true;
						}
						return item;
					});
				});
			}
		},
	},
};
</script>

<style lang='scss' scoped>
.header-tool {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	padding: 18px 0 18px 16px;
	background: #edf1fa;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;

	.tool-btn-c {
		.tool-btn {
			padding: 8px 14px;
			// border: none;
			background: #fff;
			font-size: 14px;
			border-radius: 2px;

			&:hover {
				background-color: #ecf5ff;
			}
		}
	}

	.tool-l {
		width: 70%;
	}

	.tool-r {
		position: absolute;
		top: 18px;
		right: 22px;

		.tool-r-item {
			display: inline-block;
			margin-left: 6px;
		}
	}
}
</style>
