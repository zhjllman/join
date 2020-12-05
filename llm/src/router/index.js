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


// const router = new Router({
//     routes: [ 
//         {
//             path: '/',
//             component: index => require(['@/components/banner/banner'], banner),
//             meta: [{ parentName: '', name: 'banner' }],
//             children: [{
//                     path: '/edit_detail',
//                     name: 'edit_detail',
//                     component: edit_detail => require(['@/view/system/info/edit_detail'], edit_detail),
//                     meta: [{ parentName: '', name: '移动端中草药详情' }]
//                 }, {
//                     path: '/edit_zcy',
//                     name: 'edit_zcy',
//                     component: edit_zcy => require(['@/view/system/info/edit_zcy'], edit_zcy),
//                     meta: [{ parentName: '', name: '中草药示范园区简介' }]
//                 }
//             ]
//         },
//         {
//             path: "/banner",
//             name: "banner",
//             component: login => require(["@/components/banner/banner"], banner),
//             meta: [{ parentName: '', name: 'banner' }],
//         },

        
//     ]
// })
// router.beforeEach(function(to, from, next) {

//     if (!localStorage.getItem("loginName")) {
//         if (to.path !== '/banner') {
//             return next('/banner')
//         }
//     }
//     next()
// })
