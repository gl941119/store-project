// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Cache from './utils/cache';
// iconfont
import './assets/fonts/style.css'

//重置样式
import './assets/css/reset.css';
 //vant引入
import './utils/vant'

if (process.env.NODE_ENV === 'development') {
  Vue.prototype.$i = 'i=1';
  Vue.prototype.$upUrl = 'http://192.168.3.23:80/';
  Vue.prototype.$eid = 156; //图片视频上传  87
  Vue.prototype.$eids = 157; //会员头像上传 88
  Vue.prototype.$eidpay = 158; //支付

} else {
  let config =  Cache.getConfig()
  Vue.prototype.$i = 'i='+config.uid;
  Vue.prototype.$upUrl = config.domain+'/';
  Vue.prototype.$eid = config.binds['87']; //图片视频上传
  Vue.prototype.$eidpay = config.binds['89']; //支付
  Vue.prototype.$eid162 = config.binds['86']; //支付
  Vue.prototype.$eid161 = config.binds['85']; //支付
  Vue.prototype.$eids = config.binds['88']; //支付
}










Vue.config.productionTip = false
//全局组件
import MyFooter from './components/footer'
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
  return window.open('http://p.qiao.baidu.com/cps/chat?siteId=12754459&userId=26723163')
}


import request from './utils/request'
Vue.prototype.$request = request;


Vue.prototype.$setInterval = setInterval(function () {//长轮询
  Vue.prototype.$request({
    url: 'app/index.php?i=1&c=entry&eid=87&act=discuss',
    type: 'post',
    isToast: false
  }).then(res => {
    if (res.data.is_discuss == '0') {
      window.clearInterval(Vue.prototype.$setInterval);
      router.push({name: "serverEvaluate", params: {orderid: res.data.orderid}})
    }
  });
}, 10000)

//
//
// let thia = this;
// let re = window.location.href;
// let config = {
//   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
// };
// let r = 'http://dev-cd.vasterroad.com/app/index.php?i=1&c=entry&eid=163&act=weixinscan&url=' + re;
// axios.post('http://dev-cd.vasterroad.com/app/index.php?i=1&c=entry&eid=163&act=weixinscan', r, config)
//   .then((res) => {
//     if (res.data.status) {
//       var d = res.data.data.config;
//       wx.config({
//         debug: false, // 开启调试模式,
//         appId: d.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
//         timestamp: d.timestamp, // 必填，生成签名的时间戳
//         nonceStr: d.nonceStr, // 必填，生成签名的随机串
//         signature: d.signature,// 必填，签名，见附录1
//         jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//       });
//       wx.ready(function () {
//         wx.scanQRCode({
//           needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
//           scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
//           success: function (res) {
//             thia.value = res.resultStr;
//             var result = res.resultStr + '扫码返回的结果'; // 当needResult 为 1 时，扫码返回的结果
//           }
//         });
//         wx.error(function (res) {
//           var s = res + 'config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。';
//           alert(res)
//           // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
//         });
//       });
//     }
//   }).catch((res) => {
//   var ss = res + 'catch请求失败';
//   alert(ss)
// });



// wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
//   wx.updateAppMessageShareData({
//     title: '', // 分享标题
//     desc: '', // 分享描述
//     link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//     imgUrl: '', // 分享图标
//     success: function () {
//       // 设置成功
//     }
//   });





//导航守卫
router.beforeEach((to, from, next) => {
    // const token = store.state.token;
    if (to.matched.some(record => record.meta.showFooter)) {
      // Cache.setSession('show_footer', '1');
      store.commit('setShowFooter', true);
    } else {
      // Cache.setSession('show_footer', '0');
      store.commit('setShowFooter', false);
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
  template: '<App/>'
})
