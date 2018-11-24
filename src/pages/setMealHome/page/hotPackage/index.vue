<template>
  <div class="commonSetMeal">

    <div class="commonSetMeal_box" v-for="item in dataList">
      <div class="commonSetMeal_imgBox"><img :src="item.simg"></div>
      <div class="commonSetMeal_right">
        <div class="commonSetMeal_title">{{item.name}}</div>
        <div class="commonSetMeal_cont"></div>
        <div class="commonSetMeal_price">¥{{item.o_price}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        dataList:null//数据列表
      }
    },
    mounted(){
      this.indexReques();
    },
    methods:{
      indexReques(){
        // vip=1 热门套餐
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=90&act=list&vip=1',
          type:'post'
        }).then(res=>{
          if(res.status){
            let d=res.data;
            this.dataList=d.list;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .commonSetMeal{
    padding:15px 15px 0  15px;
    background-color: #fff;
  }
  .commonSetMeal_box{
    width:345px;
    height:115px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 11px 0px rgba(211,211,211,0.5);
    border-radius:4px;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  .commonSetMeal_imgBox,.commonSetMeal_imgBox img{
    width: 115px;
    height: 115px;
  }
  .commonSetMeal_right{
    padding-left: 15px;
    width: 227px;
  }
  .commonSetMeal_title{
    overflow: hidden;
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    height: 23px;
    line-height: 23px;
    margin-top: 9px;
  }
  .commonSetMeal_cont{
    height: 36px;
    overflow: hidden;
  }
  .commonSetMeal_price{
    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(233,58,61,1);
  }
</style>
