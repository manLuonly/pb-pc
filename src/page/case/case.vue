<template>
	<el-card>
		<el-button type="primary" slot="header" @click="saveOrEdit({},'新增')">新增</el-button>
		<el-table
			:data="tableData"
			style="width: 100%"
			v-loading="tableLoading"
			:height="$utils.getTableHeight(1)"
		>
			<el-table-column width="50" label="序号" type="index" align="center"></el-table-column>
			<el-table-column prop="caseName" label="名称" align="center" show-overflow-tooltip></el-table-column>
			<el-table-column prop="caseContent" label="文字内容" align="center" show-overflow-tooltip></el-table-column>
			<el-table-column prop="caseRegion" label="地区" align="center"></el-table-column>
			<el-table-column label="案例图片" align="center">
				<template slot-scope="scope">
					<loadingImage
						:src="scope.row.caseImgList[0] ? scope.row.caseImgList[0].imgUrl : ''"
						style="width:100px; height:50px"
						:srcList="handleCaseImgList(scope.row)"
					/>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="140">
				<template slot-scope="scope">
					<el-button-group>
						<el-button type="primary" @click="saveOrEdit(scope.row,'编辑')">编辑</el-button>
						<el-button type="danger" @click="deleteSlide(scope.row.id)">删除</el-button>
					</el-button-group>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog
			:visible.sync="dialog.visible"
			:title="dialog.title"
			:close-on-click-modal="false"
			width="700px"
			top="50px"
		>
			<div style="margin: -10px 0 -10px;">
				<save-or-edit
					v-if="dialog.visible"
					:visible.sync="dialog.visible"
					:dialogRow="dialog.dialogRow"
					@refresh="getSilde"
				/>
			</div>
		</el-dialog>
	</el-card>
</template>

<script>
import { findAllComCase, comCaseDeleteById } from "@/service";
import alert from "@/utils/alert";
import saveOrEdit from "./saveOrEdit";

export default {
	name: "add-slide-show",
	components: {
		saveOrEdit,
	},
	data() {
		return {
			tableLoading: false,
			tableData: [],
			dialog: {
				title: "",
				visible: false,
				dialogRow: {},
			},
		};
	},
	created() {
		this.getSilde();
	},
	methods: {
		getSilde() {
			this.tableLoading = true;
			findAllComCase()
				.then((res) => {
					this.tableData = res;
				})
				.finally(() => {
					this.tableLoading = false;
				});
		},
		deleteSlide(id) {
			alert(comCaseDeleteById, { id }).then(() => {
				this.getSilde();
			});
		},
		saveOrEdit(row, title) {
			this.dialog.dialogRow = { ...row };
			this.dialog.title = title;
			this.dialog.visible = true;
		},
		handleCaseImgList({ caseImgList }) {
			return caseImgList.map((item) => item.imgUrl);
		},
	},
};
</script>
