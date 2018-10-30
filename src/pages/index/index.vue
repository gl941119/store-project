<template>
  <div class="index">
    <navbar :name="'S+艾司商城'"></navbar>
    <div class="search">
      <search :value.sync="value" class="search-left"></search>
      <!--<van-search placeholder="请输入搜索关键词" v-model="value" class="search-left"/>-->
      <img src="../../assets/image/扫一扫.png" alt="" class="search-right">
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000" :height="223" :width="375">
        <van-swipe-item v-for="item in data.slide" :key="item.name"><img :src="item.bimg" alt=""></van-swipe-item>
      </van-swipe>
    </div>
    <!--分类列表-->
    <com-list :data="data.cate" ></com-list>
    <!--热销商品-->
    <com-model :data="goods_essence"></com-model>
    <img :src="advOne" alt="" class="img">
    <!--热门体验卡-->
    <com-model :data="expre_cards"></com-model>
    <!--会员专区-->
    <com-model :data="member_cards"></com-model>
    <img :src="advTwo"  alt="" class="img">
    <img :src="advThree"  alt="" class="img">
  </div>
</template>

<script>
  import ComModel from './com/com-model'
  import ComList from './com/com-list'


  export default {
    name: "index",
    components: {
      ComModel,ComList
    },
    watch:{
      value:function (val) {

      }
    },
    mounted(){
      console.log(this.$ref.img)
    },

    data() {
      return {
        data: {},
        goods_essence:{},
        expre_cards:{},
        member_cards:{},
        adv:[],
        value: undefined,
        advOne:undefined,
        advTwo:undefined,
        advThree:undefined
      }
    },
    mounted() {
      this.$request({
        url: 'app/index.php?i=1&c=entry&eid=84',
        data: {
        },
        type: 'get'
      }).then((res) => {
        this.data = res.data
        this.goods_essence = res.data.goods_hot
        this.expre_cards = res.data.expre_cards
        this.member_cards = res.data.member_cards
        this.advOne = res.data.adv[0].bimg
        this.advTwo = res.data.adv[1].bimg
        this.advThree = res.data.adv[2].bimg
      })
    }
  }
</script>

<style lang="scss" scoped>
  .index {
    background-color: #F4F4F4;
    padding-bottom: 50px;

  }
  .search {
    padding: 5px 15px;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-left {
      float: left;
      width: 308px ;
      height: 29px ;

    }
    &-right {
      float: right;
      width: 23px;
      height: 23px;
    }
  }
  .banner {
    overflow: hidden;
    img {
      width: 375px;
      height: 223px;
    }
  }

  .img {
    width: 375px;
    height: 143px;
    margin-top: 10px;
    background-color: white;
  }

</style>
