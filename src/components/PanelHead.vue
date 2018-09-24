<!-- 标题样式组件 -->
<template>
     <div class="panel-head" v-bind:style = "{ top: activeTop + 'px', left: activeLeft + 'px' }">
            <p class="panel-title">{{title}}<span class="panel-sub">{{sub}}</span></p>
        </div>
</template>

<script>
export default {
  name: "PanelHead",
  props: {
    title: String,
    sub: String,
    activeTop:Number,
    activeLeft:Number
  }
};
</script>

<style scoped>
.panel-head {
  position: absolute;
}

.panel-title {
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #c0a17b;
  letter-spacing: 1px;
  text-align: left;
}

.panel-sub {
  font-size: 11px;
  letter-spacing: 0.3px;
  text-align: left;
  display: inline-block;
  transform: scale3d(0.85,0.9,1);
}
</style>

