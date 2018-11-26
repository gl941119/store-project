<template>
  <div class="wrap">
    <div class="card" v-on:click="goDetail(service.sid)">
      <img :src="service.thumb" alt="">
      <dl>
        <dt>{{service.name}}</dt>
        <dd>{{service.description}}</dd>
        <p>￥{{service.price}}</p>
      </dl>
    </div>
    <ul class="list" v-if="type=== 'confirm'">
      <div class="fill"></div>
      <li class="list-li">
        <dt>用户留言:</dt>
       <input type="text" v-model="leaveMessage">
      </li>
    </ul>
    <ul class="list" v-if="type=== 'pay'">
      <div class="fill"></div>
      <li class="list-li">
        <dt>预约科美师</dt>
        <dd>{{beauty}}</dd>
      </li>
      <div class="fill"></div>
      <li class="list-li">
        <dt>预约日期</dt>
        <dd>{{date}}</dd>
      </li>
    </ul>

    <ul class="list" v-if="type=== 0">
      <div class="fill"></div>
      <li class="list-li">
        <dt>预约科美师</dt>
        <dd>{{member.beauty}}</dd>
      </li>
      <div class="fill"></div>
      <li class="list-li">
        <dt>预约日期</dt>
        <dd>{{data.date}}</dd>
      </li>
      <div class="fill"></div>
      <li class="list-li">
        <dt>预约费用</dt>
        <dd class="colorRed">￥{{data.o_amount}}</dd>
      </li>
      <!--<div class="fill"></div>-->
      <!--<li class="list-li">-->
        <!--<dt>服务费用</dt>-->
        <!--<dd class="colorRed">{{data.service_amount}}</dd>-->
      <!--</li>-->
      <!--<div class="fill"></div>-->
      <!--<li class="list-li">-->
        <!--<dt>总计</dt>-->
        <!--<dd class="colorRed">{{data.allprice}}</dd>-->
      <!--</li>-->
    </ul>

    <ul class="list" v-if="type=== 1">
      <div class="fill"></div>
      <li class="list-li">
        <dt>预约科美师</dt>
        <dd>{{member.beauty}}</dd>
      </li>
      <div class="fill"></div>
      <li class="list-li">
        <dt>预约日期</dt>
        <dd>{{data.date}}</dd>
      </li>
      <div class="fill"></div>
      <li class="list-li">
        <dt>服务评价</dt>
        <dd>{{data.score}}星</dd>
      </li>
      <div class="fill"></div>
      <!--<li class="list-li">-->
        <!--<dt>预约费用</dt>-->
        <!--<dd class="colorRed">￥ {{data.o_amount}}</dd>-->
      <!--</li>-->
      <div class="fill"></div>
      <li class="list-li">
      <dt>服务费用</dt>
      <dd class="colorRed">￥ {{data.o_service_amount}}</dd>
      </li>
      <div class="fill"></div>
      <li class="list-li">
      <dt>总计</dt>
      <dd class="colorRed">￥ {{data.allprice}}</dd>
      </li>
    </ul>
    <!--支付完成-->
    <ul class="list" v-if="type=== 2||type=== -1">
      <div class="fill"></div>
      <li class="list-li">
        <dt>预约科美师</dt>
        <dd>{{member.beauty}}</dd>
      </li>
      <div class="fill"></div>
      <li class="list-li">
        <dt>预约日期</dt>
        <dd>{{data.date}}</dd>
      </li>
      <div class="fill"></div>

      <div class="fill"></div>
      <li class="list-li">
        <dt>预约费用</dt>
        <dd class="colorRed">￥ {{data.o_amount}}</dd>
      </li>
      <div class="fill"></div>
      <li class="list-li">
        <dt>服务费用</dt>
        <dd class="colorRed">￥ {{data.o_service_amount}}</dd>
      </li>
      <div class="fill"></div>
      <li class="list-li">
        <dt>总计</dt>
        <dd class="colorRed">￥ {{data.allprice}}</dd>
      </li>
    </ul>







    <!--<ul class="list" v-if="type=== 'info'">-->
      <!--<div class="fill"></div>-->
      <!--<li class="list-li">-->
        <!--<dt>预约科美师</dt>-->
        <!--<dd>{{member.beauty}}</dd>-->
      <!--</li>-->
      <!--<div class="fill"></div>-->
      <!--<li class="list-li">-->
        <!--<dt>预约日期</dt>-->
        <!--<dd>{{starttime}}</dd>-->
      <!--</li>-->
      <!--<div class="fill"></div>-->
      <!--<li class="list-li">-->
        <!--<dt>预约费用</dt>-->
        <!--<dd>{{time}}</dd>-->
      <!--</li>-->
      <!--<div class="fill"></div>-->
      <!--<li class="list-li">-->
        <!--<dt>服务费用</dt>-->
        <!--<dd class="colorRed">{{service_amount}}</dd>-->
      <!--</li>-->
      <!--<div class="fill"></div>-->
      <!--<li class="list-li">-->
        <!--<dt>总计</dt>-->
        <!--<dd class="colorRed">{{orderprice}}</dd>-->
      <!--</li>-->
    <!--</ul>-->

  </div>
</template>

<script>
  export default {
    name: "com-confirmMain",
    props: {
      service: {
        type: Object
      },
      type: {
        default: 'confirm'
      },
      date: {},
      beauty: {},
      member:{},
      time:{},
      service_amount:{},
      orderprice:{},
      endtime:{},
      score:{},
      value:{},
      data:{}
    },
    data() {
      return {
        Is_member: window.sessionStorage.getItem('is_member')
      }
    },
    computed:{
      leaveMessage:{
        get(){
          return this.value
        },
        set(val){
          this.$emit('update:value',val)

        }
      }
    },
    methods: {
      goDetail(sid){
        console.log(sid)
        this.$router.push({name:'detail',params:{type:'2',id:sid}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 15px 15px 0;
    width: 100%;
    min-height: 147px;
    background: rgba(255, 255, 255, 1);
  }

  .card {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    > img {
      width: 80px;
      height: 80px;
    }
    > dl {
      flex: 1;
      margin-left: 10px;
      position: relative;
      > dt {
        height: 23px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        color: rgba(72, 72, 72, 1);
        line-height: 23px;
      }
      > dd {
        /*height: 40px;*/
        overflow: hidden;
        font-size: 12px;
        color: rgba(153, 153, 153, 1);
        line-height: 17px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

      }
      > p {
        position: absolute;
        bottom: 0;
        height: 21px;
        font-size: 15px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(222, 25, 25, 1);
        line-height: 21px;
      }
    }
  }

  .fill {
    width: 345px;
    height: 1px;
    background: rgba(216, 216, 216, 1);
    margin: 0 auto 0;
  }

  .list {
    margin-top: 15px;
    &-li {
      height: 39px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      >input{
        flex: 1;
      }
      dt {

        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);

      }
      dd {
        margin-right: 10px;
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular;

        color: rgba(153, 153, 153, 1);

      }
    }
  }
.colorRed{
  color: red !important;
}
</style>
