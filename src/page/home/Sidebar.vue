<template>
    <div :class="isCollapse">
        <el-menu default-active="2" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen"
            @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
            :collapse="$store.state.isCollapse" router>
            <template v-for="outside in menus">
                <el-submenu :index="outside.index">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{outside.title}}</span>
                    </template>
                    <el-menu-item-group>
                        <template v-for="inside in outside.child">
                            <el-menu-item :index="inside.index">{{inside.title}}</el-menu-item>
                        </template>
                    </el-menu-item-group>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menus: [
                    {
                        icon: '1',
                        index: '/home',
                        title: '1',
                        child: [
                            {
                                index: '/home/page1',
                                title: '1-1',
                            },
                            {
                                index: '/home/page2',
                                title: '1-2',
                            },
                            {
                                index: '/home/page3',
                                title: '1-3',
                            }
                        ]
                    }
                ],
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            isCollapse() {
                return this.$store.state.isCollapse ? "collapse" : "uncollapse";
            }
        }
    }
</script>

<style scoped>
    .collapse {
        width: 65px;
    }

    .uncollapse {
        width: 220px;
    }

    .el-menu-vertical-demo {
        height: 100%;
    }
</style>