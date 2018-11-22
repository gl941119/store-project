<template>
  <div class="serverEvaluateCom">
    <div class="null"></div>
    <div class="serverEvaluateCom_p">
      <div class="serverEvaluateCom_header">
        <div class="serverEvaluateCom_headerFl">
          <div class="serverEvaluateCom_headerSolid"></div>
          <div class="serverEvaluateCom_headerTxt">请对美师评价</div>
        </div>
      </div>

      <div class="serverEvaluateCom_box">

        <div class="serverEvaluateCom_cTop">
          <div class="serverEvaluateCom_cSolid">
            <div class="serverEvaluateCom_cTopL">
              <div class="serverEvaluateCom_cTopLImg"><img src="../../../assets/image/t1.jpg"></div>
              <div class="serverEvaluateCom_cTopLInfo">
                <div class="serverEvaluateCom_cTopName">王小茜</div>
                <div class="serverEvaluateCom_cTopStatus">特级科美师</div>
              </div>
            </div>
            <div class="serverEvaluateCom_cTopOne">NO.8号</div>
          </div>
        </div>

        <div class="serverEvaluateCom_list">
          <div class="serverEvaluateCom_XSolid">
            <div class="serverEvaluateCom_taiDu">态度</div>
            <van-rate
              v-model="value"
              :size="30"
              :count="5"
              color="#E93A3D"
              void-color="#C1C0CD"
              class="serverEvaluateCom_X"
            />
          </div>
        </div>

        <div class="serverEvaluateCom_list">
          <div class="serverEvaluateCom_XSolid">
            <div class="serverEvaluateCom_taiDu">态度</div>
            <van-rate
              v-model="value"
              :size="30"
              :count="5"
              color="#E93A3D"
              void-color="#C1C0CD"
              class="serverEvaluateCom_X"
            />
          </div>
        </div>
        <div class="serverEvaluateCom_list">
          <div class="serverEvaluateCom_XSolid">
            <div class="serverEvaluateCom_taiDu">态度</div>
            <van-rate
              v-model="value"
              :size="30"
              :count="5"
              color="#E93A3D"
              void-color="#C1C0CD"
              class="serverEvaluateCom_X"
            />
          </div>
        </div>

        <div class="serverEvaluateCom_tab">
          <div class="serverEvaluateCom_tabBtn serverEvaluateCom_tabBtnSelect">服务态度好</div>
          <div class="serverEvaluateCom_tabBtn">服务态度好</div>
          <div class="serverEvaluateCom_tabBtn">服务态度好</div>
          <div class="serverEvaluateCom_tabBtn">服务态度好</div>
        </div>

        <div class="serverEvaluateCom_textareaBox">
          <textarea class="serverEvaluateCom_textarea"></textarea>
        </div>


      </div>
    </div>

    <div class="serverEvaluateCom_p1">
      <div class="serverEvaluateCom_header">
        <div class="serverEvaluateCom_headerFl">
          <div class="serverEvaluateCom_headerSolid"></div>
          <div class="serverEvaluateCom_headerTxt">请对项目评价</div>
        </div>
      </div>

      <div class="serverEvaluateCom_box">
        <div class="serverEvaluateCom_cTop">

          <div class="serverEvaluateCom_object">
            <div class="serverEvaluateCom_objectImg"><img src="../../../assets/image/t1.jpg"></div>
            <div class="serverEvaluateCom_objectT">项目效果</div>
            <van-rate
              v-model="object"
              :size="30"
              :count="5"
              color="#E93A3D"
              void-color="#C1C0CD"
              class="serverEvaluateCom_X"
            />
          </div>

          <div class="serverEvaluateCom_textareaBox1">
            <textarea class="serverEvaluateCom_textarea" placeholder="服务的效果如何呢？发表一下自己的感受吧"></textarea>
          </div>

          <div class="serverEvaluateCom_upImg">
            <img src="" class="serverEvaluateCom_upImgs">
            <img src="" class="serverEvaluateCom_upImgs">
            <img src="" class="serverEvaluateCom_upImgs">
            <img src="" class="serverEvaluateCom_upImgs">
            <div class="serverEvaluateCom_upImgBtn">
              <div>
                <div><img src="../../../assets/image/appraise.png"/></div>
                <div class="serverEvaluateCom_upAddImg">添加图片</div>
              </div>
            </div>
          </div>

          <div class="serverEvaluateCom_passed">
            <div><van-icon name="passed" :class="[mode?'select_passed':'selectPassed']" @click="AnonymousMode"/></div>
            <div class="serverEvaluateCom_passedName">匿名</div>
          </div>


        </div>
      </div>


    </div>

    <div class="serverEvaluateCom_submit">提交</div>
  </div>
</template>

