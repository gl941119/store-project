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
            st:this.$route.params.status,
            info:[]
          }
      },
      mounted(){
          this.request()
      },
      methods:{
          request(){
            let url='';
            if(this.st){
              url='app/index.php?i=1&c=entry&eid=90&act=expresslist';
            }else{
              url='app/index.php?i=1&c=entry&eid=85&act=expresslist';
            }
            this.$request({
              url:url,
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
