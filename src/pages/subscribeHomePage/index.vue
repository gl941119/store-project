<template>
  <div>
    <div class="subscribeHomePage_footer_body">

    </div>

  </div>
</template>

<script>
    export default {
        name: "index",
      computed: {
        isShow() {
          return this.$store.state.showFooter
        },
        hover(){
          return this.$store.state.hover
        }
      }
    }
</script>

<style lang="scss" scoped>
  .subscribeHomePage_footer_body{
    height: calc(100vh - 50px);
    overflow-y:auto ;
  }
.subscribeHomePage_footer{
height: 49px;
  border-top:1px solid rgba(224,224,224,1);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
  .li_hover{
    color: #71B3FF;
  }
</style>
