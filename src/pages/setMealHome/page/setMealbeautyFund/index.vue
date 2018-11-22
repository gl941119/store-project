<template>
  <div class="beautifulPoints">
    <div class="beautifulPoints_top">
      <div class="beautifulPoints_topNum">20</div>
      <div class="beautifulPoints_topName">美丽基金</div>
      <div class="beautifulPoints_topBtnBox">
        <div class="beautifulPoints_topBtn" @click="()=>{this.$router.push({name:'fundPresentation'})}">提现</div>
      </div>
    </div>

    <div class="beautifulPoints_tab">明细</div>

    <div class="beautifulPoints_list">

      <div class="beautifulPoints_flex">
        <div>
          <div class="beautifulPoints_flexName">提现至中国银行（尾号1123）</div>
          <div class="beautifulPoints_flexTime">2018.01.01 14：20</div>
        </div>
        <div class="beautifulPoints_flexPrice">+40</div>
      </div>
      <div class="beautifulPoints_flex">
        <div>
          <div class="beautifulPoints_flexName">提现至中国银行（尾号1123）</div>
          <div class="beautifulPoints_flexTime">2018.01.01 14：20</div>
        </div>
        <div class="beautifulPoints_flexPrice">+40</div>
      </div>
      <div class="beautifulPoints_flex">
        <div>
          <div class="beautifulPoints_flexName">美丽积分兑换</div>
          <div class="beautifulPoints_flexTime">2018.01.01 14：20</div>
        </div>
        <div class="beautifulPoints_flexPrice beautifulPoints_flexPriceJ">+40</div>
      </div>
      <div class="beautifulPoints_flex">
        <div>
          <div class="beautifulPoints_flexName">美丽积分兑换</div>
          <div class="beautifulPoints_flexTime">2018.01.01 14：20</div>
        </div>
        <div class="beautifulPoints_flexPrice beautifulPoints_flexPriceJ">+40</div>
      </div><div class="beautifulPoints_flex">
      <div>
        <div class="beautifulPoints_flexName">美丽积分兑换</div>
        <div class="beautifulPoints_flexTime">2018.01.01 14：20</div>
      </div>
      <div class="beautifulPoints_flexPrice beautifulPoints_flexPriceJ">+40</div>
    </div><div class="beautifulPoints_flex">
      <div>
        <div class="beautifulPoints_flexName">美丽积分兑换</div>
        <div class="beautifulPoints_flexTime">2018.01.01 14：20</div>
      </div>
      <div class="beautifulPoints_flexPrice beautifulPoints_flexPriceJ">+40</div>
    </div><div class="beautifulPoints_flex">
      <div>
        <div class="beautifulPoints_flexName">美丽积分兑换</div>
        <div class="beautifulPoints_flexTime">2018.01.01 14：20</div>
      </div>
      <div class="beautifulPoints_flexPrice beautifulPoints_flexPriceJ">+40</div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  .beautifulPoints{
    background-color: #fff;
    padding-bottom: 0px;
  }
  .beautifulPoints_top{
    width: 100%;
    height: 188px;
    background: url('../../../../assets/image/mljj.png') no-repeat;
    background-size: 100% 188px;
    text-align: center;
  }
  .beautifulPoints_topNum{
    font-size:50px;
    font-family:DINAlternate-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    padding: 37px 0 4px 0;
  }
  .beautifulPoints_topName{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    padding-bottom: 10px;
  }
  .beautifulPoints_topBtnBox{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .beautifulPoints_topBtn{
    font-size:18px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(113,179,255,1);
    background-color: #fff;
    border-radius: 50px;
    width: 100px;
    height: 30px;
    line-height: 30px;
  }
  .beautifulPoints_tab{
    font-size:12px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(74,74,74,1);
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    margin-top: -12px;
    background-color: rgba(244,244,244,1);
  }
  .beautifulPoints_list{
    padding: 0 15px;
  }
  .beautifulPoints_flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #979797;
    padding-bottom: 12px;
  }
  .beautifulPoints_flexName{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(74,74,74,1);
    padding: 16px 0 7px 0;
  }
  .beautifulPoints_flexTime{
    font-size:11px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(155,155,155,1);
  }
  .beautifulPoints_flexPrice{
    font-size:20px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(113,179,255,1);
  }
  .beautifulPoints_flexPriceJ{
    font-size:20px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(102,102,102,1);
  }
</style>
