<template>
    <div>
      <navbar :name="'我的评价'"></navbar>
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
                  @change="zh()"
                />
              </div>
            </div>
            <div>{{ count }}分</div>
          </div>
        </div>
      </div>

      <div class="serverEvaluateWbg serverEvaluateWbg1">
        <div class="serverEvaluateW serverEvaluateWw"  v-for="(item,index) in list">
          <div class="serverEvaluateWL">
            <div class="serverEvaluateT">{{ item.name }}</div>
            <div>
              <van-rate
                v-model="taiDuTxt"
                :size="26"
                :count="5"
                color="#E93A3D"
                void-color="#C1C0CD"
                @change="taiDu()"
              />
            </div>
          </div>
          <div>{{ taiDuCount }}分</div>
        </div>


  <div class="serverEvaluateReaBox">
    <textarea placeholder="服务很不错，第一次体验到这样的服务。" class="serverEvaluateRea"></textarea>
  </div>

        <div class="serverEvaluatePop">评价完成，感谢您的评价</div>
        <div class="serverEvaluateReaBtn">完成</div>
      </div>

    </div>
</template>

<script>
  import { Rate } from 'vant';
    export default {
        name: "serverEvaluate",
      data(){
          return{
            value:0,
            count:0,
            taiDuTxt:0,
            taiDuCount:0,
            list:[]
          }
      },
      mounted(){
this.initO();
      },

      methods:{
        initO(){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=162&act=serviceevaluate',
            type:'post',
          }).then((res)=>{
            if(res.status){
              this.list=res.data.evals;
            }
          });
        },
        zh(){
          this.count=this.value*2;
        },
        taiDu(){
          this.taiDuCount=this.taiDuTxt*2;
        }
      }
    }
</script>

<style lang="scss" scoped>
  .serverEvaluateReaBtn{
  width:345px;
  height:40px;
    margin: 10px auto;
  background:rgba(113,179,255,1);
  box-shadow:0px 5px 7px 0px rgba(204,226,249,1);
  border-radius:2px;
    text-align: center;
    line-height: 40px;
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .serverEvaluateReaBox{
    width: 345px;
    padding-top: 15px;
    margin: 0 auto;
  }
  .serverEvaluateRea{
    width: 345px;
    height: 150px;
  }
  .serverEvaluatePop{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    text-align: center;
  }
  .serverEvaluateWw{
    border-bottom: 1px solid rgba(216,216,216,1);
    padding: 10px 0;
  }
  .serverEvaluateWL{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .serverEvaluateT{
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    padding-right: 10px;
    color:rgba(51,51,51,1);
  }
  .serverEvaluateWbg{
    background-color: #fff;
    padding: 20px 0;
  }
  .serverEvaluateW{
    width: 345px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
.serverEvaluate{
  padding: 10px 0;
  background-color: rgba(244,244,244,1);
}
  .serverEvaluateWbg1{
    padding: 0;
  }
</style>
