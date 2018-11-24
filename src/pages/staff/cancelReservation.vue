<template>
  <div class="cancelReservation_body">
    <div class="cancelReservation_bodyBox">
      <div>
        <div class="cancelReservation_imgBox">
          <div class="cancelReservation_img"><img src="../../assets/image/fish.png"></div>
        </div>
        <div class="cancelReservation_center cancelReservation_center1">该客户已4次取消预约</div>
        <div class="cancelReservation_center cancelReservation_centerPading">本次取消将扣除预约次数</div>
        <textarea class="cancelReservation_cont" v-model="status_message" placeholder="具体理由"></textarea>
      </div>
    </div>
    <div class="cancelReservation_footer">
      <div class="cancelReservation_footerBtn" @click="noQuXiao">暂不取消</div>
      <div class="cancelReservation_footerBtnOk" @click="quXiaoBtn">确认取消</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cancelReservation",
    data() {
      return {
        status_message: undefined
      }
    },
    methods: {
      noQuXiao() {
        this.$router.go(-1)
      },
      quXiaoBtn() {
// on confirm
        //取消订单
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=86&act=cancelorder',
          type: 'post',
          data: {
            orderid: this.$route.params.orderid,
            status_message: this.status_message

          }
        }).then((res) => {
          if (res.status) {
              this.$router.go(-1)

          }

        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cancelReservation_body {
    padding-bottom: 0px;
    background-color: #fff;
  }

  .cancelReservation_bodyBox {
    height: calc(100vh - 50px);
    display: flex;
    overflow-y: auto;
    align-items: center;
    justify-content: center;
  }

  .cancelReservation_footer {
    height: 49px;
    display: flex;
    align-items: strecth;
    line-height: 49px;
    justify-content: flex-end;
    border-top: 1px solid rgba(216, 216, 216, 1);
  }

  .cancelReservation_footerBtn, .cancelReservation_footerBtnOk {
    width: 50%;
    text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
  }

  .cancelReservation_footerBtn {
    color: rgba(102, 102, 102, 1);
  }

  .cancelReservation_footerBtnOk {
    background-color: #71B3FF;
    color: #fff;
  }

  .cancelReservation_cont {
    width: 315px;
    margin: 0 auto;
    background-color: rgba(238, 238, 238, 1);
    border-radius: 4px;
    min-height: 102px;
    padding: 11px 15px;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .cancelReservation_imgBox {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cancelReservation_img, .cancelReservation_img img {
    width: 60px;
    height: 60px;
    text-align: center;
  }

  .cancelReservation_center {
    text-align: center;
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
  }

  .cancelReservation_center1 {
    padding: 36px 0 9px 0;
  }

  .cancelReservation_centerPading {
    padding-bottom: 39px;
  }
</style>
