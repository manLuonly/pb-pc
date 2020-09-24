<template>
	<div>
		<el-table :data="tableData" style="width: 100%" :height="$utils.getTableHeight(1)">
			<el-table-column width="50" label="序号" type="index" align="center"></el-table-column>
			<el-table-column prop="trProName" label="产品名称" align="center" show-overflow-tooltip></el-table-column>
			<el-table-column prop="trContent" label="特点内容" align="center" show-overflow-tooltip></el-table-column>
			<el-table-column label="操作" align="center" width="140">
				<template slot-scope="scope">
					<el-button-group>
						<el-button type="primary" @click="saveOrEdit(scope.row)">编辑</el-button>
						<el-button type="danger" @click="deleteFeatures(scope.row.id)">删除</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog
			:visible.sync="dialog.visible"
			:title="dialog.title"
			:close-on-click-modal="false"
			append-to-body
			top="50px"
		>
			<div style="margin: -10px 0 -10px;">
				<product-features-dialog
					v-if="dialog.visible"
					:visible.sync="dialog.visible"
					:dialogRow="dialog.dialogRow"
					@refresh="getDataList"
					@close="close"
				/>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { proTraitFindByProName, proTraitDeleteById } from "@/service";
import alert from "@/utils/alert";
import productFeaturesDialog from "./product-features-dialog";

export default {
	name: "product-features",
	data() {
		return {
			tableData: [],
			dialog: {
				title: "",
				visible: false,
				dialogRow: {},
			},
		};
	},
	props: {
		dialogRow: Object,
		default: () => {},
	},
	components: {
		productFeaturesDialog,
	},
	mounted() {
		this.dialogRow.id ? this.getDataList() : this.saveOrEdit();
	},
	methods: {
		getDataList() {
			const form = { proName: this.dialogRow.proName };
			proTraitFindByProName(form).then((res) => {
				this.tableData = res;
			});
		},
		deleteFeatures(id) {
			alert(proTraitDeleteById, { id }).then(() => {
				this.getDataList();
			});
		},
		saveOrEdit(row) {
			this.dialog.dialogRow = { ...row };
			this.dialog.visible = true;
		},
		// 关闭父级的父级dialog
		close() {
			this.$emit('close',false);
		}
	},
};
</script>

<style lang='scss' scoped>
</style>