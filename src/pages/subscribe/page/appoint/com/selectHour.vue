<template>
  <div class="wrap" v-if="show">
    <p>选择到店时间</p>
    <div class="main">
      <div class="am">
        <p>上午</p>
        <ul>
          <li v-for="item,index in morning" :key="index"
              v-bind:class="{li_hover:hover== item.start,opacity:item.status}"
              v-on:click="selectHour(item)">{{item.start}}
          </li>
        </ul>
      </div>
      <div class="fill"></div>
      <div class="am">
        <p>上午</p>
        <ul>
          <li v-for="item,index in afternoon" :key="index"
              v-bind:class="{li_hover:hover== item.start,opacity:item.status}"
              v-on:click="selectHour(item)">{{item.start}}
          </li>
        </ul>
      </div>
      <div class="fill"></div>
      <div class="am">
        <p>上午</p>
        <ul>
          <li v-for="item,index in night" :key="index"
              v-bind:class="{li_hover:hover== item.start,opacity:item.status}"
              v-on:click="selectHour(item)">{{item.start}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "selectHour",
    props: ['time'],
    data() {
      return {
        hover:undefined
      }
    },
    mounted() {


    },
    methods:{
      selectHour(item){
        if(item.status) return;
        this.hover = item.start
        this.$store.commit('setSelectHour',item.start)
      }
    },

    computed: {
      show: function () {
        return this.$store.state.SelectDayStatus
      },
      hour: function () {
        if (!this.$store.state.SelectDayStatus) {
          return Object.keys(this.time)[0]
        } else {
          console.log(2)
          return this.$store.state.SelectDayStatus
        }
      },
      afternoon: function () {
        try {
          return this.time[this.hour].time.afternoon
        } catch (e) {
          return []
        }
      },
      morning: function () {
        try {
          return this.time[this.hour].time.morning
        } catch (e) {
          return []
        }
      },
      night: function () {
        try {
          return this.time[this.hour].time.night
        } catch (e) {
          return []
        }
      }

    }
  }
</script>

<style lang="scss" scoped>

  .wrap {
    margin-top: 20px;
    padding: 0 15px;
    > P {
      height: 23px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      color: rgba(51, 51, 51, 1);
    }
    .main {
      margin-top: 20px;
      .am {
        min-height: 65px;
        display: flex;

        > p {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 81px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          color: rgba(51, 51, 51, 1);
        }
        ul {
          margin-left: 8px;
          flex: 1;
          display: flex;
          justify-content: flex-start;
          /*align-content: space-between;*/
          align-items: center;
          flex-wrap: wrap;
          li {
            margin: 0 5px 0 0;
            width: 58px;
            height: 23px;
            line-height: 23px;
            text-align: center;
            background: rgba(255, 255, 255, 1);
            border-radius: 2px;
            /*opacity:0.5;*/
            border: 1px solid #A2A2A2;
          }
          .li_hover {
            background: #71B3FF;
            border: 1px solid #71B3FF;
            box-shadow: 0px 1px 8px 0px rgba(216, 216, 216, 0.5);color: white;

          }
          .opacity {
            opacity: 0.5;
          }
        }

      }
      .fill {
        width: 345px;
        height: 1px;
        background: rgba(216, 216, 216, 1);
        margin: 15px auto;
      }
    }

  }
</style>
