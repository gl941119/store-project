<template>
  <div class="bodyBg">
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
            <div class="InsComm_flex_start">
              <div class="InsCommPay_reduce" @click="reduce">-</div>
              <input type="number"  v-model="val" @change="valLength"  class="InsCommPay_input">
              <div class="InsCommPay_add" @click="InsCommPayAdd">+</div>
            </div>
          </div>
        </div>
      </div>

      <!--list end-->
    </div>
    <div class="InsComm_null"></div>
    <div class="InsComm_list">
      <div class="InsComm_space_between">
        <div class="InsComm_title">服务</div>
        <div class="InsCommPay_Pop">连锁店通用</div>
      </div>
      <div class="InsComm_border1"></div>
      <!--list start-->
      <div class="InsComm_flex_start InsComm_listMargin">
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
          <div class="InsComm_listNum">使用次数：8</div>
        </div>
      </div>

      <div class="InsComm_flex_start InsComm_listMargin">
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
          <div class="InsComm_listNum">使用次数：8</div>
        </div>
      </div>
      <div class="InsComm_flex_start InsComm_listMargin">
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
          <div class="InsComm_listNum">使用次数：8</div>
        </div>
      </div>
      <div class="InsComm_flex_start InsComm_listMargin">
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
          <div class="InsComm_listNum">使用次数：8</div>
        </div>
      </div>
      <!--list end-->
    </div>
    <div class="InsComm_null"></div>
    <div class="InsComm_list">
      <div class="InsComm_space_between">
        <div class="InsComm_title">商品</div>
        <div class="InsComm_flex_start">
          <div class="InsCommPay_transport ">运送</div>
          <div class="InsCommPay_stayStore InsCommPay_transport_select">留店</div>
        </div>
      </div>
      <div class="InsComm_border1"></div>
      <!--list start-->
      <div class="InsComm_flex_start InsComm_listMargin">
        <div class="InsComm_listImg"><img src="../../../../assets/image/t2.jpg"></div>
        <div class="InsComm_listRight">
          <div>
            <div class="InsComm_listName">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。

              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
            <div class="InsComm_listRightTop">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。
              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
          </div>
          <div class="InsComm_listNum">使用次数：8</div>
        </div>
      </div>

      <div class="InsComm_flex_start InsComm_listMargin">
        <div class="InsComm_listImg"><img src="../../../../assets/image/t2.jpg"></div>
        <div class="InsComm_listRight">
          <div>
            <div class="InsComm_listName">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。

              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
            <div class="InsComm_listRightTop">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。
              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
          </div>
          <div class="InsComm_listNum">使用次数：8</div>
        </div>
      </div>
      <div class="InsComm_flex_start InsComm_listMargin">
        <div class="InsComm_listImg"><img src="../../../../assets/image/t2.jpg"></div>
        <div class="InsComm_listRight">
          <div>
            <div class="InsComm_listName">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。

              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
            <div class="InsComm_listRightTop">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。
              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
          </div>
          <div class="InsComm_listNum">使用次数：8</div>
        </div>
      </div>
      <div class="InsComm_flex_start InsComm_listMargin">
        <div class="InsComm_listImg"><img src="../../../../assets/image/t2.jpg"></div>
        <div class="InsComm_listRight">
          <div>
            <div class="InsComm_listName">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。

              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
            <div class="InsComm_listRightTop">
              对一些较贵重的首饰、制衣、精密仪器、手机以及各种计算机类商品的所用货架。
              Some of the more expensive jewelry, clothing, precision instruments, mobile phones and a variety of commodities used in the computer shelf. </div>
          </div>
          <div class="InsComm_listNum">使用次数：8</div>
        </div>
      </div>
      <!--list end-->
    </div>
    <div class="InsComm_btnBg">
      <div class="InsComm_btn">
        <div class="InsComm_submit">支付</div>
        <div class="InsComm_cancel">取消</div>
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
        if(val>99){
          this.val=val.slice(0,2);
        }

      },
      reduce(){
        let val=this.val;
        --val;
        if(val<=0){
          this.val=1;
        }else{
          this.val=val;
        }
      },
      InsCommPayAdd(){
        let val=this.val;
        ++val;
        if(val>99){
          this.val=val.slice(0,3);
        }else{
         this.val=val;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bodyBg{
    background-color: #fff;
    padding-bottom: 0px;
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
    border:1px solid;
    height:18px;
    color:rgba(153,153,153,1);
    border-radius:11px;
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
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
    font-weight: 600;
    font-size: 20px;
  }
  .InsCommPay_reduce,.InsCommPay_add,.InsCommPay_input{
width: 25px;
    height: 25px;
    text-align: center;
    line-height: 20px;
    border: 1px solid #71B3FF;
  }
  .InsCommPay_input{
    font-size: 15px;
    color: #fff;
    border-radius: 0px;
    background-color: #71B3FF;
    outline: none;
    border: 0px;
  }
  .InsCommPay_transport_select{
    background:rgba(113,179,255,1);
    color:rgba(255,255,255,1);
  }
</style>
