<template>
  <div class="my-indent">
    <router-link :to="{name:'myIndent',params:{type:0}}">
      <cell :Data="nameData" class="cell"></cell>
    </router-link>
    <div class="fill"></div>
    <ul>
      <router-link tag="li" :to="{name:'mySubscribe'}">
        <img src="../../../assets/image/预约.png" alt="">
        <p>预约</p>
      </router-link>
      <router-link tag="li" :to="{name:'myIndent',params: {type:1}}">
        <img src="../../../assets/image/待付款.png" alt="">
        <p>待付款</p>
      </router-link>
      <router-link tag="li" :to="{name:'myIndent',params:{type:2}}">
        <img src="../../../assets/image/待发货.png" alt="">
        <p>待发货</p>
      </router-link>
      <router-link tag="li" :to="{name:'myIndent',params:{type:3}}">
        <img src="../../../assets/image/待收货.png" alt="">
        <p>待收货</p>
      </router-link>
      <router-link tag="li" :to="{name:'myIndent',params:{type:4}}">
        <img src="../../../assets/image/待评价.png" alt="">
        <p>待评价</p>
      </router-link>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "com-myIndent",
    data() {
      return {
        nameData: {
          name: '我的订单',
          message: '更多'
        }
      }
    },
    methods: {
      goMyIndent() {
        console.log(asd)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cell{
    height: 40px;
  }
  .my-indent {
    padding: 0 15px;
    margin: 0 auto;
    width: 345px;
    height: 116px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 8px 0px rgba(216, 216, 216, 0.5);
    border-radius: 4px;
  }

  .fill {
    margin: 0 auto;
    width: 315px;
    height: 1px;
    background: rgba(216, 216, 216, 1);
  }

  ul {
    height: 76px;
    display: flex;
    justify-content: space-around;
    > li {

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > img {
        width: 26px;
        height: 26px;
      }
      > p {
        margin-top: 7px;
        font-size: 12px;
        color: rgba(51, 51, 51, 1);
        line-height: 17px;
      }
    }
  }
</style>
