<template>
  <div class="user_body">
    <div class="user_flex user_box">
      <div class="user_header"><img :src="user.avatar"></div>
      <div class="user_right">
        <div class="user_flex user_padding">
          <div class="user_name">{{user.nick}}</div>
          <img :src="user.level_img" v-if="user.level_img" alt="" class="user_endorsement">
          <div class="user_endorsement">{{user.card_name}}</div>
        </div>
        <div class="user_signature">{{user.signature}}</div>
      </div>
    </div>

    <div class="user_content user_content1">
      <div class="user_con_top">
        <router-link tag="li" class="user_con_flex user_con_padding96" :to="{name:'memberSubscribe',params:{type:0}}">
          <div class="user_con_title">全部预约</div>
          <div class="user_con_more">
            <div class="user_con_moreTxt">更多</div>
            <div class="user_con_moreIcon"></div>
          </div>
        </router-link>
        <div class="user_con_border"></div>
      </div>
      <div class="user_con_listNav">
        <router-link tag="li" class="user_con_item1" :to="{name:'memberSubscribe',params:{type:1}}">
          <img src="../../../../assets/image/dfk.png">
          <div class="user_con_itemTxt">待付款</div>
        </router-link>
        <router-link tag="li" class="user_con_item1" :to="{name:'memberSubscribe',params:{type:2}}">
          <img src="../../../../assets/image/yy.png">
          <div class="user_con_itemTxt">已预约</div>
        </router-link>
        <!--<router-link tag="li" class="user_con_item1" :to="{name:'memberSubscribe',params:{type:3}}">-->
          <!--<img src="../../../../assets/image/dfk.png">-->
          <!--<div class="user_con_itemTxt">已完成</div>-->
        <!--</router-link>-->
        <router-link tag="li" class="user_con_item1" :to="{name:'memberSubscribe',params:{type:4}}">
          <img src="../../../../assets/image/dpj.png">
          <div class="user_con_itemTxt">待评价</div>
        </router-link>
        <router-link tag="li" class="user_con_item1" :to="{name:'memberSubscribe',params:{type:5}}">
          <img src="../../../../assets/image/dpj.png">
          <div class="user_con_itemTxt">已取消</div>
        </router-link>
      </div>
    </div>

    <div class="user_null"></div>
    <div class="user_content user_content1">
      <div class="user_con_top1">
        <div class="user_con_padding13">
          <div class="user_con_flex" v-on:click="shouC">
            <div class="user_con_title">我的收藏</div>
            <div class="user_con_more">
              <div class="user_con_moreIcon"></div>
            </div>
          </div>

        </div>
        <div class="user_con_border"></div>
        <div class="user_conPading">
          <div class="user_con_flex" v-on:click="pingJ">
            <div class="user_con_title">我的评价</div>
            <div class="user_con_more">
              <div class="user_con_moreIcon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        user: {}
      }
    },
    mounted() {
      this.$store.commit('setSub_hover', 2)
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=ucenter',
          type: 'get',
        }).then((res) => {
          this.user = res.data.user;
        })
      },
      pingJ() {
        this.$router.push({name: 'myEvaluate'})
      },
      shouC() {//我的收藏
        this.$router.push({name: 'myCollect',params:{type:'2'}})
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
    padding-left: 16px;
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
    padding-left: 8px;
  }

  .user_padding {
    padding-bottom: 2px;
    /*align-items: flex-end;*/
  }

  .user_signature {
    font-size: 10px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .user_box {
    padding: 25px 0px 12px 30px;
  }

  .user_content {
    padding-bottom: 13px;
    width: 345px;
    margin: 0 auto;
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
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .user_con_moreTxt {
    font-size: 13px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    padding-right: 13px;
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
    height: 1px;
    background-color: rgba(216, 216, 216, 1);
  }

  .user_con_listNav {
    padding-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .user_con_item1, .user_con_item2,
  .user_con_item3, .user_con_item4 {
    text-align: center;
  }

  user_con_itemIcon {
    /*height: 25px;*/
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
  }

  .user_con_item1 img {
    width: 24px;
    height: 26px;
  }

  .user_con_item2 img {
    width: 26px;
    height: 26px;
  }

  .user_con_item3 img {
    width: 26px;
    height: 26px;
  }

  .user_con_item4 img {
    width: 27px;
    height: 26px;
  }

  .user_con_itemTxt {
    padding: 9px 0 13px 0;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .user_con_top1 {
    padding: 12px 15px 0px 15px;
  }

  .user_null {
    height: 20px;
    width: 100%;
  }

  .user_content1 {
    padding: 0px;
  }

  .user_conPading {
    padding: 15px 0;
  }

  .user_con_padding13 {
    padding-bottom: 13px;
  }

  .user_con_padding96 {
    padding: 9px 0;
  }
</style>
