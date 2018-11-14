<template>
  <div class="wrap">

    <div class="cell">
      <a class="cell-left" v-on:click="cancelHandle">取消</a>
      <a class="cell-right" v-on:click="confirmHandle">发布</a>
    </div>
    <div class="main" v-for="item,index in arr" :key="index">
      <div class="appraise">
        <img :src="item.thumb" alt="">
        <span>描述相符</span>
        <van-rate v-model="item.score"
                  class="appraise-rate"
                  color="#E93A3D"
                  void-color="#C1C0CD"/>
      </div>
      <div class="fill"></div>
      <textarea class="area" maxlength="200" placeholder="宝贝的效果如何呢？发表一下自己的感受吧"
                v-model="item.content"></textarea>
      <div class="upload">
        <video class="upload-img" :src="val.avatar" v-for="val,num in item.videos"  @click="videoClick($event,val.avatar)" :key="num"></video>
        <img class="upload-img" :src="val.avatar" alt="" v-for="val,num in item.imgs" :key="num">
        <div class="upload-img">
          <img src="../../../../../../assets/image/appraise.png" alt="">
          <p>添加图片</p>
          <div class="upload-img-input" @click="uploadImg(index)"></div>
          <!--<input name="file" type="file" accept="image/png,image/gif,image/jpeg,image/*"-->
                 <!--@change="uploadImg" class="upload-img-input"-->
                 <!--v-on:click="clickUpload(index)"/>-->
        </div>
        <!--<div class="upload-img">-->
          <!--<img src="../../../../../../assets/image/appraise1.png" alt="">-->
          <!--<p>添加视频</p>-->
          <!--<input name="file" type="file" accept="video/mp4，video/avi,video/*"-->
                 <!--@change="uploadVideo" class="upload-img-input"-->
                 <!--v-on:click="clickUpload(index)"-->
          <!--/>-->
        <!--</div>-->

      </div>

      <div class="checkbox">
        <van-checkbox v-model="item.tip" class="checkbox-icon">匿名</van-checkbox>
      </div>
    </div>

    <van-popup v-model="show" :click-overlay="vanPopup()">
      <video class="video" id="myVideo" controls ref="videoSourceRef">
        <source :src="vedioSrc" type="video/mp4">
        <source :src="vedioSrc" type="video/ogg">
        <source :src="vedioSrc" type="video/mpeg">
        您的浏览器不支持Video标签。
      </video>
    </van-popup>

  </div>
</template>

