import Vue from "vue";

/**
 * 传入接口函数
 */
export default (cb, cbParams) => {
    return Vue.prototype.$msgbox({
        title: "确认信息",
        message: "是否确认删除？",
        showCancelButton: true,
        confirmButtonText: '删除',
        type:"warning",
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
            if (action === "confirm") {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = "删除中...";

                cb(cbParams).then(() => {
                    done();
                }).catch(() => {
                    instance.confirmButtonText = "删除";
                })
                .finally(() => {
                    instance.confirmButtonLoading = false;
                })
            } else {
                done();
            }
        }
    });
};
