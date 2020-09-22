import Vue from "vue";

/**
 * 传入接口函数
 */
export default (cb) => {
    return Vue.prototype.$msgbox({
        title: "确认信息",
        message: "是否确认删除？",
        showCancelButton: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
            if (action === "confirm") {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = "删除中...";

                cb.finally(() => {
                    instance.confirmButtonLoading = false;
                    done();
                })
            } else {
                done();
            }
        }
    });
};
