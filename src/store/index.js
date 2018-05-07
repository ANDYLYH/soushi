import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		name:'vue-project',
		textShow:false,
		home:true,
		listTop:0,
		cashTop:0,
		list_kindNum:0,
		list_colorNum:0,
		list_countryNum:0,
		list_keyword:''
	},
	mutations:{
		change:function(state){
			state.name = "change";
			state.textShow = ! state.textShow;
		}
	},
	actions:{
		
	},
	getters:{
		name: state => state.name,
		textShow:state => state.textShow,
		home:state => state.home,
		listTop:state => state.listTop,
		cashTop:state => state.cashTop,
		list_kindNum:state => state.list_kindNum,
		list_colorNum:state => state.list_colorNum,
		list_countryNum:state => state.list_countryNum,
		list_keyword:state => state.list_keyword
	}
})
