import Vue from 'vue'
import Router from 'vue-router'


import Exhibition from '../pages/exhibition' //官网展示

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
    {//官网展示
      path: '/exhibition',
      name: 'exhibition',
      component:  resolve => require(['../pages/exhibition'], resolve)
    },
    {//首页
      path: '/index',
      name: 'index',
      meta: {showFooter: true, keepAlive: true},
      component: resolve => require(['..//pages/index'], resolve)

    },
    {//首页--分类页
      path: '/index/list/:id',
      name: 'list',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/index/page/list'], resolve),
    },
    {
      path: '/search',
      name: 'search',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/search'], resolve)
    },
    {//分类
      path: '/classfiy',
      name: 'classify',
      meta: {showFooter: true, keepAlive: true},
      component: resolve => require(['@/pages/classify'], resolve)
    },
    {//预约
      path: '/subscribe/:type',
      name: 'subscribe',
      meta: {keepAlive: false},
      component: resolve => require(['@/pages/subscribe'], resolve)
    },
    {//详情页
      path: '/detail/:type/:id',
      name: 'detail',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/detail'], resolve)
    },
    {//购物车
      path: '/buyCart',
      name: 'buyCart',
      meta: {showFooter: true, keepAlive: false},
      component: resolve => require(['../pages/buyCart'], resolve)
    },
    {//员工端
      path:'/staff',
      name:'staff',
      meta: {keepAlive: false},
      component:resolve => require(['../pages/staff'], resolve)
    },
    {//会员中心
      path: '/member',
      name: 'member',
      meta: {showFooter: true, keepAlive: false},
      component: resolve => require(['../pages/member'], resolve)
    },
    {//会员中心--会员卡
      path: '/member/mamberCard',
      name: 'mamberCard',
      meta: {showFooter: false, keepAlive: false},
      component: resolve => require(['../pages/member/page/memberCard'], resolve)
    },
    {//会员中心--用户管理
      path: '/member/userManage',
      name: 'userManage',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/userManage'], resolve)
    },
    {//会员中心--用户管理--修改
      path: '/member/userManage/userChange/:type/:message',
      name: 'userChange',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/userManage/page/userChange'], resolve)
    }, {//会员中心--用户管理--地址
      path: '/member/userManage/address',
      name: 'address',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/userManage/page/address/address'], resolve)
    },
    {//会员中心--用户管理--修改+增加地址
      path: '/member/userManage/changeAddress/:id',
      name: 'changeAddress',
      meta: {keepAlive: false}, // 不需要被缓存
      component:resolve => require(['../pages/member/page/userManage/page/address/chengAddress'], resolve)
    },
    {//会员中心--我的订单
      path: '/member/myIndent/:type',
      name: 'myIndent',
      meta: {keepAlive: false}, // 不需要被缓存
      component:  resolve => require(['../pages/member/page/myIndent'], resolve)
    },
    {//订单确认
      path: '/indentConfirme',
      name: 'indentConfirme',
      meta: {keepAlive: false}, // 不需要被缓存
      component:  resolve => require(['../pages/pay/indentConfirme'], resolve)
    },
    {//支付
      path: '/pay',
      name: 'pay',
      meta: {keepAlive: false}, // 不需要被缓存
      component:  resolve => require(['../pages/pay'], resolve)
    },
    {//美丽基金
      path: '/member/beautyFund',
      name: 'beautyFund',
      meta: {keepAlive: false}, // 不需要被缓存
      component:  resolve => require(['../pages/member/page/beautyFund'], resolve)
    },
    {//我的一级美丽代言
      path: '/beautyFund/oneEndorsement',
      name: 'oneEndorsement',
      meta: {keepAlive: false}, // 不需要被缓存
      component:  resolve => require(['../pages/member/page/beautyFund/oneEndorsement'], resolve)
    },
    {//我的二级美丽代言
      path: '/beautyFund/twoEndorsement',
      name: 'twoEndorsement',
      meta: {keepAlive: false}, // 不需要被缓存
      component:  resolve => require(['../pages/member/page/beautyFund/twoEndorsement'], resolve)
    },
    {//我的上级美丽代言
      path: '/beautyFund/superiorEndorsement',
      name: 'superiorEndorsement',
      meta: {keepAlive: false}, // 不需要被缓存
      component:  resolve => require(['../pages/member/page/beautyFund/superiorEndorsement'], resolve)
    },
    {//积分兑换
      path: '/beautyFund/exchange',
      name: 'exchange',
      meta: {keepAlive: false}, // 不需要被缓存
      component:  resolve => require(['../pages/member/page/beautyFund/exchange'], resolve)
    },
    {//积分排行榜
      path: '/beautyFund/IntegralRanking',
      name: 'IntegralRanking',
      meta: {keepAlive: false}, // 不需要被缓存
      component:  resolve => require(['../pages/member/page/beautyFund/IntegralRanking'], resolve)
    },
    {//基金提现
      path: '/beautyFund/fundPresentation',
      name: 'fundPresentation',
      meta: {keepAlive: false}, // 不需要被缓存
      component:  resolve => require(['../pages/member/page/beautyFund/fundPresentation'], resolve)
    }


  ]
})
