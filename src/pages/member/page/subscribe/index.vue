<template>
  <div>
    <van-tabs v-model="type" @change="change" sticky :swipeable="true">
      <van-tab title="全部">
        <com-servercard :item="item" v-for="item,index in appoint" :key="index" @refresh="request"></com-serverCard>
      </van-tab>
      <van-tab title="待付款">
        <com-servercard :item="item" v-for="item,index in appoint" :key="index" @refresh="request"></com-serverCard>
      </van-tab>
      <van-tab title="已预约">
        <com-servercard :item="item" v-for="item,index in appoint" :key="index" @refresh="request"></com-serverCard>
      </van-tab>
      <van-tab title="已完成">
        <com-servercard :item="item" v-for="item,index in appoint" :key="index" @refresh="request"></com-serverCard>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
  import ComServercard from './com/com-serverCard'

  export default {
    name: "index",
    components: {
      ComServercard
    },
    data() {
      return {
        appoint: [],
        is_member: window.sessionStorage.getItem('is_member'), //0 非会员  1 会员
        type: 0,// 1  全部   2 待付款   3  已预约     4  完成
      }
    },
    mounted() {
      this.request()
      let thia = this
      window.addEventListener("popstate", function (e) {　　//只要B页面按下手机物理返回键，就会被监听到
        thia.$router.push({name: 'member'})
      }, false);
    },
    methods: {
      change(index) {
        this.type = index
        this.request()
      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=appointlist',
          type: 'post',
          data: {
            type: this.type + 1
          }
        }).then(res => {

          if (res.code === 100) {
            this.appoint = res.data.appoint
            this.appoint.forEach(item => {
              let type; //0 已取消  1待付款  2已预约 3 已完成
              let is_use = item.is_use, status = item.status;
              if (this.is_member === '0') {//非会员
                if (is_use === '0' && status === '-1') type = '0';//已取消
                if (is_use === '0' && status === '0') type = '1';//待付款
                if (is_use === '0' && status === '1') type = '2';//已预约
                if (is_use === '1' && status === '1') type = '3';//已完成
              } else if (this.is_member === '1') {//会员
                if (is_use === '0' && status === '-1') type = '0';//已取消
                if (is_use === '1' && status === '0') type = '1';//待付款
                if (is_use === '0' && status === '0') type = '2';//已预约
                if (is_use === '1' && status === '1') type = '3';//已完成
              } else {
                alert('无法判断会员')
              }
              item['type'] = type


            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
