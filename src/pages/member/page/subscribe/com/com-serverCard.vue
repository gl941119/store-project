<template>
  <div class="wrap">
    <div class="main">
      <img :src="item.simg" alt="" class="main-img">
      <dl>
        <dt>
          <span>{{item.service_name}}</span>
          <span>{{type}}</span>
        </dt>
        <dd>
          <span>{{item.displayorder}}号美师</span>
          <span>预计{{item.plan_date}}到店</span>
        </dd>
        <p>¥{{item.price}}</p>
      </dl>
    </div>
    <div class="address">
      <img src="../../../../../assets/image/exhibition2.png" alt="">
      <span>{{item.address}}店</span>
      <p>共一件商品 合计：{{item.price}}元</p>
    </div>
    <div class="bottom">
      <van-icon name="pending-evaluate" class="bottom-icon"/>
      <span>联系卖家</span>
      <!--取消-->

      <!--待付款-->

      <van-button type="default" class="bottom-Btn" v-if="item.type==='1'||item.type==='2'||item.type==='3'" v-on:click="goAppointPay(item.orderid)">查看详情</van-button>
      <van-button type="default" class="bottom-Btn" v-if="item.type==='1'&&is_member==='0'" v-on:click="cancleIndent(item.orderid)">取消订单</van-button>
      <van-button type="default" class="bottom-Btn" v-if="item.type==='1'">付款</van-button>

    </div>
  </div>
</template>

<script>
  export default {
    name: "com-serverCard",
    props:['item'],
    computed:{
      type:function () {
        switch (this.item.type) {
          case '0':
            return '已取消'

          case '1':
            return '待付款'

          case '2':
            return '已预约'

          case '3':
            return '已完成'
        }
      }
    },
    data() {
      return {
        is_member: window.sessionStorage.getItem('is_member'), //0 非会员  1 会员

      }
    },
    methods:{
      goAppointPay(orderid){
        this.$router.push({name:'appointPay',params:{orderid:orderid,type:'1'}})
      },
      cancleIndent(orderid){//取消订单
        this.$dialog.confirm({
          title: '是否取消订单',
          message: ''
        }).then(() => {
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=86&act=cancelorder',
            type:'post',
            data:{
              orderid:orderid,
            }
          }).then(res=>{
            if(res.code === 100){
              this.$toast.success('取消成功')
              this.$emit('refresh')
            }

          })
        }).catch(() => {
          // on cancel
        });



      }
    }

  }
</script>

<style lang="scss" scoped>
  .wrap {
    margin: 18px auto 0;
    padding: 10px 10px;
    width: 345px;
    height: 163px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 11px 0px rgba(211, 211, 211, 0.5);
    border-radius: 4px;
  }

  .main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &-img {
      width: 75px;
      height: 75px;

    }
    dl {
      margin-left: 15px;
      flex: 1;
      height: 75px;
      > dt {
        height: 23px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span:first-child {
          height: 23px;
          font-size: 16px;
          font-family: PingFangSC-Regular;
          color: rgba(51, 51, 51, 1);
          line-height: 23px;
        }
        span:last-child {
          width: 36px;
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          color: rgba(233, 58, 61, 1);
          line-height: 17px;
        }
      }
      > dd {
        margin-top: 7px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {

          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular;

          color: rgba(153, 153, 153, 1);
          line-height: 17px;
        }
      }
      > p {
        margin-top: 7px;
        height: 23px;
        font-size: 16px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(233, 58, 61, 1);
        line-height: 23px;
      }
    }
  }

  .address {
    width: 100%;
    height: 20px;
    margin-top: 9px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    > img {
      width: 12px;
      height: 15px;

    }
    > span {
      flex: 1;
      margin-left: 4px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular;

      color: rgba(51, 51, 51, 1);
      line-height: 17px;
    }
    > p {

      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular;

      color: rgba(51, 51, 51, 1);
      line-height: 20px;
    }
  }

  .bottom {
    height: 27px;
    margin-top: 14px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &-icon {
      font-size: 16px;
      color: #979797;
    }
    span {
      flex: 1;
      margin-left: 8px;
      width: 56px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(151, 151, 151, 1);
      line-height: 20px;
    }
    &-Btn {
      margin-left: 4px;
      width: 70px;
      height: 27px;
      border-radius: 13px;
      border: 1px solid;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      color: rgba(233, 58, 61, 1);
      line-height: 20px;
    }
  }


</style>
