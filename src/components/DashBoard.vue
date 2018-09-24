<template>
    <div ref="chart" style=" position: relative;display: inline-block;vertical-align: bottom; margin-right:15px;">
        <img style="width: 100%;height: auto;" src="../assets/icon/watch_background_big.png">
        <div class="watch-background-pointer" ref="pointer" >
        </div>
    </div>
</template>
<script>
export default {
  name: "DashBoard",
  props: {
    info: {
      type: Number,
      default: 0
    },
    size: {
      type: Object,
      default: function() {
        return {
          width: 60,
          height: 30
        };
      }
    }
  },
  computed: {
    newData() {
      return parseInt(this.info * 1.8);
    },
    width() {
      return this.size.width + "px";
    },
    height() {
      return this.size.height + "px";
    },
    pointerWidth() {
      return parseInt(this.size.width / 2 * 0.8) + "px";
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setChart();
    });
  },
  watch: {
    newData: function() {
      this.setChart();
    }
  },
  methods: {
    setChart() {
      let dom = this.$refs.chart;
      let pointer = this.$refs.pointer;
      dom.style.width = this.width;
      dom.style.height = this.height;
      pointer.style.width = this.pointerWidth;

      pointer.style.transform = "rotate(" + this.newData + "deg)";
    }
  }
};
</script>

<style>
.watch-background-pointer {
    bottom: 0;
    position: absolute !important;
    height: 2px;
    background-color: white;
    position: absolute;
    margin-left: 10%;
    transform-origin: 100%;
}
</style>


