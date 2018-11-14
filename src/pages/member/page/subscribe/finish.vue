<template>
  <div style="background-color: #F4F4F4">
    <!--会员支付页面-->
    <!--地址-->
    <com-confirmhead :store="store" :user="user"></com-confirmhead>
    <!--商品-->
    <com-confirmmain :service="service" :type="'memberPay'"
                     :member="member" :date="date" :time="time"
                    :service_amount = 'service_amount'
                     :orderprice="orderprice"
                     :endtime = 'endtime'
                     :score="score"
    ></com-confirmmain>
    <van-button type="default" class="btn" v-on:click="payHandle">支付</van-button>

  </div>
</template>

<script>
  import ComConfirmhead from '../../../subscribe/page/appoint/com/com-confirmHead'
  import ComConfirmmain from '../../../subscribe/page/appoint/com/com-confirmMain'

  export default {
    name: "confirme",
    components: {
      ComConfirmhead,ComConfirmmain
    },
    data() {
      return {
        Is_member:this.$store.state.Is_member,//是否会员
        time: this.$route.params.time,
        id: this.$route.params.id,
        sid: this.$route.params.sid,
        store:{
          name:undefined,
          address:undefined
        },
        user:{
          mobile:undefined,
          name:undefined
        },
        service:{
          "name":undefined,
          "description":undefined,
          "price":undefined,
          "stype":undefined,
          thumb:undefined
        },
        tel:undefined,
        nike:undefined,
        orderid:this.$route.params.orderid,//订单号
        stype:undefined,//体验项目状态
        member:{
          beauty: undefined,
          displayorder: undefined,
          id: undefined,
          name:  undefined,
        },
        date:undefined,//预约时间
        service_amount:undefined,
        orderprice:undefined,
        endtime:undefined,
      score:undefined
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      // payHandle(){//非会员线上支付
      //   window.location.href=this.$upUrl+'app/index.php?'+this.$i+'&c=entry&eid='+this.$eid162+'&act=payorder&orderid='+this.orderid
      // },
      payHandle(){
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=86&act=paymoney',
          type: 'post',
          data: {
            orderid:this.$route.params.orderid,
          }
        }).then((res) => {
          if(res.code===100){
            this.$toast.success('支付成功');
            let thia = this
            setTimeout(function () {
              thia.$router.push({name:'memberSubscribe'})
            },1000)
          }
          if(res.code===102){
            this.$toast.success('不存在该订单')
          }
        })



      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=86&act=doorderinfo',
          type: 'POST',
          data: {
            orderid:this.$route.params.orderid
          }
        }).then((res)=>{
          this.store = res.data.store
          this.service = res.data.service
          this.user = res.data.user
         this.member = res.data.member
          this.date = res.data.date //预约时间
          this.time = res.data.time//到店时间
          this.service_amount = res.data.service_amount //服务费用
          this.orderprice = res.data.orderprice//总价
          this.endtime = res.data.endtime // 服务结束时间
          this.score = parseInt(res.data.score)/2+'分' //评分

        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn{
    display: block;
    margin: 15px auto;
    width:345px;
    height:40px;
    background:#71B3FF;
    box-shadow:0px 5px 7px 0px rgba(204,226,249,1);
    border-radius:2px;

    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:40px;
  }
  .memberBtn{
    margin-top: 15px;
    width: 100%;
    background-color: white;
    padding: 15px 15px;
    &-confirm{
      margin-top: 100px;
      width:345px;
      height:40px;
      background:rgba(34,194,50,1);
      border-radius:2px;
    }
    &-cancel{
      margin-top: 15px;
      width:345px;
      height:40px;
      background:rgba(246,89,91,1);
      border-radius:2px;
    }
  }
  .notMemberBtn{
    margin-top: 15px;
    width: 100%;
    background-color: white;
    padding: 15px 15px;
    &-pay{
      margin-top: 100px;
      width:345px;
      height:40px;
      background-color:#71B3FF;
      border-radius:2px;
      color: white;

    }
    &-cancel{
      margin-top: 15px;
      width:345px;
      height:40px;
      background:#F6595B;
      border-radius:2px;
    }
  }
</style>
