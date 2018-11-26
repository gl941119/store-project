<template>
  <div style="background-color: #F4F4F4">


    <!--地址-->
    <com-confirmhead :store="store" :user="user" v-bind:value.sync='value' :inputStatus="true"></com-confirmhead>
    <!--商品-->
    <com-confirmmain :service="service" v-bind:value.sync="leaveMessage"></com-confirmmain>


    <div class="list">
      <dl v-if="Is_member === '1'">
        <dt>项目剩余次数</dt>
        <dd class="surplus">{{surplus}}次</dd>
        <div class="fill"></div>
      </dl>
      <dl>
        <dt>
          <span>预约费用</span>
          <span>（仪器费用）</span>
        </dt>
        <dd class="price">¥ {{Is_member === '1' ? '0':price}}</dd>
      </dl>
    </div>

    <!--提示-->
    <com-tip></com-tip>

    <!--<div class="memberBtn" v-if="Is_member==='1'">-->
    <!--<van-button type="primary" class="memberBtn-confirm" v-on:click="memberConfirmHandel">预约</van-button>-->
    <!--<van-button type="danger" class="memberBtn-cancel" v-on:click="memerCancelHandle">取消</van-button>-->
    <!--</div>-->
    <!--<div v-else class="notMemberBtn">-->
    <!--<van-button type="primary" class="memberBtn-confirm" v-if="stype=== '1'" v-on:click="memberConfirmHandel">预约-->
    <!--</van-button>-->
    <!--<van-button type="default" class="notMemberBtn-pay" v-if="stype=== '0'" v-on:click="payHandle">线上支付</van-button>-->
    <!--<van-button type="danger" class="notMemberBtn-cancel" v-on:click="cancelHandle">取消支付</van-button>-->
    <!--</div>-->
    <div class="pay">
      <van-button plain type="primary" class="pay-cancel" v-on:click="cancelHandle">取消</van-button>
      <van-button plain type="primary" class="pay-confirm" v-on:click="confirmHandel">预约</van-button>
    </div>
  </div>
</template>

<script>
  import ComConfirmhead from './com/com-confirmHead'
  import ComConfirmmain from './com/com-confirmMain'
  import ComTip from './com/com-tip'

  export default {
    name: "confirme",
    components: {
      ComTip,
      ComConfirmhead,
      ComConfirmmain
    },
    data() {
      return {
        surplus: undefined,//剩余次数
        price: undefined,//预约费用
        value: undefined,//地址名字
        leaveMessage: undefined,//留言
        Is_member: window.sessionStorage.getItem('is_member'),//是否会员
        time: this.$route.params.time,
        id: this.$route.params.id,
        sid: this.$route.params.sid,
        store: {
          name: undefined,
          address: undefined
        },
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
        tel: undefined,
        nike: undefined,
        orderid: this.$route.params.orderid,//订单号
        stype: undefined,//体验项目状态
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      confirmHandel() {//会员预约
        if (!this.value){
          this.$toast.fail('请输入预约姓名')
          return;
        }


          if (this.Is_member === '1') {//会员
            this.$dialog.confirm({
              title: '是否预约',
              message: ''
            }).then(() => {
              this.$request({
                url: 'app/index.php?i=1&c=entry&eid=86&act=payorder',
                type: 'POST',
                data: {
                  realname:this.value,
                  message:this.leaveMessage,
                  orderid: this.orderid
                }
              }).then((res) => {
                if (res.code === 100) {
                  this.$router.push({name: 'serviceInfo', params: {orderid: this.orderid}})
                }
              })
            }).catch(() => {
              // on cancel
            });
          } else {//非会员
            this.payHandle()//支付
          }
      },
      cancelHandle() {//取消按钮
        this.$dialog.confirm({
          title: '是否取消预约',
        }).then(() => {
          // this.$router.go(-1)
          this.cancelIndent()

        }).catch(() => {
          // on cancel
        });
      },
      payHandle() {//非会员线上支付
        window.location.href = this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$eid162.eid + '&dom=' + this.$eid162.dom + '&act=payorder&orderid=' + this.orderid
      },
      cancelIndent() {//取消订单
        this.$dialog.confirm({
          title: '是否取消预约',
          message: ''
        }).then(() => {

          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=86&act=cancelsporder',
            type: 'post',
            data: {
              orderid: this.orderid,
            }
          }).then(res => {
            if (res.code === 100) {
              this.$toast.success('取消成功');
              setTimeout(() => {
                this.$router.go(-1)
              }, 500)
            }

          })
        }).catch(() => {
          // on cancel
        });
      },


      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=86&act=orderinfo',
          type: 'POST',
          data: {
            orderid: this.$route.params.orderid
          }
        }).then((res) => {
          this.store = res.data.store;
          this.service = res.data.service;




          this.user = res.data.user;
          this.stype = res.data.service.stype;//体验项目状态
          this.surplus = res.data.surplus;
          this.price = res.data.service.price//金额
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  .pay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    &-cancel {
      flex: 1;
      height: 100%;
      font-size: 18px;
      color: rgba(102, 102, 102, 1);
      line-height: 50px;
    }
    &-confirm {
      flex: 1;
      height: 100%;
      font-size: 18px;
      color: rgba(255, 255, 255, 1);
      line-height: 50px;
      background-color: #71B3FF;
    }
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

  .notMemberBtn {
    margin-top: 15px;
    width: 100%;
    background-color: white;
    padding: 15px 15px;
    &-pay {
      margin-top: 100px;
      width: 345px;
      height: 40px;
      background-color: #71B3FF;
      border-radius: 2px;
      color: white;

    }
    &-cancel {
      margin-top: 15px;
      width: 345px;
      height: 40px;
      background: #F6595B;
      border-radius: 2px;
    }
  }

  .list {
    width: 100%;
    background-color: white;
    margin: 10px auto;
    > dl {
      padding: 0 15px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
      > dt {
        height: 21px;
        font-size: 15px;
        color: rgba(51, 51, 51, 1);
        line-height: 21px;
      }
      .surplus {
        height: 21px;
        font-size: 15px;
        color: rgba(153, 153, 153, 1);
        line-height: 21px;
      }
      .price {
        height: 21px;
        font-size: 15px;
        color: rgba(231, 59, 61, 1);
        line-height: 21px;
      }
      .fill {
        width: 345px;
        height: 1px;
        background: rgba(216, 216, 216, 1);
        position: absolute;
        bottom: 0;
      }

    }
  }
</style>
