<template>
  <div class="indentConfirme">

    <!--选择方式-->
    <div class="control">
      <p>选择运送方式</p>
      <van-button type="default" class="btn" :class="{hover_btn:status==='0'}" v-on:click="status = '0'">留店</van-button>
      <van-button type="default" class="twobtn" :class="{hover_btn:status==='1'}" v-on:click="status = '1'">寄送到家
      </van-button>
    </div>
    <!--留店-->
    <com-store v-if="status==='0'&&store"  v-on:click.native="selectStore" :store="store"></com-store>
    <!--留店弹出层-->
    <van-popup v-model="show_store" position="right" :overlay="false" class="popup">
      <com-store  :store="store" v-for="store,index in storeList" :key="store.id" v-on:click.native="confirmeStore(index)" ></com-store>
    </van-popup>
    <!--收货地址-->
    <ul class="list" v-if="status==='1'">
      <!--无收货地址-->
      <div v-if="address=== null" class="list-notCard" v-on:click="selectAddress">
        <span>请选择收货地址</span>
        <van-icon name="arrow" class="list-icon"/>
      </div>
      <!--有收货地址-->
      <com-address v-else v-on:click.native="selectAddress" :address="address"></com-address>
    </ul>
    <!--地址弹出层-->
    <van-popup v-model="show_address" position="right" :overlay="false" class="popup">
      <!--无收货地址-->
      <van-button type="default" v-if="address=== null" class="popup-addAddress" v-on:click="goChangeAddress">去添加地址
      </van-button>
      <!--有收货地址-->
      <com-address v-else
                   v-for="address,index in addressList"
                   :key="index"
                   :address="address"
                   v-on:click.native="confirmeAddress(index)"></com-address>
    </van-popup>
    <!--主体-->
    <div class="main">
      <com-prodectcard :item="item" v-for="item in goodslist" :key="item.id" @refrech="request"></com-prodectcard>
      <div class="fill"></div>
      <div class="cell">
        <span class="cell-name">买家留言:</span>
        <input type="text" class="cell-input" placeholder="选填" v-model="message">
      </div>
    </div>
    <!--<div class="balance">-->
    <!--<span class="cell-right">￥&nbsp;{{freight}}</span>-->
    <!--</div>-->
    <van-cell title="美丽积分券" class="balance">
      <span class="balance-right">{{allprice}}</span>
    </van-cell>
    <div class="aggregate">
      <van-cell title="商品金额" class="cell">
        <span class="cell-right">￥&nbsp;{{allprice}}</span>
      </van-cell>
      <van-cell title="运费" class="cell">
        <span class="cell-right">￥&nbsp;{{freight}}</span>
      </van-cell>
      <van-cell title="积分券抵扣" class="cell">
        <span class="cell-right">￥&nbsp;{{score_nex}}</span>
      </van-cell>
      <van-cell title="实付" class="cell">
        <span class="cell-right">￥&nbsp;{{allmoney}}</span>
      </van-cell>
    </div>

    <!--<van-button class="submitBtn" type="default" v-if="allmoney == '0'"-->
    <!--style="background-color: #71B3FF;color: #FFFFFF;" v-on:click="submit">提交订单-->
    <!--</van-button>-->

    <!--<div v-else>-->
    <!--<van-button class="submitBtn" type="primary" v-on:click="payHandle">支付</van-button>-->
    <!--<van-button class="submitBtn" type="danger" v-on:click="cancleHandle">取消</van-button>-->
    <!--</div>-->

    <div class="pay">
      <dt>合计：</dt>
      <dd>¥ {{allmoney}}</dd>
      <van-button type="default" class="btn" v-on:click="submitHandle">提交订单</van-button>
    </div>


  </div>
</template>

