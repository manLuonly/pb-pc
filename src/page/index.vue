<template>
	<div class="index">
		首页
        <zDatePicker :time.sync="time" placeholder="测试" type="datetime" :isDisabledAfterToday="false"/>
        <zDateRange :time.sync="time1" placeholder="测试" type="date" :isDisabledAfterToday="false" />
	</div>
</template>

<script>
import { demo } from '@/service'

export default {
    name: "",
    data() {
        return {
            time:"",
            time1:[],
        }
    },
    mounted() {

        demo
    },

};
</script>

<style lang='scss' scoped>
.index {
	height: 10000px;
}
</style>
