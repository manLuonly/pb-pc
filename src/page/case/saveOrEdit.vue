<template>
	<div class="save-or-edit">
		<el-form ref="form" :rules="rules" label-width="60px">
			<el-form-item label="轮播图">
				<el-upload
					action
					:http-request="appendFiles"
					:on-remove="handleRemove"
					list-type="picture"
					multiple
				>
					<el-button size="small" type="primary">点击上传</el-button>
				</el-upload>
			</el-form-item>
		</el-form>
		<div class="z-flex z-row-right">
			<el-button plain @click="cancel">取消</el-button>
			<el-button type="primary" @click="submitForm" :loading="submitLoading">提交</el-button>
		</div>
	</div>
</template>

<script>
import { addSlideShow } from "@/service";

export default {
    name: "saveOrEdit",
	data() {
		return {
			rules: {
				select_color: [
					{
						required: true,
						message: "请选择选中文字颜色",
						trigger: "blur",
					},
				],
			},
            submitLoading: false,
            filesMap:{}
		};
	},
	methods: {
		cancel() {
			this.$emit("update:visible", false);
		},
		handleRemove(file, fileList) {
            delete this.filesMap[file.uid]
		},
		appendFiles(params) {
            this.filesMap[params.file.uid] = params.file
		},
		submitForm() {
            const files = Object.values(this.filesMap)
            const filseLength = files.length
            const formData = new FormData()

            files.forEach(file=>{
                formData.append("files", file);
            })

            if(!filseLength) {
                this.$message.error("请上传图片后提交！")
                return
            }

            this.submitLoading = true
			addSlideShow(formData)
				.then(() => {
					this.$emit("refresh");
					this.cancel();
				})
				.finally(() => {
					this.submitLoading = false;
				});
		},
	},
};
</script>
