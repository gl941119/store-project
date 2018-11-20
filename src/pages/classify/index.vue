<template>
  <div class="wrap_body">
    <div class="search_wrap">
      <search :value="value" class="search" v-on:click.native="goSearch"></search>
    </div>
    <div class="nav">
      <ul class="nav-left">
        <div class="nav-left-div">
          <li v-on:click="handleChangeComponent('recommend')"
              :class="{li_hover:hover === '-1'}"
          >推荐
          </li>
          <!--<li v-on:click="handleChangeComponent('clubCard')"-->
          <!--:class="{li_hover:hover === '0'}"-->
          <!--&gt;会员卡-->
          <!--</li>-->
          <li v-for="item,index in category" :key="item.id"
              v-on:click="handleChangeComponent('series',item.id)"
              :class="{li_hover:hover === item.id}"
          >{{item.name}}
          </li>
        </div>
      </ul>
      <router-view class="nav-right"/>
    </div>
  </div>
</template>
<script>
  // import ClubCard from './com/clubCard'//会员卡
  import Recommend from './com/recommend'//推荐
  import Series from './com/series'
  export default {
    name: "classfiy",
    components: {
      Recommend, Series
    },
    data() {
      return {
        isCurrentTabComponent: 'recommend',
        value: undefined,
        category: null,
      }
    },
    computed: {
      hover: function () {
        return this.$store.state.classify_hover
      }
    },
    methods: {
      goSearch() {
        this.$router.push({name: 'search'})
      },
      handleChangeComponent(name, id) {
        if (name === 'series') {
          this.$store.commit('setClassifyId', id)
        }
        this.$router.push({name: name})
      }
    },
    mounted() {
      this.$store.commit('setHover', 1)
      this.$request({
        url: 'app/index.php?i=1&c=entry&eid=85&act=category',
        type: 'get',
        data: {},
      }).then((res) => {
        this.category = res.data.category
      })
    }
  }
</script>

<style lang="scss" scoped>
  .wrap_body{
    padding-bottom: 50px;
  }

  .search_wrap {
    width: 100%;
    background-color: white;
    padding: 5px 0;
    .search {
      margin: 0px auto;
      width: 345px;
      height: 30px;
      background: rgba(244, 244, 244, 1);
      border-radius: 4px;
    }
  }

  .nav {
    height: 100%;
    background-color: white;
    border-top: 1px solid #F4F4F4;
    display: flex;
    justify-content: flex-start;
    &-left {

      overflow-y: scroll;
      width: 80px;

      height: calc(100vh - 90px);
      /*height: 517px;*/
      border-right: 1px solid #F4F4F4;
      /*float: left;*/
      &-div {
        width: 100%;
        padding-bottom: 0px;
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

    }
    &-right {
      width: 280px;
      height: calc(100vh - 90px);
      overflow-y: scroll;
      /*float: left;*/
    }
  }
</style>
