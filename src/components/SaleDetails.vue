<template>
	<div class="saleDetails">
		<div class="header-content">
			<span class="header-back" @click="back"></span>
			<span class="header-text">{{title}}</span>
		</div>
		<div class="swiper-container swiper-container_1">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in detailImgs">
					<img :src="item.imageUrl" class="swiper-img">
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
import api from "./../api/api"
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
			this.$http.get(api.onsale_detail,
			{
				params:{
					"blockId": $self.$route.params.id,
				},
			}).then(function(res){
				$self.detailImgs = res.body.data.detail.imageInfoList;
				$self.title = res.body.data.detail.variety;
				$self.detailsObj = res.body.data.detail;
				document.title = res.body.data.detail.variety
			});
		},
		_initSwiper() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 5000,//可选选项，自动滑动
				pagination : '.swiper-pagination',
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
		...mapGetters([
			'name',
			"textShow",
			"home"
			])
	}
}
</script>
<style scoped>
	@import '../css/SaleDetails.css'
</style>