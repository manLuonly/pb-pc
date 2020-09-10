<!--

    一个日期/日期时间选择

    文档: https://github.com/mengxiong10/vue2-datepicker/blob/master/README.zh-CN.md#token

    example :

    <zDatePicker :time.sync="time" placeholder="测试"/>

-->
<template>
	<date-picker
		:value="time"
		:format="format"
		:type="type"
		:value-type="format"
		:title-format="format"
		:editable="false"
		@change="selectChange"
		v-bind="$attrs"
		:append-to-body="false"
		:disabled-date="isDisabledAfterToday ? disabledAfterToday : notLimitDate"
	>
		<svg aria-hidden="true" slot="icon-calendar">
			<use xlink:href="#iconrili" />
		</svg>
	</date-picker>
</template>

<script>
import DatePicker from "vue2-datepicker";
import disabledAfterTodayMixin from "@/mixins/dateNotBeforeToday";
import notLimitDate from "@/mixins/notLimitDate";
import { dateTimeFormat, dateFormat } from "@/constValues";

export default {
	name: "z-date-picker",
	components: {
		DatePicker,
	},
	props: {
		//绑定的值
		time: {
			type: String,
			default: "",
		},
		/**
		 * 类型
		 *
		 *  date 日期 | datetime 日期加时分秒
		 */
		type: {
			type: String,
			default: "datetime",
		},
		//是否设置默认时间为当前时间
		isSetNowDate: {
			type: Boolean,
			default: true,
		},
		//是否禁用今日之后的时间
		isDisabledAfterToday: {
			type: Boolean,
			default: true,
		},
	},
	//禁用今日之后的时间
	mixins: [disabledAfterTodayMixin, notLimitDate],
	computed: {
		//时间格式化
		format() {
			const formatMap = {
				date: dateFormat,
				datetime: dateTimeFormat,
			};
			return formatMap[this.type];
		},
	},
	created() {
		if (this.isSetNowDate) {
			this.$emit(
				"update:time",
				this.$utils.dayjs().format(this.format)
			);
		}
	},
	methods: {
		/**
		 * change事件
		 *
		 * @param value 选择的值
		 * @param type  picker的类型
		 *
		 */
		selectChange(value, type) {
			//更新传进来的time
			this.$emit("update:time", value || "");
			//抛出change自定义事件
			this.$emit("change", { value, type: type || "date" });
		},
	},
};
</script>
