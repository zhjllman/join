import Vue from 'vue'
import Router from 'vue-router'
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
      component: HelloWorld
    },
    {
      path:'/banner',
      name:'banner',
      component:banner,
      meta:{
      	requireAuth:true,
      }
    },
    {
      path:'/banner',
      name:'classManage',
      component:classManage
    },
    {
      path:'/banner',
      name:'gradeManage',
      component:gradeManage
    },
    {
      path:'/banner',
      name:'paperManage',
      component:paperManage
    },
    {
      path:'/banner',
      name:'information',
      component:information
    }
  ]
})
