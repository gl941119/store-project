const protocol = window.location.protocol;
const url = {
  localTestUrl: 'http://local.bzwx.com:80',
  // localTestUrl: 'http://192.168.1.188:8080/',
  productUrl: protocol === 'http:' ? 'http://192.168.1.254:8080/' : 'https://192.168.1.254:8090/',
  // productUrl: protocol === 'http:' ? 'http://api.afdchain.com/' : 'https://api.afdchain.com/',
};

export default {
  url,
  // UploadImg: (process.env.NODE_ENV === 'development' ? url.localTestUrl : url.productUrl) + 'blockchainadvert/common/upload-file',
  // UploadAuthImg: (process.env.NODE_ENV === 'development' ? url.localTestUrl : url.productUrl) + 'blockchainadvert/common/uploadImageWithWatermark',
};
