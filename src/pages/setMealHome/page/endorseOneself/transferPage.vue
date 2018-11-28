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
        // let url='http://dev-cd.vasterroad.com/addons/xc_beauty/mobile/index.html?from=groupmessage&isappinstalled=0#/setMealHome/page/endorseOneself/transferPage?code=NHOB5JBF&uk=uk&is_member=1';

        setTimeout(()=>{
          let code=url.split('code=')[1];
          let codes=code.split('&uk=')[0];
          let uk=code.split('&uk=')[1].split('&is_member=')[0];
          let is_member=code.split('&uk=')[1].split('&is_member=')[1];
          window.sessionStorage.setItem('uk', uk)
          window.sessionStorage.setItem('is_member', is_member)
          localStorage.setItem('mealCode',codes);
          Toast.clear();
          // let a=url.split('?')[0];
          // let cc=url.split('?')[2].split('&')[0].replace('=%3D%3F','==');
          // let aa=a+'#/setMealHome/page/endorseOneself/endorsementSharing?'+cc;

          // alert(cc)
          // window.location.href=aa;
          this.$router.push({name:'endorsementSharing',params:{cde:codes}});
        },1500)

      }
    }
</script>

<style scoped>

</style>
