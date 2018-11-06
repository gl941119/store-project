<template>
  <div class="beautyBody">
    <navbar :name="'选择银行'"></navbar>

    <!--<div class="exchangeTop" @click="returnChoiceBanks()">-->
      <!--<div class="exchangeBody">-->
        <!--<div class="exchangeTxt">-->
          <!--<div class="exchangeImgBox"><img src="../../../../assets/image/yh_icon.gif" /></div>-->
          <!--<div class="fundPresentationPadding">-->
            <!--<div class="fundPresentationYhTitle fundPresentationPadding10">中国工商</div>-->
            <!--<div class="fundPresentationYhWh">尾号1222储蓄卡</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="bindAccountBox">
      <div class=" bindAccountBoxMTop accountFlex">
       <div class="fundPresentationYhTitle">银行卡号：</div>
        <div><input type="number" class="banksInput" v-model="card"/></div>
      </div>
      <div class=" bindAccountBoxMTop accountFlex">
        <div class="fundPresentationYhTitle">开户名称：</div>
        <div><input type="text"  class="banksInput" v-model="cardN"/></div>
      </div>

    </div>
    <div class="bindAccountSubmitBox">
      <div class="bindAccountSubmit" @click="returnChoiceBanks()">绑定银行卡</div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "choiceBanks",
      data() {
        return {
          cardN:'',
          card:'',
        }
      },
      methods:{
        returnChoiceBanks(){
          if(this.cardN!==''&&this.card!==''){
            this.$request({
              url:'app/index.php?i=1&c=entry&eid=88&act=bank&exc=1&score=10000',
              type:"post",
              data:{
                op:1,//类型保存银行卡
                card_no:this.card,//银行卡号
                name:this.cardN,//开户名称
                mobile:'',//手机号码
              }
            }).then((res) =>{
              if(res.status){
                this.$router.push({name:'fundPresentation'});
              }
            });

          }

        }
      }
    }
</script>

<style lang="scss" scoped>
  .banksInput{
    width: 200px;
    border-bottom: 1px solid rgba(216,216,216,1);
    margin-left: 10px;
    padding: 3px;
  }

  .bindAccountListTel{
    width: 270px;
    margin-left: 10px;
    font-size:13px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(170,170,170,1);
  }
  .accountFlex{
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .bindAccountListImg{
    $width1:12px;
    $height1:17px;
    width: $width1;
    height: $height1;
    background: url('../../../../assets/image/phone.gif') no-repeat;
    background-size: $width1 $height1;
  }
  .bindAccountList{
    border-bottom:1px solid rgba(216,216,216,1);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
  }
  .bindAccountBoxMTop{
    margin-top: 30px;
    overflow: hidden;
  }
  .bindAccountBox{
    overflow: hidden;
    $width:345px;
    width: $width;
    margin: 10px auto;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 13px 0px rgba(207,207,207,0.5);
    border-radius:4px;
    padding-bottom: 20px;
  }
  .exchangeBox{
    background-color: rgba(244,244,244,1);
    $width: 345px !global;
    padding: 10px 0;
  }
  .exchangeTop{
    height: 61px;
    width: 100%;
    background-color:#fff;
    border-bottom: 1px solid rgba(244,244,244,1);
  }
  .exchangeBody{
    width:$width;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 61px;
  }
  .exchangeTxt{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .exchangeImgBox{
    width: 39px;
    height: 39px;
    overflow: hidden;
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
  .fundPresentationPadding10{
    padding-bottom: 5px;
  }
  .fundPresentationYhWh{
    font-size:13px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
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
  .bindAccountSubmit{
    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    width:296px;
    height:43px;
    background:rgba(113,179,255,1);
    border-radius:4px;
    margin: 0 auto;
    text-align: center;
    line-height: 43px;
  }
  .bindAccountSubmitBox{
    padding: 30px 0;
  }
</style>
