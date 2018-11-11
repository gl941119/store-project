<template>
  <div class="Card">
    <div class="card-top">
      <img :src="Data.avatar" alt="" class="headPhoto">
      <div class="card-top-title">
        <div class="card-top-title-top">
          <span class="name">{{Data.nick}}</span>
          <img :src="Data.level_img" v-if="Data.level_img" alt="" class="grade">
          <span class="subName">{{Data.card_name}}</span>
          <img src="../../../assets/image/设置.png" alt="" class="set" v-on:click="goUserManage">
        </div>
        <p class="character">{{Data.signature}}</p>
      </div>
    </div>
    <div class="fill"></div>
    <div class="card-bottom">
      <div class="card-bottom-left">
        <router-link to="">
          <p class="card-bottom-left-name">美丽积分</p>
          <p class="card-bottom-left-price">{{Data.score}}</p>
        </router-link>
      </div>
      <img src="../../../assets/image/menberSplit.png" class="card-bottom-fill"></img>
      <div class="card-bottom-left">
        <router-link :to="{ path:'member/beautyFund'}">
          <p class="card-bottom-left-name">美丽基金</p>
          <p class="card-bottom-left-price">{{Data.share_amount}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "com-meberCard",
    props:{
      Data:{
        type:Object,
      }
    },
    mounted(){

    },
    methods:{
      goUserManage(){
        this.$router.push({name:'userManage'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    width: 345px;
    height: 194px;
    background: url("../../../assets/image/ASKM.png") no-repeat center center;
    background-size: 365px 194px;
    margin: 0 auto;
    padding: 15px 15px 0;
    &-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .headPhoto {
        width: 50px;
        height: 50px;
        border-radius: 250px;
      }
      &-title {
        margin: 4px 0 0 16px;
        width: 100%;
        &-top {
          width: 100%;
          height: 25px;

          .name {
            float: left;
            font-size: 18px;
            color: rgba(51, 51, 51, 1);
          }
          .grade {
            float: left;
            margin: 8px 0 0 8px;
            width: 13px;
            height: 12px;
            /*background: rgba(253, 175, 1, 1);*/
            /*border: 1px solid #F4F4F4;*/
            line-height: 25px;
          }
          .subName {
            margin: 8px 0 0 5px;
            float: left;
            font-size: 10px;
            color: rgba(251, 74, 63, 1);
            line-height: 14px;
          }
          .set {
            float: right;
            margin-top: 4px;
            width: 15px;
            height: 15px;
            line-height: 25px;
          }

        }
        .character {
          float: left;
          margin-top: 4px;
          width: 200px;
          font-size: 10px;
          color: rgba(153, 153, 153, 1);
          line-height: 14px;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .fill {
      margin-top: 12px;
      width: 315px;
      height: 1px;
      background: rgba(113, 179, 255, 1);
      opacity: 0.1252;
    }
    &-bottom {
      width: 100%;
      height: 116px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &-name{
          font-size:16px;
          font-weight:600;
          color:rgba(153,153,153,1);
          line-height:23px;
        }
        &-price{
          font-size:23px;
          font-family:'Bebas';
          color:rgba(113,179,255,1);
          line-height:30px;
        }
      }
      &-fill {
        width: 3px;
        height: 29px;
      }

    }
  }

</style>
