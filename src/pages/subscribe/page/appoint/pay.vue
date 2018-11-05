<template>
  <div style="background-color: #F4F4F4">
    <navbar :name="'预约支付'"></navbar>
    <!--地址-->
    <com-confirmhead :store="store" :user="user"></com-confirmhead>
    <!--商品-->
    <com-confirmmain :service="service" :type="'pay'"  :date="date" :beauty="beauty"></com-confirmmain>
    <van-button type="default" class="overBtn" v-on:click="overHandle">已完成预约</van-button>
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
        store:{
          name:undefined,
          address:undefined
        },
        date:undefined, //预约时间
        beauty:undefined,

      }
    },
    mounted() {
      this.request()
    },
    methods: {
      overHandle(){

      },

      request() {
        let url = 'app/index.php?i=1&c=entry&eid=86&act=payorder'
        if(this.$route.params.type === '1'){
          url = 'app/index.php?i=1&c=entry&eid=86&act=orderinfo'
        }
        this.$request({
          url: url,
          type: 'POST',
          data: {
            orderid:this.$route.params.orderid
          }
        }).then((res)=>{
          this.store = res.data.store
          this.service = res.data.service
          this.user = res.data.user
          this.date = res.data.date
          this.beauty = res.data.member.beauty

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
  .overBtn{
    display: block;
    margin: 15px auto 0 !important;
    width:345px;
    height:40px;
    background:rgba(113,179,255,1);
    box-shadow:0px 5px 7px 0px rgba(204,226,249,1);
    border-radius:2px;
    color: white;
  }
</style>
