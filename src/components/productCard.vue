<template>
  <div class="card"  v-on:click="goDetail(Data.id)">
    <img :src="Data.thumb" alt="" class="card-left">
    <div class="card-right">
      <van-button plain type="primary" class="card-right-cancelBtn" v-on:click.stop="cancelCollect(Data.id)" v-if="collect">取消收藏</van-button>
      <span class="card-right-select" v-if="select">已选</span>
      <p class="card-right-name">{{Data.title}}</p>
      <p class="card-right-content">{{Data.description}}</p>
      <p class="card-right-price my-price">￥{{Data.price}}</p>
      <p class="card-right-comment">{{Data.discuss_total}}条评价&nbsp;&nbsp;好评率{{Data.good_rate}}%</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "productCard",
    props:{
      Data:{
        type:Object
      },
      select:{
        default:false
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
              type: '1',
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
        this.$router.push({name:'detail',params:{id:id,type:'1'}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px auto 0;
    width: 345px;
    height: 115px;
    background: rgba(255, 255, 255, 1);
    box-shadow:0px 1px 11px 0px rgba(211,211,211,0.5);
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    &-left {
      width: 115px;
      height: 115px;

    }
    &-right {
      width: 230px;
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
      &-select{
        position: absolute;
        top: 13px;
        right: 4px;
        font-size:10px;
        font-family:PingFangSC-Regular;
        color:rgba(113,179,255,1);
      }
      &-name {
        height: 23px;
        margin-top: 9px;
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
        line-height: 23px;
        font-weight: 400;
      }
      &-content {
        height: 14px;
        width: 200px;
        margin-top: 6px;
        font-size: 10px;
        color: rgba(153, 153, 153, 1);
        line-height: 14px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &-price {
        height: 23px;
        margin-top: 12px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(233, 58, 61, 1);

      }
      &-comment{
        height: 14px;
        margin-top: 8px;
        font-size:10px;
        color:rgba(153,153,153,1);

      }

    }

  }
</style>
