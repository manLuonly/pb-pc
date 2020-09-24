<template>
	<el-card>
		<el-button style="margin-right:20px" type="primary" @click="productSaveOrEdit({},'新增')">新增产品</el-button>
		<el-dropdown class="p-bottom-20" @command="handleCommand">
			<el-button type="primary">
				新增
				<i class="el-icon-arrow-down el-icon--right"></i>
			</el-button>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item :command="beforeHandleCommand(0, {},'productFeatures','新增')">产品特点</el-dropdown-item>
				<el-dropdown-item :command="beforeHandleCommand(1, {},'productParameter','新增')">产品参数</el-dropdown-item>
				<el-dropdown-item :command="beforeHandleCommand(2, {},'solveProgram','新增')">解决方案</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	
		<el-table
			:data="tableData"
			style="width: 100%"
			v-loading="tableLoading"
			:height="$utils.getTableHeight(1)"
		>
			<el-table-column width="50" label="序号" type="index" align="center"></el-table-column>
			<el-table-column prop="proName" label="产品名称" align="center"></el-table-column>
			<el-table-column prop="proIntro" label="产品简介" align="center" show-overflow-tooltip></el-table-column>
			<el-table-column prop="proContrast" label="和普通材料的对比" align="center" show-overflow-tooltip></el-table-column>
			<el-table-column prop="imageUrl" label="图片路径" align="center">
				<template slot-scope="scope">
					<loadingImage
						:src="scope.row.proImgList[0] ? scope.row.proImgList[0].imgUrl : ''"
						style="width:100px; height:50px;cursor: pointer;"
						:srcList="getImgUrl(scope.row)"
					/>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="200">
				<template slot-scope="scope">
					<el-button-group>
						<el-button type="primary" @click="productSaveOrEdit(scope.row,'编辑')">编辑</el-button>
						<el-button type="danger" @click="deleteProduct(scope.row.id)">删除</el-button>
						<el-dropdown @command="handleCommand">
							<el-button type="info">操作</el-button>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item
									:command="beforeHandleCommand(scope.$index, scope.row,'productFeatures','编辑')"
								>产品特点</el-dropdown-item>
								<el-dropdown-item
									:command="beforeHandleCommand(scope.$index, scope.row,'productParameter','编辑')"
								>产品参数</el-dropdown-item>
								<el-dropdown-item
									:command="beforeHandleCommand(scope.$index, scope.row,'solveProgram','编辑')"
								>解决方案</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
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
				<component
					v-if="dialog.visible"
					:is="currentView"
					:dialogRow="dialog.dialogRow"
					@close="close"
					@refresh="getDataList"
				></component>
			</div>
		</el-dialog>

		<el-dialog
			:visible.sync="productDialog.visible"
			:title="productDialog.title"
			:close-on-click-modal="false"
			width="700px"
			top="50px"
		>
			<div style="margin: -10px 0 -10px;">
				<product-dialog
					v-if="productDialog.visible"
					:visible.sync="productDialog.visible"
					:dialogRow="productDialog.dialogRow"
					@refresh="getDataList"
				/>
			</div>
		</el-dialog>
	</el-card>
</template>

<script>
import { productFindAll, productDeleteById } from "@/service";
import alert from "@/utils/alert";
import productDialog from "./product-dialog";
import productFeatures from "./product-features";
import productParameter from "./product-parameter";
import solveProgram from "./solve-program";

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
			productDialog: {
				title: "",
				visible: false,
				dialogRow: {},
			},
			srcList: [],
			currentView: "",
		};
	},
	components: {
		productDialog,
		productFeatures,
		productParameter,
		solveProgram,
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
		saveOrEdit(row, title) {
			this.dialog.dialogRow = { ...row };
			this.dialog.title = title;
			this.dialog.visible = true;
		},
		productSaveOrEdit(row, title) {
			this.productDialog.dialogRow = { ...row };
			this.productDialog.title = title;
			this.productDialog.visible = true;
		},
		// 删除证书
		deleteProduct(id) {
			alert(productDeleteById, { id }).then(() => {
				this.getDataList();
			});
		},
		// 展示图片
		getImgUrl({ proImgList }) {
			return proImgList.map((item) => item.imgUrl);
		},
		beforeHandleCommand(index, row, command, title) {
			return {
				index,
				row,
				command,
				title,
			};
		},
		handleCommand(command) {
			this.currentView = command.command;
			this.saveOrEdit(command.row, command.title);
		},
		close() {
			this.dialog.visible = false;
		},
	},
};
</script>

<style lang='scss' scoped>
</style>
