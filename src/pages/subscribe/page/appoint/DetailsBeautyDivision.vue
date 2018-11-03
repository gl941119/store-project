<template>
<div class="DetailsBeautyDivisionBox">
  <navbar :name="'美师主页'"></navbar>
<div class="DetailsBeautyDivisionH">
  <img src="" class="DetailsBeautyDivisionImg">
  <div class="DetailsBeautyDivisionB">
sada
  </div>
</div>
</div>
</template>

<script>
    export default {
        name: "DetailsBeautyDivision"
    }
</script>

<style lang="scss" scoped>
.DetailsBeautyDivisionBox{
  background-color: rgba(244,244,244,1);
}
  .DetailsBeautyDivisionH{
    height: 242px;
    width: 100%;
    position: relative;
  }
  .DetailsBeautyDivisionImg{
    z-index: 1;
    position: relative;
  }
  .DetailsBeautyDivisionB{
    position: absolute;
    bottom:0px;
    left:50%;
    width: 345px;
    transform: translate(-50%);
  }
</style>
