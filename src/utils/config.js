const protocol = window.location.protocol;
const url = {
  localTestUrl: 'http://dev-cd.vasterroad.com',
  // localTestUrl: 'http://192.168.1.188:8080/',
  productUrl: protocol === 'http:' ? 'http://120.79.209.242:80' : 'http://120.79.209.242:80',
  // productUrl: protocol === 'http:' ? 'http://api.afdchain.com/' : 'https://api.afdchain.com/',
};

export default {
  url,
  // UploadImg: (process.env.NODE_ENV === 'development' ? url.localTestUrl : url.productUrl) + 'blockchainadvert/common/upload-file',
  // UploadAuthImg: (process.env.NODE_ENV === 'development' ? url.localTestUrl : url.productUrl) + 'blockchainadvert/common/uploadImageWithWatermark',
};
