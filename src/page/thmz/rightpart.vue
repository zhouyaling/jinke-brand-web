<template>
    <div>
        <!-- 监控区域 -->
        <div class="module-one">
            <div class="video-box">
                <div class="video-left">
                     <video id="myPlayer1" poster="../../assets/media.png" controls muted playsinline webkit-playsinline autoplay>
                        <source v-bind:src = "videoLeft.hdAddress"
                                type="application/x-mpegURL"/>
                    </video>
                </div>
                <div class="video-right">
                    <video id="myPlayer2" poster="../../assets/media.png"  controls muted playsinline webkit-playsinline autoplay>
                        <source v-bind:src = "videoRight.hdAddress"
                                type="application/x-mpegURL"/>
                    </video>
                </div>
            </div>
            <div class="video-info swiper-container" id="m_swiper_container_1">
                <div class="monitor-list swiper-wrapper">
                    <!--背景变化-->
                    <div class="monitor-item  swiper-slide " v-for="(item,index) in monitorFenList"
                         :class="item.activ=='1' ? 'green-border':'green-border'"  v-bind:key="item.address">
                        <!--上-->
                        <div class="monitor-item-top" v-if = "index < 5">
                            <!--图标 样式变化-->
                            <span v-if="item.activ=='1'" class="camera icon green-camera"></span>
                            <span v-if="item.activ=='0'" class="camera icon green-camera"></span>
                            <div class="monitor-item-content">
                                <p class="scall-font">正在监控中</p>
                                <p>{{item.address}}</p>
                            </div>
                        </div>
                        <!--下-->
                        <div class="monitor-item-bottom"  v-if = "index < 5">
                            <span class="scall-font">运行状态</span>
                            <!--  字体颜色内容变化-->
                            <span v-if="item.status=='0'" class="scall-font normal-font ">运行正常</span>
                            <span v-if="item.status=='1'" class="scall-font abnormal-font">运行异常</span>
                            <span v-if="item.status=='2'" class="scall-font service-font">运行维修</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 设备情况 -->
        <div class="module-two">
            <div style="width:61%;">
                <title-bar name="设备情况"></title-bar>
            </div>
            <div class="module-table equipment-condition main-b">
                    <div class="table-equipment">
                       <!--  <title-bar :info="'设备情况'" :size="{width:503,height:50}"></title-bar>
 -->
                        <div class="equipment-condition-title">
                            <span></span>
                            <span>监控</span>
                            <span>电子围栏</span>
                            <span>电梯</span>
                            <span>消防</span>
                        </div>
                        <div class="equipment-condition-content">
                            <span>设备</span>
                            <span v-for="item in equipmentState.equipment" v-bind:key = "item">{{item}}</span>
                        </div>
                        <div class="equipment-condition-content">
                            <span>当年报警</span>
                            <span v-for="item in equipmentState.monthAlarm" v-bind:key = "item">{{item}}次</span>
                        </div>
                        <div class="equipment-condition-content">
                            <span>当月报警</span>
                            <span v-for="item in equipmentState.dayAlarm" v-bind:key = "item">{{item}}次</span>
                        </div>
                    </div>
                    <div class="module-chart bar-char">
                            <equipment-chart :info="equipmentChartData" :size="{width:330,height:200}"></equipment-chart>
                        <p> 设备完好率</p>
                    </div>
            </div>
        </div>
        <!-- 消防电梯情况 -->
        <div class="module-three">
          <!--消防数据-->
            <div class="device">
                <div class="device-content">
                    <div class="device-left-moudle">
                        <div class="fire-moudle device-type">
                            <p>消防 Fire</p>
                            <div id="fire" class="swiper-container" >
                                <div class="device-list swiper-wrapper">

                                    <div class="device-item  swiper-slide" v-for="item in allTool.firleList" v-bind:key = "item.id" :class=" {'icon-selecte' : item.active=='1'}">
                                        <span v-if="item.status=='0' " class="icon  icon-fir-normal"></span>
                                        <span v-if="item.status=='1' " class="icon  icon-fir-abnormal"></span>
                                        <span v-if="item.status=='2' " class="icon  icon-fir-service"></span>
                                        <div>
                                            <p>{{item.name}}</p>
                                            <p>{{item.address}}</p>
                                            <p v-if="item.status=='0' " class="normal-font">•运行正常</p>
                                            <p v-if="item.status=='1' " class="abnormal-font">•运行异常</p>
                                            <p v-if="item.status=='2' " class="service-font">•维修中</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="power-moudle device-type ">
                            <p>变配电 Power supply and distribution</p>
                            <div id="power" class="swiper-container">
                                <div class="device-list swiper-wrapper">

                                    <div class="device-item  swiper-slide" v-for="item in allTool.powerList"  v-bind:key = "item.id"  :class=" {'icon-selecte' : item.active=='1'}">
                                        <span v-if="item.status=='0' " class="icon  icon-power-normal"></span>
                                        <span v-if="item.status=='1' " class="icon  icon-power-abnormal"></span>
                                        <span v-if="item.status=='2' " class="icon  icon-power-service"></span>
                                        <div>
                                            <p>{{item.name}}</p>
                                            <p>{{item.address}}</p>
                                            <p v-if="item.status=='0' " class="normal-font">•运行正常</p>
                                            <p v-if="item.status=='1' " class="abnormal-font">•运行异常</p>
                                            <p v-if="item.status=='2' " class="service-font">•维修中</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="drainage-moudle device-type">
                            <p>排水 Drainage</p>
                            <div id="drainage" class="swiper-container">
                                <div class="device-list swiper-wrapper">
                                    <div class="device-item  swiper-slide" v-for="item in allTool.drainageList" v-bind:key = "item.id"  :class=" {'icon-selecte' : item.active=='1'}">
                                        <span v-if="item.status=='0' " class="icon  icon-drainage-normal"></span>
                                        <span v-if="item.status=='1' " class="icon  icon-drainage-abnormal"></span>
                                        <span v-if="item.status=='2' " class="icon  icon-drainage-service"></span>
                                        <div>
                                            <p>{{item.name}}</p>
                                            <p>{{item.address}}</p>
                                            <p v-if="item.status=='0' " class="normal-font">•运行正常</p>
                                            <p v-if="item.status=='1' " class="abnormal-font">•运行异常</p>
                                            <p v-if="item.status=='2' " class="service-font">•维修中</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="device-right-moudle">
                        <div class="elevator-moudle device-type ">
                            <p>电梯 The elevator</p>
                            <div id="elevator" class="swiper-container">
                                <div class="device-list swiper-wrapper">
                                    <div class="device-item  swiper-slide" v-for="item in allTool.elevatorList" v-bind:key = "item.id"  :class=" {'icon-selecte' : item.active=='1'}">
                                        <span v-if="item.status=='0' " class="icon  icon-elevator-normal"></span>
                                        <span v-if="item.status=='1' " class="icon  icon-elevator-abnormal"></span>
                                        <span v-if="item.status=='2' " class="icon  icon-elevator-service"></span>
                                        <div>
                                            <p>{{item.name}}</p>
                                            <p>{{item.address}}</p>
                                            <p v-if="item.status=='0' " class="normal-font">•运行正常</p>
                                            <p v-if="item.status=='1' " class="abnormal-font">•运行异常</p>
                                            <p v-if="item.status=='2' " class="service-font">•维修中</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="waybrake-moudle device-type">
                            <p>门禁／道闸 Entrance guard way brake</p>
                            <div id="waybrake" class="swiper-container">
                                <div class="device-list swiper-wrapper">
                                    <div class="device-item  swiper-slide" v-for="item in allTool.wayBrakeList" v-bind:key = "item.id"  :class=" {'icon-selecte' : item.active=='1'}">
                                        <span v-if="item.status=='0' " class="icon  icon-waybrake-normal"></span>
                                        <span v-if="item.status=='1' " class="icon  icon-waybrake-abnormal"></span>
                                        <span v-if="item.status=='2' " class="icon  icon-waybrake-service"></span>
                                        <div>
                                            <p>{{item.name}}</p>
                                            <p>{{item.address}}</p>
                                            <p v-if="item.status=='0' " class="normal-font">•运行正常</p>
                                            <p v-if="item.status=='1' " class="abnormal-font">•运行异常</p>
                                            <p v-if="item.status=='2' " class="service-font">•维修中</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fence-moudle device-type">
                            <p>电子围栏 Electronic fence</p>
                            <div id="fence" class="swiper-container">
                                <div class="device-list swiper-wrapper">
                                    <div class="device-item  swiper-slide" v-for="item in allTool.fenceList" v-bind:key = "item.id"  :class=" {'icon-selecte' : item.active=='1'}">
                                        <span v-if="item.status=='0' " class="icon  icon-fence-normal"></span>
                                        <span v-if="item.status=='1' " class="icon  icon-fence-abnormal"></span>
                                        <span v-if="item.status=='2' " class="icon  icon-fence-service"></span>
                                        <div>
                                            <p>{{item.name}}</p>
                                            <p>{{item.address}}</p>
                                            <p v-if="item.status=='0' " class="normal-font">•运行正常</p>
                                            <p v-if="item.status=='1' " class="abnormal-font">•运行异常</p>
                                            <p v-if="item.status=='2' " class="service-font">•维修中</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="device-show ">
                    <p>维保设备 Repair equipment</p>
                    <div class="device-details ">
                        <div class="device-details-info">
                            <p><span>维保设备</span> <span>{{detailedInfo.name}}</span></p>
                            <p><span>设备编号</span> <span>{{detailedInfo.No}}</span></p>
                            <p><span>安装位置</span> <span>{{detailedInfo.position}}</span></p>
                            <p><span>生产厂商</span> <span>{{detailedInfo.factoryOwner}}</span></p>
                        </div>

                        <div class="device-details-renyuanlist">
                            <p><span>维保单位</span> <span>{{detailedInfo.maintenanceUnit}}</span></p>
                            <p><span>单位编号</span> <span>{{detailedInfo.format}}</span></p>
                            <p><span>维保时间</span> <span>{{detailedInfo.warranty}}</span></p>
                            <p><span>维保人员</span> <span></span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import ezuikit from "ezuikit";
