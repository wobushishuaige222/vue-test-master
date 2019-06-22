import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    
    state: {
        //控制侧边栏是否收起
        isCollapse: false
    },
    getters: {
        
    },
    mutations: {
        //控制侧边栏是否收起
        shrink (state) {
            state.isCollapse = !state.isCollapse;
        }
    }
})