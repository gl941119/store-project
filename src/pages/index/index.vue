<template>
  <div class="index">
    <navbar :name="'S+艾司商城'"></navbar>

    <div class="search">
      <search :value.sync="value" class="search-left" v-on:click.native="goSearch"></search>
      <!--<van-search placeholder="请输入搜索关键词" v-model="value" class="search-left"/>-->
      <img src="../../assets/image/scan.png" alt="" class="search-right" @click="scanBtn()">
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="item in data.slide" :key="item.name"><img :src="item.bimg" alt=""></van-swipe-item>
      </van-swipe>
    </div>
    <!--分类列表-->
    <com-list :data="data.cate"></com-list>
    <!--热销商品-->
    <com-model :data="goods_essence"></com-model>
    <img :src="advOne" alt="" class="img">
    <!--热门体验卡-->
    <com-model :data="expre_cards" :type="false"></com-model>
    <!--会员专区-->
    <com-model :data="member_cards" :type="false"></com-model>
    <img :src="advTwo" alt="" class="img">
    <img :src="advThree" alt="" class="img">
  </div>
</template>

<script>
  import ComModel from './com/com-model'
  import ComList from './com/com-list'
  import wx from 'weixin-js-sdk'
  import axios from 'axios'

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
        advOne: undefined,
        advTwo: undefined,
        advThree: undefined,
        value:''
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      scanBtn(){
        let thia = this;
        axios.post('http://dev-cd.vasterroad.com/app/index.php?i=1&c=entry&eid=163&act=weixinscan',{
          url:window.location.href
        })
          .then((res)=>{
            if(res.data.status){
              var d=res.data.data.config;
              wx.config({
                debug: true, // 开启调试模式,
                appId: d.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: d.timestamp, // 必填，生成签名的时间戳
                nonceStr: d.nonceStr, // 必填，生成签名的随机串
                signature: d.signature,// 必填，签名，见附录1
                jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              });
              wx.ready(function () {
                wx.scanQRCode({
                  needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                  scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                  success: function (res) {
                    thia.value=res.resultStr;
                    var result = res.resultStr+'扫码返回的结果'; // 当needResult 为 1 时，扫码返回的结果
                  }
                });
                wx.error(function(res){
                  var s=res+'config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。';
                  alert(res)
                  // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

                });

              });
            }
          }).catch((res)=>{
          var ss=res+'catch请求失败';
          alert(ss)
        });
      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=84',
          data: {},
          type: 'get'
        }).then((res) => {
          this.data = res.data;
          this.goods_essence = res.data.goods_hot;
          this.expre_cards = res.data.expre_cards;
          this.member_cards = res.data.member_cards;
          this.advOne = res.data.adv[0].bimg;
          this.advTwo = res.data.adv[1].bimg;
          this.advThree = res.data.adv[2].bimg
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
      width: 308px;
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
