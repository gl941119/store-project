import Vue from 'vue'
import Router from 'vue-router'

import Index from '..//pages/index'//首页
import List from '../pages/index/page/list'//首页--分类页

import Detail from '../pages/detail'//详情页

import Search from '../pages/search'


import Classify from '@/pages/classify'



import Member from '../pages/member'//会员中心
import UserManage from '../pages/member/page/userManage'//会员中心--用户管理
import UserChange from '../pages/member/page/userManage/page/userChange'//会员中心--用户管理--修改用户
import Address from '../pages/member/page/userManage/page/address/address'//会员中心--用户管理--地址管理
import changeAddress from '../pages/member/page/userManage/page/address/chengAddress'//会员中心--用户管理--地址管理
import MyIndent from '../pages/member/page/myIndent'//会员中心--我的订单
import Subscribe from '@/pages/subscribe'


//购物车
import BuyCart from '../pages/buyCart'

//订单确认
import IndentConfirme from '../pages/pay/indentConfirme'
//支付
import Pay from '../pages/pay'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'index',
      },
    },
    {//首页
      path: '/index',
      name: 'index',
      meta: {showFooter: true, keepAlive: true},
      component: Index,

    },
    {//首页--分类页
      path: '/index/list/:id',
      name: 'list',
      meta: {keepAlive: false},
      component: List,
    },
    {
      path: '/search',
      name: 'search',
      meta: {keepAlive: false},
      component: Search
    },
    {//分类
      path: '/classfiy',
      name: 'classify',
      meta: {showFooter: true, keepAlive: true},
      component: Classify
    },
    {//预约
      path: '/subscribe/:type',
      name: 'subscribe',
      meta: {keepAlive: false},
      component: Subscribe,
    },
    {//详情页
      path: '/detail/:type/:id',
      name: 'detail',
      meta: {keepAlive: false},
      component: Detail,
    },
    {//购物车
      path: '/buyCart',
      name: 'buyCart',
      meta: {showFooter: true, keepAlive: false}, // 显示footer
      component: BuyCart
    },
    {//会员中心
      path: '/member',
      name: 'member',
      meta: {showFooter: true, keepAlive: false}, // 显示footer
      component: Member
    },
    {//会员中心--用户管理
      path: '/member/userManage',
      name: 'userManage',
      meta:{ keepAlive: false}, // 不需要被缓存
      component: UserManage
    },
    {//会员中心--用户管理--修改
      path: '/member/userManage/userChange/:type/:message',
      name: 'userChange',
      meta:{ keepAlive: false}, // 不需要被缓存
      component: UserChange
    }, {//会员中心--用户管理--地址
      path: '/member/userManage/address',
      name: 'address',
      meta:{ keepAlive: false}, // 不需要被缓存
      component: Address
    },
    {//会员中心--用户管理--修改+增加地址
      path: '/member/userManage/changeAddress/:id',
      name: 'changeAddress',
      meta:{ keepAlive: false}, // 不需要被缓存
      component: changeAddress
    },
    {//会员中心--我的订单
      path: '/member/myIndent/:type',
      name: 'myIndent',
      meta:{ keepAlive: false}, // 不需要被缓存
      component: MyIndent
    },
    {//订单确认
      path: '/indentConfirme',
      name: 'indentConfirme',
      meta:{ keepAlive: false}, // 不需要被缓存
      component: IndentConfirme
    },
    {//支付
      path: '/pay',
      name: 'pay',
      meta:{ keepAlive: false}, // 不需要被缓存
      component: Pay
    }


  ]
})
