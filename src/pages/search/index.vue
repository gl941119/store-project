<template>
  <div class="wrap">

    <div class="search">
      <div class="search-input">
        <van-icon name="search" class="icon"/>
        <input type="text" v-model="value" placeholder="请输入关键字" class="input">
        <img :class="{show_close:show_close}"  v-on:click="closeHandle" src="../../assets/image/cancle.png" alt="" class="close">
      </div>
      <van-button type="primary" class="search-btn" @click="request()">搜索</van-button>
    </div>

    <div class="result" v-if="showSearch == 0">
      <div class="result-top">
        <span>搜索历史</span>
        <img src="../../assets/image/删除.png" alt="" v-on:click="delHistory">
      </div>
      <div class="result-bottom">
        <div class="searchHistory" v-for="item in history" v-on:click="historyHandle(item)">{{item}}</div>
      </div>
    </div>
    <div class="result" v-if="showSearch == 1">
      <select-bar @emitSort="request()"></select-bar>
      <product-card v-for="item in searchResult" :key="item.id" :Data="item"></product-card>
    </div>
    <div class="notResult" v-if="showSearch == 2">
      <img src="../../assets/image/search.png" alt="" class="notResult-img">
      <p>您寻找的商品还没上架</p>
    </div>

  </div>
</template>

<script>
  import cache from '../../utils/cache'

  export default {
    name: "search",
    data() {
      return {
        value: undefined,
        showAction: true,
        bgColor: '#F4F4F4',
        sort: 1,
        showSearch: 0, //0 1 2
        searchResult: null,
        history: JSON.parse(window.localStorage.getItem('searchHistory')),//历史地址
        show_close:false
      }
    },
    watch: {
      value: function (val) {
        if (val.length === 0) {
          this.showSearch = 0
        }
        if(!!val){//显示关闭
          this.show_close = true
        }else{
          this.show_close = false
        }

      },
    },
    mounted() {

    },
    methods: {
      closeHandle(){
        this.value = ''
      },
      request(val = null) {//搜索
        this.saveHistory();//保存历史
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
              console.log(res.data);
              this.searchResult = res.data.searchlist
            }
          }
        })

      },
      historyHandle(item) {//搜索历史点击
        this.value = item
        this.request()
      },
      delHistory() {//删除历史

        this.$dialog.confirm({
          title: '是否删除历史记录？',
        }).then(() => {
          cache.removeLocal('searchHistory')
          this.history = []
        }).catch(() => {
          // on cancel
        });

      },
      saveHistory() {//保存历史
        if (!this.value) return;
        let history = cache.getLocal('searchHistory') || [];
        let _history = history.filter(item => {
          if (item !== this.value) {
            return item
          }
        })
        _history.push(this.value)
        this.history = _history
        cache.setLocal('searchHistory', _history)

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
        overflow: hidden;
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
        display: none;
        width: 12px;
        height: 12px;
        margin-right: 7px;
      }
      .show_close{
        display: block;
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

  .result {
    padding: 0 15px;
    &-top {
      margin-top: 27px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
        padding: 0 7px;
        margin: 3px 10px 0 0;
        height: 30px;
        background: rgba(239, 239, 239, 1);
        border-radius: 2px;
        font-size: 12px;
        color: rgba(102, 102, 102, 1);
        text-align: center;
        line-height: 30px;
        font-family:PingFangSC-Regular;

      }

    }

  }
  .notResult{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >P{
      margin-top: 75px;
      width:150px;
      height:21px;
      font-size:15px;
      font-family:PingFangSC-Regular;

      color:rgba(167,167,167,1);
      line-height:21px;
    }
    &-img{
      margin-top: 90px;
      width: 124px;
      height: 132px;
    }
  }

</style>
