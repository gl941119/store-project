import axios from 'axios';
import Vue from 'vue';
import qs from 'qs';
import store from '../store';
import Cache from './cache';
import {Toast} from 'vant';
// import config from './config';





axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://192.168.3.23:80' : Cache.getConfig().domain
axios.defaults.withCredentials = true;
export const wxRequest = params => {
  let config = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  };
  let r = 'http://dev-cd.vasterroad.com/app/index.php?i=1&c=entry&eid=163&act=weixinscan&url=' + params;
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
          jsApiList: ['scanQRCode','downloadImage','uploadImage','chooseImage','onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
//scanQRCode 扫一扫','downloadImage 图片下载',
// uploadImage 图片上传', 'chooseImage 拍照或从手机相册中选图接口',
// onMenuShareTimeline “分享到朋友圈”按钮点击状态及自定义分享内容接口',
// onMenuShareAppMessage 分享给朋友”按钮点击状态及自定义分享内容接口']

      }
    }).catch((res) => {
    var ss = res + 'catch请求失败';
    alert(ss)
  });
}

async function ajaxRequest(url = '', data = {}, type = 'POST', isToast = true) {

  if (isToast === true) {
    Toast.loading({
      duration: 6000,
      mask: true,
      message: '加载中...'
    });
  }

  if (process.env.NODE_ENV === 'development') {
    url = url.replace('eid=84', 'eid=153');
    url = url.replace('eid=85', 'eid=154');
    url = url.replace('eid=86', 'eid=155');
    url = url.replace('eid=87', 'eid=156');
    url = url.replace('eid=88', 'eid=157');
    url = url.replace('eid=89', 'eid=158');
  } else {
    let config =  Cache.getConfig()
    let key = Object.keys(config.binds);
    url = url.replace('i=1', 'i=' + config.uid);
    url = url.replace('eid=' + key[0], 'eid=' + config.binds[key[0]]);
    url = url.replace('eid=' + key[1], 'eid=' + config.binds[key[1]]);
    url = url.replace('eid=' + key[2], 'eid=' + config.binds[key[2]]);
    url = url.replace('eid=' + key[3], 'eid=' + config.binds[key[3]]);
    url = url.replace('eid=' + key[4], 'eid=' + config.binds[key[4]]);
    url = url.replace('eid=' + key[5], 'eid=' + config.binds[key[5]])
  }


// var url=url+'&openid=abc123';
  type = type.toUpperCase();
  let uk = store.state.uk || Cache.getSession('uk');
  data['uk'] = uk;
  if (type === 'GET') {
    return axios.get(url, {
      params: data,
      headers: {},
    });
  } else if (type === 'POST') {
    return axios.post(url, qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
  } else if (type === 'PUT') {
    return axios.put(url, data, {
      headers: {},
    });
  } else if (type === 'DELETE') {
    return axios.delete(url, {headers: {}, params: data});
  }
}

/**
 * require
 * @param {Object} params -> (url: String, [data: Object, type: 'POST'(default)/'GET', flag: Boolean])
 * @param params.url -> config define String, required
 * @param params.data -> require data object
 * @param params.type -> require method, default 'POST'
 * @param params.flag -> json require, default false
 */
function requestHandle(params) {

  const {url, data, type, isToast} = params;

  return new Promise((resolve, reject) => {
    ajaxRequest(url, data, type, isToast).then(
      res => {
        if (res.data.uk) {
          store.commit('setUk', res.data.uk);
          Cache.setSession('uk', res.data.uk)
        }
        try {//分辨会员
          store.commit('setIs_member', res.data.user.is_member);
          Cache.setSession('is_member', res.data.user.is_member)
        } catch (e) {
          // alert('无法分辨会员')
        }
        try {//分辨美师  >0 美师
          store.commit('setStore', res.data.user.store);
          Cache.setSession('store', res.data.user.store)
          if (res.data.user.store != '0') {//是美师 结束长轮询
            window.clearInterval(Vue.prototype.$setInterval);
          }
        } catch (e) {
          // alert('无法分辨美师')
        }
        // console.log(res.data)
        if (res.data.code === 108) {
          Toast.clear();
          Toast.fail(res.data.message);
        } else if (res.data.code === 100) {
          Toast.clear();
        } else if (res.data.code === 105) {
          Toast.clear();
        } else {
          // alert(res.data.message)
          Toast.clear();
        }
        resolve(res.data);
      },
      rej => {
        Toast.fail('网络错误!');
        reject(rej);
      }
    );
  });
}

export default requestHandle;


