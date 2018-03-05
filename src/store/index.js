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
		cashTop:state => state.cashTop
	}
})
