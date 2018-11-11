<template>
  <div class="wrap">
    <p v-if="discuss.length==0" class="notEvaluation">暂无评论</p>
    <com-evaluation-detail :discuss="item" v-for="item,index in discuss" :key="index"></com-evaluation-detail>
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
        discuss: []
      }
    },
    mounted() {
      this.request()

    },
    methods: {
      request(){
        this.$request({
          url:"app/index.php?i=1&c=entry&eid=87&act=discusslist",
          type:'post',
          data:{
            type:this.$route.params.type,
            id:this.$route.params.id
          }
        }).then(res=>{
          if(res.code === 100){
            this.discuss = res.data.discusslist
            console.log(this.discuss)
          }
        })
      }
    }

  }
</script>

<style lang="scss" scoped>
.notEvaluation{
  padding: 30px 0;
  text-align: center;
  font-size:20px;
  font-weight:400;
  color:rgba(58,58,58,1);
  line-height:14px;
}

</style>
