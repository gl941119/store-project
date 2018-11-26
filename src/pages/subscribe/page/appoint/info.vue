<template>
  <div style="background-color: #F4F4F4">

    <div class="header">{{titleName}}</div>
    <!--地址-->
    <com-confirmhead :store="store" :user="user" :inputStatus="false" class="address"></com-confirmhead>
    <!--商品-->
    <com-confirmmain :service="service" :type="type" :data="data" :member="member"></com-confirmmain>
    <!--订单信息-->
    <com-indentinfo class="indentInfo" :type="'success'"
                    :data="data"></com-indentinfo>
    <!--提示,已预约状态下才有-->
    <com-tip v-if="type===0"></com-tip>

    <!--<van-button type="default" v-if="isStore" class="overBtn" v-on:click="overHandle">已完成预约</van-button>-->

    <van-button plain type="primary" class="btn" v-on:click="goIndex" v-if="type===0">已预约</van-button>
      <!--支付-->
    <div class="payBtn" v-if="type===1">
        <span class="payBtn-all">合计：</span>
        <span class="payBtn-price">￥ {{data.allprice}}</span>
      <van-button plain type="primary" class="payBtn-pay" v-on:click.native="payHandle">支付</van-button>
    </div>
    <!--支付完成-->
    <van-button plain type="primary" class="btn" v-on:click="goIndex" v-if="type===2">支付完成</van-button>
    <!--已取消-->
    <van-button plain type="primary" class="btn" v-on:click="gorouter" v-if="type== -1">返回</van-button>
  </div>
</template>

<script>
  import ComConfirmhead from './com/com-confirmHead'
  import ComConfirmmain from './com/com-confirmMain'
  import ComIndentinfo from './com/con-indentInfo'
  import ComTip from './com/com-tip'

  export default {
    name: "confirme",
    components: {
      ComConfirmhead, ComConfirmmain, ComIndentinfo, ComTip
    },
    data() {
      return {
        orderid:this.$route.params.orderid,
        data: {},//数据
        member: {},//数据
        type: undefined,//状态
        Is_member: this.$store.state.Is_member,//是否会员
        user: {
          mobile: undefined,
          name: undefined
        },
        service: {
          "name": undefined,
          "description": undefined,
          "price": undefined,
          "stype": undefined,
          thumb: undefined
        },
        store: {
          name: undefined,
          address: undefined
        },
        date: undefined, //预约时间
        beauty: undefined,
        isStore: null

      }
    },
    mounted() {
      this.request()
      let storeInt = this.$store.state.Store || sessionStorage.getItem('store');
      this.isStore = storeInt === 1 ? false : true;
    },
    computed:{
      titleName(){
        switch (this.type) {
          case 0:
            return '预约成功';
          case 1:
            return '等待支付服务费用';
          case 2:
            return '支付完成';
          case -1:
            return '预约取消';
        }
      }
    },
    methods: {
      payHandle(){



        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=86&act=payorder',
          type: 'post',
          data: {
            orderid: this.orderid
          }
        }).then(res => {
          if (res.code === 100) {
            this.$toast.success('提交成功')
            let thia = this
            setTimeout(function () {
              thia.$router.push({name: 'success',params:{orderid:this.orderid,type:'2'}})
            }, 500)
          }
        })
        // if(window.sessionStorage.getItem('is_member')== '0'){//非會員
        //   window.location.href = this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$eid161.eid + '&dom=' + this.$eid161.dom + '&act=payorder&ordersn=' + window.sessionStorage.getItem('ordersn')
        // }else{//會員
        //   this.$request({
        //     url: 'app/index.php?i=1&c=entry&eid=86&act=payorder',
        //     type: 'post',
        //     data: {
        //       orderid: this.orderid
        //     }
        //   }).then(res => {
        //     if (res.code === 100) {
        //       this.$toast.success('提交成功')
        //       let thia = this
        //       setTimeout(function () {
        //         thia.$router.push({name: 'success',params:{orderid:this.orderid,type:'2'}})
        //       }, 500)
        //     }
        //   })
        // }











      },
      gorouter(){
        this.$router.go(-1)
      },
      goIndex(){//返回首页
        this.$router.push({name:'subscribeHome'})
      },
      overHandle() {
        this.$router.push({name: 'index'})
      },
      request() {
        this.$request({//訂單信息
          url: 'app/index.php?i=1&c=entry&eid=86&act=doorderinfo',
          type: 'POST',
          data: {
            orderid: this.$route.params.orderid
          }
        }).then((res) => {
          this.store = res.data.store
          this.service = res.data.service
          this.user = res.data.user
          this.date = res.data.date
          this.beauty = res.data.member.beauty
          this.data = res.data
          this.member = res.data.member
          // 状态判断
          let status = res.data.status,
            sp_status = res.data.sp_status,
            is_use = res.data.is_use;

          if (is_use == '0' && status == '0') { //已预约
            this.type = 0
          } else if (is_use == '1' && status == '0') {//待付款
            this.type = 1
          } else if (is_use == '1' && status == '1') {// 支付完成
            this.type = 2
          } else if (is_use == '0' && status == '-1') {//已取消
            this.type = -1
          }
          console.log(this.type)


        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .payBtn{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &-all{
        margin-right: 7px;

      height:21px;
      font-size:15px;

      color:rgba(51,51,51,1);
      line-height:21px;
    }
    &-price{
      margin-right: 28px;

      height:21px;
      font-size:15px;
      color:rgba(231,59,61,1);
      line-height:21px;
    }
    &-pay{
      width: 123px;
      height: 50px;
      background-color: #71B3FF;
      font-size:18px;
      color:rgba(255,255,255,1);
      line-height:50px;

    }
  }
  .btn{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    background-color: #71B3FF;
    font-size:18px;
    color:rgba(255,255,255,1);
    line-height:50px;
  }
  .indentInfo {
    margin: 10px auto;
  }

  .address {
    margin: 0 auto 10px !important;
  }

  .header {
    height: 103px;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 103px;
    text-align: center;
    background: linear-gradient(135deg, rgba(170, 242, 255, 1) 0%, rgba(113, 179, 255, 1) 100%);
  }

  .memberBtn {
    margin-top: 15px;
    width: 100%;

    background-color: white;
    padding: 15px 15px;
    &-confirm {
      margin-top: 100px;
      width: 345px;
      height: 40px;
      background: rgba(34, 194, 50, 1);
      border-radius: 2px;
    }
    &-cancel {
      margin-top: 15px;
      width: 345px;
      height: 40px;
      background: rgba(246, 89, 91, 1);
      border-radius: 2px;
    }
  }

  .overBtn {
    display: block;
    margin: 15px auto 0 !important;
    width: 345px;
    height: 40px;
    background: rgba(113, 179, 255, 1);
    box-shadow: 0px 5px 7px 0px rgba(204, 226, 249, 1);
    border-radius: 2px;
    color: white;
  }
</style>
