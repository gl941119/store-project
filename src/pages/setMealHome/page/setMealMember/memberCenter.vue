<template>
  <div class="member_center">
    <div class="mHeight">
      <img src="../../../../assets/image/header_banner.png" class="member_headerBanner">
      <div class="member_top">
        <div class="member_topHeader">
          <img :src="user.avatar" v-if="user.avatar"/>
          <img src="../../../../assets/image/defaule.jpg" v-else/>
          <span class="member_setting" @click="tab('userManage')"><img src="../../../../assets/image/setting_icon.png"/></span>
        </div>
        <div class="member_name">
          <div class="member_nameBox">{{user.nick}}</div>
          <div class="member_icon"><img src="../../../../assets/image/icon_vip.png"/></div>
        </div>
        <div class="member_time">会员到期时间：{{timeSplic(user.duedate)}}</div>
        <div class="member_moneyBox">
          <div class="member_tab" @click="tab('beautifulPoints')">
            <div class="member_number">{{user.score}}</div>
            <div class="member_txt">美丽积分</div>
          </div>
          <div class="member_tab" @click="tab('setMealbeautyFund')">
            <div class="member_number">{{user.share_amount}}</div>
            <div class="member_txt">美丽基金</div>
          </div>
          <div class="member_tab" @click="tab('beautifulIntegrals')">
            <div class="member_number">{{user.score_nex}}</div>
            <div class="member_txt">美丽积分券</div>
          </div>
        </div>
        <div class="member_bannerImg">
          <div class="member_swipe" @click="()=>{this.$router.push({name:'MembershipCardList'})}">
            <img :src="bImg">
            <div class="member_bannerImg-box">
              <div>已购：{{taoNum}}份套餐</div>
              <div><span @click="()=>{this.$router.push({name:'MembershipCardList'})}">我的卡包</span></div>
            </div>

          </div>

        </div>
        <div class="member_list member_list1">
          <div class="member_item" @click="tab('purchasedCommodities')">
            <div class="member_listImg"><img src="../../../../assets/image/icon_5.png"/></div>
            <div class="member_listName">已购商品</div>
          </div>
          <div class="member_item" @click="tab('purchasedService')">
            <div class="member_listImg"><img src="../../../../assets/image/icon_3.png"/></div>
            <div class="member_listName">已购服务</div>
          </div>
          <div class="member_item" @click="tab('myTeam')">
            <div class="member_listImg"><img src="../../../../assets/image/icon_1.png"/></div>
            <div class="member_listName">美丽分享</div>
          </div>
          <div class="member_item"@click="tab('IntegralRanking')">
            <div class="member_listImg"><img src="../../../../assets/image/icon_4.png"/></div>
            <div class="member_listName">积分排行榜</div>
          </div>
        </div>
        <div class="member_list">
          <div class="member_item"  @click="tab('beautifulEndorsements')">
            <div class="member_listImg"><img src="../../../../assets/image/icon_2.png"/></div>
            <div class="member_listName">代言说明</div>
          </div>
          <div class="member_item" @click="tab('endorseOneself')">
            <div class="member_listImg"><img src="../../../../assets/image/icon_1.png"/></div>
            <div class="member_listName">美丽代言码</div>
          </div>
          <div class="member_item"></div>
          <div class="member_item"></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "memberCenter",//会员
    data(){
      return {
user:{},
        bImg:'',
        taoNum:0
      }
    },
    mounted(){
this.initEv();
      this.$store.commit('setMeal_hover', 1)
    },
    methods:{
      tab(str){
        this.$router.push({name:str})
      },
      initEv(){
this.$request({
  url:'app/index.php?i=1&c=entry&eid=88&act=ucenter',
  type:'post'
}).then((res)=>{
  if(res.status){
    let d=res.data;
    this.user=d.user;
    this.bImg=d.adv[1].bimg;
    this.taoNum=d.buymealcount;
  }
});
      },
      timeSplic(t){
        if(t!=undefined){
          let time=t.split('-');
          let str=time[0]+'年'+time[1]+'月'+time[2].split(' ')[0]+'日';
          return str;
        }else{
          return t;
        }


      }
    }
  }
</script>

<style lang="scss" scoped>
  .member_center{
    background-color: #fff;
    position: relative;
  }
  .mHeight{
    height: calc(100vh - 51px);
    overflow-y: auto;
    position: relative;
  }
  .member_headerBanner{
    height: 246px;
    width: 100%;
    position: absolute;
    top:0px;
    left:0px;
    z-index: 1;
  }
  .member_top{
    z-index: 10;
    position: relative;
    padding: 24px 0px 0 0;
  }
  .member_topHeader{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .member_topHeader img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .member_setting{
    display: block;
    position: absolute;
    top:24px;
    right:15px;
    width: 16px;
    height: 15px;
  }
  .member_setting img{
    width: 16px;
    height: 15px;
  }
  .member_name{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9px 0 3px 0;
  }
  .member_nameBox{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .member_icon{
    padding-left: 5px;
  }
  .member_icon,.member_icon img{
    width: 14px;
    height: 10px;
  }
  .member_time{
    text-align: center;
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .member_moneyBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding:61px 0 0 0;
  }
  .member_tab{
    width: 33.333%;
  }
  .member_number{
    font-size:23px;
    font-family:DINAlternate-Bold;
    font-weight:bold;
    color:rgba(102,102,102,1);
  }
  .member_txt{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(74,74,74,1);
  }
  .member_bannerImg{
    padding: 18px 0 27px 0;
  }
  .member_bannerImg,.member_bannerImg img{
    width: 100%;
  }
  .member_bannerImg img{
    height: 100px;
  }
  .member_list{
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 20px;
  }
  .member_item{
    width: 20%;
    text-align: center;
  }
  .member_listImg{
    width: 100%;
  }

  .member_listImg img{
    width: 45px;
    height: 45px;
  }
  .member_listName{
    width: 100%;
    text-align: center;
    font-size:12px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(74,74,74,1);
    padding-top: 10px;
  }
  .member_list1{
    padding-bottom: 22px;
  }
  .member_swipe{
    width: 100%;
    height: 100px;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    img{
      position: absolute;
      top:0px;
      left:0px;
      z-index: 1;
    }
  }
  .member_bannerImg-box{
    position: relative;
    z-index: 10;
    font-size:14px;
    text-align: right;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    div:nth-child(1){
      padding: 15px 30px 31px 0;
    }
    div:nth-child(2){
      padding: 0px 30px 0 0;
    }
  }
  .member_bannerSwip{
    position:relative;
  }
</style>
