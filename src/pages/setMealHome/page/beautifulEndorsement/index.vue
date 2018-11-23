<template>
<div class="beautifulEndorsement">
<div class="beautifulEndorsement_p">
  <div class="beautifulEndorsement_b">
    <div class="beautifulEndorsement_t">{{title}}</div>
    <div class="beautifulEndorsement_c" v-html="cont"></div>
    <div class="beautifulEndorsement_pBtn">
      <div class="beautifulEndorsement_pBtnBox" @click="beautifulEndorsementSub">发展美丽代言人</div>
    </div>
  </div>
</div>
</div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            title:'',
            cont:''
          }
      },
      mounted(){
this.initEv();
      },
      methods:{
        beautifulEndorsementSub(){
          this.$router.push({name:'endorseOneself'});
        },
        initEv(){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=ucenter',
            type:'post'
          }).then((res)=>{
            if(res.status){
              let d=res.data;
              let scgc=d.article['a_2'];
              this.title=scgc.title;
              this.cont=scgc.content;
            }
          });
        }
      }
    }
</script>

<style lang="scss" scoped>
.beautifulEndorsement{
  background: url('../../../../assets/image/mlsmbg.png') no-repeat;
  background-size: 100% 100%;
  padding-bottom: 0px;
}
  .beautifulEndorsement_p{
    padding: 39px 15px 0 15px;
  }
  .beautifulEndorsement_b{
    width:345px;
    margin: 0 auto;
    background:rgba(255,255,255,1);
    border-radius:8px;
  }
  .beautifulEndorsement_t{
    font-size:18px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding: 22px 0 30px 0;
    text-align: center;
  }
  .beautifulEndorsement_c{
    padding: 0 6px 0 15px;
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:21px;
  }
  .beautifulEndorsement_pTitle{
padding-top: 20px;
  }
  .beautifulEndorsement_pBtn{
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 31px 0;
  }
  .beautifulEndorsement_pBtnBox{
    font-size:18px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    background-color: #71B3FF;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height: 40px;
    width:200px;
    height: 40px;
  }
</style>
