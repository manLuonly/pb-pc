<template>
	<div>
		<el-form ref="form" :model="ruleForm" :rules="rules" label-width="120px">
			<el-form-item label="产品名称" prop="proName">
				<el-input v-model="ruleForm.proName" :disabled="dialogRow.proName ? true : false "></el-input>
			</el-form-item>
			<el-form-item label="产品规格" prop="proSpec">
				<el-input v-model="ruleForm.proSpec"></el-input>
			</el-form-item>
			<el-form-item label="产品颜色" prop="proColour">
				<el-input v-model="ruleForm.proColour"></el-input>
			</el-form-item>
			<el-form-item label="涂刷次数" prop="proNumber">
				<el-input v-model="ruleForm.proNumber"></el-input>
			</el-form-item>
			<el-form-item label="涂刷率" prop="proRate">
				<el-input v-model="ruleForm.proRate"></el-input>
			</el-form-item>
		</el-form>
		<div class="z-flex z-row-right">
			<el-button plain @click="cancel">取消</el-button>
			<el-button type="danger" @click="deleteParameter">删除</el-button>
			<el-button type="primary" @click="submitForm" :loading="submitLoading">提交</el-button>
		</div>
	</div>
</template>

<script>
import {
	proParamAddParam,
	proParamUpdateById,
	proParamDeleteById,
	proParamFindByProName,
} from "@/service";
import alert from "@/utils/alert";

export default {
	name: "product-parameter",

	data() {
		return {
			ruleForm: {
				id: 0,
				proSpec: "",
				proColour: "",
				proName: "",
				proNumber: "",
				proRate: "",
			},
			rules: {
				proSpec: [{ required: true, message: "产品规格不能为空" }],
				proColour: [{ required: true, message: "产品颜色不能为空" }],
				proName: [
					{ required: true, message: "关联的产品名称不能为空" },
				],
				proNumber: [{ required: true, message: "涂刷次数不能为空" }],
				proRate: [{ required: true, message: "涂刷率不能为空" }],
			},
			submitLoading: false,
		};
	},
	props: {
		dialogRow: Object,
		default: () => {},
	},
	mounted() {
		this.dialogRow.proName ? this.getDataList() : "";
	},
	methods: {
		cancel() {
			this.$emit("close");
		},
		getDataList() {
			const form = { name: this.dialogRow.proName };
			proParamFindByProName(form).then((res) => {
				this.ruleForm = res;
			});
		},
		deleteParameter() {
			const { id } = this.dialogRow;
			alert(proParamDeleteById, { id }).then(() => {
				this.$emit("refresh");
				this.cancel();
			});
		},
		submitForm() {
			this.$refs.form.validate((valid) => {
				if (valid) {
					const { ruleForm } = this;

					this.submitLoading = true;
					if (!this.dialogRow.id) {
						proParamAddParam(ruleForm)
							.then(() => {
								this.$emit("refresh");
								this.cancel();
							})
							.finally(() => {
								this.submitLoading = false;
							});
					} else {
						proParamUpdateById(ruleForm)
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