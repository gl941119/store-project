<template>
<div>
  <van-goods-action class="buy">
    <van-goods-action-mini-btn :icon="icon" style="color: red;" @click="onClickMiniBtn" />
    <van-goods-action-mini-btn icon="cart"  @click="onClickMiniBtn" />
    <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" class="addBuy"
                v-on:click.native="addButCart"/>
    <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary class="buyNow"
                v-on:click.native="atOnceBuy"/>
  </van-goods-action>
</div>
</template>

<script>
    export default {
        name: "com-buy",
      props:['optionid','id'],
      data(){
          return{
            icon:'like-o'
          }
      },
      methods:{
        addButCart(){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=85&act=mycart&id=1&op=update&specs=28_23_26&total=3&optionid=65'
          })
        },
        atOnceBuy(){

        },
        onClickMiniBtn(){},
        onClickBigBtn(){
          this.$store.commit('setShowBuySpecification',true)
        }
      }
    }
</script>

<style lang="scss" scoped>
.buy{
  height: 49px !important;
  .addBuy{
    background-color: white;
    font-size:18px;
    color:rgba(113,179,255,1);
  }
  .buyNow{
    background-color: #71B3FF;
    font-size:18px;
    color:rgba(255,255,255,1);
  }
}
</style>
