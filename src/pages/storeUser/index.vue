<template>
  <div class="user_body">
    <div class="user_flex user_box">
      <div class="user_header"><img :src="Data.avatar"></div>
      <div class="user_right">
        <div class="user_flex user_padding">
          <div class="user_name">{{Data.nick}}</div>
          <img class="user_endorsement" :src="Data.level_img" v-if="Data.level_img"></img>
        </div>
        <div class="user_signature">{{Data.signature}}</div>
      </div>
    </div>
    <div class="user_content">
      <div class="user_con_top">
        <div class="user_con_flex">
          <div class="user_con_title">我的订单</div>
          <router-link tag="div" class="user_con_more" :to="{name:'myIndent',params:{type:0}}">
            <span class="user_con_moreTxt">更多</span>
            <van-icon name="arrow" class="user_con_icon"/>
          </router-link>
        </div>
      </div>
      <div class="user_con_border"></div>
      <div class="user_con_listNav">
        <router-link tag="div" class="user_con_item1" :to="{name:'myIndent',params:{type:1}}">
          <img src="../../assets/image/待付款.png">
          <p class="user_con_itemTxt">待付款</p>
        </router-link>

        <router-link tag="div" class="user_con_item1" :to="{name:'myIndent',params:{type:2}}">
          <img src="../../assets/image/待发货.png">
          <p class="user_con_itemTxt">待发货</p>
        </router-link>
        <router-link tag="div" class="user_con_item1" :to="{name:'myIndent',params:{type:3}}">
          <img src="../../assets/image/待收货.png">
          <p class="user_con_itemTxt">待收货</p>
        </router-link>
        <router-link tag="div" class="user_con_item1" :to="{name:'myIndent',params:{type:4}}">
          <img src="../../assets/image/待评价.png">
          <p class="user_con_itemTxt">待评价</p>
        </router-link>
      </div>
    </div>

    <div class="user_null"></div>
    <ul class="list">
      <router-link tag="li" :to="{name:'myCollect',params:{type:1}}" class="list-li">
        <span>我的收藏</span>
        <van-icon name="arrow" class="icon"/>
      </router-link>
      <div class="fill"></div>
      <router-link tag="li" :to="{path: '/member/userManage/address/0'}" class="list-li">
        <span>地址管理</span>
        <van-icon name="arrow" class="icon"/>
      </router-link>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        Data:{}
      }
    },
    created() {
      this.$store.commit('setHover', 4)//footer颜色
    },
    mounted() {
    this.request()
    },
    methods:{
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=ucenter',
          type: 'get',
        }).then((res) => {

          this.Data = res.data.user;
        })
      }
    }

  }
</script>

<style lang="scss" scoped>
  .user_body {
    /*width: 345px;*/
    /*margin: 0 auto;*/
    padding: 10px 0;
    background-color: #fff;
  }

  .user_flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .user_right {
    padding-left: 10px;
  }

  .user_header {
    border-radius: 50%;
    overflow: hidden;
  }

  .user_header, .user_header img {
    width: 50px;
    height: 50px;
  }

  .user_header img {

  }

  .user_name {
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .user_endorsement {
    font-size: 10px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(251, 74, 63, 1);
    padding-left: 10px;
  }

  .user_padding {
    padding-bottom: 5px;
    /*align-items: flex-end;*/
  }

  .user_signature {
    font-size: 10px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .user_box {
    padding: 10px 20px;
  }

  .user_content {
    padding-bottom: 13px;
    width: 345px;
    margin: 0 15px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 8px 0px rgba(216, 216, 216, 0.5);
    border-radius: 4px;
  }

  .user_con_top {
    padding: 9px 15px;
  }

  .user_con_flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user_con_title {
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .user_con_more {

  }

  .user_con_moreTxt {
    font-size: 13px;
    font-family: PingFangSC-Regular;
    color: rgba(153, 153, 153, 1);
    padding-right: 10px;
  }

  .user_con_moreIcon {
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    transform: rotate(45deg);
    content: '';
    width: 9px;
    height: 9px;
  }

  .user_con_border {
    width: 315px;
    height: 1px;
    background-color: rgba(216, 216, 216, 1);

    margin: 0 auto 10px;
  }

  .user_con_listNav {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .user_con_item1, .user_con_item2,
  .user_con_item3, .user_con_item4 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  user_con_itemIcon {
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user_con_item1 img {
    width: 24px;
    height: 24px;
  }

  .user_con_item2 img {
    width: 24px;
    height: 24px;
  }

  .user_con_item3 img {
    width: 24px;
    height: 24px;
  }

  .user_con_item4 img {
    width: 24px;
    height: 24px;
  }

  .user_con_itemTxt {
    margin-top: 9px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
    /*line-height:17px;*/
  }

  .user_null {
    height: 20px;
    width: 100%;
  }

  .list {
    margin: 0 auto;
    padding: 0 15px;
    width: 345px;
    height: 103px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 8px 0px rgba(224, 224, 224, 0.5);
    border-radius: 4px;

    &-li {
      width: 100%;
      height: 51px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > span {
        height: 23px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 23px;
      }
      .icon {
        font-size: 11px;
      }

    }
    .fill {
      margin: 0 auto;
      width: 315px;
      height: 1px;
      background: rgba(216, 216, 216, 1);
    }

  }


</style>
