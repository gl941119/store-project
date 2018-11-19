<template>
  <div>
    <div class="InsComm_null"></div>
    <div class="InsComm_padding">
      <div class="InsComm_space_between">
        <div class="InsComm_topName">S+艾司科美健康管理中心</div>
        <div class="InsComm_more"></div>
      </div>
      <div class="InsComm_flex_start">
        <div class="InsComm_addressIcon"><img src="../../../assets/image/exhibition2.png"></div>
        <div class="InsComm_address">四川成都市高新区环球中心w3区21楼</div>
      </div>
      <div class="InsComm_border"></div>
      <div class="InsComm_txt">用户姓名：lemon</div>
      <div class="InsComm_border"></div>
      <div class="InsComm_txt">用户电话：15263321290</div>
      <div class="InsComm_border"></div>
    </div>
    <div class="InsComm_null"></div>
    <div class="InsComm_list">
      <div class="InsComm_title">服务</div>
      <div class="InsComm_border1"></div>
      <!--list start-->
      <div class="InsComm_flex_start">
        <div><img src="../../../assets/image/t1.jpg"></div>
        <div></div>
      </div>
      <!--list end-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="scss" scoped>
  .InsComm_null{
    width: 100%;
    height: 10px;
    background-color: rgba(244,244,244,1);
  }
  .InsComm_border,.InsComm_border1{
    height: 1px;
    width: 100%;
    margin: 10px 0;
  }
  .InsComm_border{
    background-color: rgba(216,216,216,1);
  }
  .InsComm_border1{
    background-color: rgba(216,216,216,0.5);
  }
  .InsComm_padding{
    padding: 10px 20px;
  }
  .InsComm_space_between{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .InsComm_flex_start{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .InsComm_more{
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    transform: rotate(45deg);
    content: '';
    width: 9px;
    height: 9px;
  }
  .InsComm_topName{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .InsComm_address{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    padding-left: 10px;
  }
  .InsComm_addressIcon{

  }
  .InsComm_addressIcon,.InsComm_addressIcon img{
   width: 12px;
    height: 15px;
  }
  .InsComm_txt{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .InsComm_list{
    padding: 10px 20px;
  }
  .InsComm_title{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
  }
</style>
