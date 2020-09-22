<template>
	<div class="save-or-edit">
		<el-form ref="form" :rules="rules" label-width="60px">
			<el-form-item label="轮播图">
				<uploadImageList @input="getImgList" :limit="4" value />
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
			rules: {},
			submitLoading: false,
		};
	},
	methods: {
		cancel() {
			this.$emit("update:visible", false);
		},
		getImgList(filse) {
			this.ruleForm.imgUrl = filse.split(",");
		},
		submitForm() {
			this.submitLoading = true;
			addSlideShow(this.ruleForm)
				.then(() => {
					this.$emit("refresh");
					this.cancel();
				})
				.finally(() => {
					this.submitLoading = false;
				});
		},
	},
};
</script>
