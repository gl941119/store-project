<template>
  <div class="wrap">
    <img src="../../assets/image/transfer.png" alt="">
    <dt>恭喜您支付成功</dt>
    <!--<dd>订单状态会变成“已支付”</dd>-->
    <p>{{second}}秒后自动跳转首页</p>
    <van-button type="default" class="btn" v-on:click="goMyIndent">查看订单</van-button>
    <van-button type="default" class="back" v-on:click="goIndex">去逛逛</van-button>
  </div>
</template>

<script>
  export default {
    name: "transfer",
    data() {
      return {
        orderid: this.$route.params.orderid,//订单号
        type: this.$route.params.type,//1 商品  2 服务   3 套餐
        second: 3,
        tiem: null
      }
    },
    mounted() {
      this.time()
    },
    methods: {
      goMyIndent() {
        if (this.type == '1') {//商品
          window.sessionStorage.setItem('ordersn', this.orderid)
          this.$router.push({name: 'indentInfo'})
        } else if (this.type == '2') {//服务
          this.$router.push({name: 'serviceInfo', params: {orderid: this.orderid}})
        } else {//套餐
          this.$router.push({name: 'setMealOrderinfo', params: {ids: this.orderid}})
        }
        clearInterval(window.tiem)
      },
      goIndex() {
        if (this.type == '1') {//商品
          this.$router.push({name: 'index'})
        } else if (this.type == '2') {//服务
          this.$router.push({name: 'subscribeHome'})
        } else {//套餐
          this.$router.push({name: 'setMealHome'})
        }
        clearInterval(window.tiem)
      },
      time() {
        let thia = this
        window.tiem = setInterval(function () {
          if (thia.second > 0) {
            thia.second -= 1
          } else {
            this.goIndex()

          }
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 67px;
      height: 67px;

    }
    > dt {
      margin-top: 27px;
      height: 25px;
      font-size: 18px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 25px;
    }
    > dd {
      margin-top: 8px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 17px;
    }
    > p {
      margin-top: 8px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 17px;
    }
    .btn {
      margin-top: 49px;
      width: 336px;
      height: 45px;
      font-size: 18px;
      font-family: PingFangSC-Regular;
      color: rgba(255, 255, 255, 1);
      line-height: 45px;
      background-color: #71B3FF;

    }
    .back {
      margin-top: 10px;
      width: 336px;
      height: 45px;
      font-size: 18px;
      font-family: PingFangSC-Regular;
      /*color: rgba(255, 255, 255, 1);*/
      line-height: 45px;
      /*background-color: #71B3FF;*/
    }
  }

</style>
