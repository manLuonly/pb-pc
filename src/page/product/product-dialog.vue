<template>
	<div>
		<el-form ref="form" :model="ruleForm" :rules="rules" label-width="120px">
			<el-form-item label="产品名称" prop="proName">
				<el-input v-model="ruleForm.proName" ></el-input>
			</el-form-item>
			<el-form-item label="产品的简介" prop="proIntro">
				<el-input v-model="ruleForm.proIntro"></el-input>
			</el-form-item>
			<el-form-item label="与普通材料对比" prop="proContrast">
				<el-input v-model="ruleForm.proContrast"></el-input>
			</el-form-item>
			<el-form-item label="图片" prop="imgUrl">
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
import {
	productAddProduct,
	productUpdatePro
} from "@/service";
export default {
	name: "product-dialog",

	data() {
		return {
			ruleForm: {
				imgThId: 0,
				proName: "",
				proIntro: "",
				proContrast: "",
				imgUrl: [],
			},
			submitLoading: false,
			rules: {
				proName: [{ required: true, message: "产品名称不能为空" }],
				proIntro: [{ required: true, message: "产品的简介不能为空" }],
				proContrast: [{ required: true, message: "与普通材料的对比不能为空" }],
				imgUrl: [
					{
						trigger: ["blur", "change"],
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
		};
	},
	props: {
		dialogRow: Object,
		default: () => {},
	},
	mounted() {
		if (this.dialogRow.id) {
			const {
				id,
				proName,
				proIntro,
				proContrast,
				proImgList,
			} = this.dialogRow;
			const _proImgList = proImgList.map((item) => item.imgUrl);
			Object.assign(this.ruleForm, {
				id,
				proName,
				proIntro,
				proContrast,
				imgUrl:
					Array.isArray(_proImgList) && _proImgList.length
						? _proImgList.join(",")
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
					const { ruleForm } = this;
					const params = {
						...ruleForm,
						imgUrl: Array.isArray(ruleForm.imgUrl)
							? ruleForm.imgUrl.join(",")
							: ruleForm.imgUrl,
					};

					this.submitLoading = true;
					if (!this.dialogRow.id) {
						productAddProduct(params)
							.then(() => {
                                this.$emit("refresh");
								this.cancel();
							})
							.finally(() => {
								this.submitLoading = false;
							});
					} else {
						productUpdatePro(params)
							.then((res) => {
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

<style lang='scss' scoped>
</style>