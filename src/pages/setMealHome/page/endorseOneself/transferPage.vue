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
        // let url=window.location.href;
        let st='http://dev-cd.vasterroad.com/addons/xc_beauty/mobile/index.html?from=groupmessage&isappinstalled=0#/setMealHome/page/endorseOneself/transferPage?code=NHOB5JBF&eid=405';
        let ss=st.split('code=')[1].split('&eid=');
        alert(ss[0])
        alert(ss[1])
        // let ce=url.split('code=')[1];
        setTimeout(()=>{
          // localStorage.setItem('mealCode',ce);
          Toast.clear();
          // let a=url.split('?')[0];
          // let cc=url.split('?')[2].split('&')[0].replace('=%3D%3F','==');
          // let aa=a+'#/setMealHome/page/endorseOneself/endorsementSharing?'+cc;

          // alert(cc)
          // window.location.href=aa;
          this.$router.push({name:'endorsementSharing',params:{cde:ss[0],eid:ss[1]}});
        },1000)

      }
    }
</script>

<style scoped>

</style>
