<template>
  <div class="detail">
    <navbar :name="title"></navbar>
    <van-tabs @click="onClick">
      <van-tab title="商品">
        <product></product>
      </van-tab>
      <van-tab title="详情">
        <product-detail></product-detail>
      </van-tab>
      <van-tab title="评价">内容 2</van-tab>
    </van-tabs>
    <!--购买栏-->
    <com-buy></com-buy>

  </div>
</template>

<script>
  import Product from './page/product'
  import ProductDetail from './page/productDetail'
  import ComBuy from './com/com-buy'



  export default {
    name: "detail",
    components: {
      Product,ProductDetail,ComBuy,
    },
    data(){
      return{
        show:true,
        Data:null,
        id:this.$route.params.id,
        type:this.$route.params.type,
        title:this.$route.params.type === 1? '商品详情':'服务详情',
      }
    },
    mounted(){
      this.request()
    },
    // computed:{
    //   ShowBuySpecification:{
    //     set:function (val) {
    //       this.$store.state.ShowBuySpecification= val
    //     },
    //     get:function () {
    //       return this.$store.state.ShowBuySpecification
    //     }
    //   }
    // },
    methods: {
      request(){
        // this.$request({
        //   url:'app/index.php?i=1&c=entry&eid=85&act=goods',
        //   type:'get',
        //   data:{
        //     id:this.id
        //   }
        // }).then((res)=>{
        //   // console.log(res.code === 100){
        //   //   let Data = res.data
        //   //   this.goods =  Data.goods
        //   // }
        //
        // })
      },
      onClick(index, title) {


      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail{
    padding-bottom:50px ;
  }


</style>
