<template>
	<div class="save-or-edit">
		<el-form ref="form" :model="ruleForm" :rules="rules" label-width="100px">
			<el-form-item label="案例名称">
				<el-input v-model="ruleForm.caseName"></el-input>
			</el-form-item>
			<el-form-item label="案例文字内容">
				<el-input v-model="ruleForm.caseContent"></el-input>
			</el-form-item>
			<el-form-item label="案例地区">
				<el-input v-model="ruleForm.caseRegion"></el-input>
			</el-form-item>
			<el-form-item label="轮播图">
				<uploadImageList @input="getImgList" :limit="4" :value=" ruleForm.imgUrl ? ruleForm.imgUrl.map(i => i.imgUrl) : '' "  />
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
				imgUrl:[],
			},
			rules: {},
			submitLoading: false,
			filesMap: {},
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
			this.ruleForm.imgUrl = this.dialogRow.caseImgList;
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
			this.submitLoading = true;
			if (!this.dialogRow.id) {
				comCaseAddCase(this.ruleForm)
					.then(() => {
						this.$emit("refresh");
						this.cancel();
					})
					.finally(() => {
						this.submitLoading = false;
					});
			} else {
				comCaseUpdateCase(this.ruleForm)
					.then((res) => {
						this.$emit("refresh");
						this.cancel();
					})
					.finally(() => {
						this.submitLoading = false;
					});
			}
		},
	},
};
</script>
