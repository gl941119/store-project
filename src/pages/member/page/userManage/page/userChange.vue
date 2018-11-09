<template>
  <div style="background-color: #F4F4F4;height: 100%">
    <navbar :name="navbarName"></navbar>
    <div class="cell">
      <a class="cell-left" v-on:click="cancelHandle">取消</a>
      <a class="cell-right" v-on:click="confirmHandle">保存</a>
    </div>
    <div style="margin-top: 10px" class="wrap">
      <input type="text" class="name" v-if="type === '0'" v-model="message"> <!--姓名-->
      <van-picker :columns="columns" @change="onChange" v-if="type === '1'" class="sex"/><!--男女-->
      <van-datetime-picker
        :show-toolbar="pickerStatus"
        :min-date="minDate"
        v-model="currentDate"
        type="date"
        @change="pickerChange"
        v-if="type === '2'"
      />
      <textarea class="signature" v-if="type === '4'" v-model="message"/> <!--个性签名-->
    </div>
  </div>
</template>

<script>
  import Utils from '../../../../../utils/utils'

  export default {
    name: "userChange",
    data() {
      return {
        type: this.$route.params.type,
        message: this.$route.params.message,
        columns: ['男', '女'],
        sex: '男',
        currentDate: new Date(),
        minDate: new Date(1950, 1, 1),
        pickerStatus: false,
        utils: new Utils()
      }
    },

    computed: {
      navbarName: function () {
        let name
        if (this.type == 0) name = '更换名称';
        if (this.type == 1) name = '选择性别';
        if (this.type == 2) name = '出生日期';
        if (this.type == 3) name = '收货地址';
        if (this.type == 4) name = '个性签名';
        return name
      }
    },
    mounted() {
      this.currentDate = new Date(parseInt(this.message))

    },
    methods: {
      pickerChange(picker) {
        // this.utils.dateFormart(this.currentDate)
      },
      onChange(picker, value, index) {
        console.log(picker, value, index)
        this.sex = value
      },
      cancelHandle() {
        this.$router.go(-1)
      },
      confirmHandle() {
        if (this.type === '0') { // 修改名称
          this.setNick()
        }
        if (this.type === '1') {
          this.setSex()
        }
        if (this.type === '2') { // 修改生日
          this.setbirthday()
        }
        if (this.type === '4') {//修改个性签名
          this.setsignature()
        }
      },
      setbirthday() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=saveinfo',
          data: {
            birthday: this.currentDate.getTime().toString().slice(0, -3),
          },
          type: 'post',
        }).then((res) => {
          if (res.code === 100) {
            this.$toast.success('保存成功')
            this.$router.go(-1)
          }
          if (res.code === 103) {
            this.$toast.success('请修改')
          }
        })
      },
      setsignature() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=saveinfo',
          data: {
            signature: this.message,
          },
          type: 'post',
        }).then((res) => {
          if (res.code === 100) {
            this.$toast.success('保存成功')
            this.$router.go(-1)
          }
          if (res.code === 103) {
            this.$toast.success('请修改')
          }
        })

      },
      setSex() {
        console.log(this.sex)
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=saveinfo',
          data: {
            sex: this.sex== '女'? 'female':'male',
          },
          type: 'post',
        }).then((res) => {
          if (res.code === 100) {
            this.$toast.success('保存成功')
            this.$router.go(-1)
          }
        })
      },
      setNick() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=88&act=saveinfo',
          data: {
            nick: this.message,
          },
          type: 'post',
        }).then((res) => {
          if (res.code === 100) {
            this.$toast.success('保存成功')
            this.$router.go(-1)
          }
          if (res.code === 103) {
            this.$toast.success('请修改名称')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  .name {
    padding: 0 15px;
    display: block;
    width: 375px;
    height: 44px;
    background: rgba(255, 255, 255, 1);
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(102,102,102,1);
  }

  .signature {
    width: 375px;
    height: 88px;
    font-size: 15px;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 21px;
    /*text-indent: 30px;*/
    /*background:rgba(255,255,255,1);*/
  }

  .cell {
    background-color: #FFFFFF;
    padding: 0 15px;
    width: 375px;
    height: 44px;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {

      height: 21px;
      font-size: 15px;

      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      line-height: 21px;
    }
    &-right {

      height: 21px;
      font-size: 15px;

      font-weight: 500;
      color: rgba(113, 179, 255, 1);
      line-height: 21px;
    }
  }

  .wrap {
    width: 100%;
  }

  .sex {

  }
</style>