<script>
  import ComProdectcard from './com/com-productCard'
  import ComAddress from './com/com-address'
  import ComStore from './com/com-store'
  import cache from '../../utils/cache'

  export default {
    name: "confirme",
    components: {
      ComStore,
      ComStore,
      ComProdectcard, ComAddress
    },
    watch: {},
    data() {
      return {
        // address: {
        //   address: undefined,
        //   area: undefined,
        //   city: undefined,
        //   id: undefined,
        //   isdefault: undefined,
        //   mobile: undefined,
        //   province: undefined,
        //   realname: undefined,
        // },
        address: null,
        addressList: [],
        store:null,
        storeList:[],
        goodslist: [],
        freight: undefined,
        message: undefined,//买家留言
        allprice: undefined,//商品金额
        score_nex: undefined,//积分券减免
        allmoney: undefined,//总金额
        status: '0',//门店选择状态
        show_store: false,//留店prop
        show_address: false,//地址popup
      }
    },
    watch: {
      show_store: function (val) {//监听弹窗
        if (val === true) {
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=87&act=storelist',
          type:'get',
          isToast:false
        }).then(res=>{
          this.storeList = res.data.storelist
          console.log(this.storeList)
        })
        }
      },
      show_address: function (val) {//监听弹窗
        if (val === true) {
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=88&act=addresslist',
            type: 'get',
            isToast:false
          }).then((res) => {
            this.addressList = res.data.list
          })
        }
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      goChangeAddress() {//无地址情况下去添加
        this.$router.push({name: 'address', params: {type: '1'}})
      },
      selectStore() {//选择门店
        // this.$router.push({name: 'selectAddress'});
        this.show_store = true
      },
      confirmeStore(index){//确认门店
        this.store = this.storeList[index]
        this.show_store = false
      },

      selectAddress() {//选择地址
        this.show_address = true
      },
      confirmeAddress(index) {//弹窗确认地址
        this.show_address = false
        this.address = this.addressList[index]
      },
      request() {//通过订单号查询
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=orderinfo',
          type: 'post',
          data: {
            ordersn: window.sessionStorage.getItem('ordersn'),
          }
        }).then((res) => {
          this.goodslist = res.data.goodslist
          this.address = res.data.user//地址
          this.store = res.data.store//门店
          // this.score_nex = res.data.user.score_nex      //美丽
          // this.amount = res.data.allrecord.amount // 美丽余额
          // this.money = res.data.user.money //美丽余额
          // this.ishave = res.data.freight.ishave //运费   1 元
          this.freight = res.data.freight.freight
          this.allprice = res.data.allrecord.allprice  //商品金额
          this.score_nex = res.data.allrecord.score_nex  //积分券减免
          this.allmoney = res.data.allrecord.money  //总金额
        })
      },
      submitHandle(){//提交订单
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=orderinfo',
          type: 'post',
          data: {
            ordersn: window.sessionStorage.getItem('ordersn'),
            is_send:this.status,
            message:this.message,
            addressid:this.address.id,
            storeid:this.store.id
          }
        }).then((res) => {
          if(res.code === 100){
           if(this.allmoney === 0){//实际扣款为0 跳转页面
             this.payorder()
            }else{//需要付款
             window.location.href = this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$eid161.eid + '&dom=' + this.$eid161.dom + '&act=payorder&ordersn=' + window.sessionStorage.getItem('ordersn')
           }

          }
        })
      },
      payorder() {//实际扣款为0 跳转页面
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=payorder',
          type: 'post',
          data: {
            ordersn: window.sessionStorage.getItem('ordersn')
          }
        }).then(res => {
          if (res.code === 100) {
            this.$toast.success('提交成功')
            let thia = this
            setTimeout(function () {
              thia.$router.push({name: 'success'})
            }, 500)
          }
        })
      },
      payHandle() {

      },
      // cancleHandle() {
      //   this.$dialog.confirm({
      //     title: '是否取消订单',
      //   }).then(() => {
      //     this.$request({
      //       url: 'app/index.php?i=1&c=entry&eid=85&act=orderstatus',
      //       type: 'post',
      //       data: {
      //         ordersn: window.sessionStorage.getItem('ordersn'),
      //         status: -1
      //       }
      //     }).then(res => {
      //       if (res.code === 100) {
      //         this.$toast.success('取消成功')
      //         let thia = this
      //         setTimeout(function () {
      //           thia.$router.push({name: 'index'})
      //         }, 1000)
      //       }
      //     })
      //   }).catch(() => {
      //     // on cancel
      //   });
      //
      // },
    }
  }
