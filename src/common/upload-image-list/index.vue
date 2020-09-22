<!-- 可拖拽排序的多文件上传组件 -->
<template>
	<div v-loading="loading" class="upload">
		<div class="upload-list-item draggable" v-for="(item,index) in dataList" :key="index">
			<img :src="item" class="d-block" />
			<div class="shade" @click="show(index)">
				<i class="el-icon-search"></i>
			</div>
			<i class="el-icon-circle-close remove-btn" @click="remove(index)"></i>
		</div>

		<div class="upload-list-item" v-if="!limit || dataList.length < limit" slot="footer">
			<!-- 动态设置limit -->
			<el-upload
				:action="$uploadImgUrl"
				name="files"
				:show-file-list="false"
				:before-upload="beforeUpload"
				:on-progress="onProgress"
				:on-success="onSuccess"
				:[limitName]="limit"
				:on-exceed="handleExceed"
				multiple
			>
				<div class="z-flex z-col-center z-row-center w-100 h-100">
					<el-button icon="el-icon-plus" type="text" size="medium">上传图片</el-button>
				</div>
			</el-upload>
		</div>

		<el-dialog title="查看" :visible.sync="dialogVisible" append-to-body>
			<div style="margin: -15px -20px">
				<el-carousel v-if="dialogVisible" height="550px" :initial-index="initIndex">
					<el-carousel-item v-for="(item,index) in dataList" :key="index">
						<div class="z-flex z-col-center z-row-center h-100">
							<el-image :src="item" fit="contain">
								<div slot="placeholder" class="img_slot">
									<i class="el-icon-loading"></i>
								</div>
							</el-image>
						</div>
					</el-carousel-item>
				</el-carousel>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: "uploadImageList",
	props: {
		//图片链接(多个以逗号分隔)
		value: [String, Array],
		//限制至多上传多少
		limit: {
			type: [Boolean, Number],
			default: null
		}
	},
	data() {
		return {
			loading: false,
			type: "String",
			dataList: [],
			dialogVisible: false,
			initIndex: 0
		};
	},
	created() {
		this.initDataList();
	},
	watch: {
		value() {
			this.initDataList();
		},
		dataList(__value) {
			if (this.type === "String") {
				this.$emit("input", __value.join(","));
			} else if (this.type === "Array") {
				this.$emit("input", __value);
			}
		}
	},
	computed: {
		limitName() {
			return this.limit ? "limit" : null;
		}
	},
	methods: {
		initDataList() {
			if (Boolean(this.value)) {
				if (this.$utils._.isString(this.value)) {
					this.type = "String";
					this.dataList = this.value.split(",");
				} else if (this.$utils._.isArray(this.value)) {
					this.type = "Array";
					this.dataList = this.value;
				}
			}
		},
		handleExceed(files, fileList) {
			this.$message.warning(`当前限制最多上传 ${this.limit} 张图片`);
		},
		beforeUpload(__file) {
			let isLt10M = __file.size / 1024 / 1024 < 10;
			if (!isLt10M) {
				this.$message.error("上传文件大小不能超过 10MB");
			}
			return isLt10M;
		},
		onProgress() {
			this.loading = true;
		},
		onSuccess(__resultData) {
			// switch (__resultData.code) {
			// 	case 200:
					this.loading = false;
					// this.$message.success(__resultData.message);
					this.dataList.push(__resultData.imgUrl1);
			// 		break;

			// 	default:
			// 		// this.$message.error("上传失败");
			// 		this.loading = false;
			// 		break;
			// }
		},
		remove(__index) {
			this.dataList.splice(__index, 1);
		},
		show(__index) {
			this.dialogVisible = true;
			this.initIndex = __index;
		}
	}
};
</script>

<style lang="scss" scoped>
.upload {
	display: flex;
	flex-wrap: wrap;
	margin: -5px;

	/deep/ .el-upload {
		display: block;
		height: 120px;
	}

	&-list-item {
		position: relative;
		margin: 5px;
		width: 160px;
		height: 120px;
		line-height: 120px;
		text-align: center;
		border: 1px solid #d9d9d9;
		border-radius: 6px;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
		}

		.shade {
			display: none;
			position: absolute;
			top: 0;
			width: 160px;
			height: 120px;
			line-height: 120px;
			font-size: 28px;
			color: #fff;
			text-align: center;
			background-color: #000;
			opacity: 0.6;
			cursor: pointer;
		}

		.remove-btn {
			position: absolute;
			right: 0;
			top: 0;
			height: auto;
			color: #f56c6c;
			font-size: 28px;
			cursor: pointer;
		}
	}

	&-list-item:hover {
		.shade {
			display: block;
		}

		.remove-btn {
			color: #fff;
		}
	}
}
</style>
