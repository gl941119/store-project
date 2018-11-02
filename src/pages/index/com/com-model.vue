<template>
  <div class="model">
    <div class="model-top">
      <div class="model-top-fill"></div>
      <span class="model-top-title">{{data.name}}</span>
      <div class="model-top-more" v-on:click.self="doThat" v-if="type">查看更多</div>
      <van-icon name="arrow" class="model-top-icon" v-if="type"/>
    </div>
    <ul class="model-buttom">
      <li class="model-buttom-li" v-for="item in data.data" :key="item.id">
        <img :src="item.thumb" alt="">
        <p>{{item.name}}</p>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "com-model",
    props: {
      data: {
        type: Object
      },
      type: {
        default: true
      }
    },
    mounted() {

    },
    methods: {
      doThat() {
        this.$router.push({path: '/subscribe/2'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .model {
    margin-top: 10px;
    height: 200px;
    padding: 11px 15px;
    background-color: #ffffff;
    &-top {
      float: left;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-fill {
        width: 4px;
        height: 18px;
        background-color: #71B3FF;
      }
      &-title {
        flex: 1;
        font-size: 18px;
        color: #333333;
        margin-left: 10px;
        height: 25px;
        color: rgba(51, 51, 51, 1);
      }
      &-more {
        margin-right: 7px;
        color: rgba(153, 153, 153, 1);
        line-height: 19px;
        font-size: 13px;
        font-family: PingFangSC-Regular;
      }
      &-icon {
        margin-top: 2px;
        height: 100%;
        font-size: 10px;
      }
    }

    &-buttom {
      width: 100%;
      float: left;
      margin-top: 11px;
      display: flex;
      justify-content: space-between;
      &-li {
        width: 112px;
        > img {
          width: 112px;
          height: 112px;
        }
        > p {
          width: 100%;
          text-align: center;
          font-size: 15px;
          margin-top: 6px;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

</style>
