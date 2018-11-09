<template>
  <div class="detail" ref="out">
    <navbar :name="title"></navbar>
    <van-tabs @click="onClick" swipeable class="tabs">
      <van-tab title="商品"></van-tab>
      <van-tab title="详情"></van-tab>
      <van-tab title="评价"></van-tab>
    </van-tabs>
    <!--商品-->
    <div class="detali-product product">
      <!--banner-->

      <van-swipe :autoplay="300000000000000000" class="swipe">
        <van-swipe-item class="wrap">
          <img src="../../assets/image/play.png" class="wrap-play" :class="{is_display:is_display}" v-on:click="videoPlay"></img>
          <img :src="Data.videothumb" :class="{is_display:is_display}" alt="" class="wrap-img">
          <video :src="Data.video"
                 class="wrap-video"
                 x5-video-player-type="h5"
                 playsinline="true"
                 webkit-playsinline="true"
                 preload="auto"
                 ref="media"
          />
        </van-swipe-item>
        <van-swipe-item v-for="(item, index) in Data.thumb_url" :key="index">
          <img :src="item" alt="" class="swipe-img">
        </van-swipe-item>
      </van-swipe>
      <!--详情-->
      <div class="title">
        <div class="title-top">
          <span class="title-top-name">{{Data.title}}</span>
          <div class="title-top-right">
            <span>{{Data.collection}}人收藏</span>
            <img src="../../assets/image/icon-star.png" alt="">
          </div>
        </div>
        <p class="title-middle">
          {{Data.description}}
        </p>
        <div class="title-bottom">
          <span class="price">￥{{Data.marketprice}}</span>
          <span class="notPrice">￥{{Data.productprice}}</span>
          <span class="title-bottom-buy">{{Data.sales}}人已经购买</span>
        </div>
      </div>
      <!--已购-->
      <div class="myCell" v-on:click="SpecificationHandle" v-if="type== '1'">
        <div class="myCell-title">已选</div>
        <div class="myCell-content">{{alreadybought.join('-')||'请选择规格'}}</div>
        <div class="myCell-right">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!--运送至-->
      <div class="address-cell" v-if="type== '1'">
        <div class="address-cell-title">运费</div>
        <div class="address-cell-content">
          <!--<p>{{address}}</p>-->
          <p>{{freight}}</p>
        </div>
        <div class="address-cell-right">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!--产品详情-->
      <div class="presentation" ref="presentation">
        <p class="presentation-title">产品详情</p>
        <div class="presentation-content" v-html="Data.content"></div>
      </div>
      <!--评价-->
      <div ref="evaluation"></div>
      <ComEvaluation :good_rate="Data.good_rate" :discuss="discuss" :discussType="discussType"></ComEvaluation>
      <!--选择规格-->
      <van-actionsheet v-model="ShowSpecification" title="选择规格" v-if="type=== '1'">
        <com-buy-specification :goods_spec="goods_spec" :goods="Data"
                               :num='num'
                               v-bind:buyNum.sync="buyNum"
                               v-bind:alreadybought.sync="alreadybought"
                               v-bind:specs.sync="specs"></com-buy-specification>
      </van-actionsheet>
      <!--商品购买栏-->
      <van-goods-action class="buy" v-if="type== '1'">
        <van-goods-action-mini-btn :icon="icon" :class="{is_collect:is_collect}" @click="onClickCollect"/>
        <van-goods-action-mini-btn icon="cart" @click="goButCart"/>
        <van-goods-action-big-btn text="加入购物车" @click="addBuyCart" class="addBuy"/>
        <van-goods-action-big-btn text="立即购买" @click="onceBuy" primary class="buyNow"/>
      </van-goods-action>
      <!--服务购买栏-->
      <van-goods-action class="buy" v-else>
        <van-goods-action-mini-btn :icon="icon" :class="{is_collect:is_collect}" @click="onClickCollect"/>
        <van-goods-action-big-btn text="立即预约" @click="goAppoint" primary class="buyNow"/>
      </van-goods-action>
    </div>


  </div>
</template>

