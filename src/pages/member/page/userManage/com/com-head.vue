<template>
  <div class="cell">
    <div class="cell-left">头像</div>
    <div class="cell-right">
      <img :src="avatar" alt="" class="cell-right-img">
      <div @change="update" class="cell-right-upload"></div>
      <!--<input  name="file" type="file" accept="image/png,image/gif,image/jpeg,image/*"  @change="update" class="cell-right-upload"/>-->
      <van-icon name="arrow" class="cell-right-icon"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Cache from '../../../../../utils/cache'
  import wxHandle from '../../../../../utils/wx'
  export default {
    name: "cell",
    props: ['avatar'],
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
    getLocalImgData(id,thisa){

      let uk = thisa.$store.state.uk || sessionStorage.getItem('uk');
      let urlR='app/index.php?'+thisa.$i+'&c=entry&eid='+thisa.$eid+'&act=fileupload&uk='+uk;
      wxHandle('getLocalImgData',{
        localId: id, // 图片的localID
        success: function (getLocal) {
          let str=getLocal.localData;
          thisa.$request({
            url:urlR,
            type:'post',
            data:{
              filestr:str
            }
          }).then((res)=>{
            if (res.code === 100) {
              thisa.saver(res.data.imgs);
            }else{
              thisa.$toast(res.message);
            }
          }).catch((res)=>{

          });

        }
      });
    },
      update(e) {   // 上传照片

        var self = this;
        wxHandle('chooseImage', {//打开相册和相机
          count: 1, // 默认9
          scanType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            self.getLocalImgData(res.localIds[0],self);
            // self.uploadImage(res.localIds[0],self);
          }
        });
        // let file = e.target.files[0];
        // let param = new FormData();  // 创建form对象
        // param.append('file', file, file.name);  // 通过append向form对象添加数据
        // // param.append('chunk', '0') // 添加form表单中其他数据
        // // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
        // let config = {
        //   headers: {'Content-Type': 'multipart/form-data'}
        // };
        // axios.defaults.withCredentials = true;
        //
        // let uk = this.$store.state.uk || Cache.getSession('uk');
        // var url=this.$upUrl+'app/index.php?'+this.$i+'&c=entry&eid='+this.$eids+'&act=fileupload&uk=';
        // axios.post(url + uk, param, config)
        //   .then(res => {
        //     if (res.data.code === 100) {
        //       this.$toast('上传成功');
        //       this.$emit('Refresh')
        //     }
        //   }).catch((res)=>{
        //     // alert(res+'catch')
        // })
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
