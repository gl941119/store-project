<template>
  <div class="wrap">
    <p>选择日期</p>
    <ul class="main">
      <li class="main-li" v-for="item,key in time"
          :key="key"
          v-on:click="selectDay(item,key)"
          v-bind:class="{li_hover:hover== key,opacity:!item.status}"
      >
        <p>周{{key}}</p>
        <p>{{item.date}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "selectDay",
    props: ['time'],
    data(){
      return{
        hover:undefined
      }
    },
    computed:{

    },
    methods: {
      selectDay(item,key) {
        // console.log(item,key)
        if(this.time[key].status == 0){
            return
        }
        this.hover = key
        this.$store.commit('setSelectDayStatus', key)
        console.log(item.date)
        this.$store.commit('setSelectDay',item.date)
      }
    }

  }
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 0 15px;
    margin-top: 20px;
    > p {
      height: 23px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      color: rgba(51, 51, 51, 1);
    }
    .main {
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      align-content: space-between;
      flex-wrap: wrap;
      &-li {
        margin-right: 8px;
        margin-bottom: 10px;
        width: 78px;
        height: 48px;
        border-radius: 3px;
        border: 1px solid #A2A2A2;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        > p {
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          color: rgba(102, 102, 102, 1);
        }
      }
      .li_hover {
        background: #71B3FF;
        border: 1px solid #71B3FF;
        box-shadow: 0px 1px 8px 0px rgba(216, 216, 216, 0.5);
        > p {
          color: white;
        }
      }
      .opacity{
        opacity: 0.5;
      }
    }
  }
</style>
