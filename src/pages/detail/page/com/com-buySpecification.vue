<template>
  <div class="Specification">
    <div class="product">
      <img src="" alt="" class="product-left">
      <div class="product-right">
        <span class="my-price">$1512</span>
        <span class="my-subPrice">12312</span>
        <div class="product-right-content">
          <span class="product-right-content-left">已选</span>
          <span class="product-right-content-right">泰伊莎保湿润肤露，123123123123123123123121瓶</span>
        </div>
      </div>
    </div>
    <div class="select">
      <van-button type="default" class="select-btn">130</van-button>

    </div>
    <div class="amount">
      <div class="amount-left">数量</div>
      <van-stepper
        v-model="value"
        :integer="integer"
        :min="1"
        :step="1"
        class="amount-right"
      />
    </div>
    <van-button type="default" class="submit">确认</van-button>
  </div>

</template>

<script>
  export default {
    name: "com-buySpecification",
    props:['goods_spec'],
    data() {
      return {
        integer: true,
        value: 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Specification {
    width: 375px;
    height: 500px;
    padding: 16px 15px 0;
    background: rgba(255, 255, 255, 1);
  }

  .product {
    overflow: hidden;
    &-left {
      width: 90px;
      height: 90px;
      float: left;
      border: 1px solid red;
    }
    &-right {
      float: left;
      margin-left: 14px;
      .my-subPrice {
        margin-left: 12px;
        text-decoration: line-through;
      }
      &-content {
        margin-top: 22px;
        overflow: hidden;
        &-left {
          float: left;
          font-size: 12px;
          color: rgba(153, 153, 153, 1);
          line-height: 20px;
        }
        &-right {
          float: left;
          display: block;
          width: 180px;
          margin-left: 10px;
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

  }
  .select{
    overflow: hidden;
    margin-top: 26px;
    &-btn{
      border: 0;
      margin-left: 15px;
      margin-bottom: 11px;
      width:81px;
      height:27px;
      background:rgba(247,247,247,1);
      border-radius:2px;
      font-size:12px;
      font-weight: 500;
      color:rgba(51,51,51,1);
      line-height:17px;
    }
    &-btn:hover{
      background:rgba(113,179,255,1);
      color:rgba(255,255,255,1);
    }
  }
  .amount{
    margin-top: 10px;
    &-left{
      float: left;
      font-size:12px;
      color:rgba(153,153,153,1);
      line-height:27px;

    }
    &-right{
      float: right;
        /*width: 75px;*/
      /*height: 25px;*/
    }

  }
  .submit{
    margin-top: 76px;
    width:345px;
    height:49px;
    background:rgba(113,179,255,1);
    border-radius:8px;
    font-size:18px;
    font-weight: 500;
    color:rgba(255,255,255,1);
    line-height:25px;
  }

</style>
