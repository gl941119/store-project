const protocol = window.location.protocol;
const url = {
  localTestUrl: 'http://192.168.3.23:80',
  // localTestUrl: 'http://192.168.1.188:8080/',
  productUrl: protocol === 'http:' ? 'http://192.168.3.23:80' : 'http://192.168.3.23:80',
  // productUrl: protocol === 'http:' ? 'http://api.afdchain.com/' : 'https://api.afdchain.com/',
};

export default {
  url,
  // UploadImg: (process.env.NODE_ENV === 'development' ? url.localTestUrl : url.productUrl) + 'blockchainadvert/common/upload-file',
  // UploadAuthImg: (process.env.NODE_ENV === 'development' ? url.localTestUrl : url.productUrl) + 'blockchainadvert/common/uploadImageWithWatermark',
};
