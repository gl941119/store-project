<template>
  <div class="wrap">
    <div class="search">
      <div class="search-input">
        <van-icon name="search" class="icon"/>
        <input type="text" v-model="value" placeholder="请输入关键字" class="input">
      </div>
      <van-button type="primary" class="search-btn" @click="handle">搜索</van-button>
    </div>
    <div class="result" v-if="showSearch === 1">
      <select-bar @emitSort="setSort"></select-bar>
      <div v-if="type === '1'">
        <server-card
          v-for="item in serverData"
          :key="item.id"
          :Data="item"
        ></server-card>
      </div>
      <div v-if="type === '2'">
        <product-card v-for="item in productData" :key="item.id" :Data="item"></product-card>
      </div>
    </div>
    <div class="notresult" v-show="showSearch === 2">
      <img src="../../assets/image/search.png" alt="" class="noResultImg">
      <p>您寻找的商品还没上架</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {
        type: this.$route.params.type,
        showAction: true,
        bgColor: '#F4F4F4',
        sort: 1,
        showSearch: 1, //0 1 2
        serverData: null,
        productData: null,
        reqData: null,
        value: undefined,
      }
    },
    computed: {
      name: function () {
        return this.type === '1' ? '热门服务' : '热门精华'
      }
    },
    watch: {
      value: function (val) {//搜索栏为空触发搜索
        if (!val) {
          this.handle()
        }
      }
    },
    created() {
      this.$store.commit('setSub_hover', 1)
    },
    mounted() {
      this.handle()
      document.title = this.name
    },
    methods: {
      handle() {
        if (this.type === '1') {//服务
          this.reqServer()
        } else if (this.type === '2') {//商品
          this.reqProduct()
        }
      },
      reqProduct() {//商品请求
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=list',
          data: {
            sort: this.sort,
            search: this.value
          },
          type: 'get'
        }).then((res) => {
          if (res.code === 100) {
            this.productData = res.data.goodslist
            if (res.data.goodslist) {
              this.showSearch = 1
            } else {
              this.showSearch = 2
            }
          }
        })
      },
      reqServer() {//服务请求
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=86&act=list',
          data: {
            sort: this.sort,
            search: this.value
          },
          type: 'get'
        }).then((res) => {
          if (res.code === 100) {
            this.serverData = res.data.servicelist
            if (res.data.servicelist) {
              this.showSearch = 1
            } else {
              this.showSearch = 2
            }
          }
        })
      },
      setSort(val) {
        this.sort = val;
        this.handle()
      },

      onSearch() {
      },
      emitSort(val) {
      },
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    background-color: white;
  }

  .search {
    padding: 5px 15px;
    width: 375px;
    height: 40px;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    &-input {
      width: 283px;
      height: 30px;
      background: rgba(244, 244, 244, 1);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .icon {
        font-size: 15px;
        margin-left: 10px;
      }
      .input {
        margin-left: 8px;
        height: 100%;
        flex: 1;
        background: rgba(244, 244, 244, 1);
        font-size: 12px;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 17px;
      }
      .close {

        font-size: 12px;
        margin-right: 7px;
      }
    }
    &-btn {
      margin-left: 10px;
      width: 52px;
      height: 30px;
      background: rgba(113, 179, 255, 1);
      border-radius: 4px;
      font-size: 15px;
      color: rgba(255, 255, 255, 1);
      line-height: 30px;
      padding: 0 0.1rem;
      border: 1px solid #ffffff;
    }
  }

  .notresult {
    width: 100%;
    height: 300px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    > img {
      width: 124px;
      height: 124px;
    }
    > p {
      width: 150px;
      height: 21px;
      font-size: 15px;
      font-family: PingFangSC-Regular;
      color: rgba(167, 167, 167, 1);
      line-height: 21px;
    }

  }
</style>
