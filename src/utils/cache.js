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
    return window.localStorage.getItem(name);
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
  // getCookie(name) {
  //     var strCookie = document.cookie;
  //     var arrCookie = strCookie.split("; ");
  //     let login_identify;
  //     for (var i = 0; i < arrCookie.length; i++) {
  //         var arr = arrCookie[i].split("=");
  //         if (arr[0] == name) {
  //             login_identify = arr[1];
  //             break;
  //         }
  //     }
  //     return login_identify;
  // },
  // removeCookie(name) {
  //     var exp = new Date();
  //     exp.setTime(exp.getTime() - 1);
  //     var cval = this.getCookie(name);
  //     if (cval != null)
  //         document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  // }
};
