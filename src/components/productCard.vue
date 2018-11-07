<template>
  <div class="card"  v-on:click="goDetail(Data.id,Data.type)">
    <img :src="Data.thumb" alt="" class="card-left">
    <div class="card-right">
      <span class="card-right-select" v-if="select">已选</span>
      <p class="card-right-name">{{Data.title}}</p>
      <p class="card-right-content">{{Data.description}}</p>
      <p class="card-right-price my-price">￥{{Data.price}}</p>
      <p class="card-right-comment">{{Data.discuss_total}}条评价&nbsp;&nbsp;好评率{{Data.good_rate}}%</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productCard",
    props:{
      Data:{
        type:Object
      },
      select:{
        default:false
      }
    },
    mounted(){
    },
    methods:{
      goDetail(id,type){
        this.$router.push({name:'detail',params:{id:id,type:type}})
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
      position: relative;
      &-select{
        position: absolute;
        top: 13px;
        right: 4px;
        font-size:10px;
        font-family:PingFangSC-Regular;
        color:rgba(113,179,255,1);
      }
      &-name {
        height: 23px;
        margin-top: 9px;
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        line-height: 23px;
        font-weight: 400;
      }
      &-content {
        height: 14px;
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
        height: 23px;
        margin-top: 12px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(233, 58, 61, 1);

      }
      &-comment{
        height: 14px;
        margin-top: 8px;
        font-size:10px;
        color:rgba(153,153,153,1);

      }

    }

  }
</style>
