<template>
  <div class="model">
    <div class="model-top">
      <div class="model-top-fill"></div>
      <span class="model-top-title">{{data.name}}</span>
      <span class="model-top-more" v-on:click.self="doThat" v-if="type">查看更多</span>
      <van-icon name="arrow" class="model-top-icon" />
    </div>
    <ul class="model-buttom">
      <li class="model-buttom-li" v-for="item in data.data" :key="item.id" v-on:click="goclubCardDetail(item.id)">
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
        if(this.data.name === '热销精品'){
          this.$router.push({path: '/subscribe/2'})
        }else{
          this.$router.push({name:'clubCard'})
        }

      },
      goclubCardDetail(id) {
        if(this.data.name === '热销精品'){
          this.$router.push({name:'detail',params:{type:'1',id:id}})
        }else{
          this.$router.push({name: 'clubCardDetail',params:{id:id}})
        }

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
        height: 19px;
        line-height: 19px;
        margin-right: 7px;
        color: rgba(153, 153, 153, 1);
        font-size: 13px;
        font-family: PingFangSC-Regular;
      }
      &-icon {
        height: 19px;
        line-height: 19px;

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
