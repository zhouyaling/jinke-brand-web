
<template>
     <div class="M-left fl">
            <!--线上满意度-->
            <div class="M-baos fl cl">
                <h2 class="M-Bar">
                    <span class="M-BarTxt">线上满意度</span>
                </h2>
                <div class="M-satisfied">
                    <div class="satisfied-card satisfied-card1">
                        <div class="card-left">
                            <img class="card-img" src="../../assets/yzfw/circle2.png">
                            <div class="card-number" id="satisfied-number1">01</div>
                        </div>
                        <div class="card-right" id="satisfied-name1">{{satisfied1}}</div>
                    </div>
                    <div class="satisfied-card satisfied-card2">
                        <div class="card-left">
                            <img class="card-img" src="../../assets/yzfw/circle2.png">
                            <div class="card-number" id="satisfied-number1">02</div>
                        </div>
                        <div class="card-right" id="satisfied-name2">{{satisfied2}}</div>
                    </div>
                    <div class="satisfied-card satisfied-card3">
                        <div class="card-left">
                            <img class="card-img" src="../../assets/yzfw/circle2.png">
                            <div class="card-number" id="satisfied-number1">03</div>
                        </div>
                        <div class="card-right" id="satisfied-name3">{{satisfied3}}</div>
                    </div>
                    <div class="satisfied-card satisfied-card4">
                        <div class="card-left">
                            <img class="card-img" src="../../assets/yzfw/circle2.png">
                            <div class="card-number" id="satisfied-number1">04</div>
                        </div>
                        <div class="card-right" id="satisfied-name4">{{satisfied4}}</div>
                    </div>
                    <div class="satisfied-card satisfied-card5">
                        <div class="card-left">
                            <img class="card-img" src="../../assets/yzfw/circle2.png">
                            <div class="card-number" id="satisfied-number1">05</div>
                        </div>
                        <div class="card-right" id="satisfied-name5">{{satisfied5}}</div>
                    </div>
                </div>
            </div>
            <!--活动排名 -->
            <div class="M-ranking fl">
                <h2 class="M-Bar"><span class="M-BarTxt">活动排名（TOP5）</span></h2>
                <table class="M-table" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td></td>
                        <td class="tq-fontsize-14">浏览量（PV）</td>
                        <td class="tq-fontsize-14">用户数（UV）</td>
                        <td class="tq-fontsize-14">点击率</td>
                        <td class="tq-fontsize-14">历史趋势</td>
                    </tr>
                    <tr v-for = "(item,index) in topData" v-bind:key = "index">
                        <td class="tq-fontsize-14">{{item.name}}</td>
                        <td class="tq-color-orange1"><v-countup :start-value="0" :end-value = "item.pv"></v-countup></td>
                        <td><v-countup :start-value="0" :end-value = "item.uv"></v-countup></td>
                        <td class="tq-color-orange1"><v-countup :start-value="0" :end-value = "item.outRate"></v-countup>%</td>
                        <td><img class="cimg" src="../../assets/yzfw/linex2.png" width="66" height="12" alt="" /></td>
                    </tr>
                </table>
            </div>
        </div>
</template>

<script>
import { satisfiedData } from "../../basic-data/basic";

export default {
  name: "LeftPart",
  components: {},
  data() {
    return {
      topData: Array, // 活动排名top数据
      satisfied1: "", // 满意度数据
      satisfied2: "",
      satisfied3: "",
      satisfied4: "",
      satisfied5: ""
    };
  },
  mounted() {
    // 加载满意度数据
    this.loadSatisfiedData();

    // 加载活动排名Top5数据
    this.loadTop5Data();
  },
  methods: {
    add() {
      // Emit the server side
      this.$socket.emit("add", { a: 5, b: 3 });
    },
    // 加载满意度数据
    loadSatisfiedData() {
      this.satisfied1 = satisfiedData[0].name;
      this.satisfied2 = satisfiedData[1].name;
      this.satisfied3 = satisfiedData[2].name;
      this.satisfied4 = satisfiedData[3].name;
      this.satisfied5 = satisfiedData[4].name;
    },

    // 加载活动排名TOP5
    loadTop5Data() {
      var _this = this;
      this.$axios({
        method: "post",
        url:
          "https://api-development.tq-service.com/v2/tqapp/platformData/data/getActivityRankingJson"
      })
        .then(function(msg) {
          if (msg.data.status.status_code == 0) {
            // console.log(msg.data.data);
            _this.topData = msg.data.data;
          }
        })
        .catch(resp => {
          console.log("请求失败：" + resp.status + "," + resp.statusText);
        });
    },

    // 测试
    goTest() {
      this.$router.push({ path: "/thmz" });
    }
  },
  socket: {
    events: {
      changed(msg) {
        console.log("Something changed: " + msg);
      }
    }
  }
};
</script>

<style scoped>
.module {
  width: 100%;
  padding-left: 15px;
  padding-top: 48px;
}
</style>
