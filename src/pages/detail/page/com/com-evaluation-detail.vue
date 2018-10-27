<template>
  <div class="evaluation-detail">
    <div class="fill"></div>
    <div class="title">
      <span class="title-name">{{discuss.nick}}</span>
      <img :src="discuss.level_img" alt="" class="title-grade">
      <div class="title-giveMark">
        <img src="../../../../assets/image/evaluation.png" alt="" v-for="item in score">
      </div>
      <span class="title-time">{{createtime}}</span>
    </div>
    <div class="content">
      <p class="content-title">{{discuss.content}}</p>
      <p class="content-img">
        <img :src="item" alt="" v-for="item in imgs">
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "com-evaluation-detail",
    props: ['discuss'],
    data() {
      return {
        score: 3,
        createtime: undefined,
        imgs: []
      }
    },
    watch: {
      discuss: function (val) {
        this.score = parseInt(val.score) / 2;
        this.imgs = val.imgs
        this.createtime = val.createtime.split(' ')[0]
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .evaluation-detail {
    min-height: 161px;
    width: 100%;
    .fill {
      width: 344px;
      height: 1px;
      background: rgba(216, 216, 216, 1);
      margin: 0 auto;
    }
    .title {
      height: 35px;
      padding: 7px 15px 14px;
      vertical-align: middle;
      &-name {

        font-size: 12px;
        color: rgba(153, 153, 153, 1);
        vertical-align: middle;
      }
      &-grade {

        margin-top: 3px;
        margin-left: 5px;
        width: 11px;
        height: 11px;
        vertical-align: middle;
      }
      &-giveMark {
        vertical-align: middle;
        margin-top: 4px;
        margin-left: 12px;
        display: inline-block;
        > img {
          width: 12px;
          height: 12px;
          margin-left: 7px;

        }
      }
      &-time {
        float: right;
        margin-right: 0px;
        font-size: 12px;
        color: rgba(153, 153, 153, 1);
        line-height: 16px;
      }
    }
    .content {
      padding: 0 15px 16px;
      font-size: 10px;
      color: rgba(58, 58, 58, 1);
      &-title {
        width: 100%;
        font-size: 10px;
        color: rgba(58, 58, 58, 1);
        line-height: 14px;
      }
      &-img {
        width: 100%;
        overflow: hidden;
        margin-top: 20px;
        > img {
          margin-right: 10px;
          float: left;
          width: 71px;
          height: 70px;
        }
      }
    }
  }
</style>
