<template>
  <div class="index">
    <!--搜索栏-->
    <div class="search">
      <search :value.sync="value" class="search-left" v-on:click.native="goSearch"></search>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="item in data.slide" :key="item.name"><img :src="item.bimg" alt=""
                                                                         v-on:click="goLink(item.link)">
        </van-swipe-item>
      </van-swipe>
    </div>

    <!--分类列表-->
    <com-list :data="data.cate" ></com-list>
    <!--热门-->
    <com-model :data="goods_hot"></com-model>
    <img :src="advOne.bimg" alt="" v-on:click="goThree(advOne.link)" class="img">
    <!--精品-->
    <com-model :data="goods_essence"></com-model>
    <img :src="advTwo.bimg" alt="" v-on:click="goOne(advTwo.link)" class="img">
    <img :src="advThree.bimg" alt="" v-on:click="goTwo(advThree.link)" class="img">
    <div class="fillBlock"></div>
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
        goods_hot:{},
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
      this.$store.commit('setHover', 0)
      this.request()

    },
    methods: {
      goDetail(){
        this.$router.push({name:'detail',params:{type:'1',id:'2'}})
      },
      goLink(link) {//banner跳转
        // this.$router.push({path:link})
        window.location.href = link
      },
      goOne(link) {//banner跳转
        // this.$router.push({name:'yiYuan'})
        window.location.href = link
      },
      goTwo(link){
        // this.$router.push({name:'youthBeauty'})
        window.location.href = link
      },
      goThree(link){
        // this.$router.push({name:'introductionInstruments'})
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
          this.goods_essence = res.data.goods_essence;
          this.goods_hot = res.data.goods_hot;
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
  .fillBlock{
    height: 50px;
    width: 100%;
  }

  .index {
    background-color: #F4F4F4;
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
