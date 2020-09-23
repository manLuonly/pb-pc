<template>
	<div class="save-or-edit">
		<el-form ref="form" :rules="rules" :model="ruleForm" label-width="60px">
			<el-form-item label="轮播图" prop="imgUrl">
				<uploadImageList @input="getImgList" :limit="4" />
			</el-form-item>
		</el-form>
		<div class="z-flex z-row-right">
			<el-button plain @click="cancel">取消</el-button>
			<el-button type="primary" @click="submitForm" :loading="submitLoading">提交</el-button>
		</div>
	</div>
</template>

<script>
import { addSlideShow } from "@/service";

export default {
	name: "saveOrEdit",
	data() {
		return {
			ruleForm: {
				imgUrl: [],
			},
			rules: {
				imgUrl: [
					{
						trigger: "blur",
						validator: (rule, value, callback) => {
							if (!value.length || !value) {
								callback(new Error("请上传图片后提交！"));
							} else {
								callback();
							}
						},
					},
				],
			},
			submitLoading: false,
		};
	},
	methods: {
		cancel() {
			this.$emit("update:visible", false);
		},
		getImgList(filse) {
			this.ruleForm.imgUrl = filse;
		},
		submitForm() {
			this.$refs.form.validate((valid) => {
				if (valid) {
					this.submitLoading = true;
					addSlideShow(this.ruleForm)
						.then(() => {
							this.$emit("refresh");
							this.cancel();
						})
						.finally(() => {
							this.submitLoading = false;
						});
				}
			});
		},
	},
};
</script>
