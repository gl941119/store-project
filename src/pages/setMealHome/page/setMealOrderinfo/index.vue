<template>
    <div class="setMealOrderinfo">
      <div class="setMealOrderinfo_height">
        <div class="setMealOrderinfo_b">{{arrData.transactionStatus}}</div>
        <div class="setMealOrderinfo_p">
          <div class="setMealOrderinfo_fl">
            <div class="setMealOrderinfo_flInfo">
              <div class="setMealOrderinfo_Name">{{arrData.realname}}</div>
              <div class="setMealOrderinfo_Phone" v-if="arrData.mobileShow">{{arrData.mobile}}</div>
            </div>
            <div class="setMealOrderinfo_status">{{arrData.status_name}}</div>
          </div>


          <div class="setMealOrderinfo_address">{{arrData.addres}}</div>

          <div class="setMealOrderinfo_commodity">
            <div class="commodity_img"><img :src="mdata.simg"></div>
            <div class="commodity_info">
              <div class="commodity_title">
                <div class="commodity_titleTxt">{{mdata.name}}</div>
                <div class="commodity_seeInfo" @click="chaKanInfo(mdata.id)">查看详情</div>
              </div>
              <div class="commodity_content">{{mdata.description}}</div>
              <div class="price_num">
                <div class="commodity_price">¥{{mdata.price}}</div>
                <div class="commodity_num">x{{odata.num}}</div>
              </div>
            </div>
          </div>


        </div>
        <div class="null"></div>
        <div class="price_calculationBox">
          <div class="price_calculation">
            <div class="price_calculation_title">套餐金额</div>
            <div class="price_calculation_price">¥ {{mdata.price}}</div>
          </div>
          <div class="price_calculation">
            <div class="price_calculation_title">运费</div>
            <div class="price_calculation_price">¥ {{odata.dispatchprice}}</div>
          </div>
          <div class="price_calculation">
            <div class="price_calculation_title">合计</div>
            <div class="price_calculation_price">¥ {{odata.orderprice}}</div>
          </div>
        </div>
        <div class="null"></div>

        <div class="oderInfo">
          <div class="oderInfo_top">
            <div class="oderInfo_icon"></div>
            <div class="oderInfo_txt">订单信息</div>
          </div>
          <div class="oderInfo_list">
            <div>订单编号</div>
            <div>{{odata.orderid}}</div>
          </div>
          <div class="oderInfo_list">
            <div>创建时间</div>
            <div>{{odata.createtime}}</div>
          </div>
          <div class="oderInfo_list">
            <div>付款时间</div>
            <div>{{odata.pay_time}}</div>
          </div>
          <div class="oderInfo_list" v-if="arrData.deliverGoods">
            <div>发货时间</div>
            <div>{{arrData.deliverGoodsT}}</div>
          </div>
          <div class="oderInfo_list" v-if="arrData.receivingGoods">
            <div>收货时间</div>
            <div>{{arrData.take_time}}</div>
          </div>
        </div>

        <div class="null"></div>


      </div>
      <div class="go"v-if="arrData.btnShow" @click="()=>{this.$router.go(-1)}">返回</div>

      <div class="goodsToBeReceived_btn" v-else>
        <div @click="viewLogistics">查看物流</div>
        <div @click="confirmReceipt">确认收货</div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            id:this.$route.params.ids,
            mdata:{},
            odata:{},
            store:{},//留店
            user:{},//用户
            odata:{},//订单
            arrData:{},
          }
      },
      mounted(){
this.initEv();
      },
      methods:{
        chaKanInfo(id){
            this.$router.push({name:'setMealDetail',params:{ids:id}})
          },
        confirmReceipt(){
          this.$dialog.confirm({
            title: '确认收货！'
          }).then(() => {
            // on confirm
            this.$request({
              url:"app/index.php?i=1&c=entry&eid=90&act=orderstatus",
              type:'post',
              data:{
                orderid:this.id,
                status:3
              }
            }).then((res)=>{
              if(res.status){
                this.initEv();
              }
            });
          }).catch(() => {
            // on cancel
          });

        },
        viewLogistics(){
          this.$router.push({name:'logistics',params:{ordersn:this.id,status:'1'}})
        },
initEv(){
  this.$request({
    url:'app/index.php?i=1&c=entry&eid=90&act=orderinfo',
    type:'post',
    data:{
      orderid:this.id
    }
  }).then((res)=>{
    if(res.status){
      let d=res.data;
      this.mdata=d.mdata;
      this.odata=d.odata;
      this.store=d.store;
      if(parseInt(d.odata.is_send)===0){
this.addres=d.store.addres;
this.arrData={
  realname:d.store.name,
  mobile:d.user.mobile,
  mobileShow:false,
  deliverGoods:false,
  receivingGoods:false,
  btnShow:true,
  addres:d.store.addres,
  status_name:'留店',
  transactionStatus:'交易完成'
};
      }
      if(parseInt(d.odata.is_send)===1&&parseInt(d.odata.status)===1){
        this.arrData={
          realname:d.user.realname,
          mobile:d.user.mobile,
          mobileShow:true,
          deliverGoods:false,
          receivingGoods:false,
          btnShow:true,
          addres:d.user.address,
          status_name:'发送到家',
          transactionStatus:'待发货'
        };
      }

      if(parseInt(d.odata.is_send)===1&&parseInt(d.odata.status)===2){
        this.arrData={
          realname:d.user.realname,
          mobile:d.user.mobile,
          mobileShow:true,
          deliverGoods:true,
          receivingGoods:false,
          btnShow:false,
          addres:d.user.address,
          status_name:'已发货',
          transactionStatus:'待收货',
          deliverGoodsT:d.odata.send_time
        };
      }
      if(parseInt(d.odata.is_send)===1&&parseInt(d.odata.status)===3){
        this.arrData={
          realname:d.user.realname,
          mobile:d.user.mobile,
          mobileShow:true,
          deliverGoods:true,
          receivingGoods:true,
          btnShow:true,
          addres:d.user.address,
          status_name:'交易完成',
          transactionStatus:'已发货',
          deliverGoodsT:d.odata.send_time,
          take_time:d.odata.take_time
        };
      }

    }
  })
}
      }
    }
