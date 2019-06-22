<template>
  <div class="Header">
    <div class="logo"></div>
    <div class="turn" @click="$store.commit('shrink')">
      <i :class="isCollapse"></i>
    </div>

    <div class="info"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    computed: {
      isCollapse() {
        return this.$store.state.isCollapse ? 'el-icon-turn-off' : 'el-icon-open';
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .logo {
    display: inline-block;
    width: 220px;
  }

  .turn {
    display: inline-block;
  }

  .turn i {
    vertical-align: middle;
    font-size: 30px;
    color: #606266;
  }
</style>