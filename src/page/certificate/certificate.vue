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
			<el-table-column prop="certName" label="资质证书名称" align="center"></el-table-column>
			<el-table-column prop="imageUrl" label="图片路径" align="center">
				<template slot-scope="scope">
					<el-image
						v-if="scope.row.certImgList"
						style="width: 100px; height: 50px;cursor: pointer;"
						:src="scope.row.certImgList[0].imgUrl || '' "
						fit="contain"
						:preview-src-list="srcList"
						@click="getImgUrl(scope.row.certImgList)"
					></el-image>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="140">
				<template slot-scope="scope">
					<el-button-group>
						<el-button type="primary" @click="saveOrEdit(scope.row,'编辑')">编辑</el-button>
						<el-button type="danger" @click="deleteComCert(scope.row.id)">删除</el-button>
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
import { comCertFindAll, comCertDeleteById } from "@/service";
import alert from "@/utils/alert";
import certificateDialog from "./certificate-dialog";

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
		certificateDialog,
	},
	mounted() {
		this.getDataList();
	},
	methods: {
		getDataList() {
			comCertFindAll().then((res) => {
				this.tableData = res || [];
			});
		},
		saveOrEdit(row,title) {
			this.dialog.dialogRow = { ...row };
			this.dialog.title = title;
			this.dialog.visible = true;
		},
		// 删除证书
		deleteComCert(id) {
			alert(comCertDeleteById, { id }).then(() => {
				this.getDataList();
			});
		},
		// 展示图片
		getImgUrl(arr) {
			this.srcList = [];
			arr.filter((i) => {
				this.srcList.push(i.imgUrl);
			});
		}
	},
};
</script>

<style lang='scss' scoped>
</style>