</script>

<style lang="scss" scoped>
.setMealOrderinfo{
  background-color: #fff;
  padding-bottom: 0px;
}
.setMealOrderinfo_height{
  overflow-y: auto;
  height: calc(100vh - 50px);
}
  .setMealOrderinfo_b{
    height:103px;
    line-height: 100px;
    text-align: center;
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    background:linear-gradient(135deg,rgba(170,242,255,1) 0%,rgba(113,179,255,1) 100%);
  }
  .null{
    height: 10px;
    width: 100%;
    background-color: #F4F4F4;
  }
  .setMealOrderinfo_p{
    padding: 0 15px;
  }
  .setMealOrderinfo_status{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .setMealOrderinfo_Name,.setMealOrderinfo_Phone{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .setMealOrderinfo_Phone{
    padding-left: 21px;
  }
  .setMealOrderinfo_fl{
    $flex:flex !global;
    display: $flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0 4px 0;
  }
  .setMealOrderinfo_flInfo{
    justify-content: flex-start;
    align-items: center;
    display: $flex;
  }
  .setMealOrderinfo_address{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-bottom: 25px;
  }
  .setMealOrderinfo_commodity{
justify-content: flex-start;
    display: $flex;
    padding-bottom: 16px;
  }
  .commodity_img,.commodity_img img{
    width:80px ;
    height:80px ;
  }
  .commodity_info{
    padding:2px 0 0 10px;
    width: 100%;
  }
  .commodity_title{
    display: $flex;
    justify-content: space-between;
  }
  .commodity_titleTxt{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
    overflow: hidden;
    height: 22px;
  }
  .commodity_seeInfo{
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    width: 57px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color:rgba(255,255,255,1);
    background-color: #71B3FF;
    border-radius: 3px;
  }
  .commodity_content{
    height: 31px;
    overflow: hidden;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .price_num{
    display: $flex;
    align-items: center;
    justify-content: space-between;
  }
  .commodity_price{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(222,25,25,1);
  }
  .commodity_num{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .price_calculation{
    display: $flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0 0px 0;
  }
  .price_calculationBox{
    padding: 0 15px 15px 15px;
  }
  .price_calculation_price{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(231,59,61,1);
  }
  .price_calculation_title{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .oderInfo{
    padding: 13px 15px 0 15px;
  }
  .oderInfo_top{
    display: $flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 7px;
  }
  .oderInfo_icon{
    width: 3px;
    height: 16px;
    background-color: #71B3FF;
  }
  .oderInfo_txt{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-left: 8px;
  }
  .oderInfo_list{
    display: $flex;
    align-items: center;
    justify-content: flex-start;
  }
  .oderInfo_list div:first-child{
    padding: 0 24px 6px 0;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
.oderInfo_list div:nth-child(2){
  font-size:12px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(153,153,153,1);
}
.go{
  height:49px;
  text-align: center;
  line-height: 49px;
  background:rgba(113,179,255,1);
  box-shadow:0px 5px 7px 0px rgba(204,226,249,1);
  font-size:18px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
}
.goodsToBeReceived_btn{
  display: $flex;
  align-items: center;
}
.goodsToBeReceived_btn div{
  width: 50%;
  height: 49px;
  text-align: center;
  line-height: 49px;
}
.goodsToBeReceived_btn div:nth-child(1){
  font-size:18px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.goodsToBeReceived_btn div:nth-child(2){
  font-size:18px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
  background-color: #71B3FF;
}
</style>
