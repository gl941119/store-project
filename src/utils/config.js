const protocol = window.location.protocol;

const url = {
  // localTestUrl: 'http://dev-cd.vasterroad.com',
  localTestUrl: 'http://192.168.3.23:80',
  // localTestUrl: 'http://dev-cd.vasterroad.com',
  productUrl: JSON.parse(window.sessionStorage.getItem('config'))['domain'],
  // productUrl: protocol === 'http:' ? 'http://api.afdchain.com/' : 'https://api.afdchain.com/',
};

export default {
  url,
  // UploadImg: (process.env.NODE_ENV === 'development' ? url.localTestUrl : url.productUrl) + 'blockchainadvert/common/upload-file',
  // UploadAuthImg: (process.env.NODE_ENV === 'development' ? url.localTestUrl : url.productUrl) + 'blockchainadvert/common/uploadImageWithWatermark',
};
