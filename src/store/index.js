import Vue from 'vue';
import Vuex from 'vuex';
// import Cache from '../utils/cache';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showFooter: true,
    hover:0,//footer颜色
    classify_hover:-1,//分类栏选择
    is: '2',
    ShowBuySpecification: false,
    BuySpecification:undefined,
    uk: '',
    SelectDayStatus:undefined,
    SelectDay:undefined,
    SelectHour:undefined,
    SelectTime:undefined,
    Is_member:undefined,//是否会员 string
    Store:undefined,//是否美师 string
    AppraiseImg:[],
    ClassifyId:undefined,//分类栏分类id
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
    setSelectDayStatus(state,val){//选择美师设置天数状态
      state.SelectDayStatus = val
    },
    setSelectDay(state,val){//选择美师设置日期
      state.SelectDay = val
    },
    setSelectHour(state,val){//选择美师设置小时
      state.SelectHour = val
    },
    setSelectTime(state,val){//选择美师选择好的时间
      state.SelectTime = val
    },
    setIs_member(state,val){
      state.Is_member = val
    },
    setStore(state,val){
      state.Store = val
    },
    setUk(state, val) {
      state.uk = val
    },
    setAppraiseImg(state,val){
      state.AppraiseImg = val
    },


    setClassifyId(state,val){
      state.ClassifyId = val
    },
    setHover(state,val){
      state.hover= val
    },
    setClassify_hover(state,val){
      state.classify_hover = val
    }



  },
});
