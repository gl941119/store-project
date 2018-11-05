<template>
  <div class="beautifulEndorsementBox">
    <navbar :name="'美丽代言说明'"></navbar>
    <van-swipe @change="onChange">
      <van-swipe-item><img src="../../../../assets/image/image-bg.png" class="beautifulEndorsementImg"></van-swipe-item>
      <van-swipe-item><img src="../../../../assets/image/image-bg.png" class="beautifulEndorsementImg"></van-swipe-item>
      <van-swipe-item><img src="../../../../assets/image/image-bg.png" class="beautifulEndorsementImg"></van-swipe-item>
      <van-swipe-item><img src="../../../../assets/image/image-bg.png" class="beautifulEndorsementImg"></van-swipe-item>
      <van-swipe-item><img src="../../../../assets/image/image-bg.png" class="beautifulEndorsementImg"></van-swipe-item>

      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/5

      </div>
    </van-swipe>
  </div>
</template>

<script>

  import { Swipe, SwipeItem } from 'vant';
    export default {
        name: "beautifulEndorsement",
      data(){
          return {
            current:0,
          }
      },
      methods:{
        onChange(index){
          this.current = index;
        }
      }
    }
</script>

<style lang="scss" scoped>
  .beautifulEndorsementImg{
    width: 100%;
  }
</style>
