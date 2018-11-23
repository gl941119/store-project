<template>
  <div class="subscribeHomePage_padding">
    <div class="subscribeHomePage_body">
      <van-swipe class="subscribeHomePage_banner" :autoplay="3000">
        <van-swipe-item v-for="item in slide"><img :src="item.bimg"  v-on:click="goLink(item.link)"></van-swipe-item>
      </van-swipe>
      <div class="subscribeHomePage_null"></div>
      <div class="subscribeHomePage_content">
        <div class="subscribeHomePage_header">
          <div class="subscribeHomePage_flex">
            <div class="subscribeHomePage_solid"></div>
            <div class="subscribeHomePage_title">热门套餐</div>
          </div>
          <div class="subscribeHomePage_more" @click="findMore('hotPackage')">
            <span class="subscribeHomePage_more_txt">查看更多</span>
            <img src="../../assets/image/icon-enter.png" class="subscribeHomePage_more_img">
          </div>
        </div>

        <div class="subscribeHomePage_list">
          <div class="subscribeHomePage_item" v-for="item in vipdata">
            <div class="subscribeHom_height167"><img :src="item.simg" class="subscribeHomePage_item_img"></div>
            <div class="subscribeHomePage_item_txt">{{item.name}}</div>
          </div>

        </div>
      </div>
      <div class="subscribeHomePage_content">
        <div class="subscribeHomePage_header">
          <div class="subscribeHomePage_flex">
            <div class="subscribeHomePage_solid"></div>
            <div class="subscribeHomePage_title">普通套餐</div>
          </div>
          <div class="subscribeHomePage_more" @click="findMore('commonSetMeal')">
            <span class="subscribeHomePage_more_txt">查看更多</span>
            <img src="../../assets/image/icon-enter.png" class="subscribeHomePage_more_img">
          </div>
        </div>

        <div class="subscribeHomePage_list">
          <div class="subscribeHomePage_item" v-for="item in mdata">
            <div class="subscribeHom_height167"><img :src="item.simg" class="subscribeHomePage_item_img"></div>
            <div class="subscribeHomePage_item_txt">{{item.name}}</div>
          </div>

        </div>
      </div>
    </div>
<div @click="infoEv">会员中心</div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        slide:[],//banner
        mdata:[],//普通套餐
        vipdata:[],//vip套餐
        isMember:null,//会员状态
      }
    },
    mounted(){
      this.$store.commit('setSub_hover',0);
      this.indexReques();
    },
    methods:{
      goLink(url){
        window.location.href = url;
      },
      findMore(str){
        this.$router.push({name:str})
      },
      infoEv(){//是否是会员
        // 1 memberCenter 会员
        // 0 setMealMember 非会员
        parseInt(this.isMember)===1?this.$router.push({name:'memberCenter'}):this.$router.push({name:'setMealMember'});
      },
      indexReques(){
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=90&act=indexdata',
          type:'get'
        }).then(res=>{
          if(res.status){
            let d=res.data;
            this.slide=d.slide;
            this.mdata=d.mdata;
            this.vipdata=d.vipdata;
            this.isMember=res.user.is_member;
          }
        })
      }

    }
  }
</script>

<style lang="scss" scoped>
  .subscribeHomePage_body {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
  .subscribeHomePage_footer {
    height: 49px;
    border-top: 1px solid rgba(224, 224, 224, 1);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .subscribeHomePage_banner {
    width: 100%;
    height: 220px;
  }

  .subscribeHomePage_banner img {
    width: 100%;
    height: 220px;
  }

  .subscribeHomePage_null {
    height: 10px;
    background-color: rgba(244, 244, 244, 1);
  }

  .subscribeHomePage_content {
    padding: 10px 15px 2px 15px;
  }

  .subscribeHomePage_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .subscribeHomePage_solid {
    width: 4px;
    height: 18px;
    background: rgba(113, 179, 255, 1);
  }

  .subscribeHomePage_title {
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    padding-left: 15px;
  }

  .subscribeHomePage_more {
    font-size: 13px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .subscribeHomePage_flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .subscribeHomePage_more_img {
    width: 6px;
  }

  .subscribeHomePage_more_txt {
    padding-right: 7px;
  }

  .subscribeHomePage_list {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-flex-flow: wrap;
    flex-flow: wrap;
    padding: 11px 0 0 0;
  }

  .subscribeHomePage_item {
    width: 160px;
  }

  .subscribeHomePage_item_img {
    width: 160px;
    height: 167px;
  }

  .subscribeHomePage_item_txt {
    font-size: 15px;
    font-family: MicrosoftYaHei;
    color: rgba(51, 51, 51, 1);
    width: 160px;
    overflow: hidden;
    height: 25px;
    line-height: 25px;
    margin: 8px 0;
    text-align: center;
  }

  .subscribeHomePage_advertisement {
    width: 100%;
    height: 146px;
  }
  .subscribeHome_height{
    height: 146px;
  }

  .subscribeHomePage_padding {
    padding: 0px;
    background-color: #fff;
  }

  .subscribeHomePage_footer_item {
    padding-top: 32px;
    font-size: 10px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .subscribeHomePage_footer_img {
    background: url('../../assets/image/s_homepage.png') 0% 5px no-repeat;
    background-size: 20px 25px;
  }

  .subscribeHomePage_footer_img1 {
    background: url('../../assets/image/s_homepage.png') 0% 5px no-repeat;
    background-size: 20px 25px;
  }

  .subscribeHomePage_footer_img2 {
    background: url('../../assets/image/s_homepage.png') 0% 5px no-repeat;
    background-size: 20px 25px;
  }
  .subscribeHom_height167{
    height: 167px;
    width: 167px;
  }
</style>
