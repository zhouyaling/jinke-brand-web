<template>
<div class = "layer-container">
    <div class="layer-wrap wrap-scale">
      <!-- 左侧区域模块 -->
      <div  class="module-left">
        <left-part v-bind:parkPatrol = "parkPatrol" ></left-part>
      </div>
      <!-- 中间区域模块 -->
      <div class="module-center">
        <center-part  v-bind:districtInfo = "districtInfo" v-bind:tollNewsSatisfaction = "tollNewsSatisfaction"></center-part>
      </div>
      <!-- 右侧区域模块 -->
      <div class="module-right">
        <right-part v-bind:monitorFenList = "monitorFenList" v-bind:allTool = "allTool" v-bind:detailedInfo = "detailedInfo"  v-bind:equipmentState = "equipmentState" v-bind:equipmentChartData = "equipmentChartData"></right-part>
      </div>
      <!-- 顶部区域模块 -->
      <div class="module-header">智慧社区</div>
    </div>
    <!-- 弹窗区域 -->
      <div class="layer-panel" >
        <!-- 智能门弹窗 -->
        <!-- <div class="panel-box zhinneng-box">
          <panel-head v-bind:title = "`天启智能门`" v-bind:sub = "`SMART GATE OF TQ`" v-bind:activeTop = "73"  v-bind:activeLeft = "85"></panel-head>
          <div class="panel-content zhineng-centent">
            <img class="zhineng" src="../../assets/thmz/zhineng.png" alt="">
          </div>
        </div> -->
        <!-- 监控弹窗 -->
        <div class="panel-box jiankong-box">
          <panel-head v-bind:title = "`出入口监控`" v-bind:sub = "`GATEWAY MONITORING`" v-bind:activeTop = "67"  v-bind:activeLeft = "85"></panel-head>
          <div class="panel-content jiankong-centent">
            <div>
               <video id="myPlayer3" style="width:570px;" poster="../../assets/media.png" autoplay>
                    <source src = "http://hls.open.ys7.com/openlive/ab025638227f45afa946824277c65e5e.m3u8"
                        type="application/x-mpegURL"/>
                </video>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    <!-- 边框样式 -->
     <div class="layer-frame">
      </div>
  </div>
</template>

<script>
import ezuikit from "ezuikit";
import LeftPart from "./leftpart";
import CenterPart from "./centerpart";
import RightPart from "./rightpart";
import PanelHead from "../../components/PanelHead";

