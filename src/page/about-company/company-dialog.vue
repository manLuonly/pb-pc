<template>
	<div class="save-or-edit">
		<el-form ref="form" :model="ruleForm" :rules="rules" label-width="100px">
			<el-form-item label="公司名称" prop="comName">
				<el-input v-model="ruleForm.comName"></el-input>
			</el-form-item>
			<el-form-item label="公司简介" prop="comContent">
				<el-input type="textarea" v-model="ruleForm.comContent"></el-input>
			</el-form-item>
			<el-form-item label="轮播图" prop="name">
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
import { addCompany, updateCompany } from "@/service";

export default {
	name: "company-dialog",
	data() {
		return {
			ruleForm: {
				comName: "",
				comContent: "",
				imgUrl: "",
			},
			rules: {
				comName: [{ required: true, message: "不能为空" }],
				comContent: [{ required: true, message: "不能为空" }],
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
			const { id, comName, comContent, imgList } = this.dialogRow;
			const _imgList = imgList.map((item) => item.imgUrl);
			Object.assign(this.ruleForm, {
				id,
				comName,
				comContent,
				imgUrl:
					Array.isArray(_imgList) && _imgList.length
						? _imgList.join(",")
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
						addCompany(params)
							.then(() => {
								this.$emit("refresh");
								this.cancel();
							})
							.finally(() => {
								this.submitLoading = false;
							});
					} else {
						updateCompany(params)
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
