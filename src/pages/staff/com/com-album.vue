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
            <img :src="item" alt="" class="innerPhotoImg"  v-on:click.stop="clickMax(album.listImg,index)" @touchstart="innerPhotoItemEv($event,index)" @touchend="innerPhotoItemEnd($event,index)">
            <van-icon name="close" ref="imgBox" class="innerPhotoItemClose"  v-on:click.stop="innerPhotoItemClose(index)"/>
          </div>
        </div>


      </div>
    </div>
    <van-popup v-model="showJinDu" :click-overlay="circleEvent" class="circle">
      <van-circle
        v-model="currentRate"
        :rate="currentRate"
        :speed="100"
        :text="textJinDu"
        class="circleTxt"
      />
    </van-popup>
  </div>

</template>

<script>
  import axios from 'axios'
  import wxHandle from '../../../utils/wx'
  import { Icon ,Toast,ImagePreview  } from 'vant';
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
        currentRate:1,
        showJinDu:false,
        textJinDu:'',
      }
    },
    mounted(){

    },
    methods: {
      circleEvent(){
        this.show=false;
      },
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
        let urlR=thisa.$upUrl+'app/index.php?'+thisa.$i+'&c=entry&eid='+thisa.$eid.eid+'&dom='+thisa.$eid.dom+'&act=fileupload&uk='+uk;
        wxHandle('getLocalImgData',{
          localId: id, // 图片的localID
          success: function (getLocal) {
           let str=getLocal.localData;
            thisa.showJinDu=true;
            var params = new URLSearchParams();
            params.append('filestr', str);
            axios({
              url: urlR,
              method: 'post',
              data:params,
              headers: {
                'Content-Type':'application/x-www-form-urlencoded'
              },
              onUploadProgress: function (progressEvent) { //原生获取上传进度的事件
                if (progressEvent.lengthComputable) {
                  //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                  //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
                  thisa.currentRate =(progressEvent.loaded / progressEvent.total * 100 | 0);
                  thisa.textJinDu = thisa.currentRate + '%';
                }
              },
            }).then(res => {
              if (res.data.code === 100) {
                thisa.showJinDu=false;
                thisa.saver(res.data.data.imgs);
              }else{
                thisa.showJinDu=false;
                thisa.$toast(res.data.message);
              }
            })
//             thisa.$request({
//               url:urlR,
//               type:'post',
//               data:{
//                 filestr:str
//               },
//               onUploadProgress:(progressEvent)=>{
// alert(progressEvent)
//               }
//             }).then((res)=>{
//               if (res.code === 100) {
//                 thisa.saver(res.data.imgs);
//                 thisa.show=false;
//               }else{
//                 thisa.$toast(res.message);
//               }
//             }).catch((res)=>{
//
//             });

          }
        });
      },
      update(e) {   // 上传照片
        var self = this;
        //
        // let uk = self.$store.state.uk || sessionStorage.getItem('uk');
        // let urlR=self.$upUrl+'app/index.php?'+self.$i+'&c=entry&eid='+self.$eid+'&act=fileupload&uk='+uk;
        // let str='data:image/jgp;base64,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';
        // self.show=true;
        // self.text = self.currentRate.toFixed(0) + '%';
        // var params = new URLSearchParams();
        // params.append('filestr', str);
        // axios({
        //   url: urlR,
        //   method: 'post',
        //   data:params,
        //   headers: {
        //     'Content-Type':'application/x-www-form-urlencoded'
        //   },
        //   onUploadProgress: function (progressEvent) { //原生获取上传进度的事件
        //     if (progressEvent.lengthComputable) {
        //       //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
        //       //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
        //       self.currentRate =(progressEvent.loaded / progressEvent.total * 100 | 0);
        //       self.text = self.currentRate.toFixed(0) + '%';
        //     }
        //   },
        //
        // }).then(res => {
        //   if (res.code === 100) {
        //     let c=res+'---'+res.data.imgs;
        //     self.show=false;
        //   }else{
        //     let c=res+'-++++-'+res.message;
        //   }
        // })
//
//         self.$request({
//               url:urlR,
//               type:'post',
//               data:{
//                 filestr:str
//               },
//               onUploadProgress:(progressEvent)=>{
// alert(progressEvent)
//               }
//             }).then((res)=>{
//               if (res.code === 100) {
//                 // self.saver(res.data.imgs);
//                 // self.show=false;
//               }else{
//                 // self.$toast(res.message);
//               }
//             }).catch((res)=>{
//
//             });


        // let file = e.target.files[0];
        // let param = new FormData();  // 创建form对象
        //
        // param.append('file', file, file.name);  // 通过append向form对象添加数据
        // param.append('type', 'image');
        // param.append('chunk', '0') // 添加form表单中其他数据
        // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
        // let config = {
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   }
        // };
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
<style lang="scss" scoped>
  .circle{
    background-color: transparent;
  }
  .circleTxt{
    background-color: #fff;
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
    top:-12px;
    right:-12px;
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
