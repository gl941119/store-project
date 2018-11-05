<template>
  <div class="beautyBody">
    <navbar :name="'选择银行'"></navbar>

    <div class="exchangeTop" @click="returnChoiceBanks()">
      <div class="exchangeBody">
        <div class="exchangeTxt">
          <div class="exchangeImgBox"><img src="../../../../assets/image/yh_icon.gif" /></div>
          <div class="fundPresentationPadding">
            <div class="fundPresentationYhTitle fundPresentationPadding10">中国工商</div>
            <div class="fundPresentationYhWh">尾号1222储蓄卡</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "choiceBanks",
      methods:{
        returnChoiceBanks(){
          this.$router.push({name:'fundPresentation'});
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
</style>
