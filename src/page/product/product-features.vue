<template>
	<el-card>
		<el-button type="primary" slot="header" @click="saveOrEdit('新增产品特点')">新增</el-button>
		<el-table
			:data="tableData"
			style="width: 100%"
			:loading="tableLoading"
			:height="$utils.getTableHeight(1)"
		>
			<el-table-column width="50" label="序号" type="index" align="center"></el-table-column>
			<el-table-column prop="imageUrl" label="图片路径" align="center"></el-table-column>
			<el-table-column label="操作" align="center" width="140">
				<template slot-scope="scope">
					<el-button type="danger" @click="deleteSlide(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog
			:visible.sync="dialog.visible"
			:title="dialog.title"
			:close-on-click-modal="false"
			top="50px"
		>
			<div style="margin: -10px 0 -10px;">
				<save-or-edit :visible.sync="dialog.visible" @refresh="getSilde" v-if="dialog.visible" />
			</div>
		</el-dialog>
	</el-card>
</template>

<script>
import { findByProName, params } from "@/service";
import alert from "@/utils/alert";

export default {
	name: "product-features",

	data() {
		return {
			tableLoading: false,
			tableData: [],
			dialog: {
				title: "",
				visible: false,
			},
		};
	},
    mounted() {
        // this.getDataList();
    },
	methods: {

    },
};
</script>

<style lang='scss' scoped>
</style>