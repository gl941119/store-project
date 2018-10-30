<template>
  <div class="wrap">
    <navbar :name="name"></navbar>
    <div class="search">
      <van-search placeholder="请输入搜索关键词" v-model="value" class="search-input"/>
      <van-button type="primary" class="search-btn" @click="handle">搜索</van-button>
    </div>
    <div class="result" v-if="showSearch === 1">
      <div v-if="type === '1'">
        <select-bar @emitSort="setSort"></select-bar>
        <server-card
          v-for="item in serverData"
          :key="item.id"
          :Data="item"
          ></server-card>
      </div>
      <div v-if="type === '2'">
        <select-bar @emitSort="setSort"></select-bar>
        <product-card v-for="item in productData" :key="item.id" :Data="item"></product-card>
      </div>
    </div>
    <div class="result" v-if="showSearch === 2">
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
    computed:{
      name:function (){
        return this.type === '1' ? '热门服务': '热门精华'
      }
    },
    mounted() {
      // console.log(this.$route.params.type)
      this.handle()
    },
    methods: {

      handle(){
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
            search:this.value
          },
          type: 'get'
        }).then((res) => {
          if (res.code === 100) {
              this.productData = res.data.goodslist
          }
        })
      },
      reqServer() {//服务请求
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=86&act=list',
          data: {
            sort: this.sort,
            search:this.value
          },
          type: 'get'
        }).then((res) => {
          if (res.code === 100) {
              this.serverData = res.data.servicelist
          }
        })
      },
      setSort(val) {
        console.log(val)
      this.sort = val;
      this.handle()
      },

      onSearch() {
      },
      emitSort(val) {

      },
      atOnceBuy(id){
        console.log(id)

      }
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

  .result {
    padding: 0 15px;

  }


</style>
