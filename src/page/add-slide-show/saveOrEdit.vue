<template>
	<div class="save-or-edit">
		<el-form ref="form" :model="model" :rules="rules" label-width="60px">
			<el-form-item label="轮播图" prop="name">
                <uploadImageList @input="getImgList"/>
			</el-form-item>
		</el-form>
		<div class="z-flex z-row-right">
			<el-button plain @click="cancel">取消</el-button>
			<el-button type="primary" @click="submitForm" :loading="submitLoading">提交</el-button>
		</div>
	</div>
</template>

<script>
import { addTab, editTab } from "@/service";

export default {
	name: "saveOrEdit",
	data() {
		return {
			model: {
				file: "",
			},
			rules: {
				select_color: [
					{
						required: true,
						message: "请选择选中文字颜色",
						trigger: "blur",
					},
				],
            },
            submitLoading:false
		};
	},
	methods: {
		cancel() {
			this.$emit("update:visible", false);
		},
		getImgList(filse) {
			console.log(filse);
		},
		submitForm() {
			this.$refs.form.validate((valid) => {
				if (valid) {
					this.submitLoading = true;
					if (this.opType == "add") {
						addTab(this.model)
							.then(() => {
								this.$emit("refresh");
								this.cancel();
							})
							.finally(() => {
								this.submitLoading = false;
							});
					}
				}
			});
		},
	},
};
</script>
