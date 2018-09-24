<template>
    <div class="app-container">
      <!-- 页面部分 -->
     <div class="container">
        
          <router-view></router-view>
     <!-- 动画图层部分 -->
      <div class = "animate">
       <div class="animate-box">
         <img class="xiaojin" src="./assets/animate/xiaojin.gif" alt="小金gif">
       </div>
      </div>
      <!-- 背景音乐 -->
          <div class="back-music">
            <audio v-bind:src = "backAudio" id="audio"></audio>
          </div>
      </div>
    </div>
</template>
<script>
import { audioText } from "./basic-data/basic.js";

export default {
  name: "app",
  components: {},
  data() {
    return {
      backAudio: String, // 语音信息
      hideLayer: true, // 是否隐藏xj
      secssionId: 0,
      mark: false
    };
  },
  mounted() {
    // websocket连接
    this.initWebpack();
  },
  updated() {
    console.log("App.vue update");
    
    //setTimeout(, 5000);

    // 判断是否为操作端
    if (this.$route.path == "/ipad") {
      this.hideLayer = true;
    } else if (this.$route.path == "/home" || this.$route.path == "/") {
      this.hideLayer = true;
      //this.playVideo();
    } else {
      this.hideLayer = false;
    }

    this.playAudio();
  },
  methods: {
    // 初始化
    initWebpack() {
      this.$websocket.onopen = this.websocketopen;
      this.$websocket.onmessage = this.websocketonmessage;
      this.$websocket.onclose = this.websocketclose;
      this.$websocket.onerror = this.websocketerror;
    },

    //打开连接
    websocketopen() {
      this.$websocket.send(
        JSON.stringify({
          wsId: "",
          type: "isConnect",
          token: "",
          message: {
            messageToken: "",
            messageType: "",
            messageContent: "",
            actionCode: "",
            actionContent: ""
          }
        })
      );
    },

    //数据接收
    websocketonmessage(e) {
      if (!this.mark) {
        this.$wsId = e.data;

        // pc注册
        this.$websocket.send(
          JSON.stringify({
            wsId: this.$wsId,
            type: "isRegister",
            token: "ec6ef2e6d3608a6c1a15d",
            message: {
              messageToken: "",
              messageType: "pc",
              messageContent: "",
              actionCode: "",
              actionContent: ""
            }
          })
        );
      }

      if (this.$route.path == "/ipad") {
        console.log("当前在操作端页面:" + e.data);
      } else {
        if (this.mark) {
          let result = JSON.parse(e.data);
          const code = result.actionCode ? result.actionCode : "";
          if (code) {
            if (code == "thmz") {
              this.getAudio(audioText.textB);
            } else if (code == "yzfw") {
              this.getAudio(audioText.textC);
            } else if (code == "index") {
              this.getAudio(audioText.textA);
            }

            this.$router.push({ path: `/${code}` });
          } else {
            var curr = this.$route.path;
            if (curr == "/thmz") {
              this.getAudio(audioText.textB);
            } else if (curr == "/yzfw") {
              this.getAudio(audioText.textC);
            }
          }
        }
        console.log("当前在显示端页面收到信息:" + e.data);
      }

      if (!this.mark) {
        this.mark = true;
      }
    },

    //关闭
    websocketclose() {
      console.log("WebSocket连接关闭");
    },

    //失败
    websocketerror() {
      console.log("WebSocket连接失败");
    },

    // 播放音频
    playAudio() {
      if (this.$route.path == "/ipad") {
        return;
      }
      var audio = document.getElementById("audio");
      if (audio !== null) {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    },

    // 获取音频
    getAudio(text) {
      var _this = this;
      this.$axios({
        method: "post",
        url: this.$baseUrl + "/api/tts/baidu",
        params: {
          text: text,
          per: 4,
          spd: 4.3,
          pid: 9
        }
      })
        .then(function(result) {
          if (result.status == 200) {
            _this.backAudio = "data:audio/wav;base64," + result.data.data;
          }
        })
        .catch(resp => {
          console.log("请求失败：" + resp.status + "," + resp.statusText);
        });
    },

    // 播放视频
    playVideo() {
      if (this.$route.path != "/home" && this.$route.path != "/") {
        return;
      }
      var v = document.getElementById("video");
      if (v !== null) {
        if (v.paused) {
          v.play();
        } else {
          v.pause();
        }
      }
    }
  }
};
</script>

<style scoped>
.back-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 2266px;
  height: 1080px;
  z-index: 1000;
  background: #000000;
}

.video-box {
  width: 100%;
  height: 100%;
}
</style>
