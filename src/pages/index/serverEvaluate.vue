<template>
  <div class="serverEvaluateCom">
    <div class="null"></div>
    <div class="serverEvaluateCom_p">
      <div class="serverEvaluateCom_header">
        <div class="serverEvaluateCom_headerFl">
          <div class="serverEvaluateCom_headerSolid"></div>
          <div class="serverEvaluateCom_headerTxt">请对美师评价</div>
        </div>
      </div>

      <div class="serverEvaluateCom_box">
        <div class="serverEvaluateCom_cTop">
          <div class="serverEvaluateCom_cSolid">
            <div class="serverEvaluateCom_cTopL">
              <div class="serverEvaluateCom_cTopLImg"><img :src="member.simg" v-if="member.simg"></div>
              <div class="serverEvaluateCom_cTopLInfo">
                <div class="serverEvaluateCom_cTopName">{{member.name}}</div>
                <div class="serverEvaluateCom_cTopStatus">{{member.task}}</div>
              </div>
            </div>
            <div class="serverEvaluateCom_cTopOne">NO.{{member.displayorder}}号</div>
          </div>
        </div>
        <!--评价-->
        <div class="serverEvaluateCom_list" v-for="item in  evals" :key="item.id">
          <div class="serverEvaluateCom_XSolid">
            <div class="serverEvaluateCom_taiDu">{{item.name}}</div>
            <van-rate
              v-model="item.score"
              :count="5"
              color="#E93A3D"
              void-color="#C1C0CD"
              class="serverEvaluateCom_X"
            />
          </div>
        </div>

        <!--标签-->
        <div class="serverEvaluateCom_tab">
          <div class="serverEvaluateCom_tabBtn" :class="{hover:item.is_hover}"
               v-for="item,index in member.beauty" :key="index" @click="changeIs_hover(index)">
            {{item.name}}
          </div>
        </div>
        <!--评价-->
        <div class="serverEvaluateCom_textareaBox">
          <textarea class="serverEvaluateCom_textarea" placeholder="服务很不错，第一次体验到这样的服务。"
                    v-model="leaveMessage"></textarea>
        </div>


      </div>
    </div>
    <!--项目评价-->
    <div class="serverEvaluateCom_p1">
      <div class="serverEvaluateCom_header">
        <div class="serverEvaluateCom_headerFl">
          <div class="serverEvaluateCom_headerSolid"></div>
          <div class="serverEvaluateCom_headerTxt">请对项目评价</div>
        </div>
      </div>

      <div class="serverEvaluateCom_box">
        <div class="serverEvaluateCom_cTop">

          <div class="serverEvaluateCom_object">
            <div class="serverEvaluateCom_objectImg"><img :src="simg" v-if="simg"></div>
            <div class="serverEvaluateCom_objectT">项目效果</div>
            <van-rate
              v-model="serviceEvaluate.rate"
              :count="5"
              color="#E93A3D"
              void-color="#C1C0CD"
              class="serverEvaluateCom_X"
            />
          </div>
          <div class="serverEvaluateCom_textareaBox1">
            <textarea class="serverEvaluateCom_textarea" placeholder="服务的效果如何呢？发表一下自己的感受吧"
                      v-model="serviceEvaluate.leaveMessage"></textarea>
          </div>
          <div class="serverEvaluateCom_upImg">
            <div class="serverEvaluateCom_upImgs" v-for="item,index in serviceEvaluate.img">
              <img :src="item" class="serverEvaluateCom_upImgs" v-on:click.stop="show_imgs(item,index)">
              <van-icon name="clear" class="upImgClose" v-on:click.stop="upImgClose(item,index)"/>
            </div>

            <div class="serverEvaluateCom_upImgBtn" @click="upLoadImg">
              <div>
                <div><img src="../../assets/image/appraise.png"/></div>
                <div class="serverEvaluateCom_upAddImg">添加图片</div>
              </div>
            </div>
          </div>
          <div class="serverEvaluateCom_passed">
            <!--<div>-->
            <!--<van-icon name="passed" />-->
            <!--</div>-->
            <!--<div class="serverEvaluateCom_passedName">匿名</div>-->

            <van-checkbox v-model="serviceEvaluate.anonymity" class="serverEvaluateCom_passedName"
                          checked-color="#71B3FF">匿名
            </van-checkbox>
          </div>
        </div>
      </div>
    </div>

    <div class="serverEvaluateCom_submit" @click="submit">提交</div>

    <van-popup v-model="showJinDu" :click-overlay="circleEvent" class="circle">
      <van-circle
        v-model="currentRate"
        :rate="currentRate"
        :speed="100"
        :text="textJinDu"
        class="circleTxt"
      />
    </van-popup>
  </div>
</template>

