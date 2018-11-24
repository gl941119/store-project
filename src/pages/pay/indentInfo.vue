<template>
  <div class="indentInfo">
    <div class="indentInfo_top">{{statusTitle}}</div>
    <div class="indentInfo_padding">
      <div class="space_between">
        <div class="flex_start indentInfo_padding4">
          <div class="indentInfo_name">{{user.realname}}</div>
          <div class="indentInfo_phone">{{user.mobile}}</div>
        </div>
        <div class="indentInfo_transportMode">{{is_send == '0' ? '留店':'运送到家'}}</div>
      </div>
      <div class="indentInfo_address">{{user.address}}</div>
    </div>
    <div class="null"></div>
    <div class="indentInfo_padding1">
      <div class="flex_start indentInfo_padding2" v-for="item,index in goodslist" :key="index" v-on:click="goDetail(item.goodsid)">
        <div class="InsComm_listImg"><img src="item.thumb"></div>
        <div class="InsComm_listRight">
          <div>
            <div class="InsComm_listName">
                {{item.title}}
            </div>
            <div class="InsComm_listRightTop">
              {{item.description}}
            </div>
          </div>
          <div class="space_between">
            <div class="InsCommPay_price">¥{{item.marketprice}}</div>
            <div class="InsCommOrder">数量：{{item.num}}</div>
          </div>
        </div>
        <div class="border"></div>
      </div>
    </div>
    <div class="null"></div>
    <div class="indentInfo_padding1">
      <div class="space_between indentInfo_pading">
        <div class="indentInfo_l">商品金额</div>
        <div class="indentInfo_r">¥ {{allprice}}</div>
      </div>
      <div class="space_between indentInfo_pading">
        <div class="indentInfo_l">积分券抵扣</div>
        <div class="indentInfo_r">¥ {{score_nex}}</div>
      </div>
      <div class="space_between indentInfo_pading">
        <div class="indentInfo_l">运费</div>
        <div class="indentInfo_r">¥ {{freight}}</div>
      </div>
      <div class="space_between indentInfo_pading">
        <div class="indentInfo_l">订单总价：</div>
        <div class="indentInfo_r">¥ {{allmoney}}</div>
      </div>

    </div>
    <div class="null"></div>
    <div class="indentInfo_padding1">
      <div class="flex_start indentInfo_pad">
        <div class="indentInfo_solid"></div><div class="indentInfo_title">订单信息</div>
      </div>
      <div class="flex_start indentInfo_pad" v-if="get_score_nex">
        <div class="indentInfo_title1">美丽积分券</div>
        <div class="indentInfo_title11">获得{{get_score_nex}}美丽积分券</div>
      </div>
      <div class="flex_start indentInfo_pad" v-if="ordersn">
        <div class="indentInfo_title1">订单编号</div>
        <div class="indentInfo_title11">{{ordersn}}</div>
      </div>
      <div class="flex_start indentInfo_pad" v-if="createtime">
        <div class="indentInfo_title1">创建时间</div>
        <div class="indentInfo_title11">{{createtime}}</div>
      </div>
      <div class="flex_start indentInfo_pad" v-if="pay_time">
        <div class="indentInfo_title1">付款时间</div>
        <div class="indentInfo_title11">{{pay_time}}</div>
      </div>
      <div class="flex_start indentInfo_pad" v-if="send_time">
        <div class="indentInfo_title1">发货时间</div>
        <div class="indentInfo_title11">{{send_time}}</div>
      </div>
      <div class="flex_start indentInfo_pad" v-if="take_time">
        <div class="indentInfo_title1">收货时间</div>
        <div class="indentInfo_title11">{{take_time}}</div>
      </div>
    </div>
    <div class="null"></div>
    <div class="footer">
      <!--<van-button type="default" class="payBtn">付款</van-button>-->
      <van-button round plain type="default" class="cancelBtn"
                  v-if="status== '0'"
                  v-on:click="cancelHandle"
      >
        取消订单
      </van-button>
      <van-button round plain type="default" class="confirmBtn"
                  v-if="status== '0'"

      >
        去付款
      </van-button>
      <van-button round plain type="default" class="confirmBtn"
                  v-if="status== '2'||status== '1'"
      >
        确认收货
      </van-button>



      <van-button round plain type="default" class="cancelBtn" v-if="status== '2'"

      >
        查看物流
      </van-button>

      <van-button round plain type="default" class="confirmBtn"
                  v-if="status== '3'"
                v-on:click="goAppraise"
      >
        评价
      </van-button>

    </div>

  </div>
</template>