</script>

<style lang="scss" scoped>
  .control {
    padding: 12px 15px;
    background-color: white;
    > P {
      height: 21px;
      font-size: 15px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 21px;
    }
    .btn {
      margin-top: 14px;
      width: 62px;
      height: 24px;
      border-radius: 4px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      line-height: 24px;
      border: 1px solid #333333;
    }
    .twobtn {
      margin-top: 14px;
      width: 88px;
      height: 24px;
      border-radius: 4px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      line-height: 24px;
      border: 1px solid #333333;
    }
    .hover_btn {
      border: 1px solid #71B3FF;
      background-color: #71B3FF;
      color: white;
    }
  }



  .indentConfirme {
    background-color: #F4F4F4;
  }

  .main {
    width: 100%;
    background-color: white;
    margin-top: 10px;
    .fill {
      margin: 0 auto;
      width: 345px;
      height: 1px;
      background: #eee;
    }
    .cell {
      width: 345px;
      height: 33px;
      line-height: 33px;
      vertical-align: middle;
      display: flex;
      justify-items: center;
      margin: 0 auto;
      font-size: 14px;
      color: rgba(51, 51, 51, 1);

      &-name {
        width: 70px;
        height: 20px;
        font-size: 14px;
        color: rgba(51, 51, 51, 1);
      }
      &-input {
        width: 260px;
        font-size: 14px;
        color: rgba(153, 153, 153, 1);
        line-height: 20px;
        border: 0;

      }
      &-default {
        width: 36px;
        height: 17px;
        font-size: 12px;
        color: rgba(153, 153, 153, 1);

      }
      &-yunfei {
        width: 56px;
        height: 17px;
        font-size: 12px;
        color: rgba(51, 51, 51, 1);

      }
    }
  }

  .submitBtn {
    width: 345px;
    height: 40px;
    display: block !important;
    margin: 18px auto 0;

  }

  .balance {
    margin-top: 10px;
    height: 44px;
    line-height: 44px;
    padding: 0 15px !important;
    &-right {
      width: 20px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 17px;
    }
  }

  .aggregate {
    width: 100%;
    margin-top: 10px;
    .cell {
      /*border: 0 !important;*/
      height: 28px !important;
      display: flex;
      align-items: center;
      padding: 0 15px !important;
      font-size: 15px;
      color: rgba(51, 51, 51, 1);
      &-right {
        /*width: 69px;*/
        height: 21px;
        font-size: 15px;
        color: #E73B3D;
      }
    }

  }

  .pay {
    height: 49px;
    width: 100%;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > dt {
      height: 21px;
      font-size: 15px;
      font-family: PingFangSC-Regular;
      color: rgba(51, 51, 51, 1);
      line-height: 21px;
      margin-right: 7px;
    }
    > dd {
      height: 21px;
      font-size: 15px;
      font-family: PingFangSC-Regular;
      color: rgba(51, 51, 51, 1);
      line-height: 21px;
      color: #E73B3D;
      margin-right: 13px;
    }
    .btn {
      width: 123px;
      height: 100%;
      background-color: #71B3FF;
      font-size: 18px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 49px;
    }

  }

  .cellRight {
    padding-right: 15px;
  }

  .popup {
    width: 100%;
    height: 100%;
    background-color: white;
    &-addAddress {
      margin: 200px auto;
      display: block;
      width: 336px;
      height: 45px;
      line-height: 45px;
      background-color: #71B3FF;
      font-size: 18px;
      font-family: PingFangSC-Regular;
      color: rgba(255, 255, 255, 1);
    }
  }

  .list {
    /*margin-top: 10px;*/
    width: 100%;
    &-notCard {
      padding: 12px 15px 12px;
      background-color: white;
      font-size: 15px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 21px;
      display: flex;
      justify-content: space-between;
      > span {

      }
      &-icon {

      }
    }
  }
</style>
