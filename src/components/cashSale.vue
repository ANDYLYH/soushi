<template>
	<div class=" list-content">
		<div class="header-content">
			<span class="header-text">{{title}}</span>
		</div>
		<div id="minirefresh" class="minirefresh-wrap" @scroll="paperScroll()">
			<div class="minirefresh-scroll">
				<ul class="listContent_ul">
					<li v-for="item in list" class="list">
						<router-link :to="{name:'SaleDetails',params:{id:item.idString}}">
							<img :src="item.imageUrlList[0]"/>   
						</router-link>
						<p class="list-text list-chineseName">{{item.variety}}</p>
						<p class="list-text">规格：{{item.length}} * {{item.width}} * {{item.thickness}} mm</p>
						<p class="list-text">{{item.saleMethodName}}：{{item.salePrice}} 元/m²</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer">
			<div class="nav-list">
				<div class="nav-item home-nav ">
					<router-link :to="{name: 'HelloWorld'}">
						<i class="icon"></i>
						<span class="text">首页</span>
					</router-link>
				</div>
				<div class="nav-item jp-nav ">
					<router-link :to="{name: 'list'}">
						<i class="icon"></i>
						<span class="text">图库</span>
					</router-link>
				</div>
				<div class="nav-item photo-nav">
					<router-link :to="{name: 'photo'}">
						<i class="icon"></i>
						<span class="text">拍照找石</span>
					</router-link>
				</div>
				<div class="nav-item sxh-nav active">
					<router-link :to="{name: 'cashSale'}">
						<i class="icon"></i>
						<span class="text">现货</span>
					</router-link>
				</div>
				<div class="nav-item personal-nav check-login bind-click">
					<router-link :to="{name: 'persion'}">
						<i class="icon"></i>
						<span class="text">我的</span>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapGetters,mapMutations} from 'vuex'
import api from "./../api/api"
export default {
	data(){
		return {
			list:[],
			pageCurrent:1,
			pageTotal:0,
			title:'大板现货',
			minirefresh: null,
		}
	},
	created(){

	},
	activated(){
		document.title = "大板现货";
		if(this.$store.state.cashTop > 0){
			$('#minirefresh').scrollTop(this.$store.state.cashTop)
		}
	},
	mounted () {
		var self = this;
		self.miniRefresh = new MiniRefresh({
			container: '#minirefresh',
			down: {
				isLock: false,//默认false，不禁止下拉
				callback: self.downCallback
			},
			up: { 
				isAuto: true,
				callback: self.upCallback
			}
		});
	},
	methods: {
		downCallback(){
			console.log('downCallback');
			const $self = this;
			this.pageCurrent = 1;
			$self.$http.get(api.onsale_query,
			{
				params:{
					"pageCurrent": $self.pageCurrent,
					"pageSize": 16
				},
			}).then(function(res){
				$self.pageTotal = res.body.page.totalPage;
				$self.pageCurrent = res.body.page.pageCurrent;
				$self.list = [];
				for(let i = 0; i < res.body.data.list.length ;i++ ){
					$self.list.push(res.body.data.list[i]);
				}
				$self.miniRefresh.endDownLoading(true);
				if($self.pageTotal != $self.pageCurrent){
			  		$self.pageCurrent += 1;
			  	}
			});
		},
		upCallback(){
			console.log('upCallback');
			const $self = this;
			if($self.pageTotal == $self.pageCurrent){
				$self.miniRefresh.endUpLoading(true);
				return false;
			}
			this.$http.get(api.onsale_query,
			{
				params:{
					"pageCurrent": $self.pageCurrent,
					"pageSize": 16
				},
			}).then(function(res){
				$self.pageTotal = res.body.page.totalPage;
				$self.pageCurrent = res.body.page.pageCurrent;
				for(let i = 0; i < res.body.data.list.length ;i++ ){
					$self.list.push(res.body.data.list[i]);
				}
				$self.miniRefresh.endUpLoading($self.pageTotal == $self.pageCurrent ? true : false);
				if($self.pageTotal != $self.pageCurrent){
			  		$self.pageCurrent += 1;
			  	}
			});
		},
		paperScroll(){
			this.$store.state.cashTop = $('#minirefresh').scrollTop();
		}
	},  
}
</script>
<style scoped>
	@import '../css/cashSale.css'
</style>