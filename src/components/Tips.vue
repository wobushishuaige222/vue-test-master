<template>
    <div>
        <el-dialog title="提示" :visible.sync="parameter.visible" width="30%" :before-close="handleClose">
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: ['parameter'],
        methods: {
            cancel() {
                this.parameter.visible = false;
            },
            confirm() {
                this.parameter.handler()
            }
        }
    }
</script>


<style scoped>

</style>