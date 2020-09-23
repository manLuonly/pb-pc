<template>
	<div>
		<el-table :data="tableData" style="width: 100%" :height="$utils.getTableHeight(1)">
			<el-table-column width="50" label="序号" type="index" align="center"></el-table-column>
			<el-table-column prop="thCategory" label="原理的分类" align="center" show-overflow-tooltip></el-table-column>
			<el-table-column prop="thContent" label="原理的说明内容" align="center" show-overflow-tooltip></el-table-column>
			<el-table-column prop="thProName" label="产品名称" align="center"></el-table-column>
			<el-table-column prop="imageUrl" label="图片路径" align="center">
				<template slot-scope="scope">
					<el-image
						v-if="scope.row.theoryImgList"
						style="width: 100px; height: 50px;cursor: pointer;"
						:src="scope.row.theoryImgList[0].imgUrl || '' "
						fit="contain"
						:preview-src-list="srcList"
						@click="getImgUrl(scope.row.theoryImgList)"
					></el-image>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="140">
				<template slot-scope="scope">
					<el-button-group>
						<el-button type="primary" @click="saveOrEdit(scope.row)">编辑</el-button>
						<el-button type="danger" @click="deleteSolve(scope.row.id)">删除</el-button>
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
				<solve-program-dialog
					v-if="dialog.visible"
					:visible.sync="dialog.visible"
					:dialogRow="dialog.dialogRow"
					@refresh="getDataList"
				/>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { proTheoryFindByProName, proTheoryDeleteById } from "@/service";
import alert from "@/utils/alert";
import solveProgramDialog from "./solve-program-dialog";

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
      srcList:[]
		};
	},
	props: {
		dialogRow: Object,
		default: () => {},
	},
	components: {
		solveProgramDialog,
	},
	mounted() {
		this.dialogRow.id ? this.getDataList() : this.saveOrEdit();
	},
	methods: {
		getDataList() {
			const form = { name: this.dialogRow.proName };
			proTheoryFindByProName(form).then((res) => {
				this.tableData = res;
			});
		},
		deleteSolve(id) {
			alert(proTheoryDeleteById, { id }).then(() => {
				this.getDataList();
			});
		},
		saveOrEdit(row) {
			this.dialog.dialogRow = { ...row };
			this.dialog.visible = true;
		},
		// 展示图片
		getImgUrl(arr) {
			this.srcList = [];
			arr.filter((i) => {
				this.srcList.push(i.imgUrl);
			});
		},
	},
};
</script>

<style lang='scss' scoped>
</style>