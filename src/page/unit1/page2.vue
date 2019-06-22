<template>
    <div>
        <v-breadCrumb></v-breadCrumb>
        <button @click="add">+</button>
    </div>
</template>

<script>
    import page3 from '@/page/unit1/page3.vue'
    
    export default {
        methods: {
            add() {
                {
                  this.$router.push('page3')
                }
            }
        },
    }
</script>

<style>

</style>