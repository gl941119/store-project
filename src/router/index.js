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
        name: 'subscribeHome',
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
      meta: {showFooter: true, keepAlive: false},
      component: resolve => require(['..//pages/index'], resolve)
    },
    {//服务评价
      path: '/serverEvaluate/:orderid',
      name: "serverEvaluate",
      title: '我的评价',
      meta: {keepAlive: false},
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
      path: '/classify',
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
      path: '/subscribe/:type/:ishot',//type 1 服务 2 商品    ishot // 1热门  0 所有   2默认
      name: 'subscribe',
      meta: {sub_showFooter: true, keepAlive: false},
      beforeEnter: function (to, from, next) {
        if (to.params.type === '2') { //商品
          store.commit('setSub_showFooter', false);
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
    {//服务预约确认
      path: '/confirm/:orderid',//服务预约确认
      name: 'confirm',
      title: '预约支付',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribe/page/appoint/confirm'], resolve)
    },

    {//服务预约详情
      path: '/serviceInfo/:orderid',//orderid 预约订单
      name: 'serviceInfo',
      title: '预约完成',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribe/page/appoint/info'], resolve)
    },
    {//门店选择
      path: '/subscribe/page/appoint/selectStore',
      name: 'selectStore',
      title: '门店选择',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribe/page/appoint/selectStore'], resolve)
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
    {//商城用户中心
      path: '/storeUser',
      name: 'storeUser',
      title: '用户中心',
      meta: {showFooter: true, keepAlive: false},
      component: resolve => require(['../pages/storeUser'], resolve)
    },
    {//会员中心
      path: '/member',
      name: 'member',
      title: '会员中心',
      meta: {showFooter: true, keepAlive: false},
      component: resolve => require(['../pages/member'], resolve)
    },
    {//会员中心--我的预约
      path: '/member/mySubscribe/:type',// 0  全部   1 待付款  2  已预约     3  完成  4已取消
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
      path: '/member/myCollect/:type',//1 商品 2 服务
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
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/userManage'], resolve)
    },
    {//会员中心--用户管理--修改
      path: '/member/userManage/userChange/:type/:message',
      name: 'userChange',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/userManage/page/userChange'], resolve)
    },
    {//会员中心--用户管理--地址
      path: '/member/userManage/address/:type',//0 购物时选择状态 1 会员中心编辑状态  0弃用
      name: 'address',
      title: '收货地址',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/userManage/page/address/address'], resolve)
    },
    {//会员中心--用户管理--修改+增加地址
      path: '/member/userManage/changeAddress/:id',
      name: 'changeAddress',
      title:'编辑地址',
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
      path: '/member/myIndent/logistics/:ordersn/:status', //  ordersn 订单号id status 套餐订单状态
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
    {//订单详情
      path: '/pay/indentInfo', //ordersn  订单号
      name: 'indentInfo',
      title: '订单详情',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/pay/indentInfo'], resolve)
    },
    {//支付
      path: '/pay',
      name: 'pay',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/pay'], resolve)
    },
    {//支付成功跳转页面
      path: '/success/:orderid/:type',// orderid 订单号   type  1 商品   2服务  3套餐
      name: 'success',
      title: '支付成功',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/pay/success'], resolve)
    },
    {//支付失败跳转页面
      path: '/failure',
      name: 'failure',
      title: '支付失败',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/pay/failure'], resolve)
    },
    {//美丽基金
      path: '/member/beautyFund',
      name: 'beautyFund',
      title: '美丽基金',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/beautyFund'], resolve)
    },
    {//我的一级美丽代言
      path: '/beautyFund/oneEndorsement',
      name: 'oneEndorsement',
      title: '我的一级美丽代言',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/beautyFund/oneEndorsement'], resolve)
    },
    {//我的二级美丽代言
      path: '/beautyFund/twoEndorsement',
      name: 'twoEndorsement',
      title: '我的二级美丽代言',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/beautyFund/twoEndorsement'], resolve)
    },
    {//我的上级美丽代言
      path: '/beautyFund/superiorEndorsement',
      name: 'superiorEndorsement',
      title: '我的上级美丽代言',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/beautyFund/superiorEndorsement'], resolve)
    },
    {//积分兑换
      path: '/beautyFund/exchange',
      name: 'exchange',
      title: '积分兑换',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/beautyFund/exchange'], resolve)
    },
    {//积分排行榜
      path: '/beautyFund/IntegralRanking',
      name: 'IntegralRanking',
      title: '积分排行榜',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/beautyFund/IntegralRanking'], resolve)
    },
    {//基金提现
      path: '/beautyFund/fundPresentation',
      name: 'fundPresentation',
      title: '美丽基金',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/beautyFund/fundPresentation'], resolve)
    },
    {//基金提现 - 成功
      path: '/beautyFund/fundPresentationOk',
      name: 'fundPresentationOk',
      title: '美丽基金',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/beautyFund/fundPresentationOk'], resolve)
    },
    {//积分兑换 - 成功
      path: '/beautyFund/exchangeOk/:je',
      name: 'exchangeOk',
      title: '积分兑换',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/beautyFund/exchangeOk'], resolve)
    },
    {//账号绑定
      path: '/bindAccount',
      name: 'bindAccount',
      title: '账号绑定',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/bindAccount'], resolve)
    },
    {//美师主页
      path: '/subscribe/page/appoint/DetailsBeautyDivision/:id/:sid',
      name: 'DetailsBeautyDivision',
      title: '美师主页',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribe/page/appoint/DetailsBeautyDivision'], resolve)
    },
    {//美丽代言说明
      path: '/beautyFund/beautifulEndorsement',
      name: 'beautifulEndorsement',
      title: '美丽代言说明',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/beautyFund/beautifulEndorsement'], resolve)
    },
    {//银行卡列表
      path: '/beautyFund/choiceBanks',
      name: 'choiceBanks',
      title: '选择银行',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/member/page/beautyFund/choiceBanks'], resolve)
    },
    {//员工个人资料
      path: '/staff/employeeInformation',
      name: 'employeeInformation',
      title: '员工端个人资料',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/staff/employeeInformation'], resolve)
    },
    {//员工个人编辑
      path: '/staff/editEmployeeInformation/:type',
      name: 'editEmployeeInformation',
      title: '员工端个人资料',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/staff/editEmployeeInformation'], resolve)
    },

    {//专家介绍
      path: '/exhibition/page/smallBusinessCard',
      name: 'smallBusinessCard',
      title: '专家介绍',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/exhibition/page/smallBusinessCard'], resolve)
    },
    {//仪器介绍
      path: '/introductionInstruments',
      name: 'introductionInstruments',
      title: '仪器介绍',
      meta: {keepAlive: true},
      component: resolve => require(['../pages/introductionInstruments/index'], resolve)
    },
    {//一元公益项目
      path: '/yiYuan',
      name: 'yiYuan',
      title: '一元公益项目',
      meta: {keepAlive: true},
      component: resolve => require(['../pages/yiYuan/index'], resolve)
    },
    {//公益活动
      path: '/youthBeauty',
      name: 'youthBeauty',
      title: '公益活动',
      meta: {keepAlive: true},
      component: resolve => require(['../pages/youthBeauty/index'], resolve)
    },

    {//订单交易完成
      path: '/pay/transactionCompletion',
      name: 'transactionCompletion',
      title: '订单交易完成',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/pay/transactionCompletion'], resolve)
    },
    {//地址列表
      path: '/pay/page/transactionCompletion',
      name: 'selectAddress',
      title: '地址列表',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/pay/page/selectAddress'], resolve)
    },
    // ——————————————————————————————————预约主页——————————————————————————————————
    {//预约主页
      path: '/subscribeHome',
      name: 'subscribeHome',
      title: '预约主页',
      meta: {keepAlive: false, sub_showFooter: true},
      component: resolve => require(['../pages/subscribeHome'], resolve)
    },
    {//预约用户中心
      path: '/subscribeHome/userCenter',
      name: 'userCenter',
      title: '预约中心',
      meta: {keepAlive: false, sub_showFooter: true},
      component: resolve => require(['../pages/subscribeHome/page/userCenter'], resolve)
    },
    {//套餐购买 仪器+商品
      path: '/subscribeHome/InstrumentCommodity',
      name: 'InstrumentCommodity',
      title: '套餐购买-仪器+商品',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribeHome/page/InstrumentCommodity'], resolve)
    },
    {//套餐购买 仪器+商品+支付
      path: '/subscribeHome/instrumentCommodityPayment',
      name: 'instrumentCommodityPayment',
      title: '套餐购买-仪器+商品+支付',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribeHome/page/instrumentCommodityPayment'], resolve)
    },
    {//套餐购买 仪器+商品+支付+copy
      path: '/subscribeHome/instrumentCommodityPaymentCopy',
      name: 'instrumentCommodityPaymentCopy',
      title: '套餐购买-仪器+商品+支付+copy',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribeHome/page/instrumentCommodityPaymentCopy'], resolve)
    },
    {//订单确认 无减免支付
      path: '/subscribeHome/acknowledgementOfOrder',
      name: 'acknowledgementOfOrder',
      title: '订单确认',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribeHome/page/acknowledgementOfOrder'], resolve)
    },
    {//美丽积分劵
      path: '/subscribeHome/beautyIntegrals',
      name: 'beautyIntegrals',
      title: '美丽积分劵',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/subscribeHome/page/beautyIntegrals'], resolve)
    },
    {//美丽积分劵
      path: '/serviceCharges',
      name: 'serviceCharges',
      title: '服务费用支付',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/serviceCharges'], resolve)
    },
    {//取消预约
      path: '/staff/cancelReservation',
      name: 'cancelReservation',
      title: '取消预约',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/staff/cancelReservation'], resolve)
    },
    //---------------------------------------- 套餐 -------------------------------------
    {//套餐首页
      path: '/setMealHome',
      name: 'setMealHome',
      title: 'S+艾司商城',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/'], resolve)
    },
    {//套餐非会员中心
      path: '/setMealHome/page/setMealMember',
      name: 'setMealMember',
      title: '会员中心',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/setMealMember/index'], resolve)
    },
    {//套餐会员中心
      path: '/setMealHome/page/setMealMember/memberCenter',
      name: 'memberCenter',
      title: '会员中心',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/setMealMember/memberCenter'], resolve)
    },
    {//普通套餐
      path: '/setMealHome/page/commonSetMeal',
      name: 'commonSetMeal',
      title: '普通套餐',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/commonSetMeal/'], resolve)
    },
    {//热门套餐
      path: '/setMealHome/page/hotPackage',
      name: 'hotPackage',
      title: '热门套餐',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/hotPackage/'], resolve)
    },
    {//美丽代言说明
      path: '/setMealHome/page/beautifulEndorsement',
      name: 'beautifulEndorsements',
      title: '美丽代言说明',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/beautifulEndorsement/'], resolve)
    },
    {//代言自己
      path: '/setMealHome/page/endorseOneself',
      name: 'endorseOneself',
      title: '美丽代言说明',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/endorseOneself/'], resolve)
    },
    {//代言分享
      path: '/setMealHome/page/endorseOneself/endorsementSharing',
      name: 'endorsementSharing',
      title: '美丽代言说明',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/endorseOneself/endorsementSharing'], resolve)
    },
    {//我的团队
      path: '/setMealHome/page/myTeam',
      name: 'myTeam',
      title: '我的团队',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/myTeam/'], resolve)
    },
    {//美丽积分
      path: '/setMealHome/page/beautifulPoints',
      name: 'beautifulPoints',
      title: '美丽积分',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/beautifulPoints/'], resolve)
    },
    {//美丽基金
      path: '/setMealHome/page/setMealbeautyFund',
      name: 'setMealbeautyFund',
      title: '美丽基金',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/setMealbeautyFund/'], resolve)
    },
    {//美丽积分券
      path: '/setMealHome/page/beautifulIntegrals',
      name: 'beautifulIntegrals',
      title: '美丽积分券',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/beautifulIntegrals/'], resolve)
    },
    {//已购服务
      path: '/setMealHome/page/purchasedService',
      name: 'purchasedService',
      title: '已购服务',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/purchasedService/'], resolve)
    },
    {//已购商品
      path: '/setMealHome/page/purchasedCommodities',
      name: 'purchasedCommodities',
      title: '已购商品',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/purchasedCommodities/'], resolve)
    },
    {//套餐详情
      path: '/setMealHome/page/packageDetails',
      name: 'packageDetails',
      title: '套餐详情',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/packageDetails/'], resolve)
    },
    {//套餐订单详情
      path: '/setMealHome/page/setMealOrderinfo/:ids',
      name: 'setMealOrderinfo',
      title: '订单详情',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/setMealOrderinfo/'], resolve)
    },
    {//商品详情
      path: '/setMealHome/page/setMealDetail/:ids',
      name: 'setMealDetail',
      title: '商品详情',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/setMealDetail'], resolve)
    },
    {//订单确认
      path: '/setMealHome/page/setMealDetail/page/orderConfirm/:ids',
      name: 'orderConfirm',
      title: '订单确认',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/setMealDetail/page/orderConfirm/'], resolve)
    },
    {//会员列表
      path: '/setMealHome/page/MembershipCardList/:id',
      name: 'MembershipCardList',
      title: '会员列表',
      meta: {keepAlive: false},
      component: resolve => require(['../pages/setMealHome/page/MembershipCardList'], resolve)
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