<script>
  import wxHandle from '../../utils/wx'
  import axios from 'axios'
  import {ImagePreview} from 'vant';

  export default {
    name: "com-serverEvaluate",

    beforeRouteLeave(to, from, next) {
      window.long = setInterval(() => {//长轮询
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=87&act=discuss',
          type: 'post',
          isToast: false
        }).then(res => {
          if (res.data.is_discuss == '0') {
            console.log(123)
            window.clearInterval(window.long);
            this.$router.push({name: "serverEvaluate", params: {orderid: res.data.orderid}})
          }
        });
      }, 10000)
      next()
    },
    data() {
      return {
        member: {},//美师数据
        simg: undefined,//项目头像
        evals: [],//评价
        leaveMessage: undefined,//留言
        serviceEvaluate: {//服务评价
          rate: 4,
          leaveMessage: undefined,
          img: [],
          anonymity: false,//匿名
        },
        value: 0,
        currentRate: 1,
        showJinDu: false,
        textJinDu: '',
        serverArr: [],
        serverId: [],
        submit_imgs: [],//上传所用imgs
      }
    },
    mounted() {
      this.request()
    },
    methods: {

      changeIs_hover(index) {
        this.member.beauty[parseInt(index)].is_hover = !this.member.beauty[parseInt(index)].is_hover
      },
      request() {
        this.$request({
          url: 'app/index.php?i=1&c=entry&eid=87&act=discuss',
          type: 'post'
        }).then(res => {
          if (res.code === 100) {
            this.member = res.data.member //美师数据
            this.member.beauty.forEach(item => {
              this.$set(item, 'is_hover', false)
            })
            this.evals = res.data.evals //评价
            this.evals.forEach(item => {
              this.$set(item, "score", 4)
            })
            this.simg = res.data.service.simg
          }
        })
      },
      submit() {


        console.log(this.serverId)
        this.$dialog.confirm({
          title: '是否提交评论',
        }).then(() => {

          this.$request({
            url: 'app/index.php?i=1&c=entry&eid=87&act=savemsdiscuss',
            type: 'post',
            data: {
              orderid: this.$route.params.orderid,
              content: this.serviceEvaluate.leaveMessage, //项目评价内容
              member_content: this.leaveMessage,  //美师评价内容
              imgs: JSON.stringify(this.submit_imgs),
              score: this.serviceEvaluate.rate,//项目评分
              tip: this.serviceEvaluate.anonymity === true ? '1' : '0',//是否匿名
              evals: JSON.stringify(this.evals),//美师热评
              memberevals: JSON.stringify(this.member.beauty),//美师印象
            }
          }).then(res => {
            if (res.code === 100) {
              this.$dialog.alert({
                title: '感谢您提出的宝贵意见'
              }).then(() => {
                this.$router.push({name: 'serviceInfo', params: {orderid: res.data.orderid}})
              });

            }

          })


        }).catch(() => {
          // on cancel
        });


      },
      serverTab(i, text) {//服务选项

      },
      show_imgs(val, k) {//显示图片

        ImagePreview({
          images: this.serviceEvaluate.img,
          startPosition: k,

        });

      },
      upImgClose(val, k) {//删除图片
        this.serviceEvaluate.img.splice(k, 1)
        this.submit_imgs.splice(k, 1)
      },
      circleEvent() {
        this.showJinDu = false;
      },
      getLocalImgData(id, thisa) {
        let uk = thisa.$store.state.uk || sessionStorage.getItem('uk');
        let urlR = thisa.$upUrl + 'app/index.php?' + thisa.$i + '&c=entry&eid=' + thisa.$eid.eid + '&dom=' + thisa.$eid.dom + '&act=fileupload&uk=' + uk;
        // alert(urlR)
        wxHandle('getLocalImgData', {
          localId: id, // 图片的localID
          success: function (getLocal) {
            let str = getLocal.localData;
            thisa.showJinDu = true;
            var params = new URLSearchParams();
            params.append('filestr', str);
            axios({
              url: urlR,
              method: 'post',
              data: params,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              onUploadProgress: function (progressEvent) { //原生获取上传进度的事件
                if (progressEvent.lengthComputable) {
                  //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                  //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
                  thisa.currentRate = (progressEvent.loaded / progressEvent.total * 100 | 0);
                  thisa.textJinDu = thisa.currentRate + '%';
                }
              },
            }).then(res => {
              if (res.data.code === 100) {
                // alert(thisa.serviceEvaluate.avatar)
                // alert(res.data.data.avatar)
                thisa.showJinDu = false;
                thisa.serviceEvaluate.img.push(res.data.data.avatar)
                thisa.submit_imgs.push(res.data.data.imgs)

                // this.arrUpImg=res.data.data.imgs
                // res.data.data.imgs
              } else {
                thisa.showJinDu = false;
                thisa.$toast(res.data.message);
              }
            })
          }
        });
      },
      upLoadImg() {//图片上传
        let self = this;
        wxHandle('chooseImage', {//打开相册和相机
          count: 1, // 默认9
          scanType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            self.getLocalImgData(res.localIds[0], self);
          }
        });
      }


    }
  }
</script>

