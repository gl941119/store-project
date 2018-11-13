<template>
    <div class="wrap">
      <van-steps direction="vertical" :active="0" active-color="#f44">
        <van-step v-for="item,index in info" :key="index">
          <h3>{{item.step}}</h3>
          <p>{{item.time}}</p>
        </van-step>
      </van-steps>
    </div>
</template>

<script>
    export default {
        name: "logistics",
      data(){
          return{
            ordersn:this.$route.params.ordersn,
            info:[]
          }
      },
      mounted(){
          this.request()
      },
      methods:{
          request(){
            this.$request({
              url:'app/index.php?i=1&c=entry&eid=85&act=expresslist',
              type:'post',
              data:{
                ordersn:this.ordersn
              }
            }).then(res=>{
              if(res.code === 100){
                this.info = res.data.info
              }
            })
          }
      }
    }
</script>

<style scoped>

</style>
