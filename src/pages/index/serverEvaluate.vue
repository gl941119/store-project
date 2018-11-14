<template>
  <div>

    <div class="serverEvaluate">
      <div class="serverEvaluateWbg">
        <div class="serverEvaluateW">
          <div class="serverEvaluateWL">
            <div class="serverEvaluateT">综合</div>
            <div>
              <van-rate
                v-model="value"
                :size="26"
                :count="5"
                color="#E93A3D"
                void-color="#C1C0CD"
                class="red"
                readonly
                disabled-color="#E93A3D"
              />
            </div>
          </div>
          <div>{{ value }}分</div>
        </div>
      </div>
    </div>

    <div class="serverEvaluateWbg serverEvaluateWbg1">
      <div class="serverEvaluateW serverEvaluateWw" v-for="(item,index) in list" :key="item.id">
        <div class="serverEvaluateWL">
          <div class="serverEvaluateT">{{ item.name }}</div>
          <div>
            <van-rate
              v-model="item.score"
              :size="26"
              :count="5"
              color="#E93A3D"
              void-color="#C1C0CD"
              @change="change"
            />
          </div>
        </div>
        <div>{{item.score}}分</div>
      </div>


      <div class="serverEvaluateReaBox">
        <textarea placeholder="请留下您宝贵的建议。" v-model="content" class="serverEvaluateRea"></textarea>
      </div>

      <div class="serverEvaluatePop">感谢您的评价</div>

      <van-button type="default" class="serverEvaluateReaBtn" v-on:click="submit">完成</van-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "serverEvaluate",
    data() {
      return {
        value: 3,
        list: [],
        content: undefined,
      }
    },
    mounted() {
      this.initO();
    },

    methods: {
      initO() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=162&act=serviceevaluate',
          type: 'post',
        }).then((res) => {
          if (res.status) {
            res.data.evals.forEach(item => {
              item['score'] = 3
            })
            this.list = res.data.evals;

          }
        });
      },

      change() {
        let value = 0
        this.list.forEach(item => {
          value += item.score
        })
        this.value = Math.ceil(value / this.list.length)
      },
      submit() {


        this.$dialog.confirm({
          title: '是否提交评论',
        }).then(() => {

          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=87&act=servicediscuss',
            type: 'post',
            data: {
              evals: JSON.stringify(this.list),
              content: this.content,
              orderid: this.$route.params.orderid
            }
          }).then(res => {
            if (res.code === 100) {
              this.$toast.success('感谢您的评价')
              let thia = this
              setTimeout(function () {
                thia.$router.push({name: 'memberSubscribe'})
              }, 1000)
            }

          })


        }).catch(() => {
          // on cancel
        });


      }
    }
  }
</script>

<style lang="scss" scoped>
  .serverEvaluateReaBtn {
    width: 345px;
    height: 40px;
    display: block;
    margin: 10px auto;
    background: rgba(113, 179, 255, 1);
    box-shadow: 0px 5px 7px 0px rgba(204, 226, 249, 1);
    border-radius: 2px;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

  .serverEvaluateReaBox {
    width: 345px;
    padding-top: 15px;
    margin: 0 auto;
  }

  .serverEvaluateRea {
    width: 345px;
    height: 150px;

    font-size: 15px;
    font-family: PingFangSC-Regular;

    color: rgba(102, 102, 102, 1);
    line-height: 21px;
  }

  .serverEvaluatePop {
    font-size: 15px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    text-align: center;
  }

  .serverEvaluateWw {
    border-bottom: 1px solid rgba(216, 216, 216, 1);
    padding: 10px 0;
  }

  .serverEvaluateWL {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .serverEvaluateT {
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    padding-right: 10px;
    color: rgba(51, 51, 51, 1);
  }

  .serverEvaluateWbg {
    background-color: #fff;
    padding: 20px 0;
  }

  .serverEvaluateW {
    width: 345px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .serverEvaluate {
    padding: 10px 0;
    background-color: rgba(244, 244, 244, 1);
  }

  .serverEvaluateWbg1 {
    padding: 0;
  }

</style>
