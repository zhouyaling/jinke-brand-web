
<template>
    <!-- 中间区域 -->
        <div class="M-center">
            <!-- 地图底部颜色 -->
            <div class="M-backdrop"></div>
            <div class="M-container">
                <ul class="Z-map" id='map'>
                    <li v-for="(point,index) in pointList" v-bind:class = "point.className" v-bind:key = "index">
                        <span v-bind:class = "point.isActive ? 'Z-SFon': '' ">
                          <p class="number" v-bind:class = "point.isActive ? 'active': ''" >
                            <span class="user"></span>{{point.provinceTotal}}
                          </p>
                          <p class="Z-p2">
                            <span v-if = "point.isActive"><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></span>
                            <span v-else class="address"></span>

                          </p>
                        <span>{{point.province}}</span>
                        </span>
                    </li>
                </ul>
                <div class="Z-sum">
                    <p><img src="../../assets/yzfw/total_icon.png" alt="" />总数<span ref="total" >{{total}}</span></p>
                    <p><img style="margin-right:22px!important;" src="../../assets/yzfw/provice_icon.png" alt="" />省份数<span ref="province">{{province}}</span></p>
                    <p><img src="../../assets/yzfw/city_icon.png" alt="" />城市数<span ref="city">{{city}}</span></p>
                </div>
            </div>
        </div>
</template>

<script>
//import $ from "jquery";
import { provinceData } from "../../basic-data/basic";
export default {
  name: "CenterPart",
  data() {
    return {
      timer: Object,
      alength: Number,
      total: String, // 总数
      province: String, // 省份数
      city: String, // 城市数
      html: String,
      pointList: Array //地图上的点
    };
  },
  mounted() {
    // 加载地图数据
    this.loadMapData();

    // 隔5s加载一次地图焦点数据
    this.loadCurrentPoint();
  },
  methods: {
    // 获取地图数据
    loadMapData() {
      var _this = this;
      this.$axios({
        method: "post",
        url:
          "https://api-development.tq-service.com/v2/tqapp/platformData/data/getUserTotalAreaJson"
      })
        .then(function(msg) {
          if (msg.data.status.status_code == 0) {
            var data = msg.data.data;
            _this.total = data.user_total[0].total;
            _this.province = data.user_total[0].province;
            _this.city = data.user_total[0].city;

            // console.log(provinceData);
            const areas = data.user_total_area;
            var arr = [];
            var mark = true;
            areas.forEach(item => {
              provinceData.forEach(pro => {
                if (pro.province == item.province) {
                  arr.push({
                    className: pro.className,
                    provinceTotal: item.provinceTotal,
                    province: pro.province,
                    isActive: mark
                  });
                  mark = false;
                }
              });
            });
            _this.pointList = arr;
          }
        })
        .catch(resp => {
          console.log("请求失败：" + resp.status + "," + resp.statusText);
        });
    },

    // 切换焦点数据
    loadCurrentPoint() {
      var _this = this;
      var mapNum = 0;
      _this.timer = setInterval(function() {
        for (let i = 0; i < _this.pointList.length; i++) {
          if (mapNum + 1 == _this.pointList.length) {
            // console.log("element-end:" + i);
            _this.pointList[mapNum].isActive = false;
            _this.pointList[0].isActive = true;
            mapNum = 0;
            break;
          } else if (i == mapNum + 1) {
            // console.log("element:" + i);
            _this.pointList[i - 1].isActive = false;
            _this.pointList[i].isActive = true;
            mapNum = i;
            break;
          }
        }
      }, 10000);
    }
  }
};
</script>

<style>
</style>

