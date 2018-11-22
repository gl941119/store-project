<template>
    <div class="setMealOrderinfo">
<div class="setMealOrderinfo_b">交易完成</div>
      <div class="setMealOrderinfo_p">
        <div class="setMealOrderinfo_fl">
          <div class="setMealOrderinfo_flInfo">
            <div class="setMealOrderinfo_Name">王大锤</div>
            <div class="setMealOrderinfo_Phone">189****1232</div>
          </div>
          <div class="setMealOrderinfo_status">已收货</div>
        </div>

        <div class="setMealOrderinfo_address">四川成都市高新区中和镇孤帆远影2号四川成都市高新区中和镇孤帆远影2号</div>

        <div class="setMealOrderinfo_commodity">
          <div class="commodity_img"><img src="../../../../assets/image/t1.jpg"></div>
          <div class="commodity_info">
            <div class="commodity_title">
              <div class="commodity_titleTxt">1980套餐1980套餐1980套餐1980套餐1980套餐</div>
              <div class="commodity_seeInfo" @click="()=>{this.$router.push({name:'packageDetails'})}">查看详情</div>
            </div>
            <div class="commodity_content">唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力</div>
            <div class="price_num">
              <div class="commodity_price">¥1980</div>
              <div class="commodity_num">x1</div>
            </div>
          </div>
        </div>

        <div class="setMealOrderinfo_commodity">
          <div class="commodity_img"><img src="../../../../assets/image/t1.jpg"></div>
          <div class="commodity_info">
            <div class="commodity_title">
              <div class="commodity_titleTxt">1980套餐1980套餐1980套餐1980套餐1980套餐</div>
              <div class="commodity_seeInfo" @click="()=>{this.$router.push({name:'packageDetails'})}">查看详情</div>
            </div>
            <div class="commodity_content">唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力</div>
            <div class="price_num">
              <div class="commodity_price">¥1980</div>
              <div class="commodity_num">x1</div>
            </div>
          </div>
        </div>

      </div>
      <div class="null"></div>
      <div class="price_calculationBox">
        <div class="price_calculation">
          <div class="price_calculation_title">套餐金额</div>
          <div class="price_calculation_price">¥ 1980.00</div>
        </div>
        <div class="price_calculation">
          <div class="price_calculation_title">运费</div>
          <div class="price_calculation_price">¥ 10.00</div>
        </div>
        <div class="price_calculation">
          <div class="price_calculation_title">合计</div>
          <div class="price_calculation_price">¥ 1980.00</div>
        </div>
      </div>
      <div class="null"></div>

      <div class="oderInfo">
<div class="oderInfo_top">
  <div class="oderInfo_icon"></div>
  <div class="oderInfo_txt">订单信息</div>
</div>
        <div class="oderInfo_list">
          <div>订单编号</div>
          <div>vyeuwye23233</div>
        </div>
        <div class="oderInfo_list">
          <div>创建时间</div>
          <div>2018-11-12 11:23:56</div>
        </div>
        <div class="oderInfo_list">
          <div>付款时间</div>
          <div>2018-11-12 11:23:56</div>
        </div>
        <div class="oderInfo_list">
          <div>发货时间</div>
          <div>2018-11-12 11:23:56</div>
        </div>
        <div class="oderInfo_list">
          <div>收货时间</div>
          <div>2018-11-12 11:23:56</div>
        </div>
      </div>

      <div class="null"></div>
<div class="go" @click="()=>{this.$router.go(-1)}">返回</div>


    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
.setMealOrderinfo{
  background-color: #fff;
  padding-bottom: 0px;
}
  .setMealOrderinfo_b{
    height:103px;
    line-height: 100px;
    text-align: center;
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    background:linear-gradient(135deg,rgba(170,242,255,1) 0%,rgba(113,179,255,1) 100%);
  }
  .null{
    height: 10px;
    width: 100%;
    background-color: #F4F4F4;
  }
  .setMealOrderinfo_p{
    padding: 0 15px;
  }
  .setMealOrderinfo_status{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .setMealOrderinfo_Name,.setMealOrderinfo_Phone{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .setMealOrderinfo_fl{
    $flex:flex !global;
    display: $flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0 4px 0;
  }
  .setMealOrderinfo_flInfo{
    justify-content: flex-start;
    align-items: center;
    display: $flex;
  }
  .setMealOrderinfo_address{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-bottom: 25px;
  }
  .setMealOrderinfo_commodity{
justify-content: flex-start;
    display: $flex;
    padding-bottom: 16px;
  }
  .commodity_img,.commodity_img img{
    width:80px ;
    height:80px ;
  }
  .commodity_info{
    padding:2px 0 0 10px;
    width: 100%;
  }
  .commodity_title{
    display: $flex;
    justify-content: space-between;
  }
  .commodity_titleTxt{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
    overflow: hidden;
    height: 22px;
  }
  .commodity_seeInfo{
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    width: 57px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color:rgba(255,255,255,1);
    background-color: #71B3FF;
    border-radius: 3px;
  }
  .commodity_content{
    height: 31px;
    overflow: hidden;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .price_num{
    display: $flex;
    align-items: center;
    justify-content: space-between;
  }
  .commodity_price{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(222,25,25,1);
  }
  .commodity_num{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .price_calculation{
    display: $flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0 0px 0;
  }
  .price_calculationBox{
    padding: 0 15px 15px 15px;
  }
  .price_calculation_price{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(231,59,61,1);
  }
  .price_calculation_title{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .oderInfo{
    padding: 13px 15px 0 15px;
  }
  .oderInfo_top{
    display: $flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 7px;
  }
  .oderInfo_icon{
    width: 3px;
    height: 16px;
    background-color: #71B3FF;
  }
  .oderInfo_txt{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-left: 8px;
  }
  .oderInfo_list{
    display: $flex;
    align-items: center;
    justify-content: flex-start;
  }
  .oderInfo_list div:first-child{
    padding: 0 24px 6px 0;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
.oderInfo_list div:nth-child(2){
  font-size:12px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
}
.go{
  height:49px;
  text-align: center;
  line-height: 49px;
  background:rgba(113,179,255,1);
  box-shadow:0px 5px 7px 0px rgba(204,226,249,1);
  font-size:18px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
}
</style>
