<template>
  <div class="detail" ref="out">
    <van-tabs @click="onClick" swipeable class="tabs">
      <van-tab title="商品"></van-tab>
      <van-tab title="详情"></van-tab>
      <van-tab title="评价"></van-tab>
    </van-tabs>
    <!--商品-->
    <div class="detali-product product">
      <!--banner-->
      <van-swipe :autoplay="300000000000000000" class="swipe">
        <van-swipe-item class="wrap" v-if="Data.video">
          <img src="../../assets/image/play.png" class="wrap-play" :class="{is_display:show_play}"
               v-on:click="videoPlay"></img>
          <img :src="Data.videothumb" :class="{is_display:show_img}" alt="" class="wrap-img">
          <video :src="Data.video"
                 class="wrap-video"
                 x5-video-player-type="h5"
                 playsinline="true"
                 webkit-playsinline="true"
                 preload="auto"
                 ref="media"
                 v-on:click="videoStop"
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
      <!--产品详情-->
      <div class="presentation" ref="presentation">
        <p class="presentation-title">产品详情</p>
        <div class="presentation-content" v-html="Data.content"></div>
      </div>
      <!--评价-->
      <div ref="evaluation"></div>
      <ComEvaluation :good_rate="Data.good_rate" :discuss="discuss"></ComEvaluation>
      <!--选择规格-->
      <van-actionsheet v-model="ShowSpecification" title="选择规格" v-if="type=== '1'">
        <com-buy-specification :goods_spec="goods_spec"
                               :num='num'
                               v-bind:goods.sync="Data"
                               v-bind:buyNum.sync="buyNum"
                               v-bind:alreadybought.sync="alreadybought"
                               v-bind:specs.sync="specs"
                               v-bind:status.sync="status"
                               v-bind:cart_num.sync="cart_num"
        ></com-buy-specification>
      </van-actionsheet>
      <!--商品购买栏-->
      <van-goods-action class="buy" v-if="type== '1'">
        <van-goods-action-mini-btn icon="like" :class="{is_collect:is_collect}" @click="onClickCollect"/>
        <van-goods-action-mini-btn icon="cart" @click="goButCart"/>
        <van-goods-action-big-btn text="加入购物车" @click="addBuyCart" class="addBuy"/>
        <van-goods-action-big-btn text="立即购买" @click="onceBuy" primary class="buyNow"/>
        <img class="icon" src='../../assets/image/1.png' v-if="cart_num== '1'" alt="">
        <img class="icon" src='../../assets/image/2.png' v-if="cart_num== '2'" alt="">
        <img class="icon" src='../../assets/image/3.png' v-if="cart_num== '3'" alt="">
        <img class="icon" src='../../assets/image/4.png' v-if="cart_num== '4'" alt="">
        <img class="icon" src='../../assets/image/5.png' v-if="cart_num== '5'" alt="">
        <img class="icon" src='../../assets/image/6.png' v-if="cart_num== '6'" alt="">
        <img class="icon" src='../../assets/image/7.png' v-if="cart_num== '7'" alt="">
        <img class="icon" src='../../assets/image/8.png' v-if="cart_num== '8'" alt="">
        <img class="icon" src='../../assets/image/9.png' v-if="cart_num== '9'" alt="">
        <img class="icon" src='../../assets/image/10.png' v-if="cart_num >= '10'" alt="">
      </van-goods-action>
      <!--服务购买栏-->
      <van-goods-action class="buy" v-else>
        <van-goods-action-mini-btn icon="like" :class="{is_collect:is_collect}" @click="onClickCollect"/>
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
        // freight: '免运费',
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
        // discuss: {//评论
        //   card_id: undefined,
        //   content: undefined,
        //   createtime: undefined,
        //   imgs: null,
        //   level_img: undefined,
        //   nick: undefined,
        //   score: undefined
        // },
        discuss: [],//评论
        address: undefined,//收货地址
        goodsData: null,
        SpecificationData: null,
        show_play: false,//是否隐藏播放按钮
        show_img: false,//是否隐藏第一帧图像
        status: undefined,//购买栏 确定按钮状态 '1' 加入购物车  '2' 立即购买
        cart_num: undefined,//小图标
      }
    },
    mounted() {
      this.request()
      document.title = this.title

    },

    computed: {
      ShowSpecification: {//show商品规格栏
        set: function (val) {
          this.$store.commit('setShowBuySpecification', false)
        },
        get: function () {
          return this.$store.state.ShowBuySpecification
        }
      },
    },

    methods: {
      onClickCollect() {//加入收藏
        if (this.is_collect) {
          this.$dialog.confirm({
            title: '是否取消收藏'
          }).then(() => {
            this.cancleCollect()
          }).catch(() => {
            // on cancel
          });
        } else {
          this.cancleCollect()
        }

      },
      cancleCollect() {//收藏请求
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=87&act=collection',
          type: 'get',
          data: {
            type: this.type,
            id: this.id
          }
        }).then(res => {
          if (res.code === 100) {
            if (this.is_collect) {//-1
              this.Data.collection = parseInt(this.Data.collection) - 1
            } else {
              this.Data.collection = parseInt(this.Data.collection) + 1
              this.$toast.success('收藏成功')
            }
            this.is_collect = !this.is_collect
          }
        })
      },
      goButCart() {//跳转购物车
        this.$router.push({name: 'buyCart'})
      },
      addBuyCart() {//加入购物车
        if (window.sessionStorage.getItem('is_bind') === '0') {//未绑定
          this.$router.push({name: 'bindAccount'});
          return
        }
        if (this.specs.length === this.num) {//已经选择规格
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
              this.cart_num = res.data.cart_num
              this.$toast.success('添加成功')
              this.$store.commit('setShowBuySpecification', false)//关闭购买栏
            } else {
              this.$toast.fail('添加失败')
            }
          })
        } else { //未选择
          this.status = '1' //加入购物车状态
          this.$store.commit('setShowBuySpecification', true)
        }
      },
      onceBuy() {//立即购买
        let a=this.specs.length +'==='+ this.num
        console.log(a)
        if (window.sessionStorage.getItem('is_bind') === '0') {//未绑定账号
          this.$router.push({name: 'bindAccount'});
          return
        }
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
        } else {//未选择
          this.status = '2' // 立即购买状态
            // this.$set(this.status,'2')

          this.$store.commit('setShowBuySpecification', true)
        }
      },
      goAppoint() {//立即预约
        if (window.sessionStorage.getItem('is_bind') === '0') {//未绑定账号
          this.$router.push({name: 'bindAccount'});
          return
        }
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
              this.cart_num = res.data.cart_num
            }
            this.discuss = res.data.discuss // 评论

          }
        })
      },

      onFocus() {
        // console.log(123)
      },
      videoStop() {
        this.$refs['media'].pause()
        this.show_play = false
      },
      videoPlay() {
        this.$refs['media'].play()
        this.show_play = true
        this.show_img = true
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

    }
    &-content {
      margin-left: 10px;
      flex: 1;
      height: 100%;
      font-size: 14px;
      color: rgba(51, 51, 51, 1);

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
