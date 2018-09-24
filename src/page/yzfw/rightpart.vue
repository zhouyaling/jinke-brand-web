
<template>
      <div class="M-right">
            <!-- 报事信息 -->
            <div>
                <h2 class="M-Bar2"><span class="M-BarTxt">报事</span> </h2>
                <div class="cl">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="M-stati cl">
                                    <div class="M-Dlist M-Dhover fl">
                                        <p>报事量</p>
                                        <p class="report-txt">{{reportData.baoshiNum}}</p>
                                        <p class="report-c1">
                                            <span id="weekPercent">周同比
                                                <img v-show= "reportData.zhoutongbi>0" src='../../assets/yzfw/d-gr.png' width='10' height='8' alt='' >
                                                <img  v-show= "reportData.zhoutongbi<0" src='../../assets/yzfw/d-red.png' width='10' height='8' alt='' >
                                               <span>{{reportData.zhoutongbi}}%</span>
                                            </span>
                                            <span style="padding-left:40px;"> 日环比 
                                                <img  v-show= "reportData.annularRatio>0" src='../../assets/yzfw/d-gr.png' width='10' height='8' alt=''>
                                                 <img  v-show= "reportData.annularRatio<0" src='../../assets/yzfw/d-gr.png' width='10' height='8' alt=''>
                                                 <span>{{reportData.annularRatio}}%</span>
                                            </span>
                                        </p>
                                        <p style="padding-top:6px;">日均报事 {{reportData.dailyReport}}</p>
                                    </div>

                                    <div class="M-Dlist fl">
                                        <p>处理量</p>
                                        <p class="report-txt">{{reportData.dealNum}}</p>
                                        <div class="music">
                                            <i v-for = "item in 18" v-bind:key= "item"></i>
                                        </div>
                                        <p class="report-c2"></p>
                                        <p style="padding-top:6px;">日均整改 {{reportData.dailyRectification}}</p>
                                    </div>

                                    <div class="M-Dlist fl">
                                        <p>完成量</p>
                                        <p class="report-txt" style="padding-bottom:12px;">{{reportData.finishNum}}</p>
                                        <div class="waveAnimation">
                                            <div class="waveBottom"></div>
                                        </div>
                                        <p class="report-c3"></p>
                                        <p style="padding-top:6px;">处理率 {{reportData.treatmentRate}}</p>
                                    </div>

                                    <div class="M-Dlist fl">
                                        <p>完结率</p>
                                        <p class="report-txt">{{reportData.finishPercent}}</p>
                                        <p class="report-c3">
                                            <span class="M-dk"><em style="width:60%;"></em></span>
                                        </p>
                                        <p class="report-c4">
                                            <span>周同比 {{reportData.completionWeekRate}}%</span>
                                            <span style="padding-left:20px;">日环比 {{reportData.completionDailyRate}}%</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 当月数据 设备运行警示 -->
            <div class="Z-EBA3T">
                <!--上部分-->
                <ul class="Z-E3List clearFix">
                    <li class="Z-EL3">
                        <h2 class="M-Bar3"><span class="M-BarTxt">当月数据</span></h2>
                        <div class="Z-EL3C">

                            <div class="Z-EL3F">
                                <span><i id="monthPercent">98</i>%</span>
                                <em>完好率</em>
                            </div>
                        </div>
                        <div class="Z-EL3C1">
                            <p style="margin-top:-26px;"><span id="monthDevice">444</span><i>设备设施数</i></p>
                            <p style="margin-top:30px;"><span id="monthPerfect">222</span><i>完好数</i></p>
                            <i class="Z-img1"></i>
                            <i class="Z-img2"></i>
                        </div>
                    </li>
                    <li class="Z-EL1">
                        <h2 class="M-Bar3"><span class="M-BarTxt">设备运行警示</span> </h2>
                        <div class="hexagon-group">
                            <div class="hexagon">
                                <div class="hexagon-txt">
                                    <v-countup :start-value="0" :end-value="21"></v-countup>
                                    <em>消防漏水</em>
                                </div>
                            </div>
                            <div class="hexagon">
                                <div class="hexagon-txt">
                                    <v-countup :start-value="0" :end-value="2"></v-countup>
                                    <em>电梯困人</em>
                                </div>
                            </div>
                            <div class="hexagon">
                                <div class="hexagon-txt">
                                    <v-countup :start-value="0" :end-value="2"></v-countup>
                                    <em>房间漏水</em>
                                </div>
                            </div>
                        </div>
                    </li>


                </ul>
                <!--下部分-->
                <ul class="Z-E3List2 clearFix">
                    <li>
                        <p class="Z-top">紧急告警台数</p>
                        <p class="Z-bottom"><v-countup :start-value="0" :end-value="2"></v-countup>台</p>
                    </li>
                    <li>
                        <p class="Z-top">紧急告警次数</p>
                        <p class="Z-bottom"><v-countup :start-value="0" :end-value="55"></v-countup>次</p>
                    </li>
                    <li>
                        <p class="Z-top">告警平均处理时长</p>
                        <p class="Z-bottom"><v-countup :start-value="0" :end-value="0.33" :decimals = "2"></v-countup>小时</p>
                    </li>
                </ul>
            </div>

        </div>

