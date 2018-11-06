<template>
    <div class="staff">
      <navbar :name="'美师端'"></navbar>
      <!--员工信息-->
      <com-info :conInfo="infoTxt" @init="init"></com-info>
      <!--我的预约-->
      <com-mysubscribe v-if="status" :mySub="infoTxt" @init="init" style="margin-top: -39px"></com-mysubscribe>
      <!--相册-->
      <com-album @init="init" :album="infoTxt"></com-album>
    </div>
</template>

<script>
  import ComInfo from './com/com-info'
  import ComMysubscribe from './com/com-MySubscribe'
  import ComAlbum from './com/com-album'
    export default {
        name: "staff",
      data(){
          return {
            infoTxt: {
              imgSr:'',
              name:'',
              gx:'',
              task:'',
              bg:'',
              orderId:'',
              time:'',
              sName:'',
              phone:'',
              xm:'',
              listImg:[],
              listVideo:[],
            },
            status:null
          }
      },

      components:{
        ComInfo,ComMysubscribe,ComAlbum
      },
      mounted(){
this.init();
      },
      methods:{
        init(){
          this.$request({
            url:'app/index.php?i=1&c=entry&eid=88&act=member',
            type:'get'
          }).then((res) => {
            if(res.status){
              var data=res.data;
              var d=data.appoint!=undefined?data.appoint:'';
              this.status=data.appoint!=undefined?true:false;
              this.infoTxt=
                {
                  imgSr:data.avatar,
                  name:data.name,
                  gx:data.signature,
                  task:data.task,
                  bg:data.background_img,
                  orderId:d.orderid,
                  time:d.plan_date,
                  sName:d.service_name,
                  phone:d.mobile,
                  xm:d.name,
                  listImg:data.style.image,
                  listVideo:data.style.video

                }
              ;

            }
          });
        },
      }
    }
</script>

<style class="scss" scoped>

</style>
