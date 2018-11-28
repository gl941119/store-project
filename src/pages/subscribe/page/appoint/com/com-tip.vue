<template>

  <div class="wrap">
    <p class="title">温馨提示：</p>
    <pre v-html="Data" class="contentData"></pre>
    <!--<p class="content">-->
      <!--1、预约成功后请按照约定时间到店消费<br/>-->
      <!--2、若出现预约时间相冲突，请联系在线客服进行取消<br/>-->
      <!--3、非会员取消将会扣除服务费用<br/>-->
      <!--4、会员有三次免费取消机会、第四次开始将正常扣除套餐内次数<br/>-->
    <!--</p>-->

  </div>


</template>

<script>
    export default {
        name: "com-tip",
      props:['Data'],
    }
</script>

<style lang="scss" scoped>

  .wrap{
    padding: 10px 15px 0;
    background-color: white;
    margin-bottom: 10px;
    .title{

      height:23px;
      font-size:16px;
      color:rgba(102,102,102,1);
      line-height:23px;
    }
    .content{
    margin-top: 11px;
      width:345px;
      height:116px;
      font-size:14px;
      color:rgba(153,153,153,1);
      line-height:20px;
    }
  }
  .contentData{
    line-height: 20px;
    padding-bottom: 20px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    white-space: pre-wrap;
    word-wrap: break-word;
  }

</style>
