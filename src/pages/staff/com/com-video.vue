<template>
  <div class="wrap">
    <div class="cell">
      <span class="cell-name">我的视频</span>
    </div>
    <div class="outer">
      <div class="inner">
        <div class="upload">
          <input name="file" type="file" accept="video/avi,video/mp4,video/flv,video/3gp,video/swf" @change="update" class="upload-input"/>
          <div class="upload-img">
            <img src="../../../assets/image/staff1.png" alt="">
          </div>
        </div>
        <div class="innerPhoto">
          <div  v-for="(item,index) in video.listVideo"  ref="imgBoxs" class="innerPhotoItem"  >
            <!--<canvas class="movie" ref="canvasImg"></canvas>-->
            <video class="movie" preload="metadata" @canplay="videoSource($event,index)" controls  ref="videoSource" ><source :src="item.video" type="video/mp4" /></video>
            <van-icon name="close" ref="imgBox" class="innerPhotoItemClose"  @click="innerPhotoItemClose(index)"/>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
  import axios from 'axios'
  import { Icon ,Toast } from 'vant';
  export default {
    name: "com-video",
    props:['video'],
    data() {
      return {
        val: {
          name: '我的视频',
          message: '查看全部',
          url: undefined
        },
        status:false,
        longTapTimeout:null,
        longTapDelay:750,
        statusA:null,
        cont:0
      }
    },
    mounted(){

      this.videoSource(0);
    },
    methods: {

      videoSource(index){
        let videos = this.$refs.videoSource;
        // videos.forEach((video) => {
        //   let canvas = this.$refs.canvasImg[index];
        //   let src = canvas.toDataURL('image/png');
        //   this.$refs.videoSource.setAttribute('poster',src);
        //   canvas.getContext('2d').drawImage(video, 0, 0);
        // });
      },
      innerPhotoItemEv(e,index){
        this.longTapTimeout = setTimeout(()=>{
          this.cont++;
        }, 100);
      },
      innerPhotoItemEnd(e,index){
        this.longTapTimeout = null;
        this.status=true;
        this.statusA= parseInt(e.target.getAttribute('data-k'));
        if (this.status){
          clearTimeout(this.longTapTimeout);
        }else{
          this.longTapTimeout = null;
          this.status=false;
        }
      },
      innerPhotoItemClose(index){

        this.$request({
          url:'app/index.php?i=1&c=entry&eid=88&act=delstyle',
          type:'post',
          data:{
            type:'video',
            ids:index.toString()
          }
        }).then((res)=>{
          if(res.code==100){
            Toast.success('删除成功！');
            this.$emit('init');
          }else{
            Toast.fail('删除失败！');
          }
        });
      },
      update(e) {   // 上传照片
        var self = this;
        let file = e.target.files[0];
        let param = new FormData();  // 创建form对象

        param.append('file', file, file.name);  // 通过append向form对象添加数据
        // param.append('type', 'image');
        // param.append('chunk', '0') // 添加form表单中其他数据
        // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        axios.defaults.withCredentials = true;
        // let uk = this.$store.state.uk || Cache.getSession('uk');
        let uk = this.$store.state.uk || sessionStorage.getItem('uk');
        var url=this.$upUrl+'app/index.php?i=1&c=entry&eid='+this.$eid+'&act=fileuploadvideo&uk=';
        axios.post(url + uk, param, config)
          .then(res => {
            if (res.data.code === 100) {
              var s=res.data.data.videos;
              this.$toast('上传成功');
              this.saver(s);
            }

          })
      },
      saver(scr){
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=88&act=savestyle',
          type:'post',
          data:{
            ipath:'',
            vpath:scr,
            type:'video'
          }
        }).then((res)=>{
          if(res.status){
            this.$emit('init');
          }
        });
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
    padding: 24px 0;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    .inner {
      /*height: 75px;*/
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
  .innerPhoto{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .innerPhotoItem{
    margin-right: 15px;
    width: 73px;
    height: 73px;
    position: relative;
    border: 1px solid rgba(200, 200, 200, 0.5);
  }
  .innerPhotoImg{
    width: 75px;
    height: 75px;
  }
  .innerPhotoItemClose{
    position: absolute;
    top:-17px;
    right:-17px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    border-radius: 50%;
  }
  .movie{
    width: 75px;
    height: 75px;
  }

  .cell {

    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    &-name {
      flex: 1;
      color: rgba(51, 51, 51, 1);
      font-size: 15px;
      font-family: PingFangSC-Regular;
    }
    &-content {
      margin-right: 10px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      color: rgba(102, 102, 102, 1);
    }
    &-icon {
      font-size: 10px;
      right: 0;
    }
    .fill {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: rgba(216, 216, 216, 1);
    }
  }
</style>
