<template>
  <div class="beautyBody">
    <navbar :name="'美丽基金'"></navbar>
    <div class="beautyBodyTop">
      <div class="beauty">
        <div class="beautyCart">
          <div class="beautyCartBottom">
            <div class="beautyFund">
              <p class="beautyTitle">美丽积分</p>
              <p class="beautyNumber">{{ fund }}</p>
            </div>
            <div class="beautySolid"></div>
            <div class="beautyFund">
              <p class="beautyTitle">美丽基金</p>
              <p class="beautyNumber">{{ integral }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="beautyBtn">
        <div class="beautyBtnSub color" @click="exchangeClick()">积分兑换</div>
        <div class="beautyBtnSub color1" @click="fundPresentation()">基金提现</div>
      </div>
    </div>


    <div class="beautyList beautyListMargin">
      <div class="beautyListPading">
        <van-cell-group>
          <van-cell title="我的美丽代言码" is-link :to="{ path:'/beautyFund/beautifulEndorsement'}"/>
          <van-cell title="我的上级美丽代言" is-link :to="{ path:'/beautyFund/superiorEndorsement'}"/>
          <van-cell title="我的一级美丽代言" is-link :to="{ path:'/beautyFund/oneEndorsement'}"/>
          <van-cell title="我的二级美丽代言" is-link :to="{ path:'/beautyFund/twoEndorsement'}"/>
        </van-cell-group>
      </div>
    </div>

    <div class="beautyList">
      <div class="beautyListPading">
        <van-cell-group>
          <van-cell title="积分排行榜" is-link :to="{ path:'/beautyFund/IntegralRanking'}"/>
          <van-cell title="美丽代言说明" is-link />
        </van-cell-group>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "beautyFund",
      data(){
        return{
          fund:'',
          integral:'',
        }
      },
      mounted() {
         this.request()
      },
      methods:{
         request() {
this.$request({
url:'app/index.php?i=1&c=entry&eid=88&act=ucenter',
  type:'get'
}).then((res) => {
  var data=res.data.user;
  this.fund=data.score;
  this.integral=data.share_amount;
});
         },
        exchangeClick() {
           this.$router.push({name:'exchange'})
        },
        fundPresentation(){
          this.$router.push({name:'fundPresentation'})
        }
      }

    }
</script>

<style lang="scss" scoped>
  .beautyBody{
    background-color: #F4F4F4;
  }
  .beautyBodyTop{
    background-color: #fff;
    $width:100% !global;
    $height:184px !global;
    width: $width;
    $bottom:10px !global;
    margin-bottom: $bottom;
  }
  .beautyListMargin{
    margin-bottom: $bottom;
  }
  .beauty{
    $width1:345px !global;
    width: $width1;
    height:$height;
    position: relative;
    margin: 0px auto 0 auto;
    background:url("../../../../assets/image/bankCar.png") no-repeat;
    background-size: $width1 $height;
  }
  .beautyCart{
    position: absolute;
    width:$width;
    height: 65px;
    left:0px;
    bottom:8px;
    padding: $bottom;
  }
  .beautyCartBottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
  }
  .beautyFund{
    text-align: center;
    width: 33.333%;
    color: #fff;
  }
  .beautyTitle{
    font-size:14px;
  }
  .beautyNumber{
    font-size:18px;
  }
  .beautySolid{
    background: url("../../../../assets/image/fgsoild.png") no-repeat;
    background-size: 2px 31px;
    width: 2px;
    height:31px;
  }
.beautyBtn{
  width: $width1;
  margin: 0 auto;
  padding: $bottom;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
  .beautyBtnSub{
    width: 153px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
  }
  .color{
    background-color: rgba(38,200,54,1);
  }
  .color1{
    background-color: rgba(113,179,255,1);
  }
  .beautyList{
    background-color: #fff;
  }
  .beautyListPading{
    width: $width1;
    margin: 0 auto;
  }
  .van-cell{
    line-height: 30px;
    border-bottom:1px solid #eee;
  }
</style>
