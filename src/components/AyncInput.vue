<template>
    <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect">
    </el-autocomplete>
</template>

<script>
    export default {
        data() {
            return {
                state: '',
            }
        },
        props: {
            WIDTH: {
                type: String,
                default: 220
            }
        },
        methods: {
            querySearchAsync(queryString, cb) {
                cb(results);
            },
            handleSelect(item) {

            }
        },
        mounted() {

        }
    }
</script>