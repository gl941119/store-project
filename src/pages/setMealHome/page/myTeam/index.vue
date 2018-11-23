<template>
    <div class="myTeam">
      <div v-for="item in one">
        <div class="null"></div>
        <div class="myTeam_my">
          <div class="myTeam_myHead"><img :src="item.avatar"></div>
          <div class="myTeam_myRight">
            <div class="myTeam_myName">{{item.nick}}</div>
            <div class="myTeam_myUp">我的上级美丽代言人</div>
          </div>
        </div>

      </div>

      <div>
        <div class="null"></div>
          <van-tabs @click="onTag">
            <van-tab title="一级美丽代言">
              <div class="nullFff"></div>
              <div class="myTeam_item" v-for="item in two">
                <div class="myTeam_flex">
                  <div class="myTeam_myHeadFlex">
                    <div class="myTeam_myHeadFlexImg"><img :src="item.avatar"></div>
                    <div class="myTeam_myHeadFlexName">{{item.nick}}</div>
                  </div>
                  <div class="myTeam_myHeadFlexR">积分：2000.00</div>
                </div>
              </div>

            </van-tab>
            <van-tab title="二级美丽代言">
              <div class="nullFff"></div>
              <div class="myTeam_item" v-for="item in three">
                <div class="myTeam_flex">
                  <div class="myTeam_myHeadFlex">
                    <div class="myTeam_myHeadFlexImg"><img :src="item.avatar"></div>
                    <div class="myTeam_myHeadFlexName">{{item.nick}}</div>
                  </div>
                  <div class="myTeam_myHeadFlexR">积分：2000.02</div>
                </div>
              </div>

            </van-tab>
          </van-tabs>
      </div>

    </div>
</template>

<script>
  let arr=[];
    export default {
        name: "index",
      data(){
          return {
            one:{},
            two:{},
            three:{},
            dataList:{}
          }
      },
      mounted(){
        let arr=[];
          this.initOne();
        this.initTwo();
      },
      methods:{
          initOne(){

            this.$request({
              url:'app/index.php?i=1&c=entry&eid=88&act=beautylist',
              type:'post',
              data:{
                type:1
              }
            }).then((res)=>{
              if(res.status){
                let data=res.data;
                 this.one=data.share?data.share:{};
              }

            });
          },initTwo(){

          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=beautylist',
            type:'post',
            data:{
              type:2
            }
          }).then((res)=>{
            if(res.status){
              let data=res.data;
              this.two=data.share?data.share:{};
            }

          });
        },initThree(){

          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=beautylist',
            type:'post',
            data:{
              type:3
            }
          }).then((res)=>{
            if(res.status){
              let data=res.data;
              this.three=data.share?data.share:{};
            }

          });
        },
        onTag(index,title){
          var box = document.getElementsByClassName("van-tab");
          let cName=box[index].className.indexOf('van-tab--active');
          console.log(this.dataList)
          if(index===0){
              if(cName==-1){
                this.initTwo();
              }
            }else if(index===1){
              if(cName=-1){
                this.initThree();
              }
            }

        }
      }
    }
</script>

<style lang="scss" scoped>
.myTeam{
  padding-bottom: 0px;
}
  .null{
    height: 10px;
    width: 100%;
    background-color: rgba(244,244,244,1);
  }
  .myTeam_my{
    padding: 10px 0 10px 15px;
    display: flex;
    justify-content: flex-start;
  }
  .myTeam_myHead,.myTeam_myHead img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .myTeam_myRight{
    padding-left: 18px;
  }
  .myTeam_myName{
    padding: 3px 0;
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .myTeam_myUp{
    font-size:13px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .myTeam_item{
    width:345px;
    margin: 0 auto 15px auto;
    height:81px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 8px 0px rgba(216,216,216,0.5);
    border-radius:4px;
  }
  .nullFff{
    height: 20px;
    background-color: #fff;
  }
  .myTeam_flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0 16px 15px;
  }
  .myTeam_myHeadFlex{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .myTeam_myHeadFlexImg,.myTeam_myHeadFlexImg img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .myTeam_myHeadFlexName{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-left: 18px;
  }
  .myTeam_myHeadFlexR{
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-right: 26px;
  }
</style>
