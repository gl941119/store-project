<template>
  <div class="wrap">
    <navbar :name="'搜索栏'"></navbar>

    <div class="search">
      <van-search placeholder="请输入搜索关键词" v-model="value" class="search-input"/>
      <van-button type="primary" class="search-btn" @click="request()">搜索</van-button>
    </div>

    <div class="result" v-if="showSearch == 0">
      <div class="result-top">
        <span>搜索历史</span>
        <img src="../../assets/image/删除.png" alt="">
      </div>
      <div class="result-bottom">
        <div class="searchHistory" v-for="item in searchHistory">{{item.name}}</div>
      </div>
    </div>
    <div class="result" v-if="showSearch == 1">
      <select-bar @emitSort="request()"></select-bar>
      <product-card v-for="item in searchResult" :key="item.id" :Data="item"></product-card>
    </div>
    <div class="result" v-if="showSearch == 2">
          <img src="../../assets/image/search.png" alt="" class="noResultImg">
          <p >您寻找的商品还没上架</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {
        value: undefined,
        showAction: true,
        bgColor: '#F4F4F4',
        sort: 1,
        showSearch: 0, //0 1 2
        searchHistory: [{name: '滋润霜'}, {name: '面膜'}],
        searchResult: null
      }
    },
    mounted() {

    },
    methods: {
      request(val = null) {
        if (!this.value) return;
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=87&act=search',
          data: {
            sort: val,
            title: this.value,
          },
          type: 'get'
        }).then((res) => {
          if (res.code === 100) {
            if (res.data.searchlist.length === 0) {//渲染未搜索到列表
              this.showSearch = 2;
              return;
            } else {//渲染搜索列表
              this.showSearch = 1;
              console.log(res.data)
              this.searchResult = res.data.searchlist
            }
          }
        })

      },
      onSearch() {
      },
      emitSort(val) {

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
    &-top {
      margin-top: 27px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      > span {
        font-size: 12px;
        color: rgba(153, 153, 153, 1);
        line-height: 17px;
      }
      > img {
        width: 12px;
        height: 12px;
      }
    }
    &-bottom {
      margin-top: 10px;
      width: 100%;
      .searchHistory {
        float: left;
        margin: 3px 10px 0 0;
        height: 30px;
        background: rgba(239, 239, 239, 1);
        border-radius: 2px;
        font-size: 12px;
        color: rgba(102, 102, 102, 1);
        text-align: center;
        line-height: 30px;
      }

    }

  }

  /*.cell {*/
  /*height: 16px;*/
  /*padding: 0 7px;*/
  /*}*/

  /*.history {*/
  /*padding: 0 7px;*/
  /*.block {*/
  /*float: left;*/
  /*margin-left: 7px;*/
  /*width: 24px;*/
  /*height: 15px;*/
  /*background: rgba(239, 239, 239, 1);*/
  /*border-radius: 1px;*/
  /*> p {*/
  /*font-size: 8px;*/
  /*color: rgba(102, 102, 102, 1);*/
  /*line-height: 15px;*/
  /*text-align: center;*/
  /*}*/
  /*}*/
  /*}*/

</style>
