<template>
  <div class="indentConfirme">
    <navbar :name="'订单确认'"></navbar>
    <com-address :address="address"></com-address>
    <div class="main">
      <com-prodectcard :item="item" v-for="item in goodslist" :key="item.id" style=""></com-prodectcard>
      <div class="fill"></div>
      <van-cell title="美丽积分券:" is-link class="cell">
        <span class="cell-default">无可用</span>
      </van-cell>
      <div class="fill"></div>
      <van-cell title="美丽基金:" is-link class="cell">
        <span>内容33</span>
      </van-cell>
      <div class="fill"></div>
      <van-cell title="美丽余额:" is-link class="cell">
        <span>内容33</span>
      </van-cell>
      <div class="fill"></div>
      <van-cell title="运送方式:" is-link class="cell">
        <span class="cell-yunfei">自取¥0.00</span>
      </van-cell>
      <div class="fill"></div>
      <div class="cell">
        <span class="cell-name">买家留言:</span>
        <input type="text" class="cell-input" placeholder="选填">
      </div>
      <div class="fill"></div>
    </div>
    <div class="aggregate">
      <van-cell title="商品金额" class="cell">
        <span class="cell-right">￥&nbsp;1111</span>
      </van-cell>
      <van-cell title="积分券减免" class="cell">
        <span class="cell-right">-&nbsp;￥&nbsp;11</span>
      </van-cell>
      <van-cell title="运费" class="cell">
        <span class="cell-right">+&nbsp;￥&nbsp;11</span>
      </van-cell>
      <div class="allPrice">
        <span class="allPrice-title">总金额：</span>
        <span class="cell-right">+&nbsp;￥&nbsp;11</span>
      </div>
      <van-button class="submitBtn" type="primary">主要按钮</van-button>
      <van-button class="submitBtn" type="danger">危险按钮</van-button>
      <van-button class="submitBtn" type="default">默认按钮</van-button>
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
        address: undefined,
        goodslist: []
      }
    },
    mounted() {
      this.request()
      this.goodslist = JSON.parse(cache.getSession('buyCart'))
      // console.log(JSON.parse(cache.getSession('buyCart')))
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=addresslist',
          type: 'get'
        }).then((res) => {
          let list = []
          list.push(res.data.list[0])
          this.address = list
        })
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
        font-size:14px;
        color:rgba(51,51,51,1);

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

  .aggregate {

    width: 100%;
    margin-top: 10px;
    .cell {
      /*border: 0 !important;*/
      height: 33px;
      display: flex;
      align-items: center;
      padding: 0 15px !important;
      font-size: 15px;
      color: rgba(51, 51, 51, 1);
      line-height: 21px;
      &-right {
        width: 69px;
        height: 21px;
        font-size: 15px;
        color: rgba(231, 59, 61, 1);

      }
    }
    .allPrice {
      height: 33px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      &-title {
        margin-right: 24px;
        width: 60px;
        height: 21px;
        font-size: 15px;
        color: rgba(51, 51, 51, 1);

      }
    }
  }

  .submitBtn {
    width: 345px;
    height: 40px;
    display: block !important;
    margin: 18px auto 0;

  }

</style>
