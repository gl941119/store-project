<template>
  <div style="padding-bottom: 50px">
    <navbar :name="'会员中心'"></navbar>
    <div ref="jiao">123213</div>
    <!--会员详情-->
    <com-member-card class="card" :Data="menberData"></com-member-card>
    <!--我的订单-->
    <com-my-indent></com-my-indent>
    <!--列表-->
    <com-list class="com-list"></com-list>

  </div>
</template>

<script>
  import ComMemberCard from './com/com-meberCard'
  import ComMyIndent from './com/com-myIndent'
  import ComList from './com/com-list'

  export default {
    name: "index",
    components: {
      ComMemberCard, ComMyIndent, ComList
    },
    data() {
      return {
        menberData: {
          address: undefined,
          avatar: undefined,
          birthday: undefined,
          card_name: undefined,
          level_img: undefined,
          nick: undefined,
          score: undefined,
          sex: undefined,
          share_amount: undefined,
          signature: undefined,
        },

      }
    },
    mounted() {
      this.request()

      // let thia = this
      // var _hmt = _hmt || [];
      // (function () {
      //   var hm = document.createElement("script");
      //   hm.src = "https://hm.baidu.com/hm.js?52e7beb522789eee138201052df7acab";
      //   var s = thia.$refs['jiao'];
      //   console.log(thia.$refs['jiao'])
      //   s.parentNode.insertBefore(hm, s);
      // })();


    },

    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=ucenter',
          type: 'get',
        }).then((res) => {
          let data = res.data.user;
          this.menberData = data;

        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .com-list {
    margin: 21px auto 0;
    width: 345px;
    height: 279px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 8px 0px rgba(224, 224, 224, 0.5);
    border-radius: 4px;
  }
</style>
