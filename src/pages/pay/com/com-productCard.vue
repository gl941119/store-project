<template>
  <!--购物车卡片-->
  <div class="card">
    <div class="content">
      <img :src="item.thumb" alt="">
      <div class="content-right">
        <div class="content-right-top">
          <span>{{item.title}}</span>
        </div>
        <p class="content-right-middle">
          {{item.description}}
        </p>
        <div class="content-right-bottom">
          <span class="my-price">¥{{item.marketprice}}</span>
          <van-stepper
            v-model="item.num"
            integer
            :min="1"
            :max="item.total"
            :step="1"
            @change="cheng"
            v-on:click.native.stop="saveGoodsid(item.goodsid,item)"
            class="stepper"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productCard",
    props: ['item'],
    data() {
      return {
        goodsid: undefined
      }
    },
    methods: {
      saveGoodsid(id, item) {//暂存商品id
        console.log(id, item)
        this.goodsid = id

      },
      cheng(val) {  //修改订单数量

        let goods  = [{
          id: this.item.id,
          optionid: this.item.optionid,
          num: val
        }]

        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=updateorder',
          type: 'post',
          isToast:false,
          data: {
            ordersn: window.sessionStorage.getItem('ordersn'),
            goods:JSON.stringify(goods)
          }
        }).then(res => {
          if (res.code === 100) {
            this.$emit('refrech')
          }

        })


      }
    }
  }
</script>

<style lang="scss" scoped>
  .product-card {

  }

  .submit-bar {
    margin-bottom: 50px;
  }

  .card {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 110px;
    background: rgba(255, 255, 255, 1);

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
    width: 100%;
    height: 80px;
    > img {
      float: left;

      width: 80px;
      height: 80px;
    }
    &-right {
      float: left;
      margin-left: 10px;
      width: 250px;
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
        width: 100%;
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
