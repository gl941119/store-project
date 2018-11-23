<template>
  <div class="staffCard">
    <img :src="Data.avatar" alt="">
    <dl>
      <van-button plain type="primary" class="cancelBtn" v-on:click.stop="cancelCollect(Data.id)" v-if="collect">取消收藏</van-button>
      <dt>科美师：{{Data.name}}</dt>
      <dd>{{Data.address}}店{{Data.displayorder}}号科美师</dd>
      <p>{{Data.signature}}</p>
    </dl>
  </div>
</template>

<script>
  export default {
    name: "staffCard",
    props: {
      Data:{},
      collect:{
        default: false
      }
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
              type: '3',
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
    }
  }
</script>

<style lang="scss" scoped>
  .staffCard {
    margin: 10px auto 0;
    width: 345px;
    height: 115px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 11px 0px rgba(211, 211, 211, 0.5);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    > img {
      width: 115px;
      height: 115px;
    }
    > dl {
      flex: 1;
      padding: 9px 0 0 15px;
      position: relative;
      overflow: hidden;
      .cancelBtn{
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
      > dt {
        font-size: 16px;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
      }
      > dd {
        margin-top: 10px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
      }
      > p {
        max-height: 47px;
        overflow: hidden;
        margin-top: 10px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 17px;

      }
    }
  }
</style>
