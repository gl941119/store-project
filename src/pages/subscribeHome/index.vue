<template>
  <div class="subscribeHomePage_padding">
    <div class="subscribeHomePage_body">
      <van-swipe class="subscribeHomePage_banner" :autoplay="3000">
        <van-swipe-item><img src="../../assets/image/s_banner.png"></van-swipe-item>
        <van-swipe-item><img src="../../assets/image/s_banner.png"></van-swipe-item>
        <van-swipe-item><img src="../../assets/image/s_banner.png"></van-swipe-item>
        <van-swipe-item><img src="../../assets/image/s_banner.png"></van-swipe-item>
      </van-swipe>
<div class="subscribeHomePage_null"></div>
      <div class="subscribeHomePage_content">
        <div class="subscribeHomePage_header">
          <div class="subscribeHomePage_flex">
            <div class="subscribeHomePage_solid"></div>
            <div class="subscribeHomePage_title">热门服务</div>
          </div>
          <div class="subscribeHomePage_more">
            <span class="subscribeHomePage_more_txt">查看更多</span>
            <img src="../../assets/image/icon-enter.png" class="subscribeHomePage_more_img">
          </div>
        </div>

        <div class="subscribeHomePage_list">
          <div class="subscribeHomePage_item">
            <div><img src="../../assets/image/s_1.jpg" class="subscribeHomePage_item_img"></div>
            <div class="subscribeHomePage_item_txt">柏妢柏滋养面膜柏妢柏滋养面膜柏妢柏滋养面膜柏妢柏滋养面膜</div>
          </div>
          <div class="subscribeHomePage_item">
            <div><img src="../../assets/image/s_1.jpg" class="subscribeHomePage_item_img"></div>
            <div class="subscribeHomePage_item_txt">柏妢柏滋养面膜柏妢柏滋养面膜柏妢柏滋养面膜柏妢柏滋养面膜</div>
          </div>
          <div class="subscribeHomePage_item">
            <div><img src="../../assets/image/s_1.jpg" class="subscribeHomePage_item_img"></div>
            <div class="subscribeHomePage_item_txt">柏妢柏滋养面膜柏妢柏滋养面膜柏妢柏滋养面膜柏妢柏滋养面膜</div>
          </div>
          <div class="subscribeHomePage_item">
            <div><img src="../../assets/image/s_1.jpg" class="subscribeHomePage_item_img"></div>
            <div class="subscribeHomePage_item_txt">柏妢柏滋养面膜柏妢柏滋养面膜柏妢柏滋养面膜柏妢柏滋养面膜</div>
          </div>

        </div>
      </div>
      <div class="subscribeHomePage_null"></div>
      <div><img src="../../assets/image/img_2.png" class="subscribeHomePage_advertisement"></div>
      <div class="subscribeHomePage_null"></div>
      <div><img src="../../assets/image/img_1.png"  class="subscribeHomePage_advertisement"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="scss" scoped>
  .subscribeHomePage_body{
    height: calc(100vh - 50px);
    overflow-y:auto ;
  }
  .subscribeHomePage_footer{
    height: 49px;
    border-top:1px solid rgba(224,224,224,1);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .subscribeHomePage_banner{
    width: 100%;
    height: 220px;
  }
  .subscribeHomePage_banner img{
    width: 100%;
    height: 220px;
  }
  .subscribeHomePage_null{
    height: 10px;
    background-color: rgba(244,244,244,1);
  }
  .subscribeHomePage_content{
    padding: 10px 20px;
  }
  .subscribeHomePage_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .subscribeHomePage_solid{
    width:4px;
    height:18px;
    background:rgba(113,179,255,1);
  }
  .subscribeHomePage_title{
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-left: 15px;
  }
  .subscribeHomePage_more{
    font-size:13px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .subscribeHomePage_flex{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .subscribeHomePage_more_img{
    width: 6px;
  }
  .subscribeHomePage_more_txt{
    padding-right: 10px;
  }
  .subscribeHomePage_list{
    display:-webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-flex-flow:wrap;
    flex-flow:wrap;
    padding: 10px 0 0 0;
  }
  .subscribeHomePage_item{
    width: 160px;
    margin-bottom: 10px;
  }
  .subscribeHomePage_item_img{
    width: 160px;
  }
  .subscribeHomePage_item_txt{
    font-size:15px;
    font-family:MicrosoftYaHei;
    color:rgba(51,51,51,1);
    width: 160px;
    overflow: hidden;
    height: 25px;
    line-height: 25px;
    margin-top: 10px;
    text-align: center;
  }
  .subscribeHomePage_advertisement{
    width: 100%;
  }
  .subscribeHomePage_padding{
    padding: 0px;
    background-color: #fff;
  }
  .subscribeHomePage_footer_item{
    padding-top: 32px;
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .subscribeHomePage_footer_img{
    background: url('../../assets/image/s_homepage.png') 0% 5px no-repeat;
    background-size: 20px 25px;
  }
  .subscribeHomePage_footer_img1{
    background: url('../../assets/image/s_homepage.png') 0% 5px no-repeat;
    background-size: 20px 25px;
  }
  .subscribeHomePage_footer_img2{
    background: url('../../assets/image/s_homepage.png') 0% 5px no-repeat;
    background-size: 20px 25px;
  }
</style>
