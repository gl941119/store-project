<template>
  <div class="indentConfirme">
    <!--收货地址-->
    <com-address :address="address" v-on:click.native="goAddress"></com-address>
    <div class="main">
      <com-prodectcard :item="item" v-for="item in goodslist" :key="item.id" @refrech="request"></com-prodectcard>
      <div class="fill"></div>
      <van-cell title="美丽积分券:"  class="cell">
        <span>{{score_nex}}分</span>
      </van-cell>
      <div class="fill"></div>
      <van-cell title="美丽基金:"  class="cell">
        <span>{{share_amount}}</span>
      </van-cell>
      <div class="fill"></div>
      <van-cell title="美丽余额:"  class="cell">
        <span>{{money}}</span>
      </van-cell>
      <div class="fill"></div>
      <van-cell title="运送方式:"  class="cell">
        <span class="cell-yunfei">{{freight}}{{ishave=='1'? '元':''}}</span>
      </van-cell>
      <div class="fill"></div>
      <div class="cell">
        <span class="cell-name">买家留言:</span>
        <input type="text" class="cell-input" placeholder="选填" v-model="leave">
      </div>
      <div class="fill"></div>
    </div>
    <div class="aggregate">
      <van-cell title="商品金额" class="cell">
        <span class="cell-right">￥&nbsp;{{allprice}}</span>
      </van-cell>
      <van-cell title="积分券减免" class="cell">
        <span class="cell-right">-&nbsp;￥&nbsp;{{score_nex}}</span>
      </van-cell>
      <van-cell title="美丽基金减免" class="cell">
        <span class="cell-right">-&nbsp;￥&nbsp;{{user_share_amount}}</span>
      </van-cell>
      <van-cell title="运费" class="cell">
        <span class="cell-right">+&nbsp;￥&nbsp;{{freight}}</span>
      </van-cell>
      <div class="allPrice">
        <span class="allPrice-title">总金额：</span>
        <span class="cell-right cellRight">+&nbsp;￥&nbsp;{{allmoney}}</span>
      </div>
    </div>

    <van-button class="submitBtn" type="default" v-if="allmoney == '0'"
                style="background-color: #71B3FF;color: #FFFFFF;" v-on:click="submit">提交订单
    </van-button>
    <div v-else>
      <van-button class="submitBtn" type="primary" v-on:click="payHandle">支付</van-button>
      <van-button class="submitBtn" type="danger" v-on:click="cancleHandle">取消</van-button>
    </div>
  </div>
</template>

