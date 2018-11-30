<template>
  <div v-if="isShow" class="footer">
    <ul>
      <router-link tag="li" :to="{name:'setMealHome'}"
                   v-bind:class="{li_hover:hover===0}"
      >
        <span class="icon-g"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span
          class="path4"></span><span class="path5"></span><span class="path6"></span></span>
        <p>首页</p>
      </router-link>

      <router-link tag="li" :to="{}"
                   v-bind:class="{li_hover:hover===1}"
                   v-on:click.native="infoUrl">
        <span class="icon-d"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
        <p>我的</p>
      </router-link>

    </ul>

  </div>
</template>

<script>
    export default {
        name: "mealFooter",
      data() {
        return {}
      },
      mounted(){

      },
      computed: {
        isShow() {
          return this.$store.state.meal_showFooter
        },
        hover() {
          return this.$store.state.meal_hover
        }
      },
      methods: {

        infoUrl() {
          let isM=localStorage.getItem('mealIsMember');
          let isBind=localStorage.getItem('isBind');

          if(parseInt(isBind)===1){
            parseInt(isM)===1?this.$router.push({name:'memberCenter'}):this.$router.push({name:'setMealMember'});
          }else{
            this.$router.push({name: 'bindAccount'});
          }

        }
      }
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
