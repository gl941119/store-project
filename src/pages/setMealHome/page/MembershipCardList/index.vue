<template>
<div class="MembershipCardList">
<div class="MembershipCardList_p">
      <div class="MembershipCardList_list" v-for="item in dList" @click="onClick(item.mealid)">
        <img :src="item.banner">
        <div class="MembershipCardList_n">{{item.name}}</div>
      </div>
</div>
</div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            dList:{}
          }
      },
      mounted(){
this.initEvent();
      },
      methods:{
        onClick(id){
            this.$router.push({name:'packageDetails',params:{id:id}})
          },
        initEvent(){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=mymealorderlist',
            type:'post'
          }).then(res=>{
            if(res.status){
this.dList=res.data.meallist;
            }
          });
        }
      }
    }
</script>

<style lang="scss" scoped>
.MembershipCardList{
  padding-bottom: 0px;
  background-color: #fff;
}
  .MembershipCardList_p{
    padding: 15px;
  }
.MembershipCardList_list{
  padding-bottom: 15px;
  position: relative;
}
  .MembershipCardList_list,.MembershipCardList_list img{
    width: 345px;
    border-radius: 4px;
  }
.MembershipCardList_list img{
  height: 130px;
}
  .MembershipCardList_n{
    margin-top: 28px;
    top:50px;
    left: 50%;
    height: 27px;
    line-height: 27px;
    border-radius: 50px;
    min-width: 120px;
    transform: translateX(-50%);
    color: #fff;
    border:1px solid #fff;
    text-align: center;
    position: absolute;
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
</style>
