<template>
  <div class="navbar">
    <van-icon name="arrow-left" class="navbar-back" @click="onClickLeft"/>
    <span class="navbar-name">{{name}}</span>
    <span class="navbar-right">
      <div></div>
      <div style="margin: 0 4px"></div>
      <div></div>
    </span>
  </div>
</template>

<script>
  export default {
    name: "navbar",
    props: ['name'],
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onClickRight() {
        Toast('按钮');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
    width: 375px;
    height: 44px;
    background-color: #ffffff;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
    /*font-size: 36px;*/
    &-back {
      font-size: 18px;
    }
    &-name {
      width: 150px;
      height: 25px;
      font-size: 18px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 25px;
      text-align: center;

    }
    &-right {
      > div {
        float: left;
        width: 4px;
        height: 4px;
        background: rgba(51, 51, 51, 1);
        border-radius: 250px;
      }

    }
  }
</style>
