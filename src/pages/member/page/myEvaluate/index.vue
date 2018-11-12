<template>
  <div class="wrap">

    <van-tabs v-model="active" @click="onclick" :swipeable="true" sticky>
      <van-tab title="商品">
        <div class="fill"></div>
        <!--卡片-->
        <div class="main" v-for="item,num in discusslist" :key="num" v-if="!!item.goodslist.length">
          <div class="main-top">
            <img :src="item.avatar" alt="">
            <span class="main-top-name">{{item.name}}</span>
          </div>
          <div class="main-middle">
            <p class="main-middle-title">{{item.goodslist[0].title}}：{{item.goodslist[0].total}}</p>
            <p class="main-middle-text">{{item.content}}</p>
            <div class="main-middle-img">
              <img :src="img" alt="" v-for="img,index in item.imgs" :key="index">
            </div>
          </div>
          <div class="main-bottom"  v-on:click="goDetail(1,goodsid)">
            <img :src="item.goodslist[0].thumb" alt="">
            <dl>
              <dt>{{item.goodslist[0].title}}</dt>
              <dd>
                <span class="price">¥{{item.goodslist[0].price}}</span>
                <span class="type">{{Math.ceil(parseInt(item.score)/2)}}星好评</span>
              </dd>
            </dl>
          </div>
        </div>
      </van-tab>
      <van-tab title="服务">
        <div class="fill"></div>
        <!--卡片-->
        <div class="main" v-for="item,num in discusslist" :key="num" v-if="!!item.goodslist.length">
          <div class="main-top">
            <img :src="item.avatar" alt="">
            <span class="main-top-name">{{item.name}}</span>
          </div>
          <div class="main-middle">
            <p class="main-middle-title">{{item.goodslist[0].title}}：{{item.goodslist[0].total}}</p>
            <p class="main-middle-text">{{item.content}}</p>
            <div class="main-middle-img">
              <img :src="img" alt="" v-for="img,index in item.imgs" :key="index">
            </div>
          </div>
          <div class="main-bottom"  v-on:click="goDetail(2,item.goodslist[0].goodsid)">
            <img :src="item.goodslist[0].thumb" alt="">
            <dl>
              <dt>{{item.goodslist[0].title}}</dt>
              <dd>
                <span class="price">¥{{item.goodslist[0].price}}</span>
                <span class="type">{{Math.ceil(parseInt(item.score)/2)}}星好评</span>
              </dd>
            </dl>
          </div>
        </div>


      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        active: 0,
        discusslist:[],
      }
    },
    mounted(){
      this.request()
    },
    methods:{
      goDetail(type,id){
        console.log(type,id)
        this.$router.push({name:'detail',params:{type:type,id:id}})
      },
      request(){
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=88&act=discusslist',
          type:'post',
          data:{
            type:this.active+1
          }
        }).then(res=>{
          this.discusslist = res.data.discusslist
          console.log( this.discusslist)
        })

      },
      onclick(){
        this.request()
      }

    }

  }
</script>

<style lang="scss" scoped>
  .wrap{
    height: 100%;
    background-color: #F4F4F4;
  }
  .fill{
    width: 100%;
    height: 1px;
    background-color: #D8D8D8;
  }
  .main {
    width: 100%;
    padding: 15px 15px;
background-color: white;
    margin-bottom: 10px;
    &-top {
      height: 29px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      > img {
        width: 29px;
        height: 29px;
        border-radius: 250px;
      }
      > span {
        margin-left: 5px;
        font-size: 15px;
        font-family: PingFangSC-Regular;
        color: rgba(5, 5, 5, 1);
      }
    }
    &-middle {
      margin-top: 15px;
      &-title {
        height: 19px;
        font-size: 13px;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 19px;
      }
      &-text {
        margin-top: 9px;
        font-size: 15px;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 21px;
      }
      &-img {
        margin-top: 5px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        > img {
          margin: 3px 10px 0 0;
          width: 60px;
          height: 60px;
        }
      }
    }
    &-bottom {
      margin-top: 14px;
      width: 100%;
      height: 73px;
      background: rgba(248, 248, 248, 1);
      display: flex;
      justify-content: flex-start;
      > img {
        width: 65px;
        height: 100%;

      }
      > dl {
        margin-left: 13px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > dt {
          margin-top: 11px;

          font-size: 15px;
          font-family: PingFangSC-Regular;

          color: rgba(51, 51, 51, 1);

        }
        > dd {
          height: 21px;
          .price {
            height: 21px;
            font-size: 15px;
            font-family: PingFangSC-Regular;
            color: rgba(51, 51, 51, 1);
            line-height: 21px;
          }
          .type {
            margin-left: 11px;
            height: 21px;
            font-size: 10px;
            font-family: PingFangSC-Regular;
            color: rgba(228, 57, 59, 1);
            line-height: 21px;
          }
        }
      }

    }
  }


</style>
