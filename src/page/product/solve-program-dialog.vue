<template>
	<div>
		<el-form ref="form" :model="ruleForm" :rules="rules" label-width="120px">
			<el-form-item label="产品名称" prop="thProName">
				<el-input v-model="ruleForm.thProName" :disabled="dialogRow.id ? true : false "></el-input>
			</el-form-item>
			<el-form-item label="原理分类" prop="thCategory">
				<el-input v-model="ruleForm.thCategory"></el-input>
			</el-form-item>
			<el-form-item label="原理说明内容" prop="thContent">
				<el-input v-model="ruleForm.thContent"></el-input>
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
	proTheoryFindByProName,
	proTheoryAddTheory,
	proTheoryUpdateProTheory,
} from "@/service";
export default {
	name: "solve-program",

	data() {
		return {
			ruleForm: {
				imgThId: 0,
				thCategory: "",
				thContent: "",
				ThProName: "",
				imgUrl: [],
			},
			submitLoading: false,
			rules: {
				thProName: [{ required: true, message: "产品名称不能为空" }],
				thCategory: [{ required: true, message: "原理分类不能为空" }],
				thContent: [{ required: true, message: "原理说明内容不能为空" }],
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
				thCategory,
				thContent,
				thProName,
				theoryImgList,
			} = this.dialogRow;
			const _theoryImgList = theoryImgList.map((item) => item.imgUrl);
			Object.assign(this.ruleForm, {
				id,
				thCategory,
				thContent,
				thProName,
				imgUrl:
					Array.isArray(_theoryImgList) && _theoryImgList.length
						? _theoryImgList.join(",")
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
						proTheoryAddTheory(params)
							.then(() => {
								this.cancel();
								this.$emit('close',false);
							})
							.finally(() => {
								this.submitLoading = false;
							});
					} else {
						proTheoryUpdateProTheory(params)
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