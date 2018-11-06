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


Vue.config.productionTip = false
//全局组件
import MyFooter from './components/footer'
import Navbar from './components/navbar'
import ProductCard from './components/productCard'
import ServerCard from './components/serverCard'
import StaffCard from './components/staffCard'//員工簡介卡片
import MyCell from './components/myCell'
import Cell from './components/cell'
import SearchBar from './components/searchBar'
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
Vue.component('search-bar', SearchBar);
Vue.component('select-bar', SelectBar);
Vue.component('search', Search);
Vue.component('price-list', PriceList);


import request from './utils/request'

Vue.prototype.$request = request

Vue.prototype.$idnex = '84';
Vue.prototype.$goods = '85';
Vue.prototype.$server = '86';
Vue.prototype.$comm = '87';
Vue.prototype.$ucenter = '88';
Vue.prototype.$card = '89';





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