<style lang="scss" scoped>
  .serverEvaluateCom {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .serverEvaluateCom_p {
    padding: 15px 15px 0 15px;
  }

  .serverEvaluateCom_p1 {
    padding: 22px 15px 17px 15px;
  }

  .null {
    width: 100%;
    height: 10px;
    background-color: rgba(244, 244, 244, 1);
  }

  .serverEvaluateCom_box {
    width: 345px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 8px 0px rgba(216, 216, 216, 0.5);
    border-radius: 4px;
  }

  .serverEvaluateCom_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 14px;
  }

  .serverEvaluateCom_headerFl {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .serverEvaluateCom_headerSolid {
    width: 4px;
    background-color: #71B3FF;
    height: 17px;
  }

  .serverEvaluateCom_headerTxt {
    padding-left: 13px;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .serverEvaluateCom_cTop {
    padding: 15px 15px 0 15px;
  }

  .serverEvaluateCom_cSolid {
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(216, 216, 216, 1);
  }

  .serverEvaluateCom_cTopL {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .serverEvaluateCom_cTopLImg, .serverEvaluateCom_cTopLImg img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .serverEvaluateCom_cTopLInfo {
    padding-left: 18px;
  }

  .serverEvaluateCom_cTopName {
    font-size: 15px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .serverEvaluateCom_cTopStatus {
    font-size: 10px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    padding-top: 6px;
  }

  .serverEvaluateCom_cTopOne {
    font-size: 10px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(113, 179, 255, 1);
    padding-right: 6px;
    padding-top: 15px;
  }

  .serverEvaluateCom_list {
    padding: 0 15px;
  }

  .serverEvaluateCom_XSolid {
    padding: 15px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(216, 216, 216, 1);
  }

  .serverEvaluateCom_taiDu {
    font-size: 15px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    padding-right: 27px;
  }

  .serverEvaluateCom_X {
    display: flex;
    align-items: center;
    font-size: 12px !important;
  }

  .serverEvaluateCom_tab {
    padding: 13px 15px 0 15px;
    display: flex;
    align-items: center;
    flex-flow: wrap;
  }

  .serverEvaluateCom_tabBtn, .serverEvaluateCom_tabBtnSelect {
    width: 90px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    border-radius: 17px;
    margin: 0 15px 9px 0px;
  }

  .serverEvaluateCom_tabBtn {
    color: rgba(51, 51, 51, 1);
    border: 1px solid #979797;
  }

  .hover {
    background: rgba(113, 179, 255, 1);
    color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(113, 179, 255, 1);
  }

  .serverEvaluateCom_tabBtnSelect {
    background: rgba(113, 179, 255, 1);
    color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(113, 179, 255, 1);
  }

  .serverEvaluateCom_textareaBox,
  .serverEvaluateCom_textareaBox1 {
    width: 315px;
    margin: 0 auto;
  }

  .serverEvaluateCom_textareaBox1 {
    padding-top: 15px;
  }

  .serverEvaluateCom_textarea {
    /*background-color: white;*/
    width: 315px;
    height: 91px;
    padding: 9px 0 0 10px;
    background: rgba(247, 247, 247, 1);
    font-size: 15px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .serverEvaluateCom_object {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(216, 216, 216, 1);
    padding-bottom: 5px;
  }

  .serverEvaluateCom_objectImg,
  .serverEvaluateCom_objectImg img {
    width: 40px;
    height: 40px;
  }

  .serverEvaluateCom_objectT {
    font-size: 15px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    padding: 0 10px;
  }

  .serverEvaluateCom_textareaBox1 textarea {
    background-color: #fff;
  }

  .serverEvaluateCom_upImg {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: wrap;

  }

  .serverEvaluateCom_upImgs {
    /*border: 1px solid red;*/
    width: 78px;
    height: 78px;
    position: relative;
    margin-right: 20px;
    margin-bottom: 10px;
    > img {
      width: 78px;
      height: 78px;
    }

  }

  .serverEvaluateCom_upImgBtn {
    width: 78px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px #979797 dashed;
    text-align: center;
    margin-right: 20px;
    margin-bottom: 8px;
  }

  .serverEvaluateCom_upAddImg {
    font-size: 13px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(193, 192, 205, 1);
  }

  .select_passed, .selectPassed {
    font-size: 20px;
  }

  .selectPassed {
    color: #B3B4BB;
  }

  .select_passed {
    color: #71B3FF;
  }

  .serverEvaluateCom_passed {
    display: flex;
    align-items: center;
    margin-top: 15px;
    border-top: 1px solid rgba(216, 216, 216, 1);
    padding: 16px 0 23px 0;
  }

  .serverEvaluateCom_passedName {
    font-size: 17px;
    color: rgba(51, 51, 51, 1);
    display: flex;
    align-items: center;
    padding-bottom: 1px;
  }

  .serverEvaluateCom_submit {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 49px;
    line-height: 49px;
    background: rgba(113, 179, 255, 1);
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }

  .circle {
    background-color: transparent;
  }

  .circleTxt {
    background-color: #fff;
  }

  .upImgClose {
    position: absolute;
    top: -12px;
    right: -12px;
    font-size: 20px;
  }
</style>