import TitleBar from "../../components/TitleBar";
import EquipmentChart from "../../components/EquipmentChart";

export default {
  name: "RightPart",
  components: {
    TitleBar,
    EquipmentChart
  },
  props: {
    monitorFenList: Array,
    equipmentState: Object,
    equipmentChartData: Object,
    allTool: Object,
    detailedInfo: Object
  },
  data() {
    return {
      videoLeft: Object, // 左边摄像头
      videoRight: Object // 右边摄像头
    };
  },
  beforeMount() {},
  updated() {
    new ezuikit("myPlayer1");
    new ezuikit("myPlayer2");
  },
  mounted() {
    this.getVideoAddress();
  },
  methods: {
    // 获取视频地址
    getVideoAddress() {
      var _this = this;
      this.$axios({
        method: "get",
        url: this.$baseUrl + "/api/deviceinfo/hlsUrl",
        params: {
          projectId: "05da4de2-121a-41f5-b728-30a96f0900fe"
        }
      })
        .then(function(result) {
          if (result.status == 200) {
            _this.videoLeft = result.data[0];
            _this.videoRight = result.data[1];
          }
        })
        .catch(resp => {
          console.log("请求失败：" + resp.status + "," + resp.statusText);
        });
    }
  }
};
</script>
<style scoped>
.right-container {
  width: 100%;
}
.module-one {
  height: 360px;
}

