<template>
<div class="endorseOneself">
<div class="endorseOneself_b">
  <div class="endorseOneself_body">
    <div class="endorseOneself_headerBox endorseOneself_headPadding">
      <div class="endorseOneself_header">
        <img :src="avatar" v-if="avatar?avatar:false">
        <img v-else src="../../../../assets/image/defaule.jpg">
      </div>
    </div>
    <div class="endorseOneself_headerBox endorseOneself_headPadding1">
      <div class="endorseOneself_name">{{name}}</div>
    </div>
    <div class="endorseOneself_cont" v-html="cont"></div>
    <div class="endorseOneself_border"></div>
    <div class="endorseOneself_yTitle">邀请码</div>
    <div class="endorseOneself_code">{{code}}</div>
    <div class="endorseOneself_subBox">
      <div class="endorseOneself_sub" @click="shareEv">去分享</div>
    </div>
  </div>
</div>
</div>
</template>

<script>
  import wxHandle from '../../../../utils/wx'

  export default {
    name: "index",
    data(){
      return {
        title:'',
        cont:'',
        avatar:'',
        name:'',
        code:'',
        webshare:{},
      }
    },
    mounted(){
      this.initEv();
    },
    methods:{
      beautifulEndorsementSub(){
        this.$router.push({name:'endorseOneself'});
      },
      shareEv(){
        alert(this.webshare)
        wxHandle('onMenuShareAppMessage', {
          title: 'titt', // 分享标题
          link: this.webshare, // 分享链接
          imgUrl: this.webshare, // 分享图标
          type: 'link', // 分享类型,music、video或link，不填默认为link
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        });
      },
      initEv(){
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=88&act=ucenter',
          type:'post'
        }).then((res)=>{
          if(res.status){
            let d=res.data;
            let scgc=d.article['a_3'];
            this.code=d.user.invitation_code;
            this.cont=scgc.content;
            this.name=d.user.name;
            this.avatar=d.user.avatar;
            this.webshare=d.webshare;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.endorseOneself{
  padding-bottom: 0px;
  background: url('../../../../assets/image/dyme.png') no-repeat;
  background-size: 100% 100%;
}
  .endorseOneself_b{
    padding: 39px 15px 20px 15px;
  }
  .endorseOneself_body{
    width:345px;
    margin: 0 auto;
    background:rgba(255,255,255,1);
    border-radius:8px;
  }
  .endorseOneself_headerBox{
    display: flex;
    align-items: center;
    justify-content: center;
  }
.endorseOneself_headPadding{
  padding: 31px 0 11px 0;
}
.endorseOneself_headPadding1{
  padding-bottom: 51px;
}
  .endorseOneself_header,.endorseOneself_header img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .endorseOneself_cont{
    padding: 0 15px 31px 15px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:20px;
  }
  .endorseOneself_border{
    height: 1.1px;
    width: 345px;
    background-color: #E8E8E8;
  }
  .endorseOneself_yTitle{
    padding: 45px 0 12px 0;
    font-size:18px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(161,39,206,1);
    text-align: center;
  }
  .endorseOneself_name{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .endorseOneself_code{
    padding-bottom: 27px;
    font-size:40px;
    font-weight:bolder;
    text-align: center;
    font-family:PingFangSC-Semibold;
    background-image:-webkit-linear-gradient(right,#7323E7,#B728C3,#DF2BAD);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
  }
  .endorseOneself_sub{
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    margin: 0 auto;
    background-color: #71B3FF;
    font-size:18px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .endorseOneself_subBox{
    padding-bottom: 40px;
  }
</style>
