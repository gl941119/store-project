<template>
  <div class="buyCart">

    <!--购物车卡片-->
    <div class="message" v-if="!goodslist.length">
      <img src="../../assets/image/buyCart.png" alt="">
      <p>购物车空空如也</p>
      <van-button type="default" class="btn" v-on:click="goIndex">去逛逛吧</van-button>
    </div>
    <div class="card" v-for="item in goodslist" :key="item.id" v-else>
      <van-checkbox v-model="item.checked" class="checkbox" v-on:click.native="refreshPrice"></van-checkbox>
      <div class="content" v-on:click.stop="goDetail(item.goodsid)">
        <img :src="item.thumb" alt="">
        <div class="content-right">
          <div class="content-right-top">
            <span>{{item.title}}</span>
            <img src="../../assets/image/删除.png" alt="" v-on:click.stop="removeProduct(item.id)">
          </div>
          <p class="content-right-middle">
            {{item.description}}
          </p>
          <div class="content-right-bottom">
            <span class="my-price">¥{{item.marketprice}}</span>
            <van-stepper
              v-model="item.total"
              integer
              :min="1"
              :max="item.stock"
              :step="1"
              @change="cheng"
              v-on:click.native.stop="saveId(item.goodsid,item.optionid,item.id)"
              class="stepper"
            />
          </div>
        </div>
      </div>
    </div>
    <!--提交栏-->
    <van-submit-bar
      v-if="goodslist.length"
      :price="price"
      button-text="提交订单"
      @submit="onSubmit"
      class="submit-bar"
      :loading="loading"
    >
      <van-checkbox v-model="checked" @change="changeCheckbox" class="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
  // import ProductCard from './com/productCard'
  import cache from '../../utils/cache'

  export default {
    name: "index",
    components: {
      // ProductCard
    },
    data() {
      return {
        checked: false,
        value: 1,
        goodslist: [],
        goodsid: undefined,
        optionid: undefined,
        id: undefined,
        price: 0,
        loading: false
      }
    },
    mounted() {
      this.$store.commit('setHover',3)
      this.request()
    },
    methods: {
      goIndex() {
        this.$router.push({name: 'index'})
      },
      goDetail(goodsid) {
        this.$router.push({name: 'detail', params: {type: '1', id: goodsid}})
      },
      onSubmit() {//提交订单
        let goodslist = this.goodslist.filter(item => {
          return item.checked === true
        })
        // 判定勾选
        if (goodslist.length === 0) {
          this.$toast.fail('请选择商品')
          return;
        }
        //购物车订单存本地
        cache.setSession('buyCart', goodslist)

        //生成订单
        this.confirmIndent(goodslist)
      },
      confirmIndent(goodslist) {//生成订单
        goodslist.forEach((item) => {//数据整理
          item['num'] = item['total']
          item['id'] = item['goodsid']
        })
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=orderconfirm',
          type: 'post',
          data: {
            goods: JSON.stringify(goodslist)
          }
        }).then((res) => {
          if (res.code === 100) {
            window.sessionStorage.setItem('ordersn', res.data.ordersn)//保存订单号
            this.$router.push({name: 'indentConfirme', params: {ordersn: res.data.ordersn}})
          }

        })
      },
      changeCheckbox(val) {//点击全选
        this.goodslist.forEach(item => {
          item.checked = val
        })
        this.refreshPrice()
      },
      clickChecked() {
        this.refreshPrice()
      },
      saveId(goodsid, optionid, id) {
        console.log(goodsid, optionid, id)
        this.goodsid = goodsid
        this.optionid = optionid
        this.id = id
      },
      cheng(val) {//修改商品数量
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=mycart',
          type: 'post',
          data: {
            op: 'update',
            id: this.goodsid,
            optionid: this.optionid,
            total: val
          }
        }).then((res) => {
          if (res.code === 100) {
            this.refreshPrice()
          }
        })
      },
      refreshPrice() {//计算价格
        let price = 0;
        this.goodslist.forEach(item => {
          if (item.checked === true) {
            price += parseFloat(item.marketprice) * parseFloat(item.total)
          }
        })
        this.price = price * 100
      },
      removeProduct(id) {//删除商品
        this.$dialog.confirm({
          title: '是否删除商品？',
        }).then(() => {
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=85&act=mycart',
            type: 'post',
            data: {
              op: 'remove',
              id: id
            }
          }).then((res) => {
            if (res.code === 100) {
              let goodslist = this.goodslist.filter(item => {
                return item.id != id
              })
              this.goodslist = goodslist
              this.$toast.success('删除成功')
            }
          })
        }).catch(() => {
          // on cancel
        });
      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=mycart',
          type: 'get',
        }).then((res) => {
          res.data.goodslist.forEach(item => {
            item['checked'] = false
          })
          this.goodslist = res.data.goodslist
        })
      },

    }
  }
</script>

<style lang="scss" scoped>
  .product-card {

  }

  .submit-bar {
    margin-bottom: 50px;
  }

  .message {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 88px;
      height: 70px;

    }
    > P {
      margin-top: 12px;

      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(198, 197, 197, 1);
      line-height: 20px;
    }
    .btn {
      margin-top: 32px;
      background-color: #C2DEFE;
      width: 100px;
      height: 30px;
      line-height: 30px;
      color: white;
      font-size: 14px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);

    }
  }

  .card {
    padding: 15px 10px;
    margin: 10px auto 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 345px;
    height: 110px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 16px 0px rgba(229, 229, 229, 0.5);
    border-radius: 4px;
    /*width:345px;*/
    /*height:110px;*/

  }

  .checkbox {
    font-size: 25px;
  }

  .checkAll {
    margin-left: 25px;
    font-size: 15px;
    color: rgba(51, 51, 51, 1);
    line-height: 21px;
  }

  .content {
    width: 290px;
    height: 80px;
    > img {
      width: 80px;
      height: 80px;
    }
    &-right {
      float: right;
      width: 200px;
      &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span {
          width: 138px;
          height: 23px;
          font-size: 16px;
          color: rgba(72, 72, 72, 1);
          line-height: 23px;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        > img {
          width: 11px;
          height: 12px;

        }
      }
      &-middle {
        margin-top: 1px;
        width: 130px;
        height: 17px;
        font-size: 12px;
        color: rgba(153, 153, 153, 1);
        line-height: 17px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 14px;
        > span {
          width: 43px;
          height: 21px;
          font-size: 15px;
          font-weight: 500;
          color: rgba(222, 25, 25, 1);
          line-height: 21px;
        }
        .stepper {

        }

      }
    }
  }

</style>
