<template>
  <div class="indentInfo">
    <div class="indentInfo-title">订单信息</div>
    <ul class="indentInfo-content" v-if="type=== 'success'">
      <li class="mt12" >
        <span>订单编号</span>
        <span>{{data.orderid}}</span>
      </li>
      <li class="mt6">
        <span>预定到店时间</span>
        <span>{{data.date+' '+data.time}}</span>
      </li>
      <li class="mt6" v-if="data.starttime">
        <span>服务开始时间</span>
        <span>{{data.starttime}}</span>
      </li>
      <li class="mt6" v-if="data.endtime">
        <span>服务结束时间</span>
        <span>{{data.endtime}}</span>
      </li>
      <li class="mt6" v-if="data.score">
        <span>服务评价</span>
        <span>{{data.score}}星</span>
      </li>
      <li class="mt6" v-if="data.cancel_time">
        <span>取消时间</span>
        <span>{{data.cancel_time}}</span>
      </li>
      <li class="mt6" v-if="data.cancel_reason">
        <span>取消理由</span>
        <span>{{data.cancel_reason}}</span>
      </li>
      <li class="mt6" v-if="data.message">
        <span>备注</span>
        <span>{{data.message}}</span>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "con-indentInfo",
    props:{
      type:String,
      orderid:{},//编号
      time:{},//预定到店时间
      data:{},//数据
    },
  }
</script>

<style lang="scss" scoped>
  .indentInfo {
    width: 375px;
    /*height:107px;*/
    padding: 10px 15px;
    background: rgba(255, 255, 255, 1);
    &-title {
      width: 74px;
      height: 23px;
      overflow: hidden;
      background: url("../../../../../assets/image/icon-fenge.png") no-repeat center left;

      background-size: 3px 16px;
      line-height: 23px;
      text-align: right;
      font-size: 16px;

    }
    &-content {
      >li{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span:first-child{
          width: 75px;
        }
        span:last-child{
          margin-left: 16px;
          color: #999999;
        }
      }
    }
  }
</style>
