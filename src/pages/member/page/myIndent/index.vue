<template>
  <div class="wrap">
    <van-tabs v-model="active" @change="tabChange" sticky :swipeable="true" >
      <van-tab title="全部" >





        <com-card v-for="item,key in goodslist"
                  :key="key"
                  :good="item"
                  @refresh="request"
                  v-on:click.native="goIndentInfo(item.goods[0].ordersn)"
        ></com-card>
      </van-tab>
      <van-tab title="待付款">
        <com-card v-for="item,key in goodslist"
                  :key="key"
                  :good="item"
                  @refresh="request"
                  v-on:click.native="goIndentInfo(item.goods[0].ordersn)"
        ></com-card>
      </van-tab>
      <van-tab title="待发货">
        <com-card v-for="item,key in goodslist"
                  :key="key"
                  :good="item"
                  @refresh="request"
                  v-on:click.native="goIndentInfo(item.goods[0].ordersn)"
        ></com-card>
      </van-tab>
      <van-tab title="待收货">
        <com-card v-for="item,key in goodslist"
                  :key="key"
                  :good="item"
                  @refresh="request"
                  v-on:click.native="goIndentInfo(item.goods[0].ordersn)"
        ></com-card>
      </van-tab>
      <van-tab title="待评价">
        <com-card v-for="item,key in goodslist"
                  :key="key"
                  :good="item"
                  @refresh="request"
                  v-on:click.native="goIndentInfo(item.goods[0].ordersn)"
        ></com-card>
      </van-tab>
      <van-tab title="留店">
        <com-card v-for="item,key in goodslist"
                  :key="key"
                  :good="item"
                  @refresh="request"
                  v-on:click.native="goIndentInfo(item.goods[0].ordersn)"
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
        active: undefined,
        index: 0,
        ltype: 1,
        status: 0,
        goodslist: {}
      }
    },
    mounted() {
      this.tabChange()
      this.active =this.$route.params.type
    },
    methods: {
      goIndentInfo(ordersn){//跳转详情
        console.log(ordersn)
        window.sessionStorage.setItem('ordersn',ordersn)
        this.$router.push({name:'indentInfo'})


      },
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


        switch (index) {
          case 0:
            this.ltype = 1;
            this.status = 0;
            break;
          case 1:
            this.ltype = 2;
            this.status = 0;
            break;
          case 2:
            this.ltype = 3;
            this.status = 1;
            break;
          case 3:
            this.ltype = 4;
            this.status = 2;
            break;
          case 4:
            this.ltype = 5;
            this.status = 3;
            break;
          case 5:
            this.ltype = 6;
            break;
        }

        this.request()
      }
    }

  }
</script>

<style lang="scss" scoped>
  .wrap{
    background-color: white;
    height: 100%;
    width: 100%;
  }
</style>
