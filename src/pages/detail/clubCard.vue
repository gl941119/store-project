<template>
  <div class="detail" ref="out">

    <!--<van-tabs @click="onClick" swipeable class="tabs">-->
    <!--<van-tab title="商品"></van-tab>-->
    <!--<van-tab title="详情"></van-tab>-->
    <!--</van-tabs>-->
    <!--商品-->
    <div class="detali-product product">
      <!--banner-->
      <van-swipe  class="swipe">
        <van-swipe-item v-for="(item, index) in Data.bimg" :key="index">
          <img :src="item" alt="" class="swipe-img">
        </van-swipe-item>
      </van-swipe>
      <!--<img :src="Data.imgurl" alt="" class="swipe">-->
      <!--详情-->
      <div class="title">
        <div class="title-top">
          <span class="title-top-name">{{Data.name}}</span>
        </div>
        <p class="title-middle">
          {{Data.descript}}
        </p>
        <div class="title-bottom">
          <div class="price-left">
            <div class="price">￥{{Data.price}}</div>
            <div class="original_price gol">¥{{Data.o_price}}</div>
          </div>
          <div class="buy-num gol">{{Data.num}}人已购买</div>
        </div>
      </div>
      <!--<div class="membership-grade-padding">-->
        <!--<div class="membership-grade-box">-->
          <!--<div class="membership-grade-flex">-->
            <!--<div class="gol">等级</div>-->
            <!--<div class="membership-grade">{{Data.name}}</div>-->
          <!--</div>-->

        <!--</div>-->
      <!--</div>-->
      <!--产品详情-->
      <div class="presentation" ref="presentation">
      <p class="presentation-title">会员卡详情</p>
      <!--<div class="presentation-fill"></div>-->
      <div class="presentation-content" v-html="Data.content"></div>
      </div>
      <button class="buy" v-on:click="goAppoint">立即购买
      </button>

    </div>


  </div>
</template>

<script>


  export default {
    name: "detail",
    components: {},
    data() {
      return {
        id: this.$route.params.id,
        Data: {},
        con:''
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=89&act=cardinfo',
          type: 'post',
          data: {
            id: this.$route.params.id
          }
        }).then(res => {
          this.Data = res.data
          document.title = res.data.name
        })
      },
      goAppoint() {
        if (window.sessionStorage.getItem('is_bind') === '0') {//未绑定账号
          this.$router.push({name: 'bindAccount'});
          return
        }


        this.$dialog.confirm({
          title: '是否购买？',
        }).then(() => {
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=89&act=buycard',
            type: 'post',
            data: {
              id: this.$route.params.id
            }
          }).then(res => {
            if (res.code === 100) {//支付
              window.location.href = this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$eidpay.eid + '&dom='+this.$eidpay.dom+'&act=payorder&orderid=' + res.data.orderid
            }
          })
        }).catch(() => {
          // on cancel
        });


      }
    }
  }
</script>

<style lang="scss" scoped>
  .gol{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .original_price{
    padding-left: 15px;
    text-decoration: line-through;
  }
  .price-left,.membership-grade-flex{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .buy-num{

  }
  .membership-grade-padding{
    background-color: rgba(244,244,244,1);
    padding: 10px 0;
  }
  .membership-grade-box{
    background-color: #fff;
    padding: 10px 15px;
    display: flex;
    align-items:center;
    justify-content:space-between;
  }
  .membership-grade{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-left: 15px;
  }
  .buy {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 49px;
    background: rgba(113, 179, 255, 1);
    box-shadow: 0px 4px 7px 0px rgba(204, 226, 249, 1);
    font-size: 18px;
    font-family: PingFangSC-Regular;
    color: rgba(255, 255, 255, 1);
    line-height: 25px;
  }

  .detail {
    padding-bottom: 50px;
    position: relative;
  }

  .tabs {
    position: fixed;
    z-index: 100;
    top: 44px;
    width: 100%;
    height: 50px;
  }

  .product {

  }

  .detali-product {
    height: 100%;
    background-color: #F4F4F4;
    .swipe {
      width: 100%;
      height: 343px;
      overflow: hidden;
      &-img {
        height: 343px;
        width: 375px;
      }
      &-video {
        object-fit: fill;
        width: 375px;
        height: 343px;
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
        &-buy {
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

  .address-cell {
    margin-top: 10px !important;
    width: 100%;
    padding: 12px 15px;
    height: 45px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-title {
      width: 24px;
      height: 100%;
      font-size: 12px;
      color: rgba(153, 153, 153, 1);
      line-height: 22px;
    }
    &-content {
      flex: 1;
      margin-left: 10px;
      /*width: 233px;*/
      height: 100%;
      font-size: 14px;
      color: rgba(51, 51, 51, 1);
      line-height: 20px;
      P:first-child {
        width: 100%;
        height: 100%;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
      }
      p:last-child {
        width: 100%;
        height: 100%;
      }
    }
    &-right {
      > div {
        width: 2px;
        height: 2px;
        background: rgba(102, 102, 102, 1);
        float: left;
        margin-left: 4px;
      }
    }
  }

  .myCell {
    margin-top: 10px;
    width: 100%;
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    &-title {
      width: 24px;
      height: 100%;
      font-size: 12px;
      color: rgba(153, 153, 153, 1);
      line-height: 17px;
    }
    &-content {
      margin-left: 10px;
      flex: 1;
      height: 100%;
      font-size: 14px;
      color: rgba(51, 51, 51, 1);
      line-height: 20px;
    }
    &-right {
      > div {
        width: 2px;
        height: 2px;
        background: rgba(102, 102, 102, 1);
        float: left;
        margin-left: 4px;
      }
    }
  }

  .buy {
    height: 49px !important;
    .addBuy {
      background-color: white;
      font-size: 18px;
      color: rgba(113, 179, 255, 1);
    }
    .buyNow {
      background-color: #71B3FF;
      font-size: 18px;
      color: rgba(255, 255, 255, 1);
    }
  }

  .is_collect {
    color: red;
  }

</style>
