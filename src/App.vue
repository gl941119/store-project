<template>
  <div id="app">
    <keep-alive>
      <router-view class="view" v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view class="view" v-if="!$route.meta.keepAlive"/>
    <my-footer></my-footer>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  #app {
    /*font-family:'Microsoft YaHei','PingFangSC','Avenir', Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
    /*margin-bottom: 49px;*/
    display: flex;
    flex-direction: column;
    width: 375px;
    height: 100%;

  }

  .view {
    padding-bottom: 50px;
    /*box-sizing: content-box;*/
    min-height: 100%;
    width: 375px;
    overflow: auto;
  }

  .view::-webkit-scrollbar {
    display: none
  }

</style>
