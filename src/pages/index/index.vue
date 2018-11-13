<template>
  <div class="index">

    <!--搜索栏-->
    <div class="search">
      <search :value.sync="value" class="search-left" v-on:click.native="goSearch"></search>
      <!--<van-search placeholder="请输入搜索关键词" v-model="value" class="search-left"/>-->
      <!--<img src="../../assets/image/scan.png" alt="" class="search-right" @click="scanBtn()">-->
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="item in data.slide" :key="item.name"><img :src="item.bimg" alt=""
                                                                         v-on:click="goLink(item.link)">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--分类列表-->
    <com-list :data="data.cate"></com-list>
    <!--热销商品-->
    <com-model :data="goods_essence"></com-model>
    <img :src="advOne.bimg" alt="" v-on:click="goLink(advOne.link)" class="img">
    <!--热门体验卡-->
    <com-model :data="expre_cards" :type="false"></com-model>
    <!--会员专区-->
    <com-model :data="member_cards" :type="false"></com-model>
    <img :src="advTwo.bimg" alt="" v-on:click="goLink(advTwo.link)" class="img">
    <img :src="advThree.bimg" alt="" v-on:click="goLink(advThree.link)" class="img">
  </div>
</template>

<script>
  import ComModel from './com/com-model'
  import ComList from './com/com-list'
  import wxHandle from '../../utils/wx'


  export default {
    name: "index",
    components: {
      ComModel, ComList
    },
    data() {
      return {
        data: {},
        goods_essence: {},
        expre_cards: {},
        member_cards: {},
        adv: [],
        value: undefined,
        advOne: {
          bimg: undefined,
          link: undefined
        },
        advTwo: {
          bimg: undefined,
          link: undefined
        },
        advThree: {
          bimg: undefined,
          link: undefined
        },
      }
    },
    created() {

    },
    mounted() {
      this.$store.commit('setHover',0)
      this.request()
    },
    methods: {
      goLink(link) {//banner跳转
        window.location.href = link
      },
      scanBtn() {
        // wxHandle('scanQRCode', {
        //   needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        //   scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        //   success: function (res) {
        //     var result = res.resultStr + '扫码返回的结果'; // 当needResult 为 1 时，扫码返回的结果
        //   }
        // })

      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=84',
          data: {
            act: 'index'
          },
          type: 'get'
        }).then((res) => {
          this.data = res.data;
          this.goods_essence = res.data.goods_hot;
          this.expre_cards = res.data.expre_cards;
          this.member_cards = res.data.member_cards;
          this.advOne = res.data.adv[0];
          this.advTwo = res.data.adv[1];
          this.advThree = res.data.adv[2]
          window.sessionStorage.setItem('is_bind', res.data.is_bind)
        })
      },
      goSearch() {
        this.$router.push({name: 'search'})
      }
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
      width: 100%;
      height: 29px;

    }
    &-right {
      float: right;
      width: 23px;
      height: 23px;
    }
  }

  .banner {
    overflow: hidden;
    height: 223px;
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
