<template>
  <div class="wrap">
    <navbar :name="'我的收藏'"></navbar>
    <van-tabs v-model="active" @click="onClick">
      <van-tab title="商品">
        <product-card :Data="item" v-for="item in productList" :key="item.id"></product-card>
      </van-tab>
      <van-tab title="服务">
        <server-card :Data = 'item' v-for="item in serverList" :key="item.id"></server-card>
      </van-tab>
      <van-tab title="美师">
        <staff-card :Data = 'item' v-for="item in staffList" :key="item.id"></staff-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    name: "meCollect",
    data() {
      return {
        active: undefined,
        productList: [],
        staffList:[],
        serverList:[]
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=87&uk=TWPBNNP9ZBVI9VOPE0&act=collectionlist',
          type: 'get',
          data:{
            type:this.active+1
          }
        }).then((res) => {
          if(res.code===100){
            if(this.active === 0){//商品

              this.productList = res.data.list
            }
            if(this.active === 1){//服务

              this.serverList = res.data.list
            }

            if(this.active ===2){//美师
              this.staffList = res.data.list
            }
          }

        })
      },
      onClick(index, title) {

        this.request()

      }
    }
  }
</script>

<style lang="scss" scoped>


  .wrap {

  }
</style>
