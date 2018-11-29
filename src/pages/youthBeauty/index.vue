<template>
<div class="youthBeauty">
  <div v-html="htm"></div>
</div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            htm:''
          }
      },
      mounted(){
          let url=window.location.href;
          let id=url.split('&id=')[1];
          let _this=this;
          setTimeout(()=>{
            _this.$request({
              url:'app/index.php?i=1&c=entry&eid=87&dom=comm&act=article',
              type:'post',
              data:{
                id:id
              }
            }).then((res)=>{
              if(res.status){
                let d=res.data;
                _this.htm=d.content;
                document.title=d.title;
              }
            });
          },500)

      }
    }
</script>

<style lang="scss" scoped>
.youthBeauty{
  padding: 0px;
}
  .youthBeautyImg{
    width: 100%;
  }
</style>
