<template>
  <div class="wrap">
    <img src="../../assets/image/transfer.png" alt="">
    <dt>恭喜您支付成功</dt>
    <dd>订单状态会变成“已支付”</dd>
    <p>{{second}}秒后自动跳转首页</p>
    <van-button type="default" class="btn" v-on:click="goMyIndent">查看订单</van-button>
    <van-button type="default" class="back" v-on:click="goIndex">返回首页</van-button>
  </div>
</template>

<script>
  export default {
    name: "transfer",
    data() {
      return {
        second: 3,
        tiem: null
      }
    },
    mounted() {
      this.time()
    },
    methods: {
      goMyIndent() {
        this.$router.push({name: 'myIndent', params: {type: '2'}})
        clearInterval(window.tiem)
      },
      goIndex() {
        this.$router.push({name: 'index'})
        clearInterval(window.tiem)
      },
      time(time) {
        let thia = this
        window.tiem = setInterval(function () {
          if (thia.second > 0) {
            thia.second -= 1
          } else {
            clearInterval(window.tiem)
            thia.$router.push({name: 'index'})
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
