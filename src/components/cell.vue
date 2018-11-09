<template>
  <div class="cell" v-on:click="goUrl">
    <span class="cell-name">{{Data.name}}</span>
    <span class="cell-content">{{Data.message}}</span>
    <van-icon name="arrow" class="cell-icon"/>
    <div class="fill"></div>
  </div>


</template>

<script>
  export default {
    name: "cell",
    props: ['Data'],
    data() {
      return {}
    },
    methods: {
      goUrl() {
        if (this.Data.url === 'interflow') {

          this.$baidu()
        } else {
          this.$router.push({path: this.Data.url, query: {}})
        }

        // this.$router.push({name:this.Data.url.routeName,params:this.Data.url.params})
      }
    }
  }
</script>

<style lang="scss" scoped>

  .cell {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    &-name {
      flex: 1;
      color: rgba(51, 51, 51, 1);
      font-size: 15px;
      font-family: PingFangSC-Regular;
    }
    &-content {
      margin-right: 10px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      color: rgba(102, 102, 102, 1);
    }
    &-icon {
      font-size: 10px;
      right: 0;
    }
    .fill {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: rgba(216, 216, 216, 1);
    }
  }


</style>