<script>
  import ComProdectcard from './com/com-productCard'
  import ComAddress from './com/com-address'
  import cache from '../../utils/cache'

  export default {
    name: "confirme",
    components: {
      ComProdectcard, ComAddress
    },
    data() {
      return {
        address: {
          address: undefined,
          area: undefined,
          city: undefined,
          id: undefined,
          isdefault: undefined,
          mobile: undefined,
          province: undefined,
          realname: undefined,
        },
        goodslist: [],
        share_amount: undefined,//基金
        ishave: undefined,
        freight: undefined,
        leave: undefined,//买家留言
        money: undefined,//美丽余额
        allprice: undefined,//商品金额
        score_nex: undefined,//积分券减免
        allmoney: undefined,//总金额
        user_share_amount: undefined,//美丽基金减免
      }
    },
    mounted() {


      // if (window.sessionStorage.getItem('address')) {
      //   this.address = JSON.parse(window.sessionStorage.getItem('address'))
      //   console.log(this.address)
      // } else {
      //   this.request()
      // }

      //确认订单
      // this.goodslist = JSON.parse(cache.getSession('buyCart'))
      this.request()

    },
    methods: {
      cancleHandle() {
        this.$dialog.confirm({
          title: '是否取消订单',
        }).then(() => {
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=85&act=orderstatus',
            type: 'post',
            data: {
              ordersn: window.sessionStorage.getItem('ordersn'),
              status: -1
            }
          }).then(res => {
            if (res.code === 100) {
              this.$toast.success('取消成功')
              let thia = this
              setTimeout(function () {
                thia.$router.push({name: 'index'})
              }, 1000)
            }
          })
        }).catch(() => {
          // on cancel
        });

      },
      request() {//通过订单号查询
        let addressid = undefined
        try {
          addressid = JSON.parse(window.sessionStorage.getItem('address')).id
        } catch (e) {
        }
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=orderinfo',
          type: 'post',
          data: {
            ordersn: window.sessionStorage.getItem('ordersn'),
            // address: window.sessionStorage.getItem('address'),
            addressid: addressid
          }
        }).then((res) => {
          this.goodslist = res.data.goodslist
          this.address = res.data.user
          this.score_nex = res.data.user.score_nex      //美丽
          this.share_amount = res.data.user.share_amount   //基金
          // this.amount = res.data.allrecord.amount // 美丽余额
          this.money = res.data.user.money //美丽余额
          this.ishave = res.data.freight.ishave //运费   1 元
          this.freight = res.data.freight.freight
          this.allprice = res.data.allrecord.allprice  //商品金额
          this.score_nex = res.data.allrecord.score_nex  //积分券减免
          this.allmoney = res.data.allrecord.money  //总金额
          this.user_share_amount = res.data.allrecord.share_amount
        })
      },
      submit() {//提交订单
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=payorder',
          type: 'post',
          data: {
            ordersn: window.sessionStorage.getItem('ordersn')
          }
        }).then(res => {
          if (res.code === 100) {
            this.$toast.success('提交成功')
            let thia = this
            setTimeout(function () {
              thia.$router.push({name: 'transfer'})
            }, 500)
          }
        })


      },
      goAddress() {//去收货地址
        this.$router.push({name: 'address', params: {type: '0'}})
      },
      payHandle() {
        window.location.href = this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$eid161 + '&act=payorder&ordersn=' + window.sessionStorage.getItem('ordersn')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .indentConfirme {
    background-color: #F4F4F4;
    .main {
      width: 100%;
      background-color: white;
      margin-top: 10px;
      .fill {
        margin: 0 auto;
        width: 345px;
        height: 1px;
        background: #eee;
      }
      .cell {
        width: 345px;
        height: 33px;
        line-height: 33px;
        vertical-align: middle;
        display: flex;
        justify-items: center;
        margin: 0 auto;
        font-size: 14px;
        color: rgba(51, 51, 51, 1);

        &-name {
          width: 70px;
          height: 20px;
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
        }
        &-input {
          width: 260px;
          font-size: 14px;
          color: rgba(153, 153, 153, 1);
          line-height: 20px;
          border: 0;

        }
        &-default {
          width: 36px;
          height: 17px;
          font-size: 12px;
          color: rgba(153, 153, 153, 1);

        }
        &-yunfei {
          width: 56px;
          height: 17px;
          font-size: 12px;
          color: rgba(51, 51, 51, 1);

        }
      }
    }
  }

  .submitBtn {
    width: 345px;
    height: 40px;
    display: block !important;
    margin: 18px auto 0;

  }

  .aggregate {
    width: 100%;
    margin-top: 10px;
    .cell {
      /*border: 0 !important;*/
      height: 25px !important;
      display: flex;
      align-items: center;
      padding: 0 15px !important;
      font-size: 15px;
      color: rgba(51, 51, 51, 1);
      &-right {
        /*width: 69px;*/
        height: 21px;
        font-size: 15px;
        color: rgba(231, 59, 61, 1);
      }
    }
    .allPrice {
      height: 25px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      &-title {
        margin-right: 24px;
        /*width: 60px;*/
        height: 21px;
        font-size: 15px;
        color: rgba(51, 51, 51, 1);

      }
    }
  }

  .cellRight {
    padding-right: 15px;
  }
</style>
