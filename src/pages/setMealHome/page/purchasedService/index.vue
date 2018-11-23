<template>
    <div class="purchasedService">

      <div class="purchasedService_list" v-for="item in dataList">

        <div class="purchasedService_listTop">
          <div class="purchasedService_flex">
            <div class="purchasedService_listSolid"></div>
            <div class="purchasedService_listT">{{item.name}}</div>
          </div>
          <div></div>
        </div>

        <div class="purchasedService_itemBox" v-for="itemData in item.service" @click="oderInfoEv(itemData.id)">
          <div class="purchasedService_itemImg"><img :src="itemData.simg"></div>
          <div class="purchasedService_itemR">
            <div class="purchasedService_itemRT">{{itemData.name}}</div>
            <div class="purchasedService_itemRCont"></div>
            <div class="purchasedService_itemB">
              <div class="purchasedService_itemPrice">¥{{itemData.marketprice}}</div>
              <div class="purchasedService_frequency">次数：{{itemData.count}}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            dataList:{},
          }
      },
      mounted(){
          this.initEv();
      },
      methods:{
        oderInfoEv(id){
          this.$router.push({name:'detail',params:{type:2,id:id}});
        },
        initEv(){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=mealorderlist',
            type:'post',
            data:{
              type:2
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
.purchasedService{
  padding-bottom: 0px;
  background-color: #fff;
}
  .purchasedService_list{
    width:345px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 11px 0px rgba(211,211,211,0.5);
    border-radius:4px 0px 4px 4px;
    margin: 20px auto 0 auto;
  }
  .purchasedService_listTop{
    padding: 18px 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
