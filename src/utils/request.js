import axios from 'axios';
import Vue from 'vue';
import qs from 'qs';
import store from '../store';
import Cache from './cache';
import {Toast} from 'vant';
// import config from './config';



// 解密
let Base64 = {
  encode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode('0x' + p1);
      }));
  },
  decode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
};
let config = window.location.hash.split('/').slice(-1)[0];
config = JSON.parse(Base64.decode(config))

console.log(config['domain'],config)
axios.defaults.baseURL = config['domain']

axios.defaults.withCredentials = true;

async function ajaxRequest(url = '', data = {}, type = 'POST', isToast = true) {

  if (isToast === true) {
    Toast.loading({
      duration: 6000,
      mask: true,
      message: '加载中...'
    });
  }

  let config
  try {
    config =  JSON.parse(window.sessionStorage.getItem('config'))
  }catch (e) {
    alert('无法获得config')
  }


  if (process.env.NODE_ENV === 'development') {
    url = url.replace('eid=84', 'eid=153');
    url = url.replace('eid=85', 'eid=154');
    url = url.replace('eid=86', 'eid=155');
    url = url.replace('eid=87', 'eid=156');
    url = url.replace('eid=88', 'eid=157');
    url = url.replace('eid=89', 'eid=158');
  } else {
    let key = Object.keys(config.binds)
    url = url.replace('i=1','i='+config.uid)
    url = url.replace('eid='+key[0], 'eid='+config.binds[key[0]]);
    url = url.replace('eid='+key[1], 'eid='+config.binds[key[1]]);
    url = url.replace('eid='+key[2], 'eid='+config.binds[key[2]]);
    url = url.replace('eid='+key[3], 'eid='+config.binds[key[3]]);
    url = url.replace('eid='+key[4], 'eid='+config.binds[key[4]]);
    url = url.replace('eid='+key[5], 'eid='+config.binds[key[5]])
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
          if(res.data.user.store != '0'){//是美师 结束长轮询
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
          this.$router.push({name: 'bindAccount'});
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
