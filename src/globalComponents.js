import Vue from 'vue'

Vue.component('vTips',resolve => require(['@/components/Tips.vue'], resolve));
Vue.component('vBreadCrumb',resolve => require(['@/components/BreadCrumb.vue'], resolve));