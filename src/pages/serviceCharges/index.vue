<template>
  <div class="serviceCharges_bg">
    <div class="serviceCharges_body">
      <div class="null"></div>
      <div class="serviceCharges_padding">
        <div class="serviceCharges_flex">
          <div class="serviceCharges_imgBox"><img src="../../assets/image/t1.jpg"></div>
          <div class="serviceCharges_right">
            <div class="serviceCharges_title">青春美肤系列-美白嫩肤</div>
            <div class="serviceCharges_cent">唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力唤醒皮肤活力</div>
            <div class="serviceCharges_price">¥1980</div>
          </div>
        </div>
        <div class="border"></div>
        <div class="space_between serviceCharges_li">
          <div class="serviceCharges_leftTitle">预约科美师</div>
          <div class="serviceCharges_rightTitle">6号科美师张小倩</div>
        </div>
        <div class="null_height"></div>
        <div class="border"></div>
        <div class="space_between serviceCharges_li">
          <div class="serviceCharges_leftTitle">服务开始时间</div>
          <div class="serviceCharges_rightTitle">2018-09-26 09:47</div>
        </div>
        <div class="border"></div>
        <div class="space_between serviceCharges_li">
          <div class="serviceCharges_leftTitle">服务结束时间</div>
          <div class="serviceCharges_rightTitle">2018-09-26 09:47</div>
        </div>
        <div class="border"></div>
        <div class="space_between serviceCharges_li">
          <div class="serviceCharges_leftTitle">服务评分</div>
          <div class="serviceCharges_rightTitle">三星评价</div>
        </div>
        <div class="border"></div>
        <div class="space_between serviceCharges_li">
          <div class="serviceCharges_leftTitle">服务费用</div>
          <div class="colorTxt">¥60</div>
        </div>
        <div class="border"></div>
        <div class="space_between serviceCharges_li">
          <div class="serviceCharges_leftTitle">合计</div>
          <div class="colorTxt">¥60</div>
        </div>
        <div class="border"></div>
      </div>
    </div>
    <div class="serviceCharges_nav">
      <div class="serviceCharges_numBox">
        <span class="serviceCharges_numTxt">合计：</span>
        <span class="serviceCharges_priceNum">¥ 60.00</span>
      </div>
      <div class="serviceCharges_buy">付款</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="scss" scoped>
  .serviceCharges_bg{
    background-color: #fff;
    padding-bottom: 0px;
  }
  .serviceCharges_body{
    height: calc(100vh - 50px);
    background-color: #F4F4F4;
  }
  .serviceCharges_nav{
    height: 49px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .more{
    border-top: 1px solid #333;
    border-right: 1px solid #333;
    transform: rotate(45deg);
    content: '';
    width: 9px;
    height: 9px;
  }
  .space_between{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex_start{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .null{
    width: 100%;
    height: 10px;
    background-color: rgba(244,244,244,1);
  }
  .border{
    width: 100%;
    height: 1px;
    background-color: rgba(216,216,216,1);
  }
  .serviceCharges_padding{
    padding: 0px 15px 12px 15px;
    background-color: #fff;
  }
  .serviceCharges_flex{
    padding:15px 0 16px 0;
    display: flex;
    justify-content: flex-start;
  }
  .serviceCharges_imgBox,.serviceCharges_imgBox img{
    width: 80px;
    height: 80px;
  }
  .serviceCharges_right{
    padding-left: 10px;
  }
  .serviceCharges_title{
    height: 23px;
    $width: 255px !global;
    width: $width;
    overflow: hidden;
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
  }
  .serviceCharges_cent{
    width: $width;
    height: 34px;
    overflow: hidden;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .serviceCharges_price{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(222,25,25,1);
  }
  .serviceCharges_li{
    padding: 7px 0;
  }
  .serviceCharges_leftTitle{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .serviceCharges_rightTitle,.colorTxt{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .null_height{
    height: 32px;
    width: 100%;
    border-top:1px solid rgba(216,216,216,1);
  }
  .colorTxt{
    color:rgba(222,25,25,1);
  }
  .serviceCharges_buy{
    width: 123px;
    height: 49px;
    text-align: center;
    line-height: 49px;
    background-color: #71B3FF;
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .serviceCharges_numTxt{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .serviceCharges_priceNum{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(231,59,61,1);
  }
  .serviceCharges_numBox{
    padding-right: 28px;
  }
</style>
