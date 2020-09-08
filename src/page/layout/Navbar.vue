<template>
    <div class="nav-bar">
        <div class="item">进货</div>
    </div>
</template>

<script>

    export default {};

</script>

<style lang="scss" scoped>
    .nav-bar {
        display: flex;
        align-items: flex-end;
        height: 40px;
        overflow: hidden;
        position: relative;
        background-color: rgba(248, 248, 248, 0.4);
        backdrop-filter: blur(10px);

        .item {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 20px;
            width: 123px;
            height: 95%;
            background-color: #fff;
        }
    }
</style>
