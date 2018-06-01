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

// 原型链  可以将封装好的方法挂载在vue上
//Vue.prototype.method_name = function(argument){
	// body... 
// };
Vue.config.productionTip = false;

// 公共js
if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
	var version = parseFloat(RegExp.$1);
	if (version > 2.3) {
		var phoneScale = parseInt(window.screen.width) / 750;
		document.write('<meta name="viewport" content="width=750, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
	} else {
		document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
	}
} else {
	document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi,minimal-ui">');
}

// router.beforeEach(function (to, from, next) {  
//     const nextRoute = [ 'account', 'order', 'course'];  
//     // const auth = store.state.auth;  
//     //跳转至上述3个页面  
//     // if (nextRoute.indexOf(to.name) >= 0) {  
//     //     //未登录  
//     //     if (!store.state.auth.IsLogin) {  
//     //         vueRouter.push({name: 'login'})  
//     //     }  
//     // }  
//     // //已登录的情况再去登录页，跳转至首页  
//     // if (to.name === 'login') {  
//     //     if (auth.IsLogin) {  
//     //         vueRouter.push({name: 'home'});  
//     //     }  
//     // }  
//     console.log(to.name,from.name)
//     next();  
// });   
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})