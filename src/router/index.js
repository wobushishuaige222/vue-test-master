import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/page/login.vue'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/page1',
      component: resolve => require(['@/page/home/home.vue'], resolve),
      children: [{
          path: 'page1',
          component: resolve => require(['@/page/unit1/page1.vue'], resolve),
        },
        {
          path: 'page2',
          component: resolve => require(['@/page/unit1/page2.vue'], resolve),
        },
        {
          path: 'page3',
          component: resolve => require(['@/page/unit1/page3.vue'], resolve),
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: resolve => require(['@/page/404.vue'], resolve)
    }
  ]
})

