<template>
  <div class="wrap">
    <div class="title" @click="DetailsBeautyDivision(Data)">
      <img :src="Data.thumb" alt="" class="title-img">
      <div class="title-content">
        <div class="title-content-name">
          <p>{{Data.name}}</p>
          <p>NO{{Data.displayorder}}</p>
        </div>
        <p>{{Data.task}}</p>
      </div>
    </div>
    <div class="fill" v-if="type"></div>
    <div class="bottom" v-if="type">
      <div class="bottom-evaluate">
        <span>综合评价</span>
        <van-rate v-model="value" class="bottom-evaluate-main" :readonly="true"/>
      </div>
      <van-button type="default" class="bottom-buy" v-on:click.stop="goSelectTime(Data.id,Data.sid)">立即预约</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cosmetologist",
    props:{
      Data:{
        type:Object
      },
      type:{
        default:true
      }
    },
    computed:{
      value:{
        get:function () {
          return parseInt(this.Data.overallscore)/2
        }
      }
    },
    data() {
      return {

      }
    },
    methods:{
      goSelectTime(id,sid){//id  美师id  sid 服务id
        this.$router.push({name:'selectTime',params:{id:id,sid:sid}})
      },
      DetailsBeautyDivision(data){
        this.$router.push({name:'DetailsBeautyDivision',params:{data:data}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    margin: 0 auto;
    padding: 15px 15px;
    width: 345px;
    height: 131px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 8px 0px #D8D8D8;
    border-radius: 4px;
    /*border: 1px solid red;*/
  }

  .title {
    overflow: hidden;
    &-img {
      float: left;
      width: 50px;
      height: 50px;
      border-radius: 250px;
    }
    &-content {
      float: left;
      margin-left: 28px;
      width: 220px;
      &-name {
        margin-top: 7px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        p:first-child {
          font-size: 15px;
          color: rgba(51, 51, 51, 1);
          line-height: 21px;
        }
        p:last-child {
          font-size: 10px;
          color: rgba(113, 179, 255, 1);
          line-height: 14px;
        }
      }
      > p {
        margin-top: 6px;
        font-size: 10px;
        color: rgba(153, 153, 153, 1);
        line-height: 14px;
      }
    }
  }
  .fill{
    margin: 15px 0 12px;
    width:314px;
    height:1px;
    background:rgba(216,216,216,1);
  }
  .bottom{
    overflow: hidden;
    &-evaluate{
      float: left;
      width:185px;
      height:22px;
     display: flex;
      justify-content: flex-start;
      align-items: center;
      >span{
        font-size:16px;
        color:rgba(51,51,51,1);
        line-height:22px;
      }
      &-main{
        margin-left: 12px;

      }
    }
    &-buy{

      float: right;
      margin-right: 4px;
      width:80px;
      height:24px;
      background:rgba(113,179,255,1);
      box-shadow:0px 5px 7px 0px rgba(204,226,249,1);
      border-radius:3px;
      font-size:12px;
      color:rgba(255,255,255,1);
      line-height:24px;

    }
  }
</style>
