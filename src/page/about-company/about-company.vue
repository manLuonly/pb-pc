<template>
	<el-card>
		<el-button type="primary" slot="header" @click="saveOrEdit('新增')">新增</el-button>
		<el-table
			:data="tableData"
			style="width: 100%"
			:loading="tableLoading"
			:height="$utils.getTableHeight(1)"
		>
			<el-table-column prop="comName" label="公司名称" align="center"></el-table-column>
			<el-table-column prop="comContent" label="公司简介" align="center"></el-table-column>
			<el-table-column prop="imageUrl" label="图片路径" align="center">
				<template>
					<el-image
						style="width: 100px; height: 100px"
						:src="img || '' "
						fit="contain"
						:preview-src-list="srcList"
						@click="getImgUrl(img)"
					></el-image>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="140">
				<template slot-scope="scope">
					<el-button >修改</el-button>
					<el-button type="danger" @click="deleteCompany(scope.row.id)">删除</el-button>
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
				<company-dialog :visible.sync="dialog.visible" @refresh="getDataList" v-if="dialog.visible" />
			</div>
		</el-dialog>
	</el-card>
</template>

<script>
import { findAll, delCompany } from "@/service";
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
			},
			srcList: [],
			img: "",
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
			findAll().then((res) => {
				this.tableData = res || [];
				this.img = res[0].imgList[0].imgUrl || '';
			});
		},
		saveOrEdit(title) {
			this.dialog.title = title;
			this.dialog.visible = true;
		},
		deleteCompany(id) {
      alert(delCompany, { id }).then(() => {
				this.getDataList();
			});
		},
		getImgUrl(url) {
			this.srcList = [];
			this.srcList.push(url);
		},
	},
};
</script>

<style lang='scss' scoped>
</style>