.module-two {
  margin-top: 10px;
  height: 250px;
}

/* .module-three {
  margin-top: 10px;
  height: 330px;
} */

.video-box {
  display: inline-block;
}

.video-info {
  margin-top: 10px;
}

.video-left {
  width: 49%;
  float: left;
}

.video-left video {
  height: 250px;
  width: 440px;
}

.video-right {
  width: 49%;
  float: right;
}

.video-right video {
  height: 250px;
  width: 440px;
}

.monitor-list {
  width: 866px;
  height: 80px;
}

.monitor-item {
  position: relative;
  float: left;
  margin-right: 7px !important;
  margin-left: 9px !important;
  width: 150px !important;
  height: 80px;
}

.monitor-item-top {
  height: 54px;
  width: 150px;
}

.monitor-item-bottom {
  width: 150px;
  height: 26px;
  font-size: 12px;
  text-align: center;
  position: relative;
  bottom: 10px;
}

.monitor-item-bottom > span {
  display: inline-block;
  font-size: 12px;
  width: 48%;
  line-height: 26px;
}

.camera {
  display: inline-block;
  width: 45px;
  height: 100%;
}

.monitor-item-content {
  font-size: 12px;
  width: 100px;
  float: right;
  height: 100%;
  padding: 5px 0;
}

