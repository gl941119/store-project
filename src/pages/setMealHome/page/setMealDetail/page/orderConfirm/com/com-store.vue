<template>
  <div class="model" >
    <p class="title">{{store.name}}</p>
    <p class="subTitle">{{store.address}}</p>
    <van-icon name="arrow" class="icon"/>
  </div>
</template>

<script>
    export default {
        name: "com-store",
      props:['store']
    }
</script>

<style lang="scss" scoped>
  .model {
    padding: 6px 15px 20px;
    background-color: white;
    position: relative;
    overflow: hidden;
  .title {
    height: 21px;
    font-size: 15px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 21px;
  }
  .subTitle {
    margin-top: 4px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 20px;
  }
  .icon {
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -10px;

  }
  }
</style>
