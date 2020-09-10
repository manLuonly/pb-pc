<template>
	<div class="index">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
	</div>
</template>

<script>
import { demo } from '@/service'

export default {
    name: "",
    data() {
        return {
            input:"",
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
