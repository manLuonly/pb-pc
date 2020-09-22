<template>
	<el-card>
		<el-button type="primary" slot="header" @click="saveOrEdit('新增')">新增</el-button>
		<el-table
			:data="tableData"
			style="width: 100%"
			:loading="tableLoading"
			:height="$utils.getTableHeight(1)"
		>
			<el-table-column prop="proName" label="产品名称" align="center"></el-table-column>
			<el-table-column prop="proIntro" label="产品简介" align="center" show-overflow-tooltip></el-table-column>
			<el-table-column prop="proContrast" label="和普通材料的对比" align="center" show-overflow-tooltip></el-table-column>
			<el-table-column prop="imageUrl" label="图片路径" align="center">
				<template slot-scope="scope">
					<el-image
						v-if="scope.row.proImgList"
						style="width: 100px; height: 50px;cursor: pointer;"
						:src="scope.row.proImgList[0].imgUrl || '' "
						fit="contain"
						:preview-src-list="srcList"
						@click="getImgUrl(scope.row.proImgList)"
					></el-image>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="200">
				<template slot-scope="scope">
					<el-button-group>
						<el-button type="primary" @click="updateProduct(scope.row)">修改</el-button>
						<el-button type="danger" @click="deleteProduct(scope.row.id)">删除</el-button>
						<el-button type="info">操作</el-button>
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
				<certificate-dialog
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
import { productFindAll, productDeleteById } from "@/service";
import alert from "@/utils/alert";
// import certificateDialog from "./certificate-dialog";

export default {
	name: "product",
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
		// certificateDialog,
	},
	mounted() {
		this.getDataList();
	},
	methods: {
		getDataList() {
			productFindAll().then((res) => {
				this.tableData = res || [];
			});
		},
		saveOrEdit(title) {
			this.dialog.title = title;
			this.dialog.visible = true;
		},
		// 删除证书
		deleteProduct(id) {
			alert(productDeleteById, { id }).then(() => {
				this.getDataList();
			});
		},
		// 展示图片
		getImgUrl(arr) {
			this.srcList = [];
			arr.filter((i) => {
				this.srcList.push(i.imgUrl);
			});
		},
		updateProduct(row) {
			this.dialog.dialogRow = { ...row };
			this.dialog.visible = true;
		},
	},
};
</script>

<style lang='scss' scoped>
</style>