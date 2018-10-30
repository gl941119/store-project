<template>
    <div>
      <navbar :name="'会员卡'"></navbar>
      <div class="tiyan">
        <div class="title">{{expData.name}}</div>
        <ul class="tiyan-left">
          <li>购买金额：{{expData.amount}}元</li>
          <li>购买次数：{{expData.count}}次</li>
          <li>消费次数：{{expData.count_cosumeption}}次</li>
        </ul>
        <ul class="tiyan-right">
          <li>剩余次数</li>
          <li>{{expData.count_surplus}}</li>
        </ul>
      </div>
      <div class="huiyuan">
        <div class="title">{{memberData.name}}</div>
        <ul class="huiyuan-left">
          <li>账户金额：{{memberData.money}}元</li>
          <li>消费余额：{{memberData.consumption}}元</li>
          <li>充值总额：{{memberData.amount}}元</li>
          <p>美丽积分券：{{memberData.score}}分</p>
        </ul>

      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            expData:{
              amount: undefined,
              count: undefined,
              count_cosumeption: undefined,
              count_surplus: undefined,
              name: undefined,
            },
            memberData:{//会员卡
              amount: undefined,
              consumption: undefined,
              money: undefined,
              name: undefined,
              score: undefined,
            }
          }
      },
      mounted(){
          this.request()
      },
      methods:{
          request(){
            this.$request({
              url:'app/index.php?i=1&c=entry&eid=88&act=cards',
              type:'GET'
            }).then((res)=>{
              if(res.code===100){

                this.expData = res.data.usercards['6']
                this.memberData = res.data.usercards['7']
              }
            })
          }
      }
    }
</script>

<style lang="scss" scoped>
  .tiyan{
    margin: 10px auto 0;
    padding: 16px 28px 0 20px;
    width: 345px;
    height: 180px;
    background: url("../../../../assets/image/红卡.png") no-repeat center 0px;
    background-size: 365px 190px;
    .title{
      width:126px;
      height:25px;
      font-size:18px;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:25px;
    }
    &-left{
      margin-top: 37px;
      float: left;
      >li{
        margin-bottom: 8px;
        height:17px;
        font-size:12px;
        font-family:PingFangSC-Regular;
        color:rgba(255,255,255,1);
      }
    }
    &-right{
      margin-top: 37px;
      float: right;
      :first-child{
        font-size:12px;
        font-family:PingFangSC-Regular;
        color:rgba(255,255,255,1);
        line-height:17px;
      }
      :last-child{
        width:100%;
        height:46px;
        text-align:center;
        font-size:35px;
        font-family:Bebas !important;
        color:rgba(255,255,255,1);
        line-height:46px;
      }
    }

  }
  .huiyuan{
    margin: 20px auto 0;
    padding: 16px 28px 0 20px;
    width: 345px;
    height: 180px;
    background: url("../../../../assets/image/蓝卡.png") no-repeat center 0px;
    background-size: 365px 190px;

    .title{
      width:126px;
      height:25px;
      font-size:18px;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:25px;
    }
    &-left{
      width: 100%;
      margin-top: 37px;
      float: left;
      position: relative;
      >li{
        margin-bottom: 8px;
        height:17px;
        font-size:12px;
        font-family:PingFangSC-Regular;
        color:rgba(255,255,255,1);
      }
      p{
        position: absolute;
        right: 0px;
        bottom: 8px;
        font-size:12px;
        font-family:PingFangSC-Regular;
        color:rgba(255,255,255,1);
        line-height:17px;
      }
    }



  }
</style>
