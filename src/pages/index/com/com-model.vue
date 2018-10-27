<template>
  <div class="model">
    <div class="model-top">
      <div class="model-top-fill"></div>
      <span class="model-top-title">{{data.name}}</span>
    </div>
    <div class="model-more" v-on:click.self="doThat">查看更多&nbsp;&gt;</div>
    <ul class="model-buttom">
      <li class="model-buttom-li" v-for="item in data.data" :key="item.id">
        <img :src="item.thumb" alt="">
        <p>{{item.name}}</p>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "com-model",
    props:['data'],
    mounted(){

    },
    methods:{
      doThat(){
        this.$router.push({path:'/subscribe/2'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .model {
    margin-top: 10px;
    height: 200px;
    padding: 11px 15px;
    background-color: #ffffff;
    &-top {
      float: left;
      display: flex;
      align-items: center;
      &-fill {
        width: 4px;
        height: 18px;
        background-color: #71B3FF;
      }
      &-title {
        font-size: 18px;
        color: #333333;
        margin-left: 10px;
        height:25px;
        color:rgba(51,51,51,1);
      }
    }
    &-more {
      float: right;
      margin-top: 3px;
      color:rgba(153,153,153,1);
      line-height:19px;
    }
    &-buttom {
      width: 100%;
      float: left;
      margin-top: 11px;
      display: flex;
      justify-content: space-between;
      &-li {
        width: 112px;
        > img {
          width: 112px;
          height: 112px;
        }
        > p {
          width: 100%;
          text-align: center;
          font-size: 15px;
          margin-top: 6px;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

</style>
