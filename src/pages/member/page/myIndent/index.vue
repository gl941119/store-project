<template>
  <div>
    <navbar :name="'我的订单'"></navbar>
    <van-tabs v-model="active" @change="tabChange" sticky >
      <van-tab title="全部">
        <com-cell></com-cell>
      </van-tab>
      <van-tab title="待付款">内容 2</van-tab>
      <van-tab title="待发货">内容 3</van-tab>
      <van-tab title="待收货">内容 4</van-tab>
      <van-tab title="待评价">内容 5</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import ComCell from './com/com-card'
  export default {
    name: "my-indent",
    components:{
      ComCell
    },
    data(){
      return{

        active: this.$route.params.type,
      }
    },

    methods:{
      tabChange(index){
        console.log(index)
      }
    }

  }
</script>

<style scoped>

</style>
