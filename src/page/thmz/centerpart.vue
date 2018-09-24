<template>
    <div class="center-info">
        <!--项目小区信息-->
        <ul class="community-info community-detail">
        <li><span class="icon-floor"></span></li>
        <li>
            <p class="community-name">{{districtInfo.name}}</p>
            <p class="community-lat">{{districtInfo.lat}}<br>{{districtInfo.lng}}</p>
        </li>
        <li>
            <p>服务接管时间</p>
            <p>{{districtInfo.takeOver}}</p>
        </li>
        <li>
            <p>绿化率</p>
            <p>&nbsp;{{districtInfo.greening}}&nbsp;</p>
        </li>
        <li>
            <p>容积率</p>
            <p>&nbsp;{{districtInfo.volumeRate}}&nbsp;</p>
        </li>
        <li>
            <p>自住房屋</p>
            <p>{{districtInfo.selfHouse}}套</p>
        </li>

        <li>
            <p>出租房屋</p>
            <p>{{districtInfo.rentHouse}}套</p>
        </li>
        <li>
            <p>空置房屋</p>
            <p>{{districtInfo.vacantHouse}}个</p>
        </li>
        <li>
            <p>总设备数量</p>
            <p>{{districtInfo.devicesNumber}}人</p>
        </li>
        <li>
            <p>总项目人员</p>
            <p>{{districtInfo.projectStaff}}人</p>
        </li>
        </ul>
            <!-- 地图信息 -->
            <div class="community-map">
                    <img src="../../assets/thmz-map.png" alt="">
            <!-- 人行、车行入口信息 -->
           <div class="absolute" v-bind:style = "{ left: districtInfo.greening, top: districtInfo.greening }">人行: <span class="person">{{districtInfo.devicesNumber}}</span>人</div>
           <!-- 巡更点位信息 -->
            <div>
                <span class="absolute icon icon-point-blue " data-value="1" style="top:160px;left:275px;"> </span>
                <span class="absolute icon icon-point" data-value="2" style="top:250px;left:295px;"> </span>
                <span class="absolute icon icon-point" data-value="3" style="top:320px;left:320px;"> </span>
                <span class="absolute icon icon-point" data-value="4" style="top:420px;left:345px;"> </span>
                <span class="absolute icon icon-point" data-value="5" style="top:450px;left:425px;"> </span>

                <span class="absolute icon icon-point icon-point-blue " data-value="6" style="top:520px;left:535px;"> </span>
                <span class="absolute icon icon-point" data-value="7" style="top:640px;left:555px;"> </span>
                <span class="absolute icon icon-point" data-value="8" style="top:565px;left:655px;"> </span>
                <span class="absolute icon icon-point" data-value="9" style="top:460px;left:705px;"> </span>
                <span class="absolute icon icon-point" data-value="10" style="top:340px;left:715px;"> </span>

                 <span class="absolute icon icon-point icon-point-blue " data-value="11" style="top:260px;left:715px;"> </span>
                <span class="absolute icon icon-point" data-value="12" style="top:170px;left:755px;"> </span>
                <span class="absolute icon icon-point" data-value="13" style="top:100px;left:705px;"> </span>
                <span class="absolute icon icon-point" data-value="14" style="top:135px;left:545px;"> </span>
                <span class="absolute icon icon-point" data-value="15" style="top:155px;left:405px;"> </span>
            </div>
            <!-- 巡更人员信息 -->
            <div>
                <div class="absolute xungenghead" style="top:480px;left:707px;width: 63px; height: 63px; border-radius: 50%; border: 2px solid #1f5ec2;overflow:  hidden">
                <div style="width: 59px; height: 59px; border-radius: 50%;border:2px solid #1f5ec2;overflow:  hidden">
                    <img src="../../assets/xungenghead1.png" width="59" height="59" />
                </div>
            </div>
            <div class="absolute icon-xungeng-abnormal dianwei" style="  top:480px;left:775px; width:150px; height: 80px;display: block">
                <div style="margin:10px 0px 0px 20px;">
                    <span>巡更人员:</span>
                    <span>张宇</span>
                </div>
                <div style="margin:3px 0px 0px 20px;">
                    <span>巡更点位:</span>
                    <span id="dianwei2">6号点位</span>
                </div>
                <div style="margin:3px 0px 0px 20px;">
                    <span id="time2">2017/8/16 14:14:13</span>
                </div>
            </div>
            </div>
        </div>
            <!-- 报事信息 -->
            <div>
                    <div class="report">
                            <dl class="report-dl">
                                    <dd><span>工程</span>报事</dd>
                                    <dt><span>{{complaints.postitEngineering }}</span>件</dt>
                            </dl>
                            <dl class="report-dl">
                                    <dd><span>环境</span>报事</dd>
                                    <dt><span>{{complaints.postitSurroundings }}</span>件</dt>
                            </dl>
                            <dl class="report-dl">
                                    <dd><span>安全</span>报事</dd>
                                    <dt><span>{{complaints.postitSafe }}</span>件</dt>
                            </dl>
                            <dl class="report-dl">
                                    <dd><span>客服</span>报事</dd>
                                    <dt><span>{{complaints.postitService }}</span>件</dt>
                            </dl>
                    </div>
                    <div class="report-rate">
            <div class="rate-item">
              <div class="rate-title">
                  <p>完全度</p>
                  <p class="egl-t">Charge rate</p>
              </div>
              <div class="rate-img">
                  <dash-board :size='{width:76,height:38}'
                              :info="+complaints.changeRate "
                              class="absolute"
                  >
                  </dash-board>
              </div>
              <div class="rate-number"><span>{{complaints.changeRate }}</span></div>
            </div>
            <div class="rate-item">
                <div class="rate-title">
                  <p>报事完结率</p>
                  <p class="egl-t">Completion rate</p>
              </div>
              <div class="rate-img">
                  <dash-board :size='{width:76,height:38}'
                              :info="+complaints.completionRate"
                              class="absolute"
                  >
                  </dash-board>
              </div>
              <div class="rate-number"><span>{{tollNewsSatisfaction.completionRate }}</span> </div>
            </div>
              <div class="rate-item">
                <div class="rate-title">
                  <p>业主满意度</p>
                  <p class="egl-t">Owner satisfaction</p>
              </div>
              <div class="rate-img">
                  <dash-board :size='{width:76,height:38}'
                              :info="+complaints.ownerSatisfaction"
                              class="absolute"
                  >
                  </dash-board>
              </div>
              <div class="rate-number"><span>{{complaints.ownerSatisfaction }}%</span></div>
            </div>
                    </div>
            </div>
        </div>
