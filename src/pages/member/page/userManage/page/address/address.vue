<template>
  <div class="address">

    <ul class="list">
      <li v-for="item,index in listData" :key="item.id" class="list-card" v-on:click="goIndentConfirme(item)">
        <div class="list-card-top">
          <span class="list-card-top-realname">{{item.realname}}</span>
          <span class="list-card-top-mobile">{{item.mobile}}</span>
          <img src="../../../../../../assets/image/address.png" alt=""
               class="list-card-top-img"
               v-on:click.stop="goChangeAddress(item.id)">
        </div>
        <div class="list-card-bottom">

          <div class="list-card-bottom-address">
            <div class="default" v-if="item.isdefault==='1'">默认</div>
            <!--<div :class="{'list-card-bottom-padding':showCss(listData.length,index)}"></div>-->
            {{item.address}}
          </div>
        </div>
        <div :class="{fill:showCss(listData.length,index)}"></div>
      </li>
    </ul>
    <van-button type="primary" class="addAddress" v-on:click="goAddAddress">添加收货地址</van-button>
  </div>
</template>

<script>
  export default {
    name: "Address",
    data() {
      return {
        type:this.$route.params.type,
        oId:this.$route.params.oId,
        listData: []
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      showCss(len, index) {
        return len - 1 === index ? false : true
      },
      goAddAddress() {
        this.$router.push({name: "changeAddress", params: {id: 0}})
      },
      goChangeAddress(id) {
        this.$router.push({name: "changeAddress", params: {id: id}})
      },
      goIndentConfirme(item) {//购物车地址点击

          window.sessionStorage.setItem('address', JSON.stringify(item))
          if(this.type === '2'){ //套餐
            this.$router.go(-1)
          }else if(this.type === '1'){ //商城
            this.$router.go(-1)
          }





      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=addresslist',
          type: 'get'
        }).then((res) => {
          this.listData = res.data.list
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .address {
    height: 100%;
    padding: 0 0 50px;
    background-color: #F4F4F4;

  }

  .list {
    margin-top: 10px;
    width: 100%;

    &-card {
      position: relative;
      padding: 12px 15px 12px 15px;
      width: 375px;
      background: rgba(255, 255, 255, 1);
      &-top {
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-realname {
          font-size: 15px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          font-family: PingFangSC-Medium;
        }
        &-mobile {
          flex: 1;
          margin-left: 21px;
          font-size: 15px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);

        }
        &-img {
          margin-top: 3px;
          width: 15px;
          height: 15px;
        }
      }
      &-bottom {
        margin-top: 4px;
        overflow: hidden;

        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        line-height: 18px;
        .default {
          float: left;
          text-align: center;
          line-height: normal;
          width: 30px;
          height: 15px;
          border-radius: 2px;
          border: 1px solid rgba(231, 59, 61, 1);
          font-size: 10px;
          color: rgba(233, 88, 79, 1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &-address {
          width: 300px;
          font-size: 14px;
          color: rgba(102, 102, 102, 1);
          line-height: 18px;
        }
        &-padding {
          padding-left: 5px;
        }
      }

    }
  }

  .fill {
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    width: 345px;
    height: 1.1px;
    background-color: rgba(216, 216, 216, 1);
  }

  .addAddress {
    position: fixed;
    bottom: 0;
    width: 375px;
    height: 49px;
    background: rgba(113, 179, 255, 1);
    box-shadow: 0px 5px 7px 0px rgba(204, 226, 249, 1);
  }
</style>
