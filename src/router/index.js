import Vue from 'vue'
import Router from 'vue-router'
import shopIndex from '../components/index/shopIndex.vue'
import background from '../components/index/background.vue'
import shopMall from '../components/index/shopMall.vue'
import member from '../components/members/members.vue'
import goodsInfo from '../components/goods/goodsInfo.vue'
import editorGoods from '../components/goods/editorGoods.vue'
import deleteGoods from '../components/goods/deleteGoods.vue'
import newGoods from '../components/goods/newGoods.vue'
import orderInfo from '../components/order/orderInfo.vue'
import editormembers from '../components/order/editormembers.vue'
import editorOrder from '../components/order/editorOrder.vue'
import usersInfo from '../components/users/usersInfo.vue'
import editorUsers from '../components/users/editorUsers.vue'
import newUsers from '../components/users/newUsers.vue'
import deleteUsers from '../components/users/deleteUsers.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'shopIndex',
      component: shopIndex
    },
    {
      path: '/home/background',
      name: 'background',
      component: background
    },{
      path: '/home/shopMall',
      name: 'shopMall',
      component: shopMall
    },
    {
      path: '/home/member',
      name: 'member',
      component: member
    },
    {
      path: '/home/goodsInfo',
      name: 'goodsInfo',
      component: goodsInfo
    },
    {
      path: '/home/editorGoods',
      name: 'editorGoods',
      component: editorGoods
    },
    {
      path: '/home/deleteGoods',
      name: 'deleteGoods',
      component: deleteGoods
    }
    ,
    {
      path: '/home/newGoods',
      name: 'newGoods',
      component: newGoods
    },
    {
      path: '/home/orderInfo',
      name: 'orderInfo',
      component: orderInfo
    },
    {
      path: '/home/editormembers',
      name: 'editormembers',
      component: editormembers
    },
    {
      path: '/home/editorOrder',
      name: 'editorOrder',
      component: editorOrder
    },
    {
      path: '/home/usersInfo',
      name: 'usersInfo',
      component: usersInfo
    },
    {
      path: '/home/editorUsers',
      name: 'editorUsers',
      component: editorUsers
    },
    {
      path: '/home/newUsers',
      name: 'newUsers',
      component: newUsers
    },
    {
      path: '/home/deleteUsers',
      name: 'deleteUsers',
      component: deleteUsers
    }
  ]
})
