<template>
	<div class="p-top-20 p-right-20 p-left-20">
		<div class="p-10 bg-white">
			<div class="m-bottom-20 p-right-10 d-flex justify-content-between">
				<div class="d-flex align-items-center">
					<div class="d-flex align-items-center m-left-20">
						<span class="flex-shrink-0">下单时间:</span>
						<el-date-picker
							style="width:350px"
							size="small"
							v-model="time"
							type="daterange"
							value-format="yyyy-MM-dd"
							range-separator="至"
							start-placeholder="开始日期"
							end-placeholder="结束日期"
							unlink-panels
							:picker-options="disabledTodayPickerOption"
							@change="timeChange"
						></el-date-picker>
					</div>
				</div>

				<div>
					<el-button type="primary" style="font-size:20px;cursor: default;">
						总单数:
						<span>{{this.pagination.totalCount}}</span>
					</el-button>
					<el-button type="danger" style="font-size:20px;cursor: default;" >
						合计:
						<span data-money="￥" class="first_symbol">{{totalPrice}}</span>
					</el-button>
				</div>
			</div>

			<el-table
				v-loading="listLoading"
				:data="dataList"
				size="medium"
				border
				element-loading-text="拼命加载中"
				element-loading-spinner="el-icon-loading"
				element-loading-background="rgba(0, 0, 0, 0.8)"
				highlight-current-row
				:height="$utils.getTableHeight(0, true) - 10"
			>
				<el-table-column align="center" label="序号" width="50">
					<template slot-scope="scope">{{ (params.pageNum - 1) * params.pageSize + scope.$index + 1 }}</template>
				</el-table-column>
				<el-table-column label="下单桌号" align="center" prop="ramadhin" width="100">
					<template slot-scope="scope">
						<el-tag type="primary">{{scope.row.ramadhin}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="订单编号" align="center" prop="transaction_id" width="260"></el-table-column>
				<el-table-column label="下单商品" header-align="center">
					<template slot-scope="scope">
						<span v-html="goodItemsFormat(scope.row.items)"></span>
					</template>
				</el-table-column>
				<el-table-column label="备注" header-align="center" prop="note" >
					<template slot-scope="scope">
						<el-tooltip effect="dark" placement="top" v-if="scope.row.note">
							<div class="text-ellipsis-1 m-left-10">{{scope.row.note}}</div>

							<div style="max-width:200px" slot="content">{{scope.row.note}}</div>
						</el-tooltip>
						<div v-else class="d-flex justify-content-center">-</div>
					</template>
				</el-table-column>
				<el-table-column
					label="下单时间"
					align="center"
					prop="time_end"
					:formatter="timeEndFormat"
					width="200"
				></el-table-column>
				<el-table-column label="共计" align="center" prop="total_fee" width="100">
					<template slot-scope="scope">
						<el-tag type="danger">￥{{scope.row.total_fee / 100}}</el-tag>
					</template>
				</el-table-column>
			</el-table>

			<el-pagination
				class="m-top-20"
				background
				@size-change="pageSizeChange"
				@current-change="pageCurrentChange"
				:current-page="params.pageNum"
				:page-size="params.pageSize"
				:total="pagination.totalCount"
				:page-count="pagination.pageCount"
				:page-sizes="[30, 50, 100, 200]"
				layout="total, sizes, prev, pager, next, jumper"
			></el-pagination>
		</div>
	</div>
</template>

<script>
import { goodsOrder } from "@/service";
import disabledTodayPickerOptionMixin from "@/mixins/disabledTodayPickerOptionMixin";

export default {
	name: "order",
	data() {
		return {
			dataList: [],
			listLoading: false,
			totalPrice: 0,
			totalNum: 0,
			params: {
				start_time: "",
				end_time: "",
				pageNum: 1,
				pageSize: 30
			},
			pagination: {
				pageCount: 30,
				totalCount: 0
			},
			time: [_dayjs().format("YYYY-MM-DD"), _dayjs().format("YYYY-MM-DD")]
		};
	},
	mixins: [disabledTodayPickerOptionMixin],
	mounted() {
		this.getNowTime();
		this.getDataList();
	},
	methods: {
		getNowTime() {
			this.params.start_time = _dayjs().format("YYYY-MM-DD");
			this.params.end_time = `${_dayjs().format("YYYY-MM-DD")} 23:59:59`;
		},
		getDataList() {
			this.listLoading = true;
			goodsOrder(this.params)
				.then(res => {
					this.dataList = res.data;
					this.pagination.totalCount = res.count;
					this.totalPrice = +res.total / 100;
				})
				.finally(() => {
					this.listLoading = false;
				});
		},
		timeChange(time) {
			this.params.pageNum = 1;
			if (time) {
				this.params.start_time = time[0];
				this.params.end_time = `${time[1]} 23:59:59`;
			} else {
				this.params.start_time = "";
				this.params.end_time = "";
			}
			this.getDataList();
		},
		timeEndFormat({ time_end }) {
			return _dayjs(time_end).format("YYYY年MM月DD日 HH:mm:ss");
		},
		goodItemsFormat(items) {
			let allItemsString = "";
			items = JSON.parse(items);
			if (items.length > 0) {
				allItemsString = items.map(({ name, price, num }, index) => {
					return `${index + 1}.${name}(价格:${price / 100},数量:${num})`;
				});
			}
			return allItemsString.join("<br>");
		},
		pageSizeChange: function(__pageSize) {
			this.params.pageSize = __pageSize;
			this.getDataList();
		},
		pageCurrentChange: function(__currentPage) {
			this.params.pageNum = __currentPage;
			this.getDataList();
		}
	}
};
</script>