export default {
  name: "thmz",
  components: {
    LeftPart,
    CenterPart,
    RightPart,
    PanelHead
  },
  data() {
    return {
      parkPatrol: {}, // 园区巡更信息
      toRoom: {}, // 房屋信息
      parkingSpaces: {}, // 车位使用信息
      // parkingRate: {}, // 车位使用率
      districtInfo: {}, // 小区详情
      tollNewsSatisfaction: {}, // 报事率
      monitorFenList: [], // 视频状况信息
      equipmentState: {}, // 设备状况信息
      equipmentChartData: {}, // 设备完好率
      allTool: {}, // 所有设备
      detailedInfo: {}, // 设施相信信息
      complaints: {} // 报事信息
    };
  },
  mounted() {
    this.getInfo();
  },
  updated() {
    debugger;
    new ezuikit("myPlayer3");
  },
  methods: {
    // 请求基础数据
    getInfo() {
      this.parkPatrol = {
        times: "--", // 巡更频次
        patrolNumber: 3, // 巡逻人数
        managementArea: "--", // 管理面积
        ownersNumber: "--" // 服务业主
      };
      this.toRoom = {
        toRoomRate: "--", // 接房率
        decorationRate: "--", // 装修率
        highLevel: { number: 11, rate: 19 }, // 高层
        bungalow: { number: 0, rate: 0 }, // 洋房
        villa: { number: 0, rate: 0 }, // 别墅
        business: { number: 0, rate: 0 } // 商业
      };
      this.parkingSpaces = {
        useRate: "--", //车位使用率
        totalSpaces: 0, //车位数量
        noSold: 0, //车位未售出数量
        overSold: 0, //已售数量
        overSoldSelf: 0, //已售 自用
        overSoldSell: 0, //已售 出租
        noSoldSelf: 0, //未售 自用
        noSoldSell: 0 //未售 出租
      };
      this.districtInfo = {
        name: "天湖美镇", // 项目名称
        lat: "105.3645 ", //经纬度
        lng: "30.3026",
        takeOver: "--", //接管时间
        greening: "30%", //绿化面积
        volumeRate: "3.11%", //容积率
        selfHouse: 2148, //自主房屋
        rentHouse: "--", //出租房屋
        vacantHouse: "--", //空置房屋
        devicesNumber: "--", //总设备数量
        projectStaff: "--" //总项目人员
      };
      this.tollNewsSatisfaction = {
        //收费率 报事完结率 业主满意度
        toll: 30,
        news: "--",
        satisfaction: "--"
      };
      this.complaints = {
        customerService: "--", //400客服投诉数量
        group: "--", //股份集团投诉数量
        group1: "--", //股份集团投诉数量
        group2: "--" //股份集团投诉数量
      };
      this.monitorFenList = [
        // 视频信息
        {
          activ: 1,
          address: "一组团入口",
          id: "A-2",
          ipx: "115px",
          ipy: "105px",
          isMain: 0,
          isfixed: 0,
          status: 0
        },
        {
          activ: 1,
          address: "二组团入口",
          id: "A-2",
          ipx: "115px",
          ipy: "105px",
          isMain: 0,
          isfixed: 0,
          status: 0
        }
      ];
      //设备状况
      this.equipmentState = {
        //设备
        equipment: ["1", "2", "3", "4"], //监控  电子围栏  电梯  消防  给排水 变配电 门禁/道闸
        //本月报警
        monthAlarm: ["1", "2", "3", "4"],
        //当年报警
        dayAlarm: ["1", "2", "3", "4"]
      };

      this.equipmentChartData = {
        dataAxis: ["变压器", "进线柜", "电容柜", "发电机", "生活水泵"],
        data: [],
        maxdata: [100, 100, 100, 100, 100]
      };

      //所有设备
      this.allTool = {
        //消防栓
        firleList: [
          {
            id: "fire_A_1",
            //name: "1号消防栓",
            type: "fire",
            status: "0", //0正常  1异常   2 维修
            address: "待接入",
            active: "1",
            No: "ZHF-XF-XHS-001", //设备编号
            name: "消防栓", //设备名称
            format: "xxx", //规格
            position: "天籁城紫园24栋", //安装位置
            factoryOwner: "上海永大电梯设备公司", //厂商
            useYears: "十年", //使用年限
            warranty: "2017年6月6日", //质保到期
            maintenanceUnit: "重庆天智慧启", //维保单位
            nextMaintenance: "2015年5月" //下次维保时间
          }
        ],
        //变配电
        powerList: [
          {
            id: "power_A_1",
            //name: "1号变配电",
            status: "0", //0正常  1异常   2 维修
            address: "待接入",
            active: "0",
            type: "power",
            No: "ZHF-XF-XHS-001", //设备编号
            name: "变配电", //设备名称
            format: "xxx", //规格
            position: "天籁城紫园24栋", //安装位置
            factoryOwner: "上海永大电梯设备公司", //厂商
            useYears: "十年", //使用年限
            warranty: "2017年6月6日", //质保到期
            maintenanceUnit: "重庆天智慧启", //维保单位
            nextMaintenance: "2015年5月" //下次维保时间
          }
        ],
        //排水
        drainageList: [
          {
            id: "drainage_A_1",
            //name: "1号排水",
            status: "0", //0正常  1异常   2 维修
            address: "待接入",
            active: "0",
            type: "drainage",
            No: "ZHF-XF-XHS-001", //设备编号
            name: "排水", //设备名称
            format: "xxx", //规格
            position: "天籁城紫园24栋", //安装位置
            factoryOwner: "上海永大电梯设备公司", //厂商
            useYears: "十年", //使用年限
            warranty: "2017年6月6日", //质保到期
            maintenanceUnit: "重庆天智慧启", //维保单位
            nextMaintenance: "2015年5月" //下次维保时间
          }
        ],
        //电梯
        elevatorList: [
          {
            id: "elevator_A_1",
            //name: "1号电梯",
            status: "0", //0正常  1异常   2 维修
            address: "待接入",
            active: "0",
            type: "elevator",
            No: "ZHF-XF-XHS-001", //设备编号
            name: "电梯", //设备名称
            format: "xxx", //规格
            position: "天籁城紫园24栋", //安装位置
            factoryOwner: "上海永大电梯设备公司", //厂商
            useYears: "十年", //使用年限
            warranty: "2017年6月6日", //质保到期
            maintenanceUnit: "重庆天智慧启", //维保单位
            nextMaintenance: "2015年5月" //下次维保时间
          }
        ],
        //门禁/道闸
        wayBrakeList: [
          {
            id: "wayBrake_A_1",
            //name: "1号门禁",
            status: "0", //0正常  1异常   2 维修
            address: "待接入",
            active: "0",
            type: "wayBrake",
            No: "ZHF-XF-XHS-001", //设备编号
            name: "门禁/道闸", //设备名称
            format: "xxx", //规格
            position: "天籁城紫园24栋", //安装位置
            factoryOwner: "上海永大电梯设备公司", //厂商
            useYears: "十年", //使用年限
            warranty: "2017年6月6日", //质保到期
            maintenanceUnit: "重庆天智慧启", //维保单位
            nextMaintenance: "2015年5月" //下次维保时间
          }
        ],
        //电子围栏
        fenceList: [
          {
            id: "fence_A_1",
            //name: "1号消防栓",
            status: "0", //0正常  1异常   2 维修
            address: "待接入",
            active: "0",
            type: "fence",
            No: "ZHF-XF-XHS-001", //设备编号
            name: "电子围栏", //设备名称
            format: "xxx", //规格
            position: "天籁城紫园24栋", //安装位置
            factoryOwner: "上海永大电梯设备公司", //厂商
            useYears: "十年", //使用年限
            warranty: "2017年6月6日", //质保到期
            maintenanceUnit: "重庆天智慧启", //维保单位
            nextMaintenance: "2015年5月" //下次维保时间
          }
        ]
      };

      this.detailedInfo = {
        name: "--",
        No: "--",
        position: "",
        factoryOwner: "",
        maintenanceUnit: "",
        format: "",
        warranty: ""
      };
    }
  }
};
</script>

