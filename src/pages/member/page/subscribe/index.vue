<template>
  <div>
    <navbar :name="'我的预约'"></navbar>
    <com-servercard  :item="item" v-for="item in appoint" :key="item.id" @refresh="request"></com-serverCard>

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
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=appointlist',
          type: 'get'
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
              // console.log(item.is_use === '0')
              // console.log(this.is_member === '1')
            })
            console.log(this.appoint)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
