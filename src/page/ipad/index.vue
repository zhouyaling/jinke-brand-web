<template>
    <div class="pad-container">
        <img class="page" src="../../assets/ipad_bk.png">
        <div class="menus">
            <div class="menu-item"  v-for="(item,index) in menuData" v-bind:key="index" @click= "selectMenu(item) " :class="item.isChoose ? 'choose':'' ">{{item.menuName}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "ipad",
  data: function() {
    return {
      menuData: [
        {
          menuName: "首页",
          isChoose: true,
          actionCode: "home",
          actionContent: "首页页面"
        },
        {
          menuName: "天湖美镇",
          isChoose: false,
          actionCode: "thmz",
          actionContent: "天湖美镇页面"
        },
        {
          menuName: "XXX",
          isChoose: false,
          actionCode: "xxx",
          actionContent: "项目页面"
        },
        {
          menuName: "业主服务",
          isChoose: false,
          actionCode: "yzfw",
          actionContent: "业主服务页面"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    // 切换菜单
    selectMenu(selected) {
      this.menuData.forEach(item => {
        if (item.menuName == selected.menuName) {
          item.isChoose = true;
        } else {
          item.isChoose = false;
        }
      });

      // 发送消息
      this.$websocket.send(
        JSON.stringify({
          wsId: this.$wsId,
          type: "isMessage",
          token: "ec6ef2e6d3608a6c1a15d",
          message: {
            messageToken: "ff119876678732a68eef4e6ffc0b1",
            messageType: "pc",
            messageContent: "",
            actionCode: selected.actionCode,
            actionContent: selected.actionContent
          }
        })
      );
    }
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
}

::-webkit-scrollbar {
  width: 2px;
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  z-index: 100;
}

.menus {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-around; /* flex-start */
  align-items: center;
  flex-wrap: wrap;
  padding: 5%;
   z-index: 101;
}

.show-title > div:nth-of-type(1) {
  min-height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 40px;
  color: #ffffff;
  letter-spacing: 1px;
}

.show-title > div:nth-of-type(1):after {
  display: block;
  content: "";
  width: 30%;
  height: 3px;
  background-color: white;
  margin: 10px auto 0 auto;
}

.show-title > div:nth-of-type(2) {
  margin-top: 10px;
  height: auto;
  line-height: 1.5;
  font-size: 22px;
  color: #ffffff;
  letter-spacing: 1px;
  text-indent: 2em;
}

.page-up-down {
  width: 80%;
  height: 10%;
  margin: 0 10%;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
}

.page-up-down div {
  display: flex;
  width: 30%;
  height: 100%;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 1px;
  border-radius: 10px;
  background: #909090;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.page-up-down div:nth-of-type(2) {
  background: #3783f2;
}

.menu-item {
  width: 20%;
  height: 15%;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden;
  background-color: #24292f;
  border-radius: 8px;
  margin: 0 6.6%;
}

.choose {
  border-left: 1rem solid #3783f2;
  background-color: rgba(255, 255, 255, 0.34);
  font-size: 20px;
  transition: all;
  color: rgba(255, 255, 255, 0.8);
  transition-duration: 0.5s;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.conspicuous {
  color: #ff5400;
}
</style>


