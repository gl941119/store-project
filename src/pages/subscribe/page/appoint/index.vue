<template>
  <div class="appoint">
    <navbar :name="'预约美师'"></navbar>
    <div class="address">
      <img :src="store.thumb" alt="" class="address-img">
      <dl>
        <dt>{{store.name}}</dt>
        <dd>{{store.address}}</dd>
      </dl>
      <a :href="'tel:'+store.mobile" class="address-tel"></a>
    </div>
    <div class="fill"></div>
    <div class="product">
      <product-card :Data="service" :select="true" class="product-card"></product-card>
    </div>

    <div class="cosmetologist">
      <cosmetologist-card :Data="item" v-for="item in member" :key="item.id" class="cosmetologist-card"></cosmetologist-card>
    </div>

  </div>
</template>

<script>
  import CosmetologistCard from './com/cosmetologistCard'
  export default {
    name: "appoint",
    components:{
      CosmetologistCard
    },
    data() {
      return {
        store: {},
        service: {},
        member: [],

      }

    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=86&act=appointone&sid=2',
          type: 'GET',
          data: {
            sid: this.$route.params.sid
          }
        }).then((res) => {
          this.store = res.data.store
          this.service = res.data.service
          this.member = res.data.member
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .address {
    width: 375px;
    height: 54px;
    padding: 0 15px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-img {
      width: 35px;
      height: 35px;
      background: rgba(149, 221, 255, 1);
    }
    > dl {
      height: 35px;
      margin-left: 10px;
      flex: 1;
      > dt {

        height: 18px;
        font-size: 13px;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
      }
      > dd {
        margin-top: 2px;
        height: 14px;
        font-size: 10px;
        font-family: PingFangSC-Regular;

        color: rgba(153, 153, 153, 1);
      }
    }
    &-tel {
      margin-top: 4px;
      display: block;
      width: 30px;
      height: 30px;
      background: url("../../../../assets/image/tel1.png") no-repeat;
      background-size: 30px 30px;

    }
  }

  .fill {
    margin: 0 auto;
    width: 345px;
    height: 1px;
    background: rgba(216, 216, 216, 1);
  }

  .appoint {
    background-color: #F4F4F4;
    .product {
      width: 100%;
      background-color: white;
      padding: 14px 0 10px;
      &-card{
        box-shadow: 0 0;
        margin: 0 auto  !important;

      }
    }
    .cosmetologist {
      margin-top: 10px;
      padding: 13px 0;
      background-color: white;
      &-card {
        margin-bottom: 15px;
      }
    }
  }

</style>
