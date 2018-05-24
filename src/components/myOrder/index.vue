<template>
	<div class="g-doc hidden" id="Jdoc">
	    <div class="wraper">
		        <div class="container">
		            <div class="check-list" id="JCheckList">
		                <div class="check-item delegate-click" :class="indexNum == 0 ? 'active' : ''" >
		                    <span class="text" @click="tabSelect" data-num="0">全部</span>
		                </div>
		                <div class="check-item delegate-click" :class="indexNum == 1 ? 'active' : ''">
		                    <span class="text" @click="tabSelect" data-num="1">待付款</span>
		                </div>
		                <div class="check-item delegate-click" :class="indexNum == 2 ? 'active' : ''">
		                    <span class="text" @click="tabSelect" data-num="2">待发货</span>
		                </div>
		                <div class="check-item delegate-click" :class="indexNum == 3 ? 'active' : ''">
		                    <span class="text" @click="tabSelect" data-num="3">待收货</span>
		                </div>
		                <div class="check-item delegate-click" :class="indexNum == 4 ? 'active' : ''">
		                    <span class="text" @click="tabSelect" data-num="4">完成</span>
		                </div>
		                <div class="check-item delegate-click" :class="indexNum == -1 ? 'active': ''">
		                    <span class="text" @click="tabSelect" data-num="-1">失效</span>
		                </div>
		            </div>
		        </div>
	        	<div id="minirefresh" class="minirefresh-wrap">
					<div class="minirefresh-scroll">
						<div class=" order-list render-html">
			            	<div class="order-item received" data-item="" data-statusclass="received" v-for="data in orderList">
			            		<div class="item-divider"></div>
				            	<div class="order-title">
				            		<span class="label"> 订单编号：</span>
				            		<span class="number">{{data.id}}</span>
				            		<span class="status">{{data.statusName}}</span>
				            	</div>
				            	<div class="order-content delegate-click">
				            		<div class="pic-text">
				            			<div class="pic-list">
				            				<div class="pic-item pic1">
				            					<img :src="data.detailList[0].templateImage" class="bitmap-img big-pic lazy-loaded" alt="">
				            				</div>
				            			</div>
				            			<div class="txt-wrapper">
				            				<span class="name" v-html="getNameStr(data.detailList)"></span>
				            				<span class="format">规格：{{data.detailList[0].length}}x{{data.detailList[0].width}}x{{data.detailList[0].thickness}}</span>
				            				<span class="surface">表面：{{data.detailList[0].surfaceName}}x{{data.detailList.length}}</span>
				            				<div class="delivery-type">
				            					<span class="text">{{data.deliveryWayName}}</span>
				            				</div>
				            			</div>
				            		</div>
				            	</div>
				            	<div class="commodity">
				            		<span class="order-time">{{data.createTime}}</span>
				            		<div class="text-wrapper">
				            			<span class="text">共{{data.totalNumber}}件商品  合计：</span>
				            			<span class="amount">{{data.totalAmount | priceMsg}}</span>
				            		</div>
				            	</div>
				            	<div class="order-account">
				            		<span class="reason" v-html="data.status == -1 ? '取消原因：'+data.cancelReasonName : ''"></span>
				            		<div class="button-wrapper">
				            			<span class="logistics-button"><router-link :to="{name:'orderDetails'}">订单详情</router-link></span>
				            			<span class="confirm-button" v-if="data.status == 3 ? true : false" @click="collectGoods = true">确认收货</span>
				            		</div>
				            	</div>
				            </div>
						</div>
			        </div>
		    	</div>
	            <div class="result-masker no-data-result-masker" :class="noData ? 'active' : ''" id="JNoDataResultMasker">
	                <div class="pic">
	                    <img src="../../img/no-data.png" alt="">
	                </div>
	                <span class="text">暂无数据</span>
	            </div>
	    </div>

		<div class="confirm-masker " style="z-index: 10000" :class="collectGoods ? 'active' : '' " id="JConfirmMasker">
            <div class="show-masker bind-click"></div>
            <div class="masker-container">
                <div class="masker-box">
                    <div class="title">是否确认收货?</div>
                    <div class="button-list">
                        <div class="button-item cancel-button bind-click" @click="collectGoods = false">取消</div>
                        <div class="button-item confirm-button bind-click" @click="collectGoods = false">确认</div>
                    </div>
                </div>
            </div>
        </div>
	   
	</div>
