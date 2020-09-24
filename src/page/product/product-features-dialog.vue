<template>
	<div>
		<el-form ref="form" :model="ruleForm" :rules="rules" label-width="100px">
			<el-form-item label="产品名称" prop="trProName">
				<el-input v-model="ruleForm.trProName"></el-input>
			</el-form-item>
			<el-form-item label="产品特点" prop="trContent">
				<el-input v-model="ruleForm.trContent"></el-input>
			</el-form-item>
		</el-form>
		<div class="z-flex z-row-right">
			<el-button plain @click="cancel">取消</el-button>
			<el-button type="primary" @click="submitForm" :loading="submitLoading">提交</el-button>
		</div>
	</div>
</template>

<script>
import { addTrait, updateTrait } from "@/service";
export default {
	name: "",

	data() {
		return {
			ruleForm: {
				id: 0,
				trProName: "",
				trContent: "",
			},
			rules: {
				trProName: [{ required: true, message: "产品名称不能为空" }],
				trContent: [{ required: true, message: "产品特点不能为空" }],
			},
			submitLoading: false,
		};
	},
	props: {
		dialogRow: Object,
		default: () => {},
	},
	mounted() {
		this.dialogRow.id ? (this.ruleForm = this.dialogRow) : "";
	},
	methods: {
		cancel() {
			this.$emit("update:visible", false);
		},
		submitForm() {
			this.$refs.form.validate((valid) => {
				if (valid) {
					const { ruleForm } = this;

					this.submitLoading = true;
					if (!this.dialogRow.id) {
						addTrait(ruleForm)
							.then(() => {
								this.cancel();
								this.$emit('close',false);
							})
							.finally(() => {
								this.submitLoading = false;
							});
					} else {
						updateTrait(ruleForm)
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