<template>
<div class = "layer-container">
    <div class="layer-wrap wrap-scale">
      <!-- 左侧区域模块 -->
      <div  class="y-module-left">
        <left-part></left-part>
      </div>
      <!-- 中间区域模块 -->
      <div class="y-module-center">
        <center-part></center-part>
      </div>
      <!-- 右侧区域模块 -->
      <div class="y-module-right">
        <right-part></right-part>
      </div>
      <!-- 顶部区域模块 -->
      <div class="module-header">业主服务平台 </div>
	</div>
  
  <!-- 边框样式 -->
    <div class="layer-frame">
    </div>
      <div class="layer-back">
    </div>
  </div>
</template>
<script>
import LeftPart from "./leftpart";
import CenterPart from "./centerpart";
import RightPart from "./rightpart";

export default {
  name: "yzfw",
  components: {
    LeftPart,
    RightPart,
    CenterPart
  },
  mounted() {
    //this.getVideoAddress();
  },
  methods: {
    // 获取视频地址
    /* getVideoAddress() {
      // 创建实例
      var instance = this.$axios.create({
        baseURL: this.$baseUrl,
        method: "get",
      });

      instance
        .get("/api/deviceinfo/hlsUrl", {
          params: {
            projectId: "05da4de2-121a-41f5-b728-30a96f0900fe"
          }
        })
        .then(function(response) {
          console.log("成功");
        })
        .catch(function(err) {
          console.log(err);
        });
    } */
  }
};
</script>

<style>
.y-module-left {
  width: 26%;
  float: left;
  padding-top: 20px;
}

.y-module-center {
  width: 46%;
  float: left;
}

.y-module-right {
  width: 28%;
  float: left;
  padding-top: 10px;
}

/* 页面样式 */

