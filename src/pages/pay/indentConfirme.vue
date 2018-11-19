<template>
  <div class="indentConfirme">
    <div class="control">
      <p>选择运送方式</p>
      <van-button type="default" class="btn" :class="{hover_btn:status==='0'}" v-on:click="status = '0'">留店</van-button>
      <van-button type="default" class="btn" :class="{hover_btn:status==='1'}" v-on:click="status = '1'">寄送到家</van-button>
    </div>
    <div class="model" v-if="status==='0'" v-on:click="selectStore">
      <p class="title">S+艾司科美健康管理中心</p>
      <p class="subTitle">四川成都市高新区环球中心w3区21楼</p>
      <van-icon name="arrow" class="icon"/>
    </div>
    <!--<div class="model" v-else v-on:click="selectMail">-->
      <!--<p class="title">四川成都市高新区中和镇孤帆远影2号</p>-->
      <!--<p class="subTitle">四川成都市高新区中和镇孤帆远影2号</p>-->
      <!--<van-icon name="arrow" class="icon"/>-->
    <!--</div>-->
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
    />



    <!--收货地址-->
    <com-address  v-if="status==='1'" :address="address" v-on:click.native="goAddress" ></com-address>
    <div class="main">
      <com-prodectcard :item="item" v-for="item in goodslist" :key="item.id" @refrech="request"></com-prodectcard>
      <div class="fill"></div>
      <div class="cell">
        <span class="cell-name">买家留言:</span>
        <input type="text" class="cell-input" placeholder="选填" v-model="leave">
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
      <dd>¥ 1980.00</dd>
      <van-button type="default" class="btn">提交订单</van-button>
    </div>


  </div>
</template>

<script>
  import ComProdectcard from './com/com-productCard'
  import ComAddress from './com/com-address'
  import cache from '../../utils/cache'

  export default {
    name: "confirme",
    components: {
      ComProdectcard, ComAddress
    },
    data() {
      return {
        address: {
          address: undefined,
          area: undefined,
          city: undefined,
          id: undefined,
          isdefault: undefined,
          mobile: undefined,
          province: undefined,
          realname: undefined,
        },
        goodslist: [],
        share_amount: undefined,//基金
        ishave: undefined,
        freight: undefined,
        leave: undefined,//买家留言
        money: undefined,//美丽余额
        allprice: undefined,//商品金额
        score_nex: undefined,//积分券减免
        allmoney: undefined,//总金额
        show: false,//门店弹窗
        actions: [
          {
            name: '选项'
          },
          {
            name: '选项',
            subname: '描述信息'
          },
          {
            loading: true
          },
          {
            name: '禁用选项',
            disabled: true
          }
        ],
        status:'0',//门店选择状态

      }
    },
    mounted() {
      // if (window.sessionStorage.getItem('address')) {
      //   this.address = JSON.parse(window.sessionStorage.getItem('address'))
      //   console.log(this.address)
      // } else {
      //   this.request()
      // }

      //确认订单
      // this.goodslist = JSON.parse(cache.getSession('buyCart'))
      this.request()

    },
    methods: {
      onSelect(item){
        this.show = false;
        // Toast(item.name);
      },
      selectStore(){//选择门店
        this.show = true



      },
      selectMail(){//选择地址

      },
      cancleHandle() {
        this.$dialog.confirm({
          title: '是否取消订单',
        }).then(() => {
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=85&act=orderstatus',
            type: 'post',
            data: {
              ordersn: window.sessionStorage.getItem('ordersn'),
              status: -1
            }
          }).then(res => {
            if (res.code === 100) {
              this.$toast.success('取消成功')
              let thia = this
              setTimeout(function () {
                thia.$router.push({name: 'index'})
              }, 1000)
            }
          })
        }).catch(() => {
          // on cancel
        });

      },
      request() {//通过订单号查询
        let addressid = undefined
        try {
          addressid = JSON.parse(window.sessionStorage.getItem('address')).id
        } catch (e) {
        }
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=orderinfo',
          type: 'post',
          data: {
            ordersn: window.sessionStorage.getItem('ordersn'),
            // address: window.sessionStorage.getItem('address'),
            addressid: addressid
          }
        }).then((res) => {
          this.goodslist = res.data.goodslist
          this.address = res.data.user
          this.score_nex = res.data.user.score_nex      //美丽
          this.share_amount = res.data.user.share_amount   //基金
          // this.amount = res.data.allrecord.amount // 美丽余额
          this.money = res.data.user.money //美丽余额
          this.ishave = res.data.freight.ishave //运费   1 元
          this.freight = res.data.freight.freight
          this.allprice = res.data.allrecord.allprice  //商品金额
          this.score_nex = res.data.allrecord.score_nex  //积分券减免
          this.allmoney = res.data.allrecord.money  //总金额

        })
      },
      submit() {//提交订单
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
      goAddress() {//去收货地址
        this.$router.push({name: 'address', params: {type: '0'}})
      },
      payHandle() {
        window.location.href = this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$eid161.eid + '&dom='+this.$eid161.dom+'&act=payorder&ordersn=' + window.sessionStorage.getItem('ordersn')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .control{
    padding:  12px 15px ;
    background-color: white;
    >P{
      height:21px;
      font-size:15px;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height:21px;
    }
    .btn{
      margin-top: 14px;
      width:62px;
      height:24px;
      border-radius:4px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      line-height:24px;
    }
    .hover_btn{
      background-color: #71B3FF;
      color: white;
    }
  }
  .model{
    padding:  6px 15px 20px;
    background-color: white;
    position: relative;
    overflow: hidden;
    .title{

      height:21px;
      font-size:15px;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height:21px;
    }
    .subTitle{
      margin-top: 4px;
      height:20px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(153,153,153,1);
      line-height:20px;
    }
    .icon{
      position: absolute;
      right: 15px;
      top: 50%;
      margin-top: -10px;

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
  .balance{
    margin-top: 10px;
    height: 44px;
    line-height: 44px;
    padding: 0 15px !important;
    &-right{
      width:20px;
      height:17px;
      font-size:12px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(153,153,153,1);
      line-height:17px;
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



  .pay{
    height: 49px;
    width: 100%;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    >dt{
      height:21px;
      font-size:15px;
      font-family:PingFangSC-Regular;
      color:rgba(51,51,51,1);
      line-height:21px;
      margin-right: 7px;
    }
    >dd{
      height:21px;
      font-size:15px;
      font-family:PingFangSC-Regular;
      color:rgba(51,51,51,1);
      line-height:21px;
      color: #E73B3D;
      margin-right: 13px;
    }
    .btn{
      width: 123px;
      height: 100%;
      background-color: #71B3FF;
      font-size:18px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:49px;
    }

  }
  .cellRight {
    padding-right: 15px;
  }
</style>
