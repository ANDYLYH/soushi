import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'
import map from '@/components/map/index'
import details from '@/components/map/detail'
import photo from '@/components/photo/index'
import cashSale from '@/components/cashSale/index'
import boutique from '@/components/boutique/index'
import SaleDetails from '@/components/cashSale/detail'
import persion from '@/components/persional/index'
import shoppingCarts from '@/components/persional/shoppingCarts'
import persionSettings from '@/components/persional/persionSettings'
import search from '@/components/map/search'
import wall from '@/components/wall/index'
require("./../plugins/jquery")
import MiniRefreshTools from 'minirefresh';
import 'minirefresh/dist/debug/minirefresh.css'
// import elementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(elementUi)
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
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
	path: '/shoppingCarts',
	name: 'shoppingCarts',
	component: shoppingCarts
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
