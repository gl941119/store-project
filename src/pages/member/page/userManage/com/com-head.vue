<template>
  <div class="cell">

    <button v-on:click="chooseImage">12345</button>
    <div class="cell-left">头像</div>
    <div class="cell-right">
      <img :src="avatar" alt="" class="cell-right-img">
      <!--<input  name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="chooseImage" class="cell-right-upload"/>-->
      <van-icon name="arrow" class="cell-right-icon"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Cache from '../../../../../utils/cache'

  export default {
    name: "cell",
    props: ['avatar'],
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      chooseImage() {

        axios.post('http://dev-cd.vasterroad.com/app/index.php?i=1&c=entry&eid=164&act=weixinscan')
          .then((res) => {
            if (res.data.status) {
              var d = res.data.data.config;
              wx.config({
                debug: true, // 开启调试模式,
                appId: d.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: d.timestamp, // 必填，生成签名的时间戳
                nonceStr: d.nonceStr, // 必填，生成签名的随机串
                signature: d.signature,// 必填，签名，见附录1
                jsApiList: ['chooseImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              });
              wx.ready(function () {
                wx.chooseImage({
                  count: 1, // 默认9
                  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                  success: function (res) {
                    var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                   alert(localIds)
                  }
                });
                wx.error(function(res){
                  var s=res+'config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。';
                  alert(s)
                  // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                });
              });
            }
          }).catch((res) => {
          var ss = res + 'catch请求失败';

        });


      },
      update(e) {   // 上传照片
        var self = this;
        let file = e.target.files[0];
        let param = new FormData();  // 创建form对象
        param.append('file', file, file.name);  // 通过append向form对象添加数据
        // param.append('chunk', '0') // 添加form表单中其他数据
        // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        };
        axios.defaults.withCredentials = true;

        let uk = this.$store.state.uk || Cache.getSession('uk');

        axios.post('http://local.bzwx.com/app/index.php?i=1&c=entry&eid=88&act=fileupload&uk=' + uk, param, config)
          .then(res => {
            console.log(res)
            if (res.data.code === 100) {
              this.$toast('上传成功')
              this.$emit('Refresh')
            }

          })
      }

    }
  }
</script>

<style lang="scss" scoped>
  .cell {
    margin: 10px 0;
    padding: 0 15px;
    width: 375px;
    height: 85px;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
      flex: 1;
      font-size: 15px;
      color: rgba(72, 72, 72, 1);
      line-height: 21px;
    }
    &-right {
      flex: 1;
      height: 100%;
      overflow: hidden;
      position: relative;

      &-img {
        position: absolute;
        right: 23px;
        top: 50%;
        margin-top: -30px;
        width: 60px;
        height: 60px;
        border-radius: 250px;
      }
      &-upload {
        position: absolute;
        right: 0px;
        top: 50%;
        margin-top: -30px;
        opacity: 0;
        border: 1px solid red;
        width: 60px;
        height: 60px;
        float: right;
        margin-right: 18px;
        font-size: 13px;
        color: rgba(153, 153, 153, 1);
        line-height: 43px;
      }
      &-icon {
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -20px;
        font-size: 11px;
        color: rgba(153, 153, 153, 1);
        line-height: 45px;

      }
    }
  }


</style>
