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
import { findByProName, params } from "@/service";
import alert from "@/utils/alert";

export default {
	name: "product-features",

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
	mounted() {},
	methods: {
		cancel() {
			this.$emit("update:visible", false);
		},
		submitForm() {},
	},
};
</script>

<style lang='scss' scoped>
</style>