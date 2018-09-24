import Vue from 'vue/dist/vue.js'
import Axios from 'axios'
import VueRouter from 'vue-router'
import VueCountUp from 'vue-countupjs'
import routes from './router/router'
import Echarts from 'echarts'
import './style/common.css'
import './style/swiper.min.css'

Vue.prototype.$echarts = Echarts
Vue.prototype.$axios = Axios
Vue.prototype.$websocket = new WebSocket("ws://101.201.122.196:18085/brand-api/websocket"); //ws://101.201.122.196:18085/brand-api/websocket"
Vue.prototype.$baseUrl = "http://brand.tq-service.com/brand-api1"
Vue.prototype.$wsId = ""

Vue.use(VueRouter)
Vue.use(VueCountUp)
const router = new VueRouter({
    routes
});
new Vue({
    router
}).$mount('#app')