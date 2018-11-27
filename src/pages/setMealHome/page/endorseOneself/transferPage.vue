<template>
    <div>美丽代言说明</div>
</template>

<script>
  import {Toast} from 'vant';
    export default {
        name: "transferPage",
      mounted(){
        Toast.loading({
          duration: 0,
          mask: true,
          message: '加载中...'
        });
        let url=window.location.href;
        let ce=url.split('code=')[1];
        setTimeout(()=>{
          this.$router.push({name:'endorsementSharing',params:{cde:ce}})
        },1000)

      }
    }
</script>

<style scoped>

</style>
