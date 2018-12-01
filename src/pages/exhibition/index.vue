<template>
  <div class="wrap">
    <img src="../../assets/image/image-1.png" alt="" class="banner">
    <div class="aboutUs">
      <p class="bg">ABOUT US</p>
      <div class="title">
        <div class="fill"></div>
        <span>关于我们</span>
      </div>
      <dl class="mt10">
        <dt>S+艾司普勒斯科技美容集团</dt>
        <dd class="subName">以科技服务于大众理论的实践者</dd>
        <dd class="mt13">
          S+艾司普勒斯科技美容集团运营总部位于香港。经过10多年的不断探索与发展，己经成为享誉业界的集科技美容、医学美容、生物科技为一体的综合性美容集团。集团通过系列的战略规划，依托韩国的深厚技术基础，己经在香港、中国上海、杭州、成都等城市和东南亚地区完成了布局。<br/><br/>
          S+艾司普勒斯科技美容集团一贯坚持“用最先进的科学技术服务于大众"的经营理念，将站在更高、更广阔的舞台上，为广大爱美人士提供最专业、最优质的科技美容服务。
        </dd>
      </dl>
      <dl class="mt35">
        <dt>企业精神</dt>
        <dd class="mt18">善于学习、勇于创新、追求卓越、回报社会、体现企业赖以生存的原动力，“重视团队协作精神“</dd>
      </dl>
      <dl class="mt29">
        <dt>经营理念</dt>
        <dd class="mt13">以人为本、专业服务、品质保证、品味生活，美丽人生</dd>
      </dl>
      <dl class="mt20">
        <dt>服务宗旨</dt>
        <dd class="mt10">“六心级服务”——爱心、诚心、耐心、进取心、责任心、平常心。</dd>
      </dl>
      <dl class="mt35">
        <dt>企业愿景</dt>
        <dd class="mt10">
          2019年，打造成为全国第一家高端科技美容健康管理服务连锁机构，并在全国范围内建立600家高端会所，达到股东人数800人以上，帮助更多有理想的人实现梦想并实现年业绩销售目标10亿元以上，同年争取上市。
        </dd>
      </dl>
    </div>
    <div class="Environment">
      <p class="bg">Environment</p>
      <div class="title">
        <div class="fill"></div>
        <span>美丽环境</span>
      </div>
      <img src="../../assets/image/image-2.png" alt="" class="mt25">
      <img src="../../assets/image/image-3.png" alt="" class="mt19">
    </div>
    <div class="OURTREAM">
      <p class="bg">OUR TREAM</p>
      <div class="title">
        <div class="fill"></div>
        <span>专家团队</span>
      </div>
      <dt class="mt10">S+艾司普勒斯科技专家团队</dt>
      <dd class="mt8">以科技服务于大众理论的实践者</dd>
      <ul>
        <li>
          <img src="../../assets/image/posen.jpg" alt="">
          <dl>
          </dl>
          <dt>崔贤镒</dt>
          <dd>院长</dd>
        </li>
        <li>
          <img src="../../assets/image/posen.jpg" alt="">
          <dl>
          </dl>
          <dt>崔贤镒</dt>
          <dd>院长</dd>
        </li>
        <li>
          <img src="../../assets/image/posen.jpg" alt="">
          <dl>
          </dl>
          <dt>崔贤镒</dt>
          <dd>院长</dd>
        </li>
        <li>
          <img src="../../assets/image/posen.jpg" alt="">
          <dl>
          </dl>
          <dt>崔贤镒</dt>
          <dd>院长</dd>
        </li>
      </ul>
    </div>
    <div class="RULES">
      <p class="bg">RULES</p>
      <div class="title">
        <div class="fill"></div>
        <span>代言规则</span>
      </div>
      <dt>以科技服务于大众理论的实践者</dt>
      <dd>凡在本商城购买科美卡，即可成为S+艾司的三星美丽代言人，<br/>
        凡在本商城购买创美卡，即可成为S+艾司五星美丽代言人<br/>
        凡在本商城购买创始卡，即可成为S+艾司七星美丽代言人<br/>
        <br/>
        美丽积分的积累：<br/>
        享受一级美丽代言人消费额3%美丽积分<br/>
        享受二级美丽代言人消费额2%的美丽积分<br/>
        <br/>
        美丽积分可按照1:1兑换美丽基金
      </dd>
    </div>
    <div class="apply">
      <a href="tel:028-65278195" class="Btn"></a>
    </div>
    <div class="CONTACTUS">
      <p class="bg">CONTACT US</p>
      <div class="title">
        <div class="fill"></div>
        <span>联系我们</span>
      </div>
      <div class="list mt37">
        <img src="../../assets/image/exhibition1.png" alt="">
        <ul>
          <li>028-65278195</li>
          <li>13778485345</li>
          <li>18879180548</li>
        </ul>
      </div>
      <div class="list mt27">
        <img style="height: 30px" src="../../assets/image/exhibition2.png" alt="">
        <ul>
          <li>成都市高新区环球中心w3区 21楼22号</li>
        </ul>
      </div>
    </div>
  </div>


