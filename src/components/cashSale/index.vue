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
		<!-- 底部 -->
		<ft :name="$router.currentRoute.name"></ft>
	</div>
</template>
<script type="text/javascript">
import {mapGetters,mapMutations} from 'vuex'
import foot from '@/components/common/footer'
import API from "./../../api"
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
	components:{
		"ft":foot
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
			const $self = this;
			this.pageCurrent = 1;
			API.onsale.search({
					"pageCurrent": $self.pageCurrent,
					"pageSize": 16
				}).then((res) => {
			        $self.pageTotal = res.data.page.totalPage;
					$self.pageCurrent = res.data.page.pageCurrent;
					$self.list = [];
					for(let i = 0; i < res.data.data.list.length ;i++ ){
						$self.list.push(res.data.data.list[i]);
					}
					$self.miniRefresh.endDownLoading(true);
					if($self.pageTotal != $self.pageCurrent){
				  		$self.pageCurrent += 1;
				  	}	
	        });
		},
		upCallback(){
			const $self = this;
			if($self.pageTotal == $self.pageCurrent){
				$self.miniRefresh.endUpLoading(true);
				return false;
			}
			API.onsale.search({
					"pageCurrent": $self.pageCurrent,
					"pageSize": 16
				}).then((res) => {
			        $self.pageTotal = res.data.page.totalPage;
					$self.pageCurrent = res.data.page.pageCurrent;
					for(let i = 0; i < res.data.data.list.length ;i++ ){
						$self.list.push(res.data.data.list[i]);
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
	@import '../../css/cashSale.css'
</style>