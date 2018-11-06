<template>
  <div class="wrap">
    <cell :Data="val" class="h53"></cell>
    <div class="outer">
      <div class="inner">
        <div class="upload">
          <input name="file" type="file" accept="video/avi,video/mp4,video/flv,video/3gp,video/swf,image/png,image/gif,image/jpeg" @change="update" class="upload-input"/>
          <div class="upload-img">
            <img src="../../../assets/image/staff1.png" alt="">
          </div>
        </div>
        <img :src="item" alt="" class="inner-photo" v-for="item in album.listImg">

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "com-album",
    props:['album'],
    data() {
      return {
        val: {
          name: '我的相册',
          message: '查看全部',
          url: undefined
        }
      }
    },
    mounted(){

    },
    methods: {

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
        // let uk = this.$store.state.uk || Cache.getSession('uk');
        let uk = this.$store.state.uk || sessionStorage.getItem('uk');
        axios.post('http://local.bzwx.com/app/index.php?i=1&c=entry&eid=87&act=fileupload&uk=' + uk, param, config)
          .then(res => {
            if (res.data.code === 100) {
              this.$toast('上传成功');
              this.$emit('init');
            }

          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    margin: 15px auto 0;
    padding: 0 15px;
    width: 345px;
    height: 163px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 8px 0px rgba(200, 200, 200, 0.5);
    border-radius: 4px;
  }
  .outer {
    margin-top: 14px;
    width: 100%;
    height: 75px;
    overflow-x: scroll;
    overflow-y: hidden;
    .inner {

      width: 1000px;/*动态设定*/
      height: 75px;
      overflow: hidden;
      .upload{
        margin-right: 15px;
        float: left;
        position: relative;
        width: 75px;
        height: 75px;
        &-input{
          position: absolute;
          z-index: 2;
          width: 75px;
          height: 75px;
          opacity: 0;
        }
        &-img{
          position: absolute;
          width: 75px;
          height: 75px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url("../../../assets/image/staff2.png") no-repeat center center;
        }
      }
      &-photo{
        margin-right: 15px;
        float: left;
        width: 75px;
        height: 75px;
      }
    }
  }
</style>
