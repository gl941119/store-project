<template>
  <div class="wrap">
    <div class="cell">
      <span class="cell-name">我的相册</span>
    </div>
    <div class="outer">
      <div class="inner">
        <div class="upload">
          <!--<input name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update" class="upload-input"/>-->
          <div class="upload-input" @click="update"></div>
          <div class="upload-img">
            <img src="../../../assets/image/staff1.png" alt="">
          </div>
        </div>
        <div class="innerPhoto">
          <div  v-for="(item,index,k) in album.listImg"  ref="imgBoxs" class="innerPhotoItem"  >
            <img :src="item" alt="" class="innerPhotoImg" :data-k="index" @click="clickMax(album.listImg,k)" @touchstart="innerPhotoItemEv($event,index)" @touchend="innerPhotoItemEnd($event,index)">
            <van-icon name="close" ref="imgBox" class="innerPhotoItemClose"  @click="innerPhotoItemClose(index)"/>
          </div>
        </div>


      </div>
    </div>
    <van-popup v-model="show" class="circle">
      <van-circle
        v-model="currentRate"
        :rate="currentRate"
        :speed="100"
        :text="text"
        class="circleTxt"
      />
    </van-popup>
  </div>

</template>

<script>
  import axios from 'axios'
  import wxHandle from '../../../utils/wx'
  import { Icon ,Toast,ImagePreview  } from 'vant';
  var c=0;
  export default {
    name: "com-album",
    props:['album'],
    data() {
      return {
        val: {
          name: '我的相册',
          message: '查看全部',
          url: undefined
        },
        status:false,
        longTapTimeout:null,
        longTapDelay:750,
        statusA:null,
        cont:0,
        localIds:'',
        show:false,
        currentRate:0,
        text:''
      }
    },
    mounted(){

    },
    methods: {
      clickMax(list,k){
        let arr=[];
        for(let item in list){
          arr.push(list[item]);
        }
        ImagePreview({
          images: arr,
          startPosition: k,
          onClose() {
            // do something
          }
        });
      },
      innerPhotoItemEv(e,index){
        this.longTapTimeout = setInterval(()=>{
          this.cont=c++;
          // this.longTapTimeout = null;
          // this.status=true;
          // this.statusA= parseInt(e.target.getAttribute('data-k'));
        }, 100);
      },
      innerPhotoItemEnd(e,index){
        clearInterval(this.longTapTimeout);
        this.longTapTimeout = null;
        if (this.status){
          // clearTimeout(this.longTapTimeout);
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
            type:'image',
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
      getLocalImgData(id,thisa){

        let uk = thisa.$store.state.uk || sessionStorage.getItem('uk');
        let urlR='app/index.php?'+thisa.$i+'&c=entry&eid='+thisa.$eid+'&act=fileupload&uk='+uk;
        wxHandle('getLocalImgData',{
          localId: id, // 图片的localID
          success: function (getLocal) {
            thisa.show=true;
            thisa.text = thisa.currentRate.toFixed(0) + '%';
           let str=getLocal.localData;
            thisa.$request({
              url:urlR,
              type:'post',
              data:{
                filestr:str
              }
            }).onUploadProgress((ress)=>{
              alert(ress)
            }).then((res)=>{
              if (res.code === 100) {
                thisa.saver(res.data.imgs);
                thisa.show=false;
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
        // let file = e.target.files[0];
        // let param = new FormData();  // 创建form对象
        //
        // param.append('file', file, file.name);  // 通过append向form对象添加数据
        // param.append('type', 'image');
        // param.append('chunk', '0') // 添加form表单中其他数据
        // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        // axios.defaults.withCredentials = true;
        // let uk = this.$store.state.uk || Cache.getSession('uk');
        // let uk = this.$store.state.uk || sessionStorage.getItem('uk');
        // var url=this.$upUrl+'app/index.php?'+this.$i+'&c=entry&eid='+this.$eid+'&act=fileupload&uk='+uk;
        wxHandle('chooseImage', {//打开相册和相机
          count: 1, // 默认9
          scanType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            self.getLocalImgData(res.localIds[0],self);
            // self.uploadImage(res.localIds[0],self);
          }
        });


        // axios.post(url, param, config)
        //   .then(res => {
        //     if (res.data.code === 100) {
        //       var s=res.data.data.imgs;
        //       this.$toast('上传成功');
        //       this.saver(s);
        //     }
        //
        //   })
      },
      saver(scr){
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=88&act=savestyle',
          type:'post',
          data:{
            ipath:scr,
            type:'image'
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
<style>
  .van-circle__text{
    color: #fff;
  }
</style>
<style lang="scss" scoped>
  .circle{
    background-color: transparent;
  }
  .wrap {
    margin: 15px auto 0;
    padding: 0 15px;
    width: 345px;
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
    width: 75px;
    height: 75px;
    position: relative;
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
</style>
