<template>
  <div class="detail" ref="out">
    <van-tabs @click="onClick" swipeable class="tabs">
      <van-tab title="商品"></van-tab>
      <van-tab title="详情"></van-tab>
    </van-tabs>
    <!--商品-->
    <div class="detali-product product">
      <!--banner-->
      <van-swipe class="swipe">
        <van-swipe-item >
          <img src="../../../../assets/image/s_1.jpg" alt="" class="swipe-img">
        </van-swipe-item>
      </van-swipe>
      <!--详情-->
      <div class="title">
        <div class="title-top">
          <span class="title-top-name">{{dataList.name}}</span>
        </div>
        <div class="title-middle" v-html="dataList.description"></div>
        <div class="title-bottom">
          <span class="price">￥{{dataList.price}}</span>
          <span class="notPrice">￥{{dataList.o_price}}</span>
          <span class="title-bottom-buy">{{dataList.sold}}人已经购买</span>
        </div>
      </div>

      <!--产品详情-->
      <div class="presentation" ref="presentation">
        <p class="presentation-title">产品详情</p>
        <div class="presentation-content" v-html="dataList.content"></div>
      </div>


      <!--商品购买栏-->
      <van-goods-action class="buy">

        <van-goods-action-big-btn text="立即购买" @click="onceBuy" primary class="buyNow"/>

      </van-goods-action>


    </div>


  </div>
</template>

<script>




  export default {
    name: "detail",

    data() {
      return {
ids:this.$route.params.ids,
        dataList:{}

      }
    },
    mounted() {
      this.request()

    },

    computed: {

    },

    methods: {
      onceBuy() {//立即购买
        let isBind=localStorage.getItem('isBind');
        if(parseInt(isBind)===1){
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=90&act=orderconfirm',
            type: 'post',
            data: {
              id:this.ids
            }
          }).then(res => {
            if (res.status) {
              this.$router.push({name:'orderConfirm',params:{ids:res.data.orderid}})
            }
          })
        }else{
          this.$router.push({name: 'bindAccount'});
        }

      },
      onClick(index, title) {//锚点

        switch (index) {
          case 0:
            this.$refs['out'].scrollTop = 0
            break;
          case 1:
            this.$refs['out'].scrollTop = this.$refs['presentation'].offsetTop
            break;
          case 2:
            this.$refs['out'].scrollTop = this.$refs['evaluation'].offsetTop
            break;
        }
      },
      SpecificationHandle() {
        this.$store.commit('setShowBuySpecification', true)
      },
      request() {
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=90&act=mealinfo',
          type:'post',
          data:{
            id:this.ids
          }
        }).then(res=>{
          if(res.status){
            this.dataList=res.data.meal;
          }
        });

      },

    }
  }
</script>
<style>
  .addBuy {
    border: 0px;
    border-top: 1px solid #eee;
  }
</style>
<style lang="scss" scoped>
  .detail {
    /*padding-bottom: 50px;*/
    position: relative;
  }

  .tabs {
    position: fixed;
    z-index: 100;

    width: 100%;
    height: 50px;
  }

  .wrap {
    position: relative;
    &-play {
      position: absolute;
      width: 100px;
      height: 100px;
      top: 50%;
      left: 50%;
      margin-top: -50px;
      margin-left: -50px;
      z-index: 99;
    }
    &-img {
      position: absolute;
      height: 343px;
      width: 375px;
    }
    &-video {
      position: absolute;
      z-index: -1;
      object-fit: fill;
      width: 375px;
      height: 343px;
    }
    .is_display {
      display: none;
    }
  }

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
      &-video {
      }
    }
    .title {
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
      border: 0 solid #eee !important;
    }
    .buyNow {
      background-color: #71B3FF;
      font-size: 18px;
      color: rgba(255, 255, 255, 1);
    }
    .icon {
      position: absolute;
      left: 88px;
      top: 6px;
      width: 16px;
      height: 16px;
    }
  }

  .is_collect {
    color: red;
  }

</style>
