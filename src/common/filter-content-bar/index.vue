<!-- 显示筛选条件的块 -->
<template>
	<div class="filter_content_bar">
        <div v-if="hasText" class="text-ellipsis-1">
            筛选内容:
            <span v-for="(value, key, i) in text" :key="i">
                <span class="zngl-orange">{{key}}</span> : {{value}};&nbsp;
            </span>
        </div>
        <div v-else>
            暂时没有筛选内容哦~
        </div>
    </div>
</template>

<script>
export default {
	name: "filter-content-bar",
	props: {
        /**
         * key值为筛选名称，value为筛选的值
         */
		text: {
			type: Object,
			default:()=>({})
		},
    },
    computed:{
        hasText() {
            const { text } = this

            return this.$utils._.size(text) && this.$utils._.compact(Object.values(text)).length
        }
    }
};
</script>

<style lang='scss' scoped>
.filter_content_bar {
	height: 40px;
	line-height: 40px;
	padding-left: 20px;
	font-size: 14px;
	color: #fff;
	letter-spacing: 1px;
	background-color: $zngl-blue;
}
</style>