<script>

  import ComEvaluation from './page/com/com-evaluation'
  import ComBuySpecification from './page/com/com-buySpecification'


  export default {
    name: "detail",
    components: {
      ComEvaluation, ComBuySpecification
    },
    data() {
      return {
        title: this.$route.params.type == '1' ? '商品详情' : '服务详情',
        type: this.$route.params.type, // 1 商品 2服务
        id: this.$route.params.id,
        show: true,
        is_collect: false,//是否收藏
        specs: [],//购买规格id
        buyNum: 1,//购买数量
        alreadybought: [],//购买商品名称
        num: undefined,//规格层数
        freight: '免运费',
        icon: 'like-o',
        optionid: undefined,
        Data: {
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
        goods_spec: null,
        discuss: {//评论
          card_id: undefined,
          content: undefined,
          createtime: undefined,
          imgs: null,
          level_img: undefined,
          nick: undefined,
          score: undefined
        },
        discussType: 0,
        address: undefined,//收货地址
        goodsData: null,
        SpecificationData: null,
        is_display:false,//是否隐藏

      }
    },
    mounted() {
      this.request()


      console.log(this.$refs['media'])
      let media = this.$refs['media']


      media.addEventListener('play', function () {
        console.log('播放')
        media.addEventListener('pause', function () {
          console.log('停止')
        });
      });


    },
    watch: {
      specs: function (val) {
        this.countFreight()//计算运费
      }
    },
    computed: {
      ShowSpecification: {//show商品规格栏
        set: function (val) {
          this.$store.commit('setShowBuySpecification', false)
        },
        get: function () {
          return this.$store.state.ShowBuySpecification
        }
      }
    },
    methods: {
      videoPlay(){
        this.$refs['media'].play()
        this.is_display = true
      },
      onClickCollect() {//加入收藏
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=87&act=collection',
          type: 'get',
          data: {
            type: this.type,
            id: this.id
          }
        }).then(res => {
          if (res.code === 100) {
            this.is_collect = !this.is_collect
          }
        })
      },
      goButCart() {//跳转购物车
        this.$router.push({name: 'buyCart'})
      },
      addBuyCart() {//加入购物车
        if (this.specs.length === this.num) {//是否选择规格
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=85&act=mycart&id=1',
            type: 'post',
            data: {
              op: 'add',
              id: this.id,
              total: this.buyNum,
              specs: this.specs.join('_')
            }
          }).then(res => {
            if (res.code === 100) {
              this.$toast.success('添加成功')
              this.$store.commit('setShowBuySpecification', false)//关闭购买栏
            }
          })
        } else {
          this.$store.commit('setShowBuySpecification', true)
        }
      },
      onceBuy() {//立即购买
        if (this.specs.length === this.num) {//是否选择规格
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=85&act=orderconfirm',
            type: 'post',
            data: {
              goods: JSON.stringify([{
                id: this.id,
                optionid: this.specs.join('_'),
                num: this.buyNum
              }])
            }
          }).then(res => {
            if (res.code === 100) {
              window.sessionStorage.setItem('ordersn', res.data.ordersn)
              this.$router.push({name: 'indentConfirme'})
            }
          })
        } else {
          this.$store.commit('setShowBuySpecification', true)
        }
      },
      goAppoint() {//立即预约
        this.$router.push({name: 'appoint', params: {sid: this.id}})

      },
      onClickMiniBtn() {

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
        let url
        if (this.type == '1') { // 商品列表
          url = 'app/index.php?i=1&c=entry&eid=85&act=goods'
        } else {
          url = 'app/index.php?i=1&c=entry&eid=86&act=service'
        }
        this.$request({
          url: url,
          type: 'get',
          data: {
            id: this.$route.params.id
          }
        }).then((res) => {
          if (res.code === 100) {

            if (this.type == '2') {//服务
              this.Data = res.data.service
              this.is_collect = res.data.collection === 0 ? false : true; //是否收藏
            } else if (this.type == '1') {//商品
              this.Data = res.data.goods
              this.goods_spec = res.data.goods_spec //容量
              // this.alreadybought.length === 0 ? '请选择规格 := `${res.data.goods.title},1瓶` //已购
              this.address = res.data.address
              this.num = res.data.num //规格数量
              this.is_collect = res.data.collection === 0 ? false : true; //是否收藏
            }
            // console.log(res.data.disucss.)
            if (res.data.discuss.length === 0) {
              this.discussType = 0
            } else {
              this.discussType = 1
              this.discuss = res.data.discuss[0] //评论
            }


          }
        })
      },
      countFreight() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=freight',
          type: 'post',
          data: {
            id: this.id,
            specs: this.specs.join('_')
          }
        }).then(res => {
          if (res.code === 100) {
            if (res.data.freight.ishave) {
              this.freight = '￥' + res.data.freight.freight + '元'
            } else {
              this.freight = res.data.freight.freight
            }
          }
        })

      },
      onFocus() {
        // console.log(123)
      }
    }
  }
</script>

<style lang="scss" scoped>
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
    margin-top: 44px;
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
    .is_display{
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
        > p {
          line-height: 30px;
        }
        > > > img {
          width: 100%;
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
