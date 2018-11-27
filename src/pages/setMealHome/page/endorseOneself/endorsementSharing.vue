<template>
  <div class="endorseOneself">
    <div class="endorseOneself_b">
      <div class="endorseOneself_body">
        <div class="endorseOneself_headerBox endorseOneself_headPadding">
          <div class="endorseOneself_header"><img :src="webshare.avatar"></div>
        </div>
        <div class="endorseOneself_headerBox endorseOneself_headPadding1">
          <div class="endorseOneself_name">{{webshare.name}}</div>
        </div>
        <div class="endorseOneself_cont" v-html="webshare.content"></div>
        <!--<div>-->
          <!--<div class="endorseOneself_sharing">邀请您成为艾司科美美丽代言人</div>-->
          <!--<div class="endorseOneself_sharing1">美丽人生等你代言</div>-->
        <!--</div>-->
        <!--<div class="endorseOneself_cont">S+艾司普勒斯科技美容集团运营总部位于香港。经过10多年的不断探索与发展，己经成为享誉业界的集科技美容、医学美容、生物科技为一体的综合性美容集团。</div>-->
        <div class="endorseOneself_border"></div>
        <div class="endorseOneself_yTitle">邀请码</div>
        <div class="endorseOneself_code">{{webshare.codes}}</div>
        <div class="endorseOneself_subBox">
          <div class="endorseOneself_sub" @click="linkHome('setMealHome')">去商城</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'
  import axios from 'axios';
  export default {
    name: "index",
    data(){
      return {
        webshare:{},
        codes:''
      }
    },
    created(){

    },
    mounted(){
      this.reques();
    },
    methods:{
      linkHome(str){
        this.$router.push({name:str})
      },
      reques(){
        let self=this;
        let ul=window.location.href;
        let cde=ul.split('code=')[1];
        localStorage.setItem('mealCode',cde);
        let betUrl=  btoa(encodeURIComponent(ul).replace(/%([0-9A-F]{2})/g,
          function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
          }));
        let config = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        };
        let r = this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$eid.eid + '&dom='+this.$eid.dom+'&act=weixinscan&url=' + betUrl;
        alert(ul)
        alert(r)
        axios.post(r, null, config)
          .then((res) => {
            if (res.data.status) {
              var d = res.data.data.config;
              wx.config({
                debug: false, // 开启调试模式,
                appId: d.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: d.timestamp, // 必填，生成签名的时间戳
                nonceStr: d.nonceStr, // 必填，生成签名的随机串
                signature: d.signature,// 必填，签名，见附录1
                jsApiList: ['scanQRCode', 'getLocalImgData', 'downloadImage', 'uploadImage', 'chooseImage', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'updateAppMessageShareData'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              });
              wx.ready(function () {
                self.$request({
                  url:'app/index.php?i=1&c=entry&eid=87&act=invitationuser',
                  type:'post',
                  data:{
                    code:cde
                  }
                }).then(resMsg=>{
                  if(resMsg.status){
                    let d=resMsg.data;
                    let scgc=d.article['a_4'];
                    self.webshare={name:d.name,avatar:d.avatar,content:scgc.content,title:scgc.title,codes:cde};
                  }
                }).catch(res=>{

                });

                wx.error(function (res) {
                  var s = res + 'config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。';
                  alert(s)
                  // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                });
              });
            }
          }).catch((res) => {
          var ss = res + 'catch请求失败';
          alert(ss)
        });

  }
    }
  }
</script>

<style lang="scss" scoped>
  .endorseOneself{
    padding-bottom: 0px;
    background: url('../../../../assets/image/dyme.png') no-repeat;
    background-size: 100% 100%;
  }
  .endorseOneself_b{
    padding: 39px 15px 20px 15px;
  }
  .endorseOneself_body{
    width:345px;
    margin: 0 auto;
    background:rgba(255,255,255,1);
    border-radius:8px;
  }
  .endorseOneself_headerBox{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .endorseOneself_headPadding{
    padding: 31px 0 11px 0;
  }
  .endorseOneself_headPadding1{
    padding-bottom: 25px;
  }
  .endorseOneself_header,.endorseOneself_header img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .endorseOneself_cont{
    padding: 0 15px 13px 15px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    text-indent: 20px;
    line-height:20px;
  }
  .endorseOneself_border{
    height: 1.1px;
    width: 345px;
    background-color: #E8E8E8;
  }
  .endorseOneself_yTitle{
    padding: 17px 0 12px 0;
    font-size:18px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(161,39,206,1);
    text-align: center;
  }
  .endorseOneself_name{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .endorseOneself_code{
    padding-bottom: 27px;
    font-size:40px;
    font-weight:bolder;
    text-align: center;
    font-family:PingFangSC-Semibold;
    background-image:-webkit-linear-gradient(right,#7323E7,#B728C3,#DF2BAD);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
  }
  .endorseOneself_sub{
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    margin: 0 auto;
    background-color: #71B3FF;
    font-size:18px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .endorseOneself_subBox{
    padding-bottom: 40px;
  }
  .endorseOneself_sharing{
    padding-bottom: 8px;
  }
  .endorseOneself_sharing,.endorseOneself_sharing1{
    font-size:16px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(211,53,104,1);
    text-align: center;
  }
  .endorseOneself_sharing1{
    padding-bottom: 25px;
  }
</style>
