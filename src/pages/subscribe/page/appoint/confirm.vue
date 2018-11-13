<template>
  <div style="background-color: #F4F4F4">
    <!--地址-->
    <com-confirmhead :store="store" :user="user"></com-confirmhead>
    <!--商品-->
    <com-confirmmain :service="service"></com-confirmmain>
    <div class="memberBtn" v-if="Is_member==='1'">
      <van-button type="primary" class="memberBtn-confirm" v-on:click="memberConfirmHandel">预约</van-button>
      <van-button type="danger" class="memberBtn-cancel" v-on:click="memerCancelHandle">取消</van-button>
    </div>
    <div v-else class="notMemberBtn">
      <van-button type="primary" class="memberBtn-confirm" v-if="stype=== '1'" v-on:click="memberConfirmHandel">预约</van-button>
      <van-button type="default" class="notMemberBtn-pay" v-if="stype=== '0'" v-on:click="payHandle">线上支付</van-button>
      <van-button type="danger" class="notMemberBtn-cancel" v-on:click="cancelHandle">取消支付</van-button>
    </div>
  </div>
</template>

<script>
  import ComConfirmhead from './com/com-confirmHead'
  import ComConfirmmain from './com/com-confirmMain'

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
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      payHandle(){//非会员线上支付
        window.location.href=this.$upUrl+'app/index.php?'+this.$i+'&c=entry&eid='+this.$eid162+'&act=payorder&orderid='+this.orderid
      },
      cancelHandle(){//非会员取消
        this.$dialog.confirm({
          title: '是否取消预约',
          message: ''
        }).then(() => {
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=86&act=cancelorder',
            type:'post',
            data:{
              orderid:this.orderid,
            }
          }).then(res=>{
            if(res.code === 100){
              this.$toast.success('取消成功')
              setTimeout(()=>{
                this.$router.go(-1)
              },500)

            }

          })
        }).catch(() => {
          // on cancel
        });
      },
      memberConfirmHandel(){//会员预约按钮or体验卡
        this.$dialog.confirm({
          title: '是否预约',
          message: ''
        }).then(() => {
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=86&act=payorder',
            type: 'POST',
            data: {
              orderid:this.orderid
            }
          }).then((res)=>{
            if(res.code === 100){
              this.$router.push({name:'appointPay',params:{orderid:this.orderid}})
            }
          })
        }).catch(() => {
          // on cancel

        });
      },
      memerCancelHandle(){//会员取消按钮
        this.$dialog.confirm({
          title: '是否取消预约',
        }).then(() => {
          this.$router.go(-1)
        }).catch(() => {
          // on cancel
        });

      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=86&act=orderinfo',
          type: 'POST',
          data: {
            orderid:this.$route.params.orderid
          }
        }).then((res)=>{
          this.store = res.data.store
          this.service = res.data.service
          this.user = res.data.user
          this.stype = res.data.service.stype//体验项目状态

        })
      }
    }
  }
</script>

<style lang="scss" scoped>
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
