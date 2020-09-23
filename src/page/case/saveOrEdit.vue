<template>
	<div class="save-or-edit">
		<el-form ref="form" :model="ruleForm" :rules="rules" label-width="110px">
			<el-form-item label="案例名称" prop="caseName">
				<el-input v-model="ruleForm.caseName"></el-input>
			</el-form-item>
			<el-form-item label="案例文字内容" prop="caseContent">
				<el-input v-model="ruleForm.caseContent"></el-input>
			</el-form-item>
			<el-form-item label="案例地区" prop="caseRegion">
				<el-input v-model="ruleForm.caseRegion"></el-input>
			</el-form-item>
			<el-form-item label="案例图" prop="imgUrl">
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
import { comCaseAddCase, comCaseUpdateCase } from "@/service";

export default {
	name: "saveOrEdit",
	data() {
		return {
			ruleForm: {
				id: 0,
				caseName: "",
				caseContent: "",
				caseRegion: "",
				imgUrl: [],
			},
			rules: {
				caseName: [{ required: true, message: "不能为空" }],
				caseContent: [{ required: true, message: "不能为空" }],
				caseRegion: [{ required: true, message: "不能为空" }],
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
			filesMap: {},
		};
	},
	props: {
		dialogRow: Object,
		default: () => {},
	},
	mounted() {
		if (this.dialogRow.id) {
			const {
				caseName,
				id,
				caseContent,
				caseRegion,
				caseImgList,
			} = this.dialogRow;
			const _caseImgList = caseImgList.map((item) => item.imgUrl);
			Object.assign(this.ruleForm, {
				id,
				caseName,
				caseContent,
				caseRegion,
				imgUrl:
					Array.isArray(_caseImgList) && _caseImgList.length
						? _caseImgList.join(",")
						: "",
			});
		}
	},
	methods: {
		cancel() {
			this.$emit("update:visible", false);
		},
		getImgList(files) {
			this.ruleForm.imgUrl = files;
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
						comCaseAddCase(params)
							.then(() => {
								this.$emit("refresh");
								this.cancel();
							})
							.finally(() => {
								this.submitLoading = false;
							});
					} else {
						comCaseUpdateCase(params)
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
