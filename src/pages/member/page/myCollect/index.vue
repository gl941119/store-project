<template>
  <div class="wrap">

    <van-tabs v-model="active" @click="onClick" :swipeable="true" sticky v-if="type==='2'">
      <van-tab title="服务">
        <server-card :Data = 'item' v-for="item in serverList" :key="item.id"  :collect="true"  @refresh = 'request'  v-on:click.native="goDetails(item.id)"></server-card>
      </van-tab>
      <van-tab title="美师">
        <staff-card :Data = 'item' v-for="item in staffList" :collect="true"  @refresh = 'request' :key="item.id"></staff-card>
      </van-tab>
    </van-tabs>
    <product-card :Data="item" v-for="item in productList"   :collect="true"  @refresh = 'request' :key="item.id" v-if="type==='1'"></product-card>
  </div>
</template>

<script>
  export default {
    name: "meCollect",
    data() {
      return {
        type:this.$route.params.type,  // 1 商品 2 服务
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
      goDetails(id){
        this.$router.push({name:'detail',params:{type:'2',id:id}})
      },
      request() {
        console.log(this.type)
        let status
        if(this.type === '1'){//商品
          status = 1
        }else if(this.active === 0){//服务
          status = 2
        }else{//美师
          status = 3
        }
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=87&uk=TWPBNNP9ZBVI9VOPE0&act=collectionlist',
          type: 'get',
          data:{
            type:status
          }
        }).then((res) => {
          if(res.code===100){
            switch (status) {
              case 1:
                this.productList = res.data.list;
                break
              case 2:
                this.serverList = res.data.list;
                break;
              case 3:
                this.staffList = res.data.list;
                break;
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

<style scoped>

</style>
