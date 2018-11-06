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
          <div class="bindAccountTopR">
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

      },
      methods:{
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
  height: 15px;
  line-height: 10px;
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
