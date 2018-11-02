<template>
  <div class="invite">
    <navbar :name="'邀请好友'"></navbar>
    <div class="content">
      <p class="content-title">您的邀请码</p>
      <p class="content-num">{{code}}</p>
      <img src="../../../../assets/image/invite_back1.png" alt="" class="content-back">
      <p class="content-QR_title">您的邀请码</p>
      <img :src="code_image" alt="" class="content-QR">
    </div>

  </div>

</template>

<script>
  export default {
    name: "invite",
    data() {
      return {
        code: undefined,
        code_image: undefined
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=invitation_code',
          type: 'get'
        }).then((res) => {
          this.code = res.data.code
          this.code_image = res.data.code_image
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .invite {
    background: url("../../../../assets/image/invite_bg.png") no-repeat center center;
    background-size: 375px 100%;
    .content {
      margin: 84px auto 0;
      width: 315px;
      height: 433px;
      background: url("../../../../assets/image/invite_back.png") no-repeat;
      background-size: 315px 433px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      &-title {
        margin-top: 27px;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(168, 68, 221, 1);
        line-height: 25px;
      }
      &-num {
        margin-top: 27px;
        /*color:rgba(168,68,221,1);*/
        font-size: 50px;
        font-weight: 800;
        background-image: -webkit-linear-gradient(left, #F02DA4, #7023E9); /* Safari 5.1 - 6.0 */
        background-image: -o-linear-gradient(right, #F02DA4, #7023E9); /* Opera 11.1 - 12.0 */
        background-image: -moz-linear-gradient(right, #F02DA4, #7023E9); /* Firefox 3.6 - 15 */
        background-image: linear-gradient(to right, #F02DA4, #7023E9); /* 标准的语法（必须放在最后） */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &-back {
        position: absolute;
        width: 290px;
        top: 50%;
      }
      &-QR_title {
        margin-top: 105px;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(168, 68, 221, 1);
        line-height: 25px;

      }
      &-QR {
        margin-top: 18px;
        width: 113px;
        height: 113px;
      }
    }
  }
</style>
