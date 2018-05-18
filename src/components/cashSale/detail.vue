<template>
	<div class="saleDetails">
		<div class="header-content">
			<span class="header-back" @click="back"></span>
			<span class="header-text">{{title}}</span>
		</div>
		<div class="swiper-container swiper-container_1">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in detailImgs">
					<img src="../../img/bitmap.png" :data-src="item.imageUrl" class="swiper-img swiper-lazy">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="DetailsMsg">
			<div class="text_name">
				<span class="text_name_1">{{detailsObj.variety}}</span>
				<span class="text_name_2">按件：<b style="color: #f00;">{{detailsObj.salePrice}}</b>元/m²</span>
			</div>
			<p class="DetailsMsg_p">
				编号：{{detailsObj.blockNo}}
			</p>
			<p class="DetailsMsg_p">
				规格：{{detailsObj.length}} * {{detailsObj.width}} * {{detailsObj.thickness}} mm
			</p>
			<p class="DetailsMsg_p">
				数量：{{detailsObj.packetNum}}扎/{{detailsObj.blockSliceNum}}件/{{detailsObj.area}}m²
			</p>
			<p class="DetailsMsg_p">
				销售方式：{{detailsObj.saleMethodName}}
			</p>
		</div>
		<div class="split_line"></div>
		<div class="details_nav">
			<span class="details_navSpan active">详细码单</span>
			<span class="details_navSpan" >同种板材</span>
			<span class="details_navSpan">供应商</span>
		</div>
		<div class="split_line"></div>
		
		<div class="footer">
			<div class="detail-list" id="JDetailList">
				<div class="detail-item contact-detail">
					<div class="contact-button bind-click" id="JContactButton">
						<i class="icon icon-contact"></i>
						<span class="text">联系商家</span>
					</div>
				</div>  
				<div class="detail-item buy-detail">
					<div class="buy-button bind-click" id="JBuyButton">
						<i class="icon icon-buy"></i>
						<span class="text">搜石代购</span>
					</div>
				</div>
				<div class="detail-item collection-detail bind-click">    
					<div class="collection-button bind-click" id="JCollectionButton">
						<i class="icon icon-collection"></i>
						<span class="text">收藏</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapGetters,mapMutations} from 'vuex'
// import API from "./../../api"
import config from "./../../api/api"
import getDataFn from "./../../api/utilAjax"
export default {
	data(){
		return {
			detailImgs:[],
			title:'',
			detailsObj:{},
		}
	},
	beforeCreate(){
		
	},
	activated(){
		
	},
	created(){	
		this.getData();
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		getData(){
			const $self = this;
			// API.onsale.detail({
			// 		"blockId": $self.$route.params.id
			// 	}).then((res) => {
			//         $self.detailImgs = res.data.data.detail.imageInfoList;
			// 		$self.title = res.data.data.detail.variety;
			// 		$self.detailsObj = res.data.data.detail;
			// 		document.title = res.data.data.detail.variety
	  //       });
			getDataFn(config.slabDetail,{"blockId": $self.$route.params.id},function(res){
	            if(res.status.code == 0){
	               	$self.detailImgs = res.data.detail.imageInfoList;
					$self.title = res.data.detail.variety;
					$self.detailsObj = res.data.detail;
					document.title = res.data.detail.variety
	            }
	        })
		},
		_initSwiper() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 3000,//可选选项，自动滑动
				pagination : '.swiper-pagination',
				observer:true, //修改swiper自己或子元素时，自动初始化swiper
    			observeParents:true,//修改swiper的父元素时，自动初始化swiper
    			lazyLoading: true,
			});
		}
	},
	mounted(){
		this._initSwiper();
		$('body').on('click','.details_navSpan',function(){
			$(this).addClass('active').siblings('.details_navSpan').removeClass('active');
		})
	},
	computed:{

	}
}
</script>
<style scoped>
	@import '../../css/SaleDetails.css'
</style>