<template>
  <div class="packageDetails">
    <div class="packageDetails_height">
      <div class="null"></div>
      <div class="packageDetails_padding">

        <div class="packageDetails_listBox">
          <div class="packageDetails_flexTop">
            <div class="packageDetails_flexS">
              <div class="packageDetails_solid"></div>
              <div class="packageDetails_sevri">服务</div>
            </div>
            <div class="packageDetails_status">连锁店通用</div>
          </div>
          <div class="packageDetails_solidNull"></div>

          <div class="packageDetails_list" v-for="item in sdata" @click="sdataEv(item.id)">
            <div class="packageDetails_listImg"><img :src="item.thumb"></div>
            <div class="packageDetails_listR">
              <div class="packageDetails_listName">{{item.name}}</div>
              <div class="packageDetails_listCont">{{item.description}}</div>
              <div class="packageDetails_listNumber">使用次数：{{item.count}}</div>
            </div>
          </div>


        </div>

        <div class="packageDetails_listBox">
          <div class="packageDetails_flexTop">
            <div class="packageDetails_flexS">
              <div class="packageDetails_solid"></div>
              <div class="packageDetails_sevri">商品</div>
            </div>
            <!--<div class="packageDetails_status">留店</div>-->
          </div>
          <div class="packageDetails_solidNull"></div>

          <div class="packageDetails_list" v-for="item in gdata" @click="gdataEv(item.id)">
            <div class="packageDetails_listImg"><img :src="item.thumb"></div>
            <div class="packageDetails_listR">
              <div class="packageDetails_listName">{{item.name}}</div>
              <div class="packageDetails_listCont">{{item.description}}</div>
              <div class="packageDetails_listNumber">使用次数：{{item.count}}</div>
            </div>
          </div>


        </div>


      </div>
    </div>
  <div class="packageDetails_go" @click="()=>{this.$router.go(-1)}">返回</div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
id:this.$route.params.id,
        sdata:{},
        gdata:{},
      }
    },
    mounted(){
this.initEvs();
    },
    methods:{
      gdataEv(id){
        this.$router.push({name:'detail',params:{type:1,id:id}});
      },
      sdataEv(id){
        this.$router.push({name:'detail',params:{type:2,id:id}});
      },
      initEvs(){
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=90&act=mealorderinfo',
          type:'post',
          data:{
            id:this.id
          }
        }).then(res=>{
          if(res.status){
            let d=res.data;
            this.sdata=d.sdata;
            this.gdata=d.gdata;
          }
        });
        // app/index.php?i=1&c=entry&eid=175&dom=meal&act=mealorderinfo
      }
    }
  }
</script>

<style scoped>
  .packageDetails{
    background-color: #fff;
    padding-bottom: 0px;
  }
  .null{
    height: 10px;
    background-color: rgba(244,244,244,1);
  }
  .packageDetails_padding{
    padding: 15px 15px 0 15px;
  }
  .packageDetails_solid{
    width: 3px;
    height: 15px;
    background-color: #71B3FF;
  }
  .packageDetails_flexTop{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 9px;
  }
  .packageDetails_flexS{

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .packageDetails_sevri{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
    padding-left: 10px;
  }
  .packageDetails_status{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .packageDetails_solidNull{
    height: 1.1px;
    width: 100%;
    background-color:rgba(216,216,216,1);
    margin-bottom: 13px;
  }
  .packageDetails_list{
    display: flex;
    justify-content: flex-start;
    padding-bottom: 11px;
  }
  .packageDetails_listImg,.packageDetails_listImg img{
    width: 80px;
    height: 80px;
  }
  .packageDetails_listR{
    margin-left: 10px;
    width: 255px;
    padding-top: 2px;
  }
  .packageDetails_listName{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
    height: 23px;
    line-height: 23px;
    overflow: hidden;
  }
  .packageDetails_listCont{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    height: 40px;
    line-height: 19px;
    overflow: hidden;
  }
  .packageDetails_listNumber{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .packageDetails_listBox{
    padding-bottom: 15px;
  }
  .packageDetails_height{
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
  .packageDetails_go{
    height: 50px;
    line-height: 50px;
    font-size:18px;
    background-color: #71B3FF;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    color: #fff;
  }
</style>
