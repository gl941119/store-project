<template>
  <div class="wrap">
    <div class="title">
      <img src="../assets/img/青春美肤系列 copy 2.png" alt="" class="title-img">
      <div class="title-content">
        <div class="title-content-name">
          <p>王晓曦</p>
          <p>NO8</p>
        </div>
        <p>特技美容师</p>
      </div>
    </div>
    <div class="fill"></div>
    <div class="bottom">
      <div class="bottom-evaluate">
        <span>综合评价</span>
        <van-rate v-model="value" class="bottom-evaluate-main"/>
      </div>
      <van-button type="default" class="bottom-buy">立即预约</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cosmetologist",
    data() {
      return {
        value: 4
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    margin: 0 auto;
    padding: 15px 15px;
    width: 345px;
    height: 131px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 8px 0px #D8D8D8;
    border-radius: 4px;
    /*border: 1px solid red;*/
  }

  .title {
    overflow: hidden;
    &-img {
      float: left;
      width: 50px;
      height: 50px;
    }
    &-content {
      float: left;
      margin-left: 28px;
      width: 220px;
      &-name {
        margin-top: 7px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        p:first-child {
          font-size: 15px;
          color: rgba(51, 51, 51, 1);
          line-height: 21px;
        }
        p:last-child {
          font-size: 10px;
          color: rgba(113, 179, 255, 1);
          line-height: 14px;
        }
      }
      > p {
        margin-top: 6px;
        font-size: 10px;
        color: rgba(153, 153, 153, 1);
        line-height: 14px;
      }
    }
  }
  .fill{
    margin: 15px 0 12px;
    width:314px;
    height:1px;
    background:rgba(216,216,216,1);
  }
  .bottom{
    overflow: hidden;
    &-evaluate{
      float: left;
      width:185px;
      height:22px;
     display: flex;
      justify-content: space-between;
      align-items: center;
      >span{
        font-size:16px;
        color:rgba(51,51,51,1);
        line-height:22px;
      }
      &-main{
        display: inline-block;
        font-size: 17px;
      }
    }
    &-buy{
      float: right;
      width:80px;
      height:24px;
      background:rgba(113,179,255,1);
      box-shadow:0px 5px 7px 0px rgba(204,226,249,1);
      border-radius:2px;
      font-size:12px;
      color:rgba(255,255,255,1);
      line-height:24px;

    }
  }
</style>
