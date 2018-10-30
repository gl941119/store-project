import Vue from 'vue';
import Vuex from 'vuex';
// import Cache from '../utils/cache';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showFooter: true,
    is: '2',
    ShowBuySpecification: false,
    BuySpecification:undefined,
    uk: '',
  },
  mutations: {
    setShowFooter(state, val) {
      state.showFooter = val;
    },
    setShowBuySpecification(state, val) {
      state.ShowBuySpecification = val
    },
    setBuySpecification(state,val){
      state.BuySpecification = val
    },
    setUk(state, val) {
      state.uk = val
    },

  },
});
