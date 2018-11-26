import wx from 'weixin-js-sdk'
import request from './request'
import Vue from 'vue'
import axios from 'axios';
function wxHandle(title, callback) {
  let config = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  };
let ul=window.location.href;
 let betUrl=  btoa(encodeURIComponent(ul).replace(/%([0-9A-F]{2})/g,
    function toSolidBytes(match, p1) {
      return String.fromCharCode('0x' + p1);
    }));

// let cUrl=ul.replace('?from=groupmessage&isappinstalled=0','');
//   let curUrl=cUrl.split('#')[0];
  let r = Vue.prototype.$upUrl + 'app/index.php?' + Vue.prototype.$i + '&c=entry&eid=' + Vue.prototype.$eid.eid + '&dom='+Vue.prototype.$eid.dom+'&act=weixinscan&url=' + betUrl+'&weburl='+ul;

  axios.post(r, null, config)
    .then((res) => {
      if (res.data.status) {
        var d = res.data.data.config;
        wx.config({
          debug: true, // 开启调试模式,
          appId: d.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
          timestamp: d.timestamp, // 必填，生成签名的时间戳
          nonceStr: d.nonceStr, // 必填，生成签名的随机串
          signature: d.signature,// 必填，签名，见附录1
          jsApiList: ['scanQRCode', 'getLocalImgData', 'downloadImage', 'uploadImage', 'chooseImage', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'updateAppMessageShareData'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(function () {
          wx[title](callback);
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

export default wxHandle