</template>

<script>
import $ from "jquery";

export default {
  name: "RightPart",
  data() {
    return {
      reportData: Object // 报事数据
    };
  },
  mounted() {
    // 加载报事数据
    this.loadReportData();

    // 加载动画
    this.loadAnimate();
    this.loadLightAnimate();
  },
  methods: {
    //加载报事数据
    loadReportData() {
      let _this = this;
      this.$axios({
        method: "post",
        url:
          "http://dev-oa-api.tq-service.com/bigDataInterface/reportStatistics",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        data: { token: "a1b2958086547c1c26309s8fd74155a5d11" }
      })
        .then(function(msg) {
          const mark = msg.data.status.status_code;
          // var result = msg.data.data;
          if (mark) {
            _this.reportData = {
              baoshiNum: 11, // 报事 result[0].baoshiNum;
              dealNum: 2, // 处理量  result[0].processingNum;
              finishNum: 43, // 完结量 result[0].finishNum;
              finishPercent: 25, // 完结率 result[0].completionRate;
              zhoutongbi: 2, //  周同比 data[0].zhoutongbi
              annularRatio: 3, // 日环比
              dailyReport: 1, // 日均报事
              dailyRectification: 2, // 日均整改
              treatmentRate: 1, // 处理率
              completionWeekRate: 1, // 周同比
              completionDailyRate: 11 // 日环比
            };
          }
        })
        .catch(resp => {
          console.log("请求失败：" + resp.status + "," + resp.statusText);
        });
    },

    // 加载动画
    loadAnimate() {
      $(".Z-EL3C1").animate(
        {
          height: "136px"
        },
        "slow",
        function() {
          $(".Z-EL3C1 .Z-img1").animate(
            {
              width: "13px"
            },
            "slow",
            function() {
              $(".Z-EL3C1 .Z-img2").animate(
                {
                  width: "13px"
                },
                "slow"
              );
              $(".Z-EL3C1 p").animate(
                {
                  opacity: "1"
                },
                "slow"
              );
            }
          );
        }
      );
    },

    // 加载报事高亮动画
    loadLightAnimate() {
      let xx = 0;
      setInterval(function() {
        if (xx == 4) {
          xx = 0;
          $(".swiper-container")
            .find(".M-Dlist")
            .removeClass("M-Dhover");
          $(".swiper-container")
            .find(".M-Dlist")
            .eq(0)
            .addClass("M-Dhover");
          xx++;
        } else {
          $(".swiper-container")
            .find(".M-Dlist")
            .removeClass("M-Dhover");

          $(".swiper-container")
            .find(".M-Dlist")
            .eq(xx)
            .addClass("M-Dhover");
          xx++;
        }
      }, 5000);
    }
  }
};
</script>

<style>
</style>

