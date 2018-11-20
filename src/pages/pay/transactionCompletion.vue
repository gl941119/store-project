<template>
  <div class="indentInfo">
    <div class="indentInfo_top">交易完成</div>
    <div class="indentInfo_padding">
      <div class="space_between">
        <div class="flex_start">
          <div class="indentInfo_name">王大锤</div>
          <div class="indentInfo_phone">189****1232</div>
        </div>
        <div class="indentInfo_transportMode">已收货</div>
      </div>
      <div class="indentInfo_address">四川成都市高新区中和镇孤帆远影2号四川成都市高新区中和镇孤帆远影2号</div>
    </div>
    <div class="null"></div>
    <div class="indentInfo_padding">
      <div class="flex_start">
        <div class="InsComm_listImg"><img src="../../assets/image/t1.jpg"></div>
        <div class="InsComm_listRight">
          <div>
            <div class="InsComm_listName">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。

              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
            <div class="InsComm_listRightTop">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。
              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
          </div>
          <div class="space_between">
            <div class="InsCommPay_price">¥1980</div>
            <div class="InsCommOrder">数量：1</div>
          </div>
        </div>
      </div>
      <div class="border"></div>
      <div class="flex_start">
        <div class="InsComm_listImg"><img src="../../assets/image/t1.jpg"></div>
        <div class="InsComm_listRight">
          <div>
            <div class="InsComm_listName">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。

              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
            <div class="InsComm_listRightTop">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。
              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
          </div>
          <div class="space_between">
            <div class="InsCommPay_price">¥1980</div>
            <div class="InsCommOrder">数量：1</div>
          </div>
        </div>
      </div>
    </div>
    <div class="null"></div>
    <div class="indentInfo_padding">
      <div class="space_between">
        <div class="indentInfo_l">商品金额</div>
        <div class="indentInfo_r">¥ 400.00</div>
      </div>
      <div class="space_between">
        <div class="indentInfo_l">积分券抵扣</div>
        <div class="indentInfo_r">¥200.00</div>
      </div>
      <div class="space_between">
        <div class="indentInfo_l">运费</div>
        <div class="indentInfo_r">¥20.00</div>
      </div>
      <div class="space_between">
        <div class="indentInfo_l">订单总价：</div>
        <div class="indentInfo_r">¥200.00</div>
      </div>

    </div>
    <div class="null"></div>
    <div class="indentInfo_padding">
      <div class="flex_start indentInfo_pad">
        <div class="indentInfo_solid"></div><div class="indentInfo_title">订单信息</div>
      </div>
      <div class="flex_start indentInfo_pad">
        <div class="indentInfo_title1">美丽积分券</div>
        <div class="indentInfo_title11">获得20美丽积分券</div>
      </div>
      <div class="flex_start indentInfo_pad">
        <div class="indentInfo_title1">订单编号</div>
        <div class="indentInfo_title11">yeuwye23233</div>
      </div>
      <div class="flex_start indentInfo_pad">
        <div class="indentInfo_title1">创建时间</div>
        <div class="indentInfo_title11">2018-11-12 11:23:56</div>
      </div>
      <div class="flex_start indentInfo_pad">
        <div class="indentInfo_title1">付款时间</div>
        <div class="indentInfo_title11">2018-11-12 11:23:56</div>
      </div>
      <div class="flex_start indentInfo_pad">
        <div class="indentInfo_title1">发货时间</div>
        <div class="indentInfo_title11">2018-11-12 11:23:56</div>
      </div>
      <div class="flex_start indentInfo_pad">
        <div class="indentInfo_title1">收货时间</div>
        <div class="indentInfo_title11">2018-11-12 11:23:56</div>
      </div>
    </div>
    <div class="null"></div>


  </div>
</template>

<script>
  export default {
    name: "transactionCompletion"
  }
</script>

<style lang="scss" scoped>
  .border{
    height: 1px;
    width: 100%;
    margin: 10px 0;
  }
  .border{
    background-color: rgba(216,216,216,1);
  }
  .more{
    border-top: 1px solid #999;
    border-right: 1px solid #999;
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
  .indentInfo{
    padding-bottom: 0px;
    background-color: #fff;
  }
  .indentInfo_top{
    height:103px;
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height: 103px;
    text-align: center;
    background:linear-gradient(135deg,rgba(170,242,255,1) 0%,rgba(113,179,255,1) 100%);
  }
  .indentInfo_padding{
    padding: 10px 20px;
  }
  .indentInfo_name{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .indentInfo_phone{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    padding-left: 15px;
  }
  .indentInfo_address{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .indentInfo_transportMode{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .InsComm_listImg{
    overflow: hidden;
  }
  .InsComm_listImg,.InsComm_listImg img{
    width: 80px;
    height: 80px;
  }
  .InsComm_listRight{
    width: 256px;
    padding-left: 10px;
  }
  .InsComm_listName{
    height: 25px;
    overflow: hidden;
    line-height: 25px;
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
  }
  .InsComm_listRightTop{
    height: 47px;
    overflow: hidden;
    font-size:12px;
    font-family:PingFangSC-Regular;
    line-height:17px;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .InsCommPay_price{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(222,25,25,1);
  }
  .InsCommOrder{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .indentInfo_l{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .indentInfo_r{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(231,59,61,1);
  }
  .indentInfo_title{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-left: 10px;
  }
  .indentInfo_solid{
    width: 3px;
    height: 16px;
    background-color: #71B3FF;
  }
  .indentInfo_title1{
    width: 70px;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .indentInfo_title11{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .indentInfo_pad{
    padding-bottom: 5px;
  }
  .indentInfo_cancel{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(151,151,151,1);
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 25px;
    border: 1px solid #F4F4F4;
  }
  .indentInfo_pay{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #71B3FF;
    border-radius: 25px;
    margin: 0 10px;
  }
  .indentInfo_btn{
    padding: 20px 0;
  }
</style>
