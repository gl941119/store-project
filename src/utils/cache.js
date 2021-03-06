/**
 * bier_token     ->     token
 * bier_userid    ->     user id
 * bier_username  ->     account
 * bier_usernickname    ->      nickname
 * bier_langChange    ->      langChange localStorage
 * bier_heardUrl    ->      heardUrl
 * setBalance    ->      balance
 * globalShow    ->      global share
 */
export default {
  getSession(name) {
    if (!name) return;
    return window.sessionStorage.getItem(name);
  },
  setSession(name, content) {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(name, content);
  },
  removeSession(name) {
    if (!name) return;
    window.sessionStorage.removeItem(name);
  },
  getLocal(name) {
    if (!name) return;
    return JSON.parse(window.localStorage.getItem(name));
  },
  setLocal(name, content) {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  },
  removeLocal(name) {
    if (!name) return;
    window.localStorage.removeItem(name);
  },
  encode(str) {//Base64加密
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode('0x' + p1);
      }));
  },
  decode(str) {//Base64解密
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return window.decodeURIComponent(window.atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  },
  getConfig() {
    let config
    if (!window.sessionStorage.getItem('config')) {//url上获取config
      if (window.location.hash.split('?').length != 1) {//url上有config
        let config = window.location.hash.split('?')[1].split('&')[0];
        config= config.replace('%3D','=');
        config = this.decode(config)//解码
        window.sessionStorage.setItem('config', config)
        config = JSON.parse(config)
        return config
      } else {//url上没有config
        // alert('数据获取失败')
        // window.location.href= 'http://dev-cd.vasterroad.com/app/./index.php?i=1&c=entry&eid=160'
        this.$router.push({name:'index'})
      }
    } else {//本地获取config
      config = JSON.parse(window.sessionStorage.getItem('config'))
      return config
    }

  }
};
