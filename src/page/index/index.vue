<template>
<div class = "layer-container">
    <!-- 边框样式 -->
     <div class="layer-frame">
      </div>
      <div class="layer-back">
      </div>
      <!-- 内容区域 -->
      <div class="layer-wrap wrap-scale">
          <div class="header" id="demo">
          <div class="icons">
            <div>
               <img src="../../assets/head2.png" alt="">
            </div>
            <ul class="line-group">
                 <li class="line1">
                   <img src="../../assets/index/line1.png" alt="">
                 </li>
                  <li class="line2">
                   <img src="../../assets/index/line2.png" alt="">
                 </li>
                  <li class="line3">
                   <img src="../../assets/index/line3.png" alt="">
                 </li>
                  <li class="line4">
                   <img src="../../assets/index/line4.png" alt="">
                 </li>
            </ul>
            <ul class="icon-group">
                 <li class="circle-box circle1">
                   <img  class="circle-a circle-big" src="../../assets/index/circle-a.png" alt="">
                   <img  class="circle-b" src="../../assets/index/circle-b.png" alt="">
                   <img  class="circle-c circle-a-rotate" src="../../assets/index/circle-c.png" alt="">
                   <img  class="circle-d" src="../../assets/index/circle-d.png" alt="">
                   <img  class="circle-e circle-a-rotate" src="../../assets/index/circle-e.png" alt="">
                   <img  class="circle-1" src="../../assets/index/circle-1.png" alt="">
                 </li>
                 <li class="circle-box circle2">
                   <img  class="circle-a circle-big" src="../../assets/index/circle-a.png" alt="">
                   <img  class="circle-b" src="../../assets/index/circle-b.png" alt="">
                   <img  class="circle-c circle-a-rotate" src="../../assets/index/circle-c.png" alt="">
                   <img  class="circle-d" src="../../assets/index/circle-d.png" alt="">
                   <img  class="circle-e circle-a-rotate" src="../../assets/index/circle-e.png" alt="">
                   <img  class="circle-2" src="../../assets/index/circle-2.png" alt="">
                 </li>
                  <li class="circle-box circle3">
                   <img  class="circle-a circle-big" src="../../assets/index/circle-a.png" alt="">
                   <img  class="circle-b" src="../../assets/index/circle-b.png" alt="">
                   <img  class="circle-c circle-b-rotate" src="../../assets/index/circle-c.png" alt="">
                   <img  class="circle-d" src="../../assets/index/circle-d.png" alt="">
                   <img  class="circle-e circle-b-rotate" src="../../assets/index/circle-e.png" alt="">
                   <img  class="circle-3" src="../../assets/index/circle-3.png" alt="">
                 </li>
                  <li class="circle-box circle4">
                   <img  class="circle-a circle-big" src="../../assets/index/circle-a.png" alt="">
                   <img  class="circle-b" src="../../assets/index/circle-b.png" alt="">
                   <img  class="circle-c circle-b-rotate" src="../../assets/index/circle-c.png" alt="">
                   <img  class="circle-d" src="../../assets/index/circle-d.png" alt="">
                   <img  class="circle-e circle-b-rotate" src="../../assets/index/circle-e.png" alt="">
                   <img  class="circle-4" src="../../assets/index/circle-4.png" alt="">
                 </li>
            </ul>
          </div>
          <canvas id="canvas"></canvas>
        </div>
      </div>
     
  </div>
</template>

<script>
export default {
  name: "index",
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
  background-color: #ffffff !important; /* #110b04; */
  position: relative;
  transform: scale3d(1.014, 1.014, 1);
  /*margin-left: -173px; */
}

.header canvas {
  width: 100%;
  height: 100% /*默认全屏显示 可自己设置高度640px*/;
  display: inline-block;
  vertical-align: baseline;
  /*position:absolute;*/
  z-index: -1;
}

.icons {
  width: 1400px;
  height: 700px;
  background-size: 100%;
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
}

/* 产生动画（向外扩散变大）的圆圈  */
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

.mengban {
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(35, 35, 35, 0.1);
  z-index: 1;
}

.line1 {
  position: absolute;
  top: 15%;
  right: 18%;
  -webkit-animation: line-a 2s;
  animation: line-a 2s;
}

.line2 {
  position: absolute;
  bottom: 15%;
  right: 18%;
  -webkit-animation: line-a 2s;
  animation: line-a 2s;
}

.line3 {
  position: absolute;
  bottom: 15%;
  left: 18%;
  -webkit-animation: line-b 2s;
  animation: line-b 2s;
}

.line4 {
  position: absolute;
  top: 15%;
  left: 18%;
  -webkit-animation: line-b 2s;
  animation: line-b 2s;
}

.line-group img {
  width: 218px;
  height: 66px;
}

.icon-group img {
}

.circle-box {
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.circle-box img {
  position: absolute;
}

.circle1 {
  right: 4%;
  top: 2%;
}

.circle2 {
  right: 4%;
  bottom: 2%;
}

.circle3 {
  left: 4%;
  top: 2%;
}

.circle4 {
  left: 4%;
  bottom: 2%;
 
}

.circle-a-rotate{
 animation: circle-a 7s linear infinite;
}


.circle-b-rotate{
 animation: circle-b 7s linear infinite;
}

.circle-big{
  animation: circle-c 2s linear infinite alternate;
}

@keyframes line-a {
  0% {
    right: 18%;
    opacity: 0;
  }

  100% {
    right: 18%;
    opacity: 1;
  }
}

@keyframes line-b {
  0% {
    left: 18%;
    opacity: 0;
  }

  100% {
    left: 18%;
    opacity: 1;
  }
}

@keyframes circle-a {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@keyframes circle-b {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@keyframes circle-c {
  0% {
   transform: scale3d(1,1,1);
  }

  100% {
     transform: scale3d(1.12,1.12,1.12);
  }
}
</style>

