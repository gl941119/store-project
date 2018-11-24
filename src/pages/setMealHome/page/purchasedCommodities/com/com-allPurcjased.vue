<template>
<div>
  <div class="purchasedService_list" v-for="item in Data">

    <div class="purchasedService_listTop">
      <div class="purchasedService_flex">
        <div class="purchasedService_listSolid"></div>
        <div class="purchasedService_listT">{{item.name}}</div>
      </div>
      <div class="purchasedService_listRStatus"  @click="statusInfo(item.orderid)">{{statusEv(item.is_send,item.status)}}</div>
    </div>

    <div class="purchasedService_itemBox" v-for="t in item.goods" @click="oderInfoEv(t.id)">
      <div class="purchasedService_itemImg"><img :src="t.thumb"></div>
      <div class="purchasedService_itemR">
        <div class="purchasedService_itemRT">{{t.title}}</div>
        <div class="purchasedService_itemRCont"></div>
        <div class="purchasedService_itemB">
          <div class="purchasedService_itemPrice">¥{{t.marketprice}}</div>
          <div class="purchasedService_frequency">次数：{{t.count}}</div>
        </div>
      </div>
    </div>

<div class="purchasedService_itemBottom"></div>
    <div class="package_to_be_received" v-if="goodsToBeReceived(item.is_send,item.status)">
      <div class="packageBtnFind" @click="viewLogistics(item.orderid)">查看物流</div>
      <div class="packageBtnOk" @click="confirmReceipt(item.orderid)">确认收货</div>
    </div>

  </div>



</div>
</template>

<script>
    export default {
        name: "com-allPurcjased",
      props:['Data'],
      data(){
          return {

          }
      },
      mounted(){

      },
      methods:{
        confirmReceipt(id){
          this.$dialog.confirm({
            title: '确认收货！'
          }).then(() => {
            // on confirm
            this.$request({
              url:"app/index.php?i=1&c=entry&eid=90&act=orderstatus",
              type:'post',
              data:{
                orderid:id,
                status:3
              }
            }).then((res)=>{
              if(res.status){
this.$emit('refreshList')
              }
            });
          }).catch(() => {
            // on cancel
          });

        },
        viewLogistics(id){
          this.$router.push({name:'logistics',params:{ordersn:id,status:id}})
        },
        statusInfo(oId){
          this.$router.push({name:'setMealOrderinfo',params:{ids:oId}});
        },
        oderInfoEv(id){
          this.$router.push({name:'detail',params:{type:1,id:id}});
        },
        receivedStatus(send,status){
            let s=parseInt(status);
            let sen=parseInt(send);
            var str='';
            if(sen===1&&s===1){
              str='待发货';
            }else if(sen===1&&s===2){
              str='待收货';
            }else if(sen===1&&s===3){
              str='交易完成';
            }
            return str;
          },
        goodsToBeReceived(send,status){
          return parseInt(send)===1&&parseInt(status)===2?true:false;
        },
        statusEv(send,status){
return parseInt(send)==0?'留店':this.receivedStatus(send,status);
        }
      }


    }
</script>

<style lang="scss" scoped>
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
  .purchasedService_listRStatus{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(233,58,61,1);
  }
  .package_to_be_received{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 19px 10px 16px 0;
  }
  .packageBtnFind,.packageBtnOk{
    width:79px;
    height:27px;
    line-height: 27px;
    border-radius:13px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    text-align: center;
  }
  .packageBtnFind{
    color:rgba(151,151,151,1);
    border: 1px solid rgba(151,151,151,1);
    margin-right: 15px;
  }
  .packageBtnOk{
    color:rgba(233,58,61,1);
    border: 1px solid rgba(233,58,61,1);
  }
  .purchasedService_itemBottom{
    height: 13px;
    width: 100%;
  }
</style>
