<template>
<div class="endorseOneself">
<div class="endorseOneself_b">
  <div class="endorseOneself_body">
    <div class="endorseOneself_headerBox endorseOneself_headPadding">
      <div class="endorseOneself_header">
        <img :src="avatar" v-if="avatar?avatar:false">
        <img v-else src="../../../../assets/image/defaule.jpg">
      </div>
    </div>
    <div class="endorseOneself_headerBox endorseOneself_headPadding1">
      <div class="endorseOneself_name">{{name}}</div>
    </div>
    <div class="endorseOneself_cont" v-html="cont"></div>
    <div class="endorseOneself_border"></div>
    <div class="endorseOneself_yTitle">邀请码</div>
    <div class="endorseOneself_code">{{code}}</div>
    <div class="endorseOneself_subBox">
      <div class="endorseOneself_sub" @click="sherEv">去分享</div>
    </div>
  </div>
</div>
  <van-popup v-model="popShow" class="popCss">
    <div class="popBox"  @click="clickOverlay">
      <div class="popImgBox"><div><img src="../../../../assets/image/sher_2.png" class="popImg"></div></div>
      <div class="popImgBox1">
        <div><img src="../../../../assets/image/sher_3.png"></div>
        <div class="popImgTxt">
          <div>点击右上角按钮</div>
          <div>分享邀请码</div>
        </div>
      </div>
      <div class="popImgBox2">
        <div>
          <img src="../../../../assets/image/sher_4.png" class="popImgBox2Img">
          <div class="popImgTxt1">
            <div>我知道了</div>
          </div>
        </div>

      </div>
    </div>

  </van-popup>
</div>
</template>

<script>
  import wxHandle from '../../../../utils/wx'
  import wx from 'weixin-js-sdk'
  import axios from 'axios';
  export default {
    name: "index",
    data(){
      return {
        title:'',
        cont:'',
        avatar:'',
        name:'',
        code:'',
        webshare:{},
        urlParam:'',
        popShow:false,
      }
    },
    created(){

    },
    mounted(){
      this.initEv();
    },
    methods:{
      clickOverlay(){
        this.popShow=false;
      },
      sherEv(){
        this.popShow=true;
      },
      beautifulEndorsementSub(){
        this.$router.push({name:'endorseOneself'});
      },
      shareEv(){
        let u=this.webshare.back;
        let pU=this.urlParam;
        let code=this.code;
        let description=this.webshare.share_text;
        let title=this.webshare.share_title;
        let url=window.location.href.split('#');
        let rep=url[1].replace('endorseOneself','endorseOneself/endorsementSharing');
        let curUrl=url[0]+'#'+rep+'?'+pU+'&code='+code;
        let betUrl=  btoa(encodeURIComponent(url[0]).replace(/%([0-9A-F]{2})/g,
          function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
          }));
        let config = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        };
        let r = this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$eid.eid + '&dom='+this.$eid.dom+'&act=weixinscan&url=' + betUrl;
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
alert(title)
                wx.onMenuShareAppMessage({
                  title: title, // 分享标题
                  desc: description, // 分享描述
                  link: curUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: u, // 分享图标
                  type: '', // 分享类型,music、video或link，不填默认为link
                  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                  success: function () {
// 用户点击了分享后执行的回调函数
                  }
                });
                wx.updateAppMessageShareData({
                  title: title, // 分享标题
                  desc: description, // 分享描述
                  link: curUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: u, // 分享图标
                  success: function () {
                    // 设置成功
                  }
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
//         wxHandle('updateAppMessageShareData',{
//           title: title, // 分享标题
//           desc: description, // 分享描述
//           link: curUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//           imgUrl: u, // 分享图标
//           type: '', // 分享类型,music、video或link，不填默认为link
//           dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
//           success: function () {
// // 用户点击了分享后执行的回调函数
//             alert('用户点击了分享后执行的回调函数')
//           },
//             cancel: function () {
//               // 用户取消分享后执行的回调函数
//               alert('用户取消分享后执行的回调函数')
//             }
//         });

        // wxHandle('updateAppMessageShareData', {
        //   title: '分享标题', // 分享标题
        //   link: url, // 分享链接
        //   imgUrl: u, // 分享图标
        //   success: function () {
        //     // 用户确认分享后执行的回调函数
        //     alert('分享给朋友成功')
        //   },
        //   cancel: function () {
        //     // 用户取消分享后执行的回调函数
        //     alert('分享给朋友成功1')
        //   }
        // });
      },
      initEv(){
        // this.$request({
        //   url:'app/index.php?i=1&c=entry&eid=87&act=get_url_param',
        // type:'post'
        // }).then(res=>{
        //   if(res.status){
        //     this.urlParam=res.data.param;
        //   }
        // });
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=88&act=ucenter',
          type:'post'
        }).then((res)=>{
          if(res.status){
            let d=res.data;
            let scgc=d.article['a_3'];
            this.code=d.user.invitation_code;
            this.cont=scgc.content;
            this.name=d.user.name;
            this.avatar=d.user.avatar;
            this.webshare=d.webshare;
            this.urlParam=d.param;
            this.shareEv();
          }
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
  padding-bottom: 51px;
}
  .endorseOneself_header,.endorseOneself_header img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .endorseOneself_cont{
    padding: 0 15px 31px 15px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:20px;
  }
  .endorseOneself_border{
    height: 1.1px;
    width: 345px;
    background-color: #E8E8E8;
  }
  .endorseOneself_yTitle{
    padding: 45px 0 12px 0;
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
  .popCss{
    background-color: transparent;
  }
  .popBox{
height:100vh;
    width:100vw;
  }
  .popImg{
    width: 58px;
    height: 125px;
  }
  .popImgBox{
    display: flex;
    align-self: center;
    justify-content: flex-end;
  }
  .popImgBox1{

    display: flex;
    align-self: center;
    justify-content: center;
  }
  .popImgBox:nth-child(1){
    padding-right: 20px;
  }
.popImgBox1{
position: relative;
  z-index: 1;
  display: flex;
  align-self: center;
  justify-content: center;
}
.popImgBox1:nth-child(1) img{
  width: 198px;
  height: 69px;
}
  .popImgTxt{
    position: absolute;
    z-index: 10;
    color: #fff;
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .popImgBox2{
    position: relative;
    z-index: 1;
    display: flex;
    align-self: center;
    justify-content: center;
    padding-top: 25px;
  }
.popImgBox2 > div{
  position: relative;
}
  .popImgBox2:nth-child(1),.popImgBox2Img{
width: 118px;
    height: 51px;
  }

.popImgTxt1{
  position: absolute;
  z-index: 10;
  top:17px;
  left:34px;
  font-size:15px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
}

</style>
