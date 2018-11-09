<template>
  <ul class="list">
    <li class="list-li">
      <cell :Data="item" v-for="item,index in listData" :key="index" class="cell"></cell>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "com-list",
    data() {
      return {
        listData: [{
          name: '会员卡',
          url: '/member/memberCard',
          message: undefined
        }, {
          name: '我的收藏',
          url: '/member/myCollect',
          message: undefined
        }, {
          name: '美的交流',
          url: 'interflow',
          message: undefined
        }, {
          name: '邀请好友',
          url: '/member/invite',
          message: undefined
        }, {
          name: '我的评价',
          url: '/member/myEvaluate',
          message: undefined
        }, {
          name: '地址管理',
          url: '/member/userManage/address/1',
          message: undefined
        }]
      }
    },
    methods: {
      clickHandle(url) {
        console.log(123)
      },
      onclick(e) {

        // var _hmt = _hmt || [];
        // (function() {
        //   var hm = document.createElement("script");
        //   hm.src = "https://hm.baidu.com/hm.js?52e7beb522789eee138201052df7acab";
        //   // var s = document.getElementsByTagName("script")[0];
        //   var  a =   e.target
        //   s.parentNode.insertBefore(hm, s);
        // })();


        console.log(123)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cell {
    height: 43px;
  }

  .list {
    background: rgba(255, 255, 255, 1);
    &-li {
      padding: 0 15px;
      .fill {
        width: 100%;
        height: 1px;
        background: rgba(216, 216, 216, 1);
      }
    }
  }


</style>
