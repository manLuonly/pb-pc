<!-- 单个上传图片 组件，建议在dialog表单中使用 -->
<template>
	<div v-loading="loading" style="width:126px;">
		<div
			class="upload-image"
			:style="{ height : height + 'px', lineHeight: height + 'px'}"
			v-if="Boolean(srcUrl)"
			@mouseenter="showOptionIcons = true"
			@mouseleave="showOptionIcons = false"
		>
			<img :src="srcUrl" style="display:block" />
			<div class="shade" v-show="showOptionIcons">
				<div>
					<i class="el-icon-search" @click="show()"></i>
				</div>
				<el-upload
					:action="$uploadImgUrl"
					:show-file-list="false"
					:before-upload="beforeUpload"
					:on-progress="onProgress"
					:on-success="onSuccess"
				>
					<i class="el-icon-edit-outline"></i>
				</el-upload>
				<div>
					<i class="el-icon-circle-close" @click="remove()"></i>
				</div>
			</div>
		</div>
		<div class="upload-image" v-else :style="{ height : height + 'px', lineHeight: height + 'px'}">
			<el-upload
				:action="$uploadImgUrl"
				:show-file-list="false"
				:before-upload="beforeUpload"
				:on-progress="onProgress"
				:on-success="onSuccess"
			>
				<i class="el-icon-plus"></i>
			</el-upload>
		</div>
		<el-dialog title="查看图片" width="50%" :visible.sync="dialogVisible" append-to-body>
			<div class="uploaded_img d-flex justify-content-center">
				<el-image :src="srcUrl">
					<div slot="placeholder" class="img_slot">
						<i class="el-icon-loading"></i>
					</div>
				</el-image>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: "uploadImage",
	props: {
	   //图片链接
      value: String,
      //图片的高度
		height: {
			type: [String, Number],
			default: 126
		}
	},
	data() {
		return {
			showOptionIcons: false,
			srcUrl: null,
			loading: false,
			dialogVisible: false
		};
	},
	watch: {
		value(__value) {
			this.srcUrl = __value;
		},
		srcUrl(__value) {
			//上传图片成功后回调事件
			this.$emit("input", __value);
		}
	},
	methods: {
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
			switch (__resultData.code) {
				case 200:
					this.loading = false;
					this.$message.success(__resultData.message);
					this.srcUrl = __resultData.data;
					break;

				default:
					this.$message.error("上传失败");
					this.loading = false;
					break;
			}
		},
		remove() {
			this.srcUrl = "";
		},
		show() {
			this.dialogVisible = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.upload-image {
	position: relative;
	width: 100%;
	font-size: 28px;
	border: 1px solid #d9d9d9;
	border-radius: 6px;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
	}

	.shade {
		display: flex;
		justify-content: space-around;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		color: #fff;
		text-align: center;
		background-color: #000;
		opacity: 0.6;
		cursor: pointer;
	}

	/deep/ .el-upload {
		display: block;
	}
}

.uploaded_img {
	margin: -15px -20px;
	line-height: 0;
}
</style>
