<template>
  <div class="fundOk">

    <div class="fundOkPadding">
      <div class="fundOkH">
        <div>
          <div><img src="../../../../assets/image/fundok.png" class="fundImgOk" /></div>
          <div class="fundPop">已成功兑换{{ mony }}美丽基金</div>
          <div class="fundButOk" @click="fundButOk()">完成</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "exchangeOk",
      data(){
          return {
            mony:this.$route.params.je
          }
      },
      methods:{
        fundButOk(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .fundImgOk{
    width: 67px;
  }
  .fundPop{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(18,21,33,1);
    padding: 10px 0 70px 0;
  }
  .fundButOk{
    $width:210px;
    $height:50px;
    background: url('../../../../assets/image/Rectangle2.png') no-repeat;
    background-size: $width $height;
    width: $width;
    height: $height;
    text-align: center;
    line-height: 40px;
    font-size:18px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .fundOkH{
    width: 100%;
    height: 275px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-align: center;
  }
.fundOk{
  background-color:rgba(247,247,249,1);
}
  .fundOkPadding{
    margin-top: 10px;
    background-color: #fff;
  }
</style>
