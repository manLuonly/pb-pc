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
			<el-table-column prop="comName" label="公司名称" align="center"></el-table-column>
			<el-table-column prop="comContent" label="公司简介" align="center"></el-table-column>
			<el-table-column prop="imageUrl" label="图片路径" align="center">
				<template slot-scope="scope">
					<loadingImage
						:src="scope.row.imgList[0] ? scope.row.imgList[0].imgUrl : ''"
						style="width:100px; height:50px;cursor: pointer;"
						:srcList="getImgUrl(scope.row)"
					/>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="140">
				<template slot-scope="scope">
					<el-button-group>
						<el-button type="primary" @click="saveOrEdit(scope.row,'编辑')">编辑</el-button>
						<el-button type="danger" @click="deleteCompany(scope.row.id)">删除</el-button>
					</el-button-group>
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
				<company-dialog
					v-if="dialog.visible"
					:visible.sync="dialog.visible"
					:dialogRow="dialog.dialogRow"
					@refresh="getDataList"
				/>
			</div>
		</el-dialog>
	</el-card>
</template>

<script>
import { companyFindAll, delCompany } from "@/service";
import alert from "@/utils/alert";
import companyDialog from "./company-dialog";

export default {
	name: "about-company",
	data() {
		return {
			tableLoading: false,
			tableData: [],
			dialog: {
				title: "",
				visible: false,
				dialogRow: {},
			},
			srcList: [],
		};
	},
	components: {
		companyDialog,
	},
	mounted() {
		this.getDataList();
	},
	methods: {
		getDataList() {
			companyFindAll().then((res) => {
				this.tableData = res || [];
			});
		},
		saveOrEdit(row, title) {
			this.dialog.dialogRow = { ...row };
			this.dialog.title = title;
			this.dialog.visible = true;
		},
		deleteCompany(id) {
			alert(delCompany, { id }).then(() => {
				this.getDataList();
			});
		},
		getImgUrl({ imgList }) {
			return imgList.map((item) => item.imgUrl);
		},
	},
};
</script>

<style lang='scss' scoped>
</style>
