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
// import changeAddress from '../pages/member/page/userManage/page/address/chengAddress'//会员中心--用户管理--地址管理
import MyIndent from '../pages/member/page/myIndent'//会员中心--我的订单
import Subscribe from '@/pages/subscribe'


//购物车
import BuyCart from '../pages/buyCart'

//订单确认
import IndentConfirme from '../pages/pay/indentConfirme'
//支付
import Pay from '../pages/pay'
import store from "../store";


Vue.use(Router)


let router = new Router({
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
      title: 'S+艾司普勒斯科技美容集团',
      component: resolve => require(['../pages/exhibition'], resolve)
    },
    {//首页
      path: '/index',
      name: 'index',
      title: 'S+艾司商城',
      meta: {showFooter: true, keepAlive: true},
      component: resolve => require(['..//pages/index'], resolve)
    },
    {//服务评价
      path: '/serverEvaluate/:orderid',
      name: "serverEvaluate",
      title: '我的评价',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/index/serverEvaluate'], resolve)
    },
    {//首页--分类页
      path: '/index/list/:id',
      name: 'list',
      title: 'S+艾司商城',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/index/page/list'], resolve),
    },
    {//搜索
      path: '/search',
      title: '搜索栏',
      name: 'search',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/search'], resolve)
    },
    {//分类
      path: '/classfiy',
      name: 'classify',
      meta: {showFooter: true, keepAlive: false},
      redirect: {
        name: 'recommend'
      },
      component: resolve => require(['../pages/classify'], resolve),
      children: [{
        path: 'recommend',
        name: 'recommend',
        meta: {showFooter: false, keepAlive: false},
        component: resolve => require(['../pages/classify/com/recommend'], resolve),
      }, {
        path: 'clubCard',
        name: 'clubCard',
        meta: {showFooter: false, keepAlive: false},
        component: resolve => require(['../pages/classify/com/clubCard'], resolve),
      }, {
        path: 'series',
        name: 'series',
        meta: {showFooter: false, keepAlive: false},
        component: resolve => require(['../pages/classify/com/series'], resolve),
      }]
    },
    {//热门商品and服务(预约)
      path: '/subscribe/:type',//1 服务 2 商品
      name: 'subscribe',
      meta: {showFooter: true, keepAlive: false},
      beforeEnter: function (to, from, next) {
        if(to.params.type==='2'){ //商品
          store.commit('setShowFooter', false);
        }
        next()
      },
      component: resolve => require(['../pages/subscribe'], resolve)
    },
    {//热门商品--预约美师
      path: '/appoint/:sid',//sid 服务id
      name: 'appoint',
      title: '预约美师',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribe/page/appoint'], resolve)
    },
    {//热门商品--选择时间
      path: '/appoint/:sid/:id',//sid 服务id id 美师id
      name: 'selectTime',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribe/page/appoint/selectTime'], resolve)
    },
    {//热门商品--预约确认
      path: '/confirm/:orderid',//服务预约确认
      name: 'confirm',
      title: '预约支付',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribe/page/appoint/confirm'], resolve)
    },

    {//热门商品--预约完成
      path: '/appointPay/:orderid',//orderid 预约订单
      name: 'appointPay',
      title: '预约完成',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribe/page/appoint/pay'], resolve)
    },
    {//详情页
      path: '/detail/:type/:id', // type 1 商品  2服务
      name: 'detail',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/detail'], resolve)
    },
    {//会员卡详情页
      path: '/clubCardDetail/:id',// 会员卡id
      name: 'clubCardDetail',
      title: '会员卡详情',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/detail/clubCard'], resolve)
    },
    {//详情页--商品评论
      path: '/evaluate/:type/:id',// type 1 商品  2服务
      name: 'evaluate',
      title: '全部评论',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/detail/page/evaluate'], resolve)
    },
    {//购物车
      path: '/buyCart',
      name: 'buyCart',
      title: '购物车',
      meta: {showFooter: true, keepAlive: false},
      component: resolve => require(['../pages/buyCart'], resolve)
    },
    {//员工端
      path: '/staff',
      name: 'staff',
      title: '美师端',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/staff'], resolve)
    },
    {//员工端--我的預約
      path: '/mySubscribe',
      name: 'mySubscribe',
      title: '预约记录',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/staff/mySubscribe'], resolve)
    },
    {//会员中心
      path: '/member',
      name: 'member',
      title: '会员中心',
      meta: {showFooter: true, keepAlive: false},
      component: resolve => require(['../pages/member'], resolve)
    },
    {//会员中心--我的预约
      path: '/member/mySubscribe',
      name: 'memberSubscribe',
      title: '我的预约',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/subscribe'], resolve)
    },
    {//会员中心--服务完成
      path: '/member/finish/:orderid/:type',//type 1支付  2查看
      name: 'memberPayFinish',
      title: '服务完成',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/subscribe/finish'], resolve)
    },
    {//会员中心--会员卡
      path: '/member/memberCard',
      name: 'memberCard',
      title: '会员卡',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/memberCard'], resolve)
    },
    {//会员中心--我的收藏
      path: '/member/myCollect',
      name: 'myCollect',
      title: '我的收藏',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/myCollect'], resolve)
    },
    {//会员中心--邀请好友
      path: '/member/invite',
      name: 'invite',
      title: '邀请好友',
      meta: {keepAlive: true},
      component: resolve => require(['../pages/member/page/invite'], resolve)
    },
    {//会员中心--我的评价
      path: '/member/myEvaluate',
      name: 'myEvaluate',
      meta: {keepAlive: false},
      title: '我的评价',
      component: resolve => require(['../pages/member/page/myEvaluate'], resolve)
    },
    {//会员中心--用户管理
      path: '/member/userManage',
      name: 'userManage',
      title: '账号管理',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/userManage'], resolve)
    },
    {//会员中心--用户管理--修改
      path: '/member/userManage/userChange/:type/:message',
      name: 'userChange',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/userManage/page/userChange'], resolve)
    },
    {//会员中心--用户管理--地址
      path: '/member/userManage/address/:type',//0 购物时选择状态 1 会员中心编辑状态
      name: 'address',
      title: '收货地址',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/userManage/page/address/address'], resolve)
    },
    {//会员中心--用户管理--修改+增加地址
      path: '/member/userManage/changeAddress/:id',
      name: 'changeAddress',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/userManage/page/address/chengAddress'], resolve)
    },
    {//会员中心--我的订单
      path: '/member/myIndent/:type', //type 订单状态
      name: 'myIndent',
      title: '我的订单',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/myIndent'], resolve)
    },
    {//会员中心--我的订单--评价
      path: '/member/myIndent/appraise/:id', //  id 订单号id
      name: 'appraise',
      title: '发表评论',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/myIndent/page/appraise'], resolve)
    },
    {//会员中心--我的订单--查看物流
      path: '/member/myIndent/logistics/:ordersn', //  ordersn 订单号id
      name: 'logistics',
      title: '查看物流',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/myIndent/page/logistics'], resolve)
    },
    {//订单确认
      path: '/indentConfirme',
      name: 'indentConfirme',
      title: '订单确认',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/pay/indentConfirme'], resolve)
    },
    {//支付
      path: '/pay',
      name: 'pay',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/pay'], resolve)
    },
    {//美丽基金
      path: '/member/beautyFund',
      name: 'beautyFund',
      title: '美丽基金',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/beautyFund'], resolve)
    },
    {//我的一级美丽代言
      path: '/beautyFund/oneEndorsement',
      name: 'oneEndorsement',
      title: '我的一级美丽代言',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/beautyFund/oneEndorsement'], resolve)
    },
    {//我的二级美丽代言
      path: '/beautyFund/twoEndorsement',
      name: 'twoEndorsement',
      title: '我的二级美丽代言',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/beautyFund/twoEndorsement'], resolve)
    },
    {//我的上级美丽代言
      path: '/beautyFund/superiorEndorsement',
      name: 'superiorEndorsement',
      title: '我的上级美丽代言',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/beautyFund/superiorEndorsement'], resolve)
    },
    {//积分兑换
      path: '/beautyFund/exchange',
      name: 'exchange',
      title: '积分兑换',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/beautyFund/exchange'], resolve)
    },
    {//积分排行榜
      path: '/beautyFund/IntegralRanking',
      name: 'IntegralRanking',
      title: '积分排行榜',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/beautyFund/IntegralRanking'], resolve)
    },
    {//基金提现
      path: '/beautyFund/fundPresentation',
      name: 'fundPresentation',
      title: '美丽基金',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/beautyFund/fundPresentation'], resolve)
    },
    {//基金提现 - 成功
      path: '/beautyFund/fundPresentationOk',
      name: 'fundPresentationOk',
      title: '美丽基金',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/beautyFund/fundPresentationOk'], resolve)
    },
    {//积分兑换 - 成功
      path: '/beautyFund/exchangeOk/:je',
      name: 'exchangeOk',
      title: '积分兑换',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/beautyFund/exchangeOk'], resolve)
    },
    {//账号绑定
      path: '/bindAccount',
      name: 'bindAccount',
      title: '账号绑定',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/bindAccount'], resolve)
    },
    {//美师主页
      path: '/subscribe/page/appoint/DetailsBeautyDivision/:id/:sid',
      name: 'DetailsBeautyDivision',
      title: '美师主页',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/subscribe/page/appoint/DetailsBeautyDivision'], resolve)
    },
    {//美丽代言说明
      path: '/beautyFund/beautifulEndorsement',
      name: 'beautifulEndorsement',
      title: '美丽代言说明',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/beautyFund/beautifulEndorsement'], resolve)
    },
    {//银行卡列表
      path: '/beautyFund/choiceBanks',
      name: 'choiceBanks',
      title: '选择银行',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/member/page/beautyFund/choiceBanks'], resolve)
    },
    {//员工个人资料
      path: '/staff/employeeInformation',
      name: 'employeeInformation',
      title: '员工端个人资料',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/staff/employeeInformation'], resolve)
    },
    {//员工个人编辑
      path: '/staff/editEmployeeInformation/:type',
      name: 'editEmployeeInformation',
      title: '员工端个人资料',
      meta: {keepAlive: false}, // 不需要被缓存
      component: resolve => require(['../pages/staff/editEmployeeInformation'], resolve)
    },
    {//支付跳转页面
      path: '/transfer',
      name: 'transfer',
      title: '支付成功',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/index/transfer'], resolve)
    }
  ]
})

function setTitle(title) {
  document.title = title
  var mobile = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(mobile)) {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none'
    var iframeCallback = function () {
      setTimeout(function () {
        iframe.removeEventListener('load', iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    }
    iframe.addEventListener('load', iframeCallback);
    document.body.appendChild(iframe);
  }
}

router.afterEach((transition) => {

  let name = transition.name;
  let item = router.options.routes.filter((ele) => {
    return ele.name === name;
  });
  try {
    setTitle(item[0].title);
  } catch (e) {
    setTitle('S+艾司商城');
  }
});
export default router



