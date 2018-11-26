<template>
  <div class="indentConfirme">

    <!--选择方式-->
    <div class="control">
      <p>选择运送方式</p>
      <van-button type="default" class="btn" :class="{hover_btn:cssSelect === 1}" ref="btnVan" @click="ChooseMode(1)">留店</van-button>
      <van-button type="default" class="twobtn" :class="{hover_btn:cssSelect === 2}" ref="btnVan" @click="ChooseMode(2)">寄送到家</van-button>
    </div>
    <!--留店-->
    <div class="model" v-if="cssSelect === 1" @click="storeEv">
      <p class="title">{{dataList.store===undefined?'':dataList.store.name}}</p>
      <p class="subTitle">{{dataList.store===undefined?'':dataList.store.addres}}</p>
      <van-icon name="arrow" class="icon"/>
    </div>


  <div class="list-card" v-if="cssSelect === 2" @click="addressEven">
    <div class="list-card-top">
      <span class="list-card-top-realname">{{dataList.user===undefined?'':dataList.user.realname}}</span>
      <span class="list-card-top-mobile">{{dataList.user===undefined?'':dataList.user.mobile}}</span>
      <van-icon name="arrow" class="list-card-top-icon"/>
    </div>
    <div class="list-card-bottom">
      <div class="list-card-bottom-default" v-if="isdefault===1">默认</div>
      <span class="list-card-bottom-address">{{dataList.user===undefined?'':dataList.user.address}}</span>
    </div>
    <div class="fill"></div>
  </div>
    <div class="card">
      <div class="content">
        <img :src="dataList.mdata===undefined?'':dataList.mdata.simg" alt="">
        <div class="content-right">
          <div class="content-right-top">
            <div>{{dataList.mdata===undefined?'':dataList.mdata.name}}</div>
            <div @click="()=>{this.$router.push({name:'setMealDetail',params:{ids:dataList.mdata===undefined?'':dataList.mdata.id}})}">查看详情</div>
          </div>
          <div class="content-right-middle">
            <div>{{dataList.mdata===undefined?'':dataList.mdata.description}}</div>
            <div>X{{dataList.odata===undefined?'':dataList.odata.num}}</div>
          </div>
          <div class="content-right-bottom">
            <span class="my-price">{{dataList.mdata===undefined?'':dataList.mdata.price}}</span>
            <div class="my-price">
              <van-stepper
                v-model="stepperValue"
                integer
                :min="1"
                :max="999"
                :step="1"
                @change="stepperChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--主体-->
    <div class="main">

      <div class="fill"></div>
      <div class="cell">
        <span class="cell-name">买家留言:</span>
        <input type="text" class="cell-input" placeholder="选填" v-model="LeavingMessage">
      </div>
    </div>


    <div class="aggregate">
      <van-cell title="套餐金额" class="cell">
        <span class="cell-right">￥&nbsp;{{dataList.mdata===undefined?'':dataList.mdata.price}}</span>
      </van-cell>
      <van-cell title="运费" class="cell">
        <span class="cell-right">￥&nbsp;{{dataList.odata===undefined?'':dataList.odata.dispatchprice}}</span>
      </van-cell>
      <van-cell title="合计" class="cell">
        <span class="cell-right">￥&nbsp;{{dataList.odata===undefined?'':dataList.odata.orderprice}}</span>
      </van-cell>
    </div>


    <div class="pay">
      <dt>合计：</dt>
      <dd>¥ {{dataList.odata===undefined?'':dataList.odata.orderprice}}</dd>
      <van-button type="default" class="btn" @click="submitEvent()">提交订单</van-button>
    </div>

    <van-popup v-model="storeShow" position="right" class="popup" :overlay="false">
      <div class="model" v-for="item,k in storelist" @click="storeEvList(item.id)">
        <p class="title">{{item.name}}</p>
        <p class="subTitle">{{item.address}}</p>
        <van-icon name="arrow" class="icon"/>
      </div>
    </van-popup>
    <van-popup v-model="addressShow" position="right" class="popup" :overlay="false">
      <div class="list-card" v-for="item in addressList" @click="addressItem(item.id)">
        <div class="list-card-top">
          <span class="list-card-top-realname">{{item.realname}}</span>
          <span class="list-card-top-mobile">{{item.mobile}}</span>
          <van-icon name="arrow" class="list-card-top-icon"/>
        </div>
        <div class="list-card-bottom">
          <div class="list-card-bottom-default" v-if="parseInt(item.isdefault)===1">默认</div>
          <span class="list-card-bottom-address">{{item.address}}</span>
        </div>
        <div class="fill"></div>
      </div>
    </van-popup>
  </div>
