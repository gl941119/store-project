export default class utils {
  dateFormart(date) {

    // if (!(date instanceof Date)) return;

    let mat = {};

    mat.Y = date.getFullYear();
    mat.M = date.getMonth() + 1; // Month+1
    mat.D = date.getDate();
    mat.H = date.getHours();
    mat.m = date.getMinutes();
    mat.s = date.getSeconds();

    let result = `${mat.Y}-${mat.M}-${mat.D}`;

    return result;
  }
  secondFormart(date) { //后端秒时间戳转毫秒
    return new Date(parseInt(date + '000'));

  }
}