.M-title {
  width: 1247px;
  height: 68px;
  line-height: 68px;
  text-align: center;
  background: url(../../assets/yzfw//c-titlex2.png) no-repeat center;
  background-size: 100%;
  position: absolute;
  margin-left: 0;
  left: 509px;
  font-size: 42px;
  color: #624216;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.M-left {
  width: 580px;
  padding-left: 16px;
}

.M-baos {
  width: 553px;
  /* 494px; */
  margin-top: 75px;
}

.M-Bar {
  background: url(../../assets/yzfw//bar-long.png) bottom left no-repeat;
  background-size: 100%;
  /* width: 330px; */
  width: 550px;
  height: 50px;
  font-family: PingFangSC-Semibold;
  font-size: 28px;
  color: #ddc09b;
  letter-spacing: 0;
  text-align: left;
}

.M-BarTxt {
  margin-left: 26px;
}

.M-Bar2 {
  background: url(../../assets/yzfw//bar-long.png) bottom left no-repeat;
  background-size: 100%;
  /* width: 330px; */
  width: 590px;
  height: 50px;
  font-family: PingFangSC-Semibold;
  font-size: 28px;
  color: #ddc09b;
  letter-spacing: 0;
  text-align: left;
}

.M-Bar3 {
  background: url(../../assets/yzfw//bar-shortx2.png) no-repeat left bottom;
  background-size: 100%;
  width: 287px;
  height: 50px;
  font-family: PingFangSC-Semibold;
  font-size: 28px;
  color: #ddc09b;
  letter-spacing: 0;
  text-align: left;
}

.M-satisfied {
  width: 553px;
  height: 387px;
  background: url(../../assets/yzfw//back-smallx2.png) no-repeat center;
  background-size: 100% 90%;
  position: relative;
  margin-top: 25px;
}

.satisfied-card {
  width: 221px;
  height: 77px;
  background-size: 100%;
  position: absolute;
}

.satisfied-card1 {
  background: url(../../assets/yzfw//square1.png) no-repeat center;
  top: 0px;
  right: 48px;
}

.satisfied-card2 {
  background: url(../../assets/yzfw//square2.png) no-repeat center;
  top: 44px;
  left: 15px;
}

.satisfied-card3 {
  background: url(../../assets/yzfw//square1.png) no-repeat center;
  top: 155px;
  left: 189px;
}

.satisfied-card4 {
  background: url(../../assets/yzfw//square1.png) no-repeat center;
  bottom: 35px;
  right: 21px;
}

.satisfied-card5 {
  background: url(../../assets/yzfw//square2.png) no-repeat center;
  bottom: 10px;
  left: 15px;
}

.card-left {
  position: relative;
  top: 14px;
  left: 13px;
}

.card-img {
  position: absolute;
}

.card-img {
  animation: spin2 7s linear infinite;
}

.card-number {
  width: 44px;
  height: 44px;
  background: url(../../assets/yzfw//circle1.png) no-repeat center;
  position: absolute;
  top: 4px;
  left: 4px;
  text-align: center;
  line-height: 44px;
  font-size: 20px;
  font-family: "FZLTTHJW--GB1-0" FZLTTHJW--GB1-0;
  color: #fff2e2;
}

.card-right {
  font-family: PingFang-SC-Regular;
  font-size: 23px;
  color: #fff2e2;
  width: 145px;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 活动排名样式 */

.M-ranking {
  margin-top: 100px;
}

.M-table {
  margin-top: 42px;
  border: solid 1px #603e20;
  border-bottom: none;
  border-right: none;
}

.M-table td {
  text-align: center;
  color: #fff;
  font-size: 20px;
  border-bottom: solid 1px #603e20;
  border-right: solid 1px #603e20;
  height: 48px;
  line-height: 48px;
}

.cimg {
  animation: move_wave1 4s linear infinite;
}

/* 地区区域样式 */

/*总体分布*/

.M-center {
  float: left;
  width: 1026px;
  margin-top: 70px;
}

.M-backdrop {
  width: 1022px;
  height: 900px;
  position: absolute;
  margin-top: 52px;
  background-color: #22211f;
  margin-left: 4px;
}

.M-container {
  background: url(../../assets/yzfw//z-map-boxx2.png) no-repeat left center;
  background-size: 100%;
  width: 1026px;
  height: 939px;
  padding-top: 70px;
  position: relative;
}

/* 地图区域样式 */

.Z-map {
  width: 951px;
  height: 768px;
  background: url(../../assets/yzfw//z-mapx2.png) no-repeat center;
  background-size: 100%;
  margin: 0 auto;
  position: relative;
}

.Z-map li {
  position: absolute;
  text-align: center;
}

.Z-map .address {
  width: 20px;
  height: 26px;
  display: inline-block;
  background: url(../../assets/yzfw/address-icon.png) no-repeat 0;
  background-size: 20px 26px;
}

.Z-map .user {
  width: 17px;
  height: 17px;
  padding-right: 3px;
  vertical-align: middle;
  display: inline-block;
  background: url(../../assets/yzfw/user-icon.png) no-repeat 0;
  background-size: 17px 17px;
}

.Z-map .number {
  font-size: 20px;
  color: #74634b;
  /* color: #fff; */
  display: flex;
  align-items: center;
  height: 20px;
}

.Z-SFon {
  font-size: 20px;
  z-index: 1;
  display: block;
  position: relative;
}

.Z-SFon .active {
  color: #f4c995 !important;
}

.Z-SFon .active .user {
  background: url(../../assets/yzfw/user-active-icon.png) no-repeat 0;
  background-size: 17px 17px;
}

.Z-p2 {
  height: 26px;
}

/* 保持大小不变的小圆圈  */

.Z-map li i {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  margin-top: -20px;
  opacity: 1;
  border-radius: 50%;
  border: 2px solid #f4c995;
  box-shadow: inset 0 0 20px 0 rgba(224, 201, 149, 0.8);
}

.Z-map li .Z-dot3 {
  animation: c2 2s linear infinite 1s;
  opacity: 0;
}

.Z-map li .Z-dot2 {
  animation: c2 2s linear infinite;
}

.Z-map li .Z-dot1 {
  width: 12px;
  height: 12px;
  margin-left: -6px;
  margin-top: -6px;
  opacity: 1;
  background: #fff;
  border-radius: 50%;
  animation: warn2 2s linear infinite;
  z-index: 999;
}

.Z-SF1 {
  top: 240px;
  left: 150px;
}

.Z-SF2 {
  top: 400px;
  left: 150px;
}

.Z-SF3 {
  top: 320px;
  left: 440px;
}

.Z-SF4 {
  top: 300px;
  left: 470px;
}

.Z-SF5 {
  top: 240px;
  left: 500px;
}

.Z-SF6 {
  top: 300px;
  left: 500px;
}

.Z-SF7 {
  top: 450px;
  left: 380px;
}

.Z-SF8 {
  top: 570px;
  left: 400px;
}

.Z-SF9 {
  top: 300px;
  right: 320px;
}

.Z-SF10 {
  top: 360px;
  right: 360px;
}

.Z-SF11 {
  top: 440px;
  right: 290px;
}

.Z-SF12 {
  top: 450px;
  right: 360px;
}

.Z-SF13 {
  top: 540px;
  left: 490px;
}

.Z-SF14 {
  top: 590px;
  left: 520px;
}

.Z-SF15 {
  top: 230px;
  right: 230px;
}

.Z-SF16 {
  top: 280px;
  right: 280px;
}

.Z-SF17 {
  top: 360px;
  right: 260px;
}

.Z-SF18 {
  top: 520px;
  right: 300px;
}

.Z-SF19 {
  top: 580px;
  right: 260px;
  z-index: 11;
}

.Z-SF20 {
  top: 250px;
  right: 240px;
}

.Z-SF21 {
  top: 320px;
  right: 185px;
}

.Z-SF22 {
  top: 400px;
  right: 150px;
}

.Z-SF23 {
  top: 430px;
  right: 225px;
}

.Z-SF24 {
  top: 410px;
  right: 140px;
}

.Z-SF25 {
  top: 470px;
  right: 160px;
}

.Z-SF26 {
  top: 490px;
  right: 230px;
}

.Z-SF27 {
  top: 530px;
  right: 200px;
}

.Z-SF28 {
  top: 80px;
  right: 120px;
}

.Z-SF29 {
  top: 140px;
  right: 130px;
}

.Z-SF30 {
  top: 190px;
  right: 160px;
}

.Z-SF31 {
  top: 580px;
  right: 140px;
}

.Z-SF32 {
  top: 600px;
  right: 260px;
}

.Z-SF33 {
  top: 620px;
  right: 290px;
}

.Z-SF34 {
  top: 660px;
  right: 340px;
}

.Z-SF121 {
  top: 450px;
  right: 370px;
}

/* 地图总数区域样式 */

.Z-sum {
  width: 329px;
  height: 226px;
  position: absolute;
  left: 45px;
  bottom: 96px;
  background: url(../../assets/yzfw//z-frame_sum.png) no-repeat center;
  background-size: 100%;
}

.Z-sum p {
  font-family: "PingFangTC-Regular,Microsoft Yahei";
  font-size: 22px;
  color: #ededed;
  height: 76px;
  line-height: 76px;
  padding: 0 18px;
}

.Z-sum p img {
  display: inline-block;
  *dispaly: inline;
  *zoom: 1;
  vertical-align: middle;
  margin-right: 30px;
}

.Z-sum p span {
  font-size: 38px;
  color: #fff;
  height: 76px;
  line-height: 76px;
  float: right;
}

/* 右侧区域样式 */

.M-right {
  width: 590px;
  float: left;
  margin-left: 30px;
  margin-top: 75px;
}

/* 报事样式 */

.M-stati {
  width: 100%;
  padding-left: 20px;
  margin-top: 10px;
}

.M-Dlist {
  width: 266px;
  height: 121px;
  /* background: rgba(144, 123, 96, 0.58); */
  background: rgba(32, 32, 31, 0.58);
  opacity: 0.58;
  /* background: #907B60; */
  border-radius: 2px;
  margin-top: 25px;
  padding: 15px 0;
  opacity: 0.5;
  margin-right: 16px;
}

.M-Dlist p {
  padding: 0px 15px;
  color: #fff;
}

.M-Dlist p img {
  padding: 0 3px;
}

.M-dk {
  display: inline-block;
  background: rgba(216, 216, 216, 0.5);
  width: 220px;
  height: 6px;
  margin-bottom: 10px;
  margin-top: 10px;
  position: relative;
}

.M-dk em {
  display: inline-block;
  background: rgba(216, 216, 216, 0.5);
  height: 6px;
  position: absolute;
  animation: animate-positive 2s;
}

.M-dk em:after {
  background: url(../../assets/yzfw//d-hk_02.png) no-repeat;
  height: 24px;
  width: 2px;
  content: "";
  position: absolute;
  right: -2px;
  top: -8px;
}

.M-Dhover {
  background: #6c5d4a;
  border-radius: 2px;
  opacity: 1;
  z-index: 111;
}

.music {
  width: 235px;
  height: 20px;
  position: relative;
  margin-left: 15px;
  margin-top: 5px;
}

.music i {
  width: 7px;
  height: 5px;
  position: absolute;
  bottom: 0;
  background-color: rgba(216, 216, 216, 0.5);
}

.music i:nth-of-type(1) {
  left: 1px;
}

.music i:nth-of-type(2) {
  left: 14px;
}

.music i:nth-of-type(3) {
  left: 27px;
}

.music i:nth-of-type(4) {
  left: 39px;
}

.music i:nth-of-type(5) {
  left: 52px;
}

.music i:nth-of-type(6) {
  left: 65px;
}

.music i:nth-of-type(7) {
  left: 78px;
}

.music i:nth-of-type(8) {
  left: 90px;
}

.music i:nth-of-type(9) {
  left: 103px;
}

.music i:nth-of-type(10) {
  left: 116px;
}

.music i:nth-of-type(11) {
  left: 129px;
}

.music i:nth-of-type(12) {
  left: 141px;
}

.music i:nth-of-type(13) {
  left: 154px;
}

.music i:nth-of-type(14) {
  left: 167px;
}

.music i:nth-of-type(15) {
  left: 180px;
}

.music i:nth-of-type(16) {
  left: 193px;
}

.music i:nth-of-type(17) {
  left: 206px;
}

.music i:nth-of-type(18) {
  left: 219px;
}

.music i:nth-of-type(1) {
  animation: wave 1.32s linear infinite;
}

.music i:nth-of-type(2) {
  animation: wave 1.6s linear infinite;
}

.music i:nth-of-type(3) {
  animation: wave 1.4s linear infinite;
}

.music i:nth-of-type(4) {
  animation: wave 1s linear infinite;
}

.music i:nth-of-type(5) {
  animation: wave 1.8s linear infinite;
}

.music i:nth-of-type(6) {
  animation: wave 2.4s linear infinite;
}

.music i:nth-of-type(7) {
  animation: wave 1.32s linear infinite;
}

.music i:nth-of-type(8) {
  animation: wave 1.6s linear infinite;
}

.music i:nth-of-type(9) {
  animation: wave 1.4s linear infinite;
}

.music i:nth-of-type(10) {
  animation: wave 1s linear infinite;
}

.music i:nth-of-type(11) {
  animation: wave 1.8s linear infinite;
}

.music i:nth-of-type(12) {
  animation: wave 2.4s linear infinite;
}

.music i:nth-of-type(13) {
  animation: wave 1.32s linear infinite;
}

.music i:nth-of-type(14) {
  animation: wave 1.6s linear infinite;
}

.music i:nth-of-type(15) {
  animation: wave 1.4s linear infinite;
}

.music i:nth-of-type(16) {
  animation: wave 1.6s linear infinite;
}

.music i:nth-of-type(17) {
  animation: wave 1s linear infinite;
}

.music i:nth-of-type(18) {
  animation: wave 1.7s linear infinite;
}

@keyframes wave {
  0% {
    height: 8px;
  }
  50% {
    height: 20px;
  }
  100% {
    height: 12px;
  }
}

@keyframes move_wave2 {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}

.waveAnimation {
  width: 235px;
  margin-left: 15px;
  height: 20px;
  overflow: hidden;
  position: relative;
}

.waveBottom {
  background-size: 50% 20px;
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
  background-image: url(../../assets/yzfw/d-2.png);
}

.waveAnimation .waveBottom {
  animation: move_wave2 8s linear infinite;
}

.report-txt {
  font-size: 34px;
  font-family: PingFangSC-Semibold;
}

.report-c1 {
  border-bottom: solid 1px #ffffff;
  margin: 2px 0 0 15px;
  padding: 5px 0 !important;
  width: 235px;
}

.report-c2 {
  border-bottom: solid 1px #ffffff;
  margin: 0 0 0 15px;
  padding: 5px 0 !important;
  width: 235px;
}

.report-c3 {
  border-bottom: solid 1px #ffffff;
  margin: 0 0 0 15px;
  padding: 3px 0 !important;
  width: 235px;
}

.report-c4 {
  margin: 1px 0 0 15px;
  padding: 2px 0 !important;
  width: 235px;
}

/* 当月信息、设备运行警示样式 */

/*设备运行警示*/

.Z-E3List {
  height: 350px;
  margin-top: 67px;
}

.Z-E3List li {
  width: 287px;
  float: left;
  margin-right: 15px;
}

.Z-E3List li:last-child {
  margin: 0;
}

.Z-E3List .Z-title {
  background: url(../../assets/yzfw//bar-shortx2.png) no-repeat left bottom;
  background-size: 100%;
  width: 287px;
  padding-top: 72px;
}

.Z-1 {
  width: 106px;
  height: 106px;
  position: relative;
  opacity: 0;
}

.Z-1 img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}

.Z-1F {
  border: 1px solid #102d5c;
  border-radius: 50%;
  width: 82px;
  height: 82px;
  position: absolute;
  left: 11px;
  top: 11px;
}

.Z-1FC span {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #78d6ff;
  display: block;
  text-align: center;
  padding-top: 8px;
}

.Z-1FC span i {
  font-size: 24px;
  display: block;
  text-align: center;
  line-height: 36px;
}

.Z-1F2 span i {
  font-size: 36px;
}

.Z-line {
  width: 0px;
  position: absolute;
  top: 6px;
  left: 96px;
}

/* 当月数据样式 */

.Z-1Fl {
  border: none;
  right: 0px;
  top: 0px;
}

.Z-3 {
  height: 7px;
  background: #17335f;
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 177px;
  overflow: visible;
  opacity: 0;
}

.Z-rotate {
  transform: rotateY(180deg);
}

.Z-3 .Z-bar1 {
  height: 7px;
  background: #0154d6;
  position: relative;
}

.Z-3 .Z-bar1:after {
  content: "";
  width: 2px;
  height: 19px;
  background: url(../../assets/yzfw//E-img20.png) no-repeat right;
  position: absolute;
  right: 0px;
  top: -6px;
}

.Z-3 .Z-barB {
}

.Z-1F2 {
  position: absolute;
  top: 16px;
  right: 0px;
  opacity: 0;
}

.Z-EL2 .Z-EL2B {
  margin-left: 80px;
  margin-top: 66px;
}

.Z-EL2B .Z-1 {
  position: absolute;
  top: 0px;
  right: 0px;
}

.Z-EL2B .Z-line {
  transform: rotateY(180deg);
  left: 6px;
}

.Z-EL2B .Z-1 img {
  transform: rotateY(180deg);
}

.Z-EL2B .Z-3 {
  left: 0px;
}

.Z-EL2B .Z-1F2 {
  right: 242px;
}

.Z-EBA3 {
  margin-left: 16px;
  width: 677px;
}

.Z-EL3C {
  width: 134px;
  height: 134px;
  background: url(../../assets/yzfw//circle-big.png) no-repeat center;
  background-size: 100%;
  position: relative;
  margin-left: 44px;
  margin-top: 25px;
}

.Z-EL3F {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -36px;
  margin-left: -36px;
  text-align: center;
  color: #ebdccb;
}

.Z-EL3F span {
  font-family: PingFangSC-Semibold;
  font-size: 12px;
  margin-top: 15px;
  display: block;
}

.Z-EL3F i {
  font-size: 25px;
}

.Z-EL3F em {
  font-family: PingFangSC-Semibold;
  font-size: 15px;
}

.Z-EL3C1 {
  border-left: 2px solid #ebdccb;
  height: 0px;
  float: left;
  position: relative;
  margin-left: 170px;
  top: -30px;
}

.Z-EL3C1 p {
  font-family: PingFangSC-Semibold;
  color: #ebdccb;
  text-align: left;
  margin-left: 23px;
  opacity: 0;
}

.Z-EL3C1 p span {
  display: block;
  font-size: 36px;
  height: 50px;
  line-height: 50px;
}

.Z-EL3C1 p i {
  display: block;
  font-size: 18px;
}

.Z-EL3C1 .Z-img1::before,
.Z-EL3C1 .Z-img2::before {
  position: absolute;
  top: -1px;
  left: -2px;
  display: block;
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #ebdccb;
}

.Z-EL3C1 .Z-img1 {
  position: absolute;
  display: block;
  top: 0;
  left: -3px;
  width: 13px;
  height: 2px;
  background-color: #ebdccb;
}

.Z-EL3C1 .Z-img2 {
  position: absolute;
  top: 99px;
  left: -3px;
  width: 0;
  width: 13px;
  height: 2px;
  background-color: #ebdccb;
}

.Z-E3List2 {
  margin-top: 30px;
}

.Z-E3List2 li {
  float: left;
  width: 185px;
  margin: 0 8px;
}

.Z-E3List2 li:first-child {
  margin-left: 0;
}

.Z-E3List2 li:last-child {
  margin-right: 0;
}

.Z-E3List2 li p {
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
}

.Z-E3List2 li p span {
  font-size: 30px;
}

.Z-E3List2 .Z-top {
  opacity: 0.52;
  background: #3c3026;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  letter-spacing: 0;
  text-align: center;
  color: #d4d1c9;
}

.Z-E3List2 .Z-bottom {
  background: #161614;
  height: 60px;
  line-height: 60px;
  margin-top: 2px;
  color: #bbae9f;
}

/* 六边形样式 */

.hexagon-group {
  position: relative;
  width: 100%;
  top: 42px;
  left: 35px;
}

.hexagon {
  background: url(../../assets/yzfw//hexagonx2.png) no-repeat center;
  background-size: 100%;
  width: 109px;
  height: 126px;
}

.hexagon:nth-of-type(1) {
  position: absolute;
}

.hexagon:nth-of-type(2) {
  position: absolute;
  left: 115px;
}

.hexagon:nth-of-type(3) {
  position: absolute;
  left: 57px;
  top: 97px;
}

.hexagon-txt {
  text-align: center;
  margin-top: 20px;
}

.hexagon-txt span {
  display: block;
  font-family: FZLTTHJW--GB1-0;
  font-size: 40px;
  color: #bbae9f;
  letter-spacing: 0;
}

.hexagon-txt em {
  display: block;
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #bbae9f;
  letter-spacing: 0;
}

/* 动画效果 */

.Z-EL3C {
  animation: spin 7s linear infinite;
}

.Z-EL3F {
  animation: spin1 7s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes spin2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes c2 {
  0% {
    transform: scale(0.222);
    opacity: 1;
  }
  50% {
    transform: scale(0.622);
    opacity: 0.6;
  }
  80% {
    transform: scale(1);
    opacity: 0.4;
  }
  100% {
    opacity: 0;
  }
}
</style>