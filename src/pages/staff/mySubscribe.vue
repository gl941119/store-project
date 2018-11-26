<template>
  <div>
    <van-tabs v-model="active" @change="request" :swipeable="true" sticky>
      <van-tab title="全部">
        <com-card :item="item" v-for="item,index in appoint" :key="index"></com-card>
      </van-tab>
      <van-tab title="未服务">
        <com-card :item="item" v-for="item,index in appoint" :key="index"></com-card>
      </van-tab>
      <van-tab title="已结束">
        <com-card :item="item" v-for="item,index in appoint" :key="index"></com-card>
      </van-tab>

    </van-tabs>

  </div>
</template>

<script>
  import ComCard from './com/com-card'

  export default {
    name: "mySubscribe",
    data() {
      return {
        appoint: [],
        active: 0
      }
    },
    components: {
      ComCard
    },
    computed:{
      type:function () {
        switch (this.active) {
          case 0:
            return 1;
            break;
          case 1:
            return 3;
            break;
          case 2:
            return 4;
            break
        }
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: "app/index.php?i=1&c=entry&eid=88&act=appointlist",
          type: 'post',
          data:{
            type:this.type
          }
        }).then(res => {
          if (res.code === 100) {
            this.appoint = res.data.appoint
          }

        })
      }
    }
  }
</script>

<style scoped>

</style>
