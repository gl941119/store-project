<template>
  <div class="card">
    <div class="card-top">
      <img src="" alt="" class="card-top-img">
      <div class="card-top-content">
        <div class="card-top-content-title">
          <span>保湿修复面膜（院装）</span>
          <span>待付款</span>
        </div>
        <p class="card-top-content-ml">220ml</p>
        <p class="my-price price">¥198.00</p>
      </div>
    </div>
    <div class="card-middle">
      共一件商品 合计：198.0元
    </div>
    <div class="card-bottom">
      <van-icon name="pending-evaluate" class="card-bottom-icon"/>
      <span class="card-bottom-connection">联系卖家</span>
      <van-button round plain  type="default" class="confirmeBtn">确认</van-button>
      <van-button  round plain type="default" class="cancelBtn">取消订单</van-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "com-card"
  }
</script>

<style lang="scss" scoped>
  .card {
    margin: 0 auto;
    padding: 10px 10px;
    width: 345px;
    height: 163px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 11px 0px rgba(211, 211, 211, 0.5);
    border-radius: 4px;
    &-top {
      display: flex;
      justify-content: space-between;
      &-img {
        width: 75px;
        height: 75px;
        border: 1px solid red;
      }
      &-content {
        width: 236px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-title {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          span:first-child {
            width: 180px;
            height: 23px;
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
            line-height: 23px;
            display: block;
            white-space: normal;
            text-overflow: ellipsis;
          }
          span:last-child {
            font-size: 12px;
            color: rgba(233, 58, 61, 1);
          }
        }
        &-ml {
          margin-top: 7px;
          font-size: 12px;
          color: rgba(153, 153, 153, 1);
          line-height: 17px;
        }
        .price {
          font-size: 16px;
          font-weight: 500;
          color: rgba(233, 58, 61, 1);
          line-height: 23px;
        }
      }
    }
    &-middle{
      height: 42px;
      line-height:42px;
      text-align: right;
      font-size:14px;
      color:rgba(51,51,51,1);
    }
    &-bottom{
      overflow: hidden;
      &-icon{
        float: left;
        font-size: 16px;
        line-height: 27px;
      }
      &-connection{
        float: left;
        margin-left: 8px;
        font-size:14px;
        color:rgba(151,151,151,1);
        line-height:27px;
      }
      .cancelBtn{
        float: right;
        margin-right: 8px;
        width:79px;
        height:27px;
        line-height: 27px;
        background:rgba(255,255,255,1);
        border-radius:13px;
        border:1px solid;
        font-size:14px;
        color:rgba(151,151,151,1);

      }
      .confirmeBtn{
        float: right;
        width:79px;
        height:27px;
        line-height:27px;
        border-radius:13px;
        border:1px solid;
        font-size:14px;
        color:rgba(233,58,61,1);


      }
    }

  }
</style>
