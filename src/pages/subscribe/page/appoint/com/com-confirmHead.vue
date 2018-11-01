<template>
  <div class="wrap">
    <div class="head">
      <div class="head-top">
        <span>{{store.name}}</span>
        <van-icon name="arrow" class="head-top-icon"/>
      </div>
      <div class="head-bottom">
        <img src="../../../../../assets/image/exhibition2.png" alt="">
        <span>{{store.address}}</span>
      </div>
    </div>
    <div class="fill"></div>
    <div class="name">
      <span>预约姓名:&nbsp;&nbsp;{{user.name}}</span>
      <!--<input type="text" class="ml5" v-model="name">-->

    </div>
    <div class="fill"></div>
    <div class="name">
      <span>预约电话:&nbsp;&nbsp;{{user.mobile}}</span>
      <!--<input type="text" class="ml5" v-model="tel">-->
    </div>

  </div>
</template>

<script>
  export default {
    name: "com-confirmHead",
    props: ['store','user'],
    data() {
      return {
        name: undefined,
        tel: undefined
      }
    },
    watch:{
      name:function (val) {
        this.$emit('name',val)
      },
      tel:function (val) {
        this.$emit('tel',val)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 140px;
    background: rgba(255, 255, 255, 1);
    padding: 0 15px;
    margin: 10px 0;
    .head {
      /*height: 65px;*/
      padding: 6px 0 10px;
      &-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span {
          height: 21px;
          font-size: 15px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 21px;
        }
        &-icon {
          font-size: 11px;
          color: #333333;
        }
      }
      &-bottom {
        margin-top: 4px;
        display: flex;
        align-items: center;
        > img {
          margin-left: 4px;
          width: 12px;
          height: 15px;

        }
        > span {
          margin-left: 11px;
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC-Regular;
          color: rgba(153, 153, 153, 1);

        }
      }
    }
    .name {
      height: 37px;
      display: flex;
      align-items: center;
      > span {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 30px;
      }
      >input{
        flex: 1;
        height: 30px;
        font-size: 14px;
        color: rgba(51, 51, 51, 1);
      }
    }
    &-tel {
    }

  }

  .fill {
    width: 345px;
    height: 1px;
    background: rgba(216, 216, 216, 1);
    margin: 0 auto;
  }

</style>