</template>

<script>


  export default {
    name: "confirme",
    components: {

    },

    data() {
      return {
        ids:this.$route.params.ids,
        cssSelect:1,
        dataList:{},
        LeavingMessage:'',
        stepperValue:'1',
        storeShow:false,
        addressShow:false,
        storelist:{},
        addressList:{},
        isdefault:0,
        addressId:0,
      }
    },

    mounted() {
      this.request();
      this.initEvnt({orderid:this.ids});
    },
    methods: {
      requestMode(params){
        let a= this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$meal.eid + '&dom='+this.$meal.dom+'&act=payorder&orderid=' +this.ids+'&message='+this.LeavingMessage;
        console.log(a)
        window.location.href =a;
        // window.location.href = this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$eidpay.eid + '&dom='+this.$eidpay.dom+'&act=payorder&orderid=' +this.ids;
        // this.$request({
        //   url:'app/index.php?i=1&c=entry&eid=90&act=orderinfo',
        //   type:'post',
        //   data:params
        // }).then(res=>{
        //   if(res.status){
        //     let a= this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$eidpay.eid + '&dom='+this.$eidpay.dom+'&act=payorder&orderid=' +this.ids+'&message='+this.LeavingMessage;
        //     console.log(a)
        //     // window.location.href = this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$eidpay.eid + '&dom='+this.$eidpay.dom+'&act=payorder&orderid=' +this.ids;
        //   }
        // });
      },
      submitEvent(){
        let a= this.$upUrl + 'app/index.php?' + this.$i + '&c=entry&eid=' + this.$meal.eid + '&dom='+this.$meal.dom+'&act=payorder&orderid=' +this.ids+'&message='+this.LeavingMessage;
        alert(a)
        window.location.href =a;
// if(this.cssSelect===1){
//   let pa={
//     orderid:this.ids,
//     // is_send:this.cssSelect,
//     message:this.LeavingMessage,
//     // storeid:this.dataList.store.id
//   }
//   this.requestMode(pa);
// }else if(this.cssSelect===2){
//   let pa={
//     orderid:this.ids,
//     // is_send:this.cssSelect,
//     message:this.LeavingMessage,
//     // addressid:this.addressId
//   }
//   this.requestMode(pa);
// }


      },
      addressItem(i){
        this.initEvnt({orderid:this.ids,is_send:1,addressid:i});
        this.addressShow=false;
      },
      storeEvList(i){
        this.initEvnt({orderid:this.ids,is_send:0,storeid:i});
      this.storeShow=false;
      },
      addressEven(){
        this.addressShow=true;
      },
      storeEv(){
this.storeShow=true;
      },
      stepperChange(){
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=90&act=orderinfo',
          type:'post',
          data:{
            orderid:this.ids,
            num:this.stepperValue
          }
        }).then(res=>{
          if(res.status){
            this.dataList=res.data;
          }
        });
      },
      ChooseMode(i){
        this.cssSelect=i;

      },
      initEvnt(par){
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=90&act=orderinfo',
          type:'post',
          data:par
        }).then(res=>{
          if(res.status){
            this.dataList=res.data;
            setTimeout(()=>{
              let list=this.addressList.filter(item=>{ return parseInt(item.id)===parseInt(res.data.user.addressid)});
              this.isdefault=parseInt(list[0].isdefault);
              this.addressId=parseInt(list[0].id);
            },500)

          }
        });
      },
      request(){

        this.$request({
          url:'app/index.php?i=1&c=entry&eid=88&act=addresslist',
          type:'post',
        }).then(resAdd=>{
          if(resAdd.status){
            this.addressList=resAdd.data.list;
          }
        });

        this.$request({
          url:'app/index.php?i=1&c=entry&eid=87&act=storelist',
          type:'post',
        }).then(res=>{
          if(res.status){
            this.storelist=res.data.storelist;
          }
        });


      }

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
      margin-left: 24px;
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

  .model {
    padding: 6px 15px 20px;
    background-color: white;
    position: relative;
    overflow: hidden;
    .title {
      height: 21px;
      font-size: 15px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 21px;
    }
    .subTitle {
      margin-top: 4px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 20px;
    }
    .icon {
      position: absolute;
      right: 15px;
      top: 50%;
      margin-top: -10px;

    }
  }
  .list-card {
    position: relative;
    padding: 6px 15px 12px;
    width: 375px;
    /*height: 90px;*/
    background: rgba(255, 255, 255, 1);
    position: relative;
    &-top {
      overflow: hidden;
      height: 21px;
      &-realname {
        float: left;
        font-size: 15px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 21px;
        /*width: 45px;*/
        height: 21px;
      }
      &-mobile {
        float: left;
        margin-left: 15px;
        font-size: 15px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 21px;
      }
      &-icon {
        position: absolute;
        top: 50%;
        right: 15px;
        font-size: 11px;
      }
    }
    &-bottom {
      margin-top: 4px;
      overflow: hidden;
      width: 270px;
      line-height: 5px;
      display: block;
      text-overflow: ellipsis;
      &-default {
        display: inline-block;
        margin-right: 5px;
        margin-top: 3px;
        text-align: center;
        width: 30px;
        height: 15px;
        line-height: 13px;
        border-radius: 2px;
        border: 1px solid rgba(231, 59, 61, 1);
        font-size: 10px;
        color: rgba(233, 88, 79, 1);
      }
      &-address {
        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        line-height: 20px;
      }
    }
  }
  .submit-bar {
    margin-bottom: 50px;
  }

  .card {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 110px;
    background: rgba(255, 255, 255, 1);

    border-radius: 4px;
    /*width:345px;*/
    /*height:110px;*/

  }

  .checkbox {
    font-size: 25px;
  }

  .checkAll {
    margin-left: 25px;
    font-size: 15px;
    color: rgba(51, 51, 51, 1);
    line-height: 21px;
  }

  .content {
    width: 100%;
    height: 80px;
    > img {
      float: left;

      width: 80px;
      height: 80px;
    }
    &-right {
      float: left;
      margin-left: 10px;
      width: 250px;
      &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div:nth-child(1) {
          height: 23px;
          width: 200px;
          font-size: 16px;
          color: rgba(72, 72, 72, 1);
          line-height: 23px;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        div:nth-child(2) {
        width: 57px;
        height: 18px;
        background-color: #71B3FF;
        line-height: 18px;
        text-align: center;
                    font-size:10px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(255,255,255,1);
          }
        > img {
          width: 11px;
          height: 12px;

        }
      }
      &-middle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1px;
        > div:nth-child(1){
width: 200px;
          font-size:12px;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(153,153,153,1);
          height: 20px;
          line-height: 20px;
          overflow: hidden;
        } div:nth-child(2){
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(153,153,153,1);
          }
      }
      &-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 14px;
        > span {
           width: 43px;
           height: 21px;
           font-size: 15px;
           font-weight: 500;
           color: rgba(222, 25, 25, 1);
           line-height: 21px;
         }
        div {

        }
        .stepper {

        }

      }
    }
  }
</style>
