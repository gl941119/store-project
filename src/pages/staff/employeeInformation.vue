<template>
  <div class="eInformation">
    <navbar :name="'员工端个人资料'"></navbar>
    <div class="eInformationPadding">
      <div class="eInformationBg">
        <div class="eInformationFlex">
          <div>
            <div class="eInformationTxt">头像</div>
            <!--<div class="eInformationTxt1">ID：1276682168</div>-->
          </div>
          <div class="eInformationHImg">
            <div class="eInformationHImgB"><img :src="avatar"></div>
            <div class="exchangeIcon"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="eInformationPadding">
      <div class="eInformationBg">
        <div class="eInformationFlex eInformationHImgCent" @click="editInfo('name')">
          <div>
            <div class="eInformationTxt2">员工姓名</div>
          </div>
          <div class="eInformationHImg">
            <div class="eInformationTxt3" v-if="status">{{ nick }}</div>
            <div class="eInformationTxt3" v-else><input type="text" @blur="blurEvt()" v-model="nick" ref="name" autofocus="autofocus"></div>
            <div class="exchangeIcon"></div>
          </div>
        </div>

        <div class="eInformationFlex eInformationFlexP" @click="editInfo('qm')">
          <div>
            <div class="eInformationTxt2">个性签名</div>
          </div>
          <div class="eInformationHImg">
            <div class="eInformationTxt3">{{ signature }}</div>
            <div class="exchangeIcon"></div>
          </div>
        </div>
      </div>

      <div class="eInformationPadding"></div>
      <div class="eInformationBg">
        <div class="eInformationFlex eInformationFlexP eInformationHImgCent" @click="editInfo('js')">
          <div>
            <div class="eInformationTxt2">自我介绍</div>
          </div>
          <div class="eInformationHImg">
            <div class="exchangeIcon"></div>
          </div>
        </div>

        <div class="eInformationFlex eInformationFlexP eInformationHImgCent" @click="editInfo('xm')">
          <div>
            <div class="eInformationTxt2">擅长项目</div>
          </div>
          <div class="eInformationHImg">
            <div class="exchangeIcon"></div>
          </div>
        </div>

        <div class="eInformationFlex eInformationFlexP" @click="editInfo('yq')">
          <div>
            <div class="eInformationTxt2">擅长仪器</div>
          </div>
          <div class="eInformationHImg">
            <div class="exchangeIcon"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="eInformationOutPadding">
      <div class="eInformationOut" @click="editOut()">退出账户</div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "employeeInformation",
      data(){
        return {
          status:true,
          nameTxt:'',
          nick:'',//员工姓名
          signature:'',//签名
          avatar:'',//头像
        }
      },
      mounted(){
        this.init();
      },
      methods:{
        editInfo(str){
          if(str==='name'){
            this.status=false;
          }else{
              this.$router.push({name:'editEmployeeInformation',params:{type:str}});
          }

        },
        editOut(){

        },
        init(){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=ucenter',
            type:'get',
          }).then((res)=>{
            if(res.status){
              var data=res.data.user;
              this.nick=data.nick;
              this.signature=data.signature;
              this.avatar=data.avatar;
            }
          });

        },
        blurEvt(){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=saveinfo',
            type:'post',
            data:{
              nick:this.nick
            }
          }).then((res)=>{
            if(res.status){
              this.status=true;
            }
          });
        }


      }
    }
</script>

<style lang="scss" scoped>
.eInformation{
  background:rgba(244,244,244,1);
}
  .eInformationPadding{
    padding-top: 10px;
  }
  .eInformationBg{
    background-color: #fff;
    padding: 10px 0;
  }
  .eInformationFlex{
    width: 345px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .eInformationTxt{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
    padding-bottom: 10px;
  }
  .eInformationTxt1{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .eInformationHImg{
    display: flex;
    align-items: center;
    justify-content:flex-end
  }
.eInformationHImgB{
  margin-right: 10px;
}
  .eInformationHImgB,.eInformationHImgB img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
.exchangeIcon{
  width: 6px;
  height: 11px;
  background: url('../../assets/image/icon-enter.png') no-repeat;
  background-size: 6px 11px;
}
  .eInformationHImgCent{
    border-bottom: 1px solid rgba(216,216,216,1);
    padding: 10px 0;
  }
  .eInformationTxt2{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .eInformationTxt3{
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    padding-right: 10px;
  }
  .eInformationFlexP{
    padding:10px 0;
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
</style>
