<template>
  <div class="beautifulPoints">
    <div class="beautifulPoints_top">
      <div class="beautifulPoints_topNum">{{score}}</div>
      <div class="beautifulPoints_topName">美丽积分券</div>
    </div>

    <div class="beautifulPoints_tab">明细</div>

    <div class="beautifulPoints_list">

      <div class="beautifulPoints_flex" v-for="item in dataList">
        <div>
          <div class="beautifulPoints_flexName">{{item.title}}</div>
          <div class="beautifulPoints_flexTime">{{item.createtime}}</div>
        </div>
        <div class="beautifulPoints_flexPriceJ" v-if="parseInt(item.status)===2">-{{item.score_nex}}</div>
        <div class="beautifulPoints_flexPrice" v-if="parseInt(item.status)===1" >+{{item.score_nex}}</div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        dataList:{},
        score:0
      }
    },
    mounted(){
      this.initEv();
    },
    methods:{
      initEv(){
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=88&act=score_nex_record',
          type:'post'
        }).then(res=>{
          if(res.status){
            let d=res.data;
            this.score=d.score_nex;
            this.dataList=d.list;
          }
        });
      }
    },

  }
</script>

<style lang="scss" scoped>
  .beautifulPoints{
    background-color: #fff;
    padding-bottom: 0px;
  }
  .beautifulPoints_top{
    width: 100%;
    height: 188px;
    background: url('../../../../assets/image/mljfj.png') no-repeat;
    background-size: 100% 188px;
    text-align: center;
  }
  .beautifulPoints_topNum{
    font-size:50px;
    font-family:DINAlternate-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    padding: 37px 0 4px 0;
  }
  .beautifulPoints_topName{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    padding-bottom: 10px;
  }
  .beautifulPoints_topBtnBox{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .beautifulPoints_topBtn{
    font-size:18px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(113,179,255,1);
    background-color: #fff;
    border-radius: 50px;
    width: 100px;
    height: 30px;
    line-height: 30px;
  }
  .beautifulPoints_tab{
    font-size:12px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(74,74,74,1);
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    margin-top: -12px;
    background-color: rgba(244,244,244,1);
  }
  .beautifulPoints_list{
    padding: 0 15px;
  }
  .beautifulPoints_flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #979797;
    padding-bottom: 12px;
  }
  .beautifulPoints_flexName{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(74,74,74,1);
    padding: 16px 0 7px 0;
    width: 250px;
  }
  .beautifulPoints_flexTime{
    font-size:11px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(155,155,155,1);
  }
  .beautifulPoints_flexPrice{
    font-size:20px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(113,179,255,1);
  }
  .beautifulPoints_flexPriceJ{
    font-size:20px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(102,102,102,1);
  }
</style>
