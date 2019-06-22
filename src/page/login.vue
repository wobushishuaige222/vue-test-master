<template>
    <div class="login">
        <el-form :model="formInline" class="demo-form-inline" label-width="50px">
            <el-form-item label="账号">
                <el-input v-model="formInline.userName" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input :show-password="true" v-model="formInline.passWord" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
                <el-button id="submit" type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    userName: '',
                    passWord: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$router.push('/home')
            }
        },

    }
</script>

<style scoped>
    .login {
        position: relative;
        height: 100%;
    }

    .demo-form-inline {
        width: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #submit {
        width: 250px;
    }
</style>