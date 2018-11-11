<template>
  <div>

    <cosmetologist-card :type="false" :Data="member" class="card"></cosmetologist-card>
    <!--选择天数-->
    <select-day :time='time'></select-day>
    <!--选择时间-->
    <select-hour :time='time'></select-hour>
    <van-button type="default" class="Btn" v-on:click="submit">完成</van-button>
  </div>
</template>

<script>
  // 预约美师选择时间

  import CosmetologistCard from './com/cosmetologistCard'
  import SelectDay from './com/selectDay'
  import SelectHour from './com/selectHour'

  export default {
    name: "selectTime",
    components: {
      CosmetologistCard, SelectDay, SelectHour
    },
    data() {
      return {
        id: this.$route.params.id,
        sid: this.$route.params.sid,
        member: {
          thumb: undefined
        },
        name: undefined,
        time: {}
      }
    },
    mounted() {


      this.request()
    },
    methods: {
      submit() {//提交
        let Day = this.$store.state.SelectDay,
          Hour = this.$store.state.SelectHour;

        if (!Day) {
          this.$toast.fail('请选择日期')
          return
        }
        if (!Hour) {
          this.$toast.fail('请选择时间')
          return
        }

        //时间格式转换
        const DayArray = Day.split('.')
        DayArray.unshift(new Date().getFullYear().toString())
        const time = [DayArray.join('-'), Hour + ':00'].join(' ')
        this.$store.commit('setSelectTime', time)

        this.verify(time)
      },
      verify(time) {//验证时间选择是否正确

        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=86&act=verifytime',
          type: 'post',
          data: {
            id: this.$route.params.id,
            sid: this.$route.params.sid,
            date: time,
          }
        }).then((res) => {
          if (res.code === 100) {
            this.$request({//生成订单
              url: 'app/index.php?i=1&c=entry&eid=86&act=confirmorder',
              type: 'POST',
              data: {
                id: this.$route.params.id,
                sid: this.$route.params.sid,
                date: time,
              }
            }).then((res) => {
              if (res.code === 100) {
                this.$router.push({name: 'confirm', params: {orderid: res.data.orderid}})
              }
            })
          }
        })
      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=86&act=appointtwo',
          type: 'post',
          data: {
            id: this.id,
            sid: this.sid
          }
        }).then((res) => {
          this.member = res.data.member;
          this.name = `${res.data.member.displayorder}号美师`;
          document.title = this.name
          let obj = res.data.ttime
          Object.keys(obj).forEach((item) => {
            obj[item].date = obj[item].date.split('-').slice(-2).join('.')
          });
          this.time = obj
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    margin: 16px auto 0 !important;
    height: 81px !important;
  }

  .Btn {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #71B3FF;
    color: white;
  }


</style>
