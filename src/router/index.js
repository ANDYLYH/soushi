import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'//首页
import map from '@/components/map/index'//图库列表
import details from '@/components/map/detail'//图库详情
import photo from '@/components/photo/index'//拍照找石
import cashSale from '@/components/cashSale/index'//大板列表
import boutique from '@/components/boutique/index'//精品现货
import SaleDetails from '@/components/cashSale/detail'//大板，精品。背景墙详情
import persion from '@/components/persional/index'//个人中心
import persionSettings from '@/components/persional/persionSettings'//个人设置
import search from '@/components/map/search'//图库搜索
import wall from '@/components/wall/index'//背景墙列表
import sample from '@/components/sample/index'//样板商城列表
import sampleDetail  from '@/components/sample/detail'//样板详情
import shoppingCart  from '@/components/common/shoppingCart'//购物车
import login  from '@/components/login/index'//登录页
import register  from '@/components/register/index'//注册页
import protocal  from '@/components/register/protocal'//注册协议
import myOrder  from '@/components/myOrder/index'//我的订单列表
import orderDetails from '@/components/myOrder/orderDetails'//订单详情
import changePassword from '@/components/persional/changePassword'//修改密码
import personalMsg from '@/components/persional/personalMsg'//个人信息
import myDeliveryAddress from '@/components/persional/myDeliveryAddress'//收货地址

require("../plugins/jquery")
require("../plugins/lazyLoad")
import MiniRefreshTools from 'minirefresh';
import 'minirefresh/dist/debug/minirefresh.css'
// import elementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(ElementUI)
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// Vue.use(MuseUI)
import vueResource from 'vue-resource'
Vue.use(vueResource)

Vue.use(Router)
var routes = [
{
	path: '/',
	name: 'index',
	component: index
},
{
	path: '/map',
	name: 'map',
	component: map,
	meta: {
		title: '列表页',
		keepAlive: true
	},
    // beforeEnter (to, from, next) {
    //     // let token = Vue.cookie.get('token')
    //     // if (!token || !/\S/.test(token)) {
    //     //   next({ name: 'login' })
    //     // }
    //     console.log('测试',to,from,next);
    //     next({ name: 'HelloWorld' })
    //     next()
    //   }
},
{
	path: '/shoppingCart',
	name: 'shoppingCart',
	component: shoppingCart
},
{
	path: '/details/:id',
	name: 'details',
	component: details
},
{
	path: '/photo',
	name: 'photo',
	component: photo
},
{
	path: '/cashSale',
	name: 'cashSale',
	component: cashSale,
	meta: {
		title: '现货',
		keepAlive: true
	}
},
{
	path: '/boutique',
	name: 'boutique',
	component: boutique,
	meta: {
		title: '精品',
		keepAlive: true
	}
},
{
	path: '/wall',
	name: 'wall',
	component: wall,
	meta: {
		title: '背景墙',
		keepAlive: true
	}
},
{
	path: '/sample',
	name: 'sample',
	component: sample,
	meta: {
		title: '样板商城',
		keepAlive: true
	}
},
{
	path: '/sampleDetail/:id',
	name: 'sampleDetail',
	component: sampleDetail,
},
{
	path: '/SaleDetails/:id',
	name: 'SaleDetails',
	component: SaleDetails
},
{
	path: '/persion',
	name: 'persion',
	component: persion
},
{
	path: '/persionSettings',
	name: 'persionSettings',
	component: persionSettings
},
{
	path: '/search',
	name: 'search',
	component: search
},
{
	path: '/login',
	name: 'login',
	component: login
},
{
	path: '/register',
	name: 'register',
	component: register
},
{
	path: '/protocal',
	name: 'protocal',
	component: protocal
},
{
	path: '/myOrder/:id',
	name: 'myOrder',
	component: myOrder
},
{
	path: '/orderDetails',
	name: 'orderDetails',
	component: orderDetails
},
{
	path: '/changePassword',
	name: 'changePassword',
	component: changePassword
},
{
	path: '/personalMsg',
	name: 'personalMsg',
	component: personalMsg
},
{
	path: '/myDeliveryAddress',
	name: 'myDeliveryAddress',
	component: myDeliveryAddress
}
]
export default new Router({
	mode: 'history',
	routes,
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop
			}
			return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})
