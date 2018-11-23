<template>
  <div v-if="isShow" class="footer">
    <ul>
      <router-link tag="li" :to="{name:'subscribeHome'}"
                   v-bind:class="{li_hover:hover===0}"
      >
        <span class="icon-g"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span
          class="path4"></span><span class="path5"></span><span class="path6"></span></span>
        <p>首页</p>
      </router-link>

      <router-link tag="li" :to="{name: 'subscribe',params:{type:'1',ishot:'0'}}"
                   v-bind:class="{li_hover:hover===1}"

      >
        <span class="icon-b"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
        <p>所有预约</p>
      </router-link>


      <!--<router-link tag="li" :to="{ }"-->
      <!--v-bind:class="{li_hover:hover===2}"-->
      <!--v-on:click.native="setHover(2)"-->
      <!--&gt;-->
      <!--<span class="icon-b"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>-->
      <!--<p>预约</p>-->
      <!--</router-link>-->

      <router-link tag="li" :to="{name:'userCenter'}"
                   v-bind:class="{li_hover:hover===2}"
      >
        <span class="icon-d"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
        <p>我的</p>
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
        return this.$store.state.sub_showFooter
      },
      hover() {
        return this.$store.state.sub_hover
      }
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .footer {
    border-top: 1px solid #D8D8D8;
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
          font-family: PingFangSC-Regular;
        }
      }
      .li_hover {
        color: #71B3FF;
      }
    }
  }

</style>
