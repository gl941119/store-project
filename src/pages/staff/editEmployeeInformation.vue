<template>
<div>
  <navbar :name="'员工端个人资料'"></navbar>
  <div class="editYgInfos">
    <textarea class="editYgInfosArea" v-if="status" v-model="text"></textarea>
    <div class="editYgInfosTab" v-else>
      <div :class="arrY[index]!=undefined&&item.id===arrY[index].id?'editYgInfosItemSelect':'editYgInfosItem'" v-for="(item,index) in arr" @click="editYgInfosItem($event,index)" ref="spanDiv" :data-id="item.id">{{ item.name }}</div>
    </div>
    <div class="eInformationOutPadding">
      <div class="eInformationOut" @click="editSever()">保存</div>
    </div>
  </div>
</div>
</template>

<script>

    export default {
        name: "editEmployeeInformation",
      data(){
        return {
          str:this.$route.params.type,
          text:'',
          signature:'',
          status:null,
          arr:[],
          arrY:[]
        }
      },
      mounted(){
        this.init();
      },
      methods:{
        editSever(){
          var t=this.str;
          if(t==='qm'){ //个性签名
            this.memberinfo({signature:this.text},'saveinfo');
          }else if(t==='js'){ //自我介绍
            this.memberinfo({type:1,intro:this.text},'savemember');
          }else if(t==='xm'){ //擅长项目
            this.memberinfo({type:2,goodproject:this.text},'savemember');
          }else if(t==='yq'){ //擅长仪器
            this.memberinfo({type:3,goodsinstrument:this.text},'savemember');
          }
        },
        memberinfo(par,str){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act='+str+'',
            type:'post',
            data:par,
          }).then((res) => {
            if(res.status){
              this.$router.push({name:'employeeInformation'})
            }
          });
        },
        init(){
          var t=this.str;
          if(t==='qm'){ //个性签名
            this.status=true;
            this.$request({
              url:'app/index.php?i=1&c=entry&eid=88&act=ucenter',
              type:'get',
            }).then((res)=>{
              if(res.status){
                var data=res.data.user;
                this.text=data.signature;
              }
            });
          }else if(t==='js'){ //自我介绍
            this.status=true;
            this.getMemberinfo(t,{type:1});
          }else if(t==='xm'){ //擅长项目
            this.status=false;
            this.getMemberinfo(t,{type:2});
          }else if(t==='yq'){ //擅长仪器
            this.status=false;
            this.getMemberinfo(t,{type:3});
          }


        },
        getMemberinfo(t,par){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=memberinfo',
            type:'get',
            data:par,
          }).then((res)=>{
            if(res.status){
              var data=res.data;
              if(t==='js'){ //自我介绍
                this.text=data.intro;
              }else if(t==='xm'){ //擅长项目
                this.arr=data.project;
                this.arrY=data.goodproject;
              }else if(t==='yq'){ //擅长仪器
                this.arr=data.goodsinstrument;
              }

            }
          });
        },
        editYgInfosItem(e,index){
          if(this.$refs.spanDiv[index].className==='editYgInfosItemSelect'){
            this.$refs.spanDiv[index].className='editYgInfosItem';
          }else{
            this.$refs.spanDiv[index].className='editYgInfosItemSelect';
          }

        }

      }
    }
</script>

<style lang="scss" scoped>
.editYgInfos{
  width: 345px;
  margin: 0 auto;
  padding: 10px 0;
}
.editYgInfosArea{
  width: 100%;
  height: 200px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 5px;
}
.eInformationOut{
  font-size:15px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(255,255,255,1);
  width: 304px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: url('../../assets/image/resBg.png') no-repeat;
  background-size: 304px 40px;
  margin: 0 auto;
}
.eInformationOutPadding{
  padding: 50px 0 20px 0;
}
  .editYgInfosTab{
    display: flex;
    align-items: center;
    flex-warp:warp;
  }
  .editYgInfosItem{
    margin: 0 5px 10px 5px;
    width:96px;
    height:20px;
    border-radius:4px;
    border:1px solid #3a3a3a;
    text-align: center;
    line-height: 18px;
    color: #333;
  }
.editYgInfosItemSelect{
  border:1px solid #FA65CF;
  color:#FA65CF;
  text-align: center;
  line-height: 18px;
  margin: 0 5px 10px 5px;
  width:96px;
  height:20px;
  border-radius:4px;
}
</style>
