<template>
  <div class="recommend">
    <img class="recommend-banner" src="../../../assets/image/classfiybanner.png" alt="">
    <div class="server">
      <p class="server-title">推荐服务</p>
      <div class="server-img">
        <img v-for="item in services" :key="item.id" :src="item.simg" alt="">
      </div>
    </div>
    <div class="product">
      <p class="product-title">推荐精华</p>
      <ul>
        <li v-for="item in goods" :key="item.id">
          <img :src="item.thumb" alt="">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        goods: null,
        services: null
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=category',
          type: 'get',
          data: {

          },
        }).then((res) => {
          this.services = res.data.services
          this.goods = res.data.goods
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
      width: 60px;
      height: 21px;
      font-size: 15px;
      color: rgba(60, 60, 60, 1);
      line-height: 21px;
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
      width: 60px;
      height: 21px;
      font-size: 15px;
      color: rgba(60, 60, 60, 1);
      line-height: 21px;
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


</style>
