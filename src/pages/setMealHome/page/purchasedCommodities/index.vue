<template>
    <div class="purchasedCommodities">
      <van-tabs swipeable @click="tabsEv">
        <van-tab title="全部">
          <ComAllPurcjased :Data="dataList"></ComAllPurcjased>
      </van-tab>
        <van-tab title="已留店">
          <ComAllPurcjased :Data="dataList"></ComAllPurcjased>
        </van-tab>
        <van-tab title="待发货">
          <ComAllPurcjased :Data="dataList"></ComAllPurcjased>
        </van-tab>
        <van-tab title="待收货">
          <ComAllPurcjased :Data="dataList"></ComAllPurcjased>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
  import ComAllPurcjased from './com/com-allPurcjased'
    export default {
        name: "index",
      components:{
        ComAllPurcjased
      },
  data(){
        return {
          dataList:{},
        }
      },mounted(){
        this.initEv(1);
      },methods:{
        tabsEv(index,title){
          let vanTab=document.getElementsByClassName('van-tab');
          console.log(index)
          if(index===0){
            if(vanTab[index].className.indexOf('van-tab--active')==-1){
              this.initEv(1);
            }
          }else if(index===1){
            if(vanTab[index].className.indexOf('van-tab--active')==-1){
              this.initEv(2);
            }
          }else if(index===2){
            if(vanTab[index].className.indexOf('van-tab--active')==-1){
              this.initEv(3);
            }
          }else if(index===3){
            if(vanTab[index].className.indexOf('van-tab--active')==-1){
              this.initEv(4);
            }
          }

        },
        initEv(tl){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=mealorderlist',
            type:'post',
            data:{
              type:1,
              tlist:tl
            }
          }).then(res=>{
            if(res.status){
              let d=res.data;
              this.dataList=d.meallist;
            }
          });
        }


      }
    }
</script>

<style lang="scss" scoped>
.purchasedCommodities{
  background-color: #fff;
  padding-bottom: 0px;
}
.purchasedService_list{
  width:345px;
  background:rgba(255,255,255,1);
  box-shadow:0px 1px 11px 0px rgba(211,211,211,0.5);
  border-radius:4px 0px 4px 4px;
  margin: 20px auto 0 auto;
}
.purchasedService_listTop{
  padding: 18px 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.purchasedService_listSolid{
  width: 3px;
  height: 15px;
  background-color: #29ACF6;
}
.purchasedService_listT{
  font-size:16px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(51,51,51,1);
  padding-left: 9px;
}
.purchasedService_flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.purchasedService_itemBox{
  padding: 16px 0 0px 10px;
  display: flex;
  justify-content: flex-start;
}
.purchasedService_itemImg,.purchasedService_itemImg img{
  width: 75px;
  height: 75px;
}
.purchasedService_itemR{
  padding-left: 13px;
  width: 242px;
}
.purchasedService_itemRT{
  font-size:15px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(51,51,51,1);
  height: 21px;
  line-height: 21px;
  overflow: hidden;
  margin-top: 5px;

}
.purchasedService_itemRCont{
  height: 22px;
  overflow: hidden;
}
.purchasedService_itemB{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.purchasedService_itemPrice{
  font-size:16px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(233,58,61,1);
}
.purchasedService_frequency{
  font-size:12px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
}
</style>
