<template>
  <div class="user_body">
    <div class="user_flex user_box">
      <div class="user_header"><img src="../../../../assets/image/s_1.jpg"></div>
      <div class="user_right">
        <div class="user_flex user_padding">
          <div class="user_name">雷斯然</div>
          <div class="user_endorsement">七星代言人</div>
        </div>
        <div class="user_signature">晚来天欲雪，能饮一杯无？</div>
      </div>
    </div>

    <div class="user_content">
      <div class="user_con_top">
        <div class="user_con_flex">
          <div class="user_con_title">全部预约</div>
          <div class="user_con_more">
            <div class="user_con_moreTxt">更多</div>
            <div class="user_con_moreIcon"></div>
          </div>
        </div>
        <div class="user_con_border"></div>
      </div>
      <div class="user_con_listNav">
        <div class="user_con_item1">
          <div class="user_con_itemIcon"><img src="../../../../assets/image/dfk.png"></div>
          <div class="user_con_itemTxt">待付款</div>
        </div>
        <div class="user_con_item2">
          <div class="user_con_itemIcon"><img src="../../../../assets/image/yy.png"></div>
          <div class="user_con_itemTxt">已预约</div>
        </div>
        <div class="user_con_item3">
          <div class="user_con_itemIcon"><img src="../../../../assets/image/dfk.png"></div>
          <div class="user_con_itemTxt">已完成</div>
        </div>
        <div class="user_con_item4">
          <div class="user_con_itemIcon"><img src="../../../../assets/image/dpj.png"></div>
          <div class="user_con_itemTxt">待评价</div>
        </div>
      </div>
    </div>

    <div class="user_null"></div>

    <div class="user_content">
      <div class="user_con_top">

        <div>
          <div class="user_con_flex">
            <div class="user_con_title">我的套餐</div>
            <div class="user_con_more">
              <div class="user_con_moreIcon"></div>
            </div>
          </div>
          <div class="user_con_border"></div>
        </div>

        <div>
          <div class="user_con_flex">
            <div class="user_con_title">我的收藏</div>
            <div class="user_con_more">
              <div class="user_con_moreIcon"></div>
            </div>
          </div>
          <div class="user_con_border"></div>
        </div>

        <div>
          <div class="user_con_flex">
            <div class="user_con_title">我的评价</div>
            <div class="user_con_more">
              <div class="user_con_moreIcon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index",
    mounted(){
      this.$store.commit('setSub_hover',2)
    }
  }
</script>

<style lang="scss" scoped>
  .user_body{
    width: 345px;
    margin: 0 auto;
    padding: 10px 0;
  }
  .user_flex{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .user_right{
    padding-left: 10px;
  }
  .user_header{
    border-radius: 50%;
    overflow: hidden;
  }
  .user_header,.user_header img{
    width: 50px;
    height: 50px;
  }
  .user_header img{

  }
  .user_name{
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .user_endorsement{
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(251,74,63,1);
    padding-left: 10px;
  }
  .user_padding{
    padding-bottom: 5px;
    /*align-items: flex-end;*/
  }
  .user_signature{
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .user_box{
    padding:10px 20px;
  }
  .user_content{
    padding-bottom: 13px;
    width: 340px;
    margin: 0 auto;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 8px 0px rgba(216,216,216,0.5);
    border-radius:4px;
  }

  .user_con_top{
    padding:10px 20px;
  }
  .user_con_flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .user_con_title{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .user_con_more{
    display: flex;
    align-items: center;
    justify-content:flex-start;
  }
  .user_con_moreTxt{
    font-size:13px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    padding-right: 10px;
  }
  .user_con_moreIcon{
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    transform: rotate(45deg);
    content: '';
    width: 9px;
    height: 9px;
  }
  .user_con_border{
    height: 1px;
    background-color: rgba(216,216,216,1);
    margin: 10px 0;
  }
  .user_con_listNav{

    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .user_con_item1,.user_con_item2,
  .user_con_item3
  ,.user_con_item4{
    text-align: center;
  }
  user_con_itemIcon{
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user_con_item1 img{
    width: 24px;
    height: 22px;
  }
  .user_con_item2 img{
    width: 26px;
    height: 26px;
  }
  .user_con_item3 img{
    width: 26px;
    height: 23px;
  }
  .user_con_item4 img{
    width: 27px;
    height: 25px;
  }
  .user_con_itemTxt{
    padding: 5px 0 0px;
  }
  .user_null{
    height: 20px;
    width: 100%;
  }
</style>