</template>
<script>
import config from "./../../api/api"
import getDataFn from "./../../api/utilAjax"

	export default {
		data(){
			return {
				indexNum:this.$route.params.id,
				pageCurrent:1,
				pageTotal:0,
				title:'我的订单',
				minirefresh: null,
				orderList:[],
				noData:false,
				collectGoods:false
			}
		},
		methods:{
			downCallback(){
				const self = this;
				this.pageCurrent = 1;
				getDataFn(config.myOrderList,{
					"pageCurrent": self.pageCurrent,
					"pageSize": 16,
					status:self.indexNum
				},
				function(res){
					if(res.status.code == 0){
						self.miniRefresh.endDownLoading(true);
						if(res.data.list.length == 0){
							self.noData = true;
							self.emptyFlag = true;
							self.miniRefresh.refreshOptions(self.getOptionsByStatus('关闭'));
						}else{
							self.noData = false;
							self.emptyFlag = false;
							self.miniRefresh.refreshOptions(self.getOptionsByStatus('启动'));
						}
						if(res.data.list.length == 0){
				      		self.orderList = [];
				      		return ;
				      	}
				        self.pageTotal = res.page.totalPage;
						self.pageCurrent = res.page.pageCurrent;
						self.orderList = [];
						for(let i = 0; i < res.data.list.length ;i++ ){
							self.orderList.push(res.data.list[i]);
						}
						
						if(self.pageTotal != self.pageCurrent){
					  		self.pageCurrent += 1;
					  	}	
					}
				})	
			},
			upCallback(){
				const self = this;
				if(self.pageTotal == self.pageCurrent){
					self.miniRefresh.endUpLoading(true);
					return false;
				}
				getDataFn(config.myOrderList,{
					"pageCurrent": self.pageCurrent,
					"pageSize": 16,
					status:self.indexNum
				},
				function(res){
					if(res.status.code == 0){
						if(res.data.list.length == 0){
							self.noData = true;
							self.emptyFlag = true;
							self.miniRefresh.refreshOptions(self.getOptionsByStatus('关闭'));
						}else{
							self.noData = false;
							self.emptyFlag = false;
							self.miniRefresh.refreshOptions(self.getOptionsByStatus('启动'));
						}
						if(res.data.list.length == 0){
				      		self.orderList = [];
				      		return ;
				      	}
				        self.pageTotal = res.page.totalPage;
						self.pageCurrent = res.page.pageCurrent;
						for(let i = 0; i < res.data.list.length ;i++ ){
							self.orderList.push(res.data.list[i]);
						}
						self.miniRefresh.endUpLoading(self.pageTotal == self.pageCurrent ? true : false);
						if(self.pageTotal != self.pageCurrent){
					  		self.pageCurrent += 1;
					  	}	
					}
				})	
			},
			getOrderMsg(){
				const self = this;
				getDataFn(config.myOrderList,{
					"pageCurrent": self.pageCurrent,
					"pageSize": 16,
					status:self.indexNum
				},
				function(res){
					if(res.status.code == 0){
						if(res.data.list.length == 0){
							self.noData = true;
						}else {
							self.noData = false;
						}
						self.orderList = res.data.list;
					}
				})	
			},
			tabSelect(e){
				this.indexNum = e.target.dataset.num;
				// this.getOrderMsg();
				this.downCallback();
				$('#minirefresh').scrollTop(0);
			},
			getNameStr(obj){
				var str = "";
				for (var i = 0, l = obj.length; i < l; ++i) {
				    if(i == 0){
				    	str += obj[i].stoneName;
				    }else {
				    	str += '、' + obj[i].stoneName;
				    }
				}
				return str;
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
		},
		mounted(){
			// this.getOrderMsg();
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
		filters:{
			priceMsg(value){
				return "¥ " + value;
			}
		}
	}
</script>
<style scoped>
@import '../../css/common.css';
@import '../../css/myOrder/myOrder.css';

.minirefresh-wrap{
	top: 90px;
}
.result-masker{
	padding-top: 140px;
}
.result-masker .pic{
	margin-top: 10px;
}
</style>