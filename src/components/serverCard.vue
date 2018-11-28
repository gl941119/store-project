<template>
  <div class="card" >
    <img :src="Data.thumb" alt="" class="card-left">
    <div class="card-right">
      <van-button plain type="primary" class="card-right-cancelBtn" v-on:click.stop="cancelCollect(Data.id)" v-if="collect">取消收藏</van-button>
      <p class="card-right-name">{{Data.name}}</p>
      <p class="card-right-content">{{Data.description}}</p>
      <p class="card-right-price my-price">￥{{Data.marketprice}}</p>
      <p class="card-right-comment">{{Data.discuss_total}}条评价 好评率{{Data.good_rate}}%</p>
    </div>
    <!--<van-button type="primary" class="cardSubmit" text="立即预约"  v-on:click.stop="goAppoint(Data.id)" v-if="btn"></van-button>-->
  </div>
</template>

<script>
  export default {
    name: "serverCard",
    props:{
      Data:{
        type:Object,
      },
      btn:{
        default:true
      },
      collect:{
        default: false
      }
    },
    mounted(){
    },
    methods:{
      cancelCollect(id){
        this.$dialog.confirm({
          title: '是否取消收藏',
        }).then(() => {
          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=87&act=collection',
            type: 'get',
            data: {
              type: '2',
              id: id
            }
          }).then(res => {
            if (res.code === 100) {
                this.$emit('refresh')
            }
          })
        }).catch(() => {
          // on cancel
        });

      },
      goDetail(id){
        this.$router.push({name:'detail',params:{type:'2',id:id}})

      },
      goAppoint(id){
        this.$router.push({name:'appoint',params:{sid:id}})

      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    overflow: hidden;
    position: relative;
    margin: 10px auto 2px;
    width: 345px;
    height: 115px;
    background: rgba(255, 255, 255, 1);
    box-shadow:0px 1px 11px 0px rgba(211,211,211,0.5);
    border-radius: 4px;
    display: flex;
    justify-content: flex-start;
    &-left {
      width: 115px;
      height: 115px;
    }
    &-right {
      flex: 1;
      width: 130px;
      margin-left: 15px;
      position: relative;
      overflow: hidden;
      &-cancelBtn{
        position: absolute;
        right: 10px;
        top: 9px;
        border: 1px solid #999999 !important;
        color: #999999;

        width:60px;
        height:19px;
        line-height: 19px;
        font-size:10px;

        color:rgba(153,153,153,1);
      }
      &-name {
        margin-top: 9px;
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        line-height: 23px;
        font-weight: 400;
      }
      &-content {

        margin-top: 6px;
        font-size: 10px;
        color: rgba(153, 153, 153, 1);
        line-height: 14px;
        width: 100%;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

      }
      &-price {
        margin-top: 16px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(233, 58, 61, 1);
        line-height: 22px;
      }
      &-comment{
        margin-top: 4px;
        font-size:10px;
        color:rgba(153,153,153,1);
        line-height:14px;
      }
    }
    .cardSubmit{
      border: 0;
      position: absolute;
      right: 10px;
      bottom: 22px;
      width:73px;
      height:23px;
      background:rgba(113,179,255,1);
      box-shadow:0px 5px 7px 0px rgba(204,226,249,1);
      border-radius:2px;
      font-size:12px;
      color:rgba(255,255,255,1);
      line-height:17px;
    }
  }

</style>
