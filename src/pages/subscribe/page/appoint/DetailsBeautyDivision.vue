<template>
<div class="DetailsBeautyDivisionBox">

  <div class="DetailsBeautyDivisionH">
    <img :src="bannerImg" class="DetailsBeautyDivisionImg">
  </div>
  <div class="DetailsBeautyDivisionC">
    <div class="DetailsBeautyDivisionPadding">
      <div class="DetailsBeautyDivisionHead">
        <div class="DetailsBeautyDivisionHeadFlex">
          <div class="DetailsBeautyDivisionHImg"><img  :src="avatar" /></div>
          <div class="DetailsBeautyDivisionH1">
            <div class="DetailsBeautyDivisionH2">
              <div class="DetailsBeautyDivisionName">{{ name }}</div>
              <div class="DetailsBeautyDivisionName1">{{ task }}</div>
            </div>
            <div class="DetailsBeautyDivisionName1">{{ signature }}</div>
          </div>
        </div>
        <div>
          <div class="isCollectsBox"><div  @click="isShouC" :class="[is_collect?'isCollects':'isCollectsEqs']">{{ is_collect?'已收藏':'收藏' }}</div></div>
          <div class="DetailsBeautyDivisionBtn" @click="liJiBtn()">立即预约</div>
        </div>

      </div>

      <div class="DetailsBeautyDivisionCont">

        <div class="DetailsBeautyDivisionContTitle">
          <div class="DetailsBeautyDivisionContTitleIcon"></div>
          <div class="DetailsBeautyDivisionContTitleTxt">自我介绍</div>
        </div>
        <div class="DetailsBeautyDivisionContTitleTxtPop">{{ intro }}</div>


        <div class="DetailsBeautyDivisionContTitle">
          <div class="DetailsBeautyDivisionContTitleIcon"></div>
          <div class="DetailsBeautyDivisionContTitleTxt">擅长项目</div>
        </div>
        <div class="DetailsBeautyDivisionContTitleTxtPop">
          <span class="DetailsBeautyDivisionContTitleTxtSpan" v-for="item in goodproject">{{ item.name }}</span>
        </div>

        <div class="DetailsBeautyDivisionContTitle">
          <div class="DetailsBeautyDivisionContTitleIcon"></div>
          <div class="DetailsBeautyDivisionContTitleTxt">擅长仪器</div>
        </div>
        <div class="DetailsBeautyDivisionContTitleTxtPop">
          <span class="DetailsBeautyDivisionContTitleTxtSpan" v-for="item in goodsinstrument">{{ item.name }}</span>
        </div>


        <div class="DetailsBeautyDivisionContTitle">
          <div class="DetailsBeautyDivisionContTitleIcon"></div>
          <div class="DetailsBeautyDivisionContTitleTxt">个人风采</div>
        </div>
        <div class="DetailsBeautyDivisionContVoid">
          <div class="DetailsBeautyDivisionContVoidItem"  v-for="(item,index) in style">
            <img :src="item" class="DetailsBeautyDivisionContVoidItemImg" @click="imgEvent(style,index)">
          </div>
          <div class="DetailsBeautyDivisionContVoidItem"  v-for="(items,indexs) in styleV">
            <img :src="items.image" class="DetailsBeautyDivisionContVoidItemImg">
            <div class="movieBtn" @click="movieBtn(items.video)"><span></span></div>
          </div>
        </div>

        <div class="DetailsBeautyDivisionContTitle">
          <div class="DetailsBeautyDivisionContTitleIcon"></div>
          <div class="DetailsBeautyDivisionContTitleTxt">美丽印象</div>
        </div>
        <div class="DetailsBeautyDivisionCoiv DetailsBeautyDivisionContYx">
          <div class="DetailsBeautyDivisionContYxItem" v-for="item in mevals">{{ item.name }} {{ item.up }}</div>
        </div>

      </div>


    </div>
  </div>
  <van-popup v-model="show" :click-overlay="vanPopup()">
    <video class="video" id="myVideo" controls ref="videoSourceRef">
      <source :src="vedioSrc" type="video/mp4">
      您的浏览器不支持Video标签。
    </video>
  </van-popup>
</div>
</template>

<script>

  import { Popup ,ImagePreview,Icon} from 'vant';
    export default {
        name: "DetailsBeautyDivision",
      data(){
          return{
            id:this.$route.params.id,
            sid:this.$route.params.sid,
            bannerImg:'',//banner
            avatar:'',//头像
            signature:'',//个性签名
            goodproject:[],//擅长项目
            goodsinstrument:[],//擅长仪器
            style:[],//个人风采 图片
            styleV:[],//个人风采 视频
            mevals:[],//美丽印象
            up:0,//数量
            task:'',//几星美师
            name:'',
            intro:'',//个人介绍
            show:false,
            vedioSrc:'',
            isPlay:false,
            _dom:null,
            playStatus:'',
            is_collect:null,
            ids:'',
            isSc:'收藏'
          }
      },
      mounted(){
        this.init();
      },
      methods:{
        isShouC(){
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=87&act=collection',
            type: 'get',
            data: {
              type: '3',
              id: this.id
            }
          }).then(res => {
            if (res.code === 100) {
              this.is_collect = !this.is_collect
            }
          })
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
        movieBtn(src){
          this.vedioSrc=src;
          this.show=true;
          setTimeout(()=>{
            let myVideo= document.getElementById('myVideo');
          myVideo.setAttribute('s','1');
            myVideo.play();
          },500)


        },
        imgEvent(list,index){
          ImagePreview({
            images: list,
            startPosition: index,
            onClose() {
              // do something
            }
          });
        },
          init(){
            this.$request({
              url:'app/index.php?i=1&c=entry&eid=86&act=memberpage',
              type:'get',
              data:{
                id:this.id
              }
            }).then((res) => {
              if(res.status){
                var data=res.data;
                var member=data.member;
                this.bannerImg=data.background_img;
                this.avatar=member.avatar;
                this.name=member.name;
                this.signature=member.signature;
                this.goodproject=member.goodproject!=undefined?JSON.parse(member.goodproject):'';
                this.goodsinstrument=member.goodsinstrument!=undefined?JSON.parse(member.goodsinstrument):'';
                this.style=member.style!=undefined?member.style.image:[];
                this.styleV=member.style!=undefined?member.style.video:[];
                this.mevals=data.mevals;
                this.up=member.up;
                this.task=member.task;
                this.intro=member.intro;
                this.ids=member.id;
                this.is_collect=data.collection === 1?true:false;

              }
            });
          },
        voidShow(){
            this.show=true;
        },
        liJiBtn(){
            this.$router.push({name:'selectTime',params:{id:this.id,sid:this.sid}});
        }
      }
    }
