<template>
	<div class="save-or-edit">
		<el-form ref="form" :model="ruleForm" :rules="rules" label-width="100px">
			<el-form-item label="资质证书名称" prop="name">
				<el-input v-model="ruleForm.certName"></el-input>
			</el-form-item>
			<el-form-item label="轮播图" prop="name">
				<!-- <uploadImageList @input="getImgList" /> -->
			</el-form-item>
		</el-form>
		<div class="z-flex z-row-right">
			<el-button plain @click="cancel">取消</el-button>
			<el-button type="primary" @click="submitForm" :loading="submitLoading">提交</el-button>
		</div>
	</div>
</template>

<script>
import {} from "@/service";

export default {
	name: "company-dialog",
	data() {
		return {
			ruleForm: {
				certName: "",
				file: "",
			},
			rules: {},
			submitLoading: false,
		};
	},
	props: {
		dialogRow: Object,
		default: () => {},
	},
	mounted() {
		if (!this.dialogRow.id) {
			this.$nextTick(() => {
				this.$refs["form"].resetFields();
			});
		} else {
			this.ruleForm = this.dialogRow;
		}
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
					if (!this.dialogRow.id) {
						addTab(this.ruleForm)
							.then(() => {
								this.$emit("refresh");
								this.cancel();
							})
							.finally(() => {
								this.submitLoading = false;
							});
					} else {
                        
                    }
				}
			});
		},
	},
};
</script>
