<template>
    <div class="wrap">
      <van-icon name="search" class="icon"/>
      <input type="text" v-model="val" placeholder="请输入关键字" class="input">
      <!--<van-icon name="close" class="close" v-show="showClose"/>-->
    </div>
</template>

<script>
    export default {
        name: "search",
      computed:{
        val:{
          set:function (val) {
            this.showClose = !!val
            console.log(!!val)
            this.$emit('update:value',val)
          },
          get:function () {
            return undefined
          }

        }
      },

      data(){
          return{
            showClose:false
          }
      },
    }
</script>

<style lang="scss" scoped>
.wrap{
  background:rgba(244,244,244,1);
  border-radius:4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  .icon{
    font-size: 15px;
   margin-left: 10px;
  }
  .input{
    margin-left: 8px;
    height: 100%;
 flex: 1;
    background:rgba(244,244,244,1);
    font-size:12px;
    font-family:PingFangSC-Regular;
    color:rgba(153,153,153,1);
    line-height:17px;

  }
  .close{

    font-size: 12px;
    margin-right: 7px;
  }

}

</style>
