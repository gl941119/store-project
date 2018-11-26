<template>
  <div>

    <div class="bindAccount">
      <div class="bindAccountBox accountFlexNone">
        <div class="bindAccountTopL">
          <div class="bindAccountYqCode"></div>
          <input type="text"placeholder="请输入好友邀请码" v-model="yqCode" class="bindYqInput"/>
        </div>

        <!--<div class="bindAccountTopRBox">-->
          <!--<div class="bindAccountTopR" v-on:click="saoMiao">-->
            <!--<div class="bindAccountTopRIg"></div>-->
            <!--<div>扫一扫</div>-->
          <!--</div>-->
          <!--<div class="bindAccountTopRTxt">请好友打开二维码</div>-->
        <!--</div>-->

      </div>

      <div class="bindAccountBox">
        <div class=" bindAccountBoxMTop accountFlex">
          <div class="bindAccountList">
            <div class="bindAccountListImg"></div>
            <input type="tel" class="bindAccountListTel" v-model="phone" placeholder="请输入待绑定号码"/>
          </div>
        </div>
        <div class=" bindAccountBoxMTop accountFlex">
          <div class="bindAccountList">
            <div class="bindAccountListImg bindAccountListImg1"></div>
            <input type="text" class="bindAccountListTel" v-model="names" placeholder="姓名"/>
          </div>
        </div>
        <div class=" bindAccountBoxMTop accountFlex">
          <div class="bindAccountList">
            <div class="bindAccountListImg bindAccountListImg2"></div>
            <input type="text" class="bindAccountListTel bindAccountListTelCode" placeholder="验证码" v-model="codes"/>
            <div class="bindAccountListTelCodeBtn" v-if="fundCode" @click="fundCodeClick()">发送验证码</div>
            <div class="bindAccountListTelCodeBtn" v-else>{{ fundCodeTxt }}</div>
          </div>
        </div>

        <div class="bindAccountSubmitBox">
          <van-button type="default" class="bindAccountSubmit" v-on:click="bindAccountSubmit">注册绑定</van-button>
        </div>

      </div>


    </div>
  </div>
</template>

<script>

  import wxHandle from '../../utils/wx'
  var testPhone= /^1[34578]\d{9}$/;
  var testName= /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
    export default {
      name: "index",
      data(){
        return{
          yqCode:localStorage.getItem('mealCode'),
          phone:'',
          names:'',
          codes:'',
          fundCode:true,
          fundCodeTxt:'59秒'
        }
      },
      mounted() {
        this.initScao();
      },
      methods:{
        initScao(){

        },
        saoMiao(){
          let thia = this;
          wxHandle('scanQRCode', {
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
              thia.yqCode=res.resultStr;
              var result = res.resultStr + '扫码返回的结果'; // 当needResult 为 1 时，扫码返回的结果
            }
          });

        },
        fundCodeClick(){

          this.$request({
            url:'app/index.php?i=1&c=entry&eid=87&act=sendcode',
            type:'post',
            data:{
              mobile:this.phone
            }
          }).then((res) =>{
            if(res.status){
              this.$toast.success('已发送')
              this.fundCode=false;
              var num=59;
              var setVal= setInterval(()=>{
                if(num==0){
                  num=59;
                  this.fundCode=true;
                  clearInterval(setVal);
                }else{
                  --num;
                  this.fundCodeTxt=num+'秒';
                }
              },1000);
            }
          });

        },
        bindAccountSubmit(){

            this.$request({
              url:'app/index.php?i=1&c=entry&eid=87&act=binduser',
              type:'post',
              data:{
                icode:this.yqCode,
                mobile:this.phone,
                realname:this.names,
                code:this.codes
              }
            }).then((res) => {
              if(res.status){
                // this.$router.push({name:'member'});
                this.$toast.success('绑定成功')
                window.sessionStorage.setItem('is_bind','1')
                this.$router.go(-1)
              }
            });

        }




      }
    }
</script>

<style lang="scss" scoped>
.bindAccount{
   padding: 10px 0;
 }
  .bindAccountBox{
    $width:345px;
    width: $width;
    margin: 0px auto 15px auto;
    padding: 10px 0;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 13px 0px rgba(207,207,207,0.5);
    border-radius:4px;
  }
  .accountFlex{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  }
  .accountFlexNone{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .bindAccountTopL{
    width:143px;
    border-bottom:1px solid rgba(216,216,216,1);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
  }
  .bindAccountYqCode{
    $width: 15px;
    $height: 15px;
    width: $width;
    height: $height;
    background: url('../../assets/image/email.gif') no-repeat;
background-size: $width $height;
  }
.bindYqInput{
  margin-left: 15px;
  width: 110px;
  height: 20px;
  line-height: 20px;
  font-size:13px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(170,170,170,1);
}
  .bindAccountTopR{
    display: flex;
    align-items: center;
    justify-content: center;
    width:100px;
    height:29px;
    background:rgba(113,179,255,1);
    border-radius:4px;
    color: #fff;
  }
  .bindAccountTopRIg{
    $width:17px;
    width: $width;
    height: $width;
    background: url('../../assets/image/erweima.gif') no-repeat;
    background-size: $width $width;
    margin: 0 5px;
  }
  .bindAccountTopRTxt{
  font-size:10px;
font-family:PingFangSC-Regular;
font-weight:400;
    text-align: center;
color:rgba(170,170,170,1);
    padding: 10px 0;
}
  .bindAccountTopRBox{
    padding: 5px 0;
  }
  .bindAccountBoxMTop{
    margin-top: 30px;
    overflow: hidden;
  }
  .bindAccountList{
    border-bottom:1px solid rgba(216,216,216,1);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
  }
  .bindAccountListImg{
    $width1:12px;
    $height1:17px;
    width: $width1;
    height: $height1;
    background: url('../../assets/image/phone.gif') no-repeat;
    background-size: $width1 $height1;
  }
.bindAccountListImg1{
  $width1:12px;
  $height1:15px;
  width: $width1;
  height: $height1;
  background: url('../../assets/image/account.gif') no-repeat;
  background-size: $width1 $height1;
}
.bindAccountListImg2{
  $width1:14px;
  $height1:17px;
  width: $width1;
  height: $height1;
  background: url('../../assets/image/code.jpg') no-repeat;
  background-size: $width1 $height1;
}
  .bindAccountListTel{
    width: 270px;
    margin-left: 10px;
    font-size:13px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(170,170,170,1);
  }
  .bindAccountListTelCode{
    width: 170px;
  }
.bindAccountListTelCodeBtn{
  width:89px;
  height:29px;
  background:rgba(38,200,54,1);
  border-radius:2px;
  font-size:13px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
  text-align: center;
  line-height: 29px;
}
  .bindAccountSubmit{
    display: block;
    margin: 0 auto;
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
