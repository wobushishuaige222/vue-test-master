<template>
    <div class="Home">
        <v-header></v-header>
        <div class="Wrap">
            <v-sidebar class="Sidebar"></v-sidebar>
            <transition name="fade">
                <router-view class="Content"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import vHeader from '@/page/home/Header.vue'
    import vSidebar from '@/page/home/Sidebar.vue'

    export default {
        data() {
            return {

            }
        },
        mounted() {

        },
        components: {
            vHeader,
            vSidebar
        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>