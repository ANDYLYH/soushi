import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import list from '@/components/list'
import details from '@/components/details'
import photo from '@/components/photo'
import cashSale from '@/components/cashSale'
import SaleDetails from '@/components/SaleDetails'
import persion from '@/components/persion'
import shoppingCarts from '@/components/persional/shoppingCarts'
import persionSettings from '@/components/persional/persionSettings'
import search from '@/components/search'
require("./../api")
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
	name: 'HelloWorld',
	component: HelloWorld
},
{
	path: '/list',
	name: 'list',
	component: list,
	meta: {
		title: '列表页',
		keepAlive: true
	}
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
