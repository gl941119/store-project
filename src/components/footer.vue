<template>
  <div v-if="isShow" class="footer">
    <ul>
      <router-link tag="li" :to="{ name: 'index'}">
        <span class="icon-g"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>
        <p>商城</p>
      </router-link>
      <router-link tag="li" :to="{ name: 'classify'}">
        <span class="icon-w"><span class="path1"></span><span class="path2"></span></span>
        <p>分类</p>
      </router-link>
      <router-link tag="li" :to="{ path: 'subscribe/1'}">
        <span class="icon-b"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
        <p>预约</p>
      </router-link>
      <router-link tag="li" :to="{ name: 'buyCart'}">
        <span class="icon-c"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
        <p>购物车</p>
      </router-link>
      <router-link tag="li" :to="{ name: 'member'}">
        <span class="icon-d"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
        <p>会员中心</p>
      </router-link>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "MyFooter",
    data() {
      return {}
    },
    computed: {
      isShow() {
        return this.$store.state.showFooter
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    overflow: hidden;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    z-index: 100;
    ul {
      height: 50px;
      display: flex;
      justify-content: space-around;
      > li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #666666;
        font-size: 20px;
        > p {
          font-size: 10px;
        }
      }
      li:hover{
        color: #71B3FF;

      }
    }
  }

</style>
