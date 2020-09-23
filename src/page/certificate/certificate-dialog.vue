<template>
	<div class="save-or-edit">
		<el-form ref="form" :model="ruleForm" :rules="rules" label-width="120px">
			<el-form-item label="资质证书名称" prop="certName">
				<el-input v-model="ruleForm.certName"></el-input>
			</el-form-item>
			<el-form-item label="轮播图" prop="imgUrl">
				<uploadImageList @input="getImgList" :limit="4" :value="ruleForm.imgUrl" />
			</el-form-item>
		</el-form>
		<div class="z-flex z-row-right">
			<el-button plain @click="cancel">取消</el-button>
			<el-button type="primary" @click="submitForm" :loading="submitLoading">提交</el-button>
		</div>
	</div>
</template>

<script>
import { comCertAddCert, comCertUpdateCert } from "@/service";

export default {
	name: "company-dialog",
	data() {
		return {
			ruleForm: {
				id: 0,
				certName: "",
				imgUrl: [],
			},
			rules: {
				certName: [{ required: true, message: "不能为空" }],
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
	props: {
		dialogRow: Object,
		default: () => {},
	},
	mounted() {
		if (this.dialogRow.id) {
			const {
				certName,
				id,
				certImgList,
			} = this.dialogRow;
			const _certImgList = certImgList.map((item) => item.imgUrl);
			Object.assign(this.ruleForm, {
				id,
				certName,
				imgUrl:
					Array.isArray(_certImgList) && _certImgList.length
						? _certImgList.join(",")
						: "",
			});
		}
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

					const { ruleForm } = this;
					const params = {
						...ruleForm,
						imgUrl: Array.isArray(ruleForm.imgUrl)
							? ruleForm.imgUrl.join(",")
							: ruleForm.imgUrl,
					};
					if (!this.dialogRow.id) {
						comCertAddCert(params)
							.then(() => {
								this.$emit("refresh");
								this.cancel();
							})
							.finally(() => {
								this.submitLoading = false;
							});
					} else {
						comCertUpdateCert(params)
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
