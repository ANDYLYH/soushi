// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//great by andyli
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import vueResource from 'vue-resource'
// Vue.use(vueResource)
import $ from 'jquery'
import Swiper from 'swiper'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
