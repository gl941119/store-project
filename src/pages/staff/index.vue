<template>
    <div class="staff">
      <navbar :name="'美师端'"></navbar>
      <!--员工信息-->
      <com-info></com-info>
      <!--我的预约-->
      <com-mysubscribe style="margin-top: -39px"></com-mysubscribe>
      <!--相册-->
      <com-album></com-album>
    </div>
</template>

<script>
  import ComInfo from './com/com-info'
  import ComMysubscribe from './com/com-MySubscribe'
  import ComAlbum from './com/com-album'
    export default {
        name: "staff",
      components:{
        ComInfo,ComMysubscribe,ComAlbum
      }
    }
</script>

<style class="scss" scoped>

</style>
