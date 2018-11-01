<template>
  <div class="aggregate">
    <van-cell title="商品金额" class="cell">
      <span class="cell-right">￥&nbsp;1111</span>
    </van-cell>
    <van-cell title="积分券减免" class="cell">
      <span class="cell-right">-&nbsp;￥&nbsp;11</span>
    </van-cell>
    <van-cell title="运费" class="cell">
      <span class="cell-right">+&nbsp;￥&nbsp;11</span>
    </van-cell>
    <div class="allPrice">
      <span class="allPrice-title">总金额：</span>
      <span class="cell-right">+&nbsp;￥&nbsp;11</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "pricrList"
    }
</script>

<style lang="scss" scoped>
  .aggregate {
    width: 100%;
    margin-top: 10px;
    .cell {
      /*border: 0 !important;*/
      height: 25px !important;
      display: flex;
      align-items: center;
      padding: 0 15px !important;
      font-size: 15px;
      color: rgba(51, 51, 51, 1);
      &-right {
        width: 69px;
        height: 21px;
        font-size: 15px;
        color: rgba(231, 59, 61, 1);
      }
    }
    .allPrice {
      height: 25px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      &-title {
        margin-right: 24px;
        width: 60px;
        height: 21px;
        font-size: 15px;
        color: rgba(51, 51, 51, 1);

      }
    }
  }

</style>
