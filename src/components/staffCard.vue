<template>
  <div class="staffCard">
    <img src="" alt="">
    <dl>
      <dt>科美师：王娟</dt>
      <dd>环球中心店6号科美师</dd>
      <p>每天告诉你自己一次，你真的很不错</p>
    </dl>
  </div>
</template>

<script>
    export default {
        name: "staffCard"
    }
</script>

<style lang="scss" scoped>
  .staffCard{
    margin: 0 auto;
    width:345px;
    height:115px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 11px 0px rgba(211,211,211,0.5);
    border-radius:4px;
    display: flex;
    justify-content: space-between;
    >img{
      border: 1px solid red;
      width: 115px;
      height: 115px;

    }
    >dl{
      flex: 1;
      padding: 9px 0 0 15px;
      >dt{
        font-size:16px;
        font-family:PingFangSC-Regular;
        color:rgba(51,51,51,1);
      }
      >dd{
        margin-top: 10px;
        font-size:12px;
        font-family:PingFangSC-Regular;
        color:rgba(51,51,51,1);
      }
      >p{
        max-height: 47px;
        overflow: hidden;
        margin-top: 10px;
        font-size:12px;
        font-family:PingFangSC-Regular;
        color:rgba(153,153,153,1);
        line-height:17px;

      }
    }
  }
</style>
