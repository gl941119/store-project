import Vue from 'vue';
import {
  Row, Col,
  Button,
  Cell,
  CellGroup,
  Icon,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Toast,
  Search,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Popup,
  Stepper,
  Rate,
  Checkbox, CheckboxGroup,//复选框
  SubmitBar,//提交订单栏
  Uploader,//图片上传
  Panel,//画板
  Picker,//选择器
  DatetimePicker,//时间选择器
  Area,//省市区选择器
  Switch,//开关
  Actionsheet,//Actionsheet
} from 'vant';
Vue.use(Row).use(Col);
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(Icon);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Tab).use(Tabs);
Vue.prototype.$toast = Toast;
Vue.use(Search);
Vue.use(Popup);
Vue.use(Stepper);
Vue.use(Rate);
Vue.use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn);
Vue.use(Checkbox).use(CheckboxGroup);//复选框
Vue.use(SubmitBar);
Vue.use(Uploader);
Vue.use(Panel);
Vue.use(Picker);
Vue.use(DatetimePicker);
Vue.use(Area);
Vue.use(Switch);
Vue.use(Actionsheet);
