import Vue from 'vue'
import Router from 'vue-router'
import router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import banner from '@/components/banner/banner'
import classManage from '@/components/banner/classManage'
import gradeManage from '@/components/banner/gradeManage'
import paperManage from '@/components/banner/paperManage'
import information from '@/components/banner/information'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path:'/banner',
      name:'banner',
      component:banner,
    },
    {
      path:'/banner',
      name:'classManage',
      component:classManage,
    },
    {
      path:'/banner',
      name:'gradeManage',
      component:gradeManage,
    },
    {
      path:'/banner',
      name:'paperManage',
      component:paperManage,
    },
    {
      path:'/banner',
      name:'information',
      component:information,
    }
  ],
})


// router.beforeEach((to, from, next) => {
//  if (username != '' && password != '') {
//   // 在已登陆的情况下访问登陆页会重定向到首页
//   if (to.path === '/HelloWorld') {
//    next({path: '/'})
//   } else {
//    next({path: to.path || '/'})
//   }
//  } else {
//   // 没有登陆则访问任何页面都重定向到登陆页
//   if (to.path === '/HelloWorld') {
//    next()
//   } else {
//    next(`/HelloWorld?redirect=${to.path}`)
//   }
//  }
// })