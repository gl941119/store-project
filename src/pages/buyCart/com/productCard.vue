<template>
  <div class="card">
    <van-checkbox v-model="checked" class="checkbox"></van-checkbox>
    <div class="content">
      <img src="../../../assets/img/保湿修护面膜.png" alt="">
      <div class="content-right">
        <div class="content-right-top">
          <span>青春美白系列-仪器</span>
          <img src="../../../assets/image/删除.png" alt="">
        </div>
        <p class="content-right-middle">
          唤醒皮肤活力
        </p>
        <div class="content-right-bottom">
          <span class="my-price">¥1980</span>
          <van-stepper
            v-model="value"
            integer
            :min="1"
            :step="1"
            class="stepper"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productCard",
    data() {
      return {
        checked: true,
        value: 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    padding: 15px 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 345px;
    height: 110px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 16px 0px rgba(229, 229, 229, 0.5);
    border-radius: 4px;
    /*width:345px;*/
    /*height:110px;*/

  }

  .checkbox {
    font-size: 25px;
  }

  .content {
    width: 290px;
    height: 80px;
    > img {
      width: 80px;
      height: 80px;
    }
    &-right {
      float: right;
      width: 200px;
      &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span {
          width: 138px;
          height: 23px;
          font-size: 16px;
          color: rgba(72, 72, 72, 1);
          line-height: 23px;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        >img{
          width:11px;
          height:12px;

        }
      }
      &-middle {
        margin-top: 1px;
        width:72px;
        height:17px;
        font-size:12px;
        color:rgba(153,153,153,1);
        line-height:17px;
      }
      &-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 14px;
        >span{
          width:43px;
          height:21px;
          font-size:15px;
          font-weight:500;
          color:rgba(222,25,25,1);
          line-height:21px;
        }
        .stepper{

        }

      }
    }
  }

</style>