.monitor-item-content > p:nth-of-type(1) {
  font-size: 12px;
  opacity: 0.5;
  line-height: 19px;
}

.monitor-item-content > p:nth-of-type(2) {
  font-size: 14px;
  line-height: 25px;
}

.red-border {
  background: url("../../assets/icon/red_border.png") no-repeat;
  background-size: 150px 80px;
}

.green-border {
  background: url("../../assets/icon/green_border.png") no-repeat;
  background-size: 150px 80px;
}

.red-camera {
  background: url("../../assets/icon/red_camera.png") no-repeat 50% 50%;
  background-size: 28px 14px;
}

.green-camera {
  background: url("../../assets/icon/green_camera.png") no-repeat 50% 50%;
  background-size: 28px 14px;
}

.scall-font {
  display: inline-block;
  font-size: 12px !important;
  -webkit-transform: scale(0.8, 0.8) !important;
}

/*异常*/
.abnormal-font {
  color: #c72727;
}

/*维修*/
.service-font {
  color: #f5b05a;
}

/*正常*/
.normal-font {
  color: #eacaa2;
}

/* 设备状况样式 */
.equipment-condition {
  width: 100%;
  height: 250px;
  margin-top: 10px;
}

.equipment-condition-title {
  height: 36px;
  line-height: 36px;
  display: flex;
  background: #3c3026;
  flex-flow: row;
  flex-wrap: nowrap;
  width: 545px;
  float: left;
  margin-top: 20px;
}

.equipment-condition-title > span {
  text-align: center;
  display: block;
  width: 25%;
}

.equipment-condition-content {
  height: 48px;
  line-height: 48px;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  width: 544px;
  border-right: 1px solid #3c3026;
  float: left;
}

.equipment-condition-content > span {
  text-align: center;
  display: block;
  border-right: 1px solid #3c3026;
  width: 20%;
}

.equipment-condition-content > span:last-of-type {
  border: none;
}

.bar-char {
  width: 330px;
  height: 250px;
  float: left;
  overflow: hidden;
  position: relative;
}

.bar-char > div {
  width: 100%;
  height: 100%;
  margin-left: 15px;
}

.bar-char p {
  margin-left: 152px;
  margin-top: -25px;
}

.table-equipment {
  width: 545px;
  float: left;
}

/* 电梯设备情况 */
.device {
  margin-top: 9px;
  height: 325px;
  width: 100%;
}

.device-content {
  height: 100%;
  /* width: 648px; */
  margin-top: -45px;
  float: left;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  overflow: hidden;
  border: 1px solid #3c3026;
}

.device-show {
  height: 100%;
  width: 227px;
  float: right;
  border: 1px solid #3c3026;
}

.device-show > p {
  height: 38px;
  padding-left: 8px;
  line-height: 38px;
  background: #3c3026;
  font-size: 14px;
  margin-top: -45px;
}