<script>
  import cache from '../../../../../../utils/cache'
  import axios from 'axios'
  import wxHandle from '../../../../../../utils/wx'

  export default {
    name: "index",
    data() {
      return {
        value: 3,
        checked: true,
        arr: this.$route.params.data || JSON.parse(cache.getSession('appraise')),
        area: undefined,
        img: undefined,
        index: undefined,//点击暂存
        show:false,
        vedioSrc:''
      }
    },
    mounted() {
      console.log(this.arr)
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
                thisa.arr[thisa.index].imgs.push({
                  avatar: res.data.avatar,
                  imgs: res.data.imgs
                })
                thisa.$toast('上传成功');
              }else{
                thisa.$toast(res.message);
              }
            }).catch((res)=>{

            });

          }
        });
      },
      vanPopup(){
        setTimeout(()=>{
          let myVideo= document.getElementById('myVideo');
          if(myVideo!=null){
            if(!this.show){
              myVideo.pause();
            }
          }

        },500)
      },
      videoClick(e,src){
        this.show=true;
        this.vedioSrc=src;
      },
      clickUpload(index) {

        this.index = index
      },
      uploadImg(ins) {   // 上传照片
        // alert('准备')
        var self = this;
        this.index = ins;
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
        // // alert(param)
        // let uk = this.$store.state.uk || cache.getSession('uk');
        // // alert(this.$upUrl + 'app/index.php?i=1&c=entry&eid=' + this.$eid + '&act=fileupload&uk=')
        // axios.post(this.$upUrl + 'app/index.php?i=1&c=entry&eid=' + this.$eid + '&act=fileupload&uk=' + uk, param, config)
        //   .then(res => {
        //     console.log(res)
        //     if (res.data.code === 100) {
        //       this.$toast('上传成功')
        //       this.arr[this.index].imgs.push({
        //         avatar: res.data.data.avatar,
        //         imgs: res.data.data.imgs
        //       })
        //     }
        //
        //   })
      },
      uploadVideo(e) {
        var self = this;
        let file = e.target.files[0];
        let param = new FormData();  // 创建form对象
        param.append('file', file, file.name);  // 通过append向form对象添加数据
        // param.append('type', 'video') // 添加form表单中其他数据
        // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        };
        // alert(file.name)
        axios.defaults.withCredentials = true;
        let uk = this.$store.state.uk || cache.getSession('uk');
        axios.post(this.$upUrl + 'app/index.php?i=1&c=entry&eid=' + this.$eid + '&act=fileuploadvideo&uk=' + uk, param, config)
          .then(res => {

            if (res.data.code === 100) {
              this.arr[this.index].videos.push({
                avatar: res.data.data.avatar,
                videos: res.data.data.videos
              });
              // alert(res.data.data.avatar)
              this.$toast('上传成功')
            }

          })

      },
      changeValue(val) {
        this.value = val
      },
      cancelHandle() {//取消返回
        this.$dialog.confirm({
          title: '是否放弃评论？',
          message: ''
        }).then(() => {
          this.$router.go(-1)
        }).catch(() => {
          // on cancel
        });

      },
      confirmHandle() { //确认上传
        let arr = this.arr
        arr.forEach(item => {
          item.tip = item.tip === true ? '1' : '0'
          item.score = item.score * 2
        })
        let result = [{
          orderid: this.$route.params.id,
          goods: arr,
        }]


        this.$dialog.confirm({
          title: '是否发布评论',

        }).then(() => {
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=87&act=goodsdiscuss',
            type: 'post',
            data: {
              discuss: JSON.stringify(result)
            }
          }).then((res) => {
            if (res.code === 100) {
              this.$toast.success('评论成功')
              let thia = this
              setTimeout(() => {
                thia.$router.push({name: 'index'})
              }, 500)

            }
          })
        }).catch(() => {
          // on cancel
        });


      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    background-color: #F4F4F4;
  }

  .main {
    margin-top: 10px;
    width: 100%;
    padding: 0 15px;
    background-color: white;
  }

  .appraise {
    width: 100%;
    height: 50px;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > img {
      width: 40px;
      height: 40px;

    }
    > span {
      margin-left: 10px;
      /*width: 60px;*/
      height: 21px;
      font-size: 15px;
      font-family: PingFangSC-Regular;
      color: rgba(102, 102, 102, 1);
      line-height: 21px;
    }
    &-rate {
      margin-left: 10px;
    }
  }

  .fill {
    margin-left: -15px;
    width: 375px;
    height: 1px;
    background: rgba(216, 216, 216, 1);
  }

  .area {
    margin-top: 15px;
    height: 100px;
    width: 100%;
    font-size: 15px;
    font-family: PingFangSC-Regular;
    color: rgba(193, 192, 205, 1);
    line-height: 21px;
  }

  .upload {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: relative;
    &-img {
      margin-right: 10px;
      width: 80px;
      height: 80px;
      border: 1px solid #C1C0CD;
      border-style: dashed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > p {
        margin-top: 5px;
        width: 52px;
        height: 19px;
        font-size: 13px;
        font-family: PingFangSC-Regular;
        color: rgba(193, 192, 205, 1);
        line-height: 19px;
      }
      &-input {
        width: 80px;
        height: 80px;
        position: absolute;
        opacity: 0;
      }
    }
    &-video {
      margin-right: 10px;
      width: 80px;
      height: 80px;
      border: 1px solid #979797;
      border-style: dotted
    }

  }

  .checkbox {
    margin-top: 15px;
    height: 46px;
    border-top: 1px solid rgba(216, 216, 216, 1);
    &-icon {
      font-size: 15px;
      font-family: PingFangSC-Regular;
      color: rgba(51, 51, 51, 1);
      line-height: 46px;
    }

  }

  .cell {
    background-color: #FFFFFF;
    padding: 0 15px;
    width: 375px;
    height: 44px;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
      /*width: 30px;*/
      height: 21px;
      font-size: 15px;

      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      line-height: 21px;
    }
    &-right {
      /*width: 30px;*/
      height: 21px;
      font-size: 15px;
      font-weight: 500;
      color: rgba(113, 179, 255, 1);
      line-height: 21px;
    }
  }
  .video{
    width: 345px;
  }
</style>
