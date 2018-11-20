// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Cache from './utils/cache';
import Wx from './utils/wx';
// iconfont
import './assets/fonts/style.css'

//重置样式
import './assets/css/reset.css';
//vant引入
import './utils/vant'

if (process.env.NODE_ENV === 'development') {
  Vue.prototype.$i = 'i=1';
  Vue.prototype.$upUrl = 'http://192.168.3.23:80/';
  Vue.prototype.$eid = {id:156,dom:'comm'}; //图片视频上传  87
  Vue.prototype.$eids = {id:157,dom:'ucenter'}; //会员头像上传 88
  Vue.prototype.$eidpay = {id:158,dom:'card'}; //支付
} else {
  let config = Cache.getConfig()
  Vue.prototype.$i = 'i=' + config.uid;
  Vue.prototype.$upUrl = config.domain + '/';
  Vue.prototype.$eid = {eid:config.binds['87'].eid,dom:config.binds['87'].dom}; //图片视频上传
  Vue.prototype.$eidpay = {eid:config.binds['89'].eid,dom:config.binds['89'].dom}; //支付
  Vue.prototype.$eid162 = {eid:config.binds['86'].eid,dom:config.binds['86'].dom}; //支付
  Vue.prototype.$eid161 = {eid:config.binds['85'].eid,dom:config.binds['85'].dom}; //支付
  Vue.prototype.$eids = {eid:config.binds['88'].eid,dom:config.binds['88'].dom}; //支付
}


Vue.config.productionTip = false
//全局组件
import MyFooter from './components/footer'
import subFooter from './components/subscribeFooter'
import Navbar from './components/navbar'
import ProductCard from './components/productCard'
import ServerCard from './components/serverCard'
import StaffCard from './components/staffCard'//員工簡介卡片
import MyCell from './components/myCell'
import Cell from './components/cell'
import SelectBar from './components/selectBar'
import Search from './components/search'
import PriceList from './components/priceList' //金额列表

Vue.component('my-footer', MyFooter);
Vue.component('subscribe-footer',subFooter)
Vue.component('navbar', Navbar);
Vue.component('product-card', ProductCard);
Vue.component('server-card', ServerCard);
Vue.component('staff-card', StaffCard);
Vue.component('my-cell', MyCell);
Vue.component('cell', Cell);
Vue.component('select-bar', SelectBar);
Vue.component('search', Search);
Vue.component('price-list', PriceList);


Vue.prototype.$baidu = function () {//联系卖家
  return window.open('http://p.qiao.baidu.com/cps/chat?siteId=12788365&userId=26778230')
}


import request from './utils/request'
import speedProgress from './utils/speedProgress'

Vue.prototype.$request = request;
Vue.prototype.$sp = speedProgress;
Vue.prototype.$wx = Wx;

// Vue.prototype.$setInterval = setInterval(function () {//长轮询
//   Vue.prototype.$request({
//     url: 'app/index.php?i=1&c=entry&eid=87&act=discuss',
//     type: 'post',
//     isToast: false
//   }).then(res => {
//     if (res.data.is_discuss == '0') {
//       window.clearInterval(Vue.prototype.$setInterval);
//       router.push({name: "serverEvaluate", params: {orderid: res.data.orderid}})
//     }
//   });
// }, 10000)



//导航守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.showFooter)) {
    store.commit('setShowFooter', true);
  } else {
    store.commit('setShowFooter', false);
  }
  if (to.matched.some(record => record.meta.sub_showFooter)) {
    store.commit('setSub_showFooter', true);
  } else {
    store.commit('setSub_showFooter', false);
  }
  next()
});


//插件
import 'lib-flexible/flexible'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
})
