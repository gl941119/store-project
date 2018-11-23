<template>
  <div>
    <van-tabs v-model="active" @change="change" sticky :swipeable="true">
      <van-tab title="全部">
        <com-servercard :item="item" v-for="item,index in appoint" :key="index" @refresh="request" v-on:click.native="goServiceInfo(item.orderid)"></com-serverCard>
      </van-tab>
      <van-tab title="待付款">
        <com-servercard :item="item" v-for="item,index in appoint" :key="index" @refresh="request" v-on:click.native="goServiceInfo(item.orderid)"></com-serverCard>
      </van-tab>
      <van-tab title="已预约">
        <com-servercard :item="item" v-for="item,index in appoint" :key="index" @refresh="request" v-on:click.native="goServiceInfo(item.orderid)"></com-serverCard>
      </van-tab>
      <!--<van-tab title="已完成">-->
        <!--<com-servercard :item="item" v-for="item,index in appoint" :key="index" @refresh="request" v-on:click.native="goServiceInfo(item.orderid)"></com-serverCard>-->
      <!--</van-tab>-->
      <van-tab title="已取消">
        <com-servercard :item="item" v-for="item,index in appoint" :key="index" @refresh="request" v-on:click.native="goServiceInfo(item.orderid)"></com-serverCard>
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
        type: this.$route.params.type,// 0  全部   1 待付款   2  已预约     3  已取消
        active:0,
      }
    },
    mounted() {
      this.change()
      this.active = this.type
    },
    methods: {
      goServiceInfo(orderid){
        console.log(orderid)
        this.$router.push({name:'serviceInfo',params:{orderid:orderid}})

      },
      change(index) {
        this.active = index
        this.request()
      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=appointlist',
          type: 'post',
          data: {
            type: parseInt(this.active)+1
          }
        }).then(res => {
          if (res.code === 100) {
            this.appoint = res.data.appoint
            this.appoint.forEach(item => {
              // let type;
              // let is_use = item.is_use, status = item.status;
              // if (is_use == '0' ) { //已预约
              //   type = 0
              // } else if (is_use == '1' && status == '0') {//待付款
              //   type = 1
              // } else if (is_use == '1' && status == '1') {// 已预约
              //   type = 2
              // } else if (is_use == '0' && status == '-1') {//已取消
              //   type = -1
              // }
              item['type'] = parseInt(item.status_name)-1
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
