<template>
  <div class="bodyBg">
    <div class="InsComm_null"></div>
    <div class="InsCommPayCopy_address">
      <div class="InsComm_space_between">
        <div>
          <div class="InsComm_flex_start InsCommPayCopy_padding">
            <div class="InsCommPayCopy_name">王大锤</div>
            <div class="InsCommPayCopy_phone">189****1232</div>
          </div>
          <div class="InsComm_flex_start" >
            <div class="InsCommPayCopy_default">默认</div>
            <div class="InsCommPayCopy_infoAddress">四川成都市高新区中和镇孤帆远影2号</div>
          </div>
        </div>
        <div class="InsCommPayCopy_more"></div>
      </div>
    </div>
    <div class="InsComm_null"></div>
    <div class="InsComm_list">

      <!--list start-->
      <div class="InsComm_flex_start">
        <div class="InsComm_listImg"><img src="../../../../assets/image/t1.jpg"></div>
        <div class="InsComm_listRight">
          <div>
            <div class="InsComm_listName">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。

              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
            <div class="InsComm_listRightTop">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。
              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
          </div>
          <div class="InsComm_space_between">
            <div class="InsCommPay_price">¥1980</div>
            <div class="InsCommOrder">数量：1</div>
          </div>
        </div>
      </div>
      <!--list end-->
      <div class="InsComm_border1"></div>
      <div class="InsComm_space_between">
        <div class="InsComm_title">美丽积分券</div>
        <div class="InsComm_flex_start">
          <div class="InsComm_integral">200积分</div>
          <div class="InsCommPayCopy_more"></div>
        </div>
      </div>
      <div class="InsComm_border1"></div>
      <div class="InsComm_space_between">
        <div class="InsComm_title">运送方式</div>
        <div class="InsComm_flex_start">
          <div class="InsComm_transportMode">自取¥0.00</div>
          <div class="InsCommPayCopy_more"></div>
        </div>
      </div>
      <div class="InsComm_border1"></div>
      <div class="InsComm_flex_start">
        <div class="InsComm_title">买家留言：</div>
        <textarea class="InsComm_text" placeholder="选填"></textarea>
      </div>
    </div>
    <div class="InsComm_null"></div>
    <div class="InsComm_list">
      <div class="InsComm_space_between">
        <div class="InsComm_title">商品金额</div>
        <div class="InsComm_flex_start">
          <div class="InsCommOrder_je">¥ 1980.00</div>
        </div>
      </div>
      <div class="InsComm_space_between">
        <div class="InsComm_title">积分券减免</div>
        <div class="InsComm_flex_start">
          <div class="InsCommOrder_je">- ¥200.00</div>
        </div>
      </div>
      <div class="InsComm_space_between">
        <div class="InsComm_title">运费</div>
        <div class="InsComm_flex_start">
          <div class="InsCommOrder_je">+ ¥ 0.00</div>
        </div>
      </div>
      <div class="InsComm_space_between">
        <div class="InsComm_title"></div>
        <div class="InsComm_flex_start">
          <div class="InsComm_title">总金额：</div>
          <div class="InsCommOrder_je">+ ¥ 0.00</div>
        </div>
      </div>
      <div class="InsComm_btn">
        <div class="InsComm_submit InsComm_submitBg">支付</div>
        <div class="InsComm_cancel InsComm_cancelBg">取消</div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        val:1
      }
    },
    methods:{
      valLength(){
        let val=this.val;
        if(val.length>3){
          this.val=val.slice(0,3);
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  .bodyBg{
    background-color: #fff;
  }
  .InsComm_null{
    width: 100%;
    height: 10px;
    background-color: rgba(244,244,244,1);
  }
  .InsComm_border,.InsComm_border1{
    height: 1px;
    width: 100%;
    margin: 10px 0;
  }
  .InsComm_border{
    background-color: rgba(216,216,216,1);
  }
  .InsComm_border1{
    background-color: rgba(216,216,216,0.5);
  }
  .InsComm_padding{
    padding: 10px 15px;
  }
  .InsComm_space_between{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .InsComm_flex_start{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .InsComm_more{
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    transform: rotate(45deg);
    content: '';
    width: 9px;
    height: 9px;
  }
  .InsComm_topName{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .InsComm_address{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    padding-left: 10px;
  }
  .InsComm_addressIcon{

  }
  .InsComm_addressIcon,.InsComm_addressIcon img{
   width: 12px;
    height: 15px;
  }
  .InsComm_txt{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .InsComm_list{
    padding: 10px 15px;
  }
  .InsComm_title{
    font-size:16px;
    font-weight:400;
    color:rgba(72,72,72,1);
  }
  .InsComm_listImg{
    overflow: hidden;
  }
  .InsComm_listImg,.InsComm_listImg img{
    width: 80px;
    height: 80px;
  }
.InsComm_listRight{
width: 256px;
  padding-left: 10px;
}
  .InsComm_listRightTop{
    height: 47px;
    overflow: hidden;
    font-size:12px;
    font-family:PingFangSC-Regular;
    line-height:17px;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .InsComm_listName{
    height: 25px;
    overflow: hidden;
    line-height: 25px;
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
  }
  .InsComm_listNum{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .InsComm_listMargin{
    margin-bottom: 10px;
  }
  .InsComm_btn{
    width:345px;
    margin: 0 auto;
    padding: 50px 0;
  }
  .InsComm_btnBg{
    background-color: rgba(244,244,244,1);
  }
  .InsComm_submit{
    width:345px;
    height:40px;
    line-height: 40px;
    background:rgba(113,179,255,1);
    border-radius:2px;
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    margin-bottom: 10px;
  }
  .InsComm_cancel{
    height:40px;
    line-height: 40px;
    background-color:#fff;
    border-radius:2px;
    font-size:15px;
    font-family:PingFangSC-Regular;
    text-align: center;
    font-weight:400;
    color:rgba(162,162,162,1);
  }
  .InsCommPay_Pop{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .InsCommPay_transport{
  width:35px;
  height:18px;
  border-radius:11px;
  border:1px solid;
  line-height:18px;
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    text-align: center;
    margin: 0 10px;
  }
  .InsCommPay_stayStore{
    text-align: center;
    width:35px;
    height:18px;
    background:rgba(113,179,255,1);
    border-radius:11px;
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height: 18px;
  }
  .InsCommPay_price{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(222,25,25,1);
  }
  .InsCommPay_reduce,.InsCommPay_add{
    color: #71B3FF;
  }
  .InsCommPay_reduce,.InsCommPay_add,.InsCommPay_input{
width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border: 1px solid #71B3FF;
    font-size: 12px;
  }
  .InsCommPay_input{
    color: #fff;
    border-radius: 0px;
    background-color: #71B3FF;
    outline: none;
    border: 0px;
  }
  .InsCommPayCopy_address{
    padding: 10px 20px;
  }
  .InsCommPayCopy_more{
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    transform: rotate(45deg);
    content: '';
    width: 9px;
    height: 9px;
  }
  .InsCommPayCopy_name{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .InsCommPayCopy_phone{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    padding-left: 20px;
  }
  .InsCommPayCopy_infoAddress{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-left: 10px;
    width: 280px;
  }
  .InsCommPayCopy_default{
    width: 30px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    color: #E9584F;
    border-radius: 4px;
    border: 1px solid #E9584F;
  }
  .InsCommPayCopy_padding{
    padding-bottom: 5px;
  }
  .InsCommOrder{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .InsComm_integral{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(222,25,25,1);
  }
  .InsComm_transportMode{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .InsComm_text{
    width: 250px;
    height: 25px;
    border:0px solid red;
    line-height: 25px;
    font-size: 14px;
  }
  .InsCommOrder_je{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(231,59,61,1);
  }
  .InsComm_submitBg{
    background-color: #22C232;
  }
  .InsComm_cancelBg{
    background-color: #F6595B;
    color: #fff;
  }
</style>
