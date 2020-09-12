<template>
	<div class="index" >
		<el-input v-model="input" placeholder="请输入内容"></el-input>
		<zDatePicker :time.sync="time1" />
		<zDateRange :time.sync="time2" />
		<el-table :data="tableData" stripe style="width: 100%" v-zLoading="loading" height="400">
			<el-table-column prop="date" label="日期" width="180"></el-table-column>
			<el-table-column prop="name" label="姓名" width="180"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import { demo } from "@/service";

export default {
	name: "index",
	data() {
		return {
			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1517 弄",
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄",
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1516 弄",
				},
			],
			input: "",
			time1: "",
			time2: [],
			a: {
				b: "",
				c: "",
			},
			loading: true,
		};
	},
	mounted() {
		demo;
	},
};
</script>

<style lang='scss' scoped>
.index {
	height: 400px;
}
</style>
