<template>
  <div class="wrap">
    <div class="cell">
      <div class="cell-name">{{list.name}}</div>
      <div>
        <span class="cell-content" v-on:click="goUrl">{{list.message}}</span>
        <van-icon name="arrow" class="cell-icon"/>
      </div>

    </div>
    <div v-if="status">
      <div class="fill"></div>
      <div class="infoMs" >

        <div>
          <div class="header">
            <span>{{ mySub.sName }}</span>
          </div>
          <p class="indent">订单号{{ mySub.orderId }}</p>
          <p class="indent">预计{{ mySub.time }}到店</p>
        </div>
        <div>
          <div>
            <van-button type="default" class="header-Btn headerBtn" v-if="mySub.startTime" @click="startBtn">开始</van-button>
            <van-button type="default" class="header-Btn headerBtnEnd" v-else  @click="endBtn">结束</van-button>
          </div>
          <div>
            <van-button type="default" class="header-Btn headerBtnEsc" v-if="mySub.startTime" @click="quXiaoBtn">取消</van-button>
          </div>
        </div>
      </div>


      <div class="connection" v-if="status">
        <span>客户：{{ mySub.xm }}</span>
        <span>联系电话：{{ mySub.phone }}</span>
      </div>
    </div>


  </div>
</template>

<script>
  import { Dialog } from 'vant';
  export default {
    name: "com-MySubscribe",
    props:['mySub','status'],
    data(){
      return{
        statusBtn:true,
        list:{
          name:'我的预约',
          message:'查看更多',
          url:'/mySubscribe'
        }
      }
    },
    mounted(){

    },
    methods:{
      goUrl() {
        this.$router.push({path: this.list.url, query: {}})
      },
      startBtn(){
        this.statusBtn=false;
        Dialog.confirm({
          title: '订单',
          message: '订单开始'
        }).then(() => {
          // on confirm
          //订单开始
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=86&act=servicestart',
            type:'post',
            data:{
              orderid:this.mySub.orderId
            }
          }).then((res) => {
            if(res.status){
              this.$emit('init')
            }
          });
        }).catch(() => {
          // on cancel
        });

      },
      endBtn(){
        Dialog.confirm({
          title: '订单',
          message: '订单结束'
        }).then(() => {
          // on confirm
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
        }).catch(() => {
          // on cancel
        });

      },
      quXiaoBtn(){
        this.$router.push({name:'cancelReservation'});


      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 0 15px;
    margin: 0 auto;
    width: 345px;
position: relative;
    z-index: 20;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 8px 0px rgba(200, 200, 200, 0.5);
    border-radius: 4px;
  }
  .cell{
    height: 40px

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
    width:314px;
    height:1px;
    background:rgba(216,216,216,1);
  }
  .connection{
    padding: 10px 0;
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
.cell{
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
}
.cell-name{
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  font-family: PingFangSC-Regular;
}
  .cell-content{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: rgba(102, 102, 102, 1);
  }
  .cell-icon{
    font-size: 10px;
    right: 0;
  }
  .cell-fill {
    width: 100%;
    height: 1px;
    background: rgba(216, 216, 216, 1);
  }
.headerBtnEsc{
  background-color: transparent;
  color:rgba(153,153,153,1);
}
.headerBtnEnd{
  background-color: red;
  color:#fff;
}
</style>

