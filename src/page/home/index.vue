<template>
<div class = "layer-container">
      <div class="layer-wrap wrap-scale">
          <div class="header" id="demo">
          <div class="logo">
              <img src="../../assets/logo-top.png">
             <div class="sub-title">天湖美镇</div>
          </div>
          <canvas id="canvas"></canvas>
        </div>
      </div>
      <div class="back-video">
            <video class="video-box" autoplay >
            <source src="../../assets/video.mp4"  type="video/mp4">
            您的浏览器不支持 HTML5 video 标签。
          </video>
      </div> 
      <!-- 边框样式 -->
     <div class="layer-frame">
      </div>
      <div class="layer-back">
      </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      ctx: "",
      ctx2: "",
      count: 0,
      w: "",
      h: "",
      stars: [],
      maxStars: 1300,
      canvas: "",
      canvas2: ""
    };
  },
  created() {},
  mounted() {
    this.showStar();
    var _this = this;
  },
  updated(){
  },
  methods: {
    random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        var hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    maxOrbit(x, y) {
      var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
      //星星移动范围，值越大范围越小，
    },
    animation() {
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.globalAlpha = 0.9; //尾巴
      /* this.ctx.fillStyle = "hsla(" + this.hue + ", 64%, 6%, 2)"; */
      this.ctx.fillStyle = "hsla(" + 30 + ", 7%, 11%, 1)";
      this.ctx.fillRect(0, 0, this.w, this.h);

      this.ctx.globalCompositeOperation = "lighter";
      for (var i = 1, l = this.stars.length; i < l; i++) {
        this.stars[i].draw();
      }
      window.requestAnimationFrame(this.animation);
    },
    starItem() {
      this.orbitRadius = this.random(this.maxOrbit(this.w, this.h));
      this.radius = this.random(60, this.orbitRadius) / 8;
      //星星大小
      this.orbitX = this.w / 2;
      this.orbitY = this.h / 2;
      this.timePassed = this.random(0, this.maxStars);
      this.speed = this.random(this.orbitRadius) / 1000000;
      //星星移动速度
      this.alpha = this.random(2, 10) / 10;

      this.count++;
      this.stars[this.count] = this;
    },
    showStar() {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.w = this.canvas.width = window.innerWidth;
      this.h = this.canvas.height = window.innerHeight;
      this.hue = 217;
      this.stars = [];
      this.count = 0;
      this.maxStars = 1300; //星星数量

      this.canvas2 = document.createElement("canvas");
      this.ctx2 = this.canvas2.getContext("2d");
      this.canvas2.width = 100;
      this.canvas2.height = 100;
      var half = this.canvas2.width / 2;
      var gradient2 = this.ctx2.createRadialGradient(
        half,
        half,
        0,
        half,
        half,
        half
      );
      gradient2.addColorStop(0.025, "#503912");
      gradient2.addColorStop(0.1, "#211406");
      gradient2.addColorStop(0.25, "#170f03");
      gradient2.addColorStop(1, "transparent");

      this.ctx2.fillStyle = gradient2;
      this.ctx2.beginPath();
      this.ctx2.arc(half, half, half, 0, Math.PI * 2);
      this.ctx2.fill();

      // End cache

      var that = this;
      var Star = function() {
        this.orbitRadius = that.random(that.maxOrbit(that.w, that.h));
        this.radius = that.random(60, this.orbitRadius) / 8;
        //星星大小
        this.orbitX = that.w / 2;
        this.orbitY = that.h / 2;
        this.timePassed = that.random(0, that.maxStars);
        this.speed = that.random(this.orbitRadius) / 1000000;
        //星星移动速度
        this.alpha = that.random(2, 10) / 10;

        that.count++;
        that.stars[that.count] = this;
      };

      Star.prototype.draw = function() {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = that.random(10);

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }

        that.ctx.globalAlpha = this.alpha;
        that.ctx.drawImage(
          that.canvas2,
          x - this.radius / 2,
          y - this.radius / 2,
          this.radius,
          this.radius
        );
        this.timePassed += this.speed;
      };

      for (var i = 0; i < this.maxStars; i++) {
        new Star();
      }

      this.animation();
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 100%;
  background-color: #222222 !important; /* #110b04; */
  position: relative;
  /* transform: scale3d(0.849557, 1, 1);
  margin-left: -173px; */
}

.header canvas {
  width: 100%;
  height: 100% /*默认全屏显示 可自己设置高度640px*/;
  display: inline-block;
  vertical-align: baseline;
  /*position:absolute;*/
  z-index: -1;
}

.logo {
  width: 1128px;
  height: 550px;
  background-size: 100%;
  position: absolute;
  top: 300px;
  left: 50%;
  margin-left: -564px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
}

.logo img:nth-of-type(2) {
  width: 1000px;
}

.logo .sub-title {
  width: 689px;
  height: 123px;
  line-height: 123px;
  background: url(../../assets/logo-bottom.png) no-repeat center;
  background-size: 100%;
  font-family: PingFangSC-Medium;
  font-size: 54px;
  color: #fdffd8;
  letter-spacing: 3.68px;
  text-align: center;
}

.audio {
  /*设置音乐显示位置*/
  width: 45px;
  position: fixed;
  top: 65px;
  left: 94%;
  z-index: 100;
  filter: alpha(opacity=30);
  -moz-opacity: 0.3;
  -khtml-opacity: 0.3;
  opacity: 0.1;
  background: #503912;
}

/* 产生动画（向外扩散变大）的圆圈  */
.logo0 {
  width: 100px;
  height: 200px;
}

.logo img:nth-of-type(1) {
  animation: c1 3s ease-in-out 1;
}

.logo .sub-title:nth-of-type(1) {
  animation: c1 4s ease-in-out 1;
}

@keyframes c1 {
  0% {
    opacity: 0;
    transform: scale3d(0, 0, 0);
  }
  40% {
    opacity: 0;
    transform: scale3d(0, 0, 0);
  }
  50% {
    opacity: 0;
    transform: scale3d(0, 0, 0);
  }

  60% {
    transform: scale3d(0.33, 0.33, 0.33);
    opacity: 0;
  }

  100% {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
}

@keyframes c2 {
  0% {
    opacity: 0;
    transform: translate3d(1128px, 0, 50px);
  }

  59% {
    opacity: 0;
    transform: translate3d(1128px, 0, 50px);
  }

  60% {
    opacity: 0.5;
    transform: translate3d(1128px, 0, 50px);
  }

  89% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  92% {
    opacity: 1;
    transform: translate3d(50px, 0, 0);
  }
  95% {
    opacity: 1;
    transform: translate3d(0px, 0, 0);
  }
  97% {
    opacity: 1;
    transform: translate3d(18px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0px, 0, 0);
  }
}

.back-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 2266px;
  height: 1080px;
  z-index: 1000;
  background: #000000;
}

.video-box{
  width: 100%;
  height: 100%;
}
</style>

