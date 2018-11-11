<template>
  <div class="beautyBody">

    <div class="oneDy">
      <div class="oneDyTop">总计： {{ len }}人</div>
    </div>

    <div class="oneDyList" v-for="item in arr">
      <div class="oneDyListImg"><img :src="item.avatar"></img></div>
      <div class="oneDyListL">
        <p class="oneDyBottom">{{ item.nick }}</p>
        <p class="oneDyTxt">我的上级美丽代言人</p>
      </div>
    </div>


  </div>
</template>

<script>
    export default {
        name: "oneEndorsement",
      data() {
          return {
            arr:[],
            len:''
          }
      },
      mounted(){
          this.request()
      },
      methods: {
request() {
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=beautylist',
            type:'get',
            data:{
              type:2
            }
          }).then((res) => {
            var data=res.data.share;
            this.arr=data;
            this.len=data.length;
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
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
    box-shadow:0px 1px 8px 0px rgba(216,216,216,0.5);
    border-radius:4px;
    height: 81px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
  }
  .oneDyBottom{
    margin-bottom: 7px;
    font-size: 15px;
    color: rgba(51,51,51,1);;
  }
  .oneDyTxt{
    font-size: 10px;
    color: rgba(153,153,153,1);;
  }
  .oneDyListImg img{
    width: 50px;
    height: 50px;
  }
</style>
