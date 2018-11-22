<template>
<div>
  <div class="purchasedService_list">

    <div class="purchasedService_listTop">
      <div class="purchasedService_flex">
        <div class="purchasedService_listSolid"></div>
        <div class="purchasedService_listT">1980套餐</div>
      </div>
      <div class="purchasedService_listRStatus">{{Data}}</div>
    </div>

    <div class="purchasedService_itemBox">
      <div class="purchasedService_itemImg"><img src="../../../../../assets/image/t1.jpg"></div>
      <div class="purchasedService_itemR">
        <div class="purchasedService_itemRT">保湿滋养面膜保湿滋养面膜保湿滋养面膜保湿滋养面膜保湿滋养面膜保湿滋养面膜保湿滋养面膜保湿滋养面膜</div>
        <div class="purchasedService_itemRCont"></div>
        <div class="purchasedService_itemB">
          <div class="purchasedService_itemPrice">¥98.00</div>
          <div class="purchasedService_frequency">次数：20</div>
        </div>
      </div>
    </div>

    <div class="purchasedService_itemBox">
      <div class="purchasedService_itemImg"><img src="../../../../../assets/image/t1.jpg"></div>
      <div class="purchasedService_itemR">
        <div class="purchasedService_itemRT">保湿滋养面膜保湿滋养面膜保湿滋养面膜保湿滋养面膜保湿滋养面膜保湿滋养面膜保湿滋养面膜保湿滋养面膜</div>
        <div class="purchasedService_itemRCont"></div>
        <div class="purchasedService_itemB">
          <div class="purchasedService_itemPrice">¥98.00</div>
          <div class="purchasedService_frequency">次数：20</div>
        </div>
      </div>
    </div>
    <div class="package_to_be_received">
      <div class="packageBtnFind">查看物流</div>
      <div class="packageBtnOk">确认收货</div>
    </div>
  </div>





</div>
</template>

<script>
    export default {
        name: "com-allPurcjased",
      props:['Data']
    }
</script>

<style lang="scss" scoped>
  .purchasedService_list{
    width:345px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 11px 0px rgba(211,211,211,0.5);
    border-radius:4px 0px 4px 4px;
    margin: 20px auto 0 auto;
  }
  .purchasedService_listTop{
    padding: 18px 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .purchasedService_listSolid{
    width: 3px;
    height: 15px;
    background-color: #29ACF6;
  }
  .purchasedService_listT{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-left: 9px;
  }
  .purchasedService_flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .purchasedService_itemBox{
    padding: 16px 0 0px 10px;
    display: flex;
    justify-content: flex-start;
  }
  .purchasedService_itemImg,.purchasedService_itemImg img{
    width: 75px;
    height: 75px;
  }
  .purchasedService_itemR{
    padding-left: 13px;
    width: 242px;
  }
  .purchasedService_itemRT{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    height: 21px;
    line-height: 21px;
    overflow: hidden;
    margin-top: 5px;

  }
  .purchasedService_itemRCont{
    height: 22px;
    overflow: hidden;
  }
  .purchasedService_itemB{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .purchasedService_itemPrice{
    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(233,58,61,1);
  }
  .purchasedService_frequency{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .purchasedService_listRStatus{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(233,58,61,1);
  }
  .package_to_be_received{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 19px 10px 16px 0;
  }
  .packageBtnFind,.packageBtnOk{
    width:79px;
    height:27px;
    line-height: 27px;
    border-radius:13px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    text-align: center;
  }
  .packageBtnFind{
    color:rgba(151,151,151,1);
    border: 1px solid rgba(151,151,151,1);
    margin-right: 15px;
  }
  .packageBtnOk{
    color:rgba(233,58,61,1);
    border: 1px solid rgba(233,58,61,1);
  }
</style>
