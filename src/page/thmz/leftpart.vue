<template>
    <div>
        <!-- 巡逻信息 -->
        <title-bar name="园区巡更系统"></title-bar>
         <div class="patrol-district5">
            巡更频次：{{parkPatrol.times}}<br>
            巡逻人数：{{parkPatrol.patrolNumber}}人<br>
            管理面积：{{parkPatrol.managementArea}}<br>
            服务业主：{{parkPatrol.ownersNumber}}人<br>
        </div>
        <!-- 接房信息 -->
        <div class="card-box">
            <div class="card-head">
               <ul>
                  <li>接房率  {{toRoom.housingRate}}</li>
                  <li>装修率  {{toRoom.decorationRate}}</li>
               </ul>
            </div>
            <div class="card-content">
              <ul>
                <li class="house-progress">
                      <p><span>高层</span> <span>{{toRoom.towerCount }}套</span></p>
                      <progress value="19" max="100"></progress>
                      <p class="tq-fontsize-14">入住率&emsp;{{toRoom.towerOccupancyRate }}</p>
                </li>
                <li class="house-progress">
                      <p><span>洋房</span> <span>{{toRoom.bungalowCount }}套</span></p>
                      <progress value="0" max="100"></progress>
                      <p class="tq-fontsize-14">入住率&emsp;{{toRoom.bungalowOccupancyRate }}</p>
                </li>
                <li class="house-progress">
                      <p><span>别墅</span> <span>{{toRoom.villaCount }}套</span></p>
                      <progress value="0" max="100"></progress>
                      <p class="tq-fontsize-14">入住率&emsp;{{toRoom.villaOccupancyRate }}</p>
                </li>
                <li class="house-progress">
                      <p><span>商业</span> <span>{{toRoom.tradeCount }}套</span></p>
                      <progress value="0" max="100"></progress>
                      <p class="tq-fontsize-14">入住率&emsp;{{toRoom.tradeOccupancyRate }}</p>
                </li>
              </ul>
            </div>
        </div>
        <!-- 车位信息 -->
        <div class="card-box tq-margintop-20">
            <div class="card-head">
              <p class="card-title-txt">车位使用率  {{parkingSpaces.parkingSpaceRate}}</p>
            </div>
            <div class="card-content">
              <div class="parking-sell-scan">
                <parking-circle
                        :size='{width:337,height:190}'
                        :info='{data1: parkingSpaces.sold,data2: parkingSpaces.notSale,title: ["已出售", "未出售"]}'
                        :unit='"个"'
                ></parking-circle>
                <div class="crile-small-w">
                    {{parkingSpaces.parkingSpaceCount}}个
                    <br>
                    总车位
                </div>
            </div>
            <div class="parking-data">
                <div>
                    <p>已售</p>
                    <div>
                        <p>自用</p>
                        <p>出售</p>
                    </div>
                    <div>
                        <p>{{parkingSpaces.soldSelfUse}}</p>
                        <p>{{parkingSpaces.soldSell}}</p>
                    </div>
                </div>
                <div style="margin-left: 10px;">
                    <p>未售</p>
                    <div>
                        <p>出租</p>
                        <p>空置</p>
                    </div>
                    <div>
                        <p> {{parkingSpaces.notSaleRent}}</p>
                        <p>{{parkingSpaces.notSaleVacant}}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
</template>

<script>
import TitleBar from "../../components/TitleBar";
import ParkingCircle from "../../components/ParkingCircle";

export default {
  name: "LeftPart",
  components: {
    TitleBar,
    ParkingCircle
  },
  props: {},
  data() {
    return {
      parkPatrol: Object, // 车位信息
      toRoom: Object, // 房屋信息
      parkingSpaces: Object
      // parkPatrol: this.parkPatrol
    };
  },
  mounted() {
    this.getpParkingInfo();
    this.getProjectHouse();
  },
  methods: {
    // 获取车位信息
    getpParkingInfo() {
      var _this = this;
      this.$axios({
        method: "post",
        url: this.$baseUrl + "/api/project/parkingInfo",
        params: {
          projectId: "05da4de2-121a-41f5-b728-30a96f0900fe"
        }
      })
        .then(function(result) {
          if (result.status == 200) {
            _this.parkingSpaces = result.data;
          }
        })
        .catch(resp => {
          console.log("请求失败：" + resp.status + "," + resp.statusText);
        });
    },

    // 获取接房信息
    getProjectHouse() {
      var _this = this;
      this.$axios({
        method: "post",
        url: this.$baseUrl + "/api/project/projectHouse",
        params: {
          projectId: "05da4de2-121a-41f5-b728-30a96f0900fe"
        }
      })
        .then(function(result) {
          if (result.status == 200) {
            _this.toRoom = result.data;
          }
        })
        .catch(resp => {
          console.log("请求失败：" + resp.status + "," + resp.statusText);
        });
    }
  }
};
</script>

<style>
/* 巡逻信息样式 */

.patrol-district5 {
  margin: 28px 0 40px 0;
  width: 100%;
  height: 120px;
  line-height: 30px;
  padding-left: 35px;
  font-size: 14px;
  color: #ffffff;
}

/* 卡片样式 */

.card-box {
  width: 100%;
  background-image: linear-gradient(-180deg, #2e2d2a 0%, #1e1e1b 100%);
}

.card-head {
  height: 53px;
  background-color: #000;
  font-size: 14px;
  line-height: 53px;
}

.card-title-txt {
  padding-left: 20px;
}

.card-head li {
  list-style: none;
  float: left;
  width: 50%;
  text-align: center;
}

.card-content {
  position: relative;
  padding-bottom: 30px;
}

/* 房屋信息部分样式 */

.house-progress {
  margin-left: 20px;
  margin-right: 20px;
  height: 60px;
  margin-top: 26px;
}

.house-progress progress {
  display: inline-block;
  background: #3a342b;
  border: none;
  width: 100%;
  height: 12px;
  outline: none;
}

.house-progress > p:nth-of-type(1) {
  margin-top: 3px;
  height: 15px;
  line-height: 15px;
  font-size: 14px;
}

.house-progress > p:nth-of-type(2) {
  color: #9c9ea1;
}

.house-progress > p:nth-of-type(1) span:nth-of-type(2) {
  float: right;
}

.house-progress progress::-webkit-progress-bar {
  background: transparent;
}

.house-progress progress::-webkit-progress-value {
  background: #bd9769;
}

/* 车位部分样式 */
.crile-small-w {
  position: absolute;
  background-color: transparent;
  width: 100%;
  height: 190px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.parking-data {
  width: 100%;
  /* padding: 11px; */
  display: flex;
  justify-content: space-around;
}

.parking-data > div {
  float: left;
  /* width: 149px; */
  text-align: center;
  font-size: 12px;
}

.parking-data > div > p {
  width: 100%;
  height: 21px;
  background: #685237;
  line-height: 21px;
}

.parking-data > div > div:nth-of-type(1) > p {
  float: left;
  width: 72px;
  border: 1px solid #685237;
  border-top: none;
  height: 20px;
  line-height: 20px;
}

.parking-data > div > div:nth-of-type(2) > p {
  float: left;
  margin-top: 10px;
  width: 72px;
  border: 1px solid #685237;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
}

.parking-data > div > div:nth-of-type(1) > p:nth-of-type(2) {
  margin-left: 5px;
}

.parking-data > div > div:nth-of-type(2) > p:nth-of-type(2) {
  margin-left: 5px;
}
</style>


