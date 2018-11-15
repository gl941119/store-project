<template>
  <div class="smallCard">
    <div class="smallCardBody">
      <div class="smallCardEsc"><span class="smallCardEscBtn">X</span></div>
      <div class="smallCardFlex smallCardBox">
        <div>
          <div class="smallCardName">崔贤镒</div>
          <div class="smallCardPosition">院长</div>
        </div>
        <div class="smallCardHeaderImg"><img src="../../../assets/image/posen.jpg"></div>
      </div>
<div class="smallCardTxt">
  崔贤镒，整形外科主页医师，从事整形美容工作多年，拥有丰富的临床医疗美容经验，擅长注射美容、鼻部微整形、活细胞抗衰老等，现任成都维莎芬院长一职。崔贤镒曾多次参加国际大型整形美容交流会议，在注射美雕会议上还与多位知名医师同台献技，深受同好的赞誉。
  成都维莎芬医疗美容门诊部成立于2015年，医院位于成都青羊区世贸中心。成都维莎芬是香港维莎芬医美投资集团投资成立的，总部位于中国香港，维莎芬成立于1999年，专注于从事健康疗养服务。集团致力于将国际顶尖医疗技术与美学完美融合，用爱创造美丽，为顾客提供完善、安全、个性化的私人定制美丽方案。

  　　成都维莎芬拥有许多先进的医疗美容设备，如皮秒激光、镭射净肤仪、深蓝射频美塑仪等等，并且拥有一支技术精湛、经验丰富的整形医师。成都维莎芬医疗美容门诊部一直秉承着发现美、创造美的经营理念，为更多求美者安全的塑造美丽。
</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "smallBusinessCard"
  }
</script>

<style lang="scss" scoped>
  .smallCard{
    background-color:#040404;
    padding: 10px;
  }
  .smallCardBody{
    background-color:#242424;
    border-radius: 4px;
  }
  .smallCardEsc{
    $flex:flex !global;
    display: $flex;
    align-items: center;
    justify-content: flex-end;
  }
  .smallCardFlex{
    display: $flex;
    align-items: center;
    justify-content: space-between;
  }
  .smallCardEscBtn{
    color: #D4D4D4;
    font-size: 20px;
    font-family:PingFangSC-Semibold;
    font-weight:400;
    padding: 10px;
  }
  .smallCardName{
  font-size:24px;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(255,255,255,1);
  }
  .smallCardPosition{
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    padding-top: 20px;
  }
  .smallCardHeaderImg,.smallCardHeaderImg img{
    width: 180px;
    height: 220px;
  }
  .smallCardBox{
    padding: 0 20px 20px 20px;
  }
  .smallCardTxt{
    padding:0  20px 20px 20px;
    color: #ccc;
    font-size: 15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    line-height: 30px;
  }
</style>
