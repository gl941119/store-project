<template>
  <div class="evaluation-detail">
    <div class="title">
      <span class="title-name">{{discuss.nick}}</span>
      <img :src="discuss.level_img" v-if="!!discuss.level_img" alt="" class="title-grade">
      <div class="title-giveMark">
        <img src="../../../../assets/image/evaluation.png" alt="" v-for="item in discuss.score">
      </div>
      <span class="title-time">{{discuss.createtime}}</span>
    </div>
    <div class="content">
      <p class="content-title">{{discuss.content}}</p>
      <p class="content-img">
        <img :src="item" alt="" v-for="item in discuss.imgs" v-if="discuss.imgs">
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
        nick:undefined,
        score: 3,
        createtime: undefined,
        imgs: [],
        content:undefined,
      }
    },
    watch: {
      discuss: function (val) {
        // console.log(val);
        this.nick = val.nick;
        this.score = parseInt(val.score) / 2;
        this.imgs = val.imgs;
        this.createtime = val.createtime.split(' ')[0];
        this.content =val.content;
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .fill {
    width: 344px;
    height: 1px;
    background: rgba(216, 216, 216, 1);
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right:0;
  }
  .evaluation-detail {
    /*min-height: 161px;*/
    width: 100%;
    background-color: white;
    margin-bottom: 10px;
    .title {
      height: 35px;
      padding: 7px 15px 14px;
      vertical-align: middle;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &-name {

        font-size: 12px;
        color: rgba(153, 153, 153, 1);
        vertical-align: middle;
      }
      &-grade {


        margin-left: 5px;
        width: 11px;
        height: 11px;
        vertical-align: middle;
      }
      &-giveMark {
        flex: 1;
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
      padding: 0 15px 10px 15px;
      font-size: 10px;
      color: rgba(58, 58, 58, 1);
      &-title {
        width: 100%;
        font-size: 10px;
        color: rgba(58, 58, 58, 1);
        line-height: 14px;
       word-wrap: break-word;
      }
      &-img {
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-content: flex-start;

        > img {
          margin-right: 10px;
          margin-top: 3px;
          width: 71px;
          height: 70px;
        }
      }
    }
  }
</style>
