<template>
  <div class="wrap">
    <cell :Data="list"  class="cell"></cell>
    <div class="infoMs">
      <div>
        <div class="header">
          <span>{{ mySub.sName }}</span>
        </div>
        <p class="indent">订单号{{ mySub.orderId }}</p>
        <p class="indent">预计{{ mySub.time }}到店</p>
      </div>
      <div>
        <div>
          <van-button type="default" class="header-Btn headerBtn" v-if="status" @click="startBtn">开始</van-button>
          <van-button type="default" class="header-Btn" v-else  @click="endBtn">结束</van-button>
        </div>
        <div>
          <van-button type="default" class="header-Btn" v-if="status" @click="quXiaoBtn">取消</van-button>
        </div>
      </div>
    </div>

    <div class="fill"></div>
    <div class="connection">
      <span>客户：{{ mySub.xm }}</span>
      <span>联系电话：{{ mySub.phone }}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "com-MySubscribe",
    props:['mySub'],
    data(){
      return{
        status:true,
        list:{
          name:'我的预约',
          message:'查看更多',
          url:undefined
        }
      }
    },
    methods:{
      startBtn(){
        this.status=false;

        //订单开始
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=86&act=servicestart',
          type:'post',
          data:{
            orderid:this.mySub.orderId
          }
        }).then((res) => {

        });
      },
      endBtn(){
        this.status=true;
        //订单结束
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=86&act=finish',
          type:'post',
          data:{
            orderid:this.mySub.orderId
          }
        }).then((res) => {
          if(res.status){
            this.$emit('init')
          }

        });
      },
      quXiaoBtn(){
        //取消订单
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=86&act=cancelorder',
          type:'post',
          data:{
            orderid:this.mySub.orderId
          }
        }).then((res) => {
          if(res.status){
            this.$emit('init')
          }

        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 0 15px;
    margin: 0 auto;
    width: 345px;
    height: 196px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 8px 0px rgba(200, 200, 200, 0.5);
    border-radius: 4px;
  }
  .cell{
    height: 53px
  }
  .header{
    margin-top: 11px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    >span{
      float: left;
      font-size:16px;
      font-family:PingFangSC-Regular;
      color:rgba(51,51,51,1);
      line-height:23px;
    }
    &-Btn{
      width: 73px;
      height: 25px;
      line-height: 25px !important;
      background-color: #71B3FF;
      color: white;
      font-size:12px;

    }
  }
  .indent{
    margin-top: 6px;
    font-size:12px;
    font-family:PingFangSC-Regular;
    color:rgba(153,153,153,1);

  }
  .fill{
    margin:7px auto 0;
    width:314px;
    height:1px;
    background:rgba(216,216,216,1);
  }
  .connection{
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    >span{
      font-size:15px;
      font-family:PingFangSC-Regular;
      color:rgba(51,51,51,1);
    }
  }
.infoMs{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.headerBtn{
  margin-bottom: 10px;
}

</style>

