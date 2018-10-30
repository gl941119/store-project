<template>
  <!--<div class="cell" v-on:click="goUrl">-->
    <!--<div class="cell-left">{{Data.name}}</div>-->
    <!--<div class="cell-right">-->
      <!--<van-icon name="arrow" class="cell-right-my-icon"/>-->
      <!--<span class="cell-right-message">{{Data.message}}</span>-->
    <!--</div>-->
    <!--<div class="fill"></div>-->
  <!--</div>-->

  <div class="cell"  v-on:click="goUrl">
    <span class="cell-name">{{Data.name}}</span>
    <span class="cell-content">{{Data.message}}</span>
    <van-icon name="arrow" class="cell-icon"/>
    <div class="fill"></div>
  </div>


</template>

<script>
  export default {
    name: "cell",
    props: ['Data'],
    data() {
      return {}
    },
    methods: {
      goUrl() {
        this.$router.push({path:this.Data.url,query:{}})
        // this.$router.push({name:this.Data.url.routeName,params:this.Data.url.params})
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*.cell {*/
    /*width: 100%;*/
    /*height: 43px;*/
/*position: relative;*/
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
    /*&-left {*/
      /*flex: 1;*/
      /*font-size: 16px;*/
      /*color: rgba(51, 51, 51, 1);*/
      /*line-height: 43px;*/
    /*}*/
    /*&-right {*/
      /*flex: 1;*/
      /*height: 100%;*/
      /*overflow: hidden;*/
      /*!*display: flex;*!*/
      /*!*align-items: center;*!*/
      /*!*justify-content: flex-end;*!*/
      /*&-my-icon {*/
        /*!*margin-right: 6px;*!*/
        /*float: right;*/
        /*font-size: 11px;*/
        /*color: rgba(153, 153, 153, 1);*/
        /*line-height: 45px;*/
      /*}*/
      /*&-message {*/
        /*width: 130px;*/
        /*text-align: right;*/
        /*float: right;*/
        /*margin-right: 10px;*/
        /*font-size: 13px;*/
        /*color: rgba(153, 153, 153, 1);*/
        /*line-height: 43px;*/
        /*overflow: hidden;*/
        /*white-space: nowrap;*/
        /*text-overflow: ellipsis;*/

      /*}*/
    /*}*/
    /*.fill {*/
      /*width: 315px;*/
      /*height: 1px;*/
      /*background: rgba(216, 216, 216, 1);*/
      /*position: absolute;*/
      /*bottom: 0;*/
    /*}*/
  /*}*/


  .cell {

    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    &-name {
      flex: 1;
      color: rgba(51, 51, 51, 1);
      font-size: 15px;
      font-family: PingFangSC-Regular;
    }
    &-content {
      margin-right: 10px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      color: rgba(102, 102, 102, 1);
    }
    &-icon {
      font-size: 10px;
      right: 0;
    }
    .fill {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: rgba(216, 216, 216, 1);
    }
  }



</style>
