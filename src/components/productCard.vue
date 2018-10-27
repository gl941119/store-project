<template>
  <div class="card"  v-on:click="goDetail(Data.id)">
    <img :src="Data.thumb" alt="" class="card-left">
    <div class="card-right">
      <p class="card-right-name">{{Data.title}}</p>
      <p class="card-right-content">{{Data.description}}</p>
      <p class="card-right-price my-price">￥{{Data.price}}</p>
      <p class="card-right-comment">{{Data.discuss_total}}条评价 好评率{{Data.good_rate}}%</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productCard",
    props:['Data'],
    mounted(){
    },
    methods:{
      goDetail(id){
        this.$router.push({name:'detail',params:{id:id,type:1}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px auto 0;
    width: 345px;
    height: 115px;
    background: rgba(255, 255, 255, 1);
    box-shadow:0px 1px 11px 0px rgba(211,211,211,0.5);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    &-left {
      width: 115px;
      height: 115px;

    }
    &-right {
      width: 230px;
      margin-left: 15px;
      &-name {
        margin-top: 9px;
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        line-height: 23px;
        font-weight: 400;
      }
      &-content {
        width: 200px;
        margin-top: 6px;
        font-size: 10px;
        color: rgba(153, 153, 153, 1);
        line-height: 14px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &-price {
        margin-top: 16px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(233, 58, 61, 1);
        line-height: 22px;
      }
      &-comment{
        margin-top: 4px;
        font-size:10px;
        color:rgba(153,153,153,1);
        line-height:14px;
      }

    }

  }
</style>
