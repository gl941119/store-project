<template>
    <div class="bodyBg">
      <div class="null"></div>
      <div class="padding">
        <div class="space_between">
          <div class="beautyIntegrals">现有美丽积分券：20000.00</div>
          <div class="more"></div>
        </div>
      </div>
      <div class="null"></div>
      <div class="padding">
        <div class="beautyIntegrals_title">使用美丽积分券：</div>
        <div>
          <input type="number" class="beautyIntegrals_text">
        </div>
        <div class="beautyIntegrals_submitBox">
          <div class="beautyIntegrals_submit">兑换</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
  .bodyBg{
    background-color: #fff;
  }
.more{
  border-top: 1px solid #999;
  border-right: 1px solid #999;
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
  .padding{
    padding: 10px 15px;
  }
  .beautyIntegrals{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(41,41,41,1);
  }
  .beautyIntegrals_title{
    font-size:13px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(41,41,41,1);
    padding-bottom: 10px;
  }
.beautyIntegrals_text{
  border-radius: 0px;
  border-bottom: 1px solid #c3c3c3;
  width: 335px;
  height: 50px;
  line-height: 50px;
}
  .beautyIntegrals_submit{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size:18px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    text-align: center;
    background-color: #71B3FF;
    border-radius: 4px;
  }
  .beautyIntegrals_submitBox{
    padding: 50px 0;
  }
</style>