</script>

<style lang="scss" scoped>

  .isCollectsEqs{
    font-size: 20px;
    $width: 61px !global;
    $height: 25px !global;
    width: $width;
    height: $height;
    line-height: $height;
    border-radius: 4px;
    border:1px solid #ccc;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .isCollects{
    color:rgba(153,153,153,1);
    border-radius: 4px;
    line-height: $height;
    border:1px solid #ccc;
    width: $width;
    height: $height;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
  }
.DetailsBeautyDivisionBox{
  background-color: rgba(244,244,244,1);
}
  .DetailsBeautyDivisionH{
    width: 100%;
    position: relative;
    z-index: 1;
  }
  .DetailsBeautyDivisionImg{
    z-index: 1;
    position: relative;
    width: 100%;
  }
  .DetailsBeautyDivisionB{
    position: absolute;
    bottom:0px;
    left:50%;
    width: 345px;
    transform: translate(-50%);
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 8px 0px rgba(216,216,216,0.5);
    border-top-left-radius:4px;
    border-top-right-radius:4px;
    z-index: 10;
  }
  .DetailsBeautyDivisionC{
    width: 345px;
    margin: -90px auto 0 auto;
    position: relative;
    z-index: 20;
    box-shadow:0px 1px 8px 0px rgba(216,216,216,0.5);
    border-radius:4px;
    background:rgba(255,255,255,1);
  }
  .DetailsBeautyDivisionPadding{
    padding: 10px;
  }
  .DetailsBeautyDivisionHead{
    $flex:flex !global;
    $alignItems:center !global;
    display: $flex;
    align-items: $alignItems;
    justify-content: space-between;
    padding-bottom: 0px;
    border-bottom: 1px solid rgba(216,216,216,1);;
  }
  .DetailsBeautyDivisionH1{
    padding-left: 20px;
  }
  .DetailsBeautyDivisionH2{
    display: $flex;
    align-items: $alignItems;
    justify-content: flex-start;
    padding-bottom: 5px;
  }
  .DetailsBeautyDivisionHeadFlex{
    display: $flex;
    align-items: $alignItems;
    justify-content: flex-start;
  }
  .DetailsBeautyDivisionBtn{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    width: 73px;
    height: 40px;
    text-align: center;
    line-height: 30px;
    background: url('../../../../assets/image/pink.png') no-repeat;
    background-size: 73px 40px;
  }
  .DetailsBeautyDivisionName{
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(250,101,207,1);
    padding-right: 10px;
  }
  .DetailsBeautyDivisionName1{
    font-size:11px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(154,154,154,1);
  }
  .DetailsBeautyDivisionHImg{
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius:50%;
  }
  .DetailsBeautyDivisionHImg img{
    width: 50px;
    height: 50px;
  }
  .DetailsBeautyDivisionCont{
    padding: 10px 0;
  }
  .DetailsBeautyDivisionContTitle{
    display: $flex;
    align-items: $alignItems;
    justify-content: flex-start;
  }
  .DetailsBeautyDivisionContTitleIcon{
    width: 4px;
    height: 14px;
    background: url('../../../../assets/image/solid6.png') no-repeat;
    background-size: 4px 14px;
  }
  .DetailsBeautyDivisionContTitleTxt{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-left: 10px;
  }
  .DetailsBeautyDivisionContTitleTxtPop{
    font-size:13px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    padding: 10px 0;
  }
  .DetailsBeautyDivisionContVoid{
    padding: 10px 0;
    display: $flex;
    flex-wrap:wrap;
  }
  .DetailsBeautyDivisionContYx{
    padding: 10px 0;
    display: $flex;
    flex-wrap:wrap;
  }
  .DetailsBeautyDivisionContYxItem{
    width: 96px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(250,101,207,1);
    background: url('../../../../assets/image/Rectangle5.png') no-repeat;
    background-size: 95px 20px;
    margin: 0 5px 10px 0px;
  }
  .DetailsBeautyDivisionContVoidItem{
    position: relative;
    width: 95px;
    height: 95px;
    margin: 0 6px 10px 0px;
    overflow: hidden;
  }
.DetailsBeautyDivisionContVoidItem img{

  width: 95px;
  height: 95px;
}
  .DetailsBeautyDivisionContVoidItemImg{
    position: relative;
    z-index: 1;
    width: 95px;
  }
  .DetailsBeautyDivisionContVoidItemBtn{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 45px;
    height: 45px;
  }
  .DetailsBeautyDivisionContTitleTxtSpan{
    margin: 0 5px 10px 0px;
  }
  .video{
    width: 354px;
    margin: 0 auto;
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
  .isCollectsBox{
    text-align: center;
    display: $flex;
    align-items: $alignItems;
    justify-content: center;
    margin-bottom: 5px;
  }
</style>
