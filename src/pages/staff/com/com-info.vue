<template>
    <div class="wrap">
      <div class="out">
        <img :src="conInfo.imgSr" alt="" class="out-header">
        <div class="outcontent">
          <div class="outcontentName">{{ conInfo.name }}</div>
          <div class="outcontentTask">{{ conInfo.task }}</div>
        </div>
        <p class="out-footer">{{ conInfo.gx }}<span @click="employeeInformation()"></span> </p>
      </div>
      <img :src="conInfo.bg" alt="" class="inner">
    </div>
</template>

<script>
    export default {
        name: "com-info",
      props:['conInfo'],
      data(){
          return{

          }
      },
      mounted(){},
      methods:{
        locak(){
          let self=this;
          this.$wx('getLocation',{
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
              var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
              var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
              var speed = res.speed; // 速度，以米/每秒计
              var accuracy = res.accuracy; // 位置精度
              self.$wx('openLocation',{
                latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
                longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
                name: '酒店', // 位置名
                address: '附近酒店', // 地址详情说明
                scale: 10, // 地图缩放级别,整形值,范围从1~28。默认为最大
                infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
              });
            }
          });


        },
        employeeInformation(){
          this.$router.push({name:'employeeInformation'});
        }
      }
    }
</script>

<style lang="scss" scoped>
  .wrap{
    width:375px;
    height:200px;
    /*background: url("../../../assets/image/花2.png") no-repeat ;*/
    /*background-size: 375px 200px;*/
    position: relative;
    .out{
      position: absolute;
      z-index: 10;
      float: left;
      width:375px;
      height:200px;
      &-header{
        display: block;
        margin: 21px auto 0;
        width:65px;
        height:65px;
        border-radius: 50%;
      }
      &-content{
        margin-top: 9px;
        width:100%;
        height:25px;
        >p{
          text-align: center;
          width:54px;
          height:25px;
          margin: 0 auto;
          white-space: nowrap;
          font-size:18px;
          font-family:PingFangSC-Regular;
          color:rgba(74,74,74,1);
          >span{
            margin-left: 4px;
            font-size:10px;
            font-family:PingFangSC-Regular;
            color:rgba(250,101,207,1);
            line-height:14px;
          }

        }
      }
      &-footer{
        margin: 10px 0 0 0;
        text-align: center;
        font-size:10px;
        font-family:PingFangSC-Regular;
        color:rgba(153,153,153,1);
        line-height:14px;
        >img{
          width:10px;
          height:10px;
          margin-left: 6px;
        }

      }

    }
    .inner{
      position: absolute;
      z-index: -2;
      width:375px;
      height:200px;
      filter:blur(2px)

    }
  }
  .out-footer span{
display: inline-block;
    width: 15px;
    height: 15px;
    color: #e9584f;
    margin-left: 10px;
    background: url("../../../assets/image/staff.png") no-repeat;
    background-size: contain;
  }
  .outcontent{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
  }
  .outcontentName{
    font-size:18px;
    font-family:PingFangSC-Regular;
    color:rgba(74,74,74,1);
  }
  .outcontentTask{
    font-size:10px;
    font-family:PingFangSC-Regular;
    color:rgba(250,101,207,1);
    padding-left: 5px;
  }
</style>
