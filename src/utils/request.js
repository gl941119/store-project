import axios from 'axios';
import Vue from 'vue';
import qs from 'qs';
import store from '../store';
import Cache from './cache';
import {Toast} from 'vant';
import config from './config';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? config.url.localTestUrl : config.url.productUrl;

axios.defaults.withCredentials = true;

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
    url = url.replace('eid=84', 'eid=160');
    url = url.replace('eid=85', 'eid=161');
    url = url.replace('eid=86', 'eid=162');
    url = url.replace('eid=87', 'eid=163');
    url = url.replace('eid=88', 'eid=164');
    url = url.replace('eid=89', 'eid=165')
  }

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
        } catch (e) {
          // alert('无法分辨美师')
        }
        if (res.data.code === 108) {
          Toast.clear();
          Toast.fail(res.data.message);
        } else if (res.data.code === 100) {
          Toast.clear();
        } else if (res.data.code === 105) {
          Toast.clear();
          this.$router.push({name: 'bindAccount'});
        } else {
          alert(res.data.message)
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
