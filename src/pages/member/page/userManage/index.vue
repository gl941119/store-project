<template>
  <div class="userManage">
    <navbar :name="'账号管理'"></navbar>
    <com-head :avatar='avatar' @Refresh="request"></com-head>
    <!--<com-list :listData="listData"></com-list>-->
    <ul class="list">
      <router-link tag="li" :to="{ path: '/member/userManage/userChange/0/'+nameData.message}" class="list-li">
        <cell :Data="nameData" class="cell"></cell>
      </router-link>
      <router-link tag="li" :to="{ path: '/member/userManage/userChange/1/'+sexData.message}" class="list-li">
        <cell :Data="sexData" class="cell"></cell>
      </router-link>
      <router-link tag="li" :to="{ path: '/member/userManage/userChange/2/'+birthdayDate}" class="list-li">
        <cell :Data="birthdayData" class="cell"></cell>
      </router-link>
      <router-link tag="li" :to="{ path: '/member/userManage/address/2'}" class="list-li">
        <cell :Data="addressData" class="cell"></cell>
      </router-link>
      <router-link tag="li" :to="{ path: '/member/userManage/userChange/4/'+signatureData.message}" class="list-li">
        <cell :Data="signatureData" class="cell"></cell>
      </router-link>
    </ul>
    <div style="text-align: center;margin-top: 29px">
      <!--<van-button type="danger" id="userManage-outBtn">退出账户</van-button>-->
    </div>
  </div>
</template>

<script>
  import ComHead from './com/com-head'
  import ComList from '../../com/com-list'
  import Utils from '../../../../utils/utils'

  export default {
    name: "UserManage",
    components: {
      ComList,
      ComHead
    },
    data() {
      return {
        utils: new Utils(),
        birthdayDate: undefined,
        Data: null,
        avatar: undefined,
        nameData: {
          name: '昵称',
          message: ' '
        },
        sexData: {
          name: '性别',
          message: ' '
        },
        birthdayData: {
          name: '出生日期',
          message: ' '
        },
        addressData: {
          name: '收货地址',
          message: ' '
        },
        signatureData: {
          name: '个性签名',
          message: ' '
        }
      }
    },
    mounted() {
      this.request()
    },
    methods: {
      onclick(val) {
        console.log(val)
      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=ucenter',
          type: 'get'
        }).then((res) => {
          this.Data = res.data.user;  //用户数据
          this.avatar = this.Data.avatar; //头像
          this.nameData.message = this.Data.nick; //名称
          if(this.Data.sex){
            this.sexData.message = this.Data.sex === "female" ? '女' : '男'; //性别
          }

          if(this.Data.birthday){
            let time = this.utils.secondFormart(this.Data.birthday);
            this.birthdayData.message = this.utils.dateFormart(time); //出生日期
            this.birthdayDate = time.getTime(); //出生日期
          }


          if(this.Data.address){
            this.addressData.message = this.Data.address; //收货地址
          }
          if(this.Data.signature){
            this.signatureData.message = this.Data.signature //个性
          }


        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userManage {
    background-color: #F4F4F4;
    height: 100%;

  }

  #userManage-outBtn {
    width: 304px;
    height: 40px;
  }

  .cell {
    height: 45px;
  }

  .list {
    background: rgba(255, 255, 255, 1);
    &-li {
      padding: 0 15px;
      .fill {
        width: 100%;
        height: 1px;
        background: rgba(216, 216, 216, 1);
      }
    }
  }
</style>
