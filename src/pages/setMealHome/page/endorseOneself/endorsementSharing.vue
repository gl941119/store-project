<template>
  <div class="endorseOneself">
    <div class="endorseOneself_b">
      <div class="endorseOneself_body">
        <div class="endorseOneself_headerBox endorseOneself_headPadding">
          <div class="endorseOneself_header"><img :src="webshare.avatar"></div>
        </div>
        <div class="endorseOneself_headerBox endorseOneself_headPadding1">
          <div class="endorseOneself_name">{{webshare.name}}</div>
        </div>
        <div class="endorseOneself_cont" v-html="webshare.content"></div>

        <div class="endorseOneself_border"></div>
        <div class="endorseOneselfFlex">
          <div class="endorseOneself_yTitle">邀请码</div>
          <div class="endorseOneself_code">{{webshare.codes}}</div>
        </div>
        <div class="codeImageBox"><img :src="webshare.codeImage"></div>
        <div class="endorseOneself_subBox">
          <div class="endorseOneself_sub" @click="linkHome('setMealHome')">去商城</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'vant';
  export default {
    name: "index",
    data(){
      return {
        webshare:{},
        codes:'',
      }
    },
    created(){

    },
    mounted(){
      Toast.loading({
        duration: 0,
        mask: true,
        message: '加载中...'
      });
      setTimeout(()=>{this.initRequest();},500);
    },
    methods:{
      linkHome(str){
        let store=window.sessionStorage.getItem('store');
        if(store>0){
          this.$router.push({name:'staff'})
        }else{
          this.$router.push({name:str})
        }
      },
      initRequest(){
        let self=this;
        let url=window.location.href;
        let code=url.split('&code=')[1];
        localStorage.setItem('mealCode',code);

        this.$request({
          url:'app/index.php?i=1&c=entry&eid=87&act=invitationuser',
          type:'post',
          data:{
            code:code
          }
        }).then(resMsg=>{
          if(resMsg.status){
            let d=resMsg.data;
            let scgc=d.article['a_4'];
            self.webshare={name:d.name,avatar:d.avatar,content:scgc.content,title:scgc.title,codes:code,codeImage:d.code_image};
            Toast.clear();
          }
        }).catch(res=>{

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
    padding-bottom: 25px;
  }
  .endorseOneself_header,.endorseOneself_header img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .endorseOneself_cont{
    padding: 0 15px 13px 15px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    text-indent: 20px;
    line-height:20px;
  }
  .endorseOneself_border{
    height: 1.1px;
    width: 345px;
    background-color: #E8E8E8;
  }
  .endorseOneself_yTitle{
    padding: 0px 13px 0px 0;
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
    /*padding-bottom: 27px;*/
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
  .endorseOneself_sharing{
    padding-bottom: 8px;
  }
  .endorseOneself_sharing,.endorseOneself_sharing1{
    font-size:16px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(211,53,104,1);
    text-align: center;
  }
  .endorseOneself_sharing1{
    padding-bottom: 25px;
  }
  .codeImageBox{
    text-align: center;
    margin-bottom: 31px;
    height: 113px;
    img{
      width: 113px;
      height: 113px;
    }
  }
  .endorseOneselfFlex{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 0 23px 0;
  }
</style>
