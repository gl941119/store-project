<template>
  <div>
    <navbar :name="'账号绑定'"></navbar>
    <div class="bindAccount">
      <div class="bindAccountBox accountFlex">
        <div class="bindAccountTopL">
          <div class="bindAccountYqCode"></div>
          <input type="text"placeholder="请输入好友邀请码" v-model="yqCode" class="bindYqInput"/>
        </div>

        <div class="bindAccountTopRBox">
          <div class="bindAccountTopR" @click="saoMiao()">
            <div class="bindAccountTopRIg"></div>
            <div>扫一扫</div>
          </div>
          <div class="bindAccountTopRTxt">请好友打开二维码</div>
        </div>

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
          <div class="bindAccountSubmit" @click="bindAccountSubmit()">注册绑定</div>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'
  import axios from 'axios'
  var testPhone= /^1[34578]\d{9}$/;
  var testName= /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
    export default {
      name: "index",
      data(){
        return{
          yqCode:'',
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
          axios.post('http://dev-cd.vasterroad.com/app/index.php?i=1&c=entry&eid=164&act=weixinscan')
            .then((res)=>{
            if(res.data.status){
              var d=res.data.data.config;
              wx.config({
                debug: false, // 开启调试模式,
                appId: d.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: d.timestamp, // 必填，生成签名的时间戳
                nonceStr: d.nonceStr, // 必填，生成签名的随机串
                signature: d.signature,// 必填，签名，见附录1
                jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              });
              wx.ready(function () {
                wx.scanQRCode({
                  needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                  scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                  success: function (res) {
                    thia.yqCode=res.resultStr;
                    var result = res.resultStr+'扫码返回的结果'; // 当needResult 为 1 时，扫码返回的结果
                  }
                });
                wx.error(function(res){
                  var s=res+'config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。';
                  alert(s)
                  // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

                });

              });
            }
          }).catch((res)=>{
            var ss=res+'catch请求失败';
            alert(ss)
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
          if(testPhone.test(this.phone)&&testName.test(this.names)){
            this.$request({
              url:'app/index.php?i=1&c=entry&eid=87&act=binduser',
              type:'post',
              data:{
                mobile:this.phone,
                realname:this.names,
                code:this.codes
              }
            }).then((res) => {
              if(res.status){
                this.$router.push({name:'member'});
              }
            });
          }
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
    margin: 0 auto;
    padding-top: 10px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 13px 0px rgba(207,207,207,0.5);
    border-radius:4px;
  }
  .accountFlex{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
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
