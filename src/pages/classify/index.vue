<template>
  <div>
    <navbar :name="'S+艾司商城'"></navbar>
    <search :value="value" class="search"></search>
    <div class="nav">
      <ul class="nav-left">
        <li @click="handleChangeComponent('recommend')"
        >推荐</li>
        <li @click="handleChangeComponent('club-card')"
        >会员卡</li>
        <li v-for="item,index in category" :key="item.id"
            >{{item.name}}</li>
      </ul>
      <keep-alive>
        <component v-bind:is="isCurrentTabComponent" class="nav-right"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  import ClubCard from './com/clubCard'//会员卡
  import Recommend from './com/recommend'//推荐
  export default {
    name: "classfiy",
    components:{
      ClubCard,Recommend
    },
    data(){
      return{
        isCurrentTabComponent:'recommend',
        value:undefined,
        category:null,
        hover:-2
      }
    },
    methods:{
      handleChangeComponent(name){
        this.isCurrentTabComponent = name
      }
    },
    mounted(){
      this.$request({
        url:'app/index.php?i=1&c=entry&eid=85&act=category',
        type:'get',
        data:{
        },
      }).then((res)=>{
        // goods: array 商品推荐精华列表，返回数组形式
        // services: array 服务推荐列表，数组
        // category: array 分类列表，数组
      this.category = res.data.category


      })
    }

  }
</script>

<style lang="scss" scoped>
  .search {
    margin:5px auto;
    width: 345px;
    height: 30px;
    background: rgba(244, 244, 244, 1);
    border-radius: 4px;
  }

  .nav {
    height: 514px;
    background: white;
    border-top:1px solid #F4F4F4 ;
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
        line-height: 60px;
      }
      li:hover {
        color: #71B3FF;
      }
    }
    &-right{
      width: 280px;
      float: left;
    }
  }
</style>
