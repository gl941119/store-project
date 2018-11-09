<template>
  <div>
    <navbar :name="'我的订单'"></navbar>
    <van-tabs v-model="active" @change="tabChange" sticky>
      <van-tab title="全部">
        <com-card v-for="item,key in goodslist"
                  :key="key"
                  :good="item"
                  @refresh="request"
        ></com-card>
      </van-tab>
      <van-tab title="待付款">
        <com-card v-for="item,key in goodslist"
                  :key="key"
                  :good="item"
                  @refresh="request"
        ></com-card>
      </van-tab>
      <van-tab title="待发货">
        <com-card v-for="item,key in goodslist"
                  :key="key"
                  :good="item"
                  @refresh="request"
        ></com-card>
      </van-tab>
      <van-tab title="待收货">
        <com-card v-for="item,key in goodslist"
                  :key="key"
                  :good="item"
                  @refresh="request"
        ></com-card>
      </van-tab>
      <van-tab title="待评价">
        <com-card v-for="item,key in goodslist"
                  :key="key"
                  :good="item"
                  @refresh="request"
        ></com-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import ComCard from './com/com-card'

  export default {
    name: "my-indent",
    components: {
      ComCard
    },
    data() {
      return {
        active: this.$route.params.type,
        index: 0,
        ltype: 1,
        status: 0,
        goodslist: {}
      }
    },
    mounted() {
      this.tabChange()
    },

    methods: {

      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=myorderlist',
          type: 'POST',
          data: {
            ltype: this.ltype,
            status: this.status
          }
        }).then((res) => {
          this.goodslist = res.data.goodslist
        })
      },
      tabChange(index) {
        this.active = index
        console.log(index)
        switch (index) {
          case 0:
            this.ltype = 1
            this.status = 0
            break;
          case 1:
            this.ltype = 2
            this.status = 0
            break;
          case 2:
            this.ltype = 3
            this.status = 1
            break;
          case 3:
            this.ltype = 4
            this.status = 2
            break;
          case 4:
            this.ltype = 5
            this.status = 3
            break;
        }
        this.request()
      }
    }

  }
</script>

<style scoped>

</style>
