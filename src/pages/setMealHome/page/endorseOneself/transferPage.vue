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
          localStorage.setItem('mealCode',ce);
          Toast.clear();
          let a=url.split('?')[0];
          let aa=a+'#/setMealHome/page/endorseOneself/transferPage';
          alert(aa)
          window.location.href=aa;
          // this.$router.push({name:'endorsementSharing',params:{cde:ce}});
        },1000)

      }
    }
</script>

<style scoped>

</style>
