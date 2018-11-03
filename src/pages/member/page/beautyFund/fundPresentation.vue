<template>
  <div class="beautyBody">
    <navbar :name="'美丽基金'"></navbar>
    <div class="exchangeBox">
      <div class="exchangeTop">
        <div class="exchangeBody">
          <div class="exchangeTxt">
            <div class="exchangeImgBox"><img src="../../../../assets/image/yh_icon.gif" /></div>
            <div class="fundPresentationPadding">
              <div class="fundPresentationYhTitle fundPresentationPadding10">中国工商银行</div>
              <div class="fundPresentationYhWh">尾号1234储蓄卡</div>
            </div>
          </div>

          <div class="exchangeIcon"></div>
        </div>
      </div>
    </div>

    <div class="exchangeWidth">
      <div class="exchangeTitle">提现金额</div>
      <div class="exchangeFlex">
        <div class="exchangeInputImg"></div>
        <div class="exchangeInputPadding"><input type="number" class="exchangeInput" v-model="money" /></div>
      </div>
    </div>

    <div class="fundPresentationPop">可用提现余额20,000.00元</div>

    <div class="exchangeBtnPadding">
      <div class="exchangeBtn" @click="fundPresentationMoney()">预计2小时内到帐</div>
    </div>

  </div>
</template>
<script>
  import { Toast } from 'vant';
    export default {
        name: "fundPresentation",
      data() {
          return{
            money:''
          }
      },
      mounted(){
          this.request()
      },
      methods:{
          request(){
            this.$request({
              url:'app/index.php?i=1&c=entry&eid=88&act=withdraw',
              type:'get',
            }).then((res) => {
              var data=res.data;
              console.log(data)
            })
          },
        fundPresentationMoney(){
          var tst=/^[1-9]\d*$/;

          if(tst.test(this.money)&&this.money>0&&this.money<20000){

            this.$request({
              url:'app/index.php?i=1&c=entry&eid=88&act=withdraw',
              type:'post',
              data:{
                op:1,
                amount:this.money
              }
            }).then((res) => {
              var data=res.data;
              console.log(data)
            })

          }else{
            Toast('提现金额格式不正确！整数且大于0小于20000！');
          }


        }
      }


    }
</script>

<style lang="scss" scoped>
.exchangeBox{
  background-color: rgba(244,244,244,1);
  $width: 345px !global;
  padding: 10px 0;
}
.fundPresentationPadding{
  padding-left:15px;
}
.fundPresentationYhTitle{
  font-size:16px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(41,41,41,1);
}
.fundPresentationYhWh{
  font-size:13px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.fundPresentationPop{
     width: $width;
     margin: 0 auto;
     padding: 5px 0;
  color: rgba(136,136,136,1);
  font-weight: 400;
  font-size: 13px;
   }
.exchangeInputImg{
  width: 21px;
  height: 30px;
  background: url('../../../../assets/image/icon-money.png') no-repeat;
  background-size: 21px 30px;
}
.exchangeInputPadding{
  padding-left: 10px;
}
.exchangeInput{
  line-height: 50px;
  height: 50px;
  font-size: 16px;
  width: 300px;
}
.fundPresentationPadding10{
  padding-bottom: 5px;
}
.exchangeBtn{
width: $width;
  height: 50px;
  line-height: 40px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  background: url('../../../../assets/image/icon-kuang.png') no-repeat;
  background-size: $width 50px;
}
.exchangeBtnPadding{
  padding-top:50px;
}
.exchangeFlex{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.exchangeWidth{
  width:$width;
  margin: 0 auto;
  border-bottom: 1px solid rgba(233,233,233,1);
}
.exchangeTitle{
  padding: 10px 0;
  font-size: 13px;
  color: rgba(41,41,41,1);
}
  .exchangeTop{
  height: 61px;
    width: 100%;
    background-color:#fff;
  }
  .exchangeBody{
    width:$width;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 61px;
  }
  .exchangeImgBox{
    width: 39px;
    height: 39px;
    overflow: hidden;
  }
.exchangeTxt{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.exchangeTxt img{
  width: 39px;
}
  .exchangeIcon{
    width: 6px;
    height: 11px;
    background: url('../../../../assets/image/icon-enter.png') no-repeat;
    background-size: 6px 11px;
  }
</style>
