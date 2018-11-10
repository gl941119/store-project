// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

// iconfont
import './assets/fonts/style.css'

//重置样式
import './assets/css/reset.css';
// //vant引入
import './utils/vant'




// 解密
let Base64 = {
  encode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode('0x' + p1);
      }));
  },
  decode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
};
let config = window.location.hash.split('/').slice(-1)[0];
config = JSON.parse(Base64.decode(config))
console.log(config,'config')

//赋值

if (process.env.NODE_ENV === 'development') {
  Vue.prototype.$i = 'i='+config.uid;
  Vue.prototype.$upUrl = 'http://192.168.3.23:80/';
  Vue.prototype.$eid = 156; //图片视频上传
  Vue.prototype.$eids = 157; //会员头像上传
  Vue.prototype.$eidpay = 158; //支付
} else {
  this.$i = 'i='+config.uid;
  this.$upUrl = config.domain+'/';
  this.$eid = config.binds['87']; //图片视频上传
  this.$eidpay = config.binds['89']; //支付
  this.$eid162 = config.binds['86']; //支付
  this.$eid161 = config.binds['85']; //支付
}



window.sessionStorage.setItem('config', JSON.stringify(config))







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















Vue.prototype.$baidu = function () {
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
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //   if (!token) {
    //     next({ name: 'userManage' });
    //   } else {
    //     next();
    //   }
    // } else {
    //   next();
    // }
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
