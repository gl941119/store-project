<template>
  <div class="evaluation">
    <div class="title" >
      <span class="title-name">评价</span>
      <span class="title-subName">好评率{{good_rate}}%</span>
      <span class="title-all" v-on:click.stop="goEvaluate">查看全部评论</span>
      <van-icon name="arrow" class="title-icon" />
    </div>
    <div class="fill"></div>
    <com-evaluation-detail :discuss="discuss" v-show="discussType==1"></com-evaluation-detail>
    <div v-show="discussType==0" class="noEvaluation">
      暂无评论
    </div>
  </div>
</template>

<script>
  import ComEvaluationDetail from './com-evaluation-detail'

  export default {
    name: "com-evaluation",
    props:['good_rate','discuss','discussType'],
    watch:{
      discussType:function (val) {
        // console.log(val)
        // console.log(val ===1)
      }
    },
    components: {
      ComEvaluationDetail
    },
    methods:{
      goEvaluate(){
        this.$router.push({name:'evaluate',params:{id:this.$route.params.id,type:this.$route.params.type}})
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import "../../../../assets/css/global";

  .evaluation {
    margin-top: 10px;
    background-color: #ffffff;
    .title {
      padding: 0 15px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 44px;
      &-name {
        font-size: 15px;
        color: rgba(5, 5, 5, 1);
        line-height: 21px;

      }
      &-subName {
        margin-left: 10px;
        flex: 1;
        font-size: 10px;
        color: rgba(228, 57, 59, 1);
        line-height: 14px;
      }
      &-all{
        margin-right: 5px;
        color: #666666;
        font-size: 11px;
      }
      &-icon {
        text-align: right;
        color: #666666;
        font-size: 10px;
      }
    }
  }
  .noEvaluation{
    padding: 30px 0;
    text-align: center;
    font-size:20px;
    font-weight:400;
    color:rgba(58,58,58,1);
    line-height:14px;
  }
  .fill{
    margin: 0 auto;
    width:345px;
    height:1px;
    background:rgba(216,216,216,1);
  }


</style>
