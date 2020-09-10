<template>
	<div class="index">
		首页
	</div>
</template>

<script>
import { demo } from '@/service'
export default {
    name: "",
    mounted() {
        demo()
    }
};
</script>

<style lang='scss' scoped>
.index {
	height: 10000px;
}
</style>