<script>
  import cache from  '../../utils/cache'
  export default {
    name: "indentInfo",
    data(){
      return {
        ordersn:window.sessionStorage.getItem('ordersn'),
        user:{},
        goodslist:[],
        get_score_nex:undefined,//美丽积分券
        allprice:undefined,//商品金额
        score_nex:undefined,//积分券抵扣
        freight:undefined,//运费
        allmoney:undefined,//订单总价
        // ordersn:undefined,//订单编号
        createtime:undefined,//
        pay_time:undefined,
        send_time:undefined,
        take_time:undefined,
        status:undefined,//状态
        is_send:undefined,//是否留店

      }
    },
    computed:{

      statusTitle:function () {
        switch (this.status) {
          case '0':
            return '等待买家付款';
            break;
          case '1':
            return '待发货';
            break;
          case '2':
            return '待收货';
            break;
          case '3':
            return '待评价';
            break;
          case '4':
            return '交易完成';
            break
        }
      }
    },


    mounted(){

      this.request()
    },
    methods:{

      goAppraise(id) {//跳转评价
        let arr = []
        this.goodslist.forEach((item) => {
          let obj = {
            thumb: item.thumb,
            goodsid: item.goodsid,
            "content": undefined,
            "score": 4,
            "tip": undefined,//匿名
            videos: [],
            imgs: []
          }
          arr.push(obj)
        })


        cache.setSession('appraise', arr)
        console.log(arr)
        this.$router.push({name: 'appraise', params: {id: id}})//id 订单号id
      },
      goDetail(id){
        this.$router.push({name:'detail',params:{type:'1',id:id}})
      },
      cancelHandle() {//取消订单
        this.$dialog.confirm({
          title: '是否取消订单',
        }).then(() => {
          this.reqChange('-1')
        }).catch(() => {

          // on cancel
        });
      },
      reqChange(status) {//修改订单状态
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=85&act=orderstatus',
          type:'get',
          data:{
            ordersn: this.ordersn,
            status: status
          }
        }).then(res=>{
          if (res.code === 100) {
            if (staus === -1) {
              this.$toast.success('取消成功')
              let thia = this
              setTimeout(function () {
                thia.$route.go(-1)
              }, 1000)
            }
            if (staus === 3) {
              this.$toast.success('收货成功')
              let thia = this
              setTimeout(function () {
                // thia.$emit('refresh')
              }, 1000)
            }
          }
        })
      },
      request(){
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=85&act=orderinfo',
          type: 'post',
          data: {
            ordersn: this.ordersn
          }
        }).then(res => {
          if (res.code === 100) {
          this.user = res.data.user;
            this.goodslist = res.data.goodslist;
            this.get_score_nex = res.data.get_score_nex; //美丽积分券
            this.allprice = res.data.allrecord.allprice;  //商品金额
            this.score_nex = res.data.allrecord.score_nex;  //积分券抵扣
            this.freight = res.data.freight.freight;//运费
            this.allmoney = res.data.allrecord.money;  //总金额
            // this.ordersn = res.data.ordersn; //订单编号
            this.createtime = res.data.createtime;
            this.pay_time = res.data.pay_time;
            this.send_time = res.data.send_time;
            this.take_time  = res.data.take_time;
            this.status = res.data.status;//状态
            this.is_send = res.data.is_send

          }
        })
      }
    }

  }
</script>

<style lang="scss" scoped>
  .border{
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    margin: 12px 0 0;
    background-color: rgba(216,216,216,1);
  }
  .more{
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    transform: rotate(45deg);
    content: '';
    width: 9px;
    height: 9px;
  }
  .space_between{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex_start{

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .null{
    width: 100%;
    height: 10px;
    background-color: rgba(244,244,244,1);
  }
  .indentInfo{
    padding-bottom: 0px;
    background-color: #f4f4f4;
    height: 100%;

  }
  .indentInfo_padding2{
    position: relative;
    overflow: hidden;
    height: 110px;

  }
  .indentInfo_top{
    height:103px;
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height: 103px;
    text-align: center;
    background:linear-gradient(135deg,rgba(170,242,255,1) 0%,rgba(113,179,255,1) 100%);
  }
  .indentInfo_padding{
    padding: 12px 15px;
    background-color: white;
  }
  .indentInfo_padding1{
    padding: 15px;
    background-color: white;
  }
  .indentInfo_name{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .indentInfo_phone{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    padding-left: 21px;
  }
  .indentInfo_address{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .indentInfo_transportMode{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .InsComm_listImg{
    overflow: hidden;
  }
  .InsComm_listImg,.InsComm_listImg img{
    width: 80px;
    height: 80px;
  }
  .InsComm_listRight{
    height: 80px;
    width: 256px;
    padding-left: 10px;
  }
  .InsComm_listName{
    margin-top:2px ;
    height: 23px;
    overflow: hidden;
    font-size:16px;
    font-weight:400;
    color:rgba(72,72,72,1);
  }
  .InsComm_listRightTop{
    height: 35px;
    font-size:12px;
    line-height:17px;
    font-weight:400;
    color:rgba(153,153,153,1);
    overflow: hidden;
    text-overflow:ellipsis;//文本溢出显示省略号
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

  }
  .InsCommPay_price{
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(222,25,25,1);
  }
  .InsCommOrder{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    padding-right: 15px;
  }
  .indentInfo_l{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .indentInfo_r{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(231,59,61,1);
  }
  .indentInfo_title{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-left: 8px;
  }
  .indentInfo_solid{
    width: 3px;
    height: 16px;
    background-color: #71B3FF;
  }
  .indentInfo_title1{
    width: 60px;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .indentInfo_title11{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    padding-left: 12px;
  }
  .indentInfo_pad{
    padding-bottom: 6px;
  }
  .indentInfo_pading{
    padding-bottom: 4px;
  }
  .indentInfo_padding4{
    padding-bottom: 4px;
  }

  .footer{
    width: 100%;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    .confirmBtn{
      margin:12px 15px 8px 0;
      width: 90px;
      height: 30px;
      background-color: #71B3FF;
      border-radius: 30px;
      font-size:14px;
      color:rgba(255,255,255,1);
      line-height:30px;

    }
    .cancelBtn {
      margin:12px 15px 8px 0;
      width: 90px;
      height: 30px;
      background-color: white;
      font-size:14px;
      color:rgba(151,151,151,1);
      line-height:30px;
      border-radius: 30px;
    }
  }
</style>