</template>
<script>
import DashBoard from "../../components/DashBoard";

export default {
  name: "CenterPart",
  components: {
    DashBoard
  },
  props: {
    districtInfo: Object,
    tollNewsSatisfaction: Object
  },
  data() {
    return {
      complaints: Object, // 报事信息
      projectInfo: {} // 项目基本信息
    };
  },
  mounted() {
    this.getComplaints();
    this.getProjectInfo();
  },
  methods: {
    // 获取报事信息
    getComplaints() {
      var _this = this;
      this.$axios({
        method: "post",
        url: this.$baseUrl + "/api/project/projectTypeInfo",
        params: {
          projectId: "05da4de2-121a-41f5-b728-30a96f0900fe"
        }
      })
        .then(function(result) {
          if (result.status == 200) {
            _this.complaints = result.data;
          }
        })
        .catch(resp => {
          console.log("请求失败：" + resp.status + "," + resp.statusText);
        });
    },

    // 获取项目基本信息
    getProjectInfo() {
      var _this = this;
      this.$axios({
        method: "post",
        url: this.$baseUrl + "/api/project/projectInfo",
        params: {
          form: JSON.stringify({
            projectId: "05da4de2-121a-41f5-b728-30a96f0900fe"
          })
        }
      })
        .then(function(result) {
          if (result.status == 200) {
            console.log(result.data);
            _this.projectInfo = result.data;
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
.community-info {
  position: relative;
  background: #201f1c;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.community-name {
  font-size: 25px !important;
}

.community-lat {
  font-size: 12px !important;
  line-height: 13px;
  margin-top: 0px;
}

.community-detail li {
  float: left;
  margin-right: 40px;
}

.community-detail li:last-child {
  margin-right: 0px;
}

.community-detail li:first-child {
  margin-right: 0px;
}

.community-detail li p:nth-child(1) {
  font-size: 12px;
  text-align: center;
}

.community-detail li p:nth-child(2) {
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
}

.icon-floor {
  display: inline-block;
  height: 28px;
  width: 40px !important;
  background: url("../../assets/icon/floor.png") no-repeat 0;
  background-size: 30px 28px;
}

/* 地图区域样式 */
.community-map {
  height: 760px;
  width: 100%;
  position: relative;
}

.community-map img {
  width: 100%;
  height: 760px;
}

.absolute {
  position: absolute;
}

.icon {
  display: inline-block;
  vertical-align: middle;
}

.icon-point {
  width: 19px;
  height: 19px;
  background: url("../../assets/icon/monitor_p.png") no-repeat;
  background-size: 19px;
}

.icon-point-blue {
  width: 41px;
  height: 45px;
  background: url("../../assets/icon/hat.png") no-repeat;
}

/* .xungenghead{
    overflow: hidden;
    position: absolute;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    left: 10px;
    top: 420px;
    border: 2px solid #427EEC;
    display: block;
} */

/* 报事表格样式 */
.report {
  width: 40%;
  float: left;
  height: 100px;
  background-image: linear-gradient(-180deg, #a27d4f 0%, #8c7860 100%);
  box-shadow: 0 2px 8px 0 #402f18;
}

.report-dl {
  width: 25%;
  float: left;
  text-align: center;
  line-height: 50px;
}

.report-dl dd span {
  /* font-size: 18px; */
}

.report-dl dd {
  height: 50px;
  font-size: 12px !important;
  background: rgba(64, 47, 24, 0.6);
}

.report-dl dt {
  height: 50px;
}

.report-dl dt span {
  font-size: 25px;
}

/* 报事率表格样式 */
.report-rate {
  width: 59%;
  float: right;
}

.rate-item {
  float: left;
  height: 102px;
  width: 33%;
  background: url("../../assets/icon/rate.png") no-repeat center;
  background-size: 170px 102px;
  /* display: flex;
  justify-content: center; */
  position: relative;
}

.reate-item-scan {
  overflow: hidden;
  height: 43px;
}

.reate-item-scan > div {
  position: relative;
  margin-top: 2px;
  width: 76px;
  height: 44px;
  float: left;
}

.reate-item-scan > div:nth-of-type(2) {
  height: 44px;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 44px;
}

.rate-item .rate-img {
  position: absolute;
  left: 10%;
  bottom: 10px;
}

.rate-item .rate-number {
  position: absolute;
  right: 15%;
  bottom: 10px;
}

.rate-number span {
  font-size: 25px;
}

.rate-item .rate-title {
  padding-top: 10px;
  padding-left: 10%;
}

.rate-item .rate-title p:last-child {
  font-size: 12px;
}

.center-info{
  height: 98%;
  background-image: linear-gradient(-180deg, #2e2d2a 0%, #1e1e1b 100%);
}
</style>


