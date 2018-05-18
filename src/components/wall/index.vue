<template>
	<div class=" list-content">
		<div class="header-content">
			<div class="listSearchInput">
				<input type="text" name="" class="listSearchInputText"  placeholder="搜索">
				<span class="listSearchInput_iocn" @click=""></span>
				<!-- <span class="clearSearch" @click="clearSearch" v-if="clearSearch_flag">&times</span> -->
			</div>
		</div>
		<div class="ctrl-list" id="JCtrlList">
            <div class="ctrl-item variety-ctrl bind-click" data-index="0">
                <span class="text">品种</span>
                <i class="icon icon-dowm"></i>
            </div>
            <div class="ctrl-item price-ctrl bind-click" data-index="1">
                <span class="text">价格</span>
                <div class="icon-wrapper">
                    <i class="icon icon-price-up"></i>
                    <i class="icon icon-price-dowm"></i>
                </div>
            </div>
            <div class="ctrl-item format-ctrl bind-click" data-index="3">
                <span class="text">筛选</span>
                <i class="icon icon-dowm"></i>
            </div>
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
// import API from "./../../api"
import config from "./../../api/api"
import getDataFn from "./../../api/utilAjax"
export default {
	data(){
		return {
			list:[],
			pageCurrent:1,
			pageTotal:0,
			minirefresh: null,
		}
	},
	components:{
		"ft":foot
	},
	created(){
		
	},
	activated(){
		document.title = "背景图";
		if(this.$store.state.cashTop > 0){
			$('#minirefresh').scrollTop(this.$store.state.cashTop)
		}
	},
	mounted () {
		document.title = "背景图";
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
			// API.onsale.search({
			// 		"pageCurrent": $self.pageCurrent,
			// 		"pageSize": 16,
			// 		"quality": 0
			// 	}).then((res) => {
			//         $self.pageTotal = res.data.page.totalPage;
			// 		$self.pageCurrent = res.data.page.pageCurrent;
			// 		$self.list = [];
			// 		for(let i = 0; i < res.data.data.list.length ;i++ ){
			// 			$self.list.push(res.data.data.list[i]);
			// 		}
			// 		$self.miniRefresh.endDownLoading(true);
			// 		if($self.pageTotal != $self.pageCurrent){
			// 	  		$self.pageCurrent += 1;
			// 	  	}	
	  //       });
			getDataFn(config.queryWallPanel,{
		        "pageCurrent": $self.pageCurrent,
				"pageSize": 8,
				"quality": 2
		      },function(res){
		        $self.pageTotal = res.page.totalPage;
				$self.pageCurrent = res.page.pageCurrent;
				$self.list = [];
				for(let i = 0; i < res.data.list.length ;i++ ){
					$self.list.push(res.data.list[i]);
				}
				$self.miniRefresh.endDownLoading(true);
				if($self.pageTotal != $self.pageCurrent){
			  		$self.pageCurrent += 1;
			  	}	
		      })
		},
		upCallback(){
			const $self = this;
			if($self.pageTotal == $self.pageCurrent){
				$self.miniRefresh.endUpLoading(true);
				return false;
			}
			// API.onsale.search({
			// 		"pageCurrent": $self.pageCurrent,
			// 		"pageSize": 16,
			// 		"quality": 0
			// 	}).then((res) => {
			//         $self.pageTotal = res.data.page.totalPage;
			// 		$self.pageCurrent = res.data.page.pageCurrent;
			// 		for(let i = 0; i < res.data.data.list.length ;i++ ){
			// 			$self.list.push(res.data.data.list[i]);
			// 		}
			// 		$self.miniRefresh.endUpLoading($self.pageTotal == $self.pageCurrent ? true : false);
			// 		if($self.pageTotal != $self.pageCurrent){
			// 	  		$self.pageCurrent += 1;
			// 	  	}
	  //       });
			getDataFn(config.queryWallPanel,{
		        "pageCurrent": $self.pageCurrent,
				"pageSize": 8,
				"quality": 2
		    },function(res){
		        $self.pageTotal = res.page.totalPage;
				$self.pageCurrent = res.page.pageCurrent;
				for(let i = 0; i < res.data.list.length ;i++ ){
					$self.list.push(res.data.list[i]);
				}
				$self.miniRefresh.endUpLoading($self.pageTotal == $self.pageCurrent ? true : false);
				if($self.pageTotal != $self.pageCurrent){
			  		$self.pageCurrent += 1;
			  	}
		    })
		},
		paperScroll(){
			this.$store.state.cashTop = $('#minirefresh').scrollTop();
		}
	},  
}
</script>
<style scoped>
	@import '../../css/cashSale.css';
	@import '../../css/sxh.css';
</style>