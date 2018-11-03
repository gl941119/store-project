<template>
  <div class="beautyBody">
    <navbar :name="'积分兑换'"></navbar>
    <div class="exchangeBox">
      <div class="exchangeTop">
        <div class="exchangeBody">
          <div class="exchangeTxt">现有积分：{{ code }}</div>
          <div class="exchangeIcon"></div>
        </div>
      </div>
    </div>

    <div class="exchangeWidth">
      <div class="exchangeTitle">提现积分</div>
      <div class="exchangeFlex">
        <div class="exchangeInputImg"></div>
        <div class="exchangeInputPadding"><input type="number" class="exchangeInput" v-model="score" /></div>
      </div>
    </div>

    <div class="exchangeBtnPadding">
      <div class="exchangeBtn" @click="exchangeSub()">兑换</div>
    </div>

  </div>
</template>
<script>
  import { Toast } from 'vant';
    export default {
        name: "exchange",
      data(){
          return {
            code:'0',
            score:''
          }
      },
      mounted(){
          this.request()
      },
      methods:{
        exchangeSub(){
          var tst=/^[1-9]\d*$/;

          if(tst.test(this.score)){
            this.$request({
              url:'app/index.php?i=1&c=entry&eid=88&act=exchange',
              type:'post',
              data:{
                exc:1,
                score:this.score
              }
            }).then((res) => {
              var data=res.data;
              this.code=data.score;
              this.score='';
            })
          }else{
            Toast('积分格式不正确！整数且大于0！');
          }


        },
          request(){
            this.$request({
              url:'app/index.php?i=1&c=entry&eid=88&act=exchange',
                type:'get',

            }).then((res) => {
              var data=res.data;
              this.code=data.score;
            })
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
  .exchangeTxt{
    font-size:16px;
    color: rgba(41,41,41,1);
    font-weight: 400;
  }
  .exchangeIcon{
    width: 6px;
    height: 11px;
    background: url('../../../../assets/image/icon-enter.png') no-repeat;
    background-size: 6px 11px;
  }
</style>
