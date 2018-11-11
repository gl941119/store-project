<template>
  <div>
    <div class="search_wrap">
      <search :value="value" class="search" v-on:click.native="goSearch"></search>
    </div>

    <div class="nav">
      <ul class="nav-left">
        <li v-on:click="handleChangeComponent('recommend')"
            :class="{li_hover:hover === '-1'}"
        >推荐
        </li>
        <li v-on:click="handleChangeComponent('clubCard')"
            :class="{li_hover:hover === '0'}"
        >会员卡
        </li>
        <li v-for="item,index in category" :key="item.id"
            v-on:click="handleChangeComponent('series',item.id)"
            :class="{li_hover:hover === item.id}"
        >{{item.name}}
        </li>
      </ul>
      <keep-alive>
      <router-view class="nav-right"/>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  import ClubCard from './com/clubCard'//会员卡
  import Recommend from './com/recommend'//推荐
  import Series from './com/series'

  export default {
    name: "classfiy",
    components: {
      ClubCard, Recommend, Series
    },
    data() {
      return {
        isCurrentTabComponent: 'recommend',
        value: undefined,
        category: null,
        hover: '-1'
      }
    },
    methods: {
      goSearch() {
        this.$router.push({name: 'search'})
      },
      handleChangeComponent(name, id) {
        switch (name) {
          case 'recommend':
            this.hover = '-1';
            break;
          case 'clubCard':
            this.hover = '0';
            break;
          case 'series':
            this.hover = id;
            this.$store.commit('setClassifyId', id)
            break;
        }
        // this.isCurrentTabComponent = name
        this.$router.push({name:name})
      }
    },
    mounted() {
      this.$request({
        url: 'app/index.php?i=1&c=entry&eid=85&act=category',
        type: 'get',
        data: {},
      }).then((res) => {
        // goods: array 商品推荐精华列表，返回数组形式
        // services: array 服务推荐列表，数组
        // category: array 分类列表，数组
        this.category = res.data.category
      })
    }

  }
</script>

<style lang="scss" scoped>
  .search_wrap{
    width: 100%;
    background-color: white;
    .search {
      margin: 5px auto;
      width: 345px;
      height: 30px;
      background: rgba(244, 244, 244, 1);
      border-radius: 4px;
    }
  }


  .nav {
    height: 514px;
    background: white;
    border-top: 1px solid #F4F4F4;
    &-left {
      width: 80px;
      height: 514px;
      border-right: 1px solid #F4F4F4;
      float: left;
      > li {
        height: 45px;
        background: rgba(255, 255, 255, 1);
        text-align: center;
        font-size: 15px;
        color: rgba(60, 60, 60, 1);
        line-height: 45px;
      }
      .li_hover {
        color: #71B3FF;
        background: url("../../assets/image/icon-fenge.png") no-repeat left center;
        background-size: 3px 25px;
      }
    }
    &-right {
      width: 280px;
      float: left;
    }
  }
</style>
