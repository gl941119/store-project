<template>
    <div class="buyCart">
      <navbar :name="'购物车'"></navbar>
      <product-card v-for="item,index in 4" class="product-card" :key="index"></product-card>
      <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
        class="submit-bar"
      />
    </div>
</template>

<script>
  import ProductCard from './com/productCard'
    export default {
        name: "index",
      components:{
        ProductCard
      },
      methods:{
        onSubmit(){}
      }
    }
</script>

<style lang="scss" scoped>


.product-card{
  margin-bottom: 15px;
}
  .submit-bar{
    margin-bottom: 50px;
  }
</style>
