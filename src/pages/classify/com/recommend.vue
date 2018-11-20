<template>
  <div class="recommend">
    <img class="recommend-banner" :src="adv.bimg" alt="">
    <div class="server">
      <div class="server-title">
        <span class="server-title-name">推荐服务</span>
        <span class="server-title-more" v-on:click="routerPush('/subscribe/1')">查看更多</span>
        <van-icon name="arrow" class="server-title-icon"></van-icon>
      </div>
      <div class="server-img">
        <img v-for="item in services" :key="item.id" :src="item.simg" alt=""
             v-on:click="routerPush('/detail/2/'+item.id)">
      </div>
    </div>
    <div class="product">
      <div class="product-title">
        <span class="product-title-name">推荐精华</span>
        <span class="product-title-more" v-on:click="routerPush('/subscribe/2')">查看更多</span>
        <van-icon name="arrow" class="product-title-icon"></van-icon>
      </div>
      <div class="product_list">
        <div class="product_list_item" v-for="item in goods" :key="item.id">
          <img :src="item.thumb" alt=""
               v-on:click="routerPush('/detail/1/'+item.id)">
          <p>{{item.title}}</p>
        </div>
        <div  class="product_list_item" >
          <img src="../../../assets/image/t1.jpg" >
          <p>美白精华液</p>
        </div>
        <div  class="product_list_item" >
          <img src="../../../assets/image/t1.jpg" >
          <p>美白精华液</p>
        </div>
        <div  class="product_list_item" >
          <img src="../../../assets/image/t1.jpg" >
          <p>美白精华液</p>
        </div>
        <div  class="product_list_item" >
          <img src="../../../assets/image/t1.jpg" >
          <p>美白精华液</p>
        </div>
        <div  class="product_list_item" >
          <img src="../../../assets/image/t1.jpg" >
          <p>美白精华液</p>
        </div>
        <div  class="product_list_item" >
          <img src="../../../assets/image/t1.jpg" >
          <p>美白精华液</p>
        </div>
        <div  class="product_list_item" >
          <img src="../../../assets/image/t1.jpg" >
          <p>美白精华液</p>
        </div>
        <div  class="product_list_item" >
          <img src="../../../assets/image/t1.jpg" >
          <p>美白精华液</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        goods: null,
        services: null,
        adv: {
          bimg: undefined,
          link: undefined,
          name: undefined
        }
      }
    },
    mounted() {
      console.log(123)
      this.$store.commit('setClassify_hover','-1')
      this.request()
    },
    methods: {
      routerPush(url) {
        this.$router.push({path: url})
      },

      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=category',
          type: 'get',

        }).then((res) => {
          console.log(res)
          this.services = res.data.services
          this.goods = res.data.goods
          this.adv = res.data.adv
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recommend {
    width: 295px;
    padding: 16px 15px 0 16px;
    &-banner {
      width: 264px;
      height: 95px;
    }
  }

  .server {
    margin-top: 20px;
    &-title {
      width: 100%;
      height: 21px;
      font-size: 15px;
      color: rgba(60, 60, 60, 1);

      display: flex;
      justify-content: flex-start;
      align-items: center;
      &-name {
        flex: 1;
      }
      &-more {
        font-size: 13px;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
      }
      &-icon {
        margin-top: 1px;
        font-size: 9px;
      }
    }
    &-img {
      margin-top: 7px;
      overflow: hidden;
      > img {
        float: left;
        margin-left: 8px;
        width: 127px;
        height: 90px;
      }
      img:first-child {
        margin-left: 0;
      }
    }
  }

  .product {
    margin-top: 17px;
    &-title {
      width: 100%;
      height: 21px;
      font-size: 15px;
      color: rgba(60, 60, 60, 1);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &-name {
        flex: 1;
      }
      &-more {
        font-size: 13px;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
      }
      &-icon {
        margin-top: 1px;
        font-size: 9px;
      }
    }
    > ul {
      margin-top: 7px;
      display: flex;
      justify-content: space-between;
      > li {
        width: 80px;
        height: 93px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        > img {
          width: 75px;
          height: 69px;
        }
        > p {
          text-align: center;
          width: 80px;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 12px;
          color: rgba(60, 60, 60, 1);
          line-height: 17px;
        }
      }
    }

  }
.product_list{
  display: flex;
  align-items:center;
  justify-content: space-between;
  -webkit-flex-wrap:wrap;
  flex-wrap:wrap;
  padding-top: 7px;
}
.product_list_item{
  width: 80px;
  height: 93px;
}
  .product_list_item img{
    width: 75px;
    height: 69px;
  }
  .product_list_item p{
    height: 25px;
    line-height: 25px;
    overflow: hidden;
  }
</style>
