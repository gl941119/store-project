<template>
  <div class="jiFenPaiHang" ref="myBoxSrc" @scroll.passive="onScroll($event)">
    <div></div>

    <div ref="myDiv">
      <div class="oneDyList" >
        <div class="oneDyListImg"><img :src="imgSrc"></div>
        <div class="oneDyListL">
          <p class="oneDyBottom">{{ names }}</p>
          <p class="oneDyTxt">排名{{ num }}名</p>
        </div>
        <div>
          <p class="oneDyBottom">销售额</p>
          <p class="oneDyTxtJe">¥{{ money }}</p>
        </div>
      </div>
      <div class="integralRanking">销售排行榜</div>
      <div class="oneDyList integralRankingSolid" v-for="item in arr">
        <div class="oneDyListImg"><img :src="item.avatar"></div>
        <div class="oneDyListL">
          <p class="oneDyBottom">{{ item.name }}</p>
          <p class="oneDyTxt">排名{{ item.num }}名</p>
        </div>
        <div>
          <p class="oneDyBottom">销售额</p>
          <p class="oneDyTxtJe">¥{{ item.allamount }}</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "IntegralRanking",
    data(){
      return {
        imgSrc:'',
        names:'',
        money:'',
        num:'',
        arr:[],
        myScroll:null,
        myBox:null,
        listLen:null,
        currListLen:0,
        status:false,
        pages:0,
      }
    },
    mounted(){
      this.meRequest();
      this.myScroll=this.$refs.myDiv;
      this.myBox=this.$refs.myBoxSrc;
    },
    methods:{
      meRequest(){
        this.$request({
          url:'app/index.php?i=1&c=entry&eid=88&act=scorelist',
          type:"get"
        }).then((res) => {
          if(res.status){
            var user=res.data.user;
            var list=res.data.list;
            this.imgSrc=user.avatar;
            this.names=user.name;
            this.money=user.allamount;
            this.num=user.num;
            this.arr=list;
            this.listLen=list.length;
            this.pages=res.data.page.p;
          }
        });
      },
      onScroll(e){
        var listHeight=e.target.scrollTop+this.myBox.offsetHeight;
        var listScrollTop=this.myScroll.offsetHeight;
        var c=listScrollTop-listHeight;
        console.log(this.currListLen!=this.listLen,this.currListLen,this.listLen,this.status)
        if(!this.status&&this.currListLen!=this.listLen&&c < 100){
          this.status=true;
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=scorelist',
            type:"post",
            data:{
              p:this.pages+1
            }
          }).then((res) => {
            if(res.status){
              var list=res.data.list;
              this.listLen=list.length;
              this.currListLen=list.length;
              this.arr=list;
              this.status=false;
            }
          });
        }

      }


    }
  }
</script>

<style lang="scss" scoped>
  .integralRanking{
    background-color: rgba(244,244,244,1);
    height: 30px;
    line-height: 30px;
    color: rgba(153,153,153,1);
    font-size: 10px;
    font-weight: 400;
    text-align: center;
  }
  .oneDy{
    $width:345px !global;
    $height:20px !global;
    width: 100%;
    background-color: rgba(244,244,244,1);
  }

  .oneDyTop{
    width: $width;
    height: $height;
    line-height: $height;
    font-size: 10px;
    color: rgba(153,153,153,1);
    margin: 0 auto;
  }
  .oneDyList{
    width: $width;
    margin: 10px auto 10px auto;
    height: 81px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .integralRankingSolid{
    border-bottom: 1px solid rgba(240,240,240,1);
  }
  .oneDyListImg{
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    margin-left: 20px;
  }
  .oneDyListL{
    padding-left: 15px;
    width: 200px;
  }
  .oneDyBottom{
    margin-bottom: 7px;
    font-size: 15px;
    font-weight: 400;
    color: rgba(51,51,51,1);
  }
  .oneDyTxt{
    font-size: 10px;
    font-weight: 400;
    color: rgba(3,6,5,1);
  }
  .oneDyTxtJe{
    font-size: 12px;
    font-weight: 600;
    color: rgba(229,11,11,1);
  }

  .oneDyListImg img{
    width: 50px;
    height: 50px;
  }
</style>
