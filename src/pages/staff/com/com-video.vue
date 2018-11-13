<template>
  <div class="wrap">
    <div class="cell">
      <span class="cell-name">我的视频</span>
    </div>
    <div class="outer">
      <div class="inner">
        <div class="upload" @click="upPop()">
          <div class="upload-img">
            <img src="../../../assets/image/staff1.png" alt="">
          </div>
        </div>
        <div class="innerPhoto">
          <div  v-for="(item,index) in video.listVideo"  ref="imgBoxs" class="innerPhotoItem"  >
            <img :src="item.image" class="movie">
            <div class="movieBtn" @click="movieBtn(item.video)"><span></span></div>
            <!--<canvas class="movie" ref="canvasImg"></canvas>-->
            <van-icon name="close" ref="imgBox" class="innerPhotoItemClose"  @click="innerPhotoItemClose(index)"/>
          </div>
        </div>

      </div>
    </div>

    <van-popup class="showBox" @click-overlay="vanPopup()" v-model="show">
      <div class="upVedio">
        <div class="upVedioTxt">视频封面</div>
        <div class="upVedioTBox">
          选择文件
          <div class="upVedioIn" @change="upData('fileupload',$event)"></div>
          <!--<input class="upVedioIn" name="file" ref="vImg" type="file" accept="image/*,image/png,image/gif,image/jpeg"    @change="upData('fileupload',$event)"/>-->
        </div>
        <div class="gouzi" v-if="imgGou">√</div>
      </div>
      <div class="upVedio">
        <div class="upVedioTxt">上传视频</div>
        <div class="upVedioTBox">
          选择文件
          <input name="file" class="upVedioIn" ref="vVideo" type="file" accept="video/*,video/avi,video/mp4,video/flv,video/3gp,video/swf"     @change="upDataV('fileuploadvideo',$event)" />
        </div>
        <div class="gouzi" v-if="vdGou">√</div>

      </div>
      <div class="bindAccountSubmitBox">
        <div class="bindAccountSubmit" @click="bindAccountSubmit()">提交</div>
      </div>
    </van-popup>
    <van-popup class="showBox" v-model="videoShow">
      <video id="myvideo" class="myvideo" preload="metadata" @canplay="videoSource($event)" controls  ref="videoVideo" ><source  :src="sourcSrc" type="video/mp4" /></video>
    </van-popup>
  </div>
</template>

<script>
  import axios from 'axios'
  import wxHandle from '../../../utils/wx'
  import { Icon ,Toast,Popup  } from 'vant';
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
        cont:0,
        show:false,
        vedioSrc:null,
        imgSrc:null,
        formF:null,
        videoShow:false,
        sourcSrc:'',
        isPlay:false,
        vdGou:false,
        imgGou:false,
      }
    },
    mounted(){

      this.videoSource(0);
    },
    methods: {
      vanPopup(){
        this.vdGou=false;
          this.imgGou=false;
      },
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
      upData(str,e){

        let self=this;
        wxHandle('chooseImage', {//打开相册和相机
          count: 1, // 默认9
          scanType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            self.getLocalImgData(res.localIds[0],self);
            // self.uploadImage(res.localIds[0],self);
          }
        });
        // let file=e.target.files[0];
        // let param = new FormData();  // 创建form对象
        // param.append('file', file, file.name);
        // let config = {
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   }
        // };
        // axios.defaults.withCredentials = true;
        // let uk = this.$store.state.uk || sessionStorage.getItem('uk');
        // var url=this.$upUrl+'app/index.php?'+this.$i+'&c=entry&eid='+this.$eid+'&act='+str+'&uk=';
        // alert(file.name)
        // axios.post(url + uk, param, config)
        //   .then(res => {
        //     if (res.data.code === 100) {
        //       var s=res.data.data;
        //       if(s.imgs!=undefined){
        //         sefl.imgSrc=s.imgs;
        //         e.target.value='';
        //         this.imgGou=true;
        //       }else{
        //         sefl.vedioSrc=s.videos;
        //         e.target.value='';
        //         this.vdGou=true;
        //       }
        //     }else{
        //       var ms=res.data.code+'---'+res.data.message;
        //       alert(res.data.message)
        //     }
        //
        //   }).catch((res)=>{
        //
        // })
      },
      upDataV(str,e){

        let self=this;
        let file=e.target.files[0];
        let param = new FormData();  // 创建form对象
        param.append('file', file, file.name);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        axios.defaults.withCredentials = true;
        let uk = this.$store.state.uk || sessionStorage.getItem('uk');
        var url=this.$upUrl+'app/index.php?'+this.$i+'&c=entry&eid='+this.$eid+'&act='+str+'&uk=';
        alert(file.name)
        axios.post(url + uk, param, config)
          .then(res => {
            if (res.data.code === 100) {
              var s=res.data.data;
              if(s.imgs!=undefined){
                sefl.imgSrc=s.imgs;
                e.target.value='';
                this.imgGou=true;
              }else{
                sefl.vedioSrc=s.videos;
                e.target.value='';
                this.vdGou=true;
              }
            }else{
              var ms=res.data.code+'---'+res.data.message;
              alert(res.data.message)
            }

          }).catch((res)=>{

        })
      },
      bindAccountSubmit(){
        if(this.vedioSrc&&this.imgSrc){
          this.$toast('上传成功');
          this.saver(this.imgSrc,this.vedioSrc)
        }else{
          this.$toast('封面and视频地址不能为空！');
        }

  },
      movieBtn(src){
        this.videoShow=true;
        this.sourcSrc=src;
      },
      upPop(){
        this.show=true;
      },
      videoSource(e){
        // let dom = document.getElementById('myvideo');
        // this.isPlay = !this.isPlay;
        // dom.play();
        // let videos = this.$refs.videoSource;
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
      saver(im,vd){
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=88&act=savestyle',
          type:'post',
          data:{
            ipath:im,
            vpath:vd,
            type:'video'
          }
        }).then((res)=>{
          if(res.status){
            this.$emit('init');
            this.show=false;
            this.formF.value='';
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .upVedio{
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .myvideo{
    width: 354px;
    margin: 0 auto;
  }
  .bindAccountSubmit{
    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    width:296px;
    height:43px;
    background:rgba(113,179,255,1);
    border-radius:4px;
    margin: 0 auto;
    text-align: center;
    line-height: 43px;
  }
  .showBox{
    padding: 5px;
  }
  .bindAccountSubmitBox{
    padding: 30px 0;
  }
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
    padding-top: 10px;
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
  .upVedioTxt{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    padding-right: 10px;
  }
  .upVedioTBox{
    width: 100px;
    overflow: hidden;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    line-height: 20px;
    position: relative;
    text-align: center;
  }
  .upVedioIn{
    width: 100px;
    font-size: 20px;
    opacity: 0;
    position: absolute;
    top:0px;
    left: 0px;

  }
  .movieBtn{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    z-index: 10;
    border-radius: 50%;
    text-align: center;
  }
  .movieBtn span{
    display: block;
    width:0;
    height:0;
    border-top:8px solid transparent;
    border-bottom:8px solid transparent;
    border-left:10px solid #000;
  }
  .gouzi{
    color: red;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 400;
  }
</style>
