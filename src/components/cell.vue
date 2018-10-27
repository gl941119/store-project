<template>
  <div class="cell" v-on:click="goUrl">
    <div class="cell-left">{{Data.name}}</div>
    <div class="cell-right">
      <van-icon name="arrow" class="cell-right-my-icon"/>
      <span class="cell-right-message">{{Data.message}}</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: "cell",
    props: ['Data'],
    data(){
      return {

      }
    },
    methods:{
      goUrl(){
        console.log()
        // this.$router.push({path:this.Data.url,query:{i:1}})
        // this.$router.push({name:this.Data.url.routeName,params:this.Data.url.params})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cell {
    width: 100%;
    height: 43px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
      flex: 1;
      font-size: 16px;
      color: rgba(51, 51, 51, 1);
      line-height: 43px;
    }
    &-right {
      flex: 1;
      height: 100%;
      overflow: hidden;
      /*display: flex;*/
      /*align-items: center;*/
      /*justify-content: flex-end;*/
      &-my-icon {
        /*margin-right: 6px;*/
        float: right;
        font-size: 11px;
        color: rgba(153, 153, 153, 1);
        line-height: 45px;
      }
      &-message {
        width: 130px;
        text-align: right;
        float: right;
        margin-right: 10px;
        font-size: 13px;
        color: rgba(153, 153, 153, 1);
        line-height: 43px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;

      }


    }

  }



</style>
