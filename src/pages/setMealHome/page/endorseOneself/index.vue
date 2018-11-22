<template>
<div class="endorseOneself">
<div class="endorseOneself_b">
  <div class="endorseOneself_body">
    <div class="endorseOneself_headerBox endorseOneself_headPadding">
      <div class="endorseOneself_header"><img src="../../../../assets/image/log.png"></div>
    </div>
    <div class="endorseOneself_headerBox endorseOneself_headPadding1">
      <div class="endorseOneself_name">雷斯然</div>
    </div>
    <div class="endorseOneself_cont">S+艾司普勒斯科技美容集团运营总部位于香港。经过10多年的不断探索与发展，己经成为享誉业界的集科技美容、医学美容、生物科技为一体的综合性美容集团。</div>
    <div class="endorseOneself_border"></div>
    <div class="endorseOneself_yTitle">邀请码</div>
    <div class="endorseOneself_code">Y0000520</div>
    <div class="endorseOneself_subBox">
      <div class="endorseOneself_sub">去分享</div>
    </div>
  </div>
</div>
</div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
.endorseOneself{
  padding-bottom: 0px;
  background: url('../../../../assets/image/dyme.png') no-repeat;
  background-size: 100% 100%;
}
  .endorseOneself_b{
    padding: 39px 15px 20px 15px;
  }
  .endorseOneself_body{
    width:345px;
    margin: 0 auto;
    background:rgba(255,255,255,1);
    border-radius:8px;
  }
  .endorseOneself_headerBox{
    display: flex;
    align-items: center;
    justify-content: center;
  }
.endorseOneself_headPadding{
  padding: 31px 0 11px 0;
}
.endorseOneself_headPadding1{
  padding-bottom: 51px;
}
  .endorseOneself_header,.endorseOneself_header img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .endorseOneself_cont{
    padding: 0 15px 31px 15px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    text-indent: 20px;
    line-height:20px;
  }
  .endorseOneself_border{
    height: 1.1px;
    width: 345px;
    background-color: #E8E8E8;
  }
  .endorseOneself_yTitle{
    padding: 45px 0 12px 0;
    font-size:18px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(161,39,206,1);
    text-align: center;
  }
  .endorseOneself_name{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .endorseOneself_code{
    padding-bottom: 27px;
    font-size:40px;
    font-weight:bolder;
    text-align: center;
    font-family:PingFangSC-Semibold;
    background-image:-webkit-linear-gradient(right,#7323E7,#B728C3,#DF2BAD);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
  }
  .endorseOneself_sub{
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    margin: 0 auto;
    background-color: #71B3FF;
    font-size:18px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .endorseOneself_subBox{
    padding-bottom: 40px;
  }
</style>
