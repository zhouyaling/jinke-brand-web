<!-- 标题样式组件 -->
<template>
    <div class="title-all" ref="chart"  > {{name}} <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: {
    name: ""
  }
};
</script>

<style scoped>
.title-all {
  position: relative;
  /* width: 400px; */
  height: 50px;
  line-height: 50px;
  background-color: transparent;
  padding-left: 25px;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #ddc09b;
  letter-spacing: 0.61px;
}

.title-all span:nth-of-type(1),
.title-all span:nth-of-type(2),
.title-all span:nth-of-type(3) {
  float: right;
  display: inline-block;
  width: 20px;
  height: 8px;
  margin: 21px 3px;
  vertical-align: middle;
}

.title-all span:nth-of-type(1) {
  background: #cfaf87;
  margin-right: 7px;
}

.title-all span:nth-of-type(2) {
  background: #bd9769;
}

.title-all span:nth-of-type(3) {
  background: #a27d4f;
}

.title-all span:nth-of-type(4) {
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 10px;
  height: 4px;
  background-color: #a27d4f;
  border-radius: 2px;
}

.title-all span:nth-of-type(5) {
  position: absolute;
  right: 0;
  bottom: -2px;
  width: 10px;
  height: 4px;
  background-color: #a27d4f;
  border-radius: 2px;
}

.title-all span:nth-of-type(6) {
  position: absolute;
  bottom: -1px;
  right: 20px;
  left: 20px;
  height: 2px;
  opacity: 0.75;
  background-color: #605240;
}

.title-all span:nth-of-type(7) {
  position: absolute;
  bottom: -1px;
  left: 19px;
  height: 2px;
  width: 2px;
  background-color: white;
}

.title-all span:nth-of-type(8) {
  position: absolute;
  bottom: -1px;
  right: 19px;
  height: 2px;
  width: 2px;
  background-color: white;
}
</style>


