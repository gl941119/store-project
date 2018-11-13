<template>
  <div class="wrap">
    <p v-if="discusslist.length==0" class="notEvaluation">暂无评论</p>
    <div v-else class="main" v-for="item,num in discusslist" :key="num" >
      <div class="main-top">
        <img :src="item.avatar" alt="">
        <span class="main-top-name">{{item.nick}}</span>
      </div>
      <div class="main-middle">
        <p class="main-middle-text">{{item.content}}</p>
        <div class="main-middle-img">
          <img :src="img" alt="" v-for="img,index in item.imgs" :key="index">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import ComEvaluationDetail from './com/com-evaluation-detail'

  export default {
    name: "index",
    components: {
      ComEvaluationDetail
    },
    data() {
      return {
        discusslist: []
      }
    },
    mounted() {
      this.request()

    },
    methods: {
      request() {
        this.$request({
          url: "app/index.php?i=1&c=entry&eid=87&act=discusslist",
          type: 'post',
          data: {
            type: this.$route.params.type,
            id: this.$route.params.id
          }
        }).then(res => {
          if (res.code === 100) {
            this.discusslist = res.data.discusslist

          }
        })
      }
    }

  }
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 100%;
    background-color: #F4F4F4;
    > p {
      width: 100%;
      height: 100%;
    }
  }

  .notEvaluation {
    background-color: white !important;

    padding: 30px 0;
    text-align: center;


    height:42px;
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:21px;
  }

  .main {
    width: 100%;
    padding: 15px 15px;
    background-color: white;
    margin-bottom: 10px;
    &-top {
      height: 29px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      > img {
        width: 29px;
        height: 29px;
        border-radius: 250px;
      }
      > span {
        margin-left: 5px;
        font-size: 15px;
        font-family: PingFangSC-Regular;
        color: rgba(5, 5, 5, 1);
      }
    }
    &-middle {
      margin-top: 15px;
      &-title {
        height: 19px;
        font-size: 13px;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 19px;
      }
      &-text {
        margin-top: 9px;
        font-size: 15px;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 21px;
      }
      &-img {
        margin-top: 5px;
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        > img {
          margin: 3px 10px 0 0;
          width:105px;
          height:105px;
        }
      }
    }
    &-bottom {
      margin-top: 14px;
      width: 100%;
      height: 73px;
      background: rgba(248, 248, 248, 1);
      display: flex;
      justify-content: flex-start;
      > img {
        width: 65px;
        height: 100%;

      }
      > dl {
        margin-left: 13px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > dt {
          margin-top: 11px;

          font-size: 15px;
          font-family: PingFangSC-Regular;

          color: rgba(51, 51, 51, 1);

        }
        > dd {
          height: 21px;
          .price {
            height: 21px;
            font-size: 15px;
            font-family: PingFangSC-Regular;
            color: rgba(51, 51, 51, 1);
            line-height: 21px;
          }
          .type {
            margin-left: 11px;
            height: 21px;
            font-size: 10px;
            font-family: PingFangSC-Regular;
            color: rgba(228, 57, 59, 1);
            line-height: 21px;
          }
        }
      }

    }
  }

</style>
