<template>
  <div class="selectAddress_body">
    <div class="null"></div>
    <div class="body_padding">

      <!--item start-->
      <div class="selectAddress_item">
        <div class="selectAddress_itemImg"><img src="../../../../assets/image/image-1.png"></div>
        <div class="selectAddress_itemR">
          <div class="selectAddress_top">
            <div class="selectAddress_name">环球中心店</div>
            <div class="selectAddress_imgBox"><a :href="'tel:' + 17169300878"><img src="../../../../assets/image/tel1.png" class="selectAddress_imgP"></a></div>
          </div>
          <div class="space_between selectAddress_info">
            <div class="selectAddress_txt">已服务2990人次 </div>
            <div class="selectAddress_hao">好评率98%</div>
          </div>
          <div class="flex_start selectAddress_box">
            <img src="../../../../assets/image/exhibition2.png" class="selectAddress_imgIcon">
            <div class="selectAddress_address">四川成都市高新区中环球中心四川成都市高新区中环球中心</div>
          </div>
        </div>
      </div>



      <div class="selectAddress_item">
        <div class="selectAddress_itemImg"><img src="../../../../assets/image/image-1.png"></div>
        <div class="selectAddress_itemR">
          <div class="selectAddress_top">
            <div class="selectAddress_name">环球中心店</div>
            <div class="selectAddress_imgBox"><a :href="'tel:' + 17169300878"><img src="../../../../assets/image/tel1.png" class="selectAddress_imgP"></a></div>
          </div>
          <div class="space_between selectAddress_info">
            <div class="selectAddress_txt">已服务2990人次 </div>
            <div class="selectAddress_hao">好评率98%</div>
          </div>
          <div class="flex_start selectAddress_box">
            <img src="../../../../assets/image/exhibition2.png" class="selectAddress_imgIcon">
            <div class="selectAddress_address">四川成都市高新区中环球中心四川成都市高新区中环球中心</div>
          </div>
        </div>
      </div>

      <div class="selectAddress_item">
        <div class="selectAddress_itemImg"><img src="../../../../assets/image/image-1.png"></div>
        <div class="selectAddress_itemR">
          <div class="selectAddress_top">
            <div class="selectAddress_name">环球中心店</div>
            <div class="selectAddress_imgBox"><a :href="'tel:' + 17169300878"><img src="../../../../assets/image/tel1.png" class="selectAddress_imgP"></a></div>
          </div>
          <div class="space_between selectAddress_info">
            <div class="selectAddress_txt">已服务2990人次 </div>
            <div class="selectAddress_hao">好评率98%</div>
          </div>
          <div class="flex_start selectAddress_box">
            <img src="../../../../assets/image/exhibition2.png" class="selectAddress_imgIcon">
            <div class="selectAddress_address">四川成都市高新区中环球中心四川成都市高新区中环球中心</div>
          </div>
        </div>
      </div>
      <!--item end-->
    </div>
  </div>
</template>

<script>
  import RouterLink from "vant/es/mixins/router-link";
  export default {
    name: "selectStore",
    components: {RouterLink}
  }
</script>

<style lang="scss" scoped>
  .selectAddress_body{
    background-color: #fff;
  }
  .more{
    border-top: 1px solid #333;
    border-right: 1px solid #333;
    transform: rotate(45deg);
    content: '';
    width: 9px;
    height: 9px;
  }
  .space_between{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex_start{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .null{
    width: 100%;
    height: 10px;
    background-color: rgba(244,244,244,1);
  }
  .body_padding{
    padding: 20px 15px;
  }
  .selectAddress_item{
    width:345px;
    margin: 0 auto 15px auto;
    height:115px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 11px 0px rgba(211,211,211,0.5);
    border-radius:4px;
    display: flex;
    justify-content: flex-start;
  }
  .selectAddress_itemImg,.selectAddress_itemImg img{
    width: 169px;
    height: 115px;
  }
  .selectAddress_itemImg img{
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  .selectAddress_itemR{
    padding-left: 12px;
  }
  .selectAddress_name{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .selectAddress_imgP,.selectAddress_imgBox{
    width: 40px;
    height: 40px;
  }
  .selectAddress_box{
    width: 155px;
    overflow: hidden;
  }
  .selectAddress_info{
    width: 155px;
    padding: 17px 0px 9px 0;
  }
  .selectAddress_top{
    width: 155px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .selectAddress_imgIcon{
    width: 9px;
    height: 11px;
    margin-right: 4px;
  }
  .selectAddress_txt,.selectAddress_hao,.selectAddress_address{
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .selectAddress_address{
    height: 20px;
    line-height: 20px;
    overflow: hidden;
  }
</style>
