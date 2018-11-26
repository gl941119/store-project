<template>
  <li class="list-card">
    <div class="list-card-top">
      <span class="list-card-top-realname">{{address.realname}}</span>
      <span class="list-card-top-mobile">{{address.mobile}}</span>
      <van-icon name="arrow" class="list-card-top-icon"/>
    </div>
    <div class="list-card-bottom">
      <div class="list-card-bottom-default" align="left" v-if="address.isdefault==='1'">默认</div>
      <span class="list-card-bottom-address">{{address.address}}</span>
    </div>
    <div class="fill"></div>
  </li>
</template>

<script>
  export default {
    name: "com-address",
    props: ['address'],
    methods:{
    }
  }
</script>

<style lang="scss" scoped>

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
      /*margin-top: 4px;*/
      /*overflow: hidden;*/
      /*width: 270px;*/
      /*line-height: 5px;*/
      /*display: block;*/
      /*text-overflow: ellipsis;*/
      margin-top: 4px;
      overflow: hidden;
      width: 250px;
      display: flex;
      justify-content: flex-start;



      &-default {

        text-align: center;
        line-height: normal;
        width: 40px;
        height: 15px;
        border-radius: 2px;
        border: 1px solid rgba(231, 59, 61, 1);
        font-size: 10px;
        color: rgba(233, 88, 79, 1);

        /*float: left;*/
      }
      &-address {
        text-overflow: ellipsis;
        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        line-height: 18px;
      }
    }
  }

</style>