<script>
  export default {
    name: "com-serverEvaluate",
    data(){
      return {
        value:0,
        object:0,
      mode:false
      }
    },
    methods:{
      AnonymousMode(){//是否匿名
this.mode = !this.mode;
      }


    }
  }
</script>

<style lang="scss" scoped>
  .serverEvaluateCom{

  }
  .serverEvaluateCom_p{
     padding: 15px 15px 0 15px;
   }
  .serverEvaluateCom_p1{
    padding: 22px 15px 17px 15px;
  }
  .null{
    width: 100%;
    height: 10px;
    background-color: rgba(244,244,244,1);
  }
  .serverEvaluateCom_box{
    width:345px;
    margin: 0 auto;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 8px 0px rgba(216,216,216,0.5);
    border-radius:4px;
  }
  .serverEvaluateCom_header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 14px;
  }
  .serverEvaluateCom_headerFl{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .serverEvaluateCom_headerSolid{
    width: 4px;
    background-color: #71B3FF;
    height: 17px;
  }
  .serverEvaluateCom_headerTxt{
    padding-left: 13px;
    font-size:18px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .serverEvaluateCom_cTop{
    padding: 15px 15px 0 15px;
  }
  .serverEvaluateCom_cSolid{
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(216,216,216,1);
  }
  .serverEvaluateCom_cTopL{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .serverEvaluateCom_cTopLImg,.serverEvaluateCom_cTopLImg img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .serverEvaluateCom_cTopLInfo{
    padding-left: 18px;
  }
  .serverEvaluateCom_cTopName{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .serverEvaluateCom_cTopStatus{
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    padding-top: 6px;
  }
  .serverEvaluateCom_cTopOne{
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(113,179,255,1);
    padding-right: 6px;
    padding-top: 15px;
  }
  .serverEvaluateCom_list{
    padding:0 15px;
  }
  .serverEvaluateCom_XSolid{
    padding: 15px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(216,216,216,1);
  }
  .serverEvaluateCom_taiDu{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-right: 27px;
  }
  .serverEvaluateCom_X{
    display: flex;
    align-items: center;
  }
  .serverEvaluateCom_tab{
    padding:13px 15px 0 15px;
    display: flex;
    align-items: center;
    flex-flow: wrap;
  }
  .serverEvaluateCom_tabBtn,.serverEvaluateCom_tabBtnSelect{
    width:90px;
    height:25px;
    text-align: center;
    line-height: 25px;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    border-radius:17px;
    margin:0 15px 9px 0px;
  }
  .serverEvaluateCom_tabBtn{
    color:rgba(51,51,51,1);
    border: 1px solid #979797;
  }
  .serverEvaluateCom_tabBtnSelect{
    background:rgba(113,179,255,1);
    color:rgba(255,255,255,1);
    border: 1px solid rgba(113,179,255,1);
  }
  .serverEvaluateCom_textareaBox,
  .serverEvaluateCom_textareaBox1{
    width:315px;
    margin: 0 auto;
  }
  .serverEvaluateCom_textareaBox1{
padding-top: 15px;
  }

  .serverEvaluateCom_textarea{
    width:315px;
    height:91px;
    padding: 9px 0 0 10px;
    background:rgba(247,247,247,1);
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .serverEvaluateCom_object{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(216,216,216,1);
    padding-bottom: 5px;
  }
  .serverEvaluateCom_objectImg,
  .serverEvaluateCom_objectImg img{
    width: 40px;
    height: 40px;
  }
  .serverEvaluateCom_objectT{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    padding:0 10px;
  }
  .serverEvaluateCom_textareaBox1 textarea{
background-color: #fff;
  }
  .serverEvaluateCom_upImg{
    display: flex;
    align-items:center;
    justify-content: flex-start;
    flex-flow: wrap;
  }
 .serverEvaluateCom_upImgs{
    width: 80px;
    height: 80px;
    margin-right: 10px;
   margin-bottom: 5px;
  }
  .serverEvaluateCom_upImgBtn{
    width: 78px;
    height: 78px;
    display: flex;
    align-items:center;
    justify-content: center;
    border: 1px #979797 dashed;
    text-align: center;
  }
  .serverEvaluateCom_upAddImg{
    font-size:13px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(193,192,205,1);
  }
  .select_passed,.selectPassed{
font-size: 20px;
  }
  .selectPassed{
    color: #B3B4BB;
  }
  .select_passed{
    color: #71B3FF;
  }
  .serverEvaluateCom_passed{
    display: flex;
    align-items: center;
    margin-top: 15px;
    border-top:1px solid rgba(216,216,216,1);
    padding:16px 0 23px 0;
  }
  .serverEvaluateCom_passedName{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-left: 10px;
  }
  .serverEvaluateCom_submit{
    height:49px;
    line-height: 49px;
    background:rgba(113,179,255,1);
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
  }
</style>