.device-details {
  height: 285px;
  width: 100%;
  padding: 10px;
  background-image: linear-gradient(-180deg, #272522 0%, #181816 100%);
  color: rgba(255, 255, 255, 0.6);
}

.device-details p {
  height: 27px;
  line-height: 27px;
  font-size: 12px;
  width: 100%;
}

.device-details > p > span {
  display: inline-block;
}

.device-details > p > span:nth-of-type(1) {
  min-width: 60px !important;
}

.device-details-info {
  width: 100%;
  height: 110px;
  border-radius: 5px;
  background: #191917;
  text-indent: 10px;
  margin: 0px auto;
}

.device-details-renyuanlist {
  margin-top: 14px;
  text-indent: 10px;
}

.device-details-renyuanlist p {
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  width: 100%;
}

.device-left-moudle,
.device-right-moudle {
  width: 50%;
  display: flex;
  flex-flow: column;
}

.device-left-moudle {
  border-right: 1px solid #362d25;
}

.device-type {
  height: 107px;
  width: 320px;
}

.device-type > p {
  background: #3c3026;
  height: 37px;
  font-size: 14px;
  line-height: 37px;
  padding-left: 7px;
}

.device-list {
  width: 363px;
  height: 70px;
  display: flex;
  flex-flow: row;
  /*justify-content: space-around;*/
}

.device-item {
  position: relative;
  display: block;
  width: 95px !important;
  height: 50px !important;
  margin: 10px 5px 10px 6px !important;
  color: rgba(255, 255, 255, 0.6);
}

.device-item > span {
  width: 32px;
  height: 32px;
  margin-top: 10px;
  margin-left: 5px;
  height: 32px;
  float: left;
  width: 32px;
  background-size: 32px 32px;
  z-index: 1;
}

.device-item > div {
  margin-left: 25px;
  z-index: 5;
  position: absolute;
  width: 120px;
  height: 50px;
  font-size: 15px !important;
  transform: scale(0.8, 0.8);
}

.device-item > div > p {
  margin-top: 0;
  display: block;
  line-height: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  transform: scale(0.8, 0.8);
}

.icon-waybrake-abnormal {
  background: url("../../assets/icon/waybrake_abnormal.png") no-repeat 50% 50%;
}

.icon-waybrake-normal {
  background: url("../../assets/icon/waybrake_normal.png") no-repeat 50% 50%;
}

.icon-waybrake-service {
  background: url("../../assets/icon/waybrake_service.png") no-repeat 50% 50%;
}

.icon-fir-abnormal {
  background: url("../../assets/icon/fir_abnormal.png") no-repeat 50% 50%;
}

.icon-fir-normal {
  background: url("../../assets/icon/fir_normal.png") no-repeat 50% 50%;
}

.icon-fir-service {
  background: url("../../assets/icon/fir_service.png") no-repeat 50% 50%;
}

.icon-power-abnormal {
  background: url("../../assets/icon/power_abnormal.png") no-repeat 50% 50%;
}

.icon-power-normal {
  background: url("../../assets/icon/power_normal.png") no-repeat 50% 50%;
}

.icon-power-service {
  background: url("../../assets/icon/power_service.png") no-repeat 50% 50%;
}

.icon-drainage-abnormal {
  background: url("../../assets/icon/drainage_abnormal.png") no-repeat 50% 50%;
}

.icon-drainage-normal {
  background: url("../../assets/icon/drainage_normal.png") no-repeat 50% 50%;
}

.icon-drainage-service {
  background: url("../../assets/icon/drainage_service.png") no-repeat 50% 50%;
}

.icon-elevator-abnormal {
  background: url("../../assets/icon/elevator_abnormal.png") no-repeat 50% 50%;
}

.icon-elevator-normal {
  background: url("../../assets/icon/elevator_normal.png") no-repeat 50% 50%;
}

.icon-elevator-service {
  background: url("../../assets/icon/elevator_service.png") no-repeat 50% 50%;
}

.icon-waybrake-abnormal {
  background: url("../../assets/icon/waybrake_abnormal.png") no-repeat 50% 50%;
}

.icon-waybrake-normal {
  background: url("../../assets/icon/waybrake_normal.png") no-repeat 50% 50%;
}

.icon-waybrake-service {
  background: url("../../assets/icon/waybrake_service.png") no-repeat 50% 50%;
}

.icon-fence-abnormal {
  background: url("../../assets/icon/fence_abnormal.png") no-repeat 50% 50%;
}

.icon-fence-normal {
  background: url("../../assets/icon/fence_normal.png") no-repeat 50% 50%;
}

.icon-fence-service {
  background: url("../../assets/icon/fence_service.png") no-repeat 50% 50%;
}
</style>


