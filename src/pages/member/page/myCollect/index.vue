<template>
  <div class="wrap">
    <navbar :name="'我的收藏'"></navbar>
    <van-tabs v-model="active" @click="onClick">
      <van-tab title="标签 1">
        <product-card :Data="item" v-for="item in productList" :key="item.id"></product-card>
      </van-tab>
      <van-tab title="标签 2">
        <staff-card></staff-card>
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
        productList: []
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=87&uk=TWPBNNP9ZBVI9VOPE0&act=collectionlist&type=1',
          type: 'get',
        }).then((res) => {
          this.productList = res.data.list
        })
      },
      onClick(index, title) {
        console.log(index, title)

      }
    }
  }
</script>

<style lang="scss" scoped>


  .wrap {

  }
</style>
