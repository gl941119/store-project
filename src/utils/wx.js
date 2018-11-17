import wx from 'weixin-js-sdk'
import request from './request'
function wxHandle(title, callback) {
  request({
    url:'app/index.php?i=1&c=entry&eid=87&act=weixinscan',
    data:{
      url:window.location.href
    },
    type:'post'
  }).then((res) => {
    if (res.data.status) {
      var d = res.data.data.config;
      wx.config({
        debug: true, // 开启调试模式,
        appId: d.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
        timestamp: d.timestamp, // 必填，生成签名的时间戳
        nonceStr: d.nonceStr, // 必填，生成签名的随机串
        signature: d.signature,// 必填，签名，见附录1
        jsApiList: ['scanQRCode', 'getLocalImgData', 'downloadImage', 'uploadImage', 'chooseImage', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'updateAppMessageShareData', 'getLocation', 'openLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
    }
  }).catch((res) => {
    var ss = res + 'catch请求失败';
    alert(ss)
  });
}

export default wxHandle
