<template>
  <div class="card">
    <span class="card-status" v-if="this.good.goods[0].is_send=='0'">留店</span>
    <span class="card-status" v-else>{{status}}</span>
    <div class="card-top"
         v-for="item in good.goods"
         :key="item.goodsid"
    >
      <img :src="item.thumb" alt="" class="card-top-img">
      <div class="card-top-content">
        <span class="card-top-content-title">{{item.title}}</span>
        <div class="card-top-content-ml">
          <div>{{item.optionname}}</div>
          <div>X{{item.total}}</div>
        </div>
        <p class="my-price price">¥{{item.price}}</p>
      </div>
    </div>
    <div class="card-middle">
      共一件商品 合计：{{good.orderprice}}元
    </div>
    <div class="card-bottom">
      <!--<van-icon name="pending-evaluate" class="card-bottom-icon"/>-->
      <!--<span class="card-bottom-connection" v-on:click.stop="gobaidu">联系卖家</span>-->
      <van-button round plain type="default" class="confirmBtn"
                  v-if="good.status== '0'"
                  v-on:click.stop="goindentConfirme(good.goods[0].ordersn)"
      >
        去付款
      </van-button>
      <van-button round plain type="default" class="confirmBtn"
                  v-if="good.status== '2'||good.status== '1'"
                  v-on:click.stop="confirmHandle(good.goods[0].ordersn)">
        确认收货
      </van-button>

      <van-button round plain type="default" class="cancelBtn"
                  v-if="good.status== '0'"
                  v-on:click.stop="cancelHandle(good.goods[0].ordersn)">
        取消订单
      </van-button>

      <van-button round plain type="default" class="cancelBtn" v-if="good.status== '2'"
                  v-on:click.stop="logisticsHandle(good.goods[0].ordersn)"


      >
        查看物流
      </van-button>

      <van-button round plain type="default" class="confirmBtn"
                  v-if="good.status== '3'"
                  v-on:click.stop="goAppraise(good.goods[0].ordersn)"
      >
        评价
      </van-button>
    </div>
  </div>
</template>

<script>
  import cache from '../../../../../utils/cache'

  export default {
    name: "com-card",
    props: ['good'],
    data() {
      return {}
    },
    computed: {
      status: function () {

        switch (this.good.status) {
          case '0':
            return '待付款';
            break
          case '1':
            return '待发货';
            break
          case '2':
            return '待发货';
            break
          case '3':
            return '待评价';
            break
          case '4':
            return '交易完成';
            break
          default:
            return undefined
        }
      }
    },
    methods: {
      goindentConfirme(ordersn) {
        this.$dialog.confirm({
          title: '是否跳转付款页面？',
        }).then(() => {
          window.sessionStorage.setItem('ordersn', ordersn)
          this.$router.push({name: 'indentConfirme'})
        }).catch(() => {
          // on cancel
        });
      },
      logisticsHandle(ordersn) {//查看物流
        console.log(ordersn)
        this.$router.push({name: "logistics", params: {ordersn: ordersn,status:'2'}})

      },
      gobaidu() {
        this.$baidu()
      },
      confirmHandle(id) {//确认收货
        this.$dialog.confirm({
          title: '是否确认收货?',
        }).then(() => {
          this.reqChange(id, 3)
        }).catch(() => {
          // on cancel
        });

      },
      cancelHandle(id) {//取消订单
        this.$dialog.confirm({
          title: '是否取消订单',
        }).then(() => {
          this.reqChange(id, -1)
        }).catch(() => {
          // on cancel
        });
      },
      reqChange(id, staus) {//修改订单状态
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=orderstatus',
          type: 'get',
          data: {
            ordersn: id,
            status: staus
          }
        }).then((res) => {
          if (res.code === 100) {
            if (staus === -1) {
              this.$toast.success('取消成功')
              let thia = this
              setTimeout(function () {
                thia.$emit('refresh')
              }, 1000)
            }
            if (staus === 3) {
              this.$toast.success('收货成功')
              let thia = this
              setTimeout(function () {
                thia.$emit('refresh')
              }, 1000)
            }
          }
        })

      },
      goAppraise(id) {//跳转评价
        let arr = []
        this.good.goods.forEach((item) => {
          let obj = {
            thumb: item.thumb,
            goodsid: item.goodsid,
            "content": undefined,
            "score": 4,
            "tip": undefined,//匿名
            videos: [],
            imgs: []
          }
          arr.push(obj)
        })
        cache.setSession('appraise', arr)
        console.log(arr)
        this.$router.push({name: 'appraise', params: {id: id}})//id 订单号id
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px auto 0;
    padding: 10px 10px;
    width: 345px;
    /*height: 163px;*/
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 11px 0px rgba(211, 211, 211, 0.5);
    border-radius: 4px;
    position: relative;
    &-status {
      position: absolute;
      right: 10px;
      top: 15px;
      font-size: 12px;
      color: rgba(233, 58, 61, 1);
    }
    &-top {
      display: flex;
      justify-content: space-between;
      /*margin-bottom: 7px;*/
      &-img {
        width: 75px;
        height: 75px;

      }
      &-content {
        width: 236px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-title {
          width: 180px;
          height: 23px;
          font-size: 16px;
          color: rgba(51, 51, 51, 1);
          line-height: 23px;
          font-family: PingFangSC-Regular;
          display: block;
          white-space: normal;
          text-overflow: ellipsis;
        }
        &-ml {
          /*margin-top: 7px;*/
          font-size: 12px;
          color: rgba(153, 153, 153, 1);
          line-height: 17px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          /*display: block;*/
          /*white-space: nowrap;*/
          /*overflow: hidden;*/
          /*text-overflow: ellipsis;*/

        }
        .price {
          font-size: 16px;
          font-weight: 500;
          color: rgba(233, 58, 61, 1);
          line-height: 23px;
        }

      }
    }
    &-middle {
      /*height: 42px;*/
      /*line-height: 40px;*/
      margin: 7px 0;
      text-align: right;
      font-size: 14px;
      color: rgba(51, 51, 51, 1);
    }
    &-bottom {
      height: 30px;
      overflow: hidden;
      &-icon {
        float: left;
        font-size: 16px;
        line-height: 27px;
        color: #979797;
      }
      &-connection {
        float: left;
        margin-left: 8px;
        font-size: 14px;
        color: rgba(151, 151, 151, 1);
        line-height: 27px;
      }
      .cancelBtn {
        margin-top: 1px;
        float: right;
        margin-right: 8px;
        width: 79px;
        height: 27px;
        line-height: 27px !important;
        background: rgba(255, 255, 255, 1);
        border-radius: 13px;
        border: 1px solid;
        font-size: 14px;
        color: rgba(151, 151, 151, 1);

      }
      .confirmBtn {
        margin-top: 1px;
        float: right;
        width: 79px;
        height: 27px;
        line-height: 27px;
        border-radius: 13px;
        border: 1px solid;
        font-size: 14px;
        color: rgba(233, 58, 61, 1);

      }
    }

  }
</style>
