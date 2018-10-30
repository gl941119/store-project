<template>
    <div class="wrap">
      <div class="out">
        <img src="../../../assets/image/头像.png" alt="" class="out-header">
        <div class="out-content">
          <p>王小茜<span>五星科美师</span></p>
          <!--<span class="out-content-title">五星科美师</span>-->
        </div>
        <p class="out-footer">每天告诉自己一次，你真的不错！<img src="../../../assets/image/staff.png" alt=""> </p>
      </div>
      <img src="../../../assets/image/花2.png" alt="" class="inner">
    </div>
</template>

<script>
    export default {
        name: "com-info"
    }
</script>

<style lang="scss" scoped>
  .wrap{
    width:375px;
    height:200px;
    /*background: url("../../../assets/image/花2.png") no-repeat ;*/
    /*background-size: 375px 200px;*/
    position: relative;
    .out{
      position: absolute;
      z-index: -1;
      float: left;
      width:375px;
      height:200px;
      &-header{
        display: block;
        margin: 21px auto 0;
        width:65px;
        height:65px;
      }
      &-content{
        margin-top: 9px;
        width:100%;
        height:25px;
        >p{
          width:54px;
          height:25px;
          margin: 0 auto;
          white-space: nowrap;
          font-size:18px;
          font-family:PingFangSC-Regular;
          color:rgba(74,74,74,1);
          >span{
            margin-left: 4px;
            font-size:10px;
            font-family:PingFangSC-Regular;
            color:rgba(250,101,207,1);
            line-height:14px;
          }

        }
      }
      &-footer{
        margin: 10px 0 0 0;
        text-align: center;
        font-size:10px;
        font-family:PingFangSC-Regular;
        color:rgba(153,153,153,1);
        line-height:14px;
        >img{
          width:10px;
          height:10px;
          margin-left: 6px;
        }

      }

    }
    .inner{
      position: absolute;
      z-index: -2;
      width:375px;
      height:200px;
      filter:blur(2px)

    }
  }
</style>