<style>
.module-left {
  width: 14.8%;
  float: left;
  padding-top: 20px;
}

.module-center {
  width: 41.3%;
  float: left;
  padding-top: 100px;
}

.module-right {
  width: 39.3%;
  float: left;
  padding-top: 100px;
  overflow: hidden;
}

.icon-xungeng-abnormal {
  background: url("../../assets/icon/xungengGroup.png") no-repeat;
}

/* 智能门弹窗样式 */
.zhinneng-box {
  width: 938px;
  height: 631px;
  background: url("../../assets/thmz/zhineng-box.png") no-repeat center;
  background-size: 100%;
  animation: zhineng-panel 1s linear 1;
}

.zhineng-centent {
  top: 105px;
  left: 55px;
}

.zhineng {
  width: 826px;
  height: 433px;
}

/* 监控弹窗样式 */
.jiankong-box {
  width: 686px;
  height: 591px;
  background: url("../../assets/thmz/jiankong-box.png") no-repeat center;
  background-size: 100%;
  animation: jiankong-panel 1s linear 1;
}

.jiankong-centent{
  left: 57px;
  top: 96px;
}

@keyframes zhineng-panel {
  0% {
    opacity: 0;
    transform: scale3d(0, 0, 0);
    left: -900px;
    top: -300px;
  }

  100% {
    transform: scale3d(1, 1, 1);
    opacity: 1;
    left: 0;
    top: 0;
  }
}

@keyframes jiankong-panel {
  0% {
    opacity: 0;
    transform: scale3d(0, 0, 0);
    right: -600px;
    top: -300px;
  }

  100% {
    transform: scale3d(1, 1, 1);
    opacity: 1;
    right: 0;
    top: 0;
  }
}
</style>
