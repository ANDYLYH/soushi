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
            <div  class="ctrl-item variety-ctrl bind-click" :class="indexNum == 0 && show == true ? 'active' : ''" data-index="0" >
                <span class="text" @click="clickFn" data-index="0">品种</span>
                <i class="icon icon-dowm"></i>
            </div>
            <div   class="ctrl-item price-ctrl bind-click" :class="priceFilerNum == 1  ? 'active-down' : priceFilerNum == 2 ?'active-up':''" data-index="1">
                <span class="text" @click="clickFn" data-index="1">价格</span>
                <div class="icon-wrapper" >
                    <i class="icon icon-price-up"></i>
                    <i class="icon icon-price-dowm"></i>
                </div>
            </div>
            <div class="ctrl-item format-ctrl bind-click" :class="indexNum == 2 && show == true  ? 'active' : ''" data-index="2">
                <span class="text" @click="clickFn" data-index="2">筛选</span>
                <i class="icon icon-dowm"></i>
            </div>
        </div>
        <ul class="panel-list" id="JPanelList" v-if="show">
            <li class="variety-panel panel-item option-list" :class="indexNum == 0 ? 'active' : ''">
                <span class="option-item delegate-click all" :class="kindName == '' ?'active' : ''" @click="selectKind" data-num="">全部</span>
                <span class="option-item delegate-click" :class="kindName == '爵士白' ?'active' : ''" @click="selectKind" data-num="爵士白">爵士白</span>
                <span class="option-item delegate-click" :class="kindName == '索菲特金' ?'active' : ''" @click="selectKind" data-num="索菲特金">索菲特金</span>
                <span class="option-item delegate-click" :class="kindName == '白玉兰' ?'active' : ''" @click="selectKind" data-num="白玉兰">白玉兰</span>
                <span class="option-item delegate-click" :class="kindName == '浅啡网' ?'active' : ''" @click="selectKind" data-num="浅啡网">浅啡网</span>
                <span class="option-item delegate-click" :class="kindName == '银白龙' ?'active' : ''" @click="selectKind" data-num="银白龙">银白龙</span>
                <span class="option-item delegate-click" :class="kindName == '黑白根' ?'active' : ''" @click="selectKind" data-num="黑白根">黑白根</span>
                <span class="option-item delegate-click" :class="kindName == '银河灰' ?'active' : ''" @click="selectKind" data-num="银河灰">银河灰</span>
                <span class="option-item delegate-click" :class="kindName == '古堡灰' ?'active' : ''" @click="selectKind" data-num="古堡灰">古堡灰</span>
                <span class="option-item delegate-click" :class="kindName == '奥特曼' ?'active' : ''" @click="selectKind" data-num="奥特曼">奥特曼</span>
                <span class="option-item delegate-click" :class="kindName == '芬兰金啡' ?'active' : ''" @click="selectKind" data-num="芬兰金啡">芬兰金啡</span>
                <span class="option-item delegate-click" :class="kindName == '北极光' ?'active' : ''" @click="selectKind" data-num="北极光">北极光</span>
                <span class="option-item delegate-click" :class="kindName == '世纪米黄' ?'active' : ''" @click="selectKind" data-num="世纪米黄">世纪米黄</span>
                <span class="option-item delegate-click" :class="kindName == '雅柏灰' ?'active' : ''" @click="selectKind" data-num="雅柏灰">雅柏灰</span>
                <span class="option-item delegate-click" :class="kindName == '红龙玉' ?'active' : ''" @click="selectKind" data-num="红龙玉">红龙玉</span>
                <span class="option-item delegate-click" :class="kindName == '美尼斯金' ?'active' : ''" @click="selectKind" data-num="美尼斯金">美尼斯金</span>
                <span class="option-item delegate-click" :class="kindName == '黑玫瑰' ?'active' : ''" @click="selectKind" data-num="黑玫瑰">黑玫瑰</span>
                <span class="option-item delegate-click" :class="kindName == '雅典黑金花' ?'active' : ''" @click="selectKind" data-num="雅典黑金花">雅典黑金花</span>
                <span class="option-item delegate-click":class="kindName == '古木纹' ?'active' : ''" @click="selectKind" data-num="古木纹">古木纹</span>
                <span class="option-item delegate-click" :class="kindName == '西西里灰' ?'active' : ''" @click="selectKind" data-num="西西里灰">西西里灰</span>
                <span class="option-item delegate-click" :class="kindName == '新莎安娜' ?'active' : ''" @click="selectKind" data-num="新莎安娜">新莎安娜</span>
                <span class="option-item delegate-click" :class="kindName == '阿富汗黑金花' ?'active' : ''" @click="selectKind" data-num="阿富汗黑金花">阿富汗黑金花</span>
                <span class="option-item delegate-click" :class="kindName == '欧亚木纹' ?'active' : ''" @click="selectKind" data-num="欧亚木纹">欧亚木纹</span>
                <span class="option-item delegate-click" :class="kindName == '圣诞米黄' ?'active' : ''" @click="selectKind" data-num="圣诞米黄">圣诞米黄</span>
            </li>
            <li class="filter-panel panel-item" :class="indexNum == 2 ? ' active' : ''">
                <div class="filter-list">
                    <div class="filter-item price-filter">
                        <div class="filter-title">
                            <span class="text">价格区间</span>
                            <span class="clear-button price-clear-button">
                                清除
                            </span>
                        </div>
                        <div class="filter-content">
                            <input class="input input-min-price" type="text" placeholder="0">
                            <div class="symbol">
                                <span class="to"></span>
                            </div>
                            <input class="input input-max-price" type="text" placeholder="0">
                            <span class="unit">元／m²</span>
                        </div>
                    </div>
                    <div class="filter-item format-filter">
                        <div class="filter-title">
                            <span class="text">规格</span>
                            <span class="clear-button format-clear-button">
                                清除
                            </span>
                        </div>
                        <div class="filter-content">
                            <input class="input input-length" type="text" placeholder="长">
                            <div class="symbol">
                                <span class="multiple">×</span>
                            </div>
                            <input class="input input-width" type="text" placeholder="宽">
                            <div class="symbol">
                                <span class="multiple">×</span>
                            </div>
                            <input class="input input-thickness" type="text" placeholder="厚">
                            <span class="unit">mm</span>
                        </div>
                    </div>
                    <div class="filter-item sale-filter">
                        <div class="filter-title">销售方式</div>
                        <div class="filter-content option-list">
                            <span class="option-item active" data-num="-1">全部</span>
                            <span class="option-item" data-num="0">按颗</span>
                            <span class="option-item" data-num="1">按扎</span>
                            <span class="option-item" data-num="2">按件</span>
                        <span class="option-item delegate-click empty">空</span><span class="option-item delegate-click empty">空</span></div>
                    </div>
                </div>
                <div class="button-bar">
                    <div class="button-list">
                        <div class="button-item reset-button" @click="closeFn">
                            <span class="text">取消</span>
                        </div>
                        <div class="button-item confirm-button">
                            <span class="text">确定</span>
                        </div>
                    </div>
                </div>
            </li>
            <div class="panel-masker active"></div>
        </ul>
        <div class="result-masker no-data-result-masker active" v-if="emptyFlag">
			<div class="pic">
				<img src="../../img/no-data.png" alt="">
			</div>
			<span class="text">暂无数据</span>
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
						<p class="list-text">{{item.saleMethodName}}：
							<span style="color: rgb(226, 56, 59);font-weight: bold;font-size: 24px;" v-if="item.salePrice ? true : false">{{item.salePrice}}</span>
							<span style="color: rgb(226, 56, 59);font-weight: bold;font-size: 24px;" v-if="item.salePrice ? false : true">面议</span> 元/m²
						</p>
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
			indexNum:null,
			show:false,
			priceFilerNum:0,
			kindName:'',
			orderBy:0,
			saleMethod:-1,
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
				"quality": 2,
				orderBy:$self.orderBy,
				saleMethod:$self.saleMethod
		      },function(res){
		      	if(res.data.list.length == 0){
					$self.emptyFlag = true;
					$self.miniRefresh.refreshOptions($self.getOptionsByStatus('关闭'));
				}else{
					$self.emptyFlag = false;
					$self.miniRefresh.refreshOptions($self.getOptionsByStatus('启动'));
				}
		      	if(res.data.list.length == 0){
		      		$self.list = [];
		      		return ;
		      	}
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
				"quality": 2,
				orderBy:$self.orderBy,
				saleMethod:$self.saleMethod
		    },function(res){
		    	if(res.data.list.length == 0){
					$self.emptyFlag = true;
					$self.miniRefresh.refreshOptions($self.getOptionsByStatus('关闭'));
				}else{
					$self.emptyFlag = false;
					$self.miniRefresh.refreshOptions($self.getOptionsByStatus('启动'));
				}
		      	if(res.data.list.length == 0){
		      		$self.list = [];
		      		return ;
		      	}
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
		},
		getOptionsByStatus(statusName){
			return {
				down : {
					isLock : '关闭' == statusName
				},
				up:{
					isLock : '关闭' == statusName
				}
			}
		},
		clickFn(e){
			if(e.target.dataset.index == this.indexNum || this.indexNum == null){
				this.show = !this.show;
			}else{
				this.show = true;
			}

			if(e.target.dataset.index == 1){
				this.show = false;
				this.priceFilerNum++;
				if(this.priceFilerNum == 3){
					this.priceFilerNum = 0;
				}
				this.orderBy = this.priceFilerNum;
				this.downCallback();
				$('#minirefresh').scrollTop(0);
			}
			this.indexNum =parseInt(e.target.dataset.index);
		},
		selectKind(e){
			this.kindName = e.target.dataset.num;
			this.show = false;
			this.downCallback();
			$('#minirefresh').scrollTop(0)
		},
		closeFn(){
			this.show = false;
		}
	},  
}
</script>
<style scoped>
	@import '../../css/cashSale.css';
	@import '../../css/sxh.css';
</style>