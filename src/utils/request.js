import axios from 'axios';
import Vue from 'vue';
import qs from 'qs';
import store from '../store';
import Cache from './cache';
import {Toast} from 'vant';
import config from './config';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? config.url.localTestUrl : config.url.productUrl;

axios.defaults.withCredentials = true;

async function ajaxRequest(url = '', data = {}, type = 'POST', isJson = false) {

  url = url.replace('eid=84','eid=153');
  url = url.replace('eid=85','eid=154');
  url = url.replace('eid=86','eid=155');
  url = url.replace('eid=87','eid=156');
  url = url.replace('eid=88','eid=157');
  url = url.replace('eid=89','eid=158');





  // url = url.replace('eid=84', 'eid=160')
  // url = url.replace('eid=85', 'eid=161')
  // url = url.replace('eid=86', 'eid=162')
  // url = url.replace('eid=87', 'eid=163')
  // url = url.replace('eid=88', 'eid=164')
  // url = url.replace('eid=89', 'eid=165')

  type = type.toUpperCase();
  let uk = store.state.uk || Cache.getSession('uk');
  data['uk'] = uk;
  if (type === 'GET') {
    return axios.get(url, {
      params: data,
      headers: {},
    });
  } else if (type === 'POST') {
    if (isJson) {
      return axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
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
  Toast.loading({
    duration: 0,
    mask: true,
    message: '加载中...'
  });
  const {url, data, type, flag} = params;
  return new Promise((resolve, reject) => {
    ajaxRequest(url, data, type, flag).then(
      res => {
        if (res.data.uk) {
          store.commit('setUk', res.data.uk);
          Cache.setSession('uk', res.data.uk)
        }
        if (res.data.user.is_member) {
          store.commit('setIs_member', res.data.user.is_member);
          Cache.setSession('is_member', res.data.user.is_member)
        }

        if (res.data.user.store) {
          store.commit('setStore', res.data.user.store);
          Cache.setSession('store', res.data.user.store)
        }


        if (res.data.code === 108) {
          Toast.fail(res.data.message);
        }
        if (res.data.code === 100 || res.data.code === 107 || res.data.code === 103) {
          Toast.clear();
        }
        if (res.data.code === 105) {
          Toast.clear();
          this.$router.push({name: 'bindAccount'});
        }
        resolve(res.data);

        // const { data, success, message } = res.data;
        // console.log('requestHandle-[%s]->', url, res.data);
        // if (success === 1) {
        //   resolve(res.data);
        // } else {
        //   if (data && data.islogin) {
        //     store.commit('setUserId', undefined);
        //     store.commit('setUserName', undefined);
        //     store.commit('setUserNickName', undefined);
        //     store.commit('setToken', undefined);
        //     Cache.removeSession('bier_username');
        //     Cache.removeSession('bier_token');
        //     Cache.removeSession('bier_userid');
        //     Cache.getSession('bier_usernickname') && Cache.removeSession('bier_usernickname');
        //     // location.href = "/userManage";
        //   }
        //   reject(res.data);
        //   if (message !== '1004') {
        //     Toast(utils.judgeLanguage(utils.getCurrLanguage(store), message));
        //   }
        // }
      },
      rej => {

        Toast.fail('网络错误!');

        reject(rej);
      }
    );
  });
}

export default requestHandle;
