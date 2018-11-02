<template>
  <div class="Specification">
    <div class="product">
      <img :src="goods.thumb" alt="" class="product-left">
      <div class="product-right">
        <span class="my-price">${{goods.marketprice}}</span>
        <span class="my-subPrice">{{goods.productprice}}</span>
        <div class="product-right-content">
          <span class="product-right-content-left">已选</span>
          <span class="product-right-content-right">{{goods.title}}</span>
        </div>
      </div>
    </div>
    <div class="select" v-html="ht">
      <dl>
        <dt v-if="oneTitle">{{oneTitle}}</dt>
        <dd>
          <van-button type="default" class="select-btn"
                      v-for="item in goods_spec"
                      :key="item.id">
            {{item.title}}
          </van-button>
        </dd>
      </dl>
      <div></div>


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
    props: ['goods_spec', 'goods'],
    data() {
      return {
        integer: true,
        value: 1,
        oneTitle:false,
        ht:`<P></P>`
      }
    },
    mounted(){

      try{
        this.oneTitle = this.goods_spec[0].spectitle
      }catch(e){

      }
    },
  }
</script>

<style lang="scss" scoped>
  .Specification {
    width: 375px;
    /*height: 500px;*/
    padding: 16px 15px 0;
    background: rgba(255, 255, 255, 1);
  }

  .product {
    overflow: hidden;
    &-left {
      width: 90px;
      height: 90px;
      float: left;

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

  .select {
    /*overflow: hidden;*/
    margin-top: 26px;
    >dl{

    }
    /*&-btn {*/
      /*border: 0;*/
      /*margin-left: 15px;*/
      /*margin-bottom: 11px;*/
      /*width: 81px;*/
      /*height: 27px;*/
      /*background: rgba(247, 247, 247, 1);*/
      /*border-radius: 2px;*/
      /*font-size: 12px;*/
      /*font-weight: 500;*/
      /*color: rgba(51, 51, 51, 1);*/
      /*line-height: 17px;*/
    /*}*/
    /*&-btn:hover {*/
      /*background: rgba(113, 179, 255, 1);*/
      /*color: rgba(255, 255, 255, 1);*/
    /*}*/
  }

  .amount {
    margin-top: 10px;
    &-left {
      float: left;
      font-size: 12px;
      color: rgba(153, 153, 153, 1);
      line-height: 27px;

    }
    &-right {
      float: right;
      /*width: 75px;*/
      /*height: 25px;*/
    }

  }

  .submit {
    margin-top: 76px;
    margin-bottom: 54px;
    width: 345px;
    height: 49px;
    background: rgba(113, 179, 255, 1);
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 25px;
  }

</style>
