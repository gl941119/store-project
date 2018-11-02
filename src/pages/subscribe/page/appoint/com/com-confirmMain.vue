<template>
  <div class="wrap">
    <div class="card">
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
        <dt>是否会员</dt>
        <dd>{{Is_member === '1'?'科美卡会员':'非会员'}}</dd>
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




  </div>
</template>

<script>
  export default {
    name: "com-confirmMain",
    props: {
      service:{
        type:Object
      },
      type:{
        default:'confirm'
      },
      date:{},
      beauty:{}
    },
    data(){
      return{
        Is_member:this.$store.state.Is_member
      }
    },
    methods:{

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

        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular;

        color: rgba(153, 153, 153, 1);
        line-height: 17px;
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
  .list{
    margin-top: 15px;
    &-li{
      height: 39px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      dt{

        height:20px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        color:rgba(51,51,51,1);

      }
      dd{
        margin-right: 10px;
        height:17px;
        font-size:12px;
        font-family:PingFangSC-Regular;

        color:rgba(153,153,153,1);

      }
    }
  }

</style>
