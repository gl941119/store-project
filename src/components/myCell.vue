<template>
    <div class="cell">
      <div class="cell-title">{{title}}</div>
      <div class="cell-content">{{content}}</div>
      <div class="cell-right">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cell",
      props:['title','content','url']
    }
</script>

<style lang="scss" scoped>
  @import "../assets/css/global";
    .cell{
      width: 100%;
      padding: 12px 15px;
      @include my-flex;
      background-color: white;
      &-title{
        width: 24px;
        height: 100%;
        font-size:12px;
        color:rgba(153,153,153,1);
        line-height:17px;
      }
      &-content{
        width: 233px;
        height: 100%;
        font-size:14px;
        color:rgba(51,51,51,1);
        line-height:20px;
      }
      &-right{
        >div{
          width:2px;
          height:2px;
          background:rgba(102,102,102,1);
          float: left;
          margin-left: 4px;
        }
      }
    }
</style>
