<template>
	<el-card>
		<el-button type="primary" slot="header" @click="saveOrEdit('新增')">新增</el-button>
		<el-table
			:data="tableData"
			style="width: 100%"
			:loading="tableLoading"
			:height="$utils.getTableHeight(1)"
		>
			<el-table-column width="50" label="序号" type="index" align="center"></el-table-column>
			<el-table-column prop="imageUrl" label="图片" align="center">
				<template slot-scope="scope">
					<loadingImage :src="scope.row.imageUrl" style="width:100px; height:50px" />
				</template>
			</el-table-column>
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
            width="600px"
			top="50px"
		>
			<div style="margin: -10px 0 -10px;">
				<save-or-edit :visible.sync="dialog.visible" @refresh="getSilde" v-if="dialog.visible" />
			</div>
		</el-dialog>
	</el-card>
</template>

<script>
import { findAllSlideShow, slideShowDeleteById } from "@/service";
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
			},
		};
	},
	created() {
		this.getSilde();
	},
	methods: {
		getSilde() {
			this.tableLoading = true;
			findAllSlideShow()
				.then((res) => {
					this.tableData = res;
				})
				.finally(() => {
					this.tableLoading = false;
				});
		},
		deleteSlide(id) {
			alert(slideShowDeleteById, { id }).then(() => {
				this.getSilde();
			});
		},
		saveOrEdit(title) {
			this.dialog.title = title;
			this.dialog.visible = true;
		},
	},
};
</script>
