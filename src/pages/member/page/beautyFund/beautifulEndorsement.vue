<template>
  <div class="beautifulEndorsementBox">
    <div class="beautifulBody">
      <img src="../../../../assets/image/image-bg.png" class="beautifulEndorsementImg">
      <div class="beautifulEndorsementBoxB">
        <div class="beautifulFlex">
          <div class="beautifulHeaderBox"><img :src="header" class="beautifulHeader"></div>
          <div class="beautifulHeaderBox1"><img src="../../../../assets/image/codes.png" class="beautifulHeader"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import { Swipe, SwipeItem } from 'vant';
    export default {
        name: "beautifulEndorsement",
      data(){
          return {
            current:0,
            header:'',
          }
      },
      mounted(){
          this.inits();
      },
      methods:{
        inits(){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=ucenter',
            type:'post'
          }).then((res)=>{
            if(res.status){
              this.header=res.data.user.avatar;
            }
          });
        },
        onChange(index){
          this.current = index;
        }
      }
    }
</script>

<style lang="scss" scoped>
  .beautifulBody{
    position: relative;
  }
  .beautifulEndorsementBoxB{
    position: absolute;
    top:0px;
    left:0px;
    height: 100%;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .beautifulEndorsementImg{
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .beautifulFlex div{
    text-align: center;
  }
  .beautifulHeaderBox{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .beautifulHeaderBox img{
    width: 61px;
    height: 61px;
    border-radius: 4px;
  }
  .beautifulHeaderBox1{
  padding-top: 40px;
  }
  .beautifulHeaderBox1 img{
    width: 160px;
    height: 160px;
  }
</style>
