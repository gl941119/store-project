<template>
  <div class="detali-product">
    <van-swipe :autoplay="300000000000000000" class="swipe">
      <van-swipe-item v-if="goods.video">
        <video :src="goods.video" autoplay muted class="swipe-img"/>
      </van-swipe-item>
      <van-swipe-item v-for="(item, index) in goods.thumb_url" :key="index">
        <img :src="item" alt="" class="swipe-img">
      </van-swipe-item>
    </van-swipe>
    <div class="title">
      <div class="title-top">
        <span class="title-top-name">{{goods.title}}</span>
        <div class="title-top-right">
          <span>{{goods.collection}}人收藏</span>
          <img src="../../../assets/img/icon-star.png" alt="">
        </div>
      </div>
      <p class="title-middle">
        {{goods.description}}
      </p>
      <div class="title-bottom">
        <span class="price">￥{{goods.marketprice}}</span>
        <span class="notPrice">￥{{goods.productprice}}</span>
        <span class="buy">{{goods.sales}}人已经购买</span>
      </div>
    </div>
    <my-cell :title="'已购'" :content="Alreadybought" v-on:click.native="ShowSpecification = true" style="margin-top: 10px;"></my-cell>

    <div class="address-cell">
      <div class="address-cell-title">送至运费</div>
      <div class="address-cell-content">
        <p>{{address}}</p>
        <p>免运费</p>
      </div>
      <div class="address-cell-right">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <!--产品详情-->
    <div class="presentation">
      <p class="presentation-title">产品详情</p>
      <!--<div class="presentation-fill"></div>-->
      <div class="presentation-content" v-html="goods.content"></div>
    </div>
    <!--评价-->
    <ComEvaluation :good_rate="goods.good_rate" :discuss="discuss"></ComEvaluation>
    <!--<van-popup v-model="ShowSpecification" position="bottom" :overlay="true" title="支持以下配送方式">-->
      <!--&lt;!&ndash;购买时规格选择组件&ndash;&gt;-->
      <!--<com-buy-specification></com-buy-specification>-->
    <!--</van-popup>-->
    <van-actionsheet v-model="ShowSpecification" title="选择规格">
      <com-buy-specification :goods_spec="goods_spec"></com-buy-specification>
    </van-actionsheet>
  </div>

</template>

<script>
  import ComEvaluation from './com/com-evaluation'
  import ComBuySpecification from './com/com-buySpecification'

  export default {
    name: "store",
    components: {
      ComEvaluation,ComBuySpecification
    },
    data() {
      return {
        goods: {
          "id": undefined,
          "title": undefined,
          "thumb": undefined,
          "description": undefined,
          "content": undefined,
          "marketprice": undefined,
          "productprice": undefined,
          'sales': undefined,
          "thumb_url": null,
          "total": "400",
          "collection": "0",
          "hasoption": "1",
          "good_rate": null,

        },
        goods_spec:null,
        discuss:{//评论
          card_id: undefined,
          content: undefined,
          createtime: undefined,
          imgs: null,
          level_img: undefined,
          nick: undefined,
          score: undefined
        },
        Alreadybought: undefined,//已购
        address: undefined,//收货地址
        goodsData: null,
        ShowSpecification:false,
        SpecificationData:null,
        images: [
          '../../../assets/img/保湿修护面膜.png',
          'https://img.yzcdn.cn/2.jpg'
        ],

      }
    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=goods',
          type: 'get',
          data: {
            id: this.$route.params.id
          }
        }).then((res) => {
          if (res.code === 100) {
            this.goods = res.data.goods
            this.goods_spec = res.data.goods_spec //容量
            this.discuss = res.data.discuss[0] //评论
            this.Alreadybought = `${res.data.goods.title},1瓶` //已购
            this.address = res.data.address

            // const Data =  res.data.goods
            // this.video =  Data.video
            // this.thumb_url = Data.thumb_url
            // this.title = Data.title
          }

        })
      },
      onFocus(){
        console.log(123)
      }
    }

  }
</script>

<style lang="scss" scoped>

  .detali-product {
    height: 100%;
    background-color: #F4F4F4;
    .swipe {
      height: 343px;
      overflow: hidden;
      &-img {
        height: 343px;
        width: 375px;
      }
    }
    .title {
      /*height: 157px;*/
      padding: 15px 15px 9px;
      background-color: white;
      &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-name {
          font-size: 18px;
          color: rgba(0, 0, 0, 1);
          line-height: 25px;
        }
        &-right {

          width: 79px;
          overflow: hidden;
          > img {
            float: right;
            margin-right: 3px;
            width: 14px;
            height: 14px;
          }
          > span {
            float: right;
            font-size: 12px;
            color: rgba(153, 153, 153, 1);
            line-height: 16px;
          }
        }
      }
      &-middle {
        margin-top: 11px;
        width: 344px;
        min-height: 60px;
        font-size: 15px;
        color: rgba(153, 153, 153, 1);
        line-height: 26px;
      }
      &-bottom {
        margin-top: 11px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          font-size: 18px;
          font-weight: 500;
          color: rgba(188, 35, 43, 1);
          line-height: 25px;
          flex: 1;
        }
        .notPrice {
          margin-left: 19px;
          font-size: 12px;
          color: #999999;
          line-height: 16px;
          flex: 1;
          text-decoration: line-through;
        }
        .buy {
          font-size: 12px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 16px;
          flex: 4;
          text-align: right;
        }
      }
    }
    .presentation {
      padding: 15px 15px 0;
      background-color: white;
      margin-top: 10px;
      &-title {
        margin-bottom: 15px;
        font-size: 15px;
        color: rgba(5, 5, 5, 1);
        line-height: 21px;
      }
      &-fill {
        margin: 7px 0;
        width: 345px;
        height: 1px;
        background: rgba(216, 216, 216, 1);
      }
      &-content {
        min-height: 165px;
        font-size: 10px;
        color: rgba(153, 153, 153, 1);

        > p {
          line-height: 30px;
        }
      }
    }
  }
.address-cell{
  margin-top: 10px;
  width: 100%;
  padding: 12px 15px;
  height:64px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-title{
    width:24px;
    height: 100%;
    font-size:12px;
    color:rgba(153,153,153,1);
  }
  &-content{
    width: 233px;
    height: 100%;
    font-size:14px;
    color:rgba(51,51,51,1);
    line-height:20px;
    P:first-child{
      width: 100%;
      height: 50%;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
    }
    p:last-child{
      width: 100%;
      height: 50%;
    }

  }
  &-right{
    >div{
      width:2px;
      height:2px;
      background:rgba(102,102,102,1);
      float: left;
      margin-left: 4px;
    }
  }
}

</style>