</template>
<script>

  export default {
    name: "exhibition",

  }
</script>

<style lang="scss" scoped>


  .wrap {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .banner {
    width: 375px;
    height: 208px;
  }

  .bg {
    opacity: 0.23;
  }

  .title {
    overflow: hidden;
    display: flex;
    align-items: center;
    .fill {
      width: 5px;
      height: 20px;
      background-color: #71B3FF;
      float: left;
    }
    > span {
      margin-left: 31px;
      float: left;
      font-size: 20px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
    }
  }

  .aboutUs {
    margin-top: 35px;
    padding: 0 15px;
    background-color: white;
    position: relative;
    .bg {
      position: absolute;
      right: 15px;
      top: -5px;
      font-size: 30px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(113, 179, 255, 1);

    }
    dl {
      dt {
        font-size: 24px;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
        line-height: 34px;
      }
      dd {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        color: rgba(102, 102, 102, 1);
        line-height: 17px;
      }
      .subName {
        margin-top: 8px;
        font-size: 15px;
        color: rgba(195, 195, 195, 1);
        line-height: 21px;
      }

    }

  }

  .Environment {
    margin-top: 25px;
    padding: 0 15px;
    position: relative;
    .bg {
      position: absolute;
      right: 15px;
      top: -13px;
      font-size: 30px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(113, 179, 255, 1);
      line-height: 54px;
    }
    > img {
      margin-left: -7px;
      width: 360px;
      height: 200px;
    }
  }

  .OURTREAM {
    margin-top: 43px;
    padding: 0 15px;
    position: relative;
    .bg {
      position: absolute;
      top: -5px;
      right: 15px;
      font-size: 30px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(113, 179, 255, 1);
    }
    dt {

      font-size: 24px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      line-height: 34px;
    }
    dd {
      font-size: 15px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(195, 195, 195, 1);
      line-height: 21px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
      li {
        margin-top: 15px;
        width: 164px;
        height: 239px;
        position: relative;
        > img {
          position: absolute;
          z-index: 1;
          width: 164px;
          height: 239px;
        }
        > dl {
          position: absolute;
          z-index: 2;
          bottom: 0;
          width: 100%;
          height: 100px;
          background-color: black;
          opacity: 0.4;
        }
        dt {
          position: absolute;
          top: 62%;
          left: 15px;
          z-index: 100;
          font-size: 18px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);

        }
        dd {
          position: absolute;
          top: 77%;
          left: 15px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          color: rgba(255, 255, 255, 1);
          position: absolute;
          z-index: 100;
        }
      }
    }

  }

  .RULES {
    margin-top: 48px;
    padding: 0 15px;
    position: relative;
    .bg {
      position: absolute;
      top: -5px;
      right: 15px;
      font-size: 30px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(113, 179, 255, 1);
    }
    > dt {
      margin-top: 25px;
      font-size: 15px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(195, 195, 195, 1);
      line-height: 21px;
    }
    > dd {
      margin-top: 11px;
      width: 346px;
      height: 249px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 1px 8px 0px rgba(216, 216, 216, 0.5);
      border-radius: 4px;
      padding: 20px 10px;
      font-size: 12px;
      line-height: 20px;
    }

  }

  .apply {
    margin-top: 28px;
    width: 100%;
    .Btn {
      width: 345px;
      height: 50px;
      display: block;
      margin: 0 auto;
      /*text-align: center;*/
      /*line-height: 40px;*/
      /*background-color: #71B3FF;*/
      /*color: white !important;*/
      background: url("../../assets/image/tel.png") no-repeat;
      background-position: center 3px;
      background-size: 345px 50px;
    }
  }

  .CONTACTUS {
    margin-top: 48px;
    padding: 0 15px;
    position: relative;
    .bg {
      position: absolute;
      top: -5px;
      right: 15px;
      font-size: 30px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(113, 179, 255, 1);
    }
    .list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      > img {
        margin-top: 3px;
        margin-left: 15px;
        width: 28px;
        height: 25px;
      }
      > ul {
        flex: 1;
        margin-left: 25px;
        > li {
          height: 28px;
          font-size: 20px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          color: rgba(162, 162, 162, 1);
          line-height: 28px;
        }
      }
    }
  }


</style>